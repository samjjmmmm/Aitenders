import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MdSchedule, MdCheckCircle, MdWarning, MdPeople, MdTrendingUp, MdSecurity, 
  MdFlashOn, MdArrowForward, MdGpsFixed, MdVerifiedUser, MdAnalytics, MdEmojiEvents, 
  MdMessage, MdShield, MdGroups, MdDescription, MdSettings, MdAccountBox, MdBusiness, 
  MdEngineering, MdGavel, MdTableChart, MdAccessTime, MdContentCopy, MdRefresh, MdSearch,
  MdDashboard, MdBolt, MdEdit, MdNotifications, MdVerified, MdSwapHoriz, MdPlayArrow,
  MdClose, MdCheck, MdStars, MdCloudSync, MdCreate, MdAutoAwesome, MdLink, 
  MdAccountTree, MdTrackChanges, MdCallSplit, MdSchema, MdGppBad, MdTimeline, 
  MdRotateRight, MdFlag, MdMail
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar, FaFileAlt, FaCogs } from "react-icons/fa";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import UC3AnalysisCard from "@/components/UC3AnalysisCard";
import { useState } from "react";
import { motion } from "framer-motion";

// Import client logos
import equansLogo from "@assets/Equans_1753711339292.png";
import bouyguesLogo from "@assets/Bouyges_1753711339292.png";
import colasLogo from "@assets/Colas_1753711339292.png";
import ChatSection from "@/components/chat-section";
import ChatInterface from "@/components/chat-interface";

