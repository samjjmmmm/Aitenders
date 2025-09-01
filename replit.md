# Aitenders - AI-Powered Tender Management Platform

## Overview
Aitenders is a full-stack web application designed to provide AI-powered tender management solutions for enterprises in the construction and infrastructure industry. It aims to streamline tender processes through intelligent document analysis, bid evaluation, requirements extraction, contract management, and market intelligence, helping clients achieve significant ROI by optimizing their bidding operations.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Design Philosophy
The platform adopts an enterprise B2B SaaS aesthetic, emphasizing professional trustworthiness, sophisticated multi-layered shadows, and generous spacing, inspired by Livestorm's visual polish.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **State Management**: TanStack Query
- **UI Framework**: Radix UI with shadcn/ui
- **Styling**: Tailwind CSS with a custom design system
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **API Style**: RESTful API endpoints

### Core Features & Design Decisions
- **AI-Powered Tender Analysis**: Integration of an advanced 15+ question ROI simulator accessible via a chat interface, providing detailed, industry-specific analysis and personalized recommendations. This includes sophisticated calculation logic and range estimation.
- **Dynamic Chat Interface**: A multi-state chat interface (Normal, Expanded, Closed modes) offering flexible user interaction.
- **RAG/Search System**: Transforms chat into an intelligent search tool, utilizing a knowledge base with configurable routing for query analysis, response delivery, and protection against inappropriate queries.
- **Multi-User Session Management**: Enterprise-grade session isolation using browser fingerprinting to support concurrent users without data mixing, with automatic session cleanup.
- **HubSpot Integration**: Comprehensive mailing system for automated contact creation, deal generation, and email notifications for lead management.
- **UI/UX**: Utilizes a custom Aitenders color palette (`#3880E8`, `#112646`, `#FBFCFF`, `#F5F9FE`, `#EBF2FD`, `#C3D9F8`, `#0B1A2E`) to maintain brand consistency.
- **Frontend Pages**: Includes a Home Page with an intelligent 5-step decision tree and dedicated Use Case pages (UC1, UC3, etc.) following a complete 10-section template.
- **Data Flow**: User interaction triggers API communication, data validation via Zod schemas, PostgreSQL operations via Drizzle ORM, and state updates via TanStack Query.

## External Dependencies
- **Database**: Neon PostgreSQL (serverless)
- **AI/LLM**: OpenAI (GPT-4o) for intelligent chat responses (Aitenders Copilot).
- **CRM/Marketing Automation**: HubSpot for mailing and lead management.
- **UI Library**: Radix UI
- **Validation**: Zod
- **Styling**: Tailwind CSS
- **Development Environment**: Replit (for development optimizations)

## Recent Changes
- **September 1, 2025**: Fixed critical startup issue where translation seeding process was causing server hang during initialization. Temporarily disabled translation seeding on startup for improved performance - translations can be seeded separately using `npm run seed-translations` command.
```