import { useState } from "react";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { 
  MdBarChart, MdSearch, MdDescription, MdLightbulb, MdTrendingUp, MdSecurity, MdPeople, 
  MdSend, MdInsertDriveFile, MdSettings, MdEmojiEvents, MdGpsFixed, 
  MdSchedule, MdCheckCircle, MdEdit, MdAnalytics, MdVerifiedUser, MdGroups, MdAccountCircle 
} from "react-icons/md";
import { FaRobot, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  createdAt: Date;
}

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

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [chatExpanded, setChatExpanded] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: messages = [], isLoading } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat"],
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      const response = await apiRequest("POST", "/api/chat", { message: messageText });
      return response.json();
    },
    onSuccess: () => {
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll respond shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessageMutation.mutate(message);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Translations
  const t = {
    fr: {
      mainTitle: "Trouvez la solution adaptée à votre projet",
      mainSubtitle: "en quelques clics",
      description: "Choisissez vos besoins et la taille de votre projet pour accéder à un cas d'usage personnalisé.",
      domainSelection: "Sélectionnez vos domaines d'activité",
      projectSize: "Quelle est la taille de vos projets ?",
      chooseUseCase: "Choisissez votre cas d'usage",
      yourSelection: "Votre sélection :",
      availableUseCases: "Cas d'usage disponibles :",
      back: "← Retour",
      tenderManagement: "Tender Management",
      tenderDescription: "Optimisez vos réponses aux appels d'offres. Analyse IA, collaboration et suivi de conformité pour maximiser vos chances de succès.",
      contractExecution: "Contract & Project Execution", 
      contractDescription: "Pilotez vos projets et contrats en toute confiance. Suivi des livrables, conformité et gestion proactive des changements.",
      knowledgeManagement: "Knowledge Management",
      knowledgeDescription: "Capitalisez sur vos savoirs et expériences passées. Accès rapide aux références, modèles et comparables pour chaque nouveau projet.",
      smallProject: "Petit Projet",
      smallDescription: "Idéal pour les petites équipes et besoins ciblés. Mise en place rapide, fonctionnalités essentielles.",
      mediumProject: "Projet Moyen",
      mediumDescription: "Un équilibre entre flexibilité et puissance. Outils complets pour des projets structurés et collaboratifs.",
      largeProject: "Grand Projet", 
      largeDescription: "Conçu pour les organisations complexes et à grande échelle. Solutions avancées, IA sur mesure et sécurité renforcée.",
      learnMore: "Je veux en savoir plus sur Aitenders",
      learnMoreDescription: "Découvrez toutes nos fonctionnalités et comment Aitenders peut transformer votre gestion des appels d'offres et projets.",
      exploreSolutions: "Explorer nos solutions",
      discoverUseCase: "Découvrir ce cas d'usage",
      chatPlaceholder: "Comment puis-je vous aider aujourd'hui ?",
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

  // Step 1: Domain Selection (Multi-select)
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

  // Step 2: Project Size Selection (Single-select)
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

  // UC mapping logic based on domain + project size combinations
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
    
    // Multi-domain combinations
    if (domains.has('tender-management') && domains.has('contract-execution')) {
      return ['UC2', 'UC5'];
    }
    if (domains.has('tender-management') && domains.has('knowledge-management')) {
      return ['UC3', 'UC7'];
    }
    if (domains.has('contract-execution') && domains.has('knowledge-management')) {
      return ['UC6', 'UC7'];
    }
    if (domains.size === 3) {
      return ['UC8'];
    }
    
    return ['UC1']; // Default fallback
  };

  // State management for the 2-step flow
  const [step1Selections, setStep1Selections] = useState<string[]>([]);
  const [step2Selection, setStep2Selection] = useState<string>('');
  const [showStep2, setShowStep2] = useState(false);
  const [showUCResults, setShowUCResults] = useState(false);
  const [resultUCs, setResultUCs] = useState<string[]>([]);

  // UC to page mapping
  const ucToPageMapping: { [key: string]: string } = {
    "UC1": "/uc1",
    "UC2": "/uc2", 
    "UC3": "/uc3",
    "UC4": "/uc4",
    "UC5": "/uc5",
    "UC6": "/uc6",
    "UC7": "/uc7",
    "UC8": "/uc8"
  };

  // New 2-step flow handlers
  const handleStep1Selection = (cardId: string) => {
    let newSelections = [...step1Selections];
    
    if (newSelections.includes(cardId)) {
      // Remove if already selected (multi-select toggle)
      newSelections = newSelections.filter(id => id !== cardId);
    } else {
      // Add to selections
      newSelections.push(cardId);
    }
    
    setStep1Selections(newSelections);
    
    // Show Step 2 as soon as at least one domain is selected
    if (newSelections.length > 0 && !showStep2) {
      setShowStep2(true);
    } else if (newSelections.length === 0) {
      setShowStep2(false);
      setShowUCResults(false);
      setStep2Selection('');
    }
  };

  const handleStep2Selection = (cardId: string) => {
    setStep2Selection(cardId);
    
    // Calculate UCs based on Step 1 + Step 2 combination
    const ucs = getUCsFromSelection(step1Selections, cardId);
    setResultUCs(ucs);
    
    // If only one UC, redirect directly
    if (ucs.length === 1) {
      const finalUC = ucs[0];
      toast({
        title: "Solution trouvée",
        description: `Redirection vers ${finalUC}...`,
      });
      setTimeout(() => setLocation(ucToPageMapping[finalUC]), 1000);
    } else {
      // Show UC selection cards if multiple UCs
      setShowUCResults(true);
    }
  };

  const handleUCSelection = (uc: string) => {
    toast({
      title: "Découvrir ce cas d'usage",
      description: `Redirection vers ${uc}...`,
    });
    setTimeout(() => setLocation(ucToPageMapping[uc]), 1000);
  };

  const handleBackToStep1 = () => {
    setShowStep2(false);
    setShowUCResults(false);
    setStep1Selections([]);
    setStep2Selection('');
  };

  const handleBackToStep2 = () => {
    setShowUCResults(false);
    setStep2Selection('');
  };

  // UC information for display
  const ucInfo: { [key: string]: { title: string; description: string } } = {
    "UC1": { title: "Fast-Track Small Project Bids", description: "Solutions rapides pour petits projets" },
    "UC2": { title: "Medium Project Management", description: "Gestion complète de projets moyens" },
    "UC3": { title: "Complex Multi-Lot Bid Management", description: "Gestion de grands appels d'offres complexes" },
    "UC4": { title: "Small Project Execution", description: "Exécution de petits projets" },
    "UC5": { title: "Medium Project Execution", description: "Exécution de projets moyens" },
    "UC6": { title: "Large Project Execution", description: "Exécution de grands projets" },
    "UC7": { title: "Knowledge Management Small", description: "Gestion des connaissances pour petites structures" },
    "UC8": { title: "Knowledge Management Large", description: "Gestion des connaissances pour grandes organisations" }
  };

  const resetSelection = () => {
    setStep1Selections([]);
    setStep2Selection('');
    setShowStep2(false);
    setShowUCResults(false);
  };

  const getStepTitle = () => {
    if (!showStep2) {
      return t[language].domainSelection;
    } else if (!showUCResults) {
      return t[language].projectSize;
    } else {
      return t[language].chooseUseCase;
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-12">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-aitenders-black mb-4">
              {t[language].mainTitle}<br />
              <span className="text-aitenders-primary-blue">{t[language].mainSubtitle}</span>
            </h1>
            <p className="text-lg text-aitenders-dark-blue max-w-2xl mx-auto mt-3">
              {t[language].description}
            </p>
          </div>

          {/* Dynamic Selection Cards */}
          <div className="mb-12 max-w-3xl mx-auto">


            {/* Step Title */}
            <h2 className="text-2xl font-bold text-aitenders-black mb-8 text-center">
              {getStepTitle()}
            </h2>

            {/* Step 1: Domain Selection */}
            {!showUCResults && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {step1Cards.map((card) => {
                  const Icon = card.icon;
                  const isSelected = step1Selections.includes(card.id);
                  return (
                    <Card
                      key={card.id}
                      onClick={() => handleStep1Selection(card.id)}
                      className={`rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border transition-all duration-200 ease-in-out hover:scale-105 ${
                        isSelected 
                          ? 'border-aitenders-primary-blue bg-aitenders-pale-blue' 
                          : 'border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue'
                      }`}
                    >
                      <div className="text-center">
                        <div className={`p-4 rounded-xl mb-4 mx-auto w-fit ${card.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-aitenders-black mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-aitenders-dark-blue">
                          {card.description}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Step 2: Project Size Selection */}
            {showStep2 && !showUCResults && (
              <div className="animate-in fade-in duration-300">
                <div className="flex justify-between items-center mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToStep1}
                    className="text-aitenders-primary-blue hover:text-aitenders-dark-blue"
                  >
                    {t[language].back}
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {step2Cards.map((card) => {
                    const Icon = card.icon;
                    const isSelected = step2Selection === card.id;
                    return (
                      <Card
                        key={card.id}
                        onClick={() => handleStep2Selection(card.id)}
                        className={`rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border transition-all duration-200 ease-in-out hover:scale-105 ${
                          isSelected 
                            ? 'border-aitenders-primary-blue bg-aitenders-pale-blue' 
                            : 'border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`p-4 rounded-xl mb-4 mx-auto w-fit ${card.color}`}>
                            <Icon className="h-8 w-8" />
                          </div>
                          <h3 className="text-lg font-semibold text-aitenders-black mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-aitenders-dark-blue">
                            {card.description}
                          </p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* UC Results */}
            {showUCResults && (
              <div className="animate-in fade-in duration-300">
                <div className="flex justify-between items-center mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToStep2}
                    className="text-aitenders-primary-blue hover:text-aitenders-dark-blue"
                  >
                    {t[language].back}
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resultUCs.map((uc) => (
                    <Card
                      key={uc}
                      onClick={() => handleUCSelection(uc)}
                      className="rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue transition-all duration-200 ease-in-out hover:scale-105"
                    >
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-aitenders-black mb-2">
                          {uc}
                        </h3>
                        <p className="text-sm text-aitenders-dark-blue mb-4">
                          {ucInfo[uc]?.description}
                        </p>
                        <Button className="bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-aitenders-white-blue">
                          {t[language].discoverUseCase}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Selection Summary */}
            {(step1Selections.length > 0 || step2Selection) && (
              <div className="mt-8 p-6 bg-aitenders-pale-blue rounded-2xl border border-aitenders-light-blue">
                <p className="text-sm text-aitenders-dark-blue mb-3 font-medium">{t[language].yourSelection}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {step1Selections.map((selectionId) => {
                    const selectedCard = step1Cards.find(c => c.id === selectionId);
                    return (
                      <span
                        key={selectionId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-aitenders-white-blue text-aitenders-dark-blue border border-aitenders-light-blue shadow-sm"
                      >
                        {selectedCard?.title}
                      </span>
                    );
                  })}
                  {step2Selection && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-aitenders-primary-blue/10 text-aitenders-primary-blue border border-aitenders-primary-blue/20 shadow-sm">
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

          {/* Chat UI - Expandable Chatbot Interface */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              {!chatExpanded ? (
                /* Collapsed Chat Bar */
                <div 
                  className="bg-aitenders-white-blue border border-aitenders-light-blue rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => setChatExpanded(true)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 ml-2">
                      <FaRobot className="w-5 h-5 text-aitenders-primary-blue" />
                    </div>
                    <Input
                      type="text"
                      placeholder={t[language].chatPlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      onFocus={() => setChatExpanded(true)}
                      className="flex-1 py-6 px-4 text-base bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-aitenders-dark-blue/60"
                      disabled={sendMessageMutation.isPending}
                    />
                    <div className="mr-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!chatExpanded) setChatExpanded(true);
                          handleSendMessage();
                        }}
                        disabled={!message.trim() || sendMessageMutation.isPending}
                        size="icon"
                        className="h-12 w-12 rounded-full bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-aitenders-white-blue shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <MdSend className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Expanded Chat Interface */
                <div className="bg-aitenders-white-blue border border-aitenders-light-blue rounded-3xl shadow-lg p-6 transition-all duration-300 ease-in-out">
                  {/* Chat Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-aitenders-black">{t[language].chatTitle}</h3>
                    <Button
                      onClick={() => setChatExpanded(false)}
                      variant="ghost"
                      size="sm"
                      className="text-aitenders-dark-blue/60 hover:text-aitenders-dark-blue -mr-2"
                    >
                      <span className="text-xl">×</span>
                    </Button>
                  </div>

                  {/* Chat Input Bar */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 ml-2">
                      <FaRobot className="w-6 h-6 text-aitenders-primary-blue" />
                    </div>
                    <Input
                      type="text"
                      placeholder={t[language].chatPlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 py-3 px-4 text-base bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-aitenders-dark-blue/60"
                      disabled={sendMessageMutation.isPending}
                      autoFocus
                    />
                    <div className="mr-2">
                      <Button
                        onClick={handleSendMessage}
                        disabled={!message.trim() || sendMessageMutation.isPending}
                        size="icon"
                        className="h-12 w-12 rounded-full bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-aitenders-white-blue shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <MdSend className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages Display */}
                  <div className="bg-aitenders-pale-blue rounded-2xl p-4 min-h-[200px] max-h-64 overflow-y-auto mb-4">
                    {messages.length === 0 ? (
                      <div className="flex items-center justify-center h-full text-aitenders-dark-blue/60 text-sm">
                        <div className="text-center">
                          <FaRobot className="w-8 h-8 mx-auto mb-2 text-aitenders-light-blue" />
                          <p>Start a conversation by typing your question above</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {messages.map((msg) => (
                          <div key={msg.id} className="space-y-3">
                            <div className="flex justify-end">
                              <div className="bg-aitenders-primary-blue text-aitenders-white-blue px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs lg:max-w-sm">
                                <p className="text-sm">{msg.message}</p>
                              </div>
                            </div>
                            {msg.response && (
                              <div className="flex justify-start">
                                <div className="bg-aitenders-white-blue text-aitenders-dark-blue px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs lg:max-w-sm shadow-sm border border-aitenders-light-blue">
                                  <p className="text-sm">{msg.response}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setMessage(language === 'fr' ? "Quels cas d'usage proposez-vous ?" : "What use cases do you offer?")}
                      className="text-xs rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue"
                    >
                      {t[language].ourUseCases}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setMessage(language === 'fr' ? "Comment fonctionne le processus d'appel d'offres ?" : "How does the tender process work?")}
                      className="text-xs rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue"
                    >
                      {t[language].tenderProcess}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setMessage(language === 'fr' ? "Puis-je planifier une démo ?" : "Can I schedule a demo?")}
                      className="text-xs rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue"
                    >
                      {t[language].scheduleDemo}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Learn More Card - More Rectangular */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <Card 
            onClick={() => window.open("https://replit.com/@aitendersdev/SimpleSaaS", "_blank")}
            className="bg-gradient-to-r from-aitenders-white-blue to-aitenders-pale-blue border border-aitenders-light-blue rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="p-3 rounded-xl bg-aitenders-primary-blue/10 flex-shrink-0">
                  <MdLightbulb className="h-6 w-6 text-aitenders-primary-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-aitenders-black mb-2">
                    {t[language].learnMore}
                  </h3>
                  <p className="text-sm text-aitenders-dark-blue">
                    {t[language].learnMoreDescription}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-6">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://replit.com/@aitendersdev/SimpleSaaS", "_blank");
                  }}
                  className="bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-aitenders-white-blue px-6 py-2 text-sm font-medium rounded-xl shadow-sm"
                >
                  {t[language].exploreSolutions}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Client Logos */}
      <ClientLogos language={language} />

      

      {/* Contact Section */}
      <ContactSection language={language} />
    </div>
  );
}