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
  MdAssignmentTurnedIn,
  MdBusinessCenter,
  MdPerson,
  MdGppGood,
  MdHistory,
  MdHandshake,
  MdSchool
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
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Exécution des Projets Complexes</Badge>
                
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
                Exigence ↔ Rédaction ↔ Preuve, <span className="text-purple-600">chaque engagement tenu</span>
              </h2>

              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aujourd’hui, la gestion manuelle via <span className="font-semibold">Excel, emails et workshops dispersés</span> alourdit les processus, 
                multiplie les risques d’erreurs et consomme un temps critique. 
                Demain, avec Aitenders, chaque exigence – explicite ou implicite – sera reliée à ses livrables, 
                intégrée dans vos documents finaux, et suivie comme un fil conducteur vivant de la production.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders accompagne vos équipes dans la <span className="font-semibold">maîtrise totale des exigences</span> tout au long de l’exécution, 
                en garantissant la couverture complète, la traçabilité des décisions et la conformité contractuelle. 
                Résultat : des projets menés sans écart, sans litige, et en totale confiance.
              </p>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Contactez-nous!
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Voir la démo
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
              Votre <span className="text-purple-600">copilote IA</span> pour exécuter vos projets complexes sans écart
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Démarrez avec une base contractuelle exhaustive, pilotez collectivement chaque exigence 
              et assurez une conformité continue jusqu’à la livraison finale.
            </h3>
          </div>
          {/* Feature 1: Vision Totale dès le Premier Jour */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            {/* Texte à gauche */}
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Démarrez l’exécution avec une <span className="text-purple-600">vision totale</span>, dès le premier jour
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
                Dès le chargement des documents, les assistants IA extraient, structurent et classifient automatiquement 
                toutes les exigences <span className="font-semibold">explicites et implicites</span>, identifient les contradictions 
                et relient chaque point aux documents sources. 
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Vous passez d’un puzzle fragmenté à une vision globale, claire et immédiatement exploitable — 
                sans interprétation manuelle ni perte d’information.
              </p>
              <div className="flex items-center text-lg font-bold text-purple-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                80 % du travail initial déjà réalisé dès le jour 1
              </div>
            </div>

            {/* Carte à droite */}
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Analyse Contractuelle IA</h4>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdDescription className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Extraction des exigences</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Classification automatique</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Détection des contradictions</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {/* Feature 2: Pilotage Collectif - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            {/* Carte à gauche */}
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Pilotage Collaboratif</h4>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdTimeline className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Matrices par discipline</span>
                      <span className="text-xs text-gray-500">Mises à jour en temps réel</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Arbitrages accélérés</span>
                      <span className="text-xs text-gray-500">Décisions tracées</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Calcul d’impacts</span>
                      <span className="text-xs text-gray-500">Coûts & délais</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Texte à droite */}
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Faites de votre <span className="text-purple-600">pilotage collectif</span> un levier de performance continue
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Chaque discipline accède à sa <span className="font-semibold">matrice dédiée</span>, clarifie ou reformule les exigences, 
                et valide ou arbitre directement. Les impacts <span className="font-semibold">coûts, délais et ressources</span> 
                sont calculés en temps réel grâce aux alertes automatiques.
                <br /><br />
                La revue initiale devient un <span className="font-semibold">pilotage vivant</span>, capable d’intégrer les changements sans friction 
                et de maintenir l’alignement collectif tout au long du projet.
              </p>
              <div className="flex items-center text-lg text-gray-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                <span className="font-bold text-blue-500">
                  50 % de gain de temps sur les cycles de revue et décision
                </span>
              </div>
            </div>
          </div>


          {/* Feature 3: Maîtrisez la couverture - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Texte à gauche */}
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Maîtrisez la <span className="text-purple-600">couverture de vos exigences</span> jusqu’à la dernière ligne
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
                Toutes les exigences — explicites, implicites ou déclinées en exigences filles — 
                sont directement associées aux livrables et intégrées dans les documents finaux. 
                Chaque exigence reste <span className="font-semibold">couverte, traçable et justifiable</span> à tout moment.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grâce aux validations croisées et à une base centralisée, 
                la conformité devient un <span className="font-semibold">fil conducteur vivant</span>, 
                intégré à chaque étape de la production, même en cas de modification tardive.
              </p>
              <div className="flex items-center text-lg font-bold text-green-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Conformité prouvée à tout moment
              </div>
            </div>

            {/* Carte à droite */}
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Suivi Dynamique</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdAssignmentTurnedIn className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Exigence reliée à son livrable</span>
                      <MdCheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Validation croisée réussie</span>
                      <MdCheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Alerte sur modification tardive</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
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

          {/* User-Focused Results Section */}
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Ce que vos équipes obtiennent concrètement avec Aitenders
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Une maîtrise totale des exigences pour chaque rôle impliqué dans vos projets complexes.
                Des résultats concrets en conformité, traçabilité et performance collective.
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Résultat Buyer */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdBusinessCenter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour le Buyer</h4>
                      <p className="text-sm text-gray-600">Conformité et sérénité contractuelle</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Livrez vos projets en toute confiance et en totale conformité, sans surprise finale. 
                    Suivez la couverture des exigences en temps réel et démontrez la conformité lors des audits 
                    ou comités de pilotage.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Maîtrise des risques contractuels et financiers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Prévisibilité renforcée des marges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Crédibilité accrue vis-à-vis du donneur d’ordre</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Résultat Utilisateur */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdPerson className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour vos équipes</h4>
                      <p className="text-sm text-gray-600">Fluidité, traçabilité et sérénité</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Bénéficiez d’une base claire, exhaustive et structurée. 
                    Collaborez efficacement, suivez chaque exigence reliée aux livrables, 
                    et prouvez votre travail à tout moment, sans effort supplémentaire.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Moins de stress et de relectures manuelles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pilotage clair : qui fait quoi, avec historique et notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Rédaction intelligente et cohérente, sans repartir de zéro</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Démonstration immédiate de la couverture complète</span>
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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  80 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  du travail initial réalisé dès le premier jour
                </p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  -50 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  de temps gagné sur les cycles de revue et de décision
                </p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  de couverture et traçabilité des exigences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Toppings Section - UC6 Additional Functionalities */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
               style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)' }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{ background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)' }}></div>
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
              <span className="text-white font-semibold text-sm md:text-base">Fonctionnalités avancées</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">toppings stratégiques</span> pour l’exécution sans faille de vos projets complexes
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà du suivi des exigences, Aitenders active des modules avancés qui garantissent couverture, traçabilité et performance contractuelle à chaque étape du projet.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Lien automatique avec livrables */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Exigences reliées aux livrables</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Chaque exigence est automatiquement reliée à son livrable, garantissant une complétude et une traçabilité parfaite, même en cas de modifications tardives.
                </p>
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Traçabilité intégrale</span>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Gestion des exigences filles</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Décomposez automatiquement les exigences complexes en sous-exigences managérables, hiérarchisées et attribuées par domaine d’expertise.
                </p>
                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Décomposition intelligente</span>
                  <MdSchema className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Contrôles de conformité en temps réel */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGppGood className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contrôles de conformité intelligents</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Détection proactive des écarts, alertes intelligentes et suggestions correctives pour sécuriser la conformité en continu.
                </p>
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Conformité proactive</span>
                  <MdVerified className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Historique et arbitrages */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdHistory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Arbitrages tracés</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Chaque décision est documentée et historisée, permettant de revenir sur les arbitrages et de prouver la cohérence du projet à tout moment.
                </p>
                <div className="flex items-center text-indigo-400 font-medium">
                  <span className="text-sm">Traçabilité complète</span>
                  <MdTimeline className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Collaboration cross-disciplines */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Collaboration multi-disciplines</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Un espace unique où chaque discipline collabore, partage et valide ses exigences, avec alertes et notifications automatiques.
                </p>
                <div className="flex items-center text-yellow-400 font-medium">
                  <span className="text-sm">Alignement immédiat</span>
                  <MdHandshake className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-gray-200 text-lg mb-8">
              Chaque topping ajoute une couche de contrôle, de sérénité et de performance.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              Découvrir tous les modules →
            </Button>
          </div>
        </div>
      </section>




      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">projets de référence</span> Contrats Semi-complexes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nos clients révolutionnent leur organisation avec l'IA Aitenders
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            
            {/* Project 1: Transformation Digitale Groupe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Transformation Digitale Groupe</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">Organisation</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">Transformation : 15,000+ documents</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Refonte complète des processus appels d'offres pour un groupe BTP avec 15 filiales. 
                  Analyse et transformation de plus de 15,000 documents complexes avec formats hétérogènes sur 18 mois.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +285% efficacité organisationnelle</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerifiedUser className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Standards unifiés groupe</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Processus auditables en temps réel</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 45 équipes synchronisées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Centre d'Excellence IA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdAutoAwesome className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Centre d'Excellence IA</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Innovation</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">Excellence : 8,500+ pages</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Création d'un centre d'expertise IA transversal avec Aitenders comme pierre angulaire. 
                  Traitement de plus de 8,500 pages de documentation technique complexe pour 8 business units.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +340% accélération innovation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerifiedUser className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Standards IA éthique</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> ROI mesurable par projet</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 8 business units connectées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Académie Aitenders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdSchool className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Académie Aitenders Enterprise</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">Formation</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">Formation : 25,000+ documents</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Programme de formation intensif sur 12 mois pour transformer les équipes commerciales. 
                  Certification avec analyse de plus de 25,000 documents de tailles et complexités variables.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +195% montée en compétences</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerifiedUser className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Certification professionnelle</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Progression individuelle trackée</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> Communauté d'experts active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance pour leur formation</h3>
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
                Vous voulez voir l'impact sur <span className="text-purple-600">votre organisation ?</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez en 2 minutes le potentiel de transformation spécifique à votre contexte
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