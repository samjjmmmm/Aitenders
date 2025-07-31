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

export default function UC4Page() {
  // Target audience data with interactive content - UC4 adapted
  const targetAudiences = [
    {
      id: 'risk-managers',
      title: 'Gestionnaires de risques contractuels',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Anticipez et maîtrisez chaque risque contractuel avant signature. Grâce à l\'analyse IA avancée, identifiez instantanément les clauses critiques, les obligations dangereuses et les zones d\'ombre qui pourraient compromettre vos projets à plusieurs millions d\'euros.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ Risques identifiés',
      alert: '📊 Exposition: Minimisée'
    },
    {
      id: 'legal-directors',
      title: 'Directeurs juridiques',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Sécurisez juridiquement vos contrats complexes avec une vue d\'ensemble claire et une traçabilité parfaite. Détectez automatiquement les incohérences, validez la conformité réglementaire et protégez l\'entreprise contre les litiges coûteux.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Validation complète',
      alert: '📈 Conformité: 100%'
    },
    {
      id: 'project-directors',
      title: 'Directeurs de projets',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Pilotez sereinement vos projets complexes avec une vision claire des obligations contractuelles. Évitez les dérapages budgétaires liés aux clauses mal comprises et assurez une exécution conforme aux engagements pris.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Projet sécurisé',
      alert: '✅ Zéro déviation'
    },
    {
      id: 'finance-directors',
      title: 'Directeurs financiers',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Protégez la rentabilité avec une analyse financière précise des clauses contractuelles. Identifiez les risques de surcoûts cachés, les pénalités potentielles et optimisez les conditions de paiement pour une trésorerie maîtrisée.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Budget sécurisé',
      alert: '📋 Rentabilité garantie'
    },
    {
      id: 'compliance-officers',
      title: 'Responsables conformité',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Garantissez une conformité réglementaire absolue sur tous vos contrats. Surveillez automatiquement les évolutions légales, validez le respect des normes sectorielles et maintenez un niveau de conformité irréprochable.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Conformité validée',
      alert: '🎯 100% réglementaire'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Clauses contractuelles mal comprises",
      description: "Interprétations erronées des obligations contractuelles créent des risques juridiques et financiers majeurs"
    },
    {
      icon: MdDescription,
      title: "Analyse manuelle chronophage",
      description: "Jours perdus à décortiquer manuellement des contrats de centaines de pages avec risques d'oublis critiques"
    },
    {
      icon: FaUsers,
      title: "Manque de visibilité sur les risques",
      description: "Absence de vue d'ensemble des expositions contractuelles et des obligations croisées"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Analysez les contrats instantanément",
      description: "IA spécialisée qui décortique automatiquement tous types de contrats et identifie les clauses critiques"
    },
    {
      icon: MdGroups,
      title: "Maîtrisez tous vos risques contractuels",
      description: "Vision consolidée des expositions, obligations et échéances avec alertes proactives"
    },
    {
      icon: MdSecurity,
      title: "Sécurisez vos engagements",
      description: "Validation automatique de la conformité et détection des incohérences avant signature"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Analysez vos contrats complexes",
      description: "Importez vos documents contractuels et laissez l'IA extraire automatiquement toutes les clauses critiques",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Identifiez les risques et obligations",
      description: "Visualisez instantanément les expositions, les échéances et les obligations avec un niveau de détail inégalé",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Pilotez et sécurisez l'exécution", 
      description: "Suivez en temps réel le respect des engagements et recevez des alertes proactives sur les déviations",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "95%",
      description: "Réduction du temps d'analyse contractuelle"
    },
    {
      metric: "80%",
      description: "Moins de risques juridiques non détectés"
    },
    {
      metric: "0",
      description: "Clause critique oubliée"
    },
    {
      metric: "100%",
      description: "Traçabilité des obligations"
    }
  ];

  const differentiators = [
    {
      title: "Première Solution pour Contrats Multi-lots",
      description: "Conçue spécifiquement pour les projets complexes avec gestion croisée des obligations"
    },
    {
      title: "Intelligence Contractuelle Avancée",
      description: "IA spécialisée dans l'analyse juridique et financière des contrats de construction"
    },
    {
      title: "Gestion Proactive des Risques",
      description: "Alertes intelligentes et recommandations pour prévenir les dérapages contractuels"
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
                 background: 'radial-gradient(circle, #F0F8FF 0%, #E6F3FF 40%, #B3D9FF 70%, transparent 100%)'
               }}></div>
          
          {/* Medium accent blob - center right */}
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, #B3D9FF 0%, #2563EB 30%, transparent 70%)'
               }}></div>
          
          {/* Small atmospheric accent - bottom */}
          <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'linear-gradient(135deg, #FAFCFF 0%, #F0F8FF 50%, #E6F3FF 100%)'
               }}></div>
          
          {/* Flowing wave accent - mobile optimized */}
          <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #F0F8FF 20%, #B3D9FF 40%, #E6F3FF 60%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Sécurisez Vos Contrats</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Consultation intelligente des contrats sur petits projets, <span className="text-blue-600">Le contrat n’est plus un PDF, c’est une source de réponses.</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> <span className="text-blue-300">Accédez instantanément aux clauses clés de vos contrats grâce à une fiche synthétique intelligente. :</span> Chaque acteur projet consulte, comprend et agit sans ouvrir le PDF ni dépendre du juridique, pour des décisions alignées et rapides.
                Vous éliminez les zones d'ombre, prévenez les litiges coûteux et garantissez le respect de tous vos engagements contractuels.</p>
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
                <p className="text-sm text-gray-500 mb-6">Solution de référence pour l'analyse contractuelle intelligente</p>
                
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
                    <span>Adopté par les leaders de la construction</span>
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
                    <div className="text-sm text-gray-600 font-medium">AItenders - Contract Analytics</div>
                    <div className="w-12"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-8">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Multi-lot Construction Contract</h3>
                        <p className="text-gray-600">€85M project • 12 risk clauses</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Analyzing</span>
                      </div>
                    </div>
                    
                    {/* Risk Overview */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                        <div className="text-3xl font-bold text-red-700 mb-2">12</div>
                        <div className="text-sm text-gray-600">Critical clauses identified</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                        <div className="text-3xl font-bold text-blue-700 mb-2">€2.3M</div>
                        <div className="text-sm text-gray-600">Potential risk exposure</div>
                      </div>
                    </div>
                    
                    {/* Risk Categories */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Risk Analysis</h4>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                            <MdWarning className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Penalty Clauses</div>
                            <div className="text-sm text-gray-600">High financial exposure</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-red-600">Critical</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                            <MdAccessTime className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Delivery Terms</div>
                            <div className="text-sm text-gray-600">Timeline constraints</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '78%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-orange-600">High</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                            <MdShield className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Insurance Coverage</div>
                            <div className="text-sm text-gray-600">Liability limits</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-yellow-600">Medium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Risk Alerts */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-bounce">
                  <div className="flex items-center space-x-2">
                    <MdWarning className="w-4 h-4" />
                    <span>High risk detected</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-pulse">
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="w-4 h-4" />
                    <span>Analysis complete</span>
                  </div>
                </div>
                
                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-200/15 rounded-full blur-3xl"></div>
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
                 background: 'radial-gradient(circle, #F0F8FF 0%, #B3D9FF 50%, #E6F3FF 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #E6F3FF 0%, #B3D9FF 60%, transparent 100%)'
               }}></div>
          
          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #2563EB 0%, #B3D9FF 40%, transparent 80%)'
               }}></div>
          
          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F0F8FF 0%, transparent 30%, #FAFCFF 70%, #E6F3FF 100%)'
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
                Vos décisions contractuelles, claires et rapides, <span className="text-blue-600">Zéro erreur, zéro perte de temps</span>
              </h2>
              
              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Dans les projets de maintenance et de petits travaux, chaque clause oubliée peut coûter cher : retards, litiges, pénalités.

              Pourtant, vos équipes n’ont ni le temps ni les outils pour relire un contrat en entier. Résultat : décisions prises à l’intuition, juridique saturé, confiance fragilisée.Avec Aitenders, accédez en un clic à toutes les clauses clés – durée, reconduction, SLA, pénalités – grâce à une fiche synthétique intelligente.</p>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Avec Aitenders, bénéficiez d'une analyse contractuelle intelligente dès la réception, identifiez instantanément tous les risques et pilotez sereinement l'exécution avec une visibilité totale sur vos obligations.</p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Contactez nous!
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Watch Quick Demo
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
                 background: 'radial-gradient(circle, #FAFCFF 0%, #F0F8FF 30%, #B3D9FF 70%, transparent 100%)'
               }}></div>
          
          {/* Medium directional blob - middle left */}
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #E6F3FF 0%, #B3D9FF 50%, #2563EB 90%, transparent 100%)'
               }}></div>
          
          {/* Atmospheric accent - bottom right */}
          <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F0F8FF 0%, #E6F3FF 40%, transparent 100%)'
               }}></div>
          
          {/* Subtle flowing wave - center */}
          <div className="absolute top-1/2 left-0 w-full h-40 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #B3D9FF 25%, #F0F8FF 50%, #E6F3FF 75%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Votre <span className="text-blue-600">copilote IA</span> qui rend vos contrats immédiatement actionnables</h1>
          </div>

          {/* Feature 1: Contract Analysis - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Fiche contrat intelligente, <span className="text-blue-600">disponible dès le premier jour</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dès le chargement d'un contrat, Aitenders génère une fiche synthétique claire et structurée.
                Durée, reconduction, SLA, pénalités : tout l'essentiel est accessible immédiatement, sans relecture fastidieuse.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Accessible à tous les niveaux, de la lecture rapide (Essential) jusqu'à la conformité automatisée (Premium et Iconic).</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Le contrat devient lisible et exploitable pour toute l'équipe dès le jour 1.</span>
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
                    <h4 className="text-sm font-semibold text-gray-700">Contract Analysis</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MdGavel className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-sm text-gray-700">12 penalty clauses found</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Critical</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-700">€2.3M exposure identified</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">High</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Analysis completed</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Risk Management - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Risk Dashboard</h4>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MdWarning className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-sm text-gray-700">Delivery delay risk</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">92%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-gray-700">Budget overrun risk</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">68%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-700">Compliance gaps</span>
                      <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <MdWarning className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Accédez à l'essentiel, <span className="text-orange-600">sans relecture complète</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec Aitenders, les PDF interminables appartiennent au passé.
                Les clauses sont organisées par thèmes : durée, engagement, pénalités, résiliation.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Chaque clause clé est disponible en un clic, déjà catégorisée et prête à l'usage.</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Dans les niveaux avancés (Premium et Iconic), bénéficiez également de la détection automatique des exigences, similitudes et contradictions pour sécuriser vos décisions.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Contract Execution - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Posez une question et obtenez la réponse <span className="text-green-600">avec la clause source</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Demandez simplement : « Quel est le préavis ? » ou « Combien dure l'engagement ? ».
                L'intelligence artificielle vous répond instantanément avec la clause exacte et sa source.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Les décisions deviennent rapides, alignées et vérifiables, comme si vous aviez un juriste à vos côtés en continu.</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Dans les versions Premium et Iconic, intégrez vos propres livrables et matrices de conformité pour aller plus loin.</span>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Execution Control</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdSettings className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Milestone completed</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">On time</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-gray-700">Payment due in 5 days</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Alert</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Amendment processed</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <MdMessage className="w-3 h-3 text-white" />
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
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Résultats concrets pour chaque utilisateur</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Des bénéfices mesurables pour tous les profils contractuels</p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Contract Manager Results */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Gestionnaire de contrats</h4>
                      <p className="text-sm text-gray-600">Maîtrise instantanée des engagements contractuels</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Temps de recherche d'information</span>
                      <span className="font-bold text-blue-600">-90%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Clauses critiques manquées</span>
                      <span className="font-bold text-green-600">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Accessibilité des informations</span>
                      <span className="font-bold text-blue-600">+100%</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-blue-200/30">
                    <p className="text-sm text-gray-700 italic">"Enfin des contrats lisibles et exploitables dès le premier jour."</p>
                  </div>
                </Card>
              </div>

              {/* Legal Director Results */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdBusiness className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Directeur juridique</h4>
                      <p className="text-sm text-gray-600">Intelligence contractuelle avancée</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Questions sans réponse immédiate</span>
                      <span className="font-bold text-green-600">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Conformité des décisions</span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Efficacité équipe juridique</span>
                      <span className="font-bold text-green-600">+75%</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-orange-200/30">
                    <p className="text-sm text-gray-700 italic">"Un juriste IA disponible 24h/7j avec accès instantané aux clauses sources."</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  95 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Réduction du temps de recherche d'informations contractuelles</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  Instantané
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Accès immédiat aux clauses critiques avec source précise</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  0 erreur
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Aucune clause critique manquée grâce à l'IA contractuelle</p>
              </div>
            </div>
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
                 background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)'
               }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{
                 background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)'
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
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">parcours additionnels</span> qui transforment votre expérience
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà du parcours habituel, découvrez des fonctionnalités avancées qui ajoutent une dimension stratégique à votre gestion de contrats complexes.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Intelligence Prédictive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTrendingUp className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Prédictive</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Anticipez les risques contractuels futurs grâce à l'analyse prédictive et recevez des recommandations proactives pour sécuriser vos engagements.
                </p>
                
                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Anticipation IA</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Conformité Automatisée */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdVerified className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Conformité Automatisée</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Validation automatique de la conformité réglementaire et contractuelle avec mise à jour en temps réel selon les évolutions légales.
                </p>
                
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Validation continue</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Alertes Intelligentes */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdNotifications className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Alertes Intelligentes</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Notifications proactives sur les échéances critiques, les renouvellements et les actions requises avec priorisation automatique.
                </p>
                
                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Proactivité</span>
                  <MdAccessTime className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Audit Trail Complet */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Audit Trail Complet</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Traçabilité complète de toutes les actions et modifications avec horodatage et attribution pour une gouvernance parfaite.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Transparence</span>
                  <MdTrackChanges className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Intégration API */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdCloudSync className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intégration API</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Connectez vos systèmes existants (ERP, CRM, GED) avec synchronisation bidirectionnelle et flux de données automatisés.
                </p>
                
                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Connectivité</span>
                  <MdSwapHoriz className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Dashboard Exécutif */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdDashboard className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Dashboard Exécutif</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Vue d'ensemble stratégique avec KPIs personnalisés, reporting automatisé et insights métier pour la direction.
                </p>
                
                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Vue stratégique</span>
                  <MdTableChart className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Sécurité Avancée */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdSecurity className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sécurité de niveau entreprise, intégrée dès la conception</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      Chiffrement bout-en-bout, contrôles d'accès granulaires, conformité RGPD native et hébergement souverain pour une protection maximale de vos données contractuelles sensibles.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Souveraineté</span>
                        <MdShield className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">RGPD Natif</span>
                        <MdVerifiedUser className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-gray-200 text-lg mb-8">
              Chaque fonctionnalité ajoute une dimension stratégique à votre processus
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              Explorer toutes les fonctionnalités →
            </Button>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <ContactSection />

      {/* Chat Interface with UC4-specific actions */}
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
            label: "Demo UC4",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC4 demo
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