
import { useState, useEffect } from "react";
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
import { motion } from "framer-motion";
import { useGlobalTranslations } from "@/contexts/TranslationContext";
import DemoCTAButton from "@/components/demo-cta-button";

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

export default function TestUC2Page() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

      <main>
        {/* Hero Section - Test UC2 Page */}
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
                    <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Test UC2 - Medium Projects</Badge>
                  </motion.div>

                  <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Test Page for <span className="text-purple-600">Medium Project Management</span>
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    This is a test page for UC2 functionality - Medium project bid management and coordination.
                  </motion.p>
                </motion.div>

                {/* CTA Buttons - Side by Side */}
                <motion.div
                  className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <DemoCTAButton size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                    Test Demo UC2
                  </DemoCTAButton>

                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                  >
                    Download Test Resources
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
                      alt="Test UC2 Interface - Medium Project Management Dashboard"
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

        {/* Test Features Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="content-boundary">
            <div className="text-center mb-12 md:mb-16 fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
                Test UC2 Features
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Testing the medium project management capabilities of Aitenders UC2 module.
              </p>
            </div>

            {/* Test Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

              {/* Test Feature 1 */}
              <div className="group fade-in-up">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MdAnalytics className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Analytics</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Testing the analytics and reporting capabilities for medium-scale projects.
                  </p>

                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="text-sm">Real-time Testing</span>
                    <MdTrendingUp className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </div>

              {/* Test Feature 2 */}
              <div className="group fade-in-up">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MdGroups className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Testing team collaboration features for coordinated bid preparation.
                  </p>

                  <div className="flex items-center text-green-600 font-medium">
                    <span className="text-sm">Team Sync Testing</span>
                    <MdAutoAwesome className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </div>

              {/* Test Feature 3 */}
              <div className="group fade-in-up">
                <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MdSecurity className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Security</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Testing security and compliance features for enterprise-grade projects.
                  </p>

                  <div className="flex items-center text-purple-600 font-medium">
                    <span className="text-sm">Security Testing</span>
                    <MdShield className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Test Results Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20">
          <div className="content-boundary">
            <div className="text-center mb-12 md:mb-16 fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
                Test Results Dashboard
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Monitor the performance and effectiveness of UC2 testing scenarios.
              </p>
            </div>

            {/* Test KPIs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

              {/* Test KPI 1 */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
                  <h4 className="text-lg font-semibold text-gray-900">Test Success Rate</h4>
                </Card>
              </div>

              {/* Test KPI 2 */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <h4 className="text-lg font-semibold text-gray-900">Test Cases Executed</h4>
                </Card>
              </div>

              {/* Test KPI 3 */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">24/7</div>
                  <h4 className="text-lg font-semibold text-gray-900">Continuous Testing</h4>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Chat Interface for testing */}
      <ChatInterface
        language={currentLanguage as "fr" | "en"}
        transparent={true}
        customActions={[
          {
            label: "Test Features",
            icon: <span className="text-gray-400">+</span>,
            onClick: () => {} // Test features action
          },
          {
            label: "Test Demo",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch test demo
          },
          {
            label: "Test Results",
            icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // View test results
          },
          {
            label: "Test Contact",
            icon: <MdMail className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Test contact form
          }
        ]}
      />

      {/* Add padding to body to account for fixed chat */}
      <div className="h-32"></div>
    </div>
  );
}
