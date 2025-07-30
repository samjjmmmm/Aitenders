import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";
import { generateAitendersResponse } from "./openai";
import { ragService } from "./rag-service";
import fs from 'fs';
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
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
      
      // Route the query using the new configuration system
      const routing = ragService.routeQuery(message, language);
      
      switch (routing.action) {
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
          if (routing.category) {
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
  app.post('/api/rag/test', (req, res) => {
    try {
      const { query, language = 'fr' } = req.body;
      
      if (!query) {
        return res.status(400).json({ message: "Query is required" });
      }

      const routing = ragService.routeQuery(query, language);
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

  const httpServer = createServer(app);
  return httpServer;
}
