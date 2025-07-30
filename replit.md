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

### Dual-Tier ROI Simulator System with Advanced Integration
- **Date**: January 30, 2025
- **Change**: Implemented complete dual-tier simulator system with imported advanced calculator and uncertainty handling
- **Dual Simulator Architecture**:
  - **Standard Simulator**: 6 questions, 3 minutes, basic ROI calculations from original system
  - **Advanced Simulator**: 15+ questions, 8 minutes, sophisticated calculations from imported Python module
  - **Smart Routing**: Simulateur button now offers choice between standard and advanced analysis
  - **Priority System**: Proper command detection prevents session conflicts
- **Complete Uncertainty Handling** (Both Simulators):
  - **Smart Detection**: All uncertainty expressions ("je ne sais pas", "incertain", "aucune idée") with accent normalization  
  - **Estimation Prompts**: Re-asks questions with encouragement instead of using default values
  - **Flexible Parsing**: Accepts estimates with qualifiers ("environ", "peut-être", "approximativement")
  - **Multi-Type Support**: Works for select, number, range, choice, and multiple_choice question types
- **Advanced Calculator Integration**:
  - **16 Question Categories**: Tender profile, document complexity, Q&A management, contract admin, knowledge management, business profile
  - **Industry-Specific Analysis**: Personalized recommendations based on company sector and priorities
  - **Comprehensive Validation**: Number extraction with regex, choice matching, multiple selection support
- **User Experience**:
  - **Progressive Disclosure**: Standard simulator offers option to upgrade to advanced analysis
  - **Natural Language**: Uncertainty expressions trigger helpful estimation requests
  - **No Workflow Interruption**: All responses remain obligatory while accommodating natural hesitation

### Advanced Tender Calculator Integration with Full LLM Module
- **Date**: January 30, 2025  
- **Change**: Integrated comprehensive 15+ question advanced tender calculator from Python LLM module
- **Technical Implementation**:
  - **Advanced Calculator**: `server/advanced-tender-calculator.ts` - Complete TypeScript port with sophisticated calculation logic
  - **Analysis Service**: `server/advanced-analysis-service.ts` - Manages detailed 15-question workflow
  - **RAG Integration**: Enhanced routing for "analyse avancée" commands and workflow management
  - **Comprehensive Calculations**: Document prep, Q&A management, versioning, contract admin, knowledge management
  - **Industry-Specific Recommendations**: Personalized insights based on business priorities and sector
- **Question Categories**:
  - **Tender Profile**: Tender volume, value, response time (3 questions)
  - **Document Complexity**: Document count, pages, versions (3 questions)
  - **Q&A Management**: Rounds, hours per round (2 questions)
  - **Contract Administration**: Contract tracking, setup hours (2 questions)
  - **Knowledge Management**: Reuse frequency, scratch work (2 questions)
  - **Business Profile**: Priorities, industry, turnover, win rate (3 questions)
- **Advanced Features**:
  - **Monetized ROI**: Calculates potential additional revenue from time savings
  - **Category Breakdown**: Detailed savings analysis per business process
  - **Validation System**: Comprehensive input validation with helpful error messages
  - **Multi-Choice Support**: Handles complex question types with proper parsing
  - **Export Capabilities**: Complete data export with timestamps and calculations
- **User Experience**:
  - **Two-Tier Analysis**: Basic 6-question simulator + advanced 15+ question analysis
  - **Progressive Disclosure**: Standard analysis offers upgrade to advanced insights
  - **Natural Commands**: "analyse avancée" triggers comprehensive workflow
  - **Detailed Reports**: Professional formatting with category breakdowns and recommendations
- **Business Impact**: Provides enterprise-grade ROI analysis with industry-specific insights for serious prospects requiring detailed vendor evaluation

### Advanced Chat Interface with Multi-State Design
- **Date**: January 30, 2025
- **Change**: Implemented comprehensive chat interface with three interactive states
- **Features**:
  - **Normal Mode**: ChatGPT-style anchored interface at bottom
  - **Expanded Mode**: 70% page coverage with full message history and enlarged bubbles
  - **Closed Mode**: Floating robot button for easy reopening
- **Controls**:
  - Chevron button (top-left): Toggle between normal and expanded modes
  - Close button (top-right): Hide chat with floating reopen option
  - Responsive design with optimized message display per mode
- **Technical**: 
  - Fixed positioning with dynamic sizing and flex layouts
  - Seamless state transitions with preserved session data
  - Enhanced readability in expanded mode (max-w-2xl bubbles)
- **User Experience**: Flexible interface adapting to user reading preferences and workflow needs

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

### Advanced Multi-User Session Management System
- **Date**: January 30, 2025
- **Change**: Implemented enterprise-grade session isolation system supporting multiple concurrent users
- **Technical Implementation**:
  - **Browser Fingerprinting**: Unique identification combining IP, User-Agent, screen resolution, canvas rendering, WebGL info, hardware specs, and session timestamp
  - **Individual Session Isolation**: Each browser/device gets completely separate chat history stored server-side
  - **Multi-User Support**: Multiple users can chat simultaneously from same IP (office/shared networks) without data mixing
  - **Automatic Session Cleanup**: Inactive sessions cleaned after 30 minutes, background cleanup every 5 minutes
  - **Page Navigation Clearing**: Chat data cleared only when navigating between different pages (not on reload)
  - **Different User Detection**: When different browser fingerprint detected, previous session data automatically cleared
