import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  website: text("website"),
  message: text("message").notNull(),
  useCase: text("use_case"),
  industry: text("industry"),
  requestType: text("request_type").notNull().default("contact"), // contact, demo, support
  hubspotContactId: text("hubspot_contact_id"),
  hubspotDealId: text("hubspot_deal_id"),
  emailSent: text("email_sent").default("pending"), // pending, sent, failed
  createdAt: timestamp("created_at").defaultNow(),
});

export const emailLogs = pgTable("email_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  to: text("to").notNull(),
  from: text("from").notNull(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull(), // notification, confirmation, marketing
  status: text("status").notNull().default("pending"), // pending, sent, failed
  hubspotContactId: text("hubspot_contact_id"),
  errorMessage: text("error_message"),
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  message: text("message").notNull(),
  response: text("response"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  company: true,
  phone: true,
  website: true,
  message: true,
  useCase: true,
  industry: true,
  requestType: true,
});

export const insertEmailLogSchema = createInsertSchema(emailLogs).pick({
  to: true,
  from: true,
  subject: true,
  content: true,
  type: true,
  status: true,
  hubspotContactId: true,
  errorMessage: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  message: true,
  response: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertEmailLog = z.infer<typeof insertEmailLogSchema>;
export type EmailLog = typeof emailLogs.$inferSelect;
