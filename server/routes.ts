import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";
import { generateAitendersResponse } from "./openai";

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

  // Chat message submission with OpenAI integration
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, language = 'fr' } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ message: "Message is required" });
      }

      // Generate AI response using OpenAI
      const aiResponse = await generateAitendersResponse(message, language);
      
      // Save both user message and AI response
      const validatedData = insertChatMessageSchema.parse({
        message: message,
        response: aiResponse
      });
      
      const chatMessage = await storage.createChatMessage(validatedData);
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

  // Get chat messages
  app.get("/api/chat", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
