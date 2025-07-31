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

export default function UC7Page() {
  // Target audience data with interactive content - UC7 adapted
  const targetAudiences = [
    {
      id: 'supply-chain-managers',
      title: 'Directeurs supply chain et achats',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Optimisez votre chaîne d\'approvisionnement avec une intelligence prédictive. Grâce à l\'IA, anticipez les ruptures, identifiez les fournisseurs critiques et pilotez une supply chain résiliente qui garantit la continuité opérationnelle.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ Approvisionnement sécurisé',
      alert: '📊 Résilience: Optimisée'
    },
    {
      id: 'procurement-directors',
      title: 'Responsables achats stratégiques',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Révolutionnez vos processus d\'achats avec des négociations data-driven et une évaluation fournisseurs intelligente. Réduisez les coûts, mitigez les risques et créez de la valeur ajoutée pour l\'organisation.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Achats optimisés',
      alert: '📈 Économies: +15%'
    },
    {
      id: 'operations-managers',
      title: 'Directeurs opérationnels',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Pilotez une chaîne de valeur fluide et prévisible. Synchronisez production, approvisionnement et livraisons avec une visibilité temps réel qui élimine les goulots d\'étranglement et optimise les performances.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Flux synchronisés',
      alert: '✅ Performance maximisée'
    },
    {
      id: 'risk-managers',
      title: 'Gestionnaires de risques supply',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Anticipez et neutralisez les risques supply chain avant qu\'ils n\'impactent vos opérations. Cartographiez les vulnérabilités, diversifiez intelligemment et construisez une résilience opérationnelle durable.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Risques maîtrisés',
      alert: '📋 Continuité assurée'
    },
    {
      id: 'logistics-directors',
      title: 'Directeurs logistique',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Optimisez vos flux logistiques avec une planification prédictive et une orchestration intelligente. Réduisez les coûts de transport, améliorez la satisfaction client et maximisez l\'efficacité opérationnelle.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Logistique optimisée',
      alert: '🎯 Livraisons: 99.5%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Chaîne d'approvisionnement imprévisible",
      description: "Ruptures fréquentes et visibilité limitée sur les fournisseurs créent des arrêts de production coûteux"
    },
    {
      icon: MdDescription,
      title: "Gestion manuelle des approvisionnements",
      description: "Processus chronophages et peu réactifs face aux changements de demande et aux aléas fournisseurs"
    },
    {
      icon: FaUsers,
      title: "Manque de visibilité end-to-end",
      description: "Silos informationnels entre achats, production et logistique empêchent l'optimisation globale"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Prédiction intelligente des besoins",
      description: "IA qui anticipe la demande et optimise automatiquement les niveaux de stock et les plans d'approvisionnement"
    },
    {
      icon: MdGroups,
      title: "Orchestration supply chain temps réel",
      description: "Synchronisation automatique entre tous les maillons de la chaîne avec alertes prédictives"
    },
    {
      icon: MdSecurity,
      title: "Résilience et continuité assurées",
      description: "Identification proactive des risques et plans de contingence automatisés pour garantir la continuité"
    }
  ];

  const userResults = [
    {
      title: "Pour les directeurs supply chain",
      description: "Avec UC7, transformez votre supply chain en avantage concurrentiel grâce à l'intelligence prédictive.",
      benefits: [
        "Visibilité end-to-end sur toute la chaîne",
        "Prédiction des ruptures avec 95% de précision",
        "Optimisation automatique des stocks et flux",
        "Réduction de 30% des coûts d'approvisionnement"
      ],
      impact: "Impact : supply chain prédictive et résiliente.",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200/50",
      iconBg: "from-purple-500 to-indigo-600",
      bulletColor: "bg-purple-500"
    },
    {
      title: "Pour les responsables achats",
      description: "UC7 révolutionne vos processus d'achats avec des négociations data-driven et une évaluation fournisseurs intelligente.",
      benefits: [
        "Sélection fournisseurs basée sur la performance IA",
        "Négociations optimisées par l'analyse prédictive",
        "Évaluation continue des risques fournisseurs",
        "ROI achats maximisé avec recommandations IA"
      ],
      impact: "Impact : achats stratégiques et création de valeur.",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200/50",
      iconBg: "from-blue-500 to-cyan-600",
      bulletColor: "bg-blue-500"
    },
    {
      title: "Pour les directeurs opérationnels",
      description: "En synchronisant production, approvisionnement et livraisons avec une visibilité temps réel.",
      benefits: [
        "Synchronisation automatique des flux de production",
        "Planification intégrée multi-sites",
        "Optimisation continue des performances",
        "Élimination des goulots d'étranglement"
      ],
      impact: "Impact : chaîne de valeur fluide et prévisible.",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200/50",
      iconBg: "from-green-500 to-emerald-600",
      bulletColor: "bg-green-500"
    },
    {
      title: "Pour les gestionnaires de risques",
      description: "UC7 anticipe et neutralise les risques supply avant qu'ils n'impactent vos opérations.",
      benefits: [
        "Cartographie automatique des vulnérabilités",
        "Alertes prédictives sur les risques émergents",
        "Plans de contingence automatisés",
        "Diversification intelligente des sources"
      ],
      impact: "Impact : résilience opérationnelle durable.",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200/50",
      iconBg: "from-orange-500 to-red-600",
      bulletColor: "bg-orange-500"
    },
    {
      title: "Pour les directeurs logistique",
      description: "En optimisant les flux avec une planification prédictive et une orchestration intelligente.",
      benefits: [
        "Optimisation automatique des tournées",
        "Prédiction des pics de demande",
        "Réduction des coûts de transport",
        "Amélioration satisfaction client"
      ],
      impact: "Impact : logistique efficace et rentable.",
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
                 background: 'radial-gradient(circle, #F0F8FF 0%, #E0F2FE 40%, #BAE6FD 70%, transparent 100%)'
               }}></div>
          
          {/* Medium accent blob - center right */}
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, #BAE6FD 0%, #0284C7 30%, transparent 70%)'
               }}></div>
          
          {/* Small atmospheric accent - bottom */}
          <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'linear-gradient(135deg, #F8FAFC 0%, #F0F8FF 50%, #E0F2FE 100%)'
               }}></div>
          
          {/* Flowing wave accent - mobile optimized */}
          <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #F0F8FF 20%, #BAE6FD 40%, #E0F2FE 60%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Supply Chain Intelligente</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Chaque exigence traitée, chaque réponse alignée, chaque clause justifiée.
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> Avec Aitenders, chaque réponse devient une preuve de maîtrise.
                  Notre copilote IA vous aide à couvrir 100 % des exigences et à livrer des offres conformes, traçables et prêtes à défendre devant vos clients.</p>
              </div>
              
              
              
              {/* Primary CTA */}
              <div className="mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                >
                  Réservez une Démo
                </Button>
              </div>
              
              {/* Secondary CTA - Less Prominent */}
              <div className="mb-20">
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>
              
              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Partenaire supply chain des leaders industriels</p>
                
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
                    <span>Optimise la supply chain des géants industriels</span>
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
                    <div className="text-xs text-gray-500 font-medium">aitenders.com/uc7-supply-chain</div>
                    <div className="w-16"></div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Supply Chain Dashboard</h3>
                        <p className="text-sm text-gray-600">Vue temps réel</p>
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <MdAnalytics className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                        <div className="text-xs text-gray-600">Taux de service</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">-25%</div>
                        <div className="text-xs text-gray-600">Coûts logistiques</div>
                      </div>
                    </div>

                    {/* Supply Chain Flow */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Flux Supply Chain</span>
                        <span className="text-xs text-gray-500">Temps réel</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Commande</span>
                        <span className="font-medium text-blue-600">88% optimisé</span>
                        <span>Livraison</span>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Stock optimisé automatiquement</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Nouveau fournisseur validé</span>
                      </div>
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Alerte demande pic détectée</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl flex items-center justify-center">
                  <MdTrendingUp className="w-8 h-8 text-white" />
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
                 background: 'radial-gradient(circle, #F0F8FF 0%, #BAE6FD 50%, #E0F2FE 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 60%, transparent 100%)'
               }}></div>
          
          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #0284C7 0%, #BAE6FD 40%, transparent 80%)'
               }}></div>
          
          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F0F8FF 0%, transparent 30%, #F8FAFC 70%, #E0F2FE 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>
            
            {/* Multi-tone Faded Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative z-10 text-center">
              
              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Impossible de couvrir toutes les exigences sans perdre en précision
              </h2>
              
              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dans les réponses aux appels d’offres complexes, vos équipes jonglent entre fichiers dispersés, copier‑coller risqués et validations interminables. Sans outil dédié, chaque exigence devient un risque : omissions, incohérences et livrables difficiles à défendre.
                Le lien entre cahier des charges, rédaction et livrables se perd, augmentant les coûts et fragilisant la conformité.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Optimisez Votre Supply Chain!
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Découvrez UC7
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
                 background: 'radial-gradient(circle, #F8FAFC 0%, #F0F8FF 30%, #BAE6FD 70%, transparent 100%)'
               }}></div>
          
          {/* Medium directional blob - middle left */}
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #E0F2FE 0%, #BAE6FD 50%, #0284C7 90%, transparent 100%)'
               }}></div>
          
          {/* Atmospheric accent - bottom right */}
          <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F0F8FF 0%, #E0F2FE 40%, transparent 100%)'
               }}></div>
          
          {/* Subtle flowing wave - center */}
          <div className="absolute top-1/2 left-0 w-full h-40 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #BAE6FD 25%, #F0F8FF 50%, #E0F2FE 75%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Une <span className="text-blue-600">supply chain intelligente</span> qui anticipe et s'adapte
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Aitenders UC7 révolutionne votre chaîne d'approvisionnement avec l'IA prédictive, l'orchestration temps réel et la résilience intégrée.
            </p>
          </div>

          {/* Feature 1: Prédiction intelligente - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Prédiction intelligente, <span className="text-blue-600">approvisionnement optimisé</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                L'IA anticipe la demande et optimise automatiquement les niveaux de stock et les plans d'approvisionnement.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Prévision de la demande avec 95% de précision</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Optimisation automatique des niveaux de stock</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Plans d'approvisionnement adaptatifs en temps réel</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Réduction de 30% des coûts de stockage</span>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Demand Prediction</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MdAnalytics className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Prévision précision</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ 95%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Stock optimisé</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">-30% coûts</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Plans adaptatifs</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdCheck className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Orchestration temps réel - Card Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Supply Chain Flow</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdGroups className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Synchronisation</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Temps réel</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Taux de service</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">98%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-700">Alertes prédictives</span>
                      <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <MdNotifications className="w-3 h-3 text-white" />
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
                Orchestration temps réel, <span className="text-green-600">flux synchronisés</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Synchronisation automatique entre tous les maillons de la chaîne avec alertes prédictives et ajustements en temps réel.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Coordination automatique fournisseurs-production-logistique</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Alertes prédictives sur les risques de rupture</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Réajustement automatique des plans en cas d'aléa</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Visibilité end-to-end sur toute la chaîne</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Résilience et continuité - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Résilience proactive, <span className="text-orange-600">continuité garantie</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Identification proactive des risques et plans de contingence automatisés pour garantir la continuité opérationnelle.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Cartographie automatique des vulnérabilités supply</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Plans de contingence activés automatiquement</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Diversification intelligente des sources d'approvisionnement</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Simulation de scénarios de crise en temps réel</span>
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
                    <h4 className="text-sm font-semibold text-gray-700">Risk Management</h4>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MdSecurity className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Continuité assurée</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ 99.9%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-700">Risques identifiés</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">12 mitigés</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Sources diversifiées</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <MdVerified className="w-3 h-3 text-white" />
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
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Des bénéfices mesurables pour tous les acteurs de la supply chain</p>
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
                      <p className="text-sm text-gray-600">Optimisation intelligente</p>
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
                 background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%, #06B6D4 100%)'
               }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{
                 background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #1D4ED8 100%)'
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
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-400">capacités supply chain</span> révolutionnaires
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà de l'optimisation traditionnelle, découvrez des fonctionnalités qui transforment votre chaîne d'approvisionnement en avantage concurrentiel.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Intelligence Prédictive Globale */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAnalytics className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Prédictive Globale</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Anticipez les évolutions de marché, les ruptures fournisseurs et les pics de demande avec une précision de 95% grâce à l'IA avancée.
                </p>
                
                <div className="flex items-center text-blue-400 font-medium">
                  <span className="text-sm">Prédiction</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Orchestration Autonome */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAutoAwesome className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Orchestration Autonome</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Pilotage automatisé des flux supply chain avec réajustements en temps réel selon les aléas et opportunités détectées.
                </p>
                
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Autonomie</span>
                  <MdSettings className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Résilience Adaptative */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdShield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Résilience Adaptative</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Capacité d'auto-guérison de la supply chain avec activation automatique de plans de contingence et reconfigurations intelligentes.
                </p>
                
                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Résilience</span>
                  <MdVerifiedUser className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Collaboration Étendue */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdLink className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Collaboration Étendue</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Écosystème collaboratif avec fournisseurs, partenaires et clients intégré pour une synchronisation parfaite des opérations.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Collaboration</span>
                  <MdGroups className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Optimisation Continue */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdRefresh className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Optimisation Continue</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Algorithmes d'apprentissage continu qui optimisent automatiquement les performances supply chain et s'adaptent aux évolutions.
                </p>
                
                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Optimisation</span>
                  <MdBolt className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Vision Stratégique */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdFlag className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Vision Stratégique</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Tableaux de bord exécutifs avec simulations de scénarios futurs et recommandations stratégiques pour l'évolution de la supply chain.
                </p>
                
                <div className="flex items-center text-indigo-400 font-medium">
                  <span className="text-sm">Stratégie</span>
                  <MdTimeline className="w-4 h-4 ml-2" />
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
              Découvrez la transformation complète, de la supply chain réactive à l'orchestration prédictive.
            </p>
          </div>
          
          {/* Simulator Placeholder */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MdPlayArrow className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Simulateur Supply Chain</h4>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Visualisez l'impact de l'IA supply chain sur vos processus d'approvisionnement avec notre simulateur interactif.
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

      {/* Chat Interface with UC7-specific actions */}
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
            label: "Demo UC7",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC7 demo
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