- **Enterprise Benefits**:
  - **Team Compatibility**: Multiple colleagues can use platform simultaneously from same office IP
  - **Privacy Protection**: Zero data leakage between different users/devices
  - **Session Persistence**: Chat history maintained during same user session (refreshes, temporary navigation)
  - **Memory Efficiency**: Automatic cleanup of abandoned sessions prevents server memory accumulation
- **Security Features**:
  - Browser fingerprint-based identification prevents session hijacking
  - Session-specific data storage with automatic timeout
  - No persistent storage - all chat data in server memory only
  - Different device detection triggers automatic data clearing

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

### HubSpot Mailing System Implementation
- **Date**: January 30, 2025
- **Change**: Implemented comprehensive mailing system using HubSpot API integration
- **Technical Implementation**:
  - **HubSpot Service**: `server/hubspot-service.ts` with full CRM integration
  - **Contact Management**: Automatic contact creation/update in HubSpot CRM
  - **Email System**: Notification emails to team and confirmation emails to users
  - **Deal Creation**: Automated opportunity creation for qualified leads
  - **Database Schema**: Extended contact requests and added email logs tracking
- **API Endpoints**:
  - `POST /api/contact`: Enhanced with automatic HubSpot sync and email sending
  - `POST /api/mailing/send`: Manual email sending with HubSpot integration
  - `GET /api/mailing/logs`: Email logs and delivery status tracking
  - `POST /api/mailing/retry/:id`: Retry failed email deliveries
  - `POST /api/hubspot/contact`: Direct HubSpot contact creation
  - `POST /api/hubspot/deal`: Direct HubSpot deal creation
- **Admin Interface**: Complete mailing administration panel at `/admin/mailing`
  - **Email Logs Management**: View all email delivery status and retry failed sends
  - **Contact Synchronization**: Manage HubSpot contact sync status
  - **Manual Email Sending**: Create and send custom emails via HubSpot
  - **Integration Status**: Real-time HubSpot connection and statistics monitoring
- **Key Features**:
  - **Automated Workflows**: Contact form submissions trigger automatic HubSpot contact creation and email notifications
  - **Email Templates**: Professional HTML email templates for notifications and confirmations
  - **Bilingual Support**: French/English email templates and content
  - **Error Handling**: Comprehensive error tracking and retry mechanisms
  - **Real-Time Sync**: Immediate HubSpot synchronization with fallback handling
- **Business Benefits**:
  - **Lead Management**: All contact forms automatically create qualified leads in HubSpot CRM
  - **Team Notifications**: Instant team alerts for new inquiries with complete contact details
  - **Customer Experience**: Professional confirmation emails enhance user trust
  - **Sales Pipeline**: Automatic deal creation for qualified opportunities
  - **Data Integrity**: Complete audit trail of all email communications

### Advanced RAG Knowledge System with Configurable Routing
- **Date**: January 30, 2025
- **Change**: Implemented sophisticated RAG system with intelligent query routing and configuration management
- **Core System**:
  - **Knowledge Base**: 15 content chunks across 7 categories (4,987 characters)
  - **Semantic Search**: Multi-criteria scoring with keyword matching and priority weighting
  - **Intelligent Routing**: Configurable system for query analysis and response routing
- **Configuration System (`rag-config.json`)**:
  - **Blocked Queries**: Keywords triggering security/privacy protection responses
  - **Direct ChatGPT**: Creative queries routed directly to OpenAI (keywords: créatif, rédige, génère)
  - **Category Redirections**: Smart routing to specific knowledge base categories
  - **Response Templates**: Configurable multilingual response formats
  - **Analytics Tracking**: Real-time monitoring of query types and routing decisions
- **Routing Capabilities**:
  - **Contact Queries**: contact, demo, commercial → targeted contact information
  - **Security Queries**: sécurité, rgpd, données → comprehensive security details
  - **Pricing Queries**: prix, tarif, abonnement → pricing tier information
  - **Feature Queries**: fonctionnalités, agents, ia → AI capabilities description
  - **Use Case Queries**: cas d'usage, uc1-uc3 → specific use case details
  - **ROI Queries**: roi, économies, performance → ROI metrics and benefits
- **API Endpoints**:
  - `/api/rag/stats`: Complete analytics (knowledge base, routing, configuration)
  - `/api/rag/test`: Query routing testing without execution
  - Enhanced `/api/chat`: Automatic routing integration with fallback chains
- **Advanced Features**:
  - **Request Blocking**: Protection against inappropriate queries with custom responses
  - **Performance Monitoring**: Real-time analytics on query routing and system usage
  - **Category-Specific Search**: Targeted knowledge base searches for better accuracy
  - **Bilingual Configuration**: French/English routing rules and response templates
