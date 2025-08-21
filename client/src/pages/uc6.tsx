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

// Import WOW images for feature section
import wow1Image from "@assets/WOW 1_1755782640243.png";
import wow2Image from "@assets/WOW 2_1755782640245.png";
import wow3Image from "@assets/WOW 3_1755782640245.png";

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
        requirements: { progress: 88, color: 'green' },
        coordination: { progress: 94, color: 'blue' },
        compliance: { progress: 91, color: 'purple' }
      },
      notification: '🚀 Innovation activée',
      alert: '💡 Impact: 94%'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              <div className="flex items-center mb-6">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  UC6 • Exécution & Conformité
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Maîtrisez l'<span className="text-purple-600">exécution conforme</span> de vos projets complexes
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Garantissez la conformité contractuelle et la traçabilité complète de vos exigences, 
                de l'analyse initiale jusqu'à la livraison finale.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Découvrir UC6
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300">
                  <MdPlayArrow className="w-5 h-5 mr-2" />
                  Voir la démo
                </Button>
              </div>
            </div>

            {/* Right Content - Mock UI Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Suivi de Conformité</h3>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MdAssignmentTurnedIn className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 px-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-sm text-gray-700">Exigences contractuelles</span>
                    <div className="flex items-center">
                      <span className="text-xs text-green-600 mr-2">98% couvert</span>
                      <MdCheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-sm text-gray-700">Traçabilité documents</span>
                    <div className="flex items-center">
                      <span className="text-xs text-blue-600 mr-2">100% tracé</span>
                      <MdVerified className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="text-sm text-gray-700">Validation finale</span>
                    <div className="flex items-center">
                      <span className="text-xs text-purple-600 mr-2">En cours</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
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
                Aujourd'hui, la gestion manuelle via <span className="font-semibold">Excel, emails et workshops dispersés</span> alourdit les processus, 
                multiplie les risques d'erreurs et consomme un temps critique. 
                Demain, avec Aitenders, chaque exigence – explicite ou implicite – sera reliée à ses livrables, 
                intégrée dans vos documents finaux, et suivie comme un fil conducteur vivant de la production.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders accompagne vos équipes dans la <span className="font-semibold">maîtrise totale des exigences</span> tout au long de l'exécution, 
                en garantissant la couverture complète, la traçabilité des décisions et la conformité contractuelle. 
                Résultat : des projets menés sans écart, sans litige, et en totale confiance.
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
              et assurez une conformité continue jusqu'à la livraison finale.
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
                Démarrez l'exécution avec une <span className="text-purple-600">vision totale</span>, dès le premier jour
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
                Dès le chargement des documents, les assistants IA extraient, structurent et classifient automatiquement 
                toutes les exigences <span className="font-semibold">explicites et implicites</span>, identifient les contradictions 
                et relient chaque point aux documents sources. 
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Vous passez d'un puzzle fragmenté à une vision globale, claire et immédiatement exploitable — 
                sans interprétation manuelle ni perte d'information.
              </p>
              <div className="flex items-center text-lg font-bold text-purple-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                80 % du travail initial déjà réalisé dès le jour 1
              </div>
            </div>

            {/* Image à droite */}
            <div className="order-2">
              <figure className="w-full mx-auto">
                <img
                  src={wow1Image}
                  alt="Aitenders Interface - Vision totale des exigences dès le premier jour"
                  className="w-full h-auto mx-auto"
                  style={{
                    transform: 'scale(1.0)',
                    transformOrigin: 'center center',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </figure>
            </div>
          </div>
          {/* Feature 2: Pilotage Collectif - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            {/* Image à gauche */}
            <div className="order-2 lg:order-1">
              <figure className="w-full mx-auto">
                <img
                  src={wow2Image}
                  alt="Aitenders Interface - Pilotage collectif pour performance continue"
                  className="w-full h-auto mx-auto"
                  style={{
                    transform: 'scale(1.0)',
                    transformOrigin: 'center center',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </figure>
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
                La revue initiale devient un <span className="font-semibold">pilotage vivant</span>, capable d'intégrer les changements sans friction 
                et de maintenir l'alignement collectif tout au long du projet.
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
                Maîtrisez la <span className="text-purple-600">couverture de vos exigences</span> jusqu'à la dernière ligne
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

            {/* Image à droite */}
            <div className="order-2">
              <figure className="w-full mx-auto">
                <img
                  src={wow3Image}
                  alt="Aitenders Interface - Couverture complète des exigences jusqu'à la livraison"
                  className="w-full h-auto mx-auto"
                  style={{
                    transform: 'scale(1.0)',
                    transformOrigin: 'center center',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </figure>
            </div>
          </div>

          
        </div>
      </section>

      {/* Simulator Section */}
      <ChatSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}