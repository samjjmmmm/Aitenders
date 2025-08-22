import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  MdFlashOn, 
  MdGroups, 
  MdSecurity, 
  MdWarning, 
  MdDescription, 
  MdAccountBox, 
  MdBusiness, 
  MdEngineering, 
  MdAnalytics, 
  MdStars,
  MdSettings,
  MdShield,
  MdVerifiedUser,
  MdTableChart,
  MdPlayArrow,
  MdMail,
  MdCheckCircle,
  MdAssignmentTurnedIn,
  MdMessage,
  MdRotateRight,
  MdTrendingUp,
  MdDashboard,
  MdQuestionAnswer,
  MdAutoAwesome,
  MdTrackChanges,
  MdAccountTree,
  MdTimeline,
  MdHistory,
  MdNotificationsActive,
  MdFlag,
  MdVerified,
  MdArrowForward,
  MdLink,
  MdManageAccounts,
  MdPerson,
  MdSwapHoriz
} from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import ContactSection from '@/components/contact-section';
import ChatInterface from '@/components/chat-interface';
import ClientLogos from '@/components/client-logos';
import { AitendersSimulatorFinal } from '@/components/aitenders-simulator-final';
import equansLogo from '@assets/Equans_1753711339292.png';
import bouyguesLogo from '@assets/Bouyges_1753711339292.png';
import colasLogo from '@assets/Colas_1753711339292.png';
import Lottie from 'lottie-react';
import wow1Uc5Animation from '../assets/wow-1-uc5.json';
import wow2Uc5Animation from '../assets/wow-2-uc5.json';
import wow3Uc5Animation from '../assets/wow-3-uc5.json';
import uc5SecondFeatureImage from "@assets/wow 2_1755751777579.png";
import uc5ThirdFeatureImage from "@assets/WOW 3_1755757958470.png";
import uc5HeroImage from "@assets/HERO UC 5_1755774540751.png";