- **User Experience**: Context-aware responses with intelligent routing ensuring users get the most relevant information source (knowledge base vs ChatGPT) based on query intent

### Advanced-Only Simulator Integration with User-Friendly Interface
- **Date**: January 30, 2025
- **Change**: Removed legacy 6-question simulator, keeping only advanced 15+ question Python-imported system with enhanced user experience
- **Technical Implementation**:
  - **Chat-Based Simulator**: ROI simulator questions now accessible directly through chat interface via "Simulateur ROI" button
  - **RAG Integration**: Enhanced RAG service with simulator routing (simulator_start, simulator_continue, simulator_completed, simulator_answer)
  - **Session Management**: Simulator state managed through existing browser fingerprint session system
  - **Dynamic UI Components**: Modal interface for user information collection (name, email, company) with professional styling
  - **Automated Email Delivery**: HubSpot integration for ROI report generation and delivery after simulator completion
- **New API Endpoints**:
  - `POST /api/simulator/user-info`: Process user information and trigger ROI report generation
  - `GET /api/simulator/session/:sessionId`: Retrieve simulator session information
- **User Experience Flow**:
  1. **Chat Interaction**: User clicks "Simulateur ROI" button in chat interface
  2. **Question Flow**: Sequential questions presented through chat with natural conversation flow
  3. **Completion Modal**: Professional modal appears requesting user contact information
  4. **Automated Processing**: HubSpot contact creation, deal generation, and professional email delivery
  5. **ROI Report**: Branded HTML email with personalized calculations and call-to-action
- **Business Integration**:
  - **Lead Generation**: All simulator completions automatically create qualified leads in HubSpot CRM
  - **Sales Pipeline**: Automatic deal creation worth €150,000 for simulator completions
  - **Professional Communication**: Branded email templates with gradient headers and structured content
  - **Contact Management**: Complete integration with existing HubSpot mailing system
- **Technical Benefits**: 
  - **Seamless UX**: No page redirections, simulator fully embedded in chat experience
  - **Data Integrity**: Complete session isolation and browser fingerprinting for multi-user support
  - **Error Handling**: Comprehensive fallback and retry mechanisms for email delivery
  - **Performance**: Efficient session management with automatic cleanup and memory optimization
- **Technical Implementation**:
  - **Single System**: Only advanced 15+ question analysis with sophisticated calculations
  - **Eliminated Files**: Removed simulator-config.json, simulator-service.ts, tender-time-calculator.ts
  - **Clean Architecture**: All simulator commands now route directly to advanced analysis service
  - **No Legacy Code**: Completely removed 6-question standard simulator logic
- **Range Detection System**: 
  - **Advanced Calculator**: Full range estimation system with low/high/average ROI calculations
  - **Pattern Recognition**: Multiple range formats supported with automatic average calculation ("entre 30 et 50", "de 10 à 20", "15-25")
  - **User Experience**: Direct simulator launch from chat button starts advanced analysis immediately
  - **Natural Flow**: Seamless handling of estimations and approximations in advanced calculator
- **Enhanced User Experience**:
  - **Clear Time Expectation**: "⏱️ Temps estimé : 3-5 minutes" displayed in introduction
  - **Email Delivery Promise**: "📧 Vous recevrez votre rapport détaillé par email" 
  - **Natural Examples**: Each question shows example responses instead of technical validation rules
  - **No Validation Barriers**: All estimations accepted without strict boundary enforcement
  - **User-Friendly Language**: Examples like "environ 250, entre 100 et 200" encourage natural responses
  - **Bold Question Format**: Questions are displayed in bold format for better readability
- **Complete Question Merging System**: 
  - **All Categories Merged**: 6 comprehensive questions instead of 14+ individual questions
  - **📋 Profil AO**: 3 questions → 1 question combinée (volume, valeur, durée)
  - **📄 Complexité docs**: 3 questions → 1 question combinée (nombre docs, pages, versions)
  - **❓ Gestion Q&A**: 2 questions → 1 question combinée (cycles, heures par cycle)
  - **📝 Admin contrats**: 2 questions → 1 question combinée (nombre contrats, heures setup)
  - **🧠 Gestion connaissances**: 2 questions → 1 question combinée (réutilisation, scratch)
  - **🎯 Profil entreprise**: 3 questions → 1 question combinée (secteur, CA, taux réussite, priorités)
  - **Advanced Parsing**: Intelligent text analysis with regex patterns for natural language responses
  - **Natural Examples**: Each question shows comprehensive realistic examples
  - **Dramatic UX Improvement**: From 14+ questions to 6 questions (57% reduction) with same data quality
- **Coherence Validation System**:
  - **Character Detection**: Identifies incoherent character patterns like "1à:m€" or "3à pages"
  - **Contextual Validation**: Checks if numerical answers make sense for specific question types
  - **Range Validation**: Ensures values fall within reasonable bounds (e.g., 1-2000 tenders per year)
  - **Concise Color-Coded Messages**: 🔴 for incoherent characters, 🟡 for unusual values - single sentence format
  - **Smart Acceptance**: Valid variations like "50000€" or "environ 150" are accepted normally