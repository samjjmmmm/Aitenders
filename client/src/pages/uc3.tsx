// client/src/pages/uc3.tsx (COMPLETE AND CORRECTED VERSION)

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
  MdCallSplit, MdSchema, MdGppBad, MdSwapHoriz, MdPlayArrow
} from "react-icons/md";
import Header from "@/components/header";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import uc3HeroImage from "@assets/UC 3 HERO_1756195609097.png";
import uc3FirstFeatureImage from "@assets/33_1755170264011.png";
import uc3SecondFeatureImage from "@assets/wow 2_1755694076094.png";
import uc3ThirdFeatureImage from "@assets/wow 3_1755698579312.png";
import ClientLogos from '@/components/ClientLogos';
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import ChatInterface from "@/components/chat-interface";
import { useGlobalTranslations } from '@/contexts/TranslationContext';

export default function UC3Page() {
  const { t } = useGlobalTranslations();

  const useScrollAnimation = () => {
    const [visibleElements, setVisibleElements] = useState(new Set());
    const elementsRef = useRef(new Map());

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute('data-scroll-id');
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set(prev).add(id));
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      elementsRef.current.forEach((element) => {
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, []);

    const registerElement = (id, element) => {
      if (element) {
        elementsRef.current.set(id, element);
      }
    };

    return { visibleElements, registerElement };
  };

  const { visibleElements, registerElement } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-white via-slate-50/20 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background Effects */}</div>
        <div className="content-boundary relative z-10">
          <div ref={(el) => registerElement('hero-main', el)} data-scroll-id="hero-main" className={`text-center transition-all duration-1000 ${visibleElements.has('hero-main') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-5xl mx-auto">
              <div ref={(el) => registerElement('hero-content', el)} data-scroll-id="hero-content" className={`mb-16 transition-all duration-1000 delay-200 ${visibleElements.has('hero-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Badge className="mb-8 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-lg font-semibold px-6 py-3 rounded-full shadow-sm">{t('uc3.hero.badge')}</Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.hero.title', 'Chaque exigence traitée, <span class="text-purple-600">chaque risque maîtrisé</span>') }} />
                </h1>
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.hero.description', 'La seule plateforme pensée pour orchestrer les grands appels d\'offres complexes') }} />
                </p>
              </div>
              <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {t('uc3.hero.demoButton')}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div ref={(el) => registerElement('hero-image', el)} data-scroll-id="hero-image" className={`relative w-full max-w-4xl transition-all duration-1000 delay-500 ${visibleElements.has('hero-image') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img src={uc3HeroImage} alt="Aitenders UC3 Interface" className="w-full h-auto" style={{ transform: 'scale(0.9)', transformOrigin: 'center', objectFit: 'contain', filter: 'drop-shadow(0 8px 32px rgba(56, 128, 232, 0.2))' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background Effects */}</div>
        <div ref={(el) => registerElement('pain-points', el)} data-scroll-id="pain-points" className={`transition-all duration-1000 ${visibleElements.has('pain-points') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="content-boundary relative z-10">
            <div ref={(el) => registerElement('main-feature-card', el)} data-scroll-id="main-feature-card" className={`bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20 transition-all duration-1000 delay-300 ${visibleElements.has('main-feature-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/25 rounded-3xl">{/* Background Pattern */}</div>
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.painPoints.headline', 'Zéro angle mort, <span class="text-purple-600">zéro surprise</span>') }} />
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.painPoints.text1', 'Dans les grands appels d\'offres, les équipes gaspillent un <span class="text-grey-500 font-bold">temps critique</span> à vérifier manuellement la conformité') }} />
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{t('uc3.painPoints.text2')}</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button onClick={() => document.querySelector('[data-scroll-id="simulator-section"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                    {t('uc3.painPoints.ctaButton')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background Effects */}</div>
        <div ref={(el) => registerElement('solution-section', el)} data-scroll-id="solution-section" className={`transition-all duration-1000 ${visibleElements.has('solution-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="content-boundary relative z-10">
            <div ref={(el) => registerElement('solution-header', el)} data-scroll-id="solution-header" className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${visibleElements.has('solution-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.mainTitle', 'Votre <span class="text-purple-600">copilote IA</span> qui simplifie la gestion des appels d\'offres complexes') }} />
              </h1>
              <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t('uc3.solution.subtitle')}</h3>
            </div>
            {/* Feature 1 */}
            <div ref={(el) => registerElement('feature-1', el)} data-scroll-id="feature-1" className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-400 ${visibleElements.has('feature-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="order-1 pr-4 lg:pr-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.feature1.title', 'Démarrez le projet sur une donnée <span class="text-purple-600">pré-organisée</span> et intelligente dès le jour 1') }} />
                </h3>
                <div className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.feature1.text', 'Grâce aux assistants IA, les documents sont automatiquement structurés en base de données') }} />
                </div>
                <div className="flex items-center text-lg font-bold text-blue-500">
                  <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc3.solution.feature1.highlight')}
                </div>
              </div>
              <div className="order-2 flex justify-center"><img src={uc3FirstFeatureImage} alt="AI Analysis" className="w-full h-auto max-w-[500px] rounded-2xl shadow-2xl" /></div>
            </div>
            {/* Feature 2 */}
            <div ref={(el) => registerElement('feature-2', el)} data-scroll-id="feature-2" className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-600 ${visibleElements.has('feature-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="order-2 lg:order-1 flex justify-center"><img src={uc3SecondFeatureImage} alt="Collaboration" className="w-full h-auto max-w-[500px] rounded-2xl shadow-2xl" /></div>
              <div className="order-1 lg:order-2 pl-4 lg:pl-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.feature2.title', 'Collaborez entre experts sans friction, assurez la <span class="text-purple-600">conformité</span> initiale sans effort') }} />
                </h3>
                <div className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.feature2.text', 'Aitenders permet de générer de manière collaborative et structurée la matrice de conformité') }} />
                </div>
                <div className="flex items-center text-lg text-gray-500">
                  <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" /><span className="font-bold text-blue-500">{t('uc3.solution.feature2.highlight')}</span>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div ref={(el) => registerElement('feature-3', el)} data-scroll-id="feature-3" className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center transition-all duration-1000 delay-800 ${visibleElements.has('feature-3') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="order-1 pr-4 lg:pr-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.feature3.title', 'Pilotez chaque <span class="text-purple-600">évolution</span> de l\'offre, sans rien laisser passer') }} />
                </h3>
                <div className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.solution.feature3.text', 'Les changements documentaires sont détectés et versionnés automatiquement') }} />
                </div>
                <div className="flex items-center text-lg font-bold text-blue-500">
                  <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />{t('uc3.solution.feature3.highlight')}
                </div>
              </div>
              <div className="order-2 flex justify-center"><img src={uc3ThirdFeatureImage} alt="Evolution Tracking" className="w-full h-auto max-w-[500px]" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div ref={(el) => registerElement('kpi-section', el)} data-scroll-id="kpi-section" className={`content-boundary transition-all duration-1000 ${visibleElements.has('kpi-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div ref={(el) => registerElement('user-results', el)} data-scroll-id="user-results" className={`mb-20 md:mb-24 lg:mb-28 transition-all duration-1000 delay-200 ${visibleElements.has('user-results') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{t('uc3.results.headline')}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('uc3.results.subtitle')}</p>
            </div>
            <div ref={(el) => registerElement('results-grid', el)} data-scroll-id="results-grid" className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 delay-400 ${visibleElements.has('results-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4"><MdAccountBox className="w-6 h-6 text-white" /></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{t('uc3.results.card1.title')}</h4>
                      <p className="text-sm text-gray-600">{t('uc3.results.card1.subtitle')}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">{t('uc3.results.card1.text')}</p>
                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>{t('uc3.results.card1.benefit1')}</span></li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>{t('uc3.results.card1.benefit2')}</span></li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>{t('uc3.results.card1.benefit3')}</span></li>
                    <li className="flex items-start"><span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>{t('uc3.results.card1.benefit4')}</span></li>
                  </ul>
                </Card>
              </div>
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4"><MdEngineering className="w-6 h-6 text-white" /></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{t('uc3.results.card2.title')}</h4>
                      <p className="text-sm text-gray-600">{t('uc3.results.card2.subtitle')}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">{t('uc3.results.card2.text')}</p>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                    <div className="flex items-start"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{t('uc3.results.card2.benefit1')}</span></div>
                    <div className="flex items-start"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{t('uc3.results.card2.benefit2')}</span></div>
                    <div className="flex items-start"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{t('uc3.results.card2.benefit3')}</span></div>
                    <div className="flex items-start"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{t('uc3.results.card2.benefit4')}</span></div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div ref={(el) => registerElement('kpi-grid', el)} data-scroll-id="kpi-grid" className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${visibleElements.has('kpi-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group"><div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]"><div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">{t('uc3.kpis.kpi1.value')}</div><p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc3.kpis.kpi1.description')}</p></div></div>
            <div className="group"><div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]"><div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">{t('uc3.kpis.kpi2.value')}</div><p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc3.kpis.kpi2.description')}</p></div></div>
            <div className="group"><div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]"><div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">{t('uc3.kpis.kpi3.value')}</div><p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc3.kpis.kpi3.description')}</p></div></div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">{/* Background Effects */}</div>
        <div ref={(el) => registerElement('toppings-section', el)} data-scroll-id="toppings-section" className={`transition-all duration-1000 ${visibleElements.has('toppings-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="content-boundary relative z-10">
            <div ref={(el) => registerElement('toppings-header', el)} data-scroll-id="toppings-header" className={`text-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-200 ${visibleElements.has('toppings-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"><MdStars className="w-5 h-5 text-yellow-400 mr-2" /><span className="text-white font-semibold text-sm md:text-base">{t('uc3.toppings.badge')}</span></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: t('uc3.toppings.headline', 'Des parcours additionnels qui <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">transforment</span> votre expérience') }} />
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">{t('uc3.toppings.subtitle')}</p>
            </div>
            <div ref={(el) => registerElement('toppings-grid', el)} data-scroll-id="toppings-grid" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 transition-all duration-1000 delay-400 ${visibleElements.has('toppings-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6"><MdCloudSync className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc3.toppings.feature1.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('uc3.toppings.feature1.description')}</p><div className="flex items-center text-cyan-400 font-medium"><span className="text-sm">{t('uc3.toppings.feature1.tag')}</span><MdTrendingUp className="w-4 h-4 ml-2" /></div></div></div>
              <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6"><MdCreate className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc3.toppings.feature2.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('uc3.toppings.feature2.description')}</p><div className="flex items-center text-green-400 font-medium"><span className="text-sm">{t('uc3.toppings.feature2.tag')}</span><MdAutoAwesome className="w-4 h-4 ml-2" /></div></div></div>
              <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6"><MdSwapHoriz className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc3.toppings.feature3.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('uc3.toppings.feature3.description')}</p><div className="flex items-center text-orange-400 font-medium"><span className="text-sm">{t('uc3.toppings.feature3.tag')}</span><MdLink className="w-4 h-4 ml-2" /></div></div></div>
              <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6"><MdAccountTree className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc3.toppings.feature4.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('uc3.toppings.feature4.description')}</p><div className="flex items-center text-purple-400 font-medium"><span className="text-sm">{t('uc3.toppings.feature4.tag')}</span><MdTrackChanges className="w-4 h-4 ml-2" /></div></div></div>
              <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6"><MdCallSplit className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc3.toppings.feature5.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('uc3.toppings.feature5.description')}</p><div className="flex items-center text-pink-400 font-medium"><span className="text-sm">{t('uc3.toppings.feature5.tag')}</span><MdSchema className="w-4 h-4 ml-2" /></div></div></div>
              <div className="group"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"><div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6"><MdGppBad className="w-8 h-8 text-white" /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc3.toppings.feature6.title')}</h3><p className="text-gray-200 leading-relaxed mb-6">{t('uc3.toppings.feature6.description')}</p><div className="flex items-center text-red-400 font-medium"><span className="text-sm">{t('uc3.toppings.feature6.tag')}</span><MdWarning className="w-4 h-4 ml-2" /></div></div></div>
              <div className="group md:col-span-2 lg:col-span-3"><div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"><div className="flex flex-col md:flex-row items-start md:items-center gap-8"><div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center"><MdTimeline className="w-8 h-8 text-white" /></div><div className="flex-1"><h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('uc3.toppings.security.title', 'Sécurité et Gouvernance Avancée')}</h3><p className="text-gray-200 text-lg leading-relaxed mb-6">{t('uc3.toppings.security.text', 'Contrôles de conformité automatisés et traçabilité complète pour les environnements enterprise')}</p><div className="flex flex-wrap gap-4"><div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg"><span className="text-sm">{t('uc3.toppings.security.tag1', 'Conformité Auto')}</span><MdRotateRight className="w-4 h-4 ml-2" /></div><div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg"><span className="text-sm">{t('uc3.toppings.security.tag2', 'Audit Trail')}</span><MdFlag className="w-4 h-4 ml-2" /></div></div></div></div></div></div>
            </div>
            <div className="text-center mt-16 md:mt-24">
              <p className="text-gray-200 text-lg mb-8">{t('uc3.toppings.conclusion', 'Transformez vos processus d\'appels d\'offres avec des fonctionnalités qui s\'adaptent à vos besoins spécifiques.')}</p>
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">{t('uc3.toppings.ctaButton', 'Découvrir toutes les fonctionnalités')}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div ref={(el) => registerElement('projects-section', el)} data-scroll-id="projects-section" className={`content-boundary transition-all duration-1000 ${visibleElements.has('projects-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div ref={(el) => registerElement('projects-header', el)} data-scroll-id="projects-header" className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${visibleElements.has('projects-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              <span dangerouslySetInnerHTML={{ __html: t('uc3.projects.headline', 'Nos <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">projets référence</span> sur les appels d\'offres complexes') }} />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">{t('uc3.projects.subtitle', 'Découvrez comment nos clients maîtrisent leurs appels d\'offres complexes avec nos solutions.')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            {/* Project 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full"><h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc3.projects.project1.title', 'Infrastructure Métropolitaine')}</h3><div className="mb-4"><Badge className="bg-purple-100 text-purple-800 font-medium">{t('uc3.projects.project1.badge', 'Transport')}</Badge></div><div className="text-xl font-bold text-purple-600 mb-4">{t('uc3.projects.project1.offer', 'Offre: 45,2 M€')}</div><p className="text-gray-600 leading-relaxed mb-6">{t('uc3.projects.project1.description', 'Extension de réseau ferroviaire urbain avec 12 stations, systèmes de signalisation avancés et intégration multimodale.')}</p><div className="space-y-3"><h4 className="font-semibold text-gray-900 mb-3">{t('uc3.projects.impactLabel', 'Impact client:')}</h4>
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project1.impact1', '<strong>Conformité 100%</strong> dès la première soumission') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project1.impact2', '<strong>Coordination</strong> optimisée entre 8 lots techniques') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project1.impact3', '<strong>Réduction</strong> de 60% des cycles de validation') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project1.impact4', '<strong>Traçabilité</strong> complète des exigences critiques') }} />
              </div></div>
            </motion.div>
            {/* Project 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full"><h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc3.projects.project2.title', 'Hôpital Universitaire')}</h3><div className="mb-4"><Badge className="bg-blue-100 text-blue-800 font-medium">{t('uc3.projects.project2.badge', 'Santé')}</Badge></div><div className="text-xl font-bold text-blue-600 mb-4">{t('uc3.projects.project2.offer', 'Offre: 28,7 M€')}</div><p className="text-gray-600 leading-relaxed mb-6">{t('uc3.projects.project2.description', 'Construction d\'un complexe hospitalier avec blocs opératoires, imagerie médicale et systèmes de gestion intégrés.')}</p><div className="space-y-3"><h4 className="font-semibold text-gray-900 mb-3">{t('uc3.projects.impactLabel', 'Impact client:')}</h4>
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project2.impact1', '<strong>Coordination</strong> fluide entre équipes médicales et techniques') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project2.impact2', '<strong>Respect</strong> strict des normes sanitaires complexes') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project2.impact3', '<strong>Pilotage</strong> en temps réel des évolutions réglementaires') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project2.impact4', '<strong>Livraison</strong> conforme aux délais critiques') }} />
              </div></div>
            </motion.div>
            {/* Project 3 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full"><h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc3.projects.project3.title', 'Data Center International')}</h3><div className="mb-4"><Badge className="bg-green-100 text-green-800 font-medium">{t('uc3.projects.project3.badge', 'Tech')}</Badge></div><div className="text-xl font-bold text-green-600 mb-4">{t('uc3.projects.project3.offer', 'Offre: 18,9 M€')}</div><p className="text-gray-600 leading-relaxed mb-6">{t('uc3.projects.project3.description', 'Déploiement d\'infrastructure cloud avec redondance géographique et systèmes de sécurité avancés.')}</p><div className="space-y-3"><h4 className="font-semibold text-gray-900 mb-3">{t('uc3.projects.impactLabel', 'Impact client:')}</h4>
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project3.impact1', '<strong>Sécurité</strong> maximale avec conformité internationale') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project3.impact2', '<strong>Évolutivité</strong> garantie pour croissance future') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project3.impact3', '<strong>Performance</strong> optimisée avec monitoring continu') }} />
                <div dangerouslySetInnerHTML={{ __html: t('uc3.projects.project3.impact4', '<strong>Intégration</strong> harmonieuse avec systèmes existants') }} />
              </div></div>
            </motion.div>
          </div>
          <div ref={(el) => registerElement('client-logos', el)} data-scroll-id="client-logos" className={`mb-16 md:mb-20 transition-all duration-1000 delay-600 ${visibleElements.has('client-logos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ClientLogos />
          </div>
          <div ref={(el) => registerElement('simulator-section', el)} data-scroll-id="simulator-section" className={`bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden transition-all duration-1000 delay-800 ${visibleElements.has('simulator-section') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-purple-100 rounded-full border border-purple-200 mb-6"><MdAnalytics className="w-5 h-5 text-purple-600 mr-2" /><span className="text-purple-700 font-semibold text-sm">{t('uc3.roi.badge')}</span></div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span dangerouslySetInnerHTML={{ __html: t('uc3.roi.headline', 'Calculez votre <span class="text-purple-600">ROI</span> en temps réel') }} />
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('uc3.roi.subtitle', 'Découvrez l\'impact financier d\'Aitenders sur votre activité projets complexes')}</p>
              </div>
              <AitendersSimulatorFinal useCase="UC3" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <ChatInterface
        language="fr" // This should probably be dynamic based on the app's language state
        transparent={true}
        customActions={[
          { label: t('uc3.chat.action1', 'Nos cas d\'usage'), icon: <span className="text-gray-400">+</span>, onClick: () => {} },
          { label: t('uc3.chat.action2', 'Démo UC3'), icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />, onClick: () => {} },
          { label: t('uc3.chat.action3', 'Calculatrice ROI'), icon: <MdAnalytics className="w-3 h-3 text-gray-400" />, onClick: () => {} },
          { label: t('uc3.chat.action4', 'Contacter Expert'), icon: <MdMail className="w-3 h-3 text-gray-400" />, onClick: () => {} }
        ]}
      />
      <div className="h-32"></div>
    </div>
  );
}