export default function UC6Page() {
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
      icon: MdEngineering,
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
      icon: MdAnalytics,
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
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#F5F9FE' }}>
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
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 lg:space-y-16">
            
            {/* Content UC6 - Top */}
            <div className="w-full max-w-5xl px-4">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">
                  Exécution des Projets Complexes
                </Badge>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  De l'exigence à la livraison, chaque engagement tenu, <span className="text-purple-600">Zéro écart, zéro surprise.</span>
                </h1>

                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  <span className="text-purple-300">La première plateforme conçue pour maîtriser les projets complexes :</span> 
                  Chaque exigence est reliée à ses livrables et suivie en temps réel. Vous réduisez les risques opérationnels et financiers 
                  tout en garantissant conformité, traçabilité et collaboration fluide entre équipes 
                  <span className="text-purple-600"> avec une maîtrise totale des engagements</span>.
                </p>
              </div>

              {/* CTA Buttons - Side by Side */}
              <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  data-testid="button-demo"
                >
                  Réservez une Démo
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                  data-testid="button-download"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>
            </div>

            {/* Hero Image - Bottom */}
            <div className="w-full flex justify-center px-4">
              <div className="relative w-full max-w-5xl">
                <img
                  src={uc5HeroImage}
                  alt="Aitenders UC6 Interface - Complex Project Management and Requirements Tracking"
                  className="w-full h-auto mx-auto"
                  style={{
                    transform: 'scale(1.3)',
                    transformOrigin: 'center center',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #C3D9F8 50%, #EBF2FD 80%, transparent 100%)'
               }}></div>
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #C3D9F8 40%, transparent 80%)'
               }}></div>
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 30%, #FBFCFF 70%, #EBF2FD 100%)'
               }}></div>
        </div>

        <div className="content-boundary relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Exigence ↔ Rédaction ↔ Preuve, <span className="text-purple-600">chaque engagement tenu</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aujourd'hui, la gestion manuelle via <strong>Excel, emails et workshops dispersés</strong> alourdit les processus, multiplie les risques 
                d'erreurs et consomme un temps critique. Demain, avec Aitenders, chaque exigence – explicite ou implicite – sera reliée 
                à ses livrables, intégrée dans vos documents finaux, et suivie comme un fil conducteur vivant de la production.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders accompagne vos équipes dans la <strong>maîtrise totale des exigences</strong> tout au long de l'exécution, en garantissant 
                la couverture complète, la traçabilité des décisions et la conformité contractuelle. Résultat : des projets menés sans 
                écart, sans litige, et en totale confiance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                        data-testid="button-contact">
                  Contactez-nous!
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300"
                        data-testid="button-demo-video">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Voir la démo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section - Alternating Layout Design */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Votre <span className="text-purple-600">copilote IA</span> pour exécuter vos projets complexes sans écart
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Démarrez avec une base contractuelle exhaustive, pilotez collectivement chaque exigence et 
              assurez une conformité contrôlée jusqu'à la livraison finale.
            </h3>
          </div>

          {/* Feature 1: Organisation intelligente UC6 - Text Left, Animation Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Démarrez l'exécution avec une <span className="text-purple-600">vision totale, dès le premier jour</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dès le changement des documents, les questionnaires et enjeux sont 
                impactés et suivis automatiquement toutes les exigences 
                <strong>explicites et implicites</strong>, identifiez les contradictions et créent 
                choisir pour eux documents sources.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Vous pouvez d'un puzzle fragment à une vision globale, claire 
                et immédiatement exploitable – sans interprétation manuelle ni 
                perte d'informations.
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                80% de durée réduit pour cadrer dès le jour 1
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full">
                <Lottie 
                  animationData={wow1Uc5Animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full max-w-[400px] max-h-[400px]"
                  style={{ 
                    transform: 'scale(1.5)',
                    filter: 'drop-shadow(0 8px 32px rgba(59, 130, 246, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Fédérez les Équipes - Text Right, Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full">
                <figure className="w-full max-w-[500px] mx-auto">
                  <img 
                    src={uc5SecondFeatureImage}
                    alt="Aitenders team collaboration interface showing transformation progress and team coordination"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'drop-shadow(0 8px 32px rgba(147, 51, 234, 0.2))'
                    }}
                  />
                </figure>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Faites de votre <span className="text-purple-600">pilotage collectif</span> un levier de performance continue
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grâce à l'analyse guidée à vos métriques dédiées, clarifiez aux 
                performis les <strong>budgets, coûts, délais</strong> et enjeux/risques au fur'une partie nécessaires. Les 
                impacts de vos actions seront enfin décidé au temps réel 
                pour voir autres solutions autant possible.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Le groupe peut être en <strong>pilotage Vivant</strong>, capable d'intégrer 
                les changements, saire flexion et de maintenir l'alignement 
                collectif tout au long du plus long.
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                30% de gain de temps sur les cycles de revue et décision
              </div>
            </div>
          </div>

          {/* Feature 3: Pilotez l'Impact - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Maîtrisez la <span className="text-purple-600">couverture de vos exigences</span> jusqu'à la dernière ligne
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Toutes les exigences — <strong>explicites, implicites ou disséminées</strong> en 
                exigences dans leurs — sont fonctionnelles aux hundreds et 
                intégrez dans vos documents finaux. Choisir organise cette 
                nouvelle logique de justifiées à notre.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grace aux références croisées et à une base centralisée, la 
                conformité devient en fil <strong>conducteur Vivant</strong> intégré à chaque 
                étape de votre trajectoire d'exécution basée en assurés dé 
                temps de typologies.
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Contrôle généralisé et total transparent
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full">
                <figure className="w-full max-w-[500px] mx-auto">
                  <img 
                    src={uc5ThirdFeatureImage}
                    alt="Aitenders real-time impact dashboard showing transformation metrics and strategic indicators"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'drop-shadow(0 8px 32px rgba(147, 51, 234, 0.2))'
                    }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* User-Focused Results Section - UC6 */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Ce que vos équipes obtiennent concrètement avec Aitenders
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Une maîtrise totale des exigences pour chaque rôle impliqué dans vos projets 
                complexes. Des résultats concrets en conformité, traçabilité et performance 
                collective.
              </p>
            </div>

            {/* Results Grid - 2 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">

              {/* Pour le Buyer */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour le Buyer</h4>
                      <p className="text-sm text-gray-600">Conformité et sérénité contractuelle</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Livrez vos projets en toute confiance et en totale conformité, sans 
                    surprise finale. Suivez la couverture des exigences en temps réel et 
                    démontrez la performance lors des audits ou comités de pilotage.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Maîtrise des risques contractuels et financiers
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Prévisibilité renforcée des marges
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Crédibilité accrue vis-à-vis du donneur d'ordre
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Pour vos équipes */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdGroups className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour vos équipes</h4>
                      <p className="text-sm text-gray-600">Fluidité, traçabilité et sérénité</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Bénéficiez d'une base claire, exhaustive et structurée. Collaborez 
                    efficacement, suivez chaque exigence reliée aux livrables, et prouvez 
                    votre travail à tout moment, sans effort supplémentaire.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Moins de stress et de relectures manuelles
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Pilotage clair : qui fait quoi, avec historique et notifications
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Rédaction intelligente et cohérente, sans reproche de zéro
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Démonstration immédiate de la couverture complète
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>

          {/* KPI Grid - 3 Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* KPI 1 - 80% */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  80 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  du travail initial réalisé dès le premier jour
                </p>
              </div>
            </div>

            {/* KPI 2 - -50% */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  -50 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  de temps gagné sur les cycles de revue et 
                  de décision
                </p>
              </div>
            </div>

            {/* KPI 3 - 100% */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  de couverture et de traçabilité des exigences
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Toppings Section - UC6 Strategic Features */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
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

        <div className="content-boundary relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
              <MdStars className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-sm md:text-base">Fonctionnalités Premium</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">toppings stratégiques</span> pour l'exécution sans faille de vos projets complexes
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Activez les fonctionnalités Premium et pilotez sereinement. Votre maîtrise devient totale, votre gouvernance cohérente, traçabilité et performance consolidées à chaque étape du projet.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* 1️⃣ Exigences natives aux livrables */}
            <div className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdLink className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Exigences natives aux livrables</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Chaque livrable hérite automatiquement des exigences métier et techniques pertinentes, tracées depuis sa conception.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-400 font-medium">
                    <span className="text-sm">Livrable natifs</span>
                    <MdAutoAwesome className="w-4 h-4 ml-2" />
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Découvrir →
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ Gestion des exigences client */}
            <div className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdManageAccounts className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Gestion des exigences client</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Suivi automatisé des changements contractuels, validation et impact sur la performance consolidée projet.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-pink-400 font-medium">
                    <span className="text-sm">Exigences client</span>
                    <MdPerson className="w-4 h-4 ml-2" />
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Découvrir →
                  </div>
                </div>
              </div>
            </div>

            {/* 3️⃣ Couverture de conformité intelligente */}
            <div className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdVerified className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Couverture de conformité intelligente</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Contrôle permanent et automatisé de toutes actions métier, technique et qualité contre toutes les dérives.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-400 font-medium">
                    <span className="text-sm">Conformité continue</span>
                    <MdShield className="w-4 h-4 ml-2" />
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Découvrir →
                  </div>
                </div>
              </div>
            </div>

            {/* 4️⃣ Auditages tracés */}
            <div className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdHistory className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Auditages tracés</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Centralisez l'auditabilité avec la genèse complète qui automatiquement référence, justifie et démontre.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-400 font-medium">
                    <span className="text-sm">Audit tracé</span>
                    <MdHistory className="w-4 h-4 ml-2" />
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Découvrir →
                  </div>
                </div>
              </div>
            </div>

            {/* 5️⃣ Collaboration multi-équipement */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Collaboration multi-équipementment</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Des espaces collaboratifs intelligents qui coordonnent automatiquement chaque acteur métier et technique.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium">
                    <span className="text-sm">Équipes connectées</span>
                    <MdSwapHoriz className="w-4 h-4 ml-2" />
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Découvrir →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16 md:mt-20">
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Chaque topping digitalise vos outils de contrôle, de validation et de performance.
            </p>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Découvrir tous les toppings</span>
              <MdArrowForward className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* KPIs Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Résultats Mesurables, Impact Démontré
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Les métriques qui comptent pour mesurer le succès de votre transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {kpi.metric}
                </div>
                <p className="text-purple-100">{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Differentiators Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Aitenders ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche unique qui combine intelligence artificielle et expertise métier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MdStars className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section - UC6 Specific Projects */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #C3D9F8 50%, transparent 100%)'
               }}></div>
          <div className="absolute bottom-32 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
        </div>

        <div className="content-boundary relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Projets de Transformation Menés avec Succès
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Aitenders accompagne les organisations dans leur transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {/* Project 1: Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdAutoAwesome className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Transformation Digitale Globale</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">Tech</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">450 processus transformés</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transformation digitale complète d'une multinationale avec orchestration de 450 processus métier, 
                  formation de 2,000 collaborateurs et déploiement sur 15 pays.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Adoption :</strong> 85% en 6 mois</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Performance :</strong> +40% productivité</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>ROI :</strong> 250% sur 2 ans</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Organizational Change */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Restructuration Organisationnelle</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Services</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">12 entités fusionnées</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Fusion de 12 entités avec harmonisation des processus, redéfinition des rôles et 
                  accompagnement du changement pour 3,500 collaborateurs.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Engagement :</strong> 78% satisfaction</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Efficacité :</strong> +35% synergies</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Délai :</strong> 8 mois vs 18 prévus</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Innovation Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdTimeline className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Programme Innovation Agile</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">Innovation</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">25 initiatives lancées</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Déploiement d'un programme d'innovation agile avec 25 initiatives, méthodologie lean startup 
                  et culture d'expérimentation dans toute l'organisation.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Innovation :</strong> 15 projets déployés</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Culture :</strong> 90% équipes formées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Valeur :</strong> €5M nouveaux revenus</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <ClientLogos language="fr" />
          </div>

          {/* Simulateur ROI Intégré */}
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Simulateur ROI Intégré
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Calculez votre ROI en temps réel pour vos projets de transformation
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <AitendersSimulatorFinal useCase="UC6" />
            </div>
          </div>
        </div>
      </motion.section>

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