export default function UC8Page() {
  // Target audience data with interactive content - UC8 adapted
  const targetAudiences = [
    {
      id: 'innovation-directors',
      title: 'Directeurs innovation et R&D',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Accélérez l\'innovation produit avec une IA qui identifie les opportunités breakthrough et optimise vos cycles de développement. Transformez vos idées en succès commerciaux plus rapidement que la concurrence.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ Innovation accélérée',
      alert: '📊 Time-to-market: -40%'
    },
    {
      id: 'product-managers',
      title: 'Chefs de produit',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Développez des produits market-fit avec une compréhension prédictive des besoins clients. L\'IA analyse les tendances, valide les concepts et optimise votre roadmap produit pour maximiser l\'adoption.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Produit validé',
      alert: '📈 Adoption: +65%'
    },
    {
      id: 'strategy-directors',
      title: 'Directeurs stratégie',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Anticipez les disruptions marché et positionnez votre entreprise sur les technologies émergentes. Bâtissez une stratégie d\'innovation data-driven qui crée un avantage concurrentiel durable.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Stratégie validée',
      alert: '✅ Avantage concurrentiel'
    },
    {
      id: 'technology-officers',
      title: 'Directeurs techniques CTO',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Pilotez l\'architecture technologique de demain avec une veille IA continue et des recommandations d\'évolution. Optimisez vos stack techniques et anticipez les besoins d\'infrastructure futurs.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Tech stack optimisée',
      alert: '📋 Architecture future-ready'
    },
    {
      id: 'business-development',
      title: 'Responsables développement',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Identifiez et capitalisez sur les opportunités de croissance avec une intelligence marché augmentée. Découvrez de nouveaux segments, partenariats stratégiques et modèles business innovants.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Opportunités identifiées',
      alert: '🎯 Croissance: +45%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Innovation désorganisée et inefficace",
      description: "Projets R&D dispersés sans vision stratégique claire, gaspillage de ressources sur des innovations non viables"
    },
    {
      icon: MdDescription,
      title: "Cycles de développement trop longs",
      description: "Time-to-market lent qui fait perdre des opportunités face à des concurrents plus agiles et innovants"
    },
    {
      icon: FaUsers,
      title: "Manque de vision prospective",
      description: "Incapacité à anticiper les disruptions technologiques et les évolutions marché qui transforment l'industrie"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Intelligence prospective de marché",
      description: "IA qui analyse les signaux faibles et identifie les opportunités d'innovation breakthrough avant la concurrence"
    },
    {
      icon: MdGroups,
      title: "Orchestration innovation collaborative",
      description: "Plateforme qui connecte R&D, marketing et stratégie pour une innovation alignée et accélérée"
    },
    {
      icon: MdSecurity,
      title: "Validation prédictive des concepts",
      description: "Modèles IA qui prédisent le succès commercial et optimisent les investissements R&D"
    }
  ];

  const userResults = [
    {
      title: "Pour les directeurs innovation",
      description: "Avec UC8, transformez vos processus R&D en machine à innover avec l'intelligence artificielle.",
      benefits: [
        "Identification automatique des opportunités breakthrough",
        "Cycles d'innovation 40% plus rapides",
        "Prédiction du succès commercial avec 85% de précision",
        "ROI innovation maximisé par l'IA prédictive"
      ],
      impact: "Impact : innovation systématique et profitable.",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200/50",
      iconBg: "from-purple-500 to-indigo-600",
      bulletColor: "bg-purple-500"
    },
    {
      title: "Pour les chefs de produit",
      description: "UC8 révolutionne le développement produit avec une compréhension prédictive des besoins clients.",
      benefits: [
        "Market-fit prédit avant le développement",
        "Roadmap produit optimisée par l'IA",
        "Validation de concepts en temps réel",
        "Adoption produit augmentée de 65%"
      ],
      impact: "Impact : produits à succès garantis.",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200/50",
      iconBg: "from-blue-500 to-cyan-600",
      bulletColor: "bg-blue-500"
    },
    {
      title: "Pour les directeurs stratégie",
      description: "En anticipant les disruptions et positionnant l'entreprise sur les technologies émergentes.",
      benefits: [
        "Veille technologique automatisée et intelligente",
        "Anticipation des disruptions marché",
        "Stratégie d'innovation data-driven",
        "Avantage concurrentiel durable créé"
      ],
      impact: "Impact : leadership technologique maintenu.",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200/50",
      iconBg: "from-green-500 to-emerald-600",
      bulletColor: "bg-green-500"
    },
    {
      title: "Pour les directeurs techniques",
      description: "UC8 optimise l'architecture technologique avec une veille IA continue et des recommandations d'évolution.",
      benefits: [
        "Architecture technique future-ready",
        "Veille technologique automatisée",
        "Recommandations d'évolution prédictives",
        "Stack technique optimisée en continu"
      ],
      impact: "Impact : infrastructure technologique optimale.",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200/50",
      iconBg: "from-orange-500 to-red-600",
      bulletColor: "bg-orange-500"
    },
    {
      title: "Pour les responsables développement",
      description: "En identifiant et capitalisant sur les opportunités de croissance avec intelligence marché augmentée.",
      benefits: [
        "Nouveaux segments identifiés automatiquement",
        "Partenariats stratégiques recommandés",
        "Modèles business innovants détectés",
        "Croissance business accélérée de 45%"
      ],
      impact: "Impact : croissance soutenue et profitable.",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200/50",
      iconBg: "from-indigo-500 to-purple-600",
      bulletColor: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />
      
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient blob - top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FDF4FF 0%, #F3E8FF 40%, #DDD6FE 70%, transparent 100%)'
               }}></div>
          
          {/* Medium accent blob - center right */}
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, #DDD6FE 0%, #7C3AED 30%, transparent 70%)'
               }}></div>
          
          {/* Small atmospheric accent - bottom */}
          <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'linear-gradient(135deg, #FEFBFF 0%, #FDF4FF 50%, #F3E8FF 100%)'
               }}></div>
          
          {/* Flowing wave accent - mobile optimized */}
          <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #FDF4FF 20%, #DDD6FE 40%, #F3E8FF 60%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Innovation Intelligente</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Innovation stratégique, <span className="text-purple-600">succès commercial</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> <span className="text-purple-300">La plateforme IA pour une innovation systématique et profitable :</span> intelligence prospective de marché, orchestration R&D collaborative et validation prédictive des concepts. 
                Vous accélérez l'innovation, anticipez les disruptions et créez un avantage concurrentiel durable grâce à l'IA.</p>
              </div>
              
              
              
              {/* Primary CTA */}
              <div className="mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                >
                  Découvrez UC8
                </Button>
              </div>
              
              {/* Secondary CTA - Less Prominent */}
              <div className="mb-20">
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le guide innovation →
                </Button>
              </div>
              
              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Partenaire innovation des leaders technologiques</p>
                
                {/* Customer Logos / Trust Indicators */}
                <div className="flex items-center space-x-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={equansLogo} 
                          alt="Equans logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={bouyguesLogo} 
                          alt="Bouygues logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={colasLogo} 
                          alt="Colas logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                    </div>
                    <span>Accélère l'innovation des leaders technologiques</span>
                  </div>
                  
                  
                </div>
              </div>
            </div>

            {/* Right Side - Realistic Product Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                
                {/* Main Dashboard Mockup */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden backdrop-blur-sm"
                     style={{
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                     }}>
                  
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">aitenders.com/uc8-innovation</div>
                    <div className="w-16"></div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-purple-50/30">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Innovation Dashboard</h3>
                        <p className="text-sm text-gray-600">Pilotage R&D</p>
                      </div>
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <MdAutoAwesome className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-purple-600 mb-1">-40%</div>
                        <div className="text-xs text-gray-600">Time-to-market</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                        <div className="text-xs text-gray-600">Succès prédits</div>
                      </div>
                    </div>

                    {/* Innovation Pipeline */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Pipeline Innovation</span>
                        <span className="text-xs text-gray-500">Projets actifs</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Idéation</span>
                        <span className="font-medium text-purple-600">72% validé</span>
                        <span>Commercialisation</span>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Concept breakthrough validé</span>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Tendance marché détectée</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Roadmap R&D optimisée</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center">
                  <MdStars className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - right side */}
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FDF4FF 0%, #DDD6FE 50%, #F3E8FF 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #F3E8FF 0%, #DDD6FE 60%, transparent 100%)'
               }}></div>
          
          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #7C3AED 0%, #DDD6FE 40%, transparent 80%)'
               }}></div>
          
          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #FDF4FF 0%, transparent 30%, #FEFBFF 70%, #F3E8FF 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>
            
            {/* Multi-tone Faded Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-indigo-50/20 to-violet-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative z-10 text-center">
              
              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Innovation désorganisée, <span className="text-purple-600">opportunités manquées</span>
              </h2>
              
              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                L'innovation sans stratégie gaspille les ressources et rate les disruptions majeures.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Projets R&D dispersés, cycles de développement lents et absence de vision prospective font perdre des opportunités cruciales face à des concurrents plus agiles. L'incapacité à anticiper les évolutions technologiques compromet la position de leader. Avec Aitenders UC8, transformez votre capacité d'innovation en machine à créer de la valeur.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Accélérez Votre Innovation!
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Découvrez UC8
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Alternating Layout Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing accent - top center */}
          <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FEFBFF 0%, #FDF4FF 30%, #DDD6FE 70%, transparent 100%)'
               }}></div>
          
          {/* Medium directional blob - middle left */}
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #F3E8FF 0%, #DDD6FE 50%, #7C3AED 90%, transparent 100%)'
               }}></div>
          
          {/* Atmospheric accent - bottom right */}
          <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FDF4FF 0%, #F3E8FF 40%, transparent 100%)'
               }}></div>
          
          {/* Subtle flowing wave - center */}
          <div className="absolute top-1/2 left-0 w-full h-40 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #DDD6FE 25%, #FDF4FF 50%, #F3E8FF 75%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Une <span className="text-purple-600">innovation intelligente</span> qui crée la valeur de demain
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Aitenders UC8 transforme votre approche de l'innovation avec l'IA prospective, l'orchestration collaborative et la validation prédictive.
            </p>
          </div>

          {/* Feature 1: Intelligence prospective - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Intelligence prospective, <span className="text-purple-600">opportunités breakthrough</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                L'IA analyse les signaux faibles et identifie les opportunités d'innovation breakthrough avant la concurrence.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Veille technologique automatisée et intelligente</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Détection des signaux faibles et tendances émergentes</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Identification des opportunités disruption en amont</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Avantage concurrentiel de 6 mois minimum</span>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Market Intelligence</h4>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdAnalytics className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Signaux détectés</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ 47 nouveaux</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Opportunités validées</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">12 prioritaires</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Avantage timing</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <MdTrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Orchestration collaborative - Card Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Innovation Flow</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdGroups className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Équipes synchronisées</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">R&D+Marketing</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Cycles accélérés</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">-40%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Innovation alignée</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdVerified className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Orchestration collaborative, <span className="text-green-600">innovation alignée</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Plateforme qui connecte R&D, marketing et stratégie pour une innovation alignée et accélérée.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Synchronisation R&D, marketing et stratégie en temps réel</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Workflow collaboratif avec validation intégrée</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Accélération des cycles d'innovation de 40%</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Innovation alignée sur les objectifs business</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Validation prédictive - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Validation prédictive, <span className="text-orange-600">succès commercial</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Modèles IA qui prédisent le succès commercial et optimisent les investissements R&D pour maximiser le ROI.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Prédiction du succès commercial avec 85% de précision</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Optimisation automatique des investissements R&D</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Validation de concepts avant développement complet</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>ROI innovation multiplié par 3 en moyenne</span>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Success Prediction</h4>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MdSecurity className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Succès prédit</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ 85%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-700">ROI optimisé</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">x3 moyenne</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Concepts validés</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User-Focused Results Section - Before Additional Features */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Résultats concrets pour chaque utilisateur</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Des bénéfices mesurables pour tous les acteurs de l'innovation</p>
          </div>
          
          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {userResults.map((result, index) => (
              <div key={index} className="group">
                <Card className={`h-full p-8 bg-gradient-to-br ${result.bgColor} border ${result.borderColor} hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${result.iconBg} rounded-2xl flex items-center justify-center mr-4`}>
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{result.title}</h4>
                      <p className="text-sm text-gray-600">Innovation accélérée</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {result.description}
                  </p>
                  
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    {result.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <div className={`w-1.5 h-1.5 ${result.bulletColor} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-gray-200/30">
                    <p className="text-sm text-gray-700 font-medium">{result.impact}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppings Section - Wow Features & Additional Functionalities */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
               style={{
                 background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)'
               }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{
                 background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #7C3AED 100%)'
               }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
              <MdStars className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-sm md:text-base">Fonctionnalités Wow</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-indigo-400">capacités innovation</span> révolutionnaires
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà du R&D traditionnel, découvrez des fonctionnalités qui transforment votre capacité d'innovation en machine à créer la valeur de demain.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* IA Créative Augmentée */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAutoAwesome className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">IA Créative Augmentée</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Génération automatique d'idées innovantes et combinaisons créatives basées sur l'analyse de millions de brevets et publications scientifiques.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Créativité</span>
                  <MdCreate className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Simulation Prédictive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTableChart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Simulation Prédictive</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Modélisation virtuelle des innovations avec simulation d'adoption marché, retours clients et évolutions concurrentielles avant développement.
                </p>
                
                <div className="flex items-center text-blue-400 font-medium">
                  <span className="text-sm">Simulation</span>
                  <MdTimeline className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Écosystème Innovation */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdLink className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Écosystème Innovation</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Réseau intelligent connectant startups, centres de recherche, partenaires industriels et experts pour l'innovation ouverte collaborative.
                </p>
                
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Écosystème</span>
                  <MdGroups className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Intelligence Concurrentielle */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSearch className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Concurrentielle</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Surveillance automatique des innovations concurrentes, analyse de brevets et détection précoce des disruptions potentielles.
                </p>
                
                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Intelligence</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Accélérateur Prototypage */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdBolt className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Accélérateur Prototypage</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Génération automatique de prototypes virtuels et physiques avec optimisation design et validation technique accélérée.
                </p>
                
                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Prototypage</span>
                  <MdSettings className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Vision Stratégique Innovation */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdFlag className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Vision Stratégique Innovation</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Roadmap d'innovation prospective avec scénarios futurs, recommandations stratégiques et allocation optimale des ressources R&D.
                </p>
                
                <div className="flex items-center text-indigo-400 font-medium">
                  <span className="text-sm">Vision</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui change avec Aitenders Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Ce qui change avec Aitenders</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la transformation complète, de l'innovation hasardeuse à l'innovation systématique et profitable.
            </p>
          </div>
          
          {/* Simulator Placeholder */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MdPlayArrow className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Simulateur Innovation</h4>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Visualisez l'impact de l'IA innovation sur vos processus R&D avec notre simulateur interactif.
            </p>
            <div className="bg-gray-100 rounded-2xl p-12 text-gray-500">
              <MdSettings className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Simulateur en cours de développement</p>
              <p className="text-sm mt-2">Cette fonctionnalité sera bientôt disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Chat Interface with UC8-specific actions */}
      <ChatInterface 
        language="fr"
        transparent={true}
        customActions={[
          {
            label: "Nos cas d'usage",
            icon: <span className="text-gray-400">+</span>,
            onClick: () => {} // Navigate to use cases
          },
          {
            label: "Demo UC8",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC8 demo
          },
          {
            label: "ROI Calculator", 
            icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Open ROI calculator
          },
          {
            label: "Contact Expert",
            icon: <MdMail className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Contact form
          }
        ]}
      />

      {/* Add padding to body to account for fixed chat */}
      <div className="h-32"></div>
    </div>
  );
}