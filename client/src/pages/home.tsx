// client/src/pages/home.tsx
import React, { useState } from "react"; // Added React import, ensure useState is imported
import { useLocation } from "wouter"; // Ensure useLocation is imported

// Import your existing Header component for site navigation
import Header from "@/components/header"; 

// Import other existing components if they are still needed elsewhere or in the interactive section
// import ClientLogos from "@/components/client-logos"; // Replaced by Figma's Logo_3 for main logo display
import ContactSection from "@/components/contact-section"; // You might still use this at the very bottom
import ChatInterface from "@/components/chat-interface"; // Retained for the chat functionality
import { Card } from "@/components/ui/card"; // Retained for the interactive card selection
import { Button } from "@/components/ui/button"; // Retained for buttons in the interactive section

// Import React Icons, as they are used in your existing interactive selection logic
import { 
  MdBarChart, MdSearch, MdDescription, MdLightbulb, MdTrendingUp, MdSecurity, MdPeople, 
  MdInsertDriveFile, MdSettings, MdEmojiEvents, MdGpsFixed, 
  MdSchedule, MdCheckCircle, MdEdit, MdAnalytics, MdVerifiedUser, MdGroups, MdAccountCircle, 
  MdMail,
  MdStarOutline
} from "react-icons/md";
import { FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";


// Import all your NEW Figma-exported components
import Header_26 from '../components/Header_26'; // New Hero Section (replaces old textual hero)
import Logo_3 from '../components/Logo_3'; // New Client Logos section (replaces old ClientLogos)
import Layout_401_AI_Copilot from '../components/Layout_401_AI_Copilot'; // AI Copilot section
import Layout_401_OfferSteps from '../components/Layout_401_OfferSteps'; // Offer Steps section
import Layout_356 from '../components/Layout_356'; // Feature blocks (Structuration, Contrôlez, Maîtrisez)
import Layout_84 from '../components/Layout_84'; // Results/Stats section
import Team_20 from '../components/Team_20'; // Advanced Capabilities section
import Portfolio_11 from '../components/Portfolio_11'; // Deployed Projects section
import Cta_25 from '../components/Cta_25'; // Call to Action section (this was the last Figma-exported section)


// Import your global CSS for variables and base styles
import '../style/global.css'; 

// --- START: Your Existing Interface and Logic from home.tsx (RETAINED) ---
interface SelectionCard {
  id: string;
  title: string;
  description?: string;
  icon: any;
  color: string;
  useCases?: string[];
  nextStep?: string;
  redirectTo?: string;
}
// --- END: Your Existing Interface and Logic from home.tsx (RETAINED) ---


export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');
  const [, setLocation] = useLocation();

  // Translations (RETAINED)
  const t = {
    fr: {
      mainTitle: "L'intelligence de vos équipes projets,",
      mainSubtitle: "démultipliée par l'IA",
      description: "Aitenders, votre coéquipier digital pour gagner les appels d'offres, piloter les contrats et structurer la connaissance et l'expertise de vos projets.",
      domainSelection: "Comment puis-je vous aider? ",
      projectSize: "Quelle est la taille de vos projets ?",
        chooseUseCase: "Choisissez votre cas d'usage",
        yourSelection: "Votre sélection :",
        availableUseCases: "Cas d'usage disponibles :",
        back: "← Retour",
        tenderManagement: "Je réponds à des appels d'offres",
        tenderDescription: "Optimisez vos réponses aux appels d'offres. Analysez les exigences, collaborez efficacement et maximisez vos chances de succès.",
        contractExecution: "Je pilote des projets en exécution", 
        contractDescription: "Pilotez vos projets en toute confiance. Suivi des livrables, conformité et gestion proactive des changements.",
        knowledgeManagement: "Je structure la connaissance de mes experts",
        knowledgeDescription: "Capitalisez sur vos savoirs et expériences passées. Accès rapide aux références, modèles et comparables pour chaque nouveau projet.",
        smallProject: "Petit Projets, régulier",
        smallDescription: "Idéal pour les petites équipes et besoins ciblés. Mise en place rapide, fonctionnalités essentielles.",
        mediumProject: "Projets moyennement complexe ",
        mediumDescription: "Un équilibre entre flexibilité et puissance. Outils complets pour des projets structurés et collaboratifs.",
        largeProject: "Grand Projets complexes",
        largeDescription: "Conçu pour les organisations complexes et à grande échelle. Solutions avancées, IA personnalisée et sécurité renforcée.",

        learnMore: "Je veux en savoir plus sur Aitenders",

      exploreSolutions: "Explorer nos solutions",
      discoverUseCase: "Découvrir ce cas d'usage",
      chatPlaceholder: "Interagissez avec le Chat Questions / Lancer le simulateur / Information  ?",
      chatTitle: "Chat avec l'Assistant IA",
      ourUseCases: "Nos Cas d'Usage",
      tenderProcess: "Processus d'Appel d'Offres",
      scheduleDemo: "Planifier une Démo"
    },
    en: {
      mainTitle: "Find the solution adapted to your project",
      mainSubtitle: "in just a few clicks",
      description: "Choose your needs and project size to access a personalized use case.",
      domainSelection: "Select your business domains",
      projectSize: "What is the size of your projects?",
      chooseUseCase: "Choose your use case",
      yourSelection: "Your selection:",
      availableUseCases: "Available use cases:",
      back: "← Back",
      tenderManagement: "Tender Management",
      tenderDescription: "Optimize your tender responses. AI analysis, collaboration and compliance tracking to maximize your chances of success.",
      contractExecution: "Contract & Project Execution",
      contractDescription: "Manage your projects and contracts with confidence. Deliverables tracking, compliance and proactive change management.",
      knowledgeManagement: "Knowledge Management", 
      knowledgeDescription: "Capitalize on your knowledge and past experiences. Quick access to references, templates and comparables for each new project.",
      smallProject: "Small Project",
      smallDescription: "Ideal for small teams and targeted needs. Quick setup, essential features.",
      mediumProject: "Medium Project",
      mediumDescription: "A balance between flexibility and power. Complete tools for structured and collaborative projects.",
      largeProject: "Large Project",
      largeDescription: "Designed for complex and large-scale organizations. Advanced solutions, custom AI and enhanced security.",
      learnMore: "I want to learn more about Aitenders",
      learnMoreDescription: "Discover all our features and how Aitenders can transform your tender and project management.",
      exploreSolutions: "Explore our solutions",
      discoverUseCase: "Discover this use case",
      chatPlaceholder: "How can I help you today?",
      chatTitle: "Chat with AI Assistant",
      ourUseCases: "Our Use Cases",
      tenderProcess: "Tender Process", 
      scheduleDemo: "Schedule Demo"
    }
  };

  // Step 1: Domain Selection (Multi-select) (RETAINED)
  const step1Cards: SelectionCard[] = [
    {
      id: "tender-management",
      title: t[language].tenderManagement,
      description: t[language].tenderDescription,
      icon: MdInsertDriveFile,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    },
    {
      id: "contract-execution",
      title: t[language].contractExecution,
      description: t[language].contractDescription,
      icon: MdSettings,
      color: "bg-aitenders-dark-blue/10 text-aitenders-dark-blue"
    },
    {
      id: "knowledge-management",
      title: t[language].knowledgeManagement,
      description: t[language].knowledgeDescription,
      icon: MdLightbulb,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    }
  ];

  // Step 2: Project Size Selection (Single-select) (RETAINED)
  const step2Cards: SelectionCard[] = [
    {
      id: "petit-projet",
      title: t[language].smallProject,
      description: t[language].smallDescription,
      icon: MdSchedule,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    },
    {
      id: "projet-moyen",
      title: t[language].mediumProject,
      description: t[language].mediumDescription,
      icon: MdCheckCircle,
      color: "bg-aitenders-dark-blue/10 text-aitenders-dark-blue"
    },
    {
      id: "grand-projet",
      title: t[language].largeProject,
      description: t[language].largeDescription,
      icon: MdPeople,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    }
  ];

  // UC mapping logic based on domain + project size combinations (RETAINED)
  const getUCsFromSelection = (domainSelections: string[], projectSize: string): string[] => {
    const domains = new Set(domainSelections);

    // Single domain mappings
    if (domains.size === 1) {
      if (domains.has('tender-management')) {
        if (projectSize === 'petit-projet') return ['UC1'];
        if (projectSize === 'projet-moyen') return ['UC2'];
        if (projectSize === 'grand-projet') return ['UC3'];
      }
      if (domains.has('contract-execution')) {
        if (projectSize === 'petit-projet') return ['UC4'];
        if (projectSize === 'projet-moyen') return ['UC5'];
        if (projectSize === 'grand-projet') return ['UC6'];
      }
      if (domains.has('knowledge-management')) {
        if (projectSize === 'petit-projet') return ['UC7'];
        if (projectSize === 'projet-moyen') return ['UC8'];
        if (projectSize === 'grand-projet') return ['UC8'];
      }
    }


    // Multiple domain combinations
    if (domains.size === 2) {
      if (domains.has('tender-management') && domains.has('contract-execution')) {
        if (projectSize === 'petit-projet') return ['UC1', 'UC4'];
        if (projectSize === 'projet-moyen') return ['UC2', 'UC5'];
        if (projectSize === 'grand-projet') return ['UC3', 'UC6'];
      }
      if (domains.has('tender-management') && domains.has('knowledge-management')) {
        if (projectSize === 'petit-projet') return ['UC1', 'UC7'];
        if (projectSize === 'projet-moyen') return ['UC2', 'UC8'];
        if (projectSize === 'grand-projet') return ['UC3', 'UC8'];
      }
      if (domains.has('contract-execution') && domains.has('knowledge-management')) {
        if (projectSize === 'petit-projet') return ['UC4', 'UC7'];
        if (projectSize === 'projet-moyen') return ['UC5', 'UC8'];
        if (projectSize === 'grand-projet') return ['UC6', 'UC8'];
      }
    }

    // All three domains
    if (domains.size === 3) {
      if (projectSize === 'petit-projet') return ['UC1', 'UC4', 'UC7'];
      if (projectSize === 'projet-moyen') return ['UC2', 'UC5', 'UC8'];
      if (projectSize === 'grand-projet') return ['UC3', 'UC6', 'UC8'];
    }

    return [];
  };

  // State management (RETAINED)
  const [step1Selections, setStep1Selections] = useState<string[]>([]);
  const [step2Selection, setStep2Selection] = useState<string>('');
  const [showStep2, setShowStep2] = useState<boolean>(false);
  const [showUCResults, setShowUCResults] = useState<boolean>(false);

  // Handle Step 1 card selection (multi-select) (RETAINED)
  const handleStep1Selection = (cardId: string) => {
    let newSelections;
    if (step1Selections.includes(cardId)) {
      newSelections = step1Selections.filter(id => id !== cardId);
    } else {
      newSelections = [...step1Selections, cardId];
    }
    setStep1Selections(newSelections);

    // Show step 2 if at least one selection
    if (newSelections.length > 0) {
      setShowStep2(true);
    } else {
      setShowStep2(false);
      setStep2Selection('');
      setShowUCResults(false);
    }
  };

  // Handle Step 2 card selection (single-select) (RETAINED)
  const handleStep2Selection = (cardId: string) => {
    setStep2Selection(cardId);
    setShowUCResults(true);
  };

  // Get results based on current selections (RETAINED)
  const resultUCs = step1Selections.length > 0 && step2Selection 
    ? getUCsFromSelection(step1Selections, step2Selection)
    : [];

  // Handle UC card click - navigate to UC page (RETAINED)
  const handleUCSelection = (ucId: string) => {
    // Assuming your UC pages are like /uc1, /uc2 etc.
    setLocation(`/${ucId.toLowerCase()}`); 
  };

  // Handle back to step 1 (RETAINED)
  const handleBackToStep1 = () => {
    setShowStep2(false);
    setStep2Selection('');
    setShowUCResults(false);
  };

  // UC Metadata for display (RETAINED)
  const ucMetadata = {
    "UC1": { title: "Fast-Track Small Bids", description: "Appels d'offres petits projets" },
    "UC2": { title: "Medium Bid Management", description: "Gestion d'appels d'offres moyens" },
    "UC3": { title: "Complex Multi-Lot Bids", description: "Appels d'offres multi-lots complexes" },
    "UC4": { title: "Small Project Execution", description: "Exécution de petits projets" },
    "UC5": { title: "Medium Project Execution", description: "Exécution de projets moyens" },
    "UC6": { title: "Large Project Execution", description: "Exécution de grands projets" },
    "UC7": { title: "Knowledge Management Small", description: "Gestion des connaissances pour petites structures" },
    "UC8": { title: "Knowledge Management Large", description: "Gestion des connaissances pour grandes organisations" }
  };

  const resetSelection = () => { // RETAINED
    setStep1Selections([]);
    setStep2Selection('');
    setShowStep2(false);
    setShowUCResults(false);
  };

  const getStepTitle = () => { // RETAINED
    if (!showStep2) {
      return t[language].domainSelection;
    } else if (!showUCResults) {
      return t[language].projectSize;
    } else {
      return t[language].chooseUseCase;
    }
  };
  // --- END: Your Existing Interface and Logic from home.tsx (RETAINED) ---


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Existing Header Component (Your site navigation) */}
      <Header language={language} onLanguageChange={setLanguage} />

      <div className="page-content"> {/* You might have this div for global page styling */}

        {/* NEW: Figma-exported Hero Section (with animation) */}
        <Header_26 />

        {/* NEW: Figma-exported Client Logos Section */}
        <Logo_3 />

        {/* NEW: Figma-exported AI Copilot Section */}
        <Layout_401_AI_Copilot />

        {/* NEW: Figma-exported Offer Steps Section */}
        <Layout_401_OfferSteps />

        {/* NEW: Figma-exported Feature Blocks Section (Structuration, Contrôlez, Maîtrisez) */}
        <Layout_356 />

        {/* NEW: Figma-exported Results/Stats Section */}
        <Layout_84 />

        {/* NEW: Figma-exported Advanced Capabilities Section (Team_20) */}
        <Team_20 />

        {/* NEW: Figma-exported Deployed Projects Section (Portfolio_11) */}
        <Portfolio_11 />

        {/* NEW: Figma-exported Call to Action Section (Cta_25) */}
        <Cta_25 />

        {/* Your ORIGINAL interactive selection cards section - Placed here after the new Figma sections.
            You can move this block if you want it earlier or integrated differently.
            I've kept the original comments for context.
        */}
        <main className="relative py-16 bg-gray-50"> {/* Added some basic padding/background for visibility */}
          <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
            {/* The original Hero Heading is now effectively replaced by Header_26.
                I'm commenting it out here to avoid redundancy with the new design.
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-black mb-4 leading-tight">
                {t[language].mainTitle}<br />
                <span className="text-aitenders-primary-blue">{t[language].mainSubtitle}</span>
              </h1>
              <p className="text-lg text-aitenders-dark-blue max-w-2xl mx-auto mt-1">
                {t[language].description}
              </p>
            </div>
            */}

            {/* Dynamic Selection Cards - RETAINED */}
            <div className="mb-6 max-w-4xl mx-auto">

              {/* Step Title */}
              <h2 className="text-lg font-bold text-aitenders-black mb-4 text-center">
                {getStepTitle()}
              </h2>

              {/* Step 1: Domain Selection */}
              {!showUCResults && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  {step1Cards.map((card) => {
                    const Icon = card.icon;
                    const isSelected = step1Selections.includes(card.id);
                    return (
                      <Card
                        key={card.id}
                        onClick={() => handleStep1Selection(card.id)}
                        className={`rounded-lg p-3 shadow-sm hover:shadow-md cursor-pointer border transition-all duration-200 ease-in-out hover:scale-105 ${
                          isSelected 
                            ? 'border-aitenders-primary-blue bg-aitenders-pale-blue' 
                            : 'border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`p-2 rounded-lg mb-2 mx-auto w-fit ${card.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-sm font-semibold text-aitenders-black">
                            {card.title}
                          </h3>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              )}

              {/* Step 2: Project Size Selection */}
              {showStep2 && !showUCResults && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {step2Cards.map((card) => {
                      const Icon = card.icon;
                      const isSelected = step2Selection === card.id;
                      return (
                        <Card
                          key={card.id}
                          onClick={() => handleStep2Selection(card.id)}
                          className={`rounded-lg p-3 shadow-sm hover:shadow-md cursor-pointer border transition-all duration-200 ease-in-out hover:scale-105 ${
                            isSelected 
                              ? 'border-aitenders-primary-blue bg-aitenders-pale-blue' 
                              : 'border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue'
                          }`}
                        >
                          <div className="text-center">
                            <div className={`p-2 rounded-lg mb-2 mx-auto w-fit ${card.color}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-sm font-semibold text-aitenders-black">
                              {card.title}
                            </h3>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* UC Results Display */}
              {showUCResults && resultUCs.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {resultUCs.map((ucId) => {
                      const ucData = ucMetadata[ucId as keyof typeof ucMetadata];
                      return (
                        <Card
                          key={ucId}
                          onClick={() => handleUCSelection(ucId)}
                          className="rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer border border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue transition-all duration-200 ease-in-out hover:scale-105"
                        >
                          <div className="text-center">
                            <div className="p-3 rounded-lg mb-3 mx-auto w-fit bg-aitenders-primary-blue/10 text-aitenders-primary-blue">
                              <MdEmojiEvents className="h-6 w-6" />
                            </div>
                            <h3 className="text-base font-semibold text-aitenders-black mb-1">
                              {ucData.title}
                            </h3>
                            <p className="text-xs text-aitenders-dark-blue leading-tight mb-3">
                              {ucData.description}
                            </p>
                            <Button 
                              size="sm" 
                              className="w-full bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-aitenders-white-blue"
                            >
                              {t[language].discoverUseCase}
                            </Button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Selection Summary */}
              {showUCResults && (
                <div className="mt-4 p-3 bg-aitenders-pale-blue rounded-lg border border-aitenders-light-blue">
                  <p className="text-xs text-aitenders-dark-blue mb-2 font-medium">{t[language].yourSelection}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {step1Selections.map((selectionId) => {
                      const selectedCard = step1Cards.find(c => c.id === selectionId);
                      return (
                        <span
                          key={selectionId}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-aitenders-white-blue text-aitenders-dark-blue border border-aitenders-light-blue shadow-sm"
                        >
                          {selectedCard?.title}
                        </span>
                      );
                    })}
                    {step2Selection && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-aitenders-primary-blue/10 text-aitenders-primary-blue border border-aitenders-primary-blue/20 shadow-sm">
                        {step2Cards.find(c => c.id === step2Selection)?.title}
                      </span>
                    )}
                  </div>
                  {resultUCs.length > 0 && (
                    <p className="text-xs text-aitenders-dark-blue/60">
                      {t[language].availableUseCases} {resultUCs.join(', ')}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Existing Reusable Chat Interface Component - RETAINED */}  
        <ChatInterface 
          language={language}
          customActions={[
            {
              label: t[language].ourUseCases,
              icon: <span className="text-gray-400">+</span>,
              onClick: () => {} // The component handles this internally with descriptions
            },
            {
              label: "Simulation / ROI", 
              icon: <MdSettings className="w-3 h-3 text-gray-400" />,
              onClick: () => {} // The component handles this internally with descriptions
            },
            {
              label: "AI Agents",
              icon: <MdStarOutline className="w-3 h-3 text-gray-400" />,
              onClick: () => {} // The component handles this internally with descriptions
            },
            {
              label: "Data Security",
              icon: <MdSecurity className="w-3 h-3 text-gray-400" />,
              onClick: () => {} // The component handles this internally with descriptions
            },
            {
              label: "Contactez nous", 
              icon: <MdMail className="w-3 h-3 text-gray-400" />,
              onClick: () => {} // The component handles this internally with descriptions
            }
          ]}
        />

        {/* Reduced padding for chat alignment */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}