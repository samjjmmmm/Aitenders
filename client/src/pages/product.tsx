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
    question: "How does Aitenders integrate with existing workflows?",
    answer: "Aitenders integrates seamlessly with your current processes through our flexible API, Microsoft Office integration, and support for popular project management tools. Our implementation team works with you to ensure minimal disruption to your existing workflows."
  },
  {
    question: "What types of tenders can Aitenders handle?",
    answer: "Aitenders is designed to handle any type of tender, from simple procurement to complex multi-billion infrastructure projects. Our AI adapts to various industries including construction, engineering, IT services, consulting, and government contracts."
  },
  {
    question: "How secure is our data with Aitenders?",
    answer: "Security is our top priority. We implement enterprise-grade security measures including SOC 2 compliance, end-to-end encryption, role-based access controls, and regular security audits. Your data is isolated and protected at all times."
  },
  {
    question: "Can we customize Aitenders for our specific industry needs?",
    answer: "Absolutely. Aitenders offers extensive customization options including industry-specific templates, custom scoring criteria, tailored workflows, and specialized compliance rules. Our team works closely with you to configure the platform for your unique requirements."
  },
  {
    question: "What kind of support do you provide during implementation?",
    answer: "We provide comprehensive support including dedicated implementation specialists, training sessions for your team, migration assistance for existing data, and ongoing technical support. Most clients are fully operational within 2-4 weeks."
  },
  {
    question: "How do we measure ROI with Aitenders?",
    answer: "Aitenders provides detailed analytics showing time savings, win rate improvements, and process efficiency gains. Most clients see a 3-5x ROI within the first year through increased win rates, faster bid preparation, and reduced manual effort."
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/20 backdrop-blur-sm border border-blue-200/30 rounded-full mb-8">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">AI-Powered Tender Management</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
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
                  🚀 Request Demo
                </button>
                
                <button 
                  style={{ 
                    background: "rgba(255,255,255,0.1)", 
                    color: "#FFFFFF",
                    padding: "1.25rem 3rem",
                    borderRadius: "16px",
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    border: "2px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  📞 Talk to Sales
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
              {/* Company logo placeholders - in a real implementation, these would be actual logos */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <div style={{ width: "120px", height: "40px", backgroundColor: "#E5E7EB", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#9CA3AF" }}>
                  Fortune 500
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <div style={{ width: "120px", height: "40px", backgroundColor: "#E5E7EB", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#9CA3AF" }}>
                  Construction Leader
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <div style={{ width: "120px", height: "40px", backgroundColor: "#E5E7EB", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#9CA3AF" }}>
                  Infrastructure Corp
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                <div style={{ width: "120px", height: "40px", backgroundColor: "#E5E7EB", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#9CA3AF" }}>
                  Engineering Firm
                </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Why Choose Aitenders</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Win More Tenders,{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Simplifiez votre gestion des appels d'offres et réduisez les risques d'erreurs
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Aitenders aide les équipes à répondre plus rapidement aux appels d'offres, sans passer à côté des informations essentielles. La plateforme réduit le temps passé à rechercher dans les documents, facilite l'analyse des exigences et évite les envois tardifs ou incomplets. Grâce à l'extraction automatisée, au suivi des versions et aux outils de conformité intégrés, chaque membre de l'équipe dispose des bonnes informations au bon moment. La solution est sécurisée, évolutive, et adaptée aux équipes qui gèrent des projets complexes en parallèle.
              </p>
              
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

      {/* 3A. ENTERPRISE SECURITY BANNER */}
      <section 
        style={{ 
          background: "#FFFFFF",
          padding: "6rem 0",
          color: "#0F172A",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="grid-container relative">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h3 
              style={{ 
                fontSize: "1.75rem", 
                fontWeight: "700", 
                marginBottom: "1rem",
                color: "#0F172A"
              }}
            >
              Enterprise-grade security
            </h3>
            <p 
              style={{ 
                fontSize: "1.2rem", 
                opacity: "0.8",
                lineHeight: "1.6",
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
                color: "#374151"
              }}
            >
              Aitenders is built for high-stakes industries. With end-to-end encryption, role-based access, and full audit trails, your data and workflows stay secure and compliant from day one.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div style={{ 
                backgroundColor: "#F3F4F6", 
                padding: "1rem 1.5rem", 
                borderRadius: "12px",
                border: "1px solid #E5E7EB"
              }}>
                <div style={{ fontWeight: "700", fontSize: "1rem", color: "#1F2937" }}>SOC 2 Type II</div>
              </div>
              <div style={{ 
                backgroundColor: "#F3F4F6", 
                padding: "1rem 1.5rem", 
                borderRadius: "12px",
                border: "1px solid #E5E7EB"
              }}>
                <div style={{ fontWeight: "700", fontSize: "1rem", color: "#1F2937" }}>GDPR compliant</div>
              </div>
              <div style={{ 
                backgroundColor: "#F3F4F6", 
                padding: "1rem 1.5rem", 
                borderRadius: "12px",
                border: "1px solid #E5E7EB"
              }}>
                <div style={{ fontWeight: "700", fontSize: "1rem", color: "#1F2937" }}>ISO 27001-ready</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ textAlign: "center" }}>
            <h3 
              style={{ 
                fontSize: "2rem", 
                fontWeight: "700", 
                color: "#0F172A",
                marginBottom: "2rem"
              }}
            >
              Ready to transform your tender process?
            </h3>
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
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* 3B. COMPARISON SECTION */}
      {/* <ComparisonSection /> */}

      {/* 4. BUILT FOR TENDER COMPLEXITY SECTION */}
      {/* <HomeTenderComplexitySection /> */}

      {/* 4B. ADDITIONAL COMPLEXITY SECTION */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)" }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/5 to-indigo-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Built for Tender Complexity</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Intelligence that adapts to your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    most complex tenders
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full"></div>
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                From multi-billion infrastructure projects to specialized compliance requirements, our AI scales with your ambition.
              </p>

              {/* Feature highlights */}
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">AI-Powered Clause Recognition</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Extracts legal, technical, and financial clauses automatically from multi-format RFPs</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Content-Aware Risk Detection</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Flags non-standard or contradictory clauses with AI-driven risk scoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg" style={{ perspective: "1000px" }}>
                {/* Main AI Dashboard Container */}
                <div 
                  className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500"
                  style={{ 
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.1)"
                  }}
                >
                  {/* Dashboard Header */}
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                    <div className="ml-auto text-white text-sm font-semibold">AI Tender Analysis</div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-6">
                    {/* Document Analysis Status */}
                    <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-blue-900">Document Intelligence</h4>
                        <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Active</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-blue-700">
                          <span>Clause Extraction</span>
                          <span>98%</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Risk Analysis */}
                    <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-amber-900">Risk Detection</h4>
                        <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">2 Flags</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-amber-700">Non-standard payment terms detected</div>
                        <div className="text-xs text-amber-700">Compliance deviation in Section 4.2</div>
                      </div>
                    </div>

                    {/* Complexity Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-slate-800">847</div>
                        <div className="text-xs text-slate-600">Clauses Parsed</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-slate-800">12</div>
                        <div className="text-xs text-slate-600">Risk Areas</div>
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

      {/* 5. PRODUCT LIFECYCLE VIEW */}
      <section 
        style={{ 
          backgroundColor: "#112646", 
          padding: "8rem 0",
          color: "#FBFCFF"
        }}
      >
        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div 
              style={{ 
                backgroundColor: "rgba(56, 128, 232, 0.2)",
                color: "#3880E8",
                display: "inline-block",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "1rem"
              }}
            >
              FULL LIFECYCLE SUPPORT
            </div>
            <h2 
              style={{ 
                fontSize: "2.25rem", 
                fontWeight: "700", 
                marginBottom: "1rem"
              }}
            >
              Your AI Assistant Through Every Stage of the Tender
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                opacity: "0.8",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              From initial qualification to final execution, Aitenders streamlines your entire process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifecycleStages.map((stage, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  height: "100%",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div 
                  style={{ 
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1.5rem"
                  }}
                >
                  <div 
                    style={{ 
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem"
                    }}
                  >
                    {stage.icon}
                  </div>
                  <h3 
                    style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "700"
                    }}
                  >
                    {stage.title}
                  </h3>
                </div>
                <ul 
                  style={{ 
                    listStyleType: "none",
                    padding: 0,
                    margin: 0
                  }}
                >
                  {stage.points.map((point, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        opacity: "0.8"
                      }}
                    >
                      <div style={{ marginRight: "0.75rem", marginTop: "0.2rem" }}>
                        <CheckCircle size={16} color="#3880E8" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div 
                  style={{ 
                    position: "absolute",
                    bottom: "1.5rem",
                    right: "1.5rem",
                    width: "120px",
                    height: "80px",
                    backgroundImage: "url('/images/lifecycle-chart.svg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: "0.1"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURE GRID (INTERACTIVE CARDS) */}
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
              What You Can Do with Aitenders
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              Powerful features designed to streamline your tender management process from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "#FBFCFF",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.1)";

                  const underline = e.currentTarget.querySelector('.card-underline') as HTMLElement;
                  if (underline) {
                    underline.style.width = "100%";
                    underline.style.opacity = "1";
                  }

                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.06)";

                  const underline = e.currentTarget.querySelector('.card-underline') as HTMLElement;
                  if (underline) {
                    underline.style.width = "40px";
                    underline.style.opacity = "0.7";
                  }

                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.transform = "scale(1)";
                  }
                }}
              >
                <div 
                  style={{ 
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    marginBottom: "1.5rem",
                    backgroundColor: card.badge.bgColor,
                    color: card.badge.textColor
                  }}
                >
                  {card.badge.text}
                </div>
                <div 
                  className="icon-container"
                  style={{ 
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    backgroundColor: card.iconBgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    transition: "transform 0.3s ease"
                  }}
                >
                  {card.icon}
                </div>
                <h3 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "0.75rem"
                  }}
                >
                  {card.title}
                </h3>
                <p 
                  style={{ 
                    fontSize: "1rem", 
                    color: "#6B7280",
                    lineHeight: "1.6",
                    marginBottom: "2rem"
                  }}
                >
                  {card.description}
                </p>
                <div 
                  className="card-underline"
                  style={{ 
                    height: "3px", 
                    width: "40px", 
                    backgroundColor: card.badge.textColor, 
                    borderRadius: "2px",
                    transition: "width 0.3s ease, opacity 0.3s ease",
                    opacity: "0.7",
                    position: "absolute",
                    bottom: "0",
                    left: "0"
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
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
                Security & Compliance You Can Trust
              </h2>
              <p 
                style={{
                  fontSize: "1.125rem",
                  color: "#6B7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6"
                }}
              >
                We take security seriously. Your data is protected with enterprise-grade security measures and compliance standards.
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
                  "SOC 2 Compliant",
                  "SSO & Secure Workspace Access",
                  "GDPR-ready",
                  "Data Encryption & Isolation"
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
                  Get Our Security Overview
                </h3>
                <p 
                  style={{ 
                    fontSize: "1rem", 
                    color: "#6B7280",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem"
                  }}
                >
                  Download our comprehensive security documentation to learn more about how we protect your data.
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
                  <span>Download Security Overview PDF</span>
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
                    TRUSTED BY INDUSTRY LEADERS
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
              Frequently Asked Questions
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              Get answers to common questions about Aitenders implementation and features.
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
            Ready to Win Your Next Tender with AI?
          </h2>
          <p 
            style={{
              fontSize: "1.25rem",
              opacity: "0.8",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              lineHeight: "1.6"
            }}
          >
            Let us show you how your team can save hours and deliver 100% compliance.
          </p>
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
            🚀 Book Your Demo Now
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