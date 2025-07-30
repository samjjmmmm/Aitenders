import { type User, type InsertUser, type ContactRequest, type InsertContactRequest, type ChatMessage, type InsertChatMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(): Promise<ChatMessage[]>;
  clearChatMessages(): Promise<void>;
  getChatMessagesBySession(sessionId: string): Promise<ChatMessage[]>;
  createChatMessageWithSession(message: InsertChatMessage, sessionId: string): Promise<ChatMessage>;
  clearSessionMessages(sessionId: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private chatMessages: Map<string, ChatMessage>;
  private sessionMessages: Map<string, ChatMessage[]>;
  private sessionLastActivity: Map<string, number>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.chatMessages = new Map();
    this.sessionMessages = new Map();
    this.sessionLastActivity = new Map();
    
    // Clean inactive sessions every 5 minutes
    setInterval(() => {
      this.cleanInactiveSessions();
    }, 5 * 60 * 1000);
  }

  // Clean sessions inactive for more than 30 minutes
  private cleanInactiveSessions(): void {
    const now = Date.now();
    const inactiveThreshold = 30 * 60 * 1000; // 30 minutes
    const sessionIds = Array.from(this.sessionLastActivity.keys());

    for (const sessionId of sessionIds) {
      const lastActivity = this.sessionLastActivity.get(sessionId);
      if (lastActivity && now - lastActivity > inactiveThreshold) {
        this.sessionMessages.delete(sessionId);
        this.sessionLastActivity.delete(sessionId);
        console.log(`Cleaned inactive session: ${sessionId}`);
      }
    }
  }

  // Clear all chat messages
  async clearChatMessages(): Promise<void> {
    this.chatMessages.clear();
    this.sessionMessages.clear();
  }

  // Get messages for a specific session
  async getChatMessagesBySession(sessionId: string): Promise<ChatMessage[]> {
    return this.sessionMessages.get(sessionId) || [];
  }

  // Create message with session tracking
  async createChatMessageWithSession(insertMessage: InsertChatMessage, sessionId: string): Promise<ChatMessage> {
    const id = randomUUID();
    const message: ChatMessage = { 
      ...insertMessage, 
      id, 
      response: insertMessage.response ?? null,
      createdAt: new Date() 
    };
    
    // Store in global messages
    this.chatMessages.set(id, message);
    
    // Store in session-specific messages
    if (!this.sessionMessages.has(sessionId)) {
      this.sessionMessages.set(sessionId, []);
    }
    this.sessionMessages.get(sessionId)!.push(message);
    
    // Update session activity
    this.sessionLastActivity.set(sessionId, Date.now());
    
    return message;
  }

  // Clear messages for a specific session only
  async clearSessionMessages(sessionId: string): Promise<void> {
    if (this.sessionMessages.has(sessionId)) {
      this.sessionMessages.delete(sessionId);
      this.sessionLastActivity.delete(sessionId);
      console.log(`Cleared messages for session: ${sessionId}`);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const request: ContactRequest = { 
      ...insertRequest, 
      id, 
      company: insertRequest.company ?? null,
      createdAt: new Date() 
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = randomUUID();
    const message: ChatMessage = { 
      ...insertMessage, 
      id, 
      response: insertMessage.response ?? null,
      createdAt: new Date() 
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatMessages(): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values());
  }
}

export const storage = new MemStorage();
