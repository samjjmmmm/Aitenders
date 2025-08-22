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
  MdRotateRight, MdFlag, MdMail, MdAccountBalance, MdManageAccounts
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar, FaFileAlt, FaCogs } from "react-icons/fa";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import UC3AnalysisCard from "@/components/UC3AnalysisCard";
import ClientLogos from "@/components/client-logos";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGlobalTranslations } from "@/contexts/TranslationContext";

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
  const { t, currentLanguage } = useGlobalTranslations();

  // Target audience data with interactive content - UC2 adapted
  const targetAudiences = [
    {
      id: 'proposal-managers',
      title: t('uc2.audiences.proposalManagers'),
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: t('uc2.audiences.proposalManagersDesc'),
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
      title: t('uc2.audiences.technicalManagers'),
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: t('uc2.audiences.technicalManagersDesc'),
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
      title: t('uc2.audiences.commercialDirectors'),
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: t('uc2.audiences.commercialDirectorsDesc'),
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Pipeline optimisé',
      alert: '✅ ROI maximisé'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  // Scroll animation logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const painPoints = [
    {
      icon: MdWarning,
      title: t('uc2.pain_points.title1'),
      description: t('uc2.pain_points.description1')
    },
    {
      icon: MdDescription,
      title: t('uc2.pain_points.title2'),
      description: t('uc2.pain_points.description2')
    },
    {
      icon: FaUsers,
      title: t('uc2.pain_points.title3'),
      description: t('uc2.pain_points.description3')
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: t('uc2.solutions.title1'),
      description: t('uc2.solutions.description1')
    },
    {
      icon: MdGroups,
      title: t('uc2.solutions.title2'),
      description: t('uc2.solutions.description2')
    },
    {
      icon: MdSecurity,
      title: t('uc2.solutions.title3'),
      description: t('uc2.solutions.description3')
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: t('uc2.journey.title1'),
      description: t('uc2.journey.description1'),
      icon: MdDescription
    },
    {
      step: "2",
      title: t('uc2.journey.title2'),
      description: t('uc2.journey.description2'),
      icon: MdGroups
    },
    {
      step: "3",
      title: t('uc2.journey.title3'),
      description: t('uc2.journey.description3'),
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "70%",
      description: t('uc2.kpis.description1')
    },
    {
      metric: "85%",
      description: t('uc2.kpis.description2')
    },
    {
      metric: "3-5 jours",
      description: t('uc2.kpis.description3')
    },
    {
      metric: "100%",
      description: t('uc2.kpis.description4')
    }
  ];

  const differentiators = [
    {
      title: t('uc2.differentiators.title1'),
      description: t('uc2.differentiators.description1')
    },
    {
      title: t('uc2.differentiators.title2'),
      description: t('uc2.differentiators.description2')
    },
    {
      title: t('uc2.differentiators.title3'),
      description: t('uc2.differentiators.description3')
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
                  <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">{t('uc2.hero.badge')}</Badge>
                </motion.div>

                <motion.h1
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {t('uc2.hero.title')} <span className="text-purple-600">{t('uc2.hero.span')}</span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {t('uc2.hero.description')}
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
                  {t('uc2.hero.demoButton')}
                </Button>

                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  {t('uc2.hero.downloadButton')}
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
      <section className="py-8 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative overflow-hidden">
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
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 xl:p-20 border border-gray-100/50 relative overflow-hidden mb-8 md:mb-16 lg:mb-20 fade-in-up"
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
                {t('uc2.painPoints.headline')}
              </h2>

              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                {t('uc2.painPoints.text1')}
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                {t('uc2.painPoints.text2')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-7 text-lg md:text-xl lg:text-2xl font-bold rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105">
                  {t('uc2.painPoints.optimizeButton')}
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 md:px-10 lg:px-12 py-3 md:py-5 lg:py-6 text-base md:text-lg lg:text-xl font-semibold rounded-2xl md:rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2" />
                  {t('uc2.painPoints.demoButton')}
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
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc2.solution_section.mainTitle')}</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('uc2.solution_section.subtitle')}
            </p>
          </div>

          {/* Feature 1: Structuration IA immédiate - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-10 md:mb-16 lg:mb-20 xl:mb-24">
            <div className="order-1 fade-in-left lg:pr-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc2.solution_section.feature1_title')}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc2.solution_section.feature1_text')}
              </p>
              <p className="text-base md:text-lg font-semibold text-blue-600">
                {t('uc2.solution_section.feature1_highlight')}
              </p>
            </div>
            <div className="order-2 fade-in-right lg:pl-6">
              <div className="flex justify-center items-center h-full">
                <img
                  src={uc2FirstFeatureImage}
                  alt="Analyse IA - Progression structuration et catégorisation"
                  className="w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
                  style={{
                    transform: 'scale(1.2) md:scale(1.4)',
                    filter: 'drop-shadow(0 4px 16px rgba(59, 130, 246, 0.15)) md:drop-shadow(0 8px 32px rgba(59, 130, 246, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Synthèse visuelle claire - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-10 md:mb-16 lg:mb-20 xl:mb-24">
            <div className="order-2 lg:order-1 fade-in-left lg:pr-6">
              <div className="flex justify-center items-center h-full">
                <img
                  src={uc2SecondFeatureImage}
                  alt="Analyse IA - Contrôlez chaque clause critique"
                  className="w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
                  style={{
                    transform: 'scale(1.2) md:scale(1.4)',
                    filter: 'drop-shadow(0 4px 16px rgba(251, 146, 60, 0.15)) md:drop-shadow(0 8px 32px rgba(251, 146, 60, 0.2))',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 fade-in-right lg:pl-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc2.solution_section.feature2_title')}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc2.solution_section.feature2_text')}
              </p>

              <p className="text-base md:text-lg font-semibold text-orange-600">
                {t('uc2.solution_section.feature2_highlight')}
              </p>
            </div>
          </div>

          {/* Feature 3: Validation guidée - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 lg:pr-6 fade-in-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc2.solution_section.feature3_title')}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc2.solution_section.feature3_text')}
              </p>
              <p className="text-lg font-semibold text-green-600">
                {t('uc2.solution_section.feature3_highlight')}
              </p>
            </div>
            <div className="order-2 fade-in-right">
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
              <div className="text-center mb-12 md:mb-16 fade-in-up">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  {t('uc2.results_section.headline')}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('uc2.results_section.subtitle')}
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Acheteur - Directeur Commercial / Offres */}
                <div className="group fade-in-left">
                  <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <MdAccountBalance className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{t('uc2.results_section.card1_title')}</h4>
                        <p className="text-sm text-gray-600">{t('uc2.results_section.card1_subtitle')}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      {t('uc2.results_section.card1_text')}
                    </p>

                    <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{t('uc2.results_section.card1_point1')}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{t('uc2.results_section.card1_point2')}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{t('uc2.results_section.card1_point3')}</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Utilisateur - Responsable Offre / Contract Manager / Chef de Projet */}
                <div className="group fade-in-right">
                  <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <MdManageAccounts className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{t('uc2.results_section.card2_title')}</h4>
                        <p className="text-sm text-gray-600">{t('uc2.results_section.card2_subtitle')}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      {t('uc2.results_section.card2_text')}
                    </p>

                    <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{t('uc2.results_section.card2_point1')}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{t('uc2.results_section.card2_point2')}</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{t('uc2.results_section.card2_point3')}</span>
                      </div>
                    </div>
                  </Card>
                </div>

              </div>

              {/* KPI Content Box */}
              <div className="mt-16 md:mt-20 lg:mt-24 fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                  {/* KPI 1 - 50% du temps */}
                  <div className="group">
                    <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t('uc2.results_section.kpis.time_value')}</div>
                      <h4 className="text-lg font-semibold text-gray-900">{t('uc2.results_section.kpis.time')}</h4>
                    </Card>
                  </div>

                  {/* KPI 2 - 100% des clauses */}
                  <div className="group">
                    <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{t('uc2.results_section.kpis.clauses_value')}</div>
                      <h4 className="text-lg font-semibold text-gray-900">{t('uc2.results_section.kpis.clauses')}</h4>
                    </Card>
                  </div>

                  {/* KPI 3 - 0 surprise */}
                  <div className="group">
                    <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{t('uc2.results_section.kpis.surprise_value')}</div>
                      <h4 className="text-lg font-semibold text-gray-900">{t('uc2.results_section.kpis.surprise')}</h4>
                    </Card>
                  </div>

                </div>

                {/* Additional KPI - Bottom centered */}
                <div className="mt-8 flex justify-center">
                  <div className="max-w-md">
                    <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                      <div className="flex items-center justify-center">
                        <MdTrendingUp className="w-6 h-6 text-orange-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">{t('uc2.results_section.kpis.extra')}</h4>
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
          <div className="text-center mb-16 md:mb-20 lg:mb-24 fade-in-up">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
              <MdStars className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-sm md:text-base">{t('uc2.toppings.badge')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              {t('uc2.toppings.headline')}
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              {t('uc2.toppings.subtitle')}
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Intelligence Prédictive */}
            <div className="group fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc2.toppings.features.predictive.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc2.toppings.features.predictive.text')}
                </p>

                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">{t('uc2.toppings.features.predictive.tag')}</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Collaboration Adaptative */}
            <div className="group fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc2.toppings.features.collaboration.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc2.toppings.features.collaboration.text')}
                </p>

                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">{t('uc2.toppings.features.collaboration.tag')}</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Métriques Intelligentes */}
            <div className="group fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTableChart className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc2.toppings.features.metrics.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc2.toppings.features.metrics.text')}
                </p>

                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">{t('uc2.toppings.features.metrics.tag')}</span>
                  <MdDashboard className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Gestion des Risques */}
            <div className="group fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc2.toppings.features.risks.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc2.toppings.features.risks.text')}
                </p>

                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">{t('uc2.toppings.features.risks.tag')}</span>
                  <MdWarning className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Templates Intelligents */}
            <div className="group fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdContentCopy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc2.toppings.features.templates.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc2.toppings.features.templates.text')}
                </p>

                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">{t('uc2.toppings.features.templates.tag')}</span>
                  <MdCreate className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Apprentissage Continu */}
            <div className="group fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdRotateRight className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc2.toppings.features.learning.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc2.toppings.features.learning.text')}
                </p>

                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">{t('uc2.toppings.features.learning.tag')}</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Intégration Écosystème */}
            <div className="group md:col-span-2 lg:col-span-3 fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdCloudSync className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('uc2.toppings.features.integration.title')}</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      {t('uc2.toppings.features.integration.text')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">{t('uc2.toppings.features.integration.tag1')}</span>
                        <MdLink className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">{t('uc2.toppings.features.integration.tag2')}</span>
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
              {t('uc2.toppings.bottom_text')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              {t('uc2.toppings.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Reference Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              {t('uc2.reference_projects.headline')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('uc2.reference_projects.subtitle')}
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">

            {/* Project 1: Regional Logistics Center */}
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

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc2.reference_projects.project1.title')}</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">{t('uc2.reference_projects.project1.sector')}</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">{t('uc2.reference_projects.project1.offer')}</div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('uc2.reference_projects.project1.desc')}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('uc2.reference_projects.impact_label')}</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span>{t('uc2.reference_projects.project1.impact.productivity')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{t('uc2.reference_projects.project1.impact.compliance')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{t('uc2.reference_projects.project1.impact.traceability')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{t('uc2.reference_projects.project1.impact.collaboration')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Urban District Rehabilitation */}
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

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc2.reference_projects.project2.title')}</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">{t('uc2.reference_projects.project2.sector')}</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">{t('uc2.reference_projects.project2.offer')}</div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('uc2.reference_projects.project2.desc')}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('uc2.reference_projects.impact_label')}</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span>{t('uc2.reference_projects.project2.impact.productivity')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{t('uc2.reference_projects.project2.impact.compliance')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{t('uc2.reference_projects.project2.impact.traceability')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{t('uc2.reference_projects.project2.impact.collaboration')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Modern University Campus */}
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

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc2.reference_projects.project3.title')}</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">{t('uc2.reference_projects.project3.sector')}</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">{t('uc2.reference_projects.project3.offer')}</div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('uc2.reference_projects.project3.desc')}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('uc2.reference_projects.impact_label')}</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span>{t('uc2.reference_projects.project3.impact.productivity')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{t('uc2.reference_projects.project3.impact.compliance')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{t('uc2.reference_projects.project3.impact.traceability')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{t('uc2.reference_projects.project3.impact.collaboration')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-8 md:mb-16 lg:mb-20 fade-in-up">
            <ClientLogos language={currentLanguage as "fr" | "en"} />
          </div>

          {/* Integrated Chat Simulator - Enhanced */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-purple-100 p-4 md:p-8 lg:p-12 relative overflow-hidden fade-in-up">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-purple-100 rounded-full border border-purple-200 mb-4 md:mb-6">
                  <MdAnalytics className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-semibold text-xs md:text-sm">{t('uc2.roi_simulator.badge')}</span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  {t('uc2.roi_simulator.headline')}
                </h3>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                  {t('uc2.roi_simulator.subtext')}
                </p>
              </div>

              {/* Embedded Aitenders ROI Simulator Final */}
              <AitendersSimulatorFinal className="w-full" useCase="uc2" />

            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Chat Interface with UC2-specific actions */}
      <ChatInterface
        language={currentLanguage as "fr" | "en"}
        transparent={true}
        customActions={[
          {
            label: t('uc2.chat_actions.use_cases'),
            icon: <span className="text-gray-400">+</span>,
            onClick: () => {} // Navigate to use cases
          },
          {
            label: t('uc2.chat_actions.demo'),
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC2 demo
          },
          {
            label: t('uc2.chat_actions.roi'),
            icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Open ROI calculator
          },
          {
            label: t('uc2.chat_actions.contact'),
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