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
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import Lottie from 'lottie-react';
import wow1Uc2Animation from '../assets/wow-1-uc2.json';
import wow2Uc2Animation from '../assets/wow-2-uc2.json';
import wow3Uc2Animation from '../assets/wow-3-uc2.json';
import uc2FirstFeatureImage from "@assets/WOW 1_1755786436432.png";
import uc2SecondFeatureImage from "@assets/UI 1_1755620075131.png";
import uc2ThirdFeatureImage from "@assets/wow 3_1755698476634.png";
import uc2HeroImage from "@assets/HERO UC 2_1755763267253.png";

export default function UC2Page() {
  // Target audience data with interactive content - UC2 adapted
  const targetAudiences = [
    {
      id: 'proposal-managers',
      title: 'Proposal Managers',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Gérez des projets moyens avec complexité modérée tout en maintenant la qualité et les délais. Coordonnez efficacement les équipes techniques et commerciales pour produire des offres structurées et convaincantes.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ Offre structurée',
      alert: '📊 Délai: Optimisé'
    },
    {
      id: 'technical-managers',
      title: 'Managers techniques',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Supervisez la cohérence technique des propositions moyennes avec des workflows optimisés. Assurez la qualité des livrables techniques tout en respectant les contraintes budgétaires et temporelles.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Cohérence validée',
      alert: '📈 Qualité: Assurée'
    },
    {
      id: 'commercial-directors',
      title: 'Directeurs commerciaux',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Optimisez votre pipeline de projets moyens avec une visibilité complète sur les performances et les risques. Maximisez le taux de conversion grâce à des processus standardisés et efficaces.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Pipeline optimisé',
      alert: '✅ ROI maximisé'
    },
    {
      id: 'project-directors',
      title: 'Directeurs de projets',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Pilotez la livraison de projets moyens avec des outils de suivi et de contrôle avancés. Assurez la conformité opérationnelle et la satisfaction client sur l\'ensemble du portfolio.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Projets pilotés',
      alert: '📋 Conformité validée'
    },
    {
      id: 'operations-managers',
      title: 'Responsables opérationnels',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Standardisez les processus opérationnels pour les projets moyens avec une approche méthodique. Optimisez les ressources et réduisez les délais grâce à l\'automatisation intelligente.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Processus optimisés',
      alert: '🎯 Efficacité +60%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Complexité croissante difficile à gérer",
      description: "Les projets moyens nécessitent plus de coordination et de ressources, créant des risques de dépassement et d'erreurs"
    },
    {
      icon: MdDescription,
      title: "Processus peu standardisés",
      description: "Manque de méthodologie claire pour gérer efficacement les projets de taille intermédiaire"
    },
    {
      icon: FaUsers,
      title: "Coordination équipes complexe",
      description: "Difficultés à aligner les équipes techniques et commerciales sur des projets multi-disciplinaires"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Gestion intelligente des projets moyens",
      description: "IA spécialisée qui coordonne automatiquement les ressources et optimise les processus pour les projets intermédiaires"
    },
    {
      icon: MdGroups,
      title: "Workflows standardisés et flexibles",
      description: "Méthodologies éprouvées adaptées à la complexité des projets moyens avec personnalisation selon les besoins"
    },
    {
      icon: MdSecurity,
      title: "Contrôle qualité automatisé",
      description: "Validation systématique des livrables et suivi proactif des risques pour maintenir l'excellence"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Analysez votre projet moyen",
      description: "Importez vos documents et laissez l'IA structurer automatiquement les exigences et les ressources nécessaires",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Coordonnez vos équipes",
      description: "Organisez efficacement les interactions entre équipes techniques et commerciales avec des workflows optimisés",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Livrez avec excellence", 
      description: "Suivez l'avancement en temps réel et assurez la qualité des livrables avec des contrôles automatisés",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "70%",
      description: "Réduction du temps de coordination"
    },
    {
      metric: "85%",
      description: "Amélioration de la qualité des livrables"
    },
    {
      metric: "3-5 jours",
      description: "Délai moyen de structuration projet"
    },
    {
      metric: "100%",
      description: "Traçabilité des processus"
    }
  ];

  const differentiators = [
    {
      title: "Solution Optimisée Projets Moyens",
      description: "Conçue spécifiquement pour équilibrer complexité et efficacité sur les projets intermédiaires"
    },
    {
      title: "Intelligence Collaborative Avancée",
      description: "IA spécialisée dans la coordination multi-équipes et la gestion des dépendances"
    },
    {
      title: "Flexibilité et Standardisation",
      description: "Processus adaptatifs qui s'ajustent à la complexité spécifique de chaque projet"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

      <main>
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{ backgroundColor: '#EBF2FD' }}>
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

        <div className="content-boundary relative z-10">
          {/* Content Section */}
          <div className="text-center">
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Pilotez les offres moyennes</Badge>
                </motion.div>

                <motion.h1 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Découvrez, pilotez et sécurisez chaque clause <span className="text-purple-600">dès le premier jour.</span>
                </motion.h1>

                <motion.p 
                  className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >

                  La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour : structuration IA du périmètre, détection immédiate des clauses critiques et pilotage dynamique des Q&A et versions. Vous réduisez de moitié votre temps d’analyse, rassurez votre direction et livrez une réponse compétitive, sans risque de dernière minute. 
                </motion.p>
              </motion.div>

              {/* CTA Buttons - Side by Side */}
              <motion.div 
                className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  Réservez une Démo
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </motion.div>
          </div>

          {/* Hero Image - Bottom */}
          <motion.div 
            className="w-full max-w-7xl mx-auto mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.1 }}
          >
              <div className="flex justify-center items-center">
                <div className="relative flex justify-center items-center h-full px-0 py-6">
                  <img
                    src={uc2HeroImage}
                    alt="Aitenders UC2 Interface - Medium Project Management Dashboard"
                    className="block w-[640px] md:w-[760px] lg:w-[880px] max-w-full h-auto select-none pointer-events-none object-contain"
                    style={{
                      transform: 'scale(1.42)',
                      transformOrigin: 'center',
                      imageRendering: 'auto',
                      filter: 'none'
                    }}
                  />
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      
      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative overflow-hidden">
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

        <div className="content-boundary relative z-10">

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
                Votre offre, 100 % claire, 0 % surprise  
              </h2>

              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              Sur les projets moyen, vos équipes jonglent entre délais serrés, clauses critiques cachées et versions dispersées, au risque d’erreurs coûteuses et d’allers‑retours interminables.   
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">


                Avec Aitenders, structurez automatiquement chaque dossier dès le jour 1, détectez instantanément les clauses sensibles et pilotez vos Q&A et versions dans un cockpit centralisé. Résultat : une analyse deux fois plus rapide, zéro clause oubliée, et une offre compétitive validée sans stress. 
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Optimisez Vos Projets Moyens!
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Voir la Démonstration
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

        <div className="content-boundary relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Votre <span className="text-blue-600">copilote IA</span> qui sécurise la gestion de vos projets moyens</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Découvrez, pilotez et sécurisez chaque clause dès le premier jour. 

            </p>
          </div>

          {/* Feature 1: Structuration IA immédiate - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Structuration automatique du périmètre   <span className="text-purple-600">dès le jour 1</span> </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grâce à l’IA d’Aitenders, vos documents sont instantanément segmentés et organisés : lots, sous‑ensembles et critères contractuels sont classés et hiérarchisés en quelques minutes.
                <br /><br />
                Le Responsable Offre dispose immédiatement d’une vision consolidée du périmètre : points bloquants et clauses sensibles sont identifiés sans effort, permettant une décision “go / no‑go” éclairée dès le premier jour.

              </p>
              <div className="space-y-3 mb-8">


              </div>
              <p className="text-lg font-semibold text-blue-600">
                Une vision consolidée et priorisée, prête dès le premier jour !
              </p>
            </div>
            <div className="order-2">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc2FirstFeatureImage}
                  alt="Analyse IA - Progression structuration et catégorisation"
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

          {/* Feature 2: Synthèse visuelle claire - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc2SecondFeatureImage}
                  alt="Analyse IA - Contrôlez chaque clause critique"
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-2xl shadow-2xl"
                  style={{ 
                    transform: 'scale(1.4)',
                    filter: 'drop-shadow(0 8px 32px rgba(251, 146, 60, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Contrôlez chaque  <span className="text-orange-600">clause critique</span> de votre projet</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders identifie et hiérarchise automatiquement toutes les clauses sensibles : responsabilités, engagements, pénalités et conditions critiques. 
                En parallèle, l’IA contrôle la cohérence des documents et signale contradictions, doublons et écarts, pour une analyse fiable et complète.
                <br /><br />
                Le Responsable Offre obtient en quelques minutes une vision claire des zones à risque, prête à être corrigée et validée sans perte de temps.
                </p>
          
              <div className="space-y-3 mb-8">
              </div>
              <p className="text-lg font-semibold text-orange-600">
                Une validation contractuelle proactive, dès le jour 1
              </p>
            </div>
          </div>

          {/* Feature 3: Validation guidée - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Pilotez chaque <span className="text-green-600">évolution contractuelle</span> en temps réel</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              Toutes vos questions-réponses, versions et ajustements documentaires sont consolidés et tracés automatiquement par l’IA. 
              Le Responsable Offre suit chaque changement en temps réel, visualise les écarts, reçoit des alertes et s’assure que rien n’est oublié ou modifié sans validation.
              <br /><br />
              Fini les suivis éclatés par emails ou fichiers multiples : tout est centralisé dans un cockpit fluide et fiable.
              </p>
              <p className="text-lg font-semibold text-green-600">
              Zéro surprise, zéro version perdue, zéro risque d’oubli
              </p>
            </div>
            <div className="order-2">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <img 
                  src={uc2ThirdFeatureImage}
                  alt="Analyse IA - Pilotez chaque évolution contractuelle"
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-2xl shadow-2xl"
                  style={{ 
                    transform: 'scale(1.4)',
                    filter: 'drop-shadow(0 8px 32px rgba(34, 197, 94, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      

        {/* User-Focused Results Section - UC2 */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="content-boundary">

            <div className="mb-20 md:mb-24 lg:mb-28">
              <div className="text-center mb-12 md:mb-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Ce que nos utilisateurs obtiennent concrètement pour les offres moyennes
                </h3>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Des résultats décisifs pour les acheteurs et les équipes en charge des dossiers
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Acheteur - Directeur Commercial / Offres */}
                <div className="group">
                  <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <MdBusiness className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Directeur Commercial ou Directeur des Offres</h4>
                        <p className="text-sm text-gray-600">Décision rapide, crédibilité renforcée, zéro surprise</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      Garantissez dès le premier jour que chaque clause critique est identifiée, chaque engagement maîtrisé 
                      et chaque risque couvert. Vous arrivez en comité avec une offre solide, immédiatement validable, 
                      sans charge mentale ni escalade inutile.
                    </p>

                    <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Zéro clause oubliée, zéro incohérence détectée trop tard</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Décision "go / no-go" prise sans délai</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Crédibilité renforcée devant le top management</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Utilisateur - Responsable Offre / Contract Manager / Chef de Projet */}
                <div className="group">
                  <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                        <MdEngineering className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Responsable Offre, Contract Manager ou Chef de Projet</h4>
                        <p className="text-sm text-gray-600">Analyse claire, suivi fluide, zéro stress</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      Démarrez dès J+1 sur une base structurée et priorisée par l’IA : chaque critère est classé, 
                      chaque clause sensible détectée et chaque version tracée. Vous passez d’un rôle sous pression 
                      à celui d’un pilote stratégique, capable de prouver la solidité de son offre à tout moment.
                    </p>

                    <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Analyse prête dès le premier jour, sans tri manuel</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Zéro stress, zéro surprises, zéro allers-retours inutiles</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Contrôle total sur chaque clause et chaque version</span>
                      </div>
                    </div>
                  </Card>
                </div>

              </div>

              {/* KPI Content Box */}
              <div className="mt-16 md:mt-20 lg:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  
                  {/* KPI 1 - 50% du temps */}
                  <div className="group">
                    <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50%</div>
                      <h4 className="text-lg font-semibold text-gray-900">du temps d'analyse initiale</h4>
                    </Card>
                  </div>

                  {/* KPI 2 - 100% des clauses */}
                  <div className="group">
                    <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
                      <h4 className="text-lg font-semibold text-gray-900">des clauses critiques identifiées</h4>
                    </Card>
                  </div>

                  {/* KPI 3 - 0 surprise */}
                  <div className="group">
                    <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">0</div>
                      <h4 className="text-lg font-semibold text-gray-900">surprise, remise en cause évitée</h4>
                    </Card>
                  </div>

                </div>

                {/* Additional KPI - Bottom centered */}
                <div className="mt-8 flex justify-center">
                  <div className="max-w-md">
                    <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="flex items-center justify-center">
                        <MdTrendingUp className="w-6 h-6 text-orange-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">Offre plus rapide propre et compétitive</h4>
                      </div>
                    </Card>
                  </div>
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
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">capacités avancées</span> qui élèvent vos projets moyens
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà de la coordination intelligente, découvrez des fonctionnalités qui transforment la gestion de projets moyens en avantage concurrentiel.
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

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Prédiction de Performance</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Anticipez les goulots d'étranglement et optimisez automatiquement l'allocation des ressources grâce à l'analyse prédictive avancée.
                </p>

                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Optimisation IA</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Collaboration Adaptive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Collaboration Adaptive</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Espaces de travail qui s'adaptent automatiquement à la taille et à la complexité de chaque équipe projet pour une efficacité maximale.
                </p>

                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Adaptation dynamique</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Métriques Intelligentes */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTableChart className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Métriques Intelligentes</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Tableaux de bord adaptatifs qui mettent en évidence les KPIs les plus pertinents selon la phase et la complexité du projet.
                </p>

                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">KPIs dynamiques</span>
                  <MdDashboard className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Gestion des Risques */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Gestion des Risques</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Identification proactive des risques avec suggestions de mitigation automatiques basées sur l'historique de projets similaires.
                </p>

                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Prévention IA</span>
                  <MdWarning className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Templates Intelligents */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdContentCopy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Templates Intelligents</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Génération automatique de structures projet personnalisées selon la complexité, le secteur et les exigences spécifiques.
                </p>

                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Personnalisation IA</span>
                  <MdCreate className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Apprentissage Continu */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdRotateRight className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Apprentissage Continu</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Le système apprend de chaque projet pour optimiser automatiquement les processus et améliorer les performances futures.
                </p>

                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Amélioration continue</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Intégration Écosystème */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdCloudSync className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Écosystème intégré, performance amplifiée</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      Connectivité native avec vos outils métier existants (ERP, CRM, outils de gestion de projet) pour une synergie parfaite et des données unifiées.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">API Native</span>
                        <MdLink className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Sync Temps Réel</span>
                        <MdSwapHoriz className="w-4 h-4 ml-2" />
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
              Chaque fonctionnalité optimise vos projets moyens pour une performance maximale
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

      {/* projets de référence */}


      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">appels d'offres référence</span> sur les projets moyens
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nos clients transforment leurs projets moyens avec l'IA Aitenders
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            
            {/* Project 1: Centre Logistique Régional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdBusiness className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Centre Logistique Régional</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">Logistique</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">Offre : 8.5 Millions €</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Construction d'un hub logistique moderne de 25,000 m² avec systèmes automatisés et aires de manœuvre. 
                  Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +55% temps économisé coordination</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Normes logistiques respectées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Suivi multi-lots intégré</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 10 équipes synchronisées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Réhabilitation Quartier Urbain */}
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
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Réhabilitation Quartier Urbain</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Urbain</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">Offre : 6.2 Millions €</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Rénovation complète d'un quartier résidentiel avec 200 logements, espaces verts et commerces. 
                  Gestion coordonnée des réseaux, voiries et contraintes d'occupation sur 5 hectares.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +62% accélération études</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Urbanisme validé</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Phases coordonnées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 15 corps de métier</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Campus Universitaire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Campus Universitaire Moderne</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">Éducation</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">Offre : 4.8 Millions €</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Construction d'un campus de 15,000 m² avec amphithéâtres, laboratoires et résidences étudiantes. 
                  Intégration de technologies numériques et espaces collaboratifs sur site de 8 hectares.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +48% réduction délais</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Standards académiques</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Validation continue</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 18 lots coordonnés</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance pour leurs projets moyens</h3>
              </div>
              <div className="relative w-full overflow-hidden">
                <div className="flex logo-scroll space-x-16 whitespace-nowrap justify-center items-center">
                  {/* First set of logos */}
                  <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  <img src={colasLogo} alt="Colas" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  {/* Duplicate set for seamless loop */}
                  <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  <img src={colasLogo} alt="Colas" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  {/* Third set for smooth continuation */}
                  <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                  <img src={colasLogo} alt="Colas" className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Chat Simulator - Enhanced */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-purple-100 rounded-full border border-purple-200 mb-6">
                  <MdAnalytics className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-semibold text-sm">Simulateur ROI Intégré</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Calculez votre <span className="text-purple-600">ROI en temps réel</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Simulateur intelligent intégré à la page pour une analyse immédiate de vos projets
                </p>
              </div>
              
              {/* Embedded Aitenders ROI Simulator Final */}
              <AitendersSimulatorFinal useCase="UC2" className="w-full" />
              
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Chat Interface with UC2-specific actions */}
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
            label: "Demo UC2",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC2 demo
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