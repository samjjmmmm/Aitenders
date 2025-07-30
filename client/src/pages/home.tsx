import { useState } from "react";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import ChatWidget from "@/components/chat-widget";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { 
  MdBarChart, MdSearch, MdDescription, MdLightbulb, MdTrendingUp, MdSecurity, MdPeople, 
  MdInsertDriveFile, MdSettings, MdEmojiEvents, MdGpsFixed, 
  MdSchedule, MdCheckCircle, MdEdit, MdAnalytics, MdVerifiedUser, MdGroups, MdAccountCircle 
} from "react-icons/md";
import { FaRobot, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

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
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');
  const [, setLocation] = useLocation();

  // Translations
  const t = {
    fr: {
      title: "Aitenders",
      subtitle: "Chaque exigence traitée. Chaque soumission optimisée.",
      description: "Plateforme d'IA pour la gestion d'appels d'offres qui transforme les documents complexes en stratégies gagnantes.",
      getStarted: "Commencer",
      learnMore: "En savoir plus",
      learnMoreDescription: "Découvrez comment l'IA révolutionne la gestion des appels d'offres",
      exploreSolutions: "Explorer nos solutions",
      step1Title: "Quel est votre profil ?",
      step2Title: "Quel est votre besoin principal ?",
      yourSelection: "Votre sélection :",
      availableUseCases: "Cas d'usage recommandés :",
      chatTitle: "Assistant IA Aitenders",
      chatPlaceholder: "Posez votre question sur les appels d'offres...",
      ourUseCases: "Nos cas d'usage",
      tenderProcess: "Processus d'appel d'offres",
      scheduleDemo: "Planifier une démo",
      
      // Step 1 Cards
      smallTeam: "Petite équipe",
      smallTeamDesc: "Équipe de 1-10 personnes gérant des projets simples",
      mediumTeam: "Équipe moyenne",
      mediumTeamDesc: "Équipe de 10-50 personnes avec projets variés",
      largeTeam: "Grande équipe",
      largeTeamDesc: "Équipe de 50+ personnes, projets complexes",
      consultant: "Consultant",
      consultantDesc: "Expert indépendant ou cabinet de conseil",
      
      // Step 2 Cards
      bidPreparation: "Préparation de soumissions",
      bidPreparationDesc: "Rédaction et optimisation des réponses",
      projectManagement: "Gestion de projets",
      projectManagementDesc: "Suivi et coordination des équipes",
      complianceTracking: "Suivi de conformité",
      complianceTrackingDesc: "Vérification des exigences réglementaires",
      marketIntelligence: "Veille concurrentielle",
      marketIntelligenceDesc: "Analyse du marché et des concurrents",
    },
    en: {
      title: "Aitenders",
      subtitle: "Every requirement addressed. Every bid optimized.",
      description: "AI-powered tender management platform that transforms complex documents into winning strategies.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      learnMoreDescription: "Discover how AI is revolutionizing tender management",
      exploreSolutions: "Explore Solutions",
      step1Title: "What's your profile?",
      step2Title: "What's your main need?",
      yourSelection: "Your selection:",
      availableUseCases: "Recommended use cases:",
      chatTitle: "Aitenders AI Assistant",
      chatPlaceholder: "Ask your question about tenders...",
      ourUseCases: "Our use cases",
      tenderProcess: "Tender process",
      scheduleDemo: "Schedule demo",
      
      // Step 1 Cards
      smallTeam: "Small team",
      smallTeamDesc: "Team of 1-10 people managing simple projects",
      mediumTeam: "Medium team", 
      mediumTeamDesc: "Team of 10-50 people with varied projects",
      largeTeam: "Large team",
      largeTeamDesc: "Team of 50+ people, complex projects",
      consultant: "Consultant",
      consultantDesc: "Independent expert or consulting firm",
      
      // Step 2 Cards
      bidPreparation: "Bid preparation",
      bidPreparationDesc: "Writing and optimizing responses",
      projectManagement: "Project management",
      projectManagementDesc: "Team tracking and coordination",
      complianceTracking: "Compliance tracking",
      complianceTrackingDesc: "Regulatory requirements verification",
      marketIntelligence: "Market intelligence",
      marketIntelligenceDesc: "Market and competitor analysis",
    }
  };

  // Decision tree state
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [step1Selections, setStep1Selections] = useState<string[]>([]);
  const [step2Selection, setStep2Selection] = useState<string>("");

  // Step 1 cards - Profile selection (multiple choice)
  const step1Cards: SelectionCard[] = [
    {
      id: "small-team",
      title: t[language].smallTeam,
      description: t[language].smallTeamDesc,
      icon: MdPeople,
      color: "bg-blue-50 border-blue-200 text-blue-800",
      useCases: ["UC1", "UC2"],
    },
    {
      id: "medium-team", 
      title: t[language].mediumTeam,
      description: t[language].mediumTeamDesc,
      icon: MdGroups,
      color: "bg-green-50 border-green-200 text-green-800",
      useCases: ["UC2", "UC3", "UC4"],
    },
    {
      id: "large-team",
      title: t[language].largeTeam,
      description: t[language].largeTeamDesc,
      icon: MdVerifiedUser,
      color: "bg-purple-50 border-purple-200 text-purple-800", 
      useCases: ["UC3", "UC4", "UC5"],
    },
    {
      id: "consultant",
      title: t[language].consultant,
      description: t[language].consultantDesc,
      icon: MdAccountCircle,
      color: "bg-orange-50 border-orange-200 text-orange-800",
      useCases: ["UC1", "UC6", "UC7"],
    },
  ];

  // Step 2 cards - Need selection (single choice)
  const step2Cards: SelectionCard[] = [
    {
      id: "bid-preparation",
      title: t[language].bidPreparation,
      description: t[language].bidPreparationDesc,
      icon: MdEdit,
      color: "bg-blue-50 border-blue-200 text-blue-800",
      useCases: ["UC1", "UC2"],
      redirectTo: "/uc1"
    },
    {
      id: "project-management",
      title: t[language].projectManagement,
      description: t[language].projectManagementDesc,
      icon: MdSettings,
      color: "bg-green-50 border-green-200 text-green-800",
      useCases: ["UC3", "UC4"],
      redirectTo: "/uc3"
    },
    {
      id: "compliance-tracking",
      title: t[language].complianceTracking,
      description: t[language].complianceTrackingDesc,
      icon: MdCheckCircle,
      color: "bg-purple-50 border-purple-200 text-purple-800",
      useCases: ["UC5", "UC6"],
      redirectTo: "/uc2"
    },
    {
      id: "market-intelligence",
      title: t[language].marketIntelligence,
      description: t[language].marketIntelligenceDesc,
      icon: MdAnalytics,
      color: "bg-orange-50 border-orange-200 text-orange-800",
      useCases: ["UC7", "UC8"],
      redirectTo: "/uc2"
    },
  ];

  // Step 1 selection handler (multiple choice)
  const handleStep1Selection = (cardId: string) => {
    setStep1Selections(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  // Step 2 selection handler (single choice)
  const handleStep2Selection = (cardId: string) => {
    setStep2Selection(cardId);
    // Auto-redirect to recommended UC page
    const selectedCard = step2Cards.find(card => card.id === cardId);
    if (selectedCard?.redirectTo) {
      setTimeout(() => {
        setLocation(selectedCard.redirectTo!);
      }, 1000);
    }
  };

  // Calculate result UCs based on selections
  const resultUCs = step1Selections.length > 0 && step2Selection
    ? Array.from(new Set([
        ...step1Selections.flatMap(selection => 
          step1Cards.find(card => card.id === selection)?.useCases || []
        ),
        ...(step2Cards.find(card => card.id === step2Selection)?.useCases || [])
      ])).sort()
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-aitenders-white-blue via-aitenders-pale-blue to-aitenders-pastel-blue">
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-aitenders-black mb-6 leading-tight">
              {t[language].title}
            </h1>
            <p className="text-xl md:text-2xl text-aitenders-dark-blue mb-4 font-medium max-w-4xl mx-auto leading-relaxed">
              {t[language].subtitle}
            </p>
            <p className="text-lg text-aitenders-dark-blue/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t[language].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-aitenders-white-blue px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => document.getElementById('decision-tree')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t[language].getStarted}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-aitenders-primary-blue text-aitenders-primary-blue hover:bg-aitenders-primary-blue hover:text-aitenders-white-blue px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
                onClick={() => window.open("https://replit.com/@aitendersdev/SimpleSaaS", "_blank")}
              >
                {t[language].learnMore}
              </Button>
            </div>
          </div>

          {/* 2-Step Decision Tree */}
          <div id="decision-tree" className="max-w-6xl mx-auto">
            {/* Step 1: Profile Selection */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-aitenders-black text-center mb-8">
                {t[language].step1Title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {step1Cards.map((card) => (
                  <Card
                    key={card.id}
                    className={`
                      relative p-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 border-2 rounded-2xl shadow-sm hover:shadow-lg
                      ${step1Selections.includes(card.id)
                        ? 'border-aitenders-primary-blue bg-aitenders-primary-blue/10 shadow-lg'
                        : 'border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue/50'
                      }
                    `}
                    onClick={() => handleStep1Selection(card.id)}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-3 rounded-xl ${step1Selections.includes(card.id) ? 'bg-aitenders-primary-blue text-aitenders-white-blue' : 'bg-aitenders-primary-blue/10 text-aitenders-primary-blue'}`}>
                        <card.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-aitenders-black mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-aitenders-dark-blue/70 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    {step1Selections.includes(card.id) && (
                      <div className="absolute top-3 right-3">
                        <MdCheckCircle className="w-6 h-6 text-aitenders-primary-blue" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Step 2: Need Selection */}
            {step1Selections.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-aitenders-black text-center mb-8">
                  {t[language].step2Title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {step2Cards.map((card) => (
                    <Card
                      key={card.id}
                      className={`
                        relative p-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 border-2 rounded-2xl shadow-sm hover:shadow-lg
                        ${step2Selection === card.id
                          ? 'border-aitenders-primary-blue bg-aitenders-primary-blue/10 shadow-lg'
                          : 'border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue/50'
                        }
                      `}
                      onClick={() => handleStep2Selection(card.id)}
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`p-3 rounded-xl ${step2Selection === card.id ? 'bg-aitenders-primary-blue text-aitenders-white-blue' : 'bg-aitenders-primary-blue/10 text-aitenders-primary-blue'}`}>
                          <card.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-aitenders-black mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-aitenders-dark-blue/70 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      {step2Selection === card.id && (
                        <div className="absolute top-3 right-3">
                          <MdCheckCircle className="w-6 h-6 text-aitenders-primary-blue" />
                        </div>
                      )}
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

      {/* Fixed Chat Widget */}
      <ChatWidget />
    </div>
  );
}