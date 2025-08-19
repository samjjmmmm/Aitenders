import { useState } from "react";
import Header from "@/components/header";
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
      <section 
        style={{ 
          background: "linear-gradient(135deg, #112646 0%, #1E3A8A 50%, #1F2937 100%)",
          paddingTop: "8rem",
          paddingBottom: "8rem",
          color: "#FBFCFF",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Content */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                L'intelligence de vos équipes Projets,{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    démultipliée par l'IA
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-medium">
                Dès l'appel d'offres jusqu'à la livraison, Aitenders est votre copilote – conçu pour aller plus vite et rester aligné.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  style={{ 
                    background: "linear-gradient(135deg, #3880E8 0%, #2563EB 100%)", 
                    color: "#FFFFFF",
                    padding: "1.25rem 3rem",
                    borderRadius: "16px",
                    fontWeight: "700",
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 16px 40px rgba(56,128,232,0.4), 0 4px 0 rgba(255,255,255,0.2) inset",
                    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    letterSpacing: "0.3px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 24px 50px rgba(56,128,232,0.5), 0 4px 0 rgba(255,255,255,0.25) inset";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(56,128,232,0.4), 0 4px 0 rgba(255,255,255,0.2) inset";
                  }}
                >
                  Demander une démo
                </button>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">70%</div>
                  <div className="text-sm text-blue-200">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">3.5x</div>
                  <div className="text-sm text-blue-200">Win Rate Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">500+</div>
                  <div className="text-sm text-blue-200">Enterprise Clients</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Dashboard Preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg" style={{ perspective: "1000px" }}>

                {/* Main Dashboard Container */}
                <div 
                  className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500"
                  style={{ 
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.1)",
                    transform: "rotateY(-5deg) rotateX(5deg)"
                  }}
                >
                  {/* Dashboard Header */}
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                    <div className="ml-auto text-white text-sm font-semibold">Aitenders Dashboard</div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-6">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                        <div className="text-2xl font-bold text-blue-900">24</div>
                        <div className="text-xs text-blue-600">Active Tenders</div>
                      </div>
                      <div className="bg-green-50/80 rounded-xl p-4 border border-green-100">
                        <div className="text-2xl font-bold text-green-900">87%</div>
                        <div className="text-xs text-green-600">Win Rate</div>
                      </div>
                    </div>

                    {/* AI Analysis Progress */}
                    <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-amber-900">AI Document Analysis</h4>
                        <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Processing</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-amber-700">
                          <span>Requirements Extraction</span>
                          <span>94%</span>
                        </div>
                        <div className="w-full bg-amber-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-1000" 
                            style={{ width: "94%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-slate-700 mb-2">Recent Activity</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>New tender: Infrastructure Project Alpha</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Compliance check completed</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <span>Team collaboration active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated indicators */}
                  <div className="absolute top-20 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute bottom-20 left-6 w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>

                  {/* Floating data points */}
                  <div className="absolute top-24 left-8 w-4 h-4 bg-blue-100 rounded-full animate-float opacity-60"></div>
                  <div className="absolute bottom-32 right-8 w-3 h-3 bg-indigo-100 rounded-full animate-float opacity-60" style={{ animationDelay: "1.5s" }}></div>
                </div>

                {/* Shadow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-xl opacity-20 -z-10"
                  style={{ 
                    background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                    transform: "translateY(20px) scale(0.95)"
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section 
        style={{ 
          backgroundColor: "#FBFCFF", 
          padding: "4rem 0",
          borderBottom: "1px solid #EBF2FD"
        }}
      >
        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 
              style={{ 
                fontSize: "1rem", 
                fontWeight: "600", 
                color: "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "2rem"
              }}
            >
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <img 
                  src="https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788131510x657691839410021800/logo%20client_vinci.png" 
                  alt="Vinci" 
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <img 
                  src="https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788145140x676564290904210200/logo%20client_eiffage.png" 
                  alt="Eiffage" 
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <img 
                  src="https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788168917x606403587556325600/logo%20client_equans.png" 
                  alt="Equans" 
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <img 
                  src="https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788157547x760109737354937000/logo%20client_nge.png" 
                  alt="NGE" 
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
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
                    <h4 className="text-lg font-bold text-white mb-2">ROI Impact Analysis</h4>
                    <p className="text-sm text-slate-300">12-month performance metrics</p>
                  </div>

                  {/* Chart Content */}
                  <div className="p-6 space-y-6">
                    {/* Before/After Comparison */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-2">
                          <span>Bid Preparation Time</span>
                          <span className="text-red-400">-70%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-red-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-red-400">Before: 40hrs</div>
                          </div>
                          <div className="flex-1 bg-green-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-green-400">After: 12hrs</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-2">
                          <span>Win Rate</span>
                          <span className="text-green-400">+250%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-red-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-red-400">Before: 25%</div>
                          </div>
                          <div className="flex-1 bg-green-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-green-400">After: 87%</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-2">
                          <span>Compliance Issues</span>
                          <span className="text-green-400">-100%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-red-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-red-400">Before: 15%</div>
                          </div>
                          <div className="flex-1 bg-green-400/20 rounded-lg p-2 text-center">
                            <div className="text-xs text-green-400">After: 0%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROI Summary */}
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-1">520%</div>
                        <div className="text-sm text-blue-300">Average ROI in Year 1</div>
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
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Lire plus vite. Identifier l'essentiel.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Le module Analyse automatise la lecture et la classification des documents d'appel d'offres. Il extrait les exigences clés, détecte les contradictions et classe les contenus par catégorie. Votre équipe sait où agir, dès le départ.
              </p>
              <div className="flex items-center text-lg font-semibold text-green-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                Ce que ça change : Qualification plus rapide, réduction des erreurs, meilleure visibilité sur les risques.
              </div>
            </div>
            <div className="flex justify-center items-center relative min-h-[600px] lg:min-h-[500px]">
              <div className="w-full max-w-lg relative z-10">
                <div className="relative aspect-square">
                  <img 
                    src={analyseUIImage} 
                    alt="Aitenders Analysis Interface"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ 
                      transform: "scale(1.8)", 
                      transformOrigin: "center center",
                      maxWidth: "none",
                      maxHeight: "none"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Write - Right aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-xl flex items-center justify-center border border-green-200">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <div className="text-green-800 font-semibold">Smart Writing</div>
                  <div className="text-green-600 text-sm">Template-Based Generation</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900"> Write</h3>
              </div>
              <h4 className="text-xl font-semibold text-green-600 mb-4">Répondre avec méthode. Ne pas repartir de zéro.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Write permet de structurer vos réponses à partir de contenus existants. Vous reliez chaque réponse à l'exigence correspondante, vous réutilisez ce qui a déjà fonctionné, et vous réduisez le temps de rédaction.
              </p>
              <div className="flex items-center text-lg font-semibold text-green-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                Ce que ça change : Réponses plus cohérentes, délais de production réduits, moins de pression sur les équipes.
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
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Suivre ce qui a été promis. Et livrer.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Pilot vous aide à suivre l'exécution du contrat : engagements pris, livrables attendus, écarts constatés. Vous pilotez en temps réel l'avancement de chaque projet, sans dépendre de fichiers dispersés.
              </p>
              <div className="flex items-center text-lg font-semibold text-green-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                Ce que ça change : Moins de dérives projets, meilleure coordination avec le client, traçabilité complète des actions.
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-xl flex items-center justify-center border border-purple-200">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <div className="text-purple-800 font-semibold">Project Tracking</div>
                  <div className="text-purple-600 text-sm">Real-time Monitoring</div>
                </div>
              </div>
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
              <h4 className="text-xl font-semibold text-orange-600 mb-4">Capitaliser sur chaque réponse. Valoriser l'expérience.</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Avec Knowledge, chaque contenu produit devient un actif réutilisable. Vous centralisez les réponses validées, les retours d'expérience et les éléments clés pour accélérer les réponses futures et éviter la redondance.
              </p>
              <div className="flex items-center text-lg font-semibold text-green-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                Ce que ça change : Moins de travail inutile, montée en compétence accélérée, et qualité constante dans le temps.
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
        `}</style>
      </section>



      {/* 6. SECURITY & COMPLIANCE SECTION */}
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