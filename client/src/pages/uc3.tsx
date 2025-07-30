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

export default function UC3Page() {
  // Target audience data with interactive content
  const targetAudiences = [
    {
      id: 'bid-response',
      title: 'Responsables des réponses aux appels d\'offres',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Coordonnez en toute fluidité les experts techniques, juridiques, commerciaux et qualité. Grâce à l\'analyse IA, structurez instantanément des appels d\'offres complexes de plus de 500 pages et assurez une traçabilité complète qui élimine tout écart et protège la crédibilité de l\'équipe.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ 500+ pages analyzed',
      alert: '📊 Compliance: 92%'
    },
    {
      id: 'project-offer',
      title: 'Chefs de propositions de projets',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Menez des stratégies gagnantes grâce à une pré‑organisation intelligente par IA qui supprime des semaines de préparation manuelle. Accédez au suivi de conformité en temps réel, détectez automatiquement les évolutions et démontrez à la direction une couverture intégrale des exigences.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Setup Complete',
      alert: '📈 Win Rate: 94%'
    },
    {
      id: 'contract-managers',
      title: 'Gestionnaires de contrats',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Assurez la conformité pluridisciplinaire avec un suivi dynamique du cycle de vie et une détection proactive des incohérences. Évitez les négligences coûteuses et prouvez votre rigueur grâce à des pistes d\'audit complètes sur des opportunités à plusieurs millions d\'euros.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Audit Ready',
      alert: '✅ Zero Gaps'
    },
    {
      id: 'technical-directors',
      title: 'Directeurs techniques',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Libérez vos spécialistes des contraintes administratives. Profitez de structures d\'exigences pré‑organisées et conformes qui réduisent les erreurs d\'interprétation tout en documentant chaque obligation technique de manière irréprochable.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Tech Ready',
      alert: '📋 All Specs Met'
    },
    {
      id: 'commercial-directors',
      title: 'Directeurs commerciaux',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Ciblez et sécurisez des opportunités internationales complexes grâce à des bases de conformité infaillibles et évolutives. Démontrez une couverture intégrale des exigences, protégez la réputation commerciale et maximisez vos chances de succès.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Exec Ready',
      alert: '🎯 100% Coverage'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Excel Compliance Chaos",
      description: "Manual tracking across 8+ experts creates dangerous gaps that cost million-euro opportunities"
    },
    {
      icon: MdDescription,
      title: "Documentation Overwhelm",
      description: "Days lost extracting requirements from 500+ page RFPs with copy-paste errors risking exclusions"
    },
    {
      icon: FaUsers,
      title: "Expert Coordination Issues",
      description: "Multiple review cycles delay submission while hidden requirement gaps cause rejections"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Structure Complex Projects Instantly",
      description: "AI document analysis automatically organizes 500+ page RFPs into structured data and actionable insights"
    },
    {
      icon: MdGroups,
      title: "Orchestrate Expert Teams Seamlessly",
      description: "Coordinate technical, legal, commercial, and quality specialists with dynamic compliance matrices"
    },
    {
      icon: MdSecurity,
      title: "Control Every Project Evolution",
      description: "Automatically detect document changes and track version evolution with instant alerts"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Upload Complex Documentation",
      description: "Drop your project files and watch AI structure everything automatically",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Collaborate on Compliance",
      description: "Generate matrices, allocate expert responsibilities, and build response strategy as a team",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Control Every Evolution", 
      description: "Track changes, manage Q&As, and ensure zero gaps throughout the project lifecycle",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "90%",
      description: "Data organization completed immediately"
    },
    {
      metric: "40%",
      description: "Faster review organization"
    },
    {
      metric: "0",
      description: "Formal rejections for non-compliance"
    },
    {
      metric: "100%",
      description: "Requirement coverage guaranteed"
    }
  ];

  const differentiators = [
    {
      title: "First Platform for Mega-Projects",
      description: "Purpose-built for multi-lot, international projects with full traceability"
    },
    {
      title: "Agile Alternative to Siloed Tools",
      description: "Native AI integration for analysis and guided content creation"
    },
    {
      title: "Dynamic Requirement Linking",
      description: "Connect requirements, compliance, and deliverables automatically"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient blob - top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, #C3D9F8 70%, transparent 100%)'
               }}></div>
          
          {/* Medium accent blob - center right */}
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, #C3D9F8 0%, #3880E8 30%, transparent 70%)'
               }}></div>
          
          {/* Small atmospheric accent - bottom */}
          <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'linear-gradient(135deg, #FBFCFF 0%, #F5F9FE 50%, #EBF2FD 100%)'
               }}></div>
          
          {/* Flowing wave accent - mobile optimized */}
          <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #F5F9FE 20%, #C3D9F8 40%, #EBF2FD 60%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Maitrisez Vos Offres Complexes</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Chaque exigence traitée, <span className="text-purple-600">chaque risque maîtrisé</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> <span className="text-purple-300">La seule plateforme pensée pour orchestrer les grands appels d’offres complexes :</span> analyse IA de milliers de pages, capture et validation des exigences, cohérence multi‑équipes et pilotage sans faille. 
                Vous éliminez les angles morts, sécurisez la conformité et gagnez des jours critiques pour livrer une offre solide et compétitive.</p>
              </div>
              
              
              
              {/* Primary CTA */}
              <div className="mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                >
                  Réservez une Démo
                </Button>
              </div>
              
              {/* Secondary CTA - Less Prominent */}
              <div className="mb-20">
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>
              
              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Mentionné parmi les 25 meilleures solutions d’IA et de ML</p>
                
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
                    <span>Plébiscité par les leaders du secteur</span>
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
                    <div className="text-sm text-gray-600 font-medium">AItenders - Project Dashboard</div>
                    <div className="w-12"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-8">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Infrastructure Project RFP</h3>
                        <p className="text-gray-600">Multi-lot tender • 8 expert teams</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Live</span>
                      </div>
                    </div>
                    
                    {/* Progress Overview */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                        <div className="text-3xl font-bold text-green-700 mb-2">127</div>
                        <div className="text-sm text-gray-600">Requirements processed</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                        <div className="text-3xl font-bold text-blue-700 mb-2">8</div>
                        <div className="text-sm text-gray-600">Expert teams coordinated</div>
                      </div>
                    </div>
                    
                    {/* Team Status */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Progress</h4>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <MdEngineering className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Technical Team</div>
                            <div className="text-sm text-gray-600">24 requirements assigned</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-blue-600">85%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                            <MdGavel className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Legal Team</div>
                            <div className="text-sm text-gray-600">18 requirements assigned</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-purple-600">92%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MdBusiness className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Commercial Team</div>
                            <div className="text-sm text-gray-600">31 requirements assigned</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '76%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-green-600">76%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Success Notifications */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-bounce">
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="w-4 h-4" />
                    <span>Requirements analyzed</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-pulse">
                  <div className="flex items-center space-x-2">
                    <MdNotifications className="w-4 h-4" />
                    <span>Teams notified</span>
                  </div>
                </div>
                
                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200/15 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - right side */}
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #C3D9F8 50%, #EBF2FD 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          
          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #C3D9F8 40%, transparent 80%)'
               }}></div>
          
          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 30%, #FBFCFF 70%, #EBF2FD 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>
            
            {/* Multi-tone Faded Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative z-10 text-center">
              
              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Zéro angle mort, <span className="text-purple-600">zéro surprise</span>
              </h2>
              
              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Dans les grands appels d’offres, les équipes gaspillent un <span className="text-grey-500 font-bold">temps critique</span> à vérifier manuellement la conformité, avec des risques d’oubli, d’incohérence et de rejet.</p>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Avec Aitenders, démarrez sur une donnée intelligente dès le premier jour, collaborez sans friction et pilotez chaque évolution de l’offre pour garantir une réponse conforme et compétitive, sans mauvaise surprise.</p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Contactez nous!
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
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
                 background: 'radial-gradient(circle, #FBFCFF 0%, #F5F9FE 30%, #C3D9F8 70%, transparent 100%)'
               }}></div>
          
          {/* Medium directional blob - middle left */}
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #EBF2FD 0%, #C3D9F8 50%, #3880E8 90%, transparent 100%)'
               }}></div>
          
          {/* Atmospheric accent - bottom right */}
          <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, transparent 100%)'
               }}></div>
          
          {/* Subtle flowing wave - center */}
          <div className="absolute top-1/2 left-0 w-full h-40 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #C3D9F8 25%, #F5F9FE 50%, #EBF2FD 75%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Votre <span className="text-purple-600">copilote IA </span> qui simplifie la gestion des appels d’offres complexes</h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Structurez, collaborez et maîtrisez vos appels d’offres complexes, sans aucun angle mort.</h3>
          </div>

          {/* Feature 1: Structure Complex Projects - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Démarrez le projet sur une donnée pré-organisée et intelligente <span className="text-purple-600">dès le jour 1</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grâce aux assistants IA, les documents sont automatiquement structurés en base de données, les informations classifiés, les exigences identifiées, les points clés résumés, les contradictions et similitudes détectées etc ... 
        <p>      <span className="text-purple-600">Le responsable d'offre mets à disposition de l’équipe projet</span> une base propre, intelligible, prête à l’analyse, sans aucun traitement manuel initial.</p>  
              </p>
              <div className="flex items-center text-lg font-bold  text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Base intelligente experte prête dès le premier jour!
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Document Analysis</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MdDescription className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Requirements extraction</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Data classification</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Insight generation</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Orchestrate Expert Teams - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Expert Coordination</h4>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdAccountBox className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">T</span>
                        </div>
                        <span className="text-sm text-gray-700">Technical specialist</span>
                      </div>
                      <span className="text-xs text-gray-500">24 tasks</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">L</span>
                        </div>
                        <span className="text-sm text-gray-700">Legal specialist</span>
                      </div>
                      <span className="text-xs text-gray-500">18 tasks</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">C</span>
                        </div>
                        <span className="text-sm text-gray-700">Commercial specialist</span>
                      </div>
                      <span className="text-xs text-gray-500">31 tasks</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Collaborez entre experts <span className="text-purple-600">sans friction</span>, assurez la conformité initiale <span className="text-purple-600">sans effort.</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Aitenders permet de générer de manière collaborative et structurée la matrice de conformité, l’allocation des exigences aux experts, et une structuration des livrables à produire. 
                <p>
                  <span className="text-purple-600"> Chaque expert </span> 
                  sait ce qu’il doit faire, les angles morts sont visibles, la stratégie de réponse se construit en équipe, sans perte d’information. </p>
</p>
              <div className="flex items-center text-lg text-gray-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                <span className="font-bold text-blue-500">Collaboration structurée et pilotée (exit les fichiers Excel)</span>
              </div>
            </div>
          </div>

          {/* Feature 3: Control Every Evolution - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">       Pilotez chaque évolution de l’offre,<span className="text-purple-600">sans rien laisser passer</span> </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">Les changements documentaires sont détectés et versionnés automatiquement, avec comparaison instantanée. Le pilotage intégré des Q&A signale chaque écart, permettant à l’équipe d’en mesurer l’impact et d’agir sans délai. <p>               <span className="text-purple-600"> Le responsable de l'offre </span> s'assure ainsi d'identifier en amont les erreurs de version, les oublis et les non‑conformités : plus de “trous dans la raquette”...</p> </p>
               <div className="flex items-center text-lg font-bold  text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                 Pilotage des évolutions sans faille
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Version Control</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdSettings className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Document v2.3 detected</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">New</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-gray-700">3 requirements updated</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Alert</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Team notification sent</span>
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

      {/* User Journey Section - High Conversion Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - center top */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-22 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FBFCFF 0%, #F5F9FE 35%, #C3D9F8 70%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - bottom left */}
          <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full opacity-18 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          
          {/* Directional accent - right side */}
          <div className="absolute top-1/3 -right-28 w-72 h-72 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #EBF2FD 40%, transparent 80%)'
               }}></div>
          
          {/* Subtle connecting flow */}
          <div className="absolute top-2/3 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-14"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 20%, #C3D9F8 50%, transparent 80%, #FBFCFF 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Réussissez Vos Projets Complexes en 3 Étapes</h2>
          </div>
          
          {/* Steps Flow */}
          <div className="relative">
            {/* Enhanced Connection Flow - Desktop Only */}
            <div className="hidden lg:block absolute top-20 left-1/4 right-1/4">
              <div className="h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full"></div>
              {/* Directional arrows */}
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rotate-45"></div>
              <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rotate-45"></div>
            </div>
            
            {/* Step indicators */}
            <div className="hidden lg:flex absolute top-16 left-0 right-0 justify-between items-center px-12">
              <div className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">ÉTAPE 1</div>
              <div className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">ÉTAPE 2</div>
              <div className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">ÉTAPE 3</div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-100/50 hover:border-purple-200/50 transform hover:-translate-y-3 transition-all duration-500"
                     style={{
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                     }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 md:-top-8 left-6 md:left-8 lg:left-12">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl flex items-center justify-center text-lg md:text-2xl font-bold shadow-xl">
                      1
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MdDescription className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">Téléversez votre documentation complexe</h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4 md:mb-6">Déposez vos appels d'offres de plus de 500 pages et laissez l'IA structurer instantanément chaque exigence dans une base claire et exploitable.</p>
                    
                    {/* Enhanced Blue Highlight Box */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-3 md:p-4 mx-auto">
                      <div className="flex items-center justify-center text-blue-700 font-semibold text-sm md:text-base">
                        <MdFlashOn className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600" />
                        <span className="text-blue-800">Gagnez des semaines de préparation manuelle et assurez‑vous qu'aucune clause ne soit oubliée dès le premier jour.</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-100/50 hover:border-purple-200/50 transform hover:-translate-y-3 transition-all duration-500"
                     style={{
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                     }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 md:-top-8 left-6 md:left-8 lg:left-12">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl flex items-center justify-center text-lg md:text-2xl font-bold shadow-xl">
                      2
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MdGroups className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">Collaborez sur la conformité</h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4 md:mb-6">Générez des matrices de conformité dynamiques, assignez les responsabilités aux équipes juridiques, techniques et commerciales, et alignez votre stratégie de réponse en temps réel.</p>
                    
                    {/* Enhanced Blue Highlight Box */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-3 md:p-4 mx-auto">
                      <div className="flex items-center justify-center text-green-700 font-semibold text-sm md:text-base">
                        <MdFlashOn className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-green-600" />
                        <span className="text-green-800">Supprimez les silos et réduisez les cycles de relecture de 40 %.</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-100/50 hover:border-purple-200/50 transform hover:-translate-y-3 transition-all duration-500"
                     style={{
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                     }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 md:-top-8 left-6 md:left-8 lg:left-12">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl flex items-center justify-center text-lg md:text-2xl font-bold shadow-xl">
                      3
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MdSecurity className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">Maîtrisez chaque évolution</h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4 md:mb-6">Suivez les changements documentaires, gérez les Q&A et recevez des alertes proactives sur les mises à jour ou les risques afin de garantir une conformité totale.</p>
                    
                    {/* Enhanced Blue Highlight Box */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg p-3 md:p-4 mx-auto">
                      <div className="flex items-center justify-center text-orange-700 font-semibold text-sm md:text-base">
                        <MdFlashOn className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-orange-600" />
                        <span className="text-orange-800">Protégez‑vous contre les rejets coûteux et démontrez une couverture à 100 % des exigences.</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12 md:mt-16">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Regardez une démo de 2 minutes
            </Button>
          </div>
        </div>

    
      </section>


      {/* KPI Section - High Impact Design */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          
          
          {/* User-Focused Results Section - Before KPIs */}
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Ce que nos utilisateurs obtiennent concrètement</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Des résultats mesurables pour chaque profil d'utilisateur</p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Responsable d'offre Results */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Responsable d'offre</h4>
                      <p className="text-sm text-gray-600">Réponse techniquement conforme et traçable</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Obtenez une réponse d'offre techniquement conforme, collaborative, traçable, et vérifiable à tout moment. Cette approche garantit la couverture des exigences critiques et sécurise le dépôt d'une offre sans risque d'exclusion.
                  </p>
                  
                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Réduction des risques juridiques grâce à la conformité garantie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Visibilité totale avec matrice dynamique des exigences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Alignement parfait avec le cahier des charges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Traçabilité multi-expert avec historique complet de validation</span>
                    </li>
                  </ul>
                </Card>
              </div>
              
              {/* Experts métiers Results */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdEngineering className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Experts métiers</h4>
                      <p className="text-sm text-gray-600">Extraction et traitement collaboratif des exigences</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Extrayez automatiquement les exigences clés, traitez-les de manière collaborative, puis générez des contenus fiables qui répondent point par point aux exigences sans oublier ou reformuler à côté.
                  </p>
                  
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Moins de stress, moins de relectures manuelles, moins de copier-coller hasardeux.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Un pilotage clair de qui traite quoi, avec historique et alertes.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Une rédaction guidée et intelligente, sans repartir de zéro.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Une capacité à prouver que tout a été couvert.</span>
                    </div>
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
                  90 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Travail d'organisation des données et du projet réalisé immédiatement</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  Cohérence
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Organisation homogène des réponses pour une crédibilité renforcée</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  0 rejet
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Aucune non‑conformité formelle pour sécuriser vos soumissions</p>
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
              Au-delà du parcours habituel, découvrez des fonctionnalités avancées qui ajoutent une dimension stratégique à votre gestion d'appels d'offres complexes.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Bulk Versioning */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdCloudSync className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Bulk Versioning</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Gérez simultanément plusieurs versions de vos documents d'offre avec synchronisation automatique et traçabilité complète des modifications multi-équipes.
                </p>
                
                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Gestion avancée</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Écriture des réponses */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdCreate className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Écriture des réponses</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  IA générative contextuelle qui rédige des réponses précises et conformes en s'appuyant sur votre base de connaissances et les exigences spécifiques.
                </p>
                
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">IA contextuelle</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Back to Back */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSwapHoriz className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Back to Back</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Établissez des liens automatisés entre contrats clients et sous-traitants avec mise en correspondance des clauses et gestion des flux contractuels.
                </p>
                
                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Automatisation</span>
                  <MdLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Lien avec les livrables */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Lien avec les livrables</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Connectez automatiquement chaque exigence aux livrables correspondants avec suivi en temps réel et validation de la complétude du projet.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Traçabilité</span>
                  <MdTrackChanges className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Exigences Filles */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdCallSplit className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Exigences Filles</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Décomposez intelligemment les exigences complexes en sous-exigences managérables avec hiérarchisation automatique et répartition par expertise.
                </p>
                
                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Décomposition</span>
                  <MdSchema className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Contrôles de non-conformité */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGppBad className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contrôles de non-conformité</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Détection proactive des écarts et non-conformités avec alertes intelligentes et suggestions de correction avant soumission.
                </p>
                
                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Prévention</span>
                  <MdWarning className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Securité Accrue */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdTimeline className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">haut niveai de sécurité, intégrée dès la conception</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                     blabla
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Souverain</span>
                        <MdRotateRight className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Data Security</span>
                        <MdFlag className="w-4 h-4 ml-2" />
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
              Explorer tous les toppings →
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section - High-Conversion Enterprise Design */}
      <section className="py-20 md:py-28 lg:py-32 xl:py-40 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-blue-200/15 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Clean Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Ce qui change avec Aitenders
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez la transformation complète, du chaos manuel à la précision pilotée par l'IA.
            </p>
          </div>

          {/* Clean Comparison Container */}
          <div className="relative">
            {/* Desktop Clean Comparison Table */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Simple Table Header */}
                <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
                  <div className="p-6 border-r border-gray-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                        <MdWarning className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AS‑IS (Aujourd'hui)</h3>
                        <p className="text-sm text-gray-600">Chaos, retards et risques</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">TO‑BE (Avec Aitenders)</h3>
                        <p className="text-sm text-gray-600">Automatisé, précis, efficace</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Comparison Rows */}
                <div className="divide-y divide-gray-200">
                  {/* Row 1 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Excel manuel pour conformité</h4>
                          <p className="text-gray-600 text-xs">Tableaux dispersés entre départements sans coordination centrale</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Matrice IA dynamique</h4>
                          <p className="text-gray-600 text-xs">Source unique de vérité avec collaboration temps réel pour tous les experts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Copier‑coller hasardeux</h4>
                          <p className="text-gray-600 text-xs">Erreurs humaines dans les processus manuels coûtent des opportunités critiques</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Rédaction guidée par exigences</h4>
                          <p className="text-gray-600 text-xs">L'IA traite les documents complexes en minutes, pas en semaines</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Relectures longues et multiples</h4>
                          <p className="text-gray-600 text-xs">Coordination interminable ralentit tout le processus</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Détection automatique des incohérences</h4>
                          <p className="text-gray-600 text-xs">Contrôle qualité proactif avec notifications instantanées à l'équipe</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Risque d'exclusion / d'oublis d'exigences</h4>
                          <p className="text-gray-600 text-xs">Oublis critiques découverts trop tard dans le processus</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Preuve de couverture conforme à 100 %</h4>
                          <p className="text-gray-600 text-xs">Audit complet garantit qu'aucune exigence n'est jamais manquée</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Comparison - Simple Cards */}
            <div className="lg:hidden space-y-6">
              {/* Before Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-red-500 rounded mr-3">
                    <MdWarning className="w-4 h-4 text-white m-1" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">AS‑IS (Aujourd'hui)</h3>
                </div>
                <div className="space-y-3">
                  {/* Mobile comparison items with same content */}
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Excel manuel pour conformité</h4>
                      <p className="text-xs text-gray-600">Tableaux dispersés entre départements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Copier‑coller hasardeux</h4>
                      <p className="text-xs text-gray-600">Erreurs humaines coûtent des opportunités</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Relectures longues et multiples</h4>
                      <p className="text-xs text-gray-600">Coordination interminable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Risque d'exclusion / d'oublis d'exigences</h4>
                      <p className="text-xs text-gray-600">Oublis critiques découverts trop tard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded mr-3">
                    <MdCheckCircle className="w-4 h-4 text-white m-1" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">TO‑BE (Avec Aitenders)</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Matrice IA dynamique</h4>
                      <p className="text-xs text-gray-600">Source unique de vérité pour tous les experts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Rédaction guidée par exigences</h4>
                      <p className="text-xs text-gray-600">L'IA traite les documents en minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Détection automatique des incohérences</h4>
                      <p className="text-xs text-gray-600">Contrôle qualité proactif</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Preuve de couverture conforme à 100 %</h4>
                      <p className="text-xs text-gray-600">Audit complet garantit qu'aucune exigence n'est manquée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* Master Compliance Section - Inspired by Image Design */}

      {/* Trust & Compliance */}

      {/* Call to Action */}
      <section className="py-20 px-4 bg-aitenders-dark-blue">
        <div className="max-w-4xl mx-auto text-center text-aitenders-white-blue">
          <h2 className="text-4xl font-bold mb-6">Prêt à Maîtriser Votre Prochaine Offre Complexe ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les équipes de projet qui font confiance à AItenders pour sécuriser leurs offres complexes, éliminer les risques de conformité, 
            et gagner en toute confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-aitenders-primary-blue text-aitenders-white-blue hover:bg-aitenders-primary-blue/90 px-8 py-4 text-lg">
              <MdMessage className="w-5 h-5 mr-2" />
              Demander une Démo
            </Button>
            <Button variant="outline" size="lg" className="border-aitenders-white-blue/80 text-aitenders-white-blue bg-aitenders-white-blue/10 hover:bg-aitenders-white-blue hover:text-aitenders-dark-blue px-8 py-4 text-lg backdrop-blur-sm">
              Contacter Notre Équipe
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-80">Sécurité de niveau entreprise • Collaboration multi-experts • Pistes d'audit complètes</p>
        </div>
      </section>


      
      {/* Chat Interface with UC3-specific actions */}
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
            label: "Demo UC3",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC3 demo
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