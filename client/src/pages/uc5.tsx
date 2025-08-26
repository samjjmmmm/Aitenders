// client/src/pages/uc5.tsx (FINAL VERSION WITH ALL CORRECTIONS)

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  MdCheckCircle, MdWarning, MdDescription, MdAccountBox, MdBusiness, 
  MdEngineering, MdAnalytics, MdStars, MdSecurity, MdGroups,
  MdNotificationsActive, MdHistory, MdTimeline, MdAccountTree, 
  MdTrackChanges, MdQuestionAnswer, MdDashboard, MdTrendingUp, 
  MdPlayArrow, MdMail, MdFlag, MdRotateRight
} from 'react-icons/md';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import ChatInterface from '@/components/chat-interface';
import ClientLogos from '@/components/client-logos';
import { AitendersSimulatorFinal } from '@/components/aitenders-simulator-final';
import Lottie from 'lottie-react';
import wow1Uc5Animation from '../assets/wow-1-uc5.json';
import uc5SecondFeatureImage from "@assets/wow 2_1755751777579.png";
import uc5ThirdFeatureImage from "@assets/WOW 3_1755757958470.png";
import uc5HeroImage from "@assets/HERO UC 5_1755774540751.png";

import { useTranslation } from 'react-i18next';

export default function UC5() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#F5F9FE' }}>
        <div className="content-boundary relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-full max-w-5xl px-4">
              <div className="mb-12">
                <Badge className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-base font-semibold px-4 py-2 rounded-full shadow-sm">
                 {t('uc5.hero.badge')}
                </Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('uc5.hero.title')}
                </h1>
                <p className="text-lg md:text-xl mb-16 font-light">
                  {t('uc5.hero.description')}
                </p>
              </div>
              <div className="mb-16 flex justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl">
                  {t('uc5.hero.ctaButton')}
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-center px-4">
                <img src={uc5HeroImage} alt="Aitenders UC5 Interface" className="w-full max-w-5xl h-auto" style={{ transform: 'scale(1.3)' }} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pain Points Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        <div className="content-boundary relative z-10">
          <div className="bg-white/95 rounded-3xl p-16 lg:p-20 border border-gray-100/50 mb-20">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('uc5.painPoints.headline')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-light">{t('uc5.painPoints.text1')}</p>
              <p className="text-xl text-gray-600 mb-8 font-light">{t('uc5.painPoints.text2')}</p>
              <div className="flex justify-center mb-16">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  onClick={() => {
                    const simulatorSection = document.querySelector('[class*="bg-white rounded-3xl shadow-2xl"]');
                    if (simulatorSection) {
                      simulatorSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                      // Fallback - scroll to bottom where simulator usually is
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }
                  }}
                >
                  {t('uc5.painPoints.ctaButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        <div className="content-boundary relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('uc5.solution.mainTitle')}
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">{t('uc5.solution.subtitle')}</h3>
          </div>
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('uc5.solution.feature1.title')}</h3>
              <p className="text-xl text-gray-600 mb-8">{t('uc5.solution.feature1.description')}</p>
              <div className="flex items-center text-lg font-bold text-blue-500"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc5.solution.feature1.highlight')}</div>
            </div>
            <div className="flex justify-center"><Lottie animationData={wow1Uc5Animation} loop={true} autoplay={true} className="w-full max-w-[400px]" /></div>
          </div>
          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 flex justify-center"><img src={uc5SecondFeatureImage} alt="Engagement Tracking" className="w-full max-w-[500px]" /></div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">{t('uc5.solution.feature2.title')}</h3>
              <p className="text-xl text-gray-600 mb-8">{t('uc5.solution.feature2.description')}</p>
              <div className="flex items-center text-lg"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" /><span className="font-bold text-blue-500">{t('uc5.solution.feature2.highlight')}</span></div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('uc5.solution.feature3.title')}</h3>
              <p className="text-xl text-gray-600 mb-8">{t('uc5.solution.feature3.description')}</p>
              <div className="flex items-center text-lg font-bold text-blue-500"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc5.solution.feature3.highlight')}</div>
            </div>
            <div className="flex justify-center"><img src={uc5ThirdFeatureImage} alt="Intelligent Search" className="w-full max-w-[500px]" /></div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('uc5.results.headline')}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('uc5.results.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{t('uc5.results.card1.title')}</h4>
                <p className="text-sm text-blue-600 font-semibold mb-4">{t('uc5.results.card1.subtitle')}</p>
                <p className="text-gray-600 mb-4">{t('uc5.results.card1.description')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card1.benefit1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card1.benefit2')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card1.benefit3')}
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white/70 rounded-lg">
                  <p className="text-sm font-medium text-blue-700">{t('uc5.results.card1.impact')}</p>
                </div>
              </Card>
              <Card className="h-full p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{t('uc5.results.card2.title')}</h4>
                <p className="text-sm text-orange-600 font-semibold mb-4">{t('uc5.results.card2.subtitle')}</p>
                <p className="text-gray-600 mb-4">{t('uc5.results.card2.description')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card2.benefit1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card2.benefit2')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card2.benefit3')}
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white/70 rounded-lg">
                  <p className="text-sm font-medium text-orange-700">{t('uc5.results.card2.impact')}</p>
                </div>
              </Card>
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{t('uc5.results.card3.title')}</h4>
                <p className="text-sm text-green-600 font-semibold mb-4">{t('uc5.results.card3.subtitle')}</p>
                <p className="text-gray-600 mb-4">{t('uc5.results.card3.description')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card3.benefit1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card3.benefit2')}
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {t('uc5.results.card3.benefit3')}
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white/70 rounded-lg">
                  <p className="text-sm font-medium text-green-700">{t('uc5.results.card3.impact')}</p>
                </div>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center rounded-3xl border border-green-200">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-600 to-emerald-600 mb-3">
                {t('uc5.kpis.kpi1.value')}
              </div>
              <p className="text-gray-700">{t('uc5.kpis.kpi1.description')}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center rounded-3xl border border-blue-200">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-cyan-600 mb-3">
                {t('uc5.kpis.kpi2.value')}
              </div>
              <p className="text-gray-700">{t('uc5.kpis.kpi2.description')}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 text-center rounded-3xl border border-purple-200">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-violet-600 mb-3">
                {t('uc5.kpis.kpi3.value')}
              </div>
              <p className="text-gray-700">{t('uc5.kpis.kpi3.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Toppings Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative">
        <div className="content-boundary relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 mb-6"><MdStars className="w-5 h-5 text-yellow-400 mr-2" /><span className="text-white font-semibold">{t('uc5.toppings.badge')}</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('uc5.toppings.headline')}</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">{t('uc5.toppings.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{t('uc5.toppings.feature1.title')}</h3>
              <p className="text-gray-200 mb-6">{t('uc5.toppings.feature1.description')}</p>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-400 border border-red-500/30">
                  {t('uc5.toppings.feature1.tag')}
                </span>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{t('uc5.toppings.feature2.title')}</h3>
              <p className="text-gray-200 mb-6">{t('uc5.toppings.feature2.description')}</p>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {t('uc5.toppings.feature2.tag')}
                </span>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{t('uc5.toppings.feature3.title')}</h3>
              <p className="text-gray-200 mb-6">{t('uc5.toppings.feature3.description')}</p>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  {t('uc5.toppings.feature3.tag')}
                </span>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{t('uc5.toppings.feature4.title')}</h3>
              <p className="text-gray-200 mb-6">{t('uc5.toppings.feature4.description')}</p>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400 border border-green-500/30">
                  {t('uc5.toppings.feature4.tag')}
                </span>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{t('uc5.toppings.feature5.title')}</h3>
              <p className="text-gray-200 mb-6">{t('uc5.toppings.feature5.description')}</p>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  {t('uc5.toppings.feature5.tag')}
                </span>
              </div>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3 bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">{t('uc5.toppings.security.title')}</h3>
              <p className="text-lg text-gray-200 mb-6">{t('uc5.toppings.security.description')}</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  {t('uc5.toppings.security.tag1')}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {t('uc5.toppings.security.tag2')}
                </span>
              </div>
            </Card>
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-200 text-lg mb-8">{t('uc5.toppings.conclusion')}</p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 text-white px-12 py-6 text-xl font-bold rounded-3xl">{t('uc5.toppings.ctaButton')}</Button>
          </div>
        </div>
      </motion.section>

      {/* Real Projects Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('uc5.projects.headline')}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">{t('uc5.projects.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="bg-white p-8 shadow-lg h-full"><h3 className="text-2xl font-bold mb-3">{t('uc5.projects.project1.title')}</h3><Badge className="bg-purple-100 text-purple-800 mb-4">{t('uc5.projects.project1.badge')}</Badge><div className="text-xl font-bold text-purple-600 mb-4">{t('uc5.projects.project1.contract')}</div><p className="text-gray-600 mb-6">{t('uc5.projects.project1.description')}</p><h4 className="font-semibold mb-3">{t('uc5.projects.impactLabel')}</h4><div className="space-y-3 text-sm" dangerouslySetInnerHTML={{ __html: [t('uc5.projects.project1.impact1'), t('uc5.projects.project1.impact2'), t('uc5.projects.project1.impact3'), t('uc5.projects.project1.impact4')].join('<br/>') }} /> </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="bg-white p-8 shadow-lg h-full"><h3 className="text-2xl font-bold mb-3">{t('uc5.projects.project2.title')}</h3><Badge className="bg-blue-100 text-blue-800 mb-4">{t('uc5.projects.project2.badge')}</Badge><div className="text-xl font-bold text-blue-600 mb-4">{t('uc5.projects.project2.contract')}</div><p className="text-gray-600 mb-6">{t('uc5.projects.project2.description')}</p><h4 className="font-semibold mb-3">{t('uc5.projects.impactLabel')}</h4><div className="space-y-3 text-sm" dangerouslySetInnerHTML={{ __html: [t('uc5.projects.project2.impact1'), t('uc5.projects.project2.impact2'), t('uc5.projects.project2.impact3'), t('uc5.projects.project2.impact4')].join('<br/>') }} /> </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Card className="bg-white p-8 shadow-lg h-full"><h3 className="text-2xl font-bold mb-3">{t('uc5.projects.project3.title')}</h3><Badge className="bg-green-100 text-green-800 mb-4">{t('uc5.projects.project3.badge')}</Badge><div className="text-xl font-bold text-green-600 mb-4">{t('uc5.projects.project3.contract')}</div><p className="text-gray-600 mb-6">{t('uc5.projects.project3.description')}</p><h4 className="font-semibold mb-3">{t('uc5.projects.impactLabel')}</h4><div className="space-y-3 text-sm" dangerouslySetInnerHTML={{ __html: [t('uc5.projects.project3.impact1'), t('uc5.projects.project3.impact2'), t('uc5.projects.project3.impact3'), t('uc5.projects.project3.impact4')].join('<br/>') }} /> </Card>
            </motion.div>
          </div>
          <div className="mb-16"><ClientLogos language="fr" /></div>
          <div className="bg-white rounded-3xl shadow-2xl p-8"><div className="text-center mb-8"><h3 className="text-2xl font-bold mb-4">{t('uc5.roi.headline')}</h3><p className="text-lg text-gray-600">{t('uc5.roi.subtitle')}</p></div><AitendersSimulatorFinal useCase="UC5" /></div>
        </div>
      </motion.section>

      <ChatInterface language="fr" transparent={true} customActions={[
          { label: t('uc5.chat.action1'), icon: <span>+</span>, onClick: () => {} },
          { label: t('uc5.chat.action2'), icon: <MdPlayArrow />, onClick: () => {} },
          { label: t('uc5.chat.action3'), icon: <MdAnalytics />, onClick: () => {} },
          { label: t('uc5.chat.action4'), icon: <MdMail />, onClick: () => {} }
      ]} />
      <div className="h-32"></div>
    </div>
  );
}