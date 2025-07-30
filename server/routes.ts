import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";
import { generateAitendersResponse } from "./openai";
import { ragService } from "./rag-service";

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
      
      try {
        // Try OpenAI first
        aiResponse = await generateAitendersResponse(message, language);
      } catch (openaiError) {
        console.warn("OpenAI failed, using fallback:", openaiError instanceof Error ? openaiError.message : 'Unknown error');
        // Use fallback knowledge base
        aiResponse = getFallbackResponse(message, language);
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

  const httpServer = createServer(app);
  return httpServer;
}
