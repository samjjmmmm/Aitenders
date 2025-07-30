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

  // Fallback knowledge base for when OpenAI fails
  const getFallbackResponse = (message: string, language: 'fr' | 'en' = 'fr'): string => {
    const knowledgeBase = {
      fr: {
        security: {
          keywords: ["sécurité", "security", "données", "rgpd", "gdpr", "protection", "chiffrement"],
          response: "🛡️ **Sécurité by Design chez Aitenders**\n\n• **Chiffrement end-to-end** : Toutes vos données sont chiffrées en transit et au repos\n• **Conformité RGPD** : Respect strict de la réglementation européenne  \n• **Hébergement sécurisé** : Serveurs européens certifiés ISO 27001\n• **Contrôles d'accès granulaires** : Permissions par rôle et projet\n• **Pistes d'audit complètes** : Traçabilité de toutes les actions\n• **Sauvegarde automatique** : Vos données sont protégées en permanence"
        },
        usecases: {
          keywords: ["cas d'usage", "use case", "cas", "usage", "scénarios", "fonctionnalités"],
          response: "📋 **Cas d'Usage Aitenders**\n\n**Par Phase :**\n• **Offre** : Analyse des DCE, extraction d'exigences, estimation des coûts\n• **Exécution** : Suivi des jalons, gestion des risques, pilotage multi-projets\n• **Rédaction** : Génération automatique de réponses, vérification conformité\n\n**Par Complexité :**\n• **UC1 - Petits projets** : Appels d'offres simples, processus accéléré\n• **UC3 - Projets complexes** : Multi-lots, coordination équipes, conformité réglementaire"
        },
        roi: {
          keywords: ["roi", "retour", "investissement", "bénéfices", "économies", "gains", "calcul"],
          response: "💰 **Retour sur Investissement Aitenders**\n\n**Gains mesurables :**\n• **-60% temps de préparation** des offres\n• **+40% taux de succès** aux appels d'offres\n• **-30% erreurs de conformité**\n• **+25% productivité équipes**\n\n**Calcul personnalisé :**\n• Économies en temps : 15-20h/offre récupérées\n• Coût moyen évité : 8-12k€ par erreur non-conformité\n• ROI moyen : 300-450% première année"
        },
        agents: {
          keywords: ["agents", "ia", "ai", "intelligence", "artificielle", "automatisation"],
          response: "🤖 **Agents IA Aitenders**\n\n**Agent Analyseur** :\n• Extraction automatique des exigences techniques\n• Identification des critères de sélection\n• Détection des pièges contractuels\n\n**Agent Rédacteur** :\n• Génération de réponses personnalisées\n• Adaptation au style et aux contraintes\n• Vérification cohérence multi-documents"
        },
        contact: {
          keywords: ["contact", "démonstration", "demo", "équipe", "expert", "aide"],
          response: "📞 **Contactez Notre Équipe**\n\n**Démonstration personnalisée :**\n• Session de 30min adaptée à vos besoins\n• Découverte de vos cas d'usage spécifiques\n• Simulation sur vos documents réels\n\n**Contact :** contact@aitenders.com\n**Planning :** Disponible sous 24h"
        }
      },
      en: {
        security: {
          keywords: ["security", "data", "gdpr", "protection", "encryption"],
          response: "🛡️ **Security by Design at Aitenders**\n\n• **End-to-end encryption**: All data encrypted in transit and at rest\n• **GDPR compliance**: Strict adherence to European regulations\n• **Secure hosting**: ISO 27001 certified European servers\n• **Granular access controls**: Role and project-based permissions\n• **Complete audit trails**: Full traceability of all actions"
        },
        usecases: {
          keywords: ["use case", "cases", "scenarios", "features"],
          response: "📋 **Aitenders Use Cases**\n\n**By Phase:**\n• **Bidding**: DCE analysis, requirements extraction, cost estimation\n• **Execution**: Milestone tracking, risk management, multi-project control\n• **Writing**: Automatic response generation, compliance verification"
        }
      }
    };

    const lowerMessage = message.toLowerCase();
    
    for (const [category, data] of Object.entries(knowledgeBase[language])) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }
    
    return language === 'fr' 
      ? "Je peux vous aider avec des questions sur la sécurité, les cas d'usage, le ROI, les agents IA ou pour vous mettre en contact avec notre équipe. Reformulez votre question ou utilisez les boutons ci-dessous."
      : "I can help you with questions about security, use cases, ROI, AI agents, or connecting you with our team. Rephrase your question or use the buttons below.";
  };

  // Generate session ID based on IP and user agent
  const generateSessionId = (req: any) => {
    const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
    const userAgent = req.get('User-Agent') || 'unknown';
    return `${ip}_${Buffer.from(userAgent).toString('base64').slice(0, 20)}`;
  };

  // Chat message submission with OpenAI integration and fallback
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, language = 'fr', clearSession } = req.body;
      const sessionId = generateSessionId(req);
      
      // Clear session if requested or if it's a new session
      if (clearSession) {
        await storage.clearChatMessages();
        return res.json({ message: "Session cleared" });
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
      const sessionId = generateSessionId(req);
      const messages = await storage.getChatMessagesBySession(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat messages" });
    }
  });

  // Clear session endpoint
  app.post("/api/chat/clear", async (req, res) => {
    try {
      await storage.clearChatMessages();
      res.json({ message: "Chat cleared successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear chat" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
