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
  MdRotateRight, MdFlag, MdMail,
  MdShare,
  MdQuestionAnswer
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
import Lottie from 'lottie-react';
import wow1Uc4Animation from '../assets/wow-1-uc4.json';
import wow2Uc4Animation from '../assets/wow-2-uc4.json';
import wow3Uc4Animation from '../assets/wow-3-uc4.json';
import uc4SecondFeatureImage from "@assets/41_1755176709158.png";

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
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Consultation intelligente petits contrats</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Mettez vos contrats <span className="text-purple-600">u service de vos projets</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  La seule plateforme pensée pour rendre vos contrats de petits projets clairs et actionnables.
                  Accédez instantanément aux clauses clés grâce à une fiche synthétique intelligente.
                  Chaque acteur du projet consulte, comprend et agit sans ouvrir le PDF ni dépendre du juridique, pour des décisions rapides et alignées..</p>
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
                Le contrat n’est plus un PDF, <span className="text-purple-600"> c’est une source de réponses</span>
              </h2>
              
              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Avec Aitenders, chaque acteur projet accède immédiatement aux clauses essentielles sans relire des dizaines de pages. Une fiche synthétique met en avant les points clés — durée, SLA, pénalités, reconduction — et un moteur de recherche intelligent permet de poser vos questions en langage naturel.
            </p>
               <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light"> Une fiche synthétique met en avant les points clés — durée, SLA, pénalités, reconduction — et un moteur de recherche intelligent permet de poser vos questions en langage naturel. </p>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light"> Chaque clause devient utile, chaque obligation visible, chaque décision prise en toute confiance, sans dépendre d’un support juridique</p>
              
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Votre <span className="text-blue-600">copilote IA</span> qui fait parler vos contrats</h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chaque clause utile, chaque décision sécurisée : accédez aux éléments clés de vos contrats dès le jour 1, sans relecture fastidieuse.
            </h3>
          </div>

          {/* Feature 1: Fiche contrat intelligente - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdDescription className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Fiche contrat intelligente, disponible <span className="text-purple-600">dès le premier jour</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dès le chargement d’un contrat, Aitenders génère automatiquement une fiche synthétique claire et structurée. 
                Elle contient les éléments clés : durée, modalités de reconduction, délais de préavis, SLA, pénalités, engagements. 
                Accessible directement dans le projet, elle offre <span className="text-purple-600">la bonne information sans ouvrir le PDF</span>.
              </p>
              <div className="flex items-center text-lg font-bold text-purple-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Votre contrat lisible et exploitable dès le jour 1
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full">
                <Lottie 
                  animationData={wow1Uc4Animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full max-w-[400px] max-h-[400px]"
                  style={{ 
                    transform: 'scale(1.5)',
                    filter: 'drop-shadow(0 8px 32px rgba(139, 92, 246, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>
          {/* Feature 2: Accès ciblé aux clauses critiques - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSearch className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Accès ciblé aux clauses critiques, <span className="text-green-600">sans relecture</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders propose une visualisation claire et structurée du contrat, organisée par thématique (durée, engagement, pénalités, résiliation…). 
                Chaque utilisateur accède directement à la clause concernée, <span className="text-green-600">sans avoir à parcourir l’intégralité du document</span>.
              </p>
              <div className="flex items-center text-lg font-bold text-green-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                La lecture intelligente remplace la recherche manuelle.
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc4SecondFeatureImage}
                  alt="Accès ciblé aux clauses critiques - Interface de recherche contractuelle"
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-2xl shadow-2xl"
                  style={{ 
                    transform: 'scale(0.5)',
                    filter: 'drop-shadow(0 8px 32px rgba(16, 185, 129, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Q&A Contractuel - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdCheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Posez une question, <span className="text-indigo-600">l’IA vous répond</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders embarque un moteur de <span className="text-indigo-600">Q&A contractuel</span>. 
                Posez une question naturelle (« Quel est le préavis ? », « Quelle est la durée de l’engagement ? ») et recevez 
                immédiatement la clause exacte, accompagnée de sa source. 
                La réponse peut être partagée ou archivée, sans solliciter le juridique.
              </p>
              <div className="flex items-center text-lg font-bold text-indigo-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Comme interroger un juriste, mais en instantané
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full">
                <Lottie 
                  animationData={wow3Uc4Animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full max-w-[400px] max-h-[400px]"
                  style={{ 
                    transform: 'scale(1.5)',
                    filter: 'drop-shadow(0 8px 32px rgba(99, 102, 241, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* User-Focused Results Section - Before Additional Features */}
      {/* KPI Section - UC4 Petits Projets Exécution */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* User-Focused Results Section - Before KPIs */}
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Ce que nos utilisateurs obtiennent concrètement pour les petits projets en exécution
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Des résultats immédiats, mesurables et partagés sur le terrain
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Buyer Results */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Responsable de site / Directeur d’exploitation</h4>
                      <p className="text-sm text-gray-600">Un contrat clair et actionnable, à chaque instant</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Pilotez vos projets avec un contrat qui répond directement aux questions du quotidien. 
                    Gagnez en réactivité, réduisez les sollicitations juridiques et assurez la fiabilité de vos décisions.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Décisions rapides et alignées avec les engagements contractuels
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Moins d’erreurs, moins de stress, plus de coordination
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sollicitations juridiques réduites de 80 %
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Un contrat devenu réflexe métier, plus un frein administratif
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Utilisateur Results */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdEngineering className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Chef de chantier / Technicien</h4>
                      <p className="text-sm text-gray-600">Un accès immédiat aux clauses utiles</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Accédez directement aux engagements contractuels sans relire 50 pages. 
                    Posez vos questions et obtenez instantanément la clause source, claire et vérifiable.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      90 % des questions récurrentes résolues en autonomie
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Moins de doutes, décisions plus sûres et documentées
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Un vrai soulagement opérationnel sur le terrain
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Le contrat enfin lisible, concret et utile
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  -60 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  Temps réduit pour accéder aux clauses clés
                </p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  +80 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  Des questions traitées sans solliciter le juridique
                </p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-8 text-center border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  Décisions alignées avec les engagements contractuels
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Toppings Section - UC4 Fonctionnalités Additionnelles */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
               style={{
                 background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)'
               }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{
                 background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)'
               }}></div>
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
              <span className="text-white font-semibold text-sm md:text-base">Fonctionnalités Additionnelles</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">options intelligentes</span> qui rendent vos contrats vivants
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Transformez vos contrats PDF en assistants intelligents, actionnables à tout moment, pour chaque acteur du projet.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Recherche Thématique */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSearch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Recherche thématique</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Accédez directement aux clauses critiques (durée, SLA, résiliation, pénalités) organisées par thématique pour éviter toute relecture inutile.
                </p>
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Accès instantané</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Q&A Contractuel */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdQuestionAnswer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Questions & Réponses instantanées</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Posez vos questions en langage naturel (« Quel est le préavis ? ») et recevez immédiatement la clause exacte extraite du contrat.
                </p>
                <div className="flex items-center text-indigo-400 font-medium">
                  <span className="text-sm">Réponses fiables</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Partage et Traçabilité */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdShare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Partage & Traçabilité</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Partagez une clause précise avec vos équipes terrain et gardez la traçabilité de chaque consultation et décision contractuelle.
                </p>
                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Collaboration fluide</span>
                  <MdTrackChanges className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-gray-200 text-lg mb-8">
              Avec Aitenders, vos contrats deviennent enfin des alliés stratégiques du quotidien.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              Découvrir toutes les fonctionnalités →
            </Button>
          </div>
        </div>
      </section>



      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">projets référence</span> sur les bases contractuelles standard
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nos clients sécurisent leurs contrats complexes avec l'IA Aitenders
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            
            {/* Project 1: Data Center Régional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Center Régional</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">IT/Sécurité</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">Contrat : 3 documents (85 pages)</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Contrat de maintenance informatique simple avec SLA standard et clauses de pénalités. 
                  Documentation concise : contrat principal, annexe technique et grille tarifaire.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +68% réduction risques juridiques</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> 100% clauses analysées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Obligations cartographiées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> Équipes juridiques alignées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Contrat Maintenance Industrielle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdEngineering className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Contrat Maintenance Industrielle</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Industrie</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">Contrat : 5 documents (120 pages)</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Fourniture d'équipements industriels avec installation et formation. 
                  Dossier contractuel : bon de commande, spécifications techniques, planning, garanties et formation.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +85% accélération analyse</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Risques identifiés automatiquement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Audit contractuel complet</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> Validation multi-expertises</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: PPP Transport Public */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdGavel className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">PPP Transport Public</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">PPP</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">Contrat : 4 documents (95 pages)</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Prestation de services conseil avec livrables définis et jalons de validation. 
                  Documentation standard : contrat cadre, cahier des charges, planning et conditions générales.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +92% temps économisé analyse</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Réglementation PPP respectée</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Partage risques documenté</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> Parties prenantes synchronisées</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance pour leurs contrats complexes</h3>
              </div>
              <div className="flex items-center justify-center space-x-12 animate-pulse">
                <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={colasLogo} alt="Colas" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Integrated Chat Simulator */}
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vous voulez voir l'impact sur <span className="text-purple-600">vos contrats ?</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez en 2 minutes le potentiel de sécurisation spécifique à votre contexte
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ChatInterface 
                language="fr"
                customActions={[
                  {
                    label: "🚀 Simulateur ROI",
                    icon: <MdAnalytics className="w-4 h-4" />,
                    onClick: () => {}
                  },
                  {
                    label: "📋 Nos Cas d'Usage",
                    icon: <MdDashboard className="w-4 h-4" />,
                    onClick: () => {}
                  },
                  {
                    label: "💬 Parler à un Expert",
                    icon: <MdMail className="w-4 h-4" />,
                    onClick: () => {}
                  }
                ]}
                transparent={true}
              />
            </div>
          </div>
        </div>
      </section>

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
            label: "Lancer le simulateur", 
            icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Open ROI calculator
          },
          {
            label: "Nous Contacter",
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