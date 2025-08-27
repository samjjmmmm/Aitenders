// client/src/pages/uc6.tsx (FINAL VERSION - USES dangerouslySetInnerHTML)

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  MdCheckCircle, MdWarning, MdDescription, MdAccountBox, MdBusiness, 
  MdEngineering, MdAnalytics, MdStars, MdSecurity, MdGroups,
  MdNotificationsActive, MdHistory, MdTimeline, MdAccountTree, 
  MdTrackChanges, MdQuestionAnswer, MdDashboard, MdTrendingUp, 
  MdPlayArrow, MdMail, MdFlag, MdRotateRight, MdLink,
  MdManageAccounts, MdPerson, MdSwapHoriz, MdArrowForward
} from 'react-icons/md';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import ChatInterface from '@/components/chat-interface';
import ClientLogos from '@/components/client-logos';
import { AitendersSimulatorFinal } from '@/components/aitenders-simulator-final';
import uc6FirstFeatureImage from "@assets/WOW 1_1755862655675.png";
import uc6SecondFeatureImage from "@assets/WOW 2_1755862655676.png";
import uc6ThirdFeatureImage from "@assets/WOW 3_1755862655677.png";
import uc6HeroImage from "@assets/HERO UC 6_1755862567206.png";

// THIS IS THE CORRECT IMPORT FOR YOUR PROJECT
import { useGlobalTranslations } from '@/contexts/TranslationContext';

