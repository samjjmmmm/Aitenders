import { type User, type InsertUser, type ContactRequest, type InsertContactRequest, type ChatMessage, type InsertChatMessage, type EmailLog, type InsertEmailLog, type SimulatorSession, type InsertSimulatorSession } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  updateContactRequest(id: string, updates: Partial<ContactRequest>): Promise<ContactRequest | undefined>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(): Promise<ChatMessage[]>;
  clearChatMessages(): Promise<void>;
  getChatMessagesBySession(sessionId: string): Promise<ChatMessage[]>;
  createChatMessageWithSession(message: InsertChatMessage, sessionId: string): Promise<ChatMessage>;
  clearSessionMessages(sessionId: string): Promise<void>;
  createEmailLog(emailLog: InsertEmailLog): Promise<EmailLog>;
  getEmailLogs(): Promise<EmailLog[]>;
  updateEmailLog(id: string, updates: Partial<EmailLog>): Promise<EmailLog | undefined>;
  createSimulatorSession(session: InsertSimulatorSession): Promise<SimulatorSession>;
  updateSimulatorSession(sessionId: string, updates: Partial<SimulatorSession>): Promise<SimulatorSession | undefined>;
  getSimulatorSession(sessionId: string): Promise<SimulatorSession | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private chatMessages: Map<string, ChatMessage>;
  private sessionMessages: Map<string, ChatMessage[]>;
  private sessionLastActivity: Map<string, number>;
  private emailLogs: Map<string, EmailLog>;
  private simulatorSessions: Map<string, SimulatorSession>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.chatMessages = new Map();
    this.sessionMessages = new Map();
    this.sessionLastActivity = new Map();
    this.emailLogs = new Map();
    this.simulatorSessions = new Map();

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
      firstName: insertRequest.firstName ?? null,
      lastName: insertRequest.lastName ?? null,
      phone: insertRequest.phone ?? null,
      website: insertRequest.website ?? null,
      useCase: insertRequest.useCase ?? null,
      industry: insertRequest.industry ?? null,
      requestType: insertRequest.requestType ?? "contact",
      hubspotContactId: null,
      hubspotDealId: null,
      emailSent: "pending",
      createdAt: new Date() 
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async updateContactRequest(id: string, updates: Partial<ContactRequest>): Promise<ContactRequest | undefined> {
    const existing = this.contactRequests.get(id);
    if (!existing) return undefined;

    const updated = { ...existing, ...updates };
    this.contactRequests.set(id, updated);
    return updated;
  }

  async createEmailLog(insertEmailLog: InsertEmailLog): Promise<EmailLog> {
    const id = randomUUID();
    const emailLog: EmailLog = {
      ...insertEmailLog,
      id,
      status: insertEmailLog.status ?? "pending",

      errorMessage: insertEmailLog.errorMessage ?? null,
      sentAt: null,
      createdAt: new Date()
    };
    this.emailLogs.set(id, emailLog);
    return emailLog;
  }

  async getEmailLogs(): Promise<EmailLog[]> {
    return Array.from(this.emailLogs.values());
  }

  async updateEmailLog(id: string, updates: Partial<EmailLog>): Promise<EmailLog | undefined> {
    const existing = this.emailLogs.get(id);
    if (!existing) return undefined;

    const updated = { ...existing, ...updates };
    this.emailLogs.set(id, updated);
    return updated;
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

  async createSimulatorSession(insertSession: InsertSimulatorSession): Promise<SimulatorSession> {
    const id = randomUUID();
    const session: SimulatorSession = {
      ...insertSession,
      id,
      hubspotContactId: insertSession.hubspotContactId ?? null,
      hubspotDealId: insertSession.hubspotDealId ?? null,
      userName: insertSession.userName ?? null,
      userEmail: insertSession.userEmail ?? null,
      userCompany: insertSession.userCompany ?? null,
      calculatedResults: insertSession.calculatedResults ?? null,
      completed: insertSession.completed ?? false,
      completedAt: null,
      startedAt: new Date(),
      createdAt: new Date()
    };
    this.simulatorSessions.set(insertSession.sessionId, session);
    return session;
  }

  async updateSimulatorSession(sessionId: string, updates: Partial<SimulatorSession>): Promise<SimulatorSession | undefined> {
    const existing = this.simulatorSessions.get(sessionId);
    if (!existing) return undefined;

    const updated = { ...existing, ...updates };
    this.simulatorSessions.set(sessionId, updated);
    return updated;
  }

  async getSimulatorSession(sessionId: string): Promise<SimulatorSession | undefined> {
    return this.simulatorSessions.get(sessionId);
  }

  async getAllSimulatorSessions(): Promise<SimulatorSession[]> {
    return Array.from(this.simulatorSessions.values());
  }
}

export const storage = new MemStorage();