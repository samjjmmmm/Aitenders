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

export default function UC6Page() {
  // Target audience data with interactive content
  const targetAudiences = [
    {
      id: 'digital-transformation',
      title: 'Responsables transformation digitale',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Pilotez la digitalisation des processus métier avec une vision 360° des enjeux stratégiques. Grâce à l\'IA, orchestrez la transformation en temps réel et assurez l\'adoption utilisateur tout en mesurant l\'impact sur la performance organisationnelle.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 95, color: 'purple' }
      },
      notification: '✓ Transformation lancée',
      alert: '📊 Adoption: 85%'
    },
    {
      id: 'change-managers',
      title: 'Gestionnaires du changement',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Accompagnez les équipes dans l\'évolution des pratiques avec des outils de suivi personnalisés. Anticipez les résistances, mesurez l\'engagement et adaptez votre stratégie grâce à des données comportementales en temps réel.',
      dashboardData: {
        requirements: { progress: 92, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 88, color: 'purple' }
      },
      notification: '⚡ Formation déployée',
      alert: '📈 Engagement: 78%'
    },
    {
      id: 'innovation-leaders',
      title: 'Directeurs innovation',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Accélérez l\'innovation organisationnelle avec une plateforme intelligente qui identifie les opportunités d\'amélioration et mesure l\'impact des initiatives. Créez une culture d\'innovation durable et mesurable.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 90, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '🔒 Innovation ready',
      alert: '✅ Roadmap validée'
    },
    {
      id: 'operations-directors',
      title: 'Directeurs opérationnels',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Optimisez la performance opérationnelle avec une vision consolidée des processus métier. Identifiez les goulots d\'étranglement, automatisez les tâches répétitives et pilotez l\'amélioration continue.',
      dashboardData: {
        requirements: { progress: 96, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 94, color: 'purple' }
      },
      notification: '🔧 Ops optimisées',
      alert: '📋 Performance +15%'
    },
    {
      id: 'strategy-directors',
      title: 'Directeurs stratégie',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Alignez la stratégie organisationnelle avec l\'exécution opérationnelle grâce à des tableaux de bord stratégiques. Anticipez les tendances, mesurez l\'impact des décisions et ajustez la trajectoire en temps réel.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '💼 Stratégie alignée',
      alert: '🎯 Objectifs: 95%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Silos Organisationnels",
      description: "La transformation s'enlise dans des départements cloisonnés qui freinent l'innovation collaborative"
    },
    {
      icon: MdDescription,
      title: "Résistance au Changement",
      description: "Les équipes peinent à adopter de nouvelles méthodes sans accompagnement structuré et mesurable"
    },
    {
      icon: FaUsers,
      title: "Manque de Vision Globale",
      description: "L'absence d'indicateurs unifiés empêche de mesurer l'impact réel des initiatives de transformation"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Orchestrez la Transformation Intelligemment",
      description: "IA qui analyse l'organisation et propose des parcours de transformation personnalisés et évolutifs"
    },
    {
      icon: MdGroups,
      title: "Fédérez les Équipes Autour d'Objectifs Communs",
      description: "Créez une culture collaborative avec des outils de suivi partagés et des métriques transparentes"
    },
    {
      icon: MdSecurity,
      title: "Pilotez l'Impact en Temps Réel",
      description: "Tableaux de bord stratégiques qui mesurent l'adoption, l'engagement et la performance globale"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Analysez l'Existant",
      description: "Cartographiez automatiquement vos processus et identifiez les opportunités de transformation",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Concevez la Stratégie",
      description: "Définissez une roadmap collaborative avec jalons mesurables et indicateurs de succès",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Pilotez l'Exécution", 
      description: "Suivez l'avancement, mesurez l'impact et ajustez la stratégie selon les résultats obtenus",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "75%",
      description: "Accélération des projets de transformation"
    },
    {
      metric: "60%",
      description: "Amélioration de l'adoption utilisateur"
    },
    {
      metric: "90%",
      description: "Satisfaction des équipes transformées"
    },
    {
      metric: "100%",
      description: "Visibilité sur l'avancement stratégique"
    }
  ];

  const differentiators = [
    {
      title: "Première Plateforme de Transformation Intelligente",
      description: "IA dédiée à l'orchestration du changement organisationnel avec métriques prédictives"
    },
    {
      title: "Approche Humano-Centrée",
      description: "Focus sur l'accompagnement des équipes avec outils collaboratifs intégrés"
    },
    {
      title: "Pilotage Stratégique en Temps Réel",
      description: "Tableaux de bord exécutifs qui connectent transformation et performance business"
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
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Transformation Organisationnelle</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  De l’exigence à la livraison, chaque engagement tenu, <span className="text-purple-600">Zéro écart, zéro surprise.</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> Chaque exigence est reliée à ses livrables et suivie en temps réel.Vous réduisez les risques opérationnels et financiers tout en garantissant conformité, traçabilité et collaboration fluide entre équipes.</p>
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
                  Téléchargez le cas d'usage
                </Button>
              </div>
              
              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Partenaire de transformation des leaders du secteur</p>
                
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
                    <span>Accompagne la transformation des entreprises leaders</span>
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
                    <div className="text-xs text-gray-500 font-medium">aitenders.com/uc6-transformation</div>
                    <div className="w-16"></div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Transformation Dashboard</h3>
                        <p className="text-sm text-gray-600">Pilotage temps réel</p>
                      </div>
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <MdAutoAwesome className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                        <div className="text-xs text-gray-600">Adoption équipes</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                        <div className="text-xs text-gray-600">Projets actifs</div>
                      </div>
                    </div>

                    {/* Progress Tracking */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Transformation Progress</span>
                        <span className="text-xs text-gray-500">Q4 2024</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Démarrage</span>
                        <span className="font-medium text-purple-600">75% complété</span>
                        <span>Adoption complète</span>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Formation équipe commercial déployée</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Nouveau processus qualité validé</span>
                      </div>
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-800">Évaluation impact en cours</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center">
                  <MdAnalytics className="w-8 h-8 text-white" />
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative z-10 text-center">
              
              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Fini les oublis, <span className="text-purple-600">rplace à la conformité totale</span>
              </h2>
              
              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Sur vos projets complexes, la gestion manuelle des exigences vire rapidement au casse‑tête. Entre fichiers Excel, emails dispersés et validations en workshops, vos équipes perdent du temps, multiplient les risques d’oubli et s’exposent à des non‑conformités coûteuses.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec Aitenders, vous reprenez le contrôle : les exigences sont reliées à leurs livrables et suivies en temps réel, pour réduire les risques, garantir la conformité et fluidifier la collaboration.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Commencez la Transformation!
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Découvrez le Processus
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Transformez la gestion des exigences en un levier de performance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Chaque exigence est reliée à son livrable et suivie en temps réel. Vous réduisez les risques opérationnels et financiers tout en garantissant conformité et collaboration fluide.
            </p>
          </div>

          {/* Feature 1: Analyse intelligente - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Démarrez l’exécution avec une vision complète dès le premier jour
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dès l’import des documents contractuels, Aitenders extrait et classe automatiquement toutes les exigences, explicites comme implicites.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Contradictions détectées dès le départ</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Clauses reliées aux documents sources</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Base contractuelle exhaustive et exploitable en un clic</span>
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
                    <h4 className="text-sm font-semibold text-gray-700">Process Analysis</h4>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdAnalytics className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Processus mappés</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ 24/24</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-gray-700">Opportunités détectées</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">7 prioritaires</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">ROI estimé</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <MdTrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Collaboration teams - Card Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Team Collaboration</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdGroups className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Équipes engagées</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">85%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Projets collaboratifs</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">12 actifs</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Adoption mesurée</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheck className="w-3 h-3 text-white" />
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
                Faites de votre pilotage collectif un levier de performance continue
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Chaque discipline dispose de sa matrice d’exigences dédiée, mise à jour en temps réel.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Arbitrages et validations centralisés, sans Excel dispersés</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Impacts coûts, délais et ressources calculés instantanément</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Modifications intégrées avec alertes ciblées aux bons acteurs</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Feature 3: Impact measurement - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Maîtrisez la couverture de vos exigences jusqu’à la dernière ligne
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Toutes les exigences sont reliées aux livrables correspondants et suivies en continu.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Couverture 100 % prouvée, sans risque d’oubli</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Détection proactive des non‑conformités et écarts
</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Historique complet prêt pour audit ou comité client</span>
                </div>
                
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-cyan-100 border border-blue-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Impact Dashboard</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MdTableChart className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">ROI transformation</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">+25%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Performance équipes</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">↗ Trending</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Objectifs atteints</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdAnalytics className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      

      {/* KPI Section - High Impact Design */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* User-Focused Results Section - Before KPIs */}
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Ce que vos équipes obtiennent concrètement avec Aitenders</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Une maîtrise totale des exigences pour chaque rôle impliqué dans vos projets complexes. Des résultats concrets en conformité, traçabilité et performance collective.</p>
            </div>
            
            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Équipes Pilotage et Coordination */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Équipes Pilotage et Coordination</h4>
                      <p className="text-sm text-gray-600">Visibilité et maîtrise de bout en bout</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Directeurs de projet, Requirements Managers et Coordinateurs d'exigences disposent d'une vision centralisée pour anticiper chaque dérive et sécuriser la livraison.
                  </p>
                  
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Centralisation des exigences et suivi actualisé en temps réel</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Alertes automatiques sur écarts et échéances critiques</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Validation et arbitrages facilités pour éviter les blocages</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-purple-200/30">
                    <p className="text-sm text-gray-700 font-medium">Impact : Réduction de 40 % du temps passé à consolider les matrices d'exigences et suppression des risques d'oubli qui génèrent des surcoûts.</p>
                  </div>
                </Card>
              </div>

              {/* Responsables Métier et Techniques */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdBusiness className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Responsables Métier et Techniques</h4>
                      <p className="text-sm text-gray-600">Clarté et collaboration pour chaque discipline</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Les Discipline Leads accèdent à une matrice d'exigences spécifique à leur périmètre, toujours à jour et intégrée au projet global.
                  </p>
                  
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Exigences organisées et accessibles instantanément</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Suivi collaboratif avec répartition claire des responsabilités</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Rédaction guidée pour couvrir 100 % des points critiques</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-blue-200/30">
                    <p className="text-sm text-gray-700 font-medium">Impact : Division par deux du temps de relecture et suppression des erreurs de reformulation qui retardent les livrables.</p>
                  </div>
                </Card>
              </div>

              {/* Équipes Qualité et Conformité */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdGavel className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Équipes Qualité et Conformité</h4>
                      <p className="text-sm text-gray-600">Conformité prouvée et risque maîtrisé</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Quality Directors et Contract & Claims Managers disposent d'une traçabilité complète et exploitable à tout moment pour prouver la conformité.
                  </p>
                  
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Couverture 100 % vérifiée de toutes les exigences</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Historique exhaustif disponible pour audits et comités</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Détection proactive des non‑conformités et écarts contractuels</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-green-200/30">
                    <p className="text-sm text-gray-700 font-medium">Impact : Préparation des audits divisée par trois et réduction significative des litiges liés aux non‑conformités.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  75 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Accélération des projets de transformation</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  60 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Amélioration de l'adoption utilisateur</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  90 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Satisfaction des équipes transformées</p>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 text-center border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Visibilité sur l'avancement stratégique</p>
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
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">capacités avancées</span> qui transforment votre approche
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà de la transformation traditionnelle, découvrez des fonctionnalités qui révolutionnent votre capacité à orchestrer le changement organisationnel.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Intelligence Prédictive Organisationnelle */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdFlashOn className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Prédictive Organisationnelle</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Anticipez les résistances au changement et les goulots d'étranglement organisationnels grâce à l'analyse prédictive des comportements et patterns.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Anticipation</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Culture Collaborative Mesurée */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Culture Collaborative Mesurée</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Créez et mesurez une culture de collaboration avec des métriques d'engagement, des espaces de co-création et des récompenses automatisées.
                </p>
                
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Collaboration</span>
                  <MdVerifiedUser className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* ROI Transformation en Temps Réel */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAnalytics className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">ROI Transformation en Temps Réel</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Calculez et démontrez le retour sur investissement de chaque initiative de transformation avec des métriques business connectées.
                </p>
                
                <div className="flex items-center text-blue-400 font-medium">
                  <span className="text-sm">ROI</span>
                  <MdTableChart className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Orchestration Multi-Projets */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Orchestration Multi-Projets</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Coordonnez plusieurs initiatives de transformation simultanément avec gestion des dépendances et optimisation des ressources.
                </p>
                
                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Orchestration</span>
                  <MdSettings className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Formation Adaptative IA */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAutoAwesome className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Formation Adaptative IA</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Parcours de formation personnalisés qui s'adaptent au profil et au rythme d'apprentissage de chaque utilisateur avec recommandations IA.
                </p>
                
                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Formation</span>
                  <MdCreate className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Vision Stratégique Prédictive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTimeline className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Vision Stratégique Prédictive</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Tableaux de bord exécutifs avec scénarios prédictifs et simulations d'impact pour les décisions stratégiques futures.
                </p>
                
                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Vision</span>
                  <MdFlag className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - High-Conversion Enterprise Design */}
      <section className="py-20 md:py-28 lg:py-32 xl:py-40 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #C3D9F8 0%, #3880E8 30%, transparent 70%)'
               }}></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, transparent 80%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Clean Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Transformation <span className="text-purple-600">avec</span> vs <span className="text-red-500">sans</span> UC6
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment UC6 révolutionne votre approche de la transformation organisationnelle
            </p>
          </div>

          {/* Desktop Comparison - Side by Side */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-12 lg:gap-16">
              
              {/* Without UC6 - Left Side */}
              <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 relative overflow-hidden">
                {/* Red accent for "bad" state */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                      <MdWarning className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">AS‑IS (Aujourd'hui)</h3>
                  </div>
                  <p className="text-gray-600 text-lg">Transformation chaotique et non mesurée</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdClose className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">Initiatives isolées et non coordonnées</h4>
                      <p className="text-gray-600 text-sm">Chaque département mène sa transformation en silos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdClose className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">Résistance au changement non anticipée</h4>
                      <p className="text-gray-600 text-sm">Adoption faible et équipes démotivées</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdClose className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">ROI impossible à mesurer</h4>
                      <p className="text-gray-600 text-sm">Impact business flou et justification difficile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdClose className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">Pilotage réactif et correctionnel</h4>
                      <p className="text-gray-600 text-sm">Problèmes découverts trop tard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* With UC6 - Right Side */}
              <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 relative overflow-hidden">
                {/* Green accent for "good" state */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                      <MdCheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">TO‑BE (Avec UC6)</h3>
                  </div>
                  <p className="text-gray-600 text-lg">Transformation orchestrée et mesurée</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdCheck className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">Orchestration intelligente multi-projets</h4>
                      <p className="text-gray-600 text-sm">Vision globale et coordination centralisée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdCheck className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">Accompagnement personnalisé et mesuré</h4>
                      <p className="text-gray-600 text-sm">Adoption facilitée avec parcours adaptatifs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdCheck className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">ROI démontré en temps réel</h4>
                      <p className="text-gray-600 text-sm">Impact business connecté et mesurable</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0">
                      <MdCheck className="w-5 h-5 m-1.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base mb-2">Pilotage prédictif et proactif</h4>
                      <p className="text-gray-600 text-sm">Anticipation des risques et ajustement automatique</p>
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
                      <h4 className="font-medium text-sm text-gray-900">Initiatives isolées et non coordonnées</h4>
                      <p className="text-xs text-gray-600">Chaque département mène sa transformation en silos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Résistance au changement non anticipée</h4>
                      <p className="text-xs text-gray-600">Adoption faible et équipes démotivées</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">ROI impossible à mesurer</h4>
                      <p className="text-xs text-gray-600">Impact business flou</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Pilotage réactif et correctionnel</h4>
                      <p className="text-xs text-gray-600">Problèmes découverts trop tard</p>
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
                  <h3 className="text-lg font-bold text-gray-900">TO‑BE (Avec UC6)</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Orchestration intelligente multi-projets</h4>
                      <p className="text-xs text-gray-600">Vision globale et coordination centralisée</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Accompagnement personnalisé et mesuré</h4>
                      <p className="text-xs text-gray-600">Adoption facilitée avec parcours adaptatifs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">ROI démontré en temps réel</h4>
                      <p className="text-xs text-gray-600">Impact business connecté et mesurable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Pilotage prédictif et proactif</h4>
                      <p className="text-xs text-gray-600">Anticipation des risques et ajustement automatique</p>
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
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Organisation ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les entreprises qui font confiance à AItenders UC6 pour orchestrer leur transformation, 
            fédérer leurs équipes et démontrer l'impact business de chaque initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-aitenders-primary-blue text-aitenders-white-blue hover:bg-aitenders-primary-blue/90 px-8 py-4 text-lg">
              <MdMessage className="w-5 h-5 mr-2" />
              Commencer la Transformation
            </Button>
            <Button variant="outline" size="lg" className="border-aitenders-white-blue/80 text-aitenders-white-blue bg-aitenders-white-blue/10 hover:bg-aitenders-white-blue hover:text-aitenders-dark-blue px-8 py-4 text-lg backdrop-blur-sm">
              Découvrir UC6
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-80">Intelligence collaborative • Mesure d'impact • Transformation durable</p>
        </div>
      </section>


      
      {/* Chat Interface with UC6-specific actions */}
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
            label: "Demo UC6",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC6 demo
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