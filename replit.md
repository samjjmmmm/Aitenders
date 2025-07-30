# Aitenders - AI-Powered Tender Management Platform

## Overview

Aitenders is a full-stack web application that provides AI-powered tender management solutions for enterprise clients in the construction and infrastructure industry. The platform helps companies streamline their tender processes through intelligent document analysis, bid evaluation, requirements extraction, contract management, and market intelligence.

## User Preferences

Preferred communication style: Simple, everyday language.

## Brand Identity & Design System

**Aitenders Color Palette** (Implemented July 2025):
- **Primary Blue**: #3880E8 (aitenders-primary-blue) - Main brand color for buttons, links, accents
- **Dark Blue**: #112646 (aitenders-dark-blue) - Deep navy for headers, text, backgrounds  
- **White Blue**: #FBFCFF (aitenders-white-blue) - Premium white-blue for backgrounds, text on dark
- **Pale Blue**: #F5F9FE (aitenders-pale-blue) - Light backgrounds, subtle sections
- **Pastel Blue**: #EBF2FD (aitenders-pastel-blue) - Gentle backgrounds, gradients
- **Light Blue**: #C3D9F8 (aitenders-light-blue) - Borders, dividers, secondary elements
- **Black**: #0B1A2E (aitenders-black) - Premium deep black for contrast

**Design Philosophy**: Enterprise B2B SaaS aesthetic with Livestorm-level visual polish, professional trustworthiness, and sophisticated multi-layered shadows with generous spacing.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state
- **UI Framework**: Radix UI with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **API Style**: RESTful API endpoints
- **Development**: Hot reloading with Vite integration

## Key Components

### Database Schema (Drizzle ORM)
- **Users**: Basic user management with username/password
- **Contact Requests**: Customer inquiry management
- **Chat Messages**: Interactive chat functionality for customer support

### API Endpoints
- `POST /api/contact` - Submit contact form requests
- `GET /api/contact` - Retrieve contact requests
- `POST /api/chat` - Submit chat messages
- `GET /api/chat` - Retrieve chat messages

### Frontend Pages
- **Home Page**: Main landing page with intelligent 5-step decision tree questionnaire that classifies users into 8 specific use cases (UC1-UC8)
- **Use Case Pages**: Comprehensive landing pages for each service offering:
  - **UC1**: Fast-Track Small Project Bids - For teams handling small, frequent projects with quick turnaround times
  - **UC3**: Complex Multi-Lot Bid Management - For expert teams managing large-scale, multi-lot international mega-projects with compliance coordination across technical, legal, commercial, and quality specialists
  - **UC2, UC4-UC8**: Additional use case pages (placeholder structure ready for expansion)
  - Each UC page follows a complete template structure with 10 sections: Hero, Pain Points, Solution, Before/After, Target Audience, User Journey, KPIs, Differentiation, Trust & Compliance, and Call to Action

### UI Components
- **Reusable Components**: Built on Radix UI primitives with consistent styling
- **Custom Components**: Header, contact forms, chat interface, client logos
- **Design System**: Custom color palette with Aitenders branding

## Data Flow

1. **User Interaction**: Users navigate through the marketing site and interact with contact/chat forms
2. **API Communication**: Frontend makes HTTP requests to Express.js backend
3. **Data Validation**: Zod schemas validate all incoming data
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: TanStack Query manages caching and state updates

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL (serverless)
- **UI Library**: Radix UI for accessible components
- **Validation**: Zod for type-safe schema validation
- **Styling**: Tailwind CSS with PostCSS

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast production builds
- **Vite**: Development server with HMR
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

The application is designed for deployment on platforms that support Node.js:

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `drizzle-kit push`

### Environment Requirements
- Node.js runtime environment
- PostgreSQL database (via DATABASE_URL)
- Static file serving for frontend assets

### Development vs Production
- **Development**: Vite dev server with backend integration
- **Production**: Express serves static files and API endpoints

