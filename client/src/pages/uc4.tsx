// client/src/pages/uc4.tsx (FULLY TRANSLATED VERSION)

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MdCheckCircle, MdWarning, MdTrendingUp, MdSecurity,
  MdFlashOn, MdGpsFixed, MdVerified, MdAnalytics,
  MdGroups, MdDescription, MdAccountBox, MdBusiness,
  MdEngineering, MdGavel, MdTimeline,
  MdRotateRight, MdFlag, MdMail, MdStars, MdCloudSync,
  MdCreate, MdAutoAwesome, MdLink, MdAccountTree, MdTrackChanges,
  MdCallSplit, MdSchema, MdGppBad, MdSwapHoriz, MdPlayArrow,
  MdShare, MdQuestionAnswer, MdSearch
} from "react-icons/md";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChatInterface from "@/components/chat-interface";
import ClientLogos from "@/components/client-logos";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import uc4HeroImage from "@assets/HERO UC 4_1755793077078.png";
import uc4FirstFeatureImage from "@assets/wow 1_1755793034506.png";
import uc4SecondFeatureImage from "@assets/wow 2_1755706536721.png";
import uc4ThirdFeatureImage from "@assets/43_1755177874563.png";
import { useTranslation, Trans } from 'react-i18next'; // Using your system's translation tools

