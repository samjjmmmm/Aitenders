import { useState } from "react";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Shield,
  FileText,
  BarChart3,
  Zap,
  Users,
  Target,
  Award,
  Clock,
  Globe,
  Lightbulb,
  Briefcase,
  HeartHandshake,
  TrendingUp,
  Eye,
  Database,
  RefreshCw,
  MessageSquare,
  Search,
  AlertTriangle,
  Settings,
  Lock,
  CheckSquare,
  BookOpen,
  PieChart
} from "lucide-react";

// Import the analysis UI image
import analyseUIImage from "@assets/Container_1755591723285.png";

// Import the write UI image
import writeUIImage from "@assets/UI 2_1755592757928.png";

// Import the pilot UI image
import pilotUIImage from "@assets/UI 3_1755595225786.png";

// Import required components
// HomeTenderComplexitySection and ComparisonSection are commented out as they don't exist yet

// Feature Cards Data
const featureCards = [
  {
    title: "Document Analysis & Requirements Extraction",
    description: "AI automatically extracts key requirements, clauses, and compliance criteria from tender documents, saving hours of manual review.",
    icon: <FileText className="w-8 h-8 text-white" />,
    iconBgColor: "#3B82F6",
    badge: { text: "AI-POWERED", bgColor: "#DBEAFE", textColor: "#1E40AF" }
  },
  {
    title: "Tender Opportunity Scoring",
    description: "Smart scoring algorithm evaluates your win probability based on historical data, requirements match, and competitive landscape.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    iconBgColor: "#10B981",
    badge: { text: "ANALYTICS", bgColor: "#D1FAE5", textColor: "#065F46" }
  },
  {
    title: "Real-time Collaboration Hub",
    description: "Centralized workspace where teams can collaborate on bid responses, track progress, and manage deadlines efficiently.",
    icon: <Users className="w-8 h-8 text-white" />,
    iconBgColor: "#8B5CF6",
    badge: { text: "TEAMWORK", bgColor: "#EDE9FE", textColor: "#5B21B6" }
  },
  {
    title: "Compliance & Risk Detection",
    description: "Automatically flags potential compliance issues and risks in your bid responses before submission.",
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
    iconBgColor: "#F59E0B",
    badge: { text: "RISK MANAGEMENT", bgColor: "#FEF3C7", textColor: "#92400E" }
  },
  {
    title: "Smart Template Library",
    description: "Access pre-built, industry-specific templates that adapt to your project requirements and past successful bids.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    iconBgColor: "#EF4444",
    badge: { text: "TEMPLATES", bgColor: "#FEE2E2", textColor: "#991B1B" }
  },
  {
    title: "Performance Analytics & Insights",
    description: "Comprehensive dashboards showing win rates, bid performance metrics, and actionable insights for improvement.",
    icon: <PieChart className="w-8 h-8 text-white" />,
    iconBgColor: "#06B6D4",
    badge: { text: "INSIGHTS", bgColor: "#CFFAFE", textColor: "#0E7490" }
  }
];

// Lifecycle Stages Data
const lifecycleStages = [
  {
    title: "Discovery & Qualification",
    icon: <Search className="w-6 h-6 text-white" />,
    points: [
      "AI-powered tender opportunity identification",
      "Automated qualification scoring",
      "Market intelligence gathering"
    ]
  },
  {
    title: "Analysis & Strategy",
    icon: <Target className="w-6 h-6 text-white" />,
    points: [
      "Requirements extraction and mapping",
      "Competitive analysis and positioning",
      "Win strategy development"
    ]
  },
  {
    title: "Response & Submission",
    icon: <Award className="w-6 h-6 text-white" />,
    points: [
      "Collaborative bid writing platform",
      "Compliance checking and validation",
      "Automated formatting and submission"
    ]
  }
];

// FAQ Data
const faqData = [
  {
    question: "Comment Aitenders s'intègre-t-il à nos processus existants ?",
    answer: "La plateforme s'adapte à vos méthodes de travail actuelles, sans bouleverser vos outils ni vos équipes."
  },
  {
    question: "Quels types d'appels d'offres peut-on gérer avec Aitenders ?",
    answer: "Tous types : marchés publics, privés, multi-lots, internationaux — quel que soit le secteur."
  },
  {
    question: "Nos données sont-elles sécurisées avec Aitenders ?",
    answer: "Oui. L'infrastructure respecte des standards stricts (hébergement dédié, chiffrement, SSO, etc.)."
  },
  {
    question: "Peut-on adapter Aitenders à notre secteur ou nos besoins spécifiques ?",
    answer: "Oui. L'outil est modulaire et configurable selon vos enjeux métier et votre organisation."
  },
  {
    question: "Quel accompagnement proposez-vous lors de la mise en place ?",
    answer: "Nous assurons un onboarding complet : cadrage, paramétrage, formation, support technique."
  },
  {
    question: "Comment mesurer le ROI d'Aitenders ?",
    answer: "Par le temps gagné, la baisse d'erreurs, l'augmentation de réponses déposées et de taux de réussite."
  }
];

const ProductPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-aitenders-white-blue">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Badge */}
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full">
              Plateforme IA pour Appels d'Offres
            </span>
            
            {/* Headline */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
              L'intelligence de vos équipes Projets,{" "}
              <span className="text-blue-600">démultipliée par l'IA</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Dès l'appel d'offres jusqu'à la livraison, Aitenders est votre copilote – conçu pour aller plus vite et rester aligné.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105">
                Demander une démo
              </button>
              <a href="#video" className="text-slate-600 hover:text-slate-800 font-semibold text-lg ml-6">
                Voir la vidéo →
              </a>
            </div>

            {/* KPIs */}
            <div className="mt-12 flex space-x-12">
              <div>
                <p className="text-4xl font-bold text-slate-800">70%</p>
                <p className="text-sm text-slate-500 mt-1">Time Saved</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-800">3.5x</p>
                <p className="text-sm text-slate-500 mt-1">Win Rate Boost</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-800">500+</p>
                <p className="text-sm text-slate-500 mt-1">Enterprise Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-slate-200 w-full max-w-lg">
              <iframe
                src="https://www.youtube.com/embed/ma1UFP-PXZ8?rel=0&showinfo=0&modestbranding=1&autoplay=0&controls=1&color=white&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=1&playsinline=1"
                title="Aitenders Platform Demo"
                className="w-full h-full border-0"
                style={{ aspectRatio: "16/9" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. CLIENT LOGOS SCROLLING BANNER */}
      <section 
        style={{ 
          backgroundColor: "#FBFCFF", 
          padding: "4rem 0",
          borderBottom: "1px solid #EBF2FD"
        }}
      >
        <ClientLogos language="fr" />
      </section>

      {/* 3. VALUE PROPOSITION SECTION */}
      <section 
        style={{ 
          backgroundColor: "#F5F9FE", 
          padding: "8rem 0"
        }}
      >
        <div className="grid-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              {" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Simplifiez votre gestion des appels d'offres et réduisez les risques d'erreurs
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full"></div>
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Aitenders permet de répondre plus vite aux appels d'offres en automatisant l'analyse, le suivi et la conformité. Chaque équipe accède aux bonnes informations, au bon moment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Content */}
            <div>

              {/* Key benefits */}
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Préparation des offres 70 % plus rapide</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">L'extraction automatique des exigences et l'utilisation de modèles intelligents réduisent fortement le travail manuel.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Taux de réussite multiplié par 3,5</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Les recommandations basées sur l'IA permettent de produire des réponses plus pertinentes et conformes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">100 % de conformité garantie</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Le contrôle automatisé de la conformité vous assure de ne manquer aucune exigence ni échéance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced ROI Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* ROI Chart Container */}
                <div 
                  className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500"
                  style={{ 
                    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.2)"
                  }}
                >
                  {/* Chart Header */}
                  <div className="p-6 border-b border-slate-600/50">
                    <h4 className="text-lg font-bold text-white mb-2">Analyse d'Impact ROI</h4>
                    <p className="text-sm text-slate-300">Métriques de performance sur 12 mois</p>
                  </div>

                  {/* Chart Content */}
                  <div className="p-6 space-y-6">
                    {/* Before/After Comparison */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-2">
                          <span>Temps de Préparation des Offres</span>
                          <span className="text-red-400">-70%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-red-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-red-400">Avant : 40h</div>
                          </div>
                          <div className="flex-1 bg-green-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-green-400">Après : 12h</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-2">
                          <span>Taux de Réussite</span>
                          <span className="text-green-400">+250%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-red-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-red-400">Avant : 25%</div>
                          </div>
                          <div className="flex-1 bg-green-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-green-400">Après : 87%</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-2">
                          <span>Problèmes de Conformité</span>
                          <span className="text-green-400">-100%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-red-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-red-400">Avant : 15%</div>
                          </div>
                          <div className="flex-1 bg-green-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-green-400">Après : 0%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROI Summary */}
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-1">520%</div>
                        <div className="text-sm text-blue-300">ROI Moyen en Année 1</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated elements */}
                  <div className="absolute top-20 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>

                {/* Shadow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-xl opacity-30 -z-10"
                  style={{ 
                    background: "linear-gradient(135deg, #1e293b 0%, #3B82F6 100%)",
                    transform: "translateY(20px) scale(0.95)"
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      

      {/* 3B. COMPARISON SECTION */}
      {/* <ComparisonSection /> */}

      {/* 4. BUILT FOR TENDER COMPLEXITY SECTION */}
      {/* <HomeTenderComplexitySection /> */}

      {/* 4B. FEATURES SECTION */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)" }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/5 to-indigo-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Modules Aitenders</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              De l'analyse à la livraison, tout ce qu'il faut pour maîtriser vos appels d'offres
            </h2>
          </div>

          {/* Feature 1: Analyse - Left aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Analyse</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Analyse intelligente des dossiers d'appel d'offres.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Explorez tous vos documents en quelques minutes, identifiez les risques, les exigences clés et les points critiques grâce à nos modèles d'intelligence artificielle.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Détection d'exigences et vérification de conformité</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Lecture automatique et génération de matrices</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Collaboration fluide avec les partenaires internes et externes</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
              <figure
                className="
                  feature-illustration
                  relative z-10 w-full max-w-2xl
                  mx-auto
                  rounded-2xl
                  shadow-2xl
                  border border-slate-200/60
                  bg-white
                  overflow-hidden
                "
                style={{ maxHeight: 560 }}
              >
                <img
                  src={analyseUIImage}
                  alt="Aitenders — interface d'analyse"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 80vw, 100vw"
                />
              </figure>
            </div>
          </div>

          {/* Feature 2: Write - Right aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center items-center relative">
              <figure
                className="
                  feature-illustration
                  relative z-10 w-full max-w-2xl
                  mx-auto
                  rounded-2xl
                  shadow-2xl
                  border border-slate-200/60
                  bg-white
                  overflow-visible
                "
                style={{ maxHeight: 640, padding: "1rem" }}
              >
                <img
                  src={writeUIImage}
                  alt="Aitenders — interface de rédaction"
                  className="block w-full h-auto object-contain"
                  style={{ 
                    transform: "scale(1.15)", 
                    transformOrigin: "center center"
                  }}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 80vw, 100vw"
                />
              </figure>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900"> Write</h3>
              </div>
              <h4 className="text-xl font-semibold text-green-600 mb-4">Créez des réponses solides, alignées et traçables.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Produisez vos livrables à partir de modèles personnalisés, garantissez la couverture des exigences et capitalisez sur vos précédentes réponses.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Génération de documents assistée par intelligence artificielle</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Bibliothèques de contenu personnalisables et réutilisables</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Suivi de la couverture des exigences contractuelles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Pilot - Left aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Pilot</h3>
              </div>
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Gardez le contrôle jusqu'à la fin du projet.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Pilotez les engagements, les changements contractuels et le suivi de la conformité en exécution de manière structurée et centralisée.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Gestion des modifications contractuelles et avenants</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Suivi des obligations et des risques liés</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Traçabilité documentaire et gestion des versions en masse</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
              <figure
                className="
                  feature-illustration
                  relative z-10 w-full max-w-2xl
                  mx-auto
                  rounded-2xl
                  shadow-2xl
                  border border-slate-200/60
                  bg-white
                  overflow-visible
                "
                style={{ maxHeight: 640, padding: "1rem" }}
              >
                <img
                  src={pilotUIImage}
                  alt="Aitenders — interface de pilotage"
                  className="block w-full h-auto object-contain"
                  style={{ 
                    transform: "scale(1.15)", 
                    transformOrigin: "center center"
                  }}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 80vw, 100vw"
                />
              </figure>
            </div>
          </div>

          {/* Feature 4: Knowledge - Right aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-xl flex items-center justify-center border border-orange-200">
                <div className="text-center">
                  <Database className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <div className="text-orange-800 font-semibold">Knowledge Base</div>
                  <div className="text-orange-600 text-sm">Centralized Learning</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Knowledge</h3>
              </div>
              <h4 className="text-xl font-semibold text-orange-600 mb-4">Votre mémoire projet, centralisée et activable.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Organisez votre capital documentaire, comparez les projets passés et alimentez chaque nouvelle réponse avec les meilleures pratiques issues de votre historique.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Recherche transversale sur les portefeuilles de projets</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Partage structuré de livrables et référentiels</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Infrastructure dédiée avec modèles IA personnalisables</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CSS animations */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(2deg);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .hover\\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }

          .feature-illustration img { 
            display: block; 
          }
          
          @media (max-width: 1024px) {
            .feature-illustration { 
              max-height: 520px; 
            }
          }
        `}</style>
      </section>



      {/* 6. INTEGRATION SECTION */}
      <section 
        style={{ 
          backgroundColor: "#F8FAFC", 
          padding: "8rem 0",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="grid-container relative z-10">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Intégration</span>
            </div>
            <h2 
              style={{ 
                fontSize: "2.5rem", 
                fontWeight: "700", 
                color: "#0B1A2E",
                marginBottom: "1.5rem",
                lineHeight: "1.2"
              }}
            >
              Connectez Aitenders à votre écosystème logiciel
            </h2>
            <p 
              style={{
                fontSize: "1.25rem",
                color: "#6B7280",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.6"
              }}
            >
              Notre plateforme s'adapte à votre organisation, vos outils existants et vos processus métiers. Elle s'intègre à votre environnement pour transformer une gestion fragmentée en intelligence connectée.
            </p>
          </div>

          {/* Key Value Proposition */}
          <div 
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              padding: "3rem",
              marginBottom: "4rem",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(59, 130, 246, 0.1)"
            }}
          >
            <div className="text-center">
              <div 
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem"
                }}
              >
                <Globe size={40} color="#FFFFFF" />
              </div>
              <h3 
                style={{ 
                  fontSize: "1.75rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Une plateforme ouverte et interopérable
              </h3>
              <p 
                style={{ 
                  fontSize: "1.125rem", 
                  color: "#6B7280",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                  margin: "0 auto"
                }}
              >
                Aitenders devient la colonne vertébrale numérique de vos projets, du sourcing à l'exécution. Elle connecte vos données, sécurise vos flux, et décuple l'impact de vos équipes.
              </p>
            </div>
          </div>

          {/* Integration Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Connecteurs existants */}
            <div 
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div 
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem"
                }}
              >
                <Settings size={28} color="#FFFFFF" />
              </div>
              <h4 
                style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Connecteurs existants
              </h4>
              <ul 
                style={{ 
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "1rem",
                  color: "#6B7280",
                  lineHeight: "1.6"
                }}
              >
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#10B981", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Intégration native avec Microsoft Word, Excel, Teams et SharePoint
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#10B981", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Plug-in Office 365 pour automatiser la récupération et l'envoi de contenus
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#10B981", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Sécurité et infrastructures compatibles
                </li>
              </ul>
            </div>

            {/* Sécurité et infrastructures */}
            <div 
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div 
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem"
                }}
              >
                <Shield size={28} color="#FFFFFF" />
              </div>
              <h4 
                style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Sécurité et infrastructures
              </h4>
              <ul 
                style={{ 
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "1rem",
                  color: "#6B7280",
                  lineHeight: "1.6"
                }}
              >
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#8B5CF6", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Disponible en mode SaaS ou en instance dédiée entreprise
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#8B5CF6", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Authentification unique (SSO)
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#8B5CF6", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Possibilité de déploiement sur site
                </li>
              </ul>
            </div>

            {/* Intégrations par API */}
            <div 
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div 
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem"
                }}
              >
                <RefreshCw size={28} color="#FFFFFF" />
              </div>
              <h4 
                style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Intégrations par API partenaires
              </h4>
              <ul 
                style={{ 
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "1rem",
                  color: "#6B7280",
                  lineHeight: "1.6"
                }}
              >
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#F59E0B", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Procore, Salesforce, et autres plateformes métiers
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#F59E0B", borderRadius: "50%", marginRight: "0.75rem" }}></div>
                  Connexion aux systèmes CRM, ERP, EMS, DMS, outils de gestion de livrables ou de conformité
                </li>
              </ul>
            </div>
          </div>

          {/* Three Levels of Integration */}
          <div style={{ marginBottom: "4rem" }}>
            <h3 
              style={{ 
                fontSize: "2rem", 
                fontWeight: "700", 
                color: "#0B1A2E",
                textAlign: "center",
                marginBottom: "3rem"
              }}
            >
              Trois niveaux d'intégration
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Intégration amont */}
              <div 
                style={{
                  backgroundColor: "#F0F9FF",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "2px solid #0EA5E9",
                  position: "relative"
                }}
              >
                <div 
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#0EA5E9",
                    color: "#FFFFFF",
                    padding: "0.5rem 1rem",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    fontWeight: "600"
                  }}
                >
                  AMONT
                </div>
                <h4 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "1rem",
                    marginTop: "1rem"
                  }}
                >
                  Intégration amont
                </h4>
                <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: "1.6" }}>
                  Synchronisation avec vos outils de sourcing, CRM et systèmes d'alerte. Automatisation via connecteurs email ou API.
                </p>
              </div>

              {/* Intégration métier */}
              <div 
                style={{
                  backgroundColor: "#F0FDF4",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "2px solid #10B981",
                  position: "relative"
                }}
              >
                <div 
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#10B981",
                    color: "#FFFFFF",
                    padding: "0.5rem 1rem",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    fontWeight: "600"
                  }}
                >
                  MÉTIER
                </div>
                <h4 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "1rem",
                    marginTop: "1rem"
                  }}
                >
                  Intégration métier
                </h4>
                <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: "1.6" }}>
                  Connexion directe à vos systèmes de gestion documentaire, outils de pricing, référentiels d'exigences, ou plateformes internes.
                </p>
              </div>

              {/* Intégration en exécution */}
              <div 
                style={{
                  backgroundColor: "#FDF4FF",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "2px solid #8B5CF6",
                  position: "relative"
                }}
              >
                <div 
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#8B5CF6",
                    color: "#FFFFFF",
                    padding: "0.5rem 1rem",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    fontWeight: "600"
                  }}
                >
                  EXÉCUTION
                </div>
                <h4 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "1rem",
                    marginTop: "1rem"
                  }}
                >
                  Intégration en exécution
                </h4>
                <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: "1.6" }}>
                  Connexion aux outils de gestion de projet, BIM, ERP, et plateformes de suivi d'exécution pour une continuité contractuelle.
                </p>
              </div>
            </div>
          </div>

          {/* Exploitez la puissance */}
          <div 
            style={{
              backgroundColor: "#112646",
              borderRadius: "24px",
              padding: "3rem",
              color: "#FFFFFF",
              background: "linear-gradient(135deg, #112646 0%, #1E3A8A 100%)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 
                  style={{ 
                    fontSize: "1.75rem", 
                    fontWeight: "700", 
                    marginBottom: "2rem"
                  }}
                >
                  Exploitez la puissance de vos données
                </h3>
                <div className="space-y-4">
                  {[
                    "Rattachez automatiquement les documents Word ou Excel à vos projets",
                    "Centralisez la collaboration via Microsoft Teams", 
                    "Sécurisez les accès avec l'authentification unique",
                    "Activez l'export intelligent vers vos outils internes",
                    "Automatisez les workflows grâce à nos APIs ouvertes"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>
                      <div 
                        style={{ 
                          marginRight: "0.75rem",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <CheckCircle size={14} color="#FFFFFF" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div 
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  padding: "2rem",
                  textAlign: "center",
                  backdropFilter: "blur(10px)"
                }}
              >
                <div 
                  style={{ 
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem"
                  }}
                >
                  <Database size={40} color="#FFFFFF" />
                </div>
                <h4 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    marginBottom: "1rem"
                  }}
                >
                  Une seule plateforme pour tout orchestrer
                </h4>
                <button 
                  style={{ 
                    backgroundColor: "#FFFFFF", 
                    color: "#112646",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Découvrir nos intégrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECURITY & COMPLIANCE SECTION */}
      <section 
        style={{ 
          backgroundColor: "#FBFCFF", 
          padding: "8rem 0"
        }}
      >
        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
                style={{ 
                  fontSize: "2.25rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1.5rem"
                }}
              >
                Sécurité et Conformité de Confiance
              </h2>
              <p 
                style={{
                  fontSize: "1.125rem",
                  color: "#6B7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6"
                }}
              >
                Nous prenons la sécurité au sérieux. Vos données sont protégées par des mesures de sécurité de niveau entreprise et des normes de conformité.
              </p>
              <ul 
                style={{ 
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: "2rem"
                }}
              >
                {[
                  "Conforme SOC 2",
                  "SSO et Accès Sécurisé aux Espaces de Travail",
                  "Conforme RGPD",
                  "Chiffrement et Isolation des Données"
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                      fontSize: "1rem",
                      color: "#0B1A2E"
                    }}
                  >
                    <div 
                      style={{ 
                        marginRight: "0.75rem",
                        backgroundColor: "#EBF5FF",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <CheckCircle size={14} color="#3880E8" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div 
                style={{
                  backgroundColor: "#F5F9FE",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.06)",
                  textAlign: "center"
                }}
              >
                <div 
                  style={{ 
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "#EBF5FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem"
                  }}
                >
                  <Shield size={32} color="#3880E8" />
                </div>
                <h3 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "0.75rem"
                  }}
                >
                  Obtenez Notre Aperçu Sécurité
                </h3>
                <p 
                  style={{ 
                    fontSize: "1rem", 
                    color: "#6B7280",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem"
                  }}
                >
                  Téléchargez notre documentation de sécurité complète pour en savoir plus sur la façon dont nous protégeons vos données.
                </p>
                <button 
                  style={{ 
                    backgroundColor: "#3880E8", 
                    color: "#FBFCFF",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Download size={18} /> 
                  <span>Télécharger l'Aperçu Sécurité PDF</span>
                </button>
                <div 
                  style={{ 
                    marginTop: "2rem",
                    padding: "1.5rem",
                    borderTop: "1px solid #E5E7EB",
                    position: "relative"
                  }}
                >
                  <div 
                    style={{ 
                      position: "absolute",
                      top: "-18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#F5F9FE",
                      padding: "0 0.75rem",
                      color: "#6B7280",
                      fontSize: "0.875rem"
                    }}
                  >
                    FAIT CONFIANCE PAR LES LEADERS DE L'INDUSTRIE
                  </div>
                  <div 
                    style={{ 
                      display: "flex",
                      justifyContent: "center",
                      gap: "1.5rem",
                      marginTop: "0.5rem"
                    }}
                  >
                    {/* These would be actual company logos */}
                    <div style={{ width: "80px", height: "30px", backgroundColor: "#E5E7EB", borderRadius: "4px" }} />
                    <div style={{ width: "80px", height: "30px", backgroundColor: "#E5E7EB", borderRadius: "4px" }} />
                    <div style={{ width: "80px", height: "30px", backgroundColor: "#E5E7EB", borderRadius: "4px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section 
        style={{ 
          backgroundColor: "#F5F9FE", 
          padding: "8rem 0"
        }}
      >
        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 
              style={{ 
                fontSize: "2.25rem", 
                fontWeight: "700", 
                color: "#0B1A2E",
                marginBottom: "1rem"
              }}
            >
              Vos questions sur Aitenders
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              Obtenez des réponses aux questions courantes sur la mise en œuvre et les fonctionnalités d'Aitenders.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "#FBFCFF",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                  transition: "box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div 
                  style={{
                    padding: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: openFaq === index ? "#F5F9FE" : "#FBFCFF",
                    borderBottom: openFaq === index ? "1px solid #E5E7EB" : "none"
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <h3 
                    style={{ 
                      fontSize: "1.125rem", 
                      fontWeight: "600", 
                      color: "#0B1A2E" 
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                <div 
                  style={{
                    padding: openFaq === index ? "1.25rem" : "0 1.25rem",
                    maxHeight: openFaq === index ? "500px" : "0",
                    opacity: openFaq === index ? "1" : "0",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <p 
                    style={{ 
                      fontSize: "1rem", 
                      color: "#6B7280",
                      lineHeight: "1.6"
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section 
        style={{ 
          backgroundColor: "#112646", 
          padding: "8rem 0",
          color: "#FBFCFF",
          textAlign: "center"
        }}
      >
        <div className="grid-container">
          <h2 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700", 
              marginBottom: "1.5rem",
              maxWidth: "800px",
              margin: "0 auto 1.5rem"
            }}
          >
            Structurez vos appels d'offres. Alignez vos équipes. Livrez sans erreur.
          </h2>

          <button 
            style={{ 
              backgroundColor: "#3880E8", 
              color: "#FBFCFF",
              padding: "1rem 2rem",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "1.125rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Réserver Votre Démo Maintenant
          </button>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }

        @keyframes scan {
          0% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(20px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 0.15; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .grid-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        @media (max-width: 768px) {
          .grid-container {
            padding: 0 1rem;
          }

          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .grid-cols-1.md\\:grid-cols-3 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .grid-cols-1.md\\:grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .grid-cols-1.md\\:grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductPage;