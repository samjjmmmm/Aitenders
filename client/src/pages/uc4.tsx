// client/src/pages/uc4.tsx (FINAL VERSION WITH <Trans> COMPONENT)

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MdCheckCircle, MdWarning, MdTrendingUp, MdSecurity,
  MdFlashOn, MdGpsFixed, MdVerified, MdAnalytics,
  MdGroups, MdDescription, MdAccountBox, MdBusiness,
  MdEngineering, MdGavel, MdTimeline,
  MdRotateRight, MdFlag, MdMail, MdStars,
  MdCreate, MdAutoAwesome, MdLink, MdAccountTree, MdTrackChanges,
  MdCallSplit, MdSchema, MdGppBad, MdSwapHoriz, MdPlayArrow,
  MdShare, MdQuestionAnswer, MdSearch
} from "react-icons/md";
import Header from "@/components/header";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ChatInterface from "@/components/chat-interface";
import ClientLogos from "@/components/client-logos";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import uc4HeroImage from "@assets/HERO UC 4_1755793077078.png";
import uc4FirstFeatureImage from "@assets/wow 1_1755793034506.png";
import uc4SecondFeatureImage from "@assets/wow 2_1755706536721.png";
import uc4ThirdFeatureImage from "@assets/43_1755177874563.png";

// Correct import for your project's translation system
import { useGlobalTranslations } from '@/contexts/TranslationContext';
// Import the special <Trans> component
import { Trans } from 'react-i18next';

export default function UC4Page() {
  // Correct function call for your project
  const { t } = useGlobalTranslations();

  useEffect(() => {
    // Scroll animation logic...
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative">
        <div className="content-boundary relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="mb-8 md:mb-12">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 font-semibold px-4 py-2 rounded-full">
                {t('uc4.hero.badge')}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <Trans i18nKey="uc4.hero.mainTitle" t={t} components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" /> }} />
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8">
              <Trans i18nKey="uc4.hero.subtitle" t={t} components={{ 1: <span className="text-purple-600 font-semibold" /> }} />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">{t('uc4.hero.description')}</p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl">
              {t('uc4.hero.ctaButton')}
            </Button>
          </div>
          <div className="flex justify-center">
            <img src={uc4HeroImage} alt="Aitenders UC4 Interface" className="w-full max-w-6xl h-auto" />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative">
        <div className="content-boundary relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 mb-20">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <Trans i18nKey="uc4.painPoints.headline" t={t} components={{ 1: <span className="text-purple-600" /> }} />
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{t('uc4.painPoints.text1')}</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{t('uc4.painPoints.text2')}</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{t('uc4.painPoints.text3')}</p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl">
                {t('uc4.painPoints.ctaButton')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative">
        <div className="content-boundary relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <Trans i18nKey="uc4.solution.mainTitle" t={t} components={{ 1: <span className="text-blue-600" /> }} />
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">{t('uc4.solution.subtitle')}</h3>
          </div>
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <Trans i18nKey="uc4.solution.feature1.title" t={t} components={{ 1: <span className="text-purple-600" /> }} />
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <Trans i18nKey="uc4.solution.feature1.description" t={t} components={{ 1: <span className="text-purple-600" /> }} />
              </p>
              <div className="flex items-center text-lg font-bold text-purple-600"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc4.solution.feature1.highlight')}</div>
            </div>
            <div className="flex justify-center"><img src={uc4FirstFeatureImage} alt="Intelligent Contract Sheet" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl" /></div>
          </div>
          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <Trans i18nKey="uc4.solution.feature2.title" t={t} components={{ 1: <span className="text-green-600" /> }} />
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <Trans i18nKey="uc4.solution.feature2.description" t={t} components={{ 1: <span className="text-green-600" /> }} />
              </p>
              <div className="flex items-center text-lg font-bold text-green-600"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc4.solution.feature2.highlight')}</div>
            </div>
            <div className="order-2 lg:order-1 flex justify-center"><img src={uc4SecondFeatureImage} alt="Targeted Clause Access" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl" /></div>
          </div>
          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <Trans i18nKey="uc4.solution.feature3.title" t={t} components={{ 1: <span className="text-indigo-600" /> }} />
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <Trans i18nKey="uc4.solution.feature3.description" t={t} components={{ 1: <span className="text-indigo-600" /> }} />
              </p>
              <div className="flex items-center text-lg font-bold text-indigo-600"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc4.solution.feature3.highlight')}</div>
            </div>
            <div className="flex justify-center"><img src={uc4ThirdFeatureImage} alt="Contractual Q&A" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl" /></div>
          </div>
        </div>
      </section>

      {/* Results & KPI Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          <div className="mb-20 md:mb-24">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('uc4.results.headline')}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('uc4.results.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <Card className="h-full p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4"><MdAccountBox className="w-6 h-6 text-white" /></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{t('uc4.results.card1.title')}</h4>
                    <p className="text-sm text-gray-600">{t('uc4.results.card1.subtitle')}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{t('uc4.results.card1.description')}</p>
                <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card1.benefit1')}</li>
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card1.benefit2')}</li>
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card1.benefit3')}</li>
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card1.benefit4')}</li>
                </ul>
              </Card>
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4"><MdEngineering className="w-6 h-6 text-white" /></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{t('uc4.results.card2.title')}</h4>
                    <p className="text-sm text-gray-600">{t('uc4.results.card2.subtitle')}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{t('uc4.results.card2.description')}</p>
                <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card2.benefit1')}</li>
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card2.benefit2')}</li>
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card2.benefit3')}</li>
                  <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{t('uc4.results.card2.benefit4')}</li>
                </ul>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 text-center"><div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">{t('uc4.kpis.kpi1.value')}</div><p className="text-sm text-gray-700">{t('uc4.kpis.kpi1.description')}</p></div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 text-center"><div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">{t('uc4.kpis.kpi2.value')}</div><p className="text-sm text-gray-700">{t('uc4.kpis.kpi2.description')}</p></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 text-center"><div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">{t('uc4.kpis.kpi3.value')}</div><p className="text-sm text-gray-700">{t('uc4.kpis.kpi3.description')}</p></div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative">
        <div className="content-boundary relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 rounded-full border border-white/20 mb-6"><MdStars className="w-5 h-5 text-yellow-400 mr-2" /><span className="text-white font-semibold">{t('uc4.toppings.badge')}</span></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <Trans i18nKey="uc4.toppings.headline" t={t} components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400" /> }} />
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">{t('uc4.toppings.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8"><div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6"><MdSearch className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold text-white mb-4">{t('uc4.toppings.feature1.title')}</h3><p className="text-gray-200 mb-6">{t('uc4.toppings.feature1.description')}</p><div className="flex items-center text-green-400"><span className="text-sm">{t('uc4.toppings.feature1.tag')}</span><MdTrendingUp className="w-4 h-4 ml-2" /></div></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8"><div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6"><MdQuestionAnswer className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold text-white mb-4">{t('uc4.toppings.feature2.title')}</h3><p className="text-gray-200 mb-6">{t('uc4.toppings.feature2.description')}</p><div className="flex items-center text-indigo-400"><span className="text-sm">{t('uc4.toppings.feature2.tag')}</span><MdAutoAwesome className="w-4 h-4 ml-2" /></div></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8"><div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6"><MdShare className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold text-white mb-4">{t('uc4.toppings.feature3.title')}</h3><p className="text-gray-200 mb-6">{t('uc4.toppings.feature3.description')}</p><div className="flex items-center text-pink-400"><span className="text-sm">{t('uc4.toppings.feature3.tag')}</span><MdTrackChanges className="w-4 h-4 ml-2" /></div></div>
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-200 text-lg mb-8">{t('uc4.toppings.conclusion')}</p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl">{t('uc4.toppings.ctaButton')}</Button>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <Trans i18nKey="uc4.projects.headline" t={t} components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600" /> }} />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">{t('uc4.projects.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc4.projects.project1.title')}</h3>
                <Badge className="bg-purple-100 text-purple-800 mb-4">{t('uc4.projects.project1.badge')}</Badge>
                <div className="text-xl font-bold text-purple-600 mb-4">{t('uc4.projects.project1.contract')}</div>
                <p className="text-gray-600 mb-6">{t('uc4.projects.project1.description')}</p>
                <h4 className="font-semibold text-gray-900 mb-3">{t('uc4.projects.impactLabel')}</h4>
                <div className="space-y-3 text-sm text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project1.impact1') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project1.impact2') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project1.impact3') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project1.impact4') }} />
                </div>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
               <Card className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc4.projects.project2.title')}</h3>
                <Badge className="bg-blue-100 text-blue-800 mb-4">{t('uc4.projects.project2.badge')}</Badge>
                <div className="text-xl font-bold text-blue-600 mb-4">{t('uc4.projects.project2.contract')}</div>
                <p className="text-gray-600 mb-6">{t('uc4.projects.project2.description')}</p>
                <h4 className="font-semibold text-gray-900 mb-3">{t('uc4.projects.impactLabel')}</h4>
                <div className="space-y-3 text-sm text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project2.impact1') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project2.impact2') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project2.impact3') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project2.impact4') }} />
                </div>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
               <Card className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc4.projects.project3.title')}</h3>
                <Badge className="bg-green-100 text-green-800 mb-4">{t('uc4.projects.project3.badge')}</Badge>
                <div className="text-xl font-bold text-green-600 mb-4">{t('uc4.projects.project3.contract')}</div>
                <p className="text-gray-600 mb-6">{t('uc4.projects.project3.description')}</p>
                <h4 className="font-semibold text-gray-900 mb-3">{t('uc4.projects.impactLabel')}</h4>
                <div className="space-y-3 text-sm text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project3.impact1') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project3.impact2') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project3.impact3') }} />
                    <div dangerouslySetInnerHTML={{ __html: t('uc4.projects.project3.impact4') }} />
                </div>
              </Card>
            </motion.div>
          </div>
          <ClientLogos />
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('uc4.roi.headline')}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('uc4.roi.subtitle')}</p>
            </div>
            <div className="max-w-4xl mx-auto"><AitendersSimulatorFinal /></div>
          </div>
        </div>
      </section>

      <ChatInterface language="fr" transparent={true} customActions={[
        { label: t('uc4.chat.action1'), icon: <span>+</span>, onClick: () => {} },
        { label: t('uc4.chat.action2'), icon: <MdPlayArrow />, onClick: () => {} },
        { label: t('uc4.chat.action3'), icon: <MdAnalytics />, onClick: () => {} },
        { label: t('uc4.chat.action4'), icon: <MdMail />, onClick: () => {} }
      ]} />
      <div className="h-32"></div>
    </div>
  );
}