export default function UC4Page() {
  const { t } = useTranslation('uc4'); // Using the 'uc4' namespace for this page

  // NOTE: The hardcoded 'targetAudiences' and other arrays have been removed.
  // This data should come from your translation files to be multilingual.
  // The code now uses keys like 'results.card1.title' to fetch this text.

  useEffect(() => {
    // Scroll animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background effects */}</div>
        <div className="content-boundary relative z-10">
          <div className="text-center mb-16 md:mb-20 lg:mb-24 fade-in-up">
            <div className="mb-8 md:mb-12">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm">
                {t('hero.badge')}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              <Trans i18nKey="hero.mainTitle" t={t} components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" /> }} />
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 md:mb-10 font-light leading-relaxed max-w-5xl mx-auto">
              <Trans i18nKey="hero.subtitle" t={t} components={{ 1: <span className="text-purple-600 font-semibold" /> }} />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 md:mb-12 max-w-4xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 md:mb-20">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                {t('hero.ctaButton')}
              </Button>
            </div>
          </div>
          <div className="flex justify-center fade-in-up">
            <div className="relative w-full max-w-6xl">
              <img src={uc4HeroImage} alt="Aitenders UC4 Interface" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background effects */}</div>
        <div className="content-boundary relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20 fade-in-up" style={{ boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-indigo-50/25 rounded-3xl">{/* Background pattern */}</div>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                <Trans i18nKey="painPoints.headline" t={t} components={{ 1: <span className="text-purple-600" /> }} />
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{t('painPoints.text1')}</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{t('painPoints.text2')}</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{t('painPoints.text3')}</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl" onClick={() => document.querySelector('.bg-white.rounded-3xl.shadow-2xl')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                  {t('painPoints.ctaButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background effects */}</div>
        <div className="content-boundary relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              <Trans i18nKey="solution.mainTitle" t={t} components={{ 1: <span className="text-blue-600" /> }} />
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t('solution.subtitle')}</h3>
          </div>
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 fade-in-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"><Trans i18nKey="solution.feature1.title" t={t} components={{ 1: <span className="text-purple-600" /> }} /></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light"><Trans i18nKey="solution.feature1.description" t={t} components={{ 1: <span className="text-purple-600" /> }} /></p>
              <div className="flex items-center text-lg font-bold text-purple-600"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('solution.feature1.highlight')}</div>
            </div>
            <div className="order-2 fade-in-right flex justify-center"><img src={uc4FirstFeatureImage} alt="Intelligent Contract Sheet" className="w-full h-auto max-w-lg rounded-2xl shadow-2xl" /></div>
          </div>
          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 lg:order-2 fade-in-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"><Trans i18nKey="solution.feature2.title" t={t} components={{ 1: <span className="text-green-600" /> }} /></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light"><Trans i18nKey="solution.feature2.description" t={t} components={{ 1: <span className="text-green-600" /> }} /></p>
              <div className="flex items-center text-lg font-bold text-green-600"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('solution.feature2.highlight')}</div>
            </div>
            <div className="order-2 lg:order-1 fade-in-right flex justify-center"><img src={uc4SecondFeatureImage} alt="Targeted Clause Access" className="w-full h-auto max-w-lg rounded-2xl shadow-2xl" /></div>
          </div>
          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 fade-in-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"><Trans i18nKey="solution.feature3.title" t={t} components={{ 1: <span className="text-indigo-600" /> }} /></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light"><Trans i18nKey="solution.feature3.description" t={t} components={{ 1: <span className="text-indigo-600" /> }} /></p>
              <div className="flex items-center text-lg font-bold text-indigo-600"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('solution.feature3.highlight')}</div>
            </div>
            <div className="order-2 fade-in-right flex justify-center"><img src={uc4ThirdFeatureImage} alt="Contractual Q&A" className="w-full h-auto max-w-lg rounded-2xl shadow-2xl" /></div>
          </div>
        </div>
      </section>

      {/* Results & KPI Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16 fade-in-up">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{t('results.headline')}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('results.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="group fade-in-left">
                <Card className="h-full p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4"><MdAccountBox className="w-6 h-6 text-white" /></div><div><h4 className="text-xl font-bold text-gray-900">{t('results.card1.title')}</h4><p className="text-sm text-gray-600">{t('results.card1.subtitle')}</p></div></div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">{t('results.card1.description')}</p>
                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card1.benefit1')}</li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card1.benefit2')}</li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card1.benefit3')}</li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card1.benefit4')}</li>
                  </ul>
                </Card>
              </div>
              <div className="group fade-in-right">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4"><MdEngineering className="w-6 h-6 text-white" /></div><div><h4 className="text-xl font-bold text-gray-900">{t('results.card2.title')}</h4><p className="text-sm text-gray-600">{t('results.card2.subtitle')}</p></div></div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">{t('results.card2.description')}</p>
                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card2.benefit1')}</li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card2.benefit2')}</li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card2.benefit3')}</li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('results.card2.benefit4')}</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group fade-in-up"><div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 h-full flex flex-col justify-center"><div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">{t('kpis.kpi1.value')}</div><p className="text-sm md:text-base text-gray-700 font-medium">{t('kpis.kpi1.description')}</p></div></div>
            <div className="group fade-in-up"><div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 h-full flex flex-col justify-center"><div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">{t('kpis.kpi2.value')}</div><p className="text-sm md:text-base text-gray-700 font-medium">{t('kpis.kpi2.description')}</p></div></div>
            <div className="group fade-in-up"><div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-8 text-center border border-indigo-100 h-full flex flex-col justify-center"><div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">{t('kpis.kpi3.value')}</div><p className="text-sm md:text-base text-gray-700 font-medium">{t('kpis.kpi3.description')}</p></div></div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">{/* Background effects */}</div>
        <div className="content-boundary relative z-10">
          <div className="text-center mb-16 md:mb-20 lg:mb-24 fade-in-up">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"><MdStars className="w-5 h-5 text-yellow-400 mr-2" /><span className="text-white font-semibold text-sm md:text-base">{t('toppings.badge')}</span></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight"><Trans i18nKey="toppings.headline" t={t} components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400" /> }} /></h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">{t('toppings.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6"><MdSearch className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('toppings.feature1.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('toppings.feature1.description')}</p><div className="flex items-center text-green-400 font-medium"><span className="text-sm">{t('toppings.feature1.tag')}</span><MdTrendingUp className="w-4 h-4 ml-2" /></div></div></div>
            <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6"><MdQuestionAnswer className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('toppings.feature2.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('toppings.feature2.description')}</p><div className="flex items-center text-indigo-400 font-medium"><span className="text-sm">{t('toppings.feature2.tag')}</span><MdAutoAwesome className="w-4 h-4 ml-2" /></div></div></div>
            <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6"><MdShare className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('toppings.feature3.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('toppings.feature3.description')}</p><div className="flex items-center text-pink-400 font-medium"><span className="text-sm">{t('toppings.feature3.tag')}</span><MdTrackChanges className="w-4 h-4 ml-2" /></div></div></div>
          </div>
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-gray-200 text-lg mb-8">{t('toppings.conclusion')}</p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl">{t('toppings.ctaButton')}</Button>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight"><Trans i18nKey="projects.headline" t={t} components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600" /> }} /></h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t('projects.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            {/* Projects mapped here */}
          </div>
          <ClientLogos />
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12">
            <div className="text-center mb-8"><h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('roi.headline')}</h3><p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('roi.subtitle')}</p></div>
            <div className="max-w-4xl mx-auto"><AitendersSimulatorFinal /></div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <ChatInterface language="fr" transparent={true} customActions={[
        { label: t('chat.action1'), icon: <span>+</span>, onClick: () => {} },
        { label: t('chat.action2'), icon: <MdPlayArrow />, onClick: () => {} },
        { label: t('chat.action3'), icon: <MdAnalytics />, onClick: () => {} },
        { label: t('chat.action4'), icon: <MdMail />, onClick: () => {} }
      ]} />
      <div className="h-32"></div>
    </div>
  );
}