export default function UC6Page() { // Using a default export as required
  // THIS IS THE CORRECT HOOK FOR YOUR PROJECT
  const { t } = useGlobalTranslations();

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
                <Badge className="mb-8 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-base font-semibold px-4 py-2 rounded-full shadow-sm">
                 {t('uc6.hero.badge')}
                </Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('uc6.hero.title').replace(/<1>/g, '').replace(/<\/1>/g, '')}
                </h1>
                <p className="text-lg md:text-xl mb-16 font-light">
                  {t('uc6.hero.description').replace(/<1>/g, '').replace(/<\/1>/g, '').replace(/<2>/g, '').replace(/<\/2>/g, '')}
                </p>
              </div>
              <div className="mb-16 flex justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl">
                  {t('uc6.hero.ctaButton')}
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-center px-4">
                <img src={uc6HeroImage} alt="Aitenders UC6 Interface" className="w-full max-w-5xl h-auto" style={{ transform: 'scale(1.3)' }} />
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
                {t('uc6.painPoints.headline').replace(/<1>/g, '').replace(/<\/1>/g, '')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-light">
                {t('uc6.painPoints.text1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}
              </p>
              <p className="text-xl text-gray-600 mb-8 font-light">{t('uc6.painPoints.text2')}</p>
              <div className="flex justify-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl">
                  {t('uc6.painPoints.ctaButton')}
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
              {t('uc6.solution.mainTitle').replace(/<1>/g, '').replace(/<\/1>/g, '')}
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">{t('uc6.solution.subtitle')}</h3>
          </div>
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('uc6.solution.feature1.title').replace(/<1>/g, '').replace(/<\/1>/g, '')}
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                {t('uc6.solution.feature1.text1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}
              </p>
              <p className="text-xl text-gray-600 mb-8">{t('uc6.solution.feature1.text2')}</p>
              <div className="flex items-center text-lg font-bold text-blue-500"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc6.solution.feature1.highlight')}</div>
            </div>
            <div className="flex justify-center"><img src={uc6FirstFeatureImage} alt="Native Requirements Tracking" className="w-full max-w-[500px]" /></div>
          </div>
          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 flex justify-center"><img src={uc6SecondFeatureImage} alt="Team Collaboration" className="w-full max-w-[500px]" /></div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                {t('uc6.solution.feature2.title').replace(/<1>/g, '').replace(/<\/1>/g, '')}
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                {t('uc6.solution.feature2.text1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}
              </p>
              <p className="text-xl text-gray-600 mb-8">
                {t('uc6.solution.feature2.text2').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc6.solution.feature2.highlight')}</div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('uc6.solution.feature3.title').replace(/<1>/g, '').replace(/<\/1>/g, '')}
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                {t('uc6.solution.feature3.text1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}
              </p>
              <p className="text-xl text-gray-600 mb-8">
                {t('uc6.solution.feature3.text2').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500"><MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc6.solution.feature3.highlight')}</div>
            </div>
            <div className="flex justify-center"><img src={uc6ThirdFeatureImage} alt="Impact Dashboard" className="w-full max-w-[500px]" /></div>
          </div>
        </div>
      </motion.section>

      {/* Results & KPI Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 md:py-20 px-4 bg-white">
        <div className="content-boundary">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('uc6.results.headline')}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('uc6.results.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border">
                <div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4"><MdAccountBox className="w-6 h-6 text-white" /></div><div><h4 className="text-xl font-bold">{t('uc6.results.card1.title')}</h4><p className="text-sm">{t('uc6.results.card1.subtitle')}</p></div></div>
                <p className="mb-4">{t('uc6.results.card1.description')}</p>
                <ul className="space-y-2"><li>{t('uc6.results.card1.benefit1')}</li><li>{t('uc6.results.card1.benefit2')}</li><li>{t('uc6.results.card1.benefit3')}</li></ul>
              </Card>
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border">
                <div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4"><MdGroups className="w-6 h-6 text-white" /></div><div><h4 className="text-xl font-bold">{t('uc6.results.card2.title')}</h4><p className="text-sm">{t('uc6.results.card2.subtitle')}</p></div></div>
                <p className="mb-4">{t('uc6.results.card2.description')}</p>
                <ul className="space-y-2"><li>{t('uc6.results.card2.benefit1')}</li><li>{t('uc6.results.card2.benefit2')}</li><li>{t('uc6.results.card2.benefit3')}</li><li>{t('uc6.results.card2.benefit4')}</li></ul>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center rounded-3xl"><div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-600 to-emerald-600 mb-3">{t('uc6.kpis.kpi1.value')}</div><p>{t('uc6.kpis.kpi1.description')}</p></div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 text-center rounded-3xl"><div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-violet-600 mb-3">{t('uc6.kpis.kpi2.value')}</div><p>{t('uc6.kpis.kpi2.description')}</p></div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center rounded-3xl"><div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-cyan-600 mb-3">{t('uc6.kpis.kpi3.value')}</div><p>{t('uc6.kpis.kpi3.description')}</p></div>
          </div>
        </div>
      </motion.section>

      {/* Toppings Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative">
        <div className="content-boundary relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 mb-6"><MdStars className="w-5 h-5 text-yellow-400 mr-2" /><span className="text-white font-semibold">{t('uc6.toppings.badge')}</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('uc6.toppings.headline').replace(/<1>/g, '').replace(/<\/1>/g, '')}
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">{t('uc6.toppings.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 p-8 border border-white/20"><h3 className="text-xl font-bold text-white mb-4">{t('uc6.toppings.feature1.title')}</h3><p className="text-gray-200 mb-6">{t('uc6.toppings.feature1.description')}</p><div><span className="text-sm text-blue-400">{t('uc6.toppings.feature1.tag')}</span></div></Card>
            <Card className="bg-white/10 p-8 border border-white/20"><h3 className="text-xl font-bold text-white mb-4">{t('uc6.toppings.feature2.title')}</h3><p className="text-gray-200 mb-6">{t('uc6.toppings.feature2.description')}</p><div><span className="text-sm text-pink-400">{t('uc6.toppings.feature2.tag')}</span></div></Card>
            <Card className="bg-white/10 p-8 border border-white/20"><h3 className="text-xl font-bold text-white mb-4">{t('uc6.toppings.feature3.title')}</h3><p className="text-gray-200 mb-6">{t('uc6.toppings.feature3.description')}</p><div><span className="text-sm text-green-400">{t('uc6.toppings.feature3.tag')}</span></div></Card>
            <Card className="bg-white/10 p-8 border border-white/20"><h3 className="text-xl font-bold text-white mb-4">{t('uc6.toppings.feature4.title')}</h3><p className="text-gray-200 mb-6">{t('uc6.toppings.feature4.description')}</p><div><span className="text-sm text-purple-400">{t('uc6.toppings.feature4.tag')}</span></div></Card>
            <Card className="bg-white/10 p-8 border border-white/20"><h3 className="text-xl font-bold text-white mb-4">{t('uc6.toppings.feature5.title')}</h3><p className="text-gray-200 mb-6">{t('uc6.toppings.feature5.description')}</p><div><span className="text-sm text-orange-400">{t('uc6.toppings.feature5.tag')}</span></div></Card>
          </div>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-8">{t('uc6.toppings.conclusion.text1')}</p>
            <Button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full">
              <span>{t('uc6.toppings.conclusion.ctaButton')}</span><MdArrowForward className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 md:py-20 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('uc6.caseStudies.headline')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('uc6.caseStudies.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white p-8 shadow-lg h-full"><h3 className="text-2xl font-bold mb-3">{t('uc6.caseStudies.project1.title')}</h3><Badge className="bg-purple-100 text-purple-800 mb-4">{t('uc6.caseStudies.project1.badge')}</Badge><div className="text-xl font-bold text-purple-600 mb-4">{t('uc6.caseStudies.project1.details')}</div><p className="mb-6">{t('uc6.caseStudies.project1.description')}</p><h4 className="font-semibold mb-3">{t('uc6.caseStudies.impactLabel')}</h4><div className="space-y-3 text-sm">
                  <div>{t('uc6.caseStudies.project1.impact1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                  <div>{t('uc6.caseStudies.project1.impact2').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                  <div>{t('uc6.caseStudies.project1.impact3').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                </div>
              </Card>
            <Card className="bg-white p-8 shadow-lg h-full"><h3 className="text-2xl font-bold mb-3">{t('uc6.caseStudies.project2.title')}</h3><Badge className="bg-blue-100 text-blue-800 mb-4">{t('uc6.caseStudies.project2.badge')}</Badge><div className="text-xl font-bold text-blue-600 mb-4">{t('uc6.caseStudies.project2.details')}</div><p className="mb-6">{t('uc6.caseStudies.project2.description')}</p><h4 className="font-semibold mb-3">{t('uc6.caseStudies.impactLabel')}</h4>
                <div className="space-y-3 text-sm">
                  <div>{t('uc6.caseStudies.project2.impact1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                  <div>{t('uc6.caseStudies.project2.impact2').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                  <div>{t('uc6.caseStudies.project2.impact3').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                </div>
              </Card>
            <Card className="bg-white p-8 shadow-lg h-full"><h3 className="text-2xl font-bold mb-3">{t('uc6.caseStudies.project3.title')}</h3><Badge className="bg-green-100 text-green-800 mb-4">{t('uc6.caseStudies.project3.badge')}</Badge><div className="text-xl font-bold text-green-600 mb-4">{t('uc6.caseStudies.project3.details')}</div><p className="mb-6">{t('uc6.caseStudies.project3.description')}</p><h4 className="font-semibold mb-3">{t('uc6.caseStudies.impactLabel')}</h4>
                <div className="space-y-3 text-sm">
                  <div>{t('uc6.caseStudies.project3.impact1').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                  <div>{t('uc6.caseStudies.project3.impact2').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                  <div>{t('uc6.caseStudies.project3.impact3').replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</div>
                </div>
              </Card>
          </div>
          <div className="mb-16"><ClientLogos language="fr" /></div>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8"><h3 className="text-2xl font-bold mb-4">{t('uc6.roi.headline')}</h3><p className="text-lg text-gray-600">{t('uc6.roi.subtitle')}</p></div>
            <AitendersSimulatorFinal useCase="UC6" />
          </div>
        </div>
      </motion.section>

      <ChatInterface language="fr" transparent={true} customActions={[
        { label: t('uc6.chat.action1'), icon: <span>+</span>, onClick: () => {} },
        { label: t('uc6.chat.action2'), icon: <MdPlayArrow />, onClick: () => {} },
        { label: t('uc6.chat.action3'), icon: <MdAnalytics />, onClick: () => {} },
        { label: t('uc6.chat.action4'), icon: <MdMail />, onClick: () => {} }
      ]} />
      <div className="h-32"></div>
    </div>
  );
}