The architecture prioritizes developer experience with hot reloading, type safety, and modern tooling while maintaining production readiness with optimized builds and scalable deployment patterns.

## Recent Changes (January 2025)

### ChatGPT-Style Chat Interface Implementation
- **Date**: January 30, 2025
- **Change**: Redesigned anchored chat interface to match ChatGPT design patterns
- **Details**: 
  - White rounded container with subtle border and shadow
  - Borderless input field with "Poser une question" placeholder
  - Action buttons integrated inside chat container below input
  - "Outils" button with settings icon matching reference design
  - Plus icon for use cases button
  - Right-side utility icons for additional functionality
  - Clean gray color scheme with hover effects
- **Technical**: Fixed positioning at bottom with backdrop blur effect
- **User Preference**: User specifically requested ChatGPT-style anchored design to replace previous chat implementations

### Reusable Chat Component Creation
- **Date**: January 30, 2025
- **Change**: Extracted chat interface into reusable component for platform-wide usage
- **Component**: `client/src/components/chat-interface.tsx`
- **Features**:
  - Fully self-contained with own state management
  - Customizable action buttons via props
  - Language support (French/English)
  - Toast notifications integration
  - TanStack Query integration for API calls
  - Consistent ChatGPT-style design across platform
- **Usage**: Can be imported and used in any page with `<ChatInterface language={language} customActions={[...]} />`
- **Benefits**: Eliminates code duplication, ensures consistent UX, easier maintenance

### RAG/Search System Implementation
- **Date**: January 30, 2025
- **Change**: Transformed chat from static descriptions to intelligent RAG/search system
- **Technical Details**:
  - **Natural Question Generation**: Chat buttons now generate user-like questions instead of static descriptions
  - **Knowledge Base**: 5 comprehensive categories (security, use cases, ROI, AI agents, contact)
  - **Semantic Search**: Keyword-based matching in user questions for relevant responses
  - **Response Formatting**: Rich text with emojis, bullet points, bold text, and structured content
  - **Message History**: Displays last 2 message exchanges in chat interface
  - **Bilingual Support**: Complete French/English knowledge base and response formatting
- **Examples**:
  - Button "Data Security" → Question: "Que fait Aitenders pour la sécurité des données?"
  - RAG Response: Detailed security features with encryption, GDPR compliance, etc.
- **User Experience**: Chat functions as intelligent search tool rather than static information display

### ChatGPT Integration
- **Date**: January 30, 2025
- **Change**: Replaced local RAG system with authentic ChatGPT (GPT-4o) integration
- **Technical Implementation**:
  - **Backend Service**: `server/openai.ts` with specialized Aitenders system prompts
  - **OpenAI Model**: GPT-4o (latest model as of May 2024)
  - **API Integration**: Direct OpenAI API calls from backend routes
  - **Context-Aware**: System prompts with complete Aitenders business context
  - **Bilingual Responses**: French/English support with professional B2B tone
- **Key Features**:
  - Expert-level responses about tender management and Aitenders platform
  - Professional formatting with emojis and structured content
  - Concise but detailed responses (150-300 words)
  - Industry-specific knowledge and examples
  - Real-time AI conversation instead of static knowledge base
- **User Experience**: Aitenders Copilot - Branded AI assistant with specialized tender management expertise

### Robust Fallback System
- **Date**: January 30, 2025
- **Change**: Implemented intelligent fallback system for chat reliability
- **Architecture**: 
  - **Primary**: OpenAI GPT-4o API for conversational AI responses
  - **Fallback**: Local RAG knowledge base when OpenAI fails or API key issues
  - **Seamless Transition**: Automatic detection and graceful degradation
- **Reliability Features**:
  - Zero downtime chat functionality
  - Consistent user experience regardless of external API status
  - Comprehensive Aitenders knowledge base as backup
  - Proper error handling and logging for API failures
- **User Benefit**: Chat always provides relevant responses about Aitenders platform, security, use cases, ROI, and contact information