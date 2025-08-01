import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";
import { generateAitendersResponse } from "./openai";
import { ragService } from "./rag-service";
import { hubspotService } from "./hubspot-service";

import fs from 'fs';
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Enhanced contact form submission with HubSpot integration
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      
      // Create contact request in database
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Prepare HubSpot contact data
      const hubspotContactData = {
        email: validatedData.email,
        firstName: validatedData.firstName || undefined,
        lastName: validatedData.lastName || undefined,
        company: validatedData.company || undefined,
        phone: validatedData.phone || undefined,
        website: validatedData.website || undefined,
        message: validatedData.message,
        useCase: validatedData.useCase || undefined,
        industry: validatedData.industry || undefined,
      };
      
      // Create/update contact in HubSpot and send emails
      try {
        const hubspotContact = await hubspotService.createOrUpdateContact(hubspotContactData);
        
        // Send notification email to team
        await hubspotService.sendNotificationEmail(hubspotContactData, (validatedData.requestType || 'contact') as 'contact' | 'demo' | 'support');
        
        // Send confirmation email to user
        await hubspotService.sendConfirmationEmail(hubspotContactData, (validatedData.requestType || 'contact') as 'contact' | 'demo' | 'support');
        
        // Update contact request with HubSpot ID
        await storage.updateContactRequest(contactRequest.id, {
          hubspotContactId: hubspotContact.id,
          emailSent: 'sent'
        });
        
        console.log(`Contact created in HubSpot: ${hubspotContact.id} for ${validatedData.email}`);
      } catch (hubspotError) {
        console.error('HubSpot integration error:', hubspotError);
        // Update contact request as failed but don't fail the entire request
        await storage.updateContactRequest(contactRequest.id, {
          emailSent: 'failed'
        });
      }
      
      res.json({ success: true, id: contactRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact request" });
      }
    }
  });

  // Get all contact requests
  app.get("/api/contact", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact requests" });
    }  
  });

  // Mailing system endpoints
  
  // Create and send emails manually
  app.post("/api/mailing/send", async (req, res) => {
    try {
      const { to, subject, type, contactData } = req.body;
      
      if (!to || !subject || !type) {
        return res.status(400).json({ message: "Missing required fields: to, subject, type" });
      }

      // Send email based on type
      let success = false;
      if (type === 'notification') {
        success = await hubspotService.sendNotificationEmail(contactData, 'contact');
      } else if (type === 'confirmation') {
        success = await hubspotService.sendConfirmationEmail(contactData, 'contact');
      }

      // Log email attempt
      await storage.createEmailLog({
        to,
        from: 'noreply@aitenders.com',
        subject,
        content: JSON.stringify(contactData),
        type,
        status: success ? 'sent' : 'failed',
      });

      res.json({ success, message: success ? 'Email sent successfully' : 'Failed to send email' });
    } catch (error) {
      console.error('Manual email send error:', error);
      res.status(500).json({ message: "Failed to send email" });
    }
  });

  // Get email logs
  app.get("/api/mailing/logs", async (req, res) => {
    try {
      const logs = await storage.getEmailLogs();
      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch email logs" });
    }
  });

  // Retry failed email
  app.post("/api/mailing/retry/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const logs = await storage.getEmailLogs();
      const emailLog = logs.find(log => log.id === id);
      
      if (!emailLog) {
        return res.status(404).json({ message: "Email log not found" });
      }

      // Parse contact data from content
      const contactData = JSON.parse(emailLog.content);
      
      // Retry sending based on type
      let success = false;
      if (emailLog.type === 'notification') {
        success = await hubspotService.sendNotificationEmail(contactData, 'contact');
      } else if (emailLog.type === 'confirmation') {
        success = await hubspotService.sendConfirmationEmail(contactData, 'contact');
      }

      // Update log status
      await storage.updateEmailLog(id, {
        status: success ? 'sent' : 'failed',
        sentAt: success ? new Date() : null,
        errorMessage: success ? null : 'Retry failed'
      });

      res.json({ success, message: success ? 'Email resent successfully' : 'Retry failed' });
    } catch (error) {
      console.error('Email retry error:', error);
      res.status(500).json({ message: "Failed to retry email" });
    }
  });

  // HubSpot contact creation endpoint
  app.post("/api/hubspot/contact", async (req, res) => {
    try {
      const contactData = req.body;
      const hubspotContact = await hubspotService.createOrUpdateContact(contactData);
      res.json({ success: true, contact: hubspotContact });
    } catch (error) {
      console.error('HubSpot contact creation error:', error);
      res.status(500).json({ message: "Failed to create HubSpot contact" });
    }
  });

  // HubSpot deal creation endpoint
  app.post("/api/hubspot/deal", async (req, res) => {
    try {
      const { contactData, dealName, amount } = req.body;
      const deal = await hubspotService.createDeal(contactData, dealName, amount);
      res.json({ success: true, deal });
    } catch (error) {
      console.error('HubSpot deal creation error:', error);
      res.status(500).json({ message: "Failed to create HubSpot deal" });
    }
  });

  // Enhanced RAG-based fallback response
  const getFallbackResponse = (message: string, language: 'fr' | 'en' = 'fr'): string => {
    return ragService.generateResponse(message, language);
  };

  // Generate session ID from browser fingerprint sent by client
  const getSessionId = (req: any) => {
    // Get fingerprint from request header or body
    const fingerprint = req.headers['x-browser-fingerprint'] || req.body.fingerprint;
    if (fingerprint) {
      return fingerprint;
    }
    
    // Fallback to IP + user agent for older sessions
    const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
    const userAgent = req.get('User-Agent') || 'unknown';
    return `legacy_${ip}_${Buffer.from(userAgent).toString('base64').slice(0, 20)}`;
  };

  // Chat message submission with OpenAI integration and fallback
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, language = 'fr', fingerprint } = req.body;
      const sessionId = getSessionId(req);
      
      // Add fingerprint to headers for future requests
      if (fingerprint) {
        req.headers['x-browser-fingerprint'] = fingerprint;
      }
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ message: "Message is required" });
      }

      let aiResponse: string;
      
      // Route the query using the new configuration system with session ID for simulator
      const routing = await ragService.routeQuery(message, language, sessionId);
      
      switch (routing.action) {
        case 'advanced_analysis_two_messages':
          // Special case: split into presentation and question
          const fullResponse = routing.response!;
          const parts = fullResponse.split('---');
          const presentation = parts[0].trim();
          const question = parts[1].trim();
          
          // Save first message (presentation)
          const presentationData = insertChatMessageSchema.parse({
            message: message,
            response: presentation
          });
          await storage.createChatMessageWithSession(presentationData, sessionId);
          
          // Save second message (question) 
          const questionData = insertChatMessageSchema.parse({
            message: '',
            response: question
          });
          const finalMessage = await storage.createChatMessageWithSession(questionData, sessionId);
          return res.json(finalMessage);
          
        case 'advanced_analysis_offer':
        case 'advanced_analysis_start':
        case 'advanced_analysis_continue':
        case 'advanced_analysis_completed':
        case 'advanced_analysis_error':
          aiResponse = routing.response!;
          break;
        case 'blocked':
          aiResponse = routing.response!;
          break;
          
        case 'openai_direct':
          try {
            aiResponse = await generateAitendersResponse(message, language);
          } catch (openaiError) {
            console.warn("OpenAI failed for direct call:", openaiError instanceof Error ? openaiError.message : 'Unknown error');
            aiResponse = getFallbackResponse(message, language);
          }
          break;
          
        case 'knowledge_base':
          // Check if we have a custom response from routing (like use cases)
          if (routing.response) {
            aiResponse = routing.response;
          } else if (routing.category) {
            // Search specific category
            const categoryResults = ragService.searchByCategory(message, routing.category, 2);
            if (categoryResults.length > 0) {
              aiResponse = categoryResults[0].chunk.content;
              if (categoryResults.length > 1 && categoryResults[1].relevance !== 'low') {
                aiResponse += '\n\n---\n\n' + categoryResults[1].chunk.content;
              }
            } else {
              aiResponse = ragService.generateResponse(message, language);
            }
          } else {
            // Use general knowledge base search
            aiResponse = ragService.generateResponse(message, language);
          }
          break;
          
        default:
          
          // Fallback to OpenAI then knowledge base
          try {
            aiResponse = await generateAitendersResponse(message, language);
          } catch (openaiError) {
            console.warn("OpenAI failed, using fallback:", openaiError instanceof Error ? openaiError.message : 'Unknown error');
            aiResponse = getFallbackResponse(message, language);
          }
      }
      
      // Save both user message and AI response with session
      const validatedData = insertChatMessageSchema.parse({
        message: message,
        response: aiResponse
      });
      
      const chatMessage = await storage.createChatMessageWithSession(validatedData, sessionId);
      res.json(chatMessage);
    } catch (error) {
      console.error("Chat API Error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid message data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to process chat message" });
      }
    }
  });

  // Get chat messages for current session
  app.get("/api/chat", async (req, res) => {
    try {
      const sessionId = getSessionId(req);
      const messages = await storage.getChatMessagesBySession(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat messages" });
    }
  });

  // Clear specific session endpoint
  app.post("/api/chat/clear", async (req, res) => {
    try {
      const { fingerprint } = req.body;
      const sessionId = fingerprint || getSessionId(req);
      await storage.clearSessionMessages(sessionId); // Clear only this session
      res.json({ message: "Session cleared successfully", sessionId });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear session" });
    }
  });

  // RAG Knowledge base statistics
  app.get("/api/rag/stats", async (req, res) => {
    try {
      const stats = ragService.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch RAG stats" });
    }
  });

  // RAG Configuration testing endpoint
  app.post('/api/rag/test', async (req, res) => {
    try {
      const { query, language = 'fr' } = req.body;
      
      if (!query) {
        return res.status(400).json({ message: "Query is required" });
      }

      const routing = await ragService.routeQuery(query, language);
      const searchResults = ragService.search(query, 3);
      
      res.json({
        query,
        language,
        routing,
        searchResults: searchResults.map(r => ({
          category: r.chunk.metadata.category,
          score: r.score,
          relevance: r.relevance,
          preview: r.chunk.content.substring(0, 100) + '...'
        })),
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error testing RAG routing:", error);
      res.status(500).json({ message: "Failed to test RAG routing" });
    }
  });

  // Copy tracking endpoint
  app.post("/api/copy-tracking", (req, res) => {
    try {
      const { email, content, fingerprint } = req.body;
      
      // Log copy activity (could be stored in database later)
      console.log('Copy tracking:', {
        email: email,
        contentPreview: content,
        fingerprint: fingerprint?.slice(0, 8) + '...',
        timestamp: new Date().toISOString()
      });
      
      res.json({ success: true, message: 'Copy tracked successfully' });
    } catch (error) {
      res.status(500).json({ message: "Failed to track copy" });
    }
  });

  // Simulator configuration endpoints
  app.get('/api/simulator/config', (req, res) => {
    try {
      const configPath = path.join(__dirname, 'simulator-config.json');
      const data = fs.readFileSync(configPath, 'utf8');
      const config = JSON.parse(data);
      res.json(config);
    } catch (error) {
      console.error('Error loading simulator config:', error);
      res.status(500).json({ message: 'Failed to load simulator configuration' });
    }
  });

  app.put('/api/simulator/config', (req, res) => {
    try {
      const configPath = path.join(__dirname, 'simulator-config.json');
      const newConfig = {
        ...req.body,
        metadata: {
          ...req.body.metadata,
          lastUpdated: new Date().toISOString()
        }
      };
      
      fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2));
      res.json({ message: 'Configuration saved successfully', config: newConfig });
    } catch (error) {
      console.error('Error saving simulator config:', error);
      res.status(500).json({ message: 'Failed to save simulator configuration' });
    }
  });

  // Simulator calculation endpoint
  app.post('/api/simulator/calculate', (req, res) => {
    try {
      const { answers } = req.body;
      
      // Load current configuration
      const configPath = path.join(__dirname, 'simulator-config.json');
      const data = fs.readFileSync(configPath, 'utf8');
      const config = JSON.parse(data);
      
      // Process answers and apply mapping
      const processedAnswers: Record<string, number> = {};
      
      config.questions.forEach((question: any) => {
        const answer = answers[question.id];
        if (answer !== undefined) {
          if (question.type === 'select' && question.mapping) {
            processedAnswers[question.id] = question.mapping[answer] || 0;
          } else if (question.type === 'boolean') {
            processedAnswers[question.id] = answer ? 1 : 0;
          } else {
            processedAnswers[question.id] = parseFloat(answer) || 0;
          }
        }
      });
      
      // Calculate results based on rules
      const results: Record<string, number> = {};
      const calculationOrder = config.calculationRules
        .filter((rule: any) => rule.active)
        .sort((a: any, b: any) => parseInt(a.id) - parseInt(b.id));
      
      calculationOrder.forEach((rule: any) => {
        try {
          // Simple formula evaluation (replace with proper evaluator in production)
          let formula = rule.formula;
          
          // Replace question references
          Object.keys(processedAnswers).forEach(qId => {
            const regex = new RegExp(`questions\\.${qId}`, 'g');
            formula = formula.replace(regex, processedAnswers[qId].toString());
          });
          
          // Replace calculation rule references
          Object.keys(results).forEach(rId => {
            const regex = new RegExp(`calculationRules\\.${rId}`, 'g');
            formula = formula.replace(regex, results[rId].toString());
          });
          
          // Evaluate the formula (basic math operations only)
          const result = eval(formula);
          results[rule.id] = isNaN(result) ? 0 : Math.round(result * 100) / 100;
        } catch (error) {
          console.error(`Error calculating rule ${rule.id}:`, error);
          results[rule.id] = 0;
        }
      });
      
      // Format results for response
      const formattedResults = calculationOrder.map((rule: any) => ({
        id: rule.id,
        name: rule.name,
        value: results[rule.id],
        unit: rule.outputUnit,
        description: rule.description
      }));
      
      res.json({
        results: formattedResults,
        summary: {
          totalSavings: results['3'] || 0,
          additionalRevenue: results['5'] || 0,
          roi: results['6'] || 0,
          timestamp: new Date().toISOString()
        }
      });
      
    } catch (error) {
      console.error('Error calculating simulator results:', error);
      res.status(500).json({ message: 'Failed to calculate results' });
    }
  });

  // Simulator user info submission
  app.post("/api/simulator/user-info", async (req, res) => {
    try {
      const { name, email, company, fingerprint } = req.body;
      const sessionId = getSessionId(req);
      
      if (!name || !email || !company) {
        return res.status(400).json({ message: "Name, email, and company are required" });
      }

      const userInfo = { name, email, company };
      const result = await simulatorService.processUserInfo(sessionId, userInfo);
      
      if (result.success && result.reportData) {
        // Send the ROI report email
        try {
          await hubspotService.sendROIReport(result.reportData);
          
          res.json({ 
            success: true, 
            message: result.message,
            reportSent: true,
            hubspotContactId: result.reportData.hubspotContactId,
            hubspotDealId: result.reportData.hubspotDealId
          });
        } catch (emailError) {
          console.error('Failed to send ROI report:', emailError);
          res.json({ 
            success: true, 
            message: result.message,
            reportSent: false,
            warning: "Rapport généré mais l'envoi email a échoué",
            hubspotContactId: result.reportData.hubspotContactId,
            hubspotDealId: result.reportData.hubspotDealId
          });
        }
      } else {
        res.status(400).json({ success: false, message: result.message });
      }
    } catch (error) {
      console.error('Simulator user info error:', error);
      res.status(500).json({ message: "Failed to process user information" });
    }
  });

  // Get simulator session info
  app.get("/api/simulator/session/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const sessionInfo = simulatorService.getSessionInfo(sessionId);
      
      if (!sessionInfo) {
        return res.status(404).json({ message: "Session not found" });
      }
      
      res.json(sessionInfo);
    } catch (error) {
      console.error('Simulator session info error:', error);
      res.status(500).json({ message: "Failed to fetch session info" });
    }
  });

  // Get all simulator sessions from database
  app.get("/api/simulator/sessions", async (req, res) => {
    try {
      const sessions = await storage.getAllSimulatorSessions();
      res.json(sessions);
    } catch (error) {
      console.error('Error fetching simulator sessions:', error);
      res.status(500).json({ message: "Failed to fetch simulator sessions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
