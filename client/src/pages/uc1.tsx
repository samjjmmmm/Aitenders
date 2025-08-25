
import { useState } from "react";
import { MdAccountBox, MdAssignment, MdBusiness, MdDesktopMac, MdCode, MdSpeed, MdTrendingUp, MdPlayArrow } from 'react-icons/md';
import { FaCheckCircle, FaClock, FaShieldAlt, FaUsers, FaLightbulb, FaChartLine, FaRocket, FaCog } from 'react-icons/fa';
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import ClientLogos from "@/components/client-logos";
import HubSpotBookingModal from "@/components/hubspot-booking-modal";
import { useGlobalTranslations } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Header from "@/components/header";
import uc1HeroImage from "@assets/UC1 HERO_1755876730972.png";
import uc1FirstFeatureImage from "@assets/UC1_1755784114648.png";

export default function UC1() {
  const { t } = useGlobalTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Target audience data with interactive content - UC1 adapted
  const targetAudiences = [
    {
      id: 'bid-managers',
      title: t('uc1.audiences.bidManagers') || 'Responsables d\'appels d\'offres',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: t('uc1.audiences.bidManagersDesc') || 'Analysez rapidement les DCE et prenez des décisions éclairées',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ Analyse rapide',
      alert: '📊 Go/No-Go: Immédiat'
    },
    {
      id: 'sales-directors',
      title: t('uc1.audiences.salesDirectors') || 'Directeurs commerciaux',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: t('uc1.audiences.salesDirectorsDesc') || 'Optimisez vos ressources sur les projets les plus rentables',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Vision stratégique',
      alert: '📈 Décision éclairée'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

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
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">{t('uc1.hero.badge') || 'Projets simples'}</Badge>
              </motion.div>

              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {t('uc1.hero.title') || 'Analyse go/no-go'} <span className="text-purple-600">{t('uc1.hero.span') || 'immédiate'}</span>
                {t('uc1.hero.title2') || 'pour petits projets'} <span className="text-purple-600">{t('uc1.hero.span2') || 'intelligente'}</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {t('uc1.hero.description') || 'La seule plateforme conçue pour les projets de petite envergure aux cycles courts (< €1M, < 3 mois). Évaluez instantanément la faisabilité technique, identifiez les risques cachés, et prenez des décisions éclairées avant d\'investir du temps dans la rédaction.'} <span className="font-semibold text-blue-600">{t('uc1.hero.description_span') || 'sans effort'}</span>
                {t('uc1.hero.description2') || ' grâce à notre IA spécialisée.'}
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
                onClick={() => setIsModalOpen(true)}
              >
                {t('uc1.hero.demoButton') || 'Réserver une démo'}
              </Button>

              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
              >
                {t('uc1.hero.downloadButton') || 'Télécharger le cas d\'usage →'}
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
                  src={uc1HeroImage}
                  alt="Aitenders UC1 Interface - Small Project Analysis Dashboard"
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

      {/* Go/No-Go Feature Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - center */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F0F8FF 0%, #B3D9FF 50%, #E6F3FF 80%, transparent 100%)'
               }}></div>

          {/* Flowing accent - sides */}
          <div className="absolute top-1/3 -left-32 w-72 h-72 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #E6F3FF 0%, #B3D9FF 60%, transparent 100%)'
               }}></div>

          <div className="absolute top-1/3 -right-32 w-72 h-72 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(225deg, #E6F3FF 0%, #B3D9FF 60%, transparent 100%)'
               }}></div>
        </div>

        <div className="content-boundary relative z-10">
          {/* Go/No-Go Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 xl:p-20 border border-gray-100/50 relative overflow-hidden fade-in-up max-w-5xl mx-auto"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>

            {/* Multi-tone Faded Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>

            {/* Content Container */}
            <div className="relative z-10 text-center">
              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
                Go / No-Go immédiat, <span className="text-blue-600">process interne garanti</span>
              </h2>

              {/* Body Copy */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light max-w-4xl mx-auto">
                Sur les petits projets, la pression est double : analyser vite et prouver que tout a été lu, compris et contrôlé.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-12 font-light max-w-4xl mx-auto">
                Sans support transversal (qualité, juridique), chaque outil peut coûter cher en marge en exécution et du coup en crédibilité interne. 
                Avec Aitenders, vous obtenez en quelques minutes une vision claire et priorisée de vos documents pour un go/no-go 
                immédiat. La plateforme guide ensuite la validation et archive chaque contrôle, garantissant que vos obligations 
                internes sont remplies sans surcharge.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-12 lg:px-16 py-4 md:py-6 text-lg md:text-xl font-bold rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  Boostez Vos Petits Projets!
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 md:px-10 lg:px-12 py-3 md:py-5 text-base md:text-lg font-semibold rounded-2xl md:rounded-3xl transition-all duration-300"
                >
                  <MdPlayArrow className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Voir la Demo Rapide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Alternating Layout Design */}
      <section className="py-12 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
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
          <div className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20 fade-in-up">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">
              {t('uc1.solution_section.mainTitle') || 'Votre copilote IA qui accélère l\'analyse de vos petits projets'}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('uc1.solution_section.subtitle') || 'Décidez rapidement et prouvez que tout a été contrôlé, en moins de 48h.'}
            </p>
          </div>

          {/* Feature 1: Go/No-Go Immédiat - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-10 md:mb-16 lg:mb-20 xl:mb-24">
            <div className="order-1 fade-in-left lg:pr-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">
                {t('uc1.solution_section.feature1_title') || 'Structuration instantanée pour "go / no-go"'}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc1.solution_section.feature1_text') || 'Grâce aux assistants IA, vos documents sont instantanément analysés, classés et priorisés : intérêt commercial, faisabilité technique, contraintes réglementaires.'}
              </p>
              <p className="text-base md:text-lg font-semibold text-blue-600">
                {t('uc1.solution_section.feature1_highlight') || 'immédiat'}
              </p>
            </div>
            <div className="order-2 fade-in-right lg:pl-6">
              <div className="flex justify-center items-center h-full">
                <img
                  src={uc1FirstFeatureImage}
                  alt="Analyse IA - Go/No-Go immédiat pour petits projets"
                  className="w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl scale-[1.2] md:scale-[1.4] drop-shadow-[0_4px_16px_rgba(59,130,246,0.15)] md:drop-shadow-[0_8px_32px_rgba(59,130,246,0.2)]"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Templates pré-validés - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-10 md:mb-16 lg:mb-20 xl:mb-24">
            <div className="order-2 lg:order-1 fade-in-left lg:pr-6">
              <div className="flex justify-center items-center h-full">
                <div className="w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 flex items-center justify-center scale-[1.2] md:scale-[1.4] drop-shadow-[0_4px_16px_rgba(34,197,94,0.15)] md:drop-shadow-[0_8px_32px_rgba(34,197,94,0.2)]">
                  <div className="text-center">
                    <FaRocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <p className="text-sm font-semibold text-green-800">Templates Intelligents</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 fade-in-right lg:pl-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc1.solution_section.feature2_title') || 'Validation guidée et traçable'}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc1.solution_section.feature2_text') || 'Interface de validation step-by-step qui archive automatiquement chaque décision et justification pour audit interne.'}
              </p>

              <p className="text-base md:text-lg font-semibold text-green-600">
                {t('uc1.solution_section.feature2_highlight') || 'step-by-step'}
              </p>
            </div>
          </div>

          {/* Feature 3: Validation automatique - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 lg:pr-6 fade-in-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc1.solution_section.feature3_title') || 'Templates et processus personnalisables'}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc1.solution_section.feature3_text') || 'Adaptez les grilles d\'analyse à vos spécificités métier et vos standards internes pour une cohérence parfaite.'}
              </p>
              <p className="text-lg font-semibold text-purple-600">
                {t('uc1.solution_section.feature3_highlight') || 'personnalisables'}
              </p>
            </div>
            <div className="order-2 fade-in-right">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <div className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-2xl shadow-2xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 flex items-center justify-center"
                     style={{
                       transform: 'scale(1.4)',
                       filter: 'drop-shadow(0 8px 32px rgba(147, 51, 234, 0.2))'
                     }}>
                  <div className="text-center">
                    <FaCheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-sm font-semibold text-purple-800">Validation Automatique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="content-boundary">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('uc1.results_section.headline') || 'Des décisions 10x plus rapides, 3x plus précises'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.results_section.subtitle') || 'Résultats mesurés sur nos clients qui traitent 50+ petits projets par an'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <MdBusiness className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('uc1.results_section.card1_title') || 'Business Developer'}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {t('uc1.results_section.card1_subtitle') || 'Spécialisé petits projets publics'}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {t('uc1.results_section.card1_text') || '"Avant Aitenders, je passais 3-4h par DCE pour être sûr de ne rien rater. Maintenant, j\'ai ma réponse go/no-go en 30 minutes avec tous les éléments de justification."'}
              </p>
              <ul className="space-y-3">
                {[
                  t('uc1.results_section.card1_point1') || '85% de temps d\'évaluation économisé',
                  t('uc1.results_section.card1_point2') || '+40% de décisions go/no-go précises',
                  t('uc1.results_section.card1_point3') || 'x3 plus de projets rentables identifiés',
                  t('uc1.results_section.card1_point4') || 'Zéro oubli de contrainte critique'
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <MdAssignment className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('uc1.results_section.card2_title') || 'Chef de Projet'}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {t('uc1.results_section.card2_subtitle') || 'Projets techniques complexes'}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {t('uc1.results_section.card2_text') || '"L\'analyse automatique des risques techniques m\'a permis d\'anticiper des problèmes que j\'aurais découverts seulement en phase d\'exécution."'}
              </p>
              <ul className="space-y-3">
                {[
                  t('uc1.results_section.card2_point1') || '60% de temps d\'analyse technique économisé',
                  t('uc1.results_section.card2_point2') || '-75% de risques cachés non détectés',
                  t('uc1.results_section.card2_point3') || '+50% de précision dans les plannings',
                  t('uc1.results_section.card2_point4') || 'Validation automatique des contraintes'
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* KPIs Section */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.time') || '-50% à -70%'}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.time_desc') || 'temps d\'analyse par projet'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.compliance') || '100%'}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.compliance_desc') || 'conformité processus interne'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.serenity') || 'Sérénité'}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.serenity_desc') || 'garantie décision éclairée'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">48h</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.serenity_title') || 'Sérénité totale'}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.serenity_desc') || 'garantie décision éclairée'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-6">
              {t('uc1.toppings.badge') || 'Fonctionnalités Avancées'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('uc1.toppings.headline') || 'Chaque module est conçu pour vous faire gagner du temps et'} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('uc1.toppings.headline_span') || 'réduire les risques'}
              </span> {t('uc1.toppings.headline2') || ''}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('uc1.toppings.subtitle') || 'Découvrez les fonctionnalités avancées qui font d\'Aitenders votre partenaire idéal pour les petits projets.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FaLightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.project_summary.title') || 'Synthèse projet intelligente'}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.project_summary.desc') || 'Résumé automatique des points clés du projet avec recommandations.'}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.project_summary.tag') || 'Project Summary'}
                </span>
                <button className="text-xs text-blue-400 hover:text-blue-300">
                  {t('uc1.toppings.project_summary.click') || 'Clic pour détails'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.implicit_requirements.title') || 'Détection exigences implicites'}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.implicit_requirements.desc') || 'Identification automatique des contraintes non explicitement mentionnées.'}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.implicit_requirements.tag') || 'Implicit Requirements'}
                </span>
                <button className="text-xs text-green-400 hover:text-green-300">
                  {t('uc1.toppings.implicit_requirements.click') || 'Clic pour détails'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <MdCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.document_summary.title') || 'Résumé documents'}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.document_summary.desc') || 'Synthèse automatique de tous les documents avec hiérarchisation.'}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.document_summary.tag') || 'Document Summary'}
                </span>
                <button className="text-xs text-purple-400 hover:text-purple-300">
                  {t('uc1.toppings.document_summary.click') || 'Clic pour détails'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <FaCog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.document_hierarchy.title') || 'Hiérarchie documentaire'}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.document_hierarchy.desc') || 'Classification automatique par ordre d\'importance et de priorité.'}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.document_hierarchy.tag') || 'Document Hierarchy'}
                </span>
                <button className="text-xs text-orange-400 hover:text-orange-300">
                  {t('uc1.toppings.document_hierarchy.click') || 'Clic pour détails'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.content_categorization.title') || 'Catégorisation contenu'}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.content_categorization.desc') || 'Tri automatique par type de document et niveau de risque.'}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.content_categorization.tag') || 'Content Categorization'}
                </span>
                <button className="text-xs text-pink-400 hover:text-pink-300">
                  {t('uc1.toppings.content_categorization.click') || 'Clic pour détails'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <FaClock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.project_chat.title') || 'Chat projet intelligent'}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.project_chat.desc') || 'Posez toutes vos questions sur le projet et obtenez des réponses précises.'}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.project_chat.tag') || 'Project Chat'}
                </span>
                <button className="text-xs text-cyan-400 hover:text-cyan-300">
                  {t('uc1.toppings.project_chat.click') || 'Clic pour détails'}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 text-lg mb-6">{t('uc1.toppings.bottom_text') || 'Et bien plus encore... Chaque fonctionnalité est conçue pour vous accompagner dans vos décisions les plus importantes.'}</p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              {t('uc1.toppings.cta') || 'Découvrir toutes les fonctionnalités'}
            </button>
          </div>
        </div>
      </section>

      {/* Reference Projects Section */}
      <section className="py-20 bg-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.reference_projects.headline') || 'Ils nous font déjà confiance'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.reference_projects.subtitle') || 'Découvrez comment nos clients optimisent leurs décisions sur les petits projets.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('uc1.reference_projects.project1.title') || 'Bureau d\'etudes BTP - Lyon'}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {t('uc1.reference_projects.project1.sector') || 'Construction'}
                  </span>
                  <span className="font-semibold text-blue-600">
                    {t('uc1.reference_projects.project1.offer') || 'Offre Bâtiment'}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('uc1.reference_projects.project1.desc') || 'Spécialisé dans les projets de rénovation et construction neuve, ce bureau d\'etudes traite 50+ petits projets par an (100K€ - 1M€).'}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-green-600">
                    {t('uc1.reference_projects.project1.result') || 'Temps d\'analyse divisé par 4, taux de réussite +40%'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {t('uc1.reference_projects.impact_label') || 'Impact mesuré :'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('uc1.reference_projects.project1.impact') || '+750K€ de CA additionnel sur 12 mois'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('uc1.reference_projects.project2.title') || 'Entreprise générale - Marseille'}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {t('uc1.reference_projects.project2.sector') || 'Travaux publics'}
                  </span>
                  <span className="font-semibold text-green-600">
                    {t('uc1.reference_projects.project2.offer') || 'Aménagements urbains'}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('uc1.reference_projects.project2.desc') || 'Leader régional des aménagements urbains et voirie, cette entreprise répond à 60+ appels d\'offres publics par an.'}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-green-600">
                    {t('uc1.reference_projects.project2.result') || 'Pré-qualification automatisée, zéro oubli critique'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {t('uc1.reference_projects.impact_label') || 'Impact mesuré :'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('uc1.reference_projects.project2.impact') || '+1.2M€ de marge préservée grâce aux alertes risques'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('uc1.reference_projects.project3.title') || 'Bureau d\'etudes fluides - Paris'}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    {t('uc1.reference_projects.project3.sector') || 'Ingénierie'}
                  </span>
                  <span className="font-semibold text-purple-600">
                    {t('uc1.reference_projects.project3.offer') || 'Etudes techniques'}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('uc1.reference_projects.project3.desc') || 'Expert en installations CVC et plomberie pour projets tertiaires et résidentiels complexes.'}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-green-600">
                    {t('uc1.reference_projects.project3.result') || 'Planification optimisée, délais respectés'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {t('uc1.reference_projects.impact_label') || 'Impact mesuré :'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('uc1.reference_projects.project3.impact') || '+40% de taux de réussite sur propositions techniques'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Simulator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-6">
              {t('uc1.roi_simulator.badge') || 'Simulateur ROI'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.roi_simulator.headline') || 'Calculez votre ROI en 2 minutes'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.roi_simulator.subtext') || 'Découvrez en temps réel l\'impact financier d\'Aitenders sur votre activité petits projets'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <AitendersSimulatorFinal useCase="UC1" />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* HubSpot Modal */}
      <HubSpotBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
