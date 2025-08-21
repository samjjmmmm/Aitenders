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
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import client logos
import equansLogo from "@assets/Equans_1753711339292.png";
import bouyguesLogo from "@assets/Bouyges_1753711339292.png";
import colasLogo from "@assets/Colas_1753711339292.png";
import newProjectImage from "@assets/Selection(24)_1754328031324.png";
import ChatSection from "@/components/chat-section";
import ChatInterface from "@/components/chat-interface";
import Lottie from 'lottie-react';
import lottieAnimation from '../assets/UC-3_1755004661252.json';
import wow1Animation from '../assets/wow-1.json';
import wow2Animation from '../assets/wow-2-uc3-updated.json';
import wow3Animation from '../assets/wow-3.json';
import uc3FirstFeatureImage from "@assets/33_1755170264011.png";
import uc3SecondFeatureImage from "@assets/wow 2_1755694076094.png";
import uc3ThirdFeatureImage from "@assets/wow 3_1755698579312.png";
import uc3HeroImage from "@assets/HERO UC 3_1755765733932.png";

export default function UC3Page() {
  // State for managing continuous animation loop
  const [animationKey, setAnimationKey] = useState(0);
  
  // ANIMATION TIMING CONFIGURATION - 7 SECOND LOOP
  // ==============================================
  // 0.0s - 3.0s : Image (opacity 1→1→0.3, duration: 3s)
  // 2.5s - 3.1s : Agent Technique (delay: 2.5s, duration: 0.6s)
  // 2.7s - 3.3s : Agent Juridique (delay: 2.7s, duration: 0.6s)
  // 2.9s - 3.5s : Agent Commercial (delay: 2.9s, duration: 0.6s)
  // 3.1s - 3.7s : Agent Risques (delay: 3.1s, duration: 0.6s)
  // 3.3s - 4.1s : Coordination IA (delay: 3.3s, duration: 0.8s)
  // 3.8s - 5.8s : Particules (delay: 3.8s, duration: 2s, repeat)
  // 5.0s - 6.0s : Dashboard (delay: 5s, duration: 1s)
  // 5.5s - 6.3s : Blob violet (delay: 5.5s, duration: 0.8s)
  // 5.7s - 6.5s : Blob bleu (delay: 5.7s, duration: 0.8s)
  // 6.0s - 6.6s : Notification "Analyse terminée" (delay: 6s, duration: 0.6s)
  // 6.2s - 6.8s : Notification "Équipes coordonnées" (delay: 6.2s, duration: 0.6s)
  // 7.0s        : RESTART - animationKey increment
  
  // Continuous loop - restart animation every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 7000); // Restart animation every 7 seconds
    
    return () => clearInterval(interval);
  }, []);

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
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-white via-slate-50/30 to-purple-50/20 relative overflow-hidden">
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
        
        <div className="content-boundary relative z-10">
          <div className="text-center">
            {/* Centered Content */}
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <Badge className="mb-8 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-lg font-semibold px-6 py-3 rounded-full shadow-sm">Maitrisez Vos Offres Complexes</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Chaque exigence traitée, <span className="text-purple-600">chaque risque maîtrisé</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> <span className="text-purple-300">La seule plateforme pensée pour orchestrer les grands appels d’offres complexes :</span> analyse IA de milliers de pages, capture et validation des exigences, cohérence multi‑équipes et pilotage sans faille. 
                Vous éliminez les angles morts, sécurisez la <span className="text-purple-bold600">conformité </span>et gagnez des jours critiques pour livrer une offre solide et compétitive.</p>
              </div>
              
              
              
              {/* CTAs Side by Side */}
              <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Réservez une Démo
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-lg font-medium underline decoration-2 underline-offset-4 rounded-xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>
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

            {/* Hero Image at bottom */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-4xl">
                <img
                  src={uc3HeroImage}
                  alt="Aitenders UC3 Interface - Complex Tender Analysis Dashboard"
                  className="w-full h-auto"
                  style={{
                    transform: 'scale(1.70)',
                    transformOrigin: 'center',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 32px rgba(56, 128, 232, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
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
        
        <div className="content-boundary relative z-10">
          
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
      <section className="py-32 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
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
        
        <div className="content-boundary relative z-10">
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
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc3FirstFeatureImage}
                  alt="Analyse IA - Démarrez le projet sur une donnée pré-organisée"
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-2xl shadow-2xl"
                  style={{ 
                    transform: 'scale(1.4)',
                    filter: 'drop-shadow(0 8px 32px rgba(59, 130, 246, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Orchestrate Expert Teams - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc3SecondFeatureImage}
                  alt="Collaborez entre experts sans friction - Gestion collaborative des documents"
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-2xl shadow-2xl"
                  style={{ 
                    transform: 'scale(1.4)',
                    filter: 'drop-shadow(0 8px 32px rgba(147, 51, 234, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
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
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc3ThirdFeatureImage}
                  alt="Pilotage des évolutions - Détection automatique des changements"
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]"
                  style={{ 
                    transform: 'scale(1.4)',
                    objectFit: 'contain',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* KPI Section - High Impact Design */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="content-boundary">

          
          
          {/* User-Focused Results Section - Before KPIs */}
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Ce que vos équipes obtiennent concrètement avec Aitenders</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Une réponse sans angle mort pour vos appels d’offres complexes : conformité garantie, 
                traçabilité intégrale et pilotage collaboratif pour maximiser vos chances de succès.
              </p>
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
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
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

        <div className="content-boundary relative z-10">
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

      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">appels d'offres référence</span> sur les multi-lots complexes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nos clients transforment leurs appels d'offres les plus exigeants avec l'IA Aitenders
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            
            {/* Project 1: Ligne 15 du Grand Paris */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdTimeline className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ligne 15 du Grand Paris</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">Métro</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">Offre : 10 Milliards €</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Extension majeure du réseau de transport francilien avec 33 nouvelles stations. 
                  Coordination de 15 lots techniques interdépendants avec contraintes géotechniques complexes.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +65% temps économisé sur coordination</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> 100% exigences RATP couvertes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Audit complet en temps réel</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 12 équipes synchronisées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Autoroute A63 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdGpsFixed className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Autoroute A63 Modernisation</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Infrastructure</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">Offre : 2.8 Milliards €</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Modernisation complète sur 180km avec système de péage électronique intégré. 
                  Gestion simultanée de 8 lots environnementaux et 12 lots techniques spécialisés.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +72% accélération des études</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Normes environnementales respectées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Suivi multi-lots centralisé</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 20 équipes interdisciplinaires</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Campus Hospitalo-Universitaire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdBusiness className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Campus Hospitalo-Universitaire Lyon</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">Santé</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">Offre : 1.2 Milliards €</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Construction de 3 bâtiments hospitaliers avec équipements médicaux haute technologie. 
                  Intégration de 25 lots spécialisés avec contraintes sanitaires et sécuritaires strictes.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +58% réduction délais conception</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Normes hospitalières strictes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Validation médicale continue</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 25 lots coordonnés</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance pour leurs projets complexes</h3>
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
                Vous voulez voir l'impact sur <span className="text-purple-600">vos projets ?</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez en 2 minutes le potentiel d'optimisation spécifique à votre contexte
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