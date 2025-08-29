import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalTranslations } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import DemoCTAButton from "@/components/demo-cta-button";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import { FaCheckCircle, FaLightbulb, FaEye, FaArchive, FaFileAlt, FaChartLine } from 'react-icons/fa';
import uc1HeroImage from "@assets/UC1 HERO_1756117718476.png";
import featureImage1 from "@assets/wow 1_1756122537818.png";
import featureImage2 from "@assets/wow 2_1756122537819.png";
import featureImage3 from "@assets/wow 3_1756122537813.png";

type TabId = 'structuration' | 'vision' | 'validation' | 'simulator';

export default function UC1Slack() {
  const { t } = useGlobalTranslations();
  const [activeTab, setActiveTab] = useState<TabId>('structuration');

  // Function to scroll to simulator section
  const scrollToSimulator = () => {
    const simulatorSection = document.getElementById('roi-simulator-section');
    if (simulatorSection) {
      simulatorSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const tabs = [
    { id: 'structuration' as TabId, label: 'Structuration IA', icon: FaEye },
    { id: 'vision' as TabId, label: 'Vision Claire', icon: FaFileAlt },
    { id: 'validation' as TabId, label: 'Validation Guidée', icon: FaCheckCircle },
    { id: 'simulator' as TabId, label: 'Simulateur ROI', icon: FaChartLine }
  ];

  const tabContent: Record<TabId, {
    title: string;
    description: string;
    stat?: string;
    statLabel?: string;
    image: string;
    content?: string;
  }> = {
    structuration: {
      title: t('uc1.solution_section.feature1_section_title') || 'Structuration instantanée pour un premier "go / no-go" immédiat',
      description: t('uc1.solution_section.feature1_text') || 'Grâce aux assistants IA, vos documents sont instantanément analysés, classés et priorisés : critères d\'intérêt, points critiques et preuves associées sont détectés en quelques minutes.',
      content: t('uc1.solution_section.feature1_text2') || 'Le Responsable Offre démarre ainsi avec une base claire et exploitable : vision globale du projet, identification des points bloquants éventuels et possibilité de décider quasi immédiatement d\'un "go / no-go".',
      image: featureImage1
    },
    vision: {
      title: t('uc1.solution.feature2.title') || 'Accédez à une vision claire de votre projet',
      description: t('uc1.solution.feature2.text1') || 'Aitenders génère une vue claire et priorisée de l\'ensemble des critères détectés, avec leurs valeurs et les liens directs vers les documents sources.',
      content: t('uc1.solution.feature2.text2') || 'Le Responsable Offre n\'a plus besoin de parcourir des centaines de pages ou de jongler entre plusieurs fichiers : tout est rassemblé dans une synthèse visuelle, exploitable immédiatement.',
      image: featureImage2
    },
    validation: {
      title: t('uc1.solution.feature3.title') || 'Validez et archivez chaque point sans effort',
      description: t('uc1.solution.feature3.text1') || 'Aitenders vous guide pas à pas pour confirmer, ajuster ou rejeter chaque élément identifié par l\'IA. Chaque validation est automatiquement tracée et historisée, créant un dossier de preuves complet.',
      content: t('uc1.solution.feature3.text2') || 'Le responsable d\'offre passe d\'une validation manuelle, lente et incertaine à un processus fluide, sécurisé et incontestable.',
      image: featureImage3
    },
    simulator: {
      title: 'Calculez votre ROI avec notre simulateur intelligent',
      description: 'Estimez précisément les gains de temps et d\'efficacité que vous obtiendrez avec Aitenders selon votre volume d\'appels d\'offres.',
      content: 'Notre IA analyse vos réponses et génère un rapport personnalisé avec des recommandations adaptées à votre organisation.',
      image: uc1HeroImage
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Slack Style */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="mb-8">
                <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300 text-sm md:text-base font-semibold px-6 py-2 rounded-full">
                  {t('uc1.hero.badge') || 'Accélérez l\'Analyse Des Offres Répétitives'}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Une analyse go/no go <span className="text-purple-600">immédiate</span>, 
                <br />
                alignée avec vos <span className="text-purple-600">processus internes</span>.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('uc1.hero.description') || 'La seule plateforme pensée pour les petits projets à cycles courts : Agents IA d\'analyse des points clés, automatisation d\'une synthèse et validation guidée. Vous transformez des heures de relecture et d\'analyse en'} <span className="font-semibold text-purple-600">{t('uc1.hero.description_span') || 'minutes'}</span>, {t('uc1.hero.description2') || 'gagnez en sérénité et livrez une offre solide et incontestable — sans surcharge ni faux départs.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <DemoCTAButton className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold">
                  {t('uc1.hero.demoButton') || 'Réservez une Démo'}
                </DemoCTAButton>
                <Button 
                  onClick={scrollToSimulator}
                  variant="outline" 
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold"
                >
                  Calculer mon ROI
                </Button>
              </div>

              <img
                src={uc1HeroImage}
                alt="Aitenders UC1 Interface - Fast Analysis and Go/No-Go Decision Dashboard"
                className="w-full max-w-5xl mx-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Company Logos */}
            <div className="border-t pt-12 mt-16">
              <p className="text-gray-500 text-sm mb-8 font-medium">
                Les leaders du BTP nous font confiance
              </p>
              <ClientLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Slack Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('uc1.painPoints.headline') || 'Go / No-Go immédiat'}, <span className="text-purple-600">{t('uc1.painPoints.headline_span') || 'process interne garanti'}</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              {t('uc1.painPoints.text1') || 'Sur les petits projets, la pression est double : analyser vite et prouver que tout a été lu, compris et contrôlé.'}
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('uc1.painPoints.text2') || 'Sans support transversal (qualité, juridique), chaque oubli peut coûter cher en marge en exécution et du coup en crédibilité interne.'} 
              {t('uc1.painPoints.text3') || 'Avec Aitenders, vous obtenez en quelques minutes une vision claire et priorisée de vos documents pour un go/no-go'} 
              <span className="font-semibold text-purple-600">{t('uc1.painPoints.text2_span') || 'immédiat'}</span>. {t('uc1.painPoints.text4') || 'La plateforme guide ensuite la validation et archive chaque contrôle, garantissant que vos obligations internes sont remplies sans surcharge.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToSimulator}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-medium"
              >
                {t('uc1.painPoints.optimizeButton') || 'Boostez Vos Petits Projets!'}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Tabbed Feature Section - Slack Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('uc1.solution_section.mainTitle') || 'Votre'} <span className="text-purple-600">{t('uc1.solution_section.mainTitle_span') || 'copilote IA'}</span> {t('uc1.solution_section.mainTitle2') || 'qui accélère l\'analyse de vos petits projets'}
            </h2>
            <p className="text-xl text-gray-600">
              {t('uc1.solution_section.subtitle') || 'Décidez vite et prouvez que tout a été contrôlé, en moins de 48h.'}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
                {tabContent[activeTab].content && (
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {tabContent[activeTab].content}
                  </p>
                )}
                {activeTab === 'simulator' && (
                  <Button 
                    onClick={scrollToSimulator}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-medium"
                  >
                    Commencer le simulateur
                  </Button>
                )}
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <img
                  src={tabContent[activeTab].image}
                  alt={`${tabContent[activeTab].title} Feature`}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Results/Testimonials Section - Slack Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('uc1.results.headline') || 'Ce que nos utilisateurs obtiennent concrètement pour les'} <span className="text-purple-600">{t('uc1.results_section.kpis.serenity') || 'petites offres'}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t('uc1.results.subtitle') || 'Des résultats mesurés sur nos clients les plus actifs'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Testimonial 1 */}
            <Card className="bg-purple-50 border-purple-200 p-8">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="w-6 h-6 text-purple-600 mr-2" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('uc1.results.testimonial1.title') || 'Directeur Commercial ou Directeur des Offres'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('uc1.results.testimonial1.subtitle') || 'Décision rapide, process validé, crédibilité renforcée'}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                {t('uc1.results.testimonial1.content') || 'Obtenez en moins de 48h une analyse complète et documentée, prête à présenter. Vous décidez dès le premier jour grâce à un go / no-go immédiat et démontrez que chaque point a été contrôlé et validé. Cette approche garantit la transparence, réduit les allers-retours internes et renforce la confiance lors des comités.'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.point1') || 'Décision éclairée dès J+1 grâce à une analyse instantanée'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.point2') || 'Process interne respecté et intégralement tracé'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.point3') || 'Transparence totale sur les points critiques'}
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-green-50 border-green-200 p-8">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="w-6 h-6 text-green-600 mr-2" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('uc1.results.testimonial2.title') || 'Responsable Offre, Chef de Projet, Assistants commercial'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('uc1.results.testimonial2.subtitle') || 'Analyse rapide, validation fluide, sérénité retrouvée'}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                {t('uc1.results.testimonial2.content') || 'Travaillez dès le premier jour sur une base IA déjà structurée et priorisée, sans retraitement manuel. Vous disposez d\'une vue synthétique et actionnable des points à valider, d\'un accès immédiat aux preuves et d\'un suivi clair de vos validations. Résultat : moins de stress, un gain de temps massif et la capacité de démontrer à tout moment que tout a été contrôlé et tracé.'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.point1') || 'Moins de relectures, plus de décisions stratégiques'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.point2') || 'Chaque point couvert, chaque preuve archivée'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.point3') || 'Crédibilité renforcée face aux décideurs internes'}
                </div>
              </div>
            </Card>
          </div>

          {/* KPI Grid - Slack Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* KPI 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-6 md:p-8 text-center border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  {t('uc1.results.kpi1.value') || '-50% à -70%'}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('uc1.results.kpi1.title') || 'Gain de temps'}</div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc1.results.kpi1.desc') || 'Réduction du temps d\'analyse des documents'}</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-6 md:p-8 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  {t('uc1.results.kpi2.value') || '100%'}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('uc1.results.kpi2.title') || 'Conformité'}</div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc1.results.kpi2.desc') || 'Critères critiques vérifiés et documentés'}</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-6 md:p-8 text-center border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  {t('uc1.results.kpi3.value') || 'Sérénité maximale'}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('uc1.results.kpi3.title') || 'Impact organisationnel'}</div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc1.results.kpi3.desc') || 'Process validé et confiance renforcée'}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ROI Simulator Section */}
      <section id="roi-simulator-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simulateur ROI Aitenders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez en quelques questions l'impact potentiel d'Aitenders sur votre organisation
            </p>
          </div>
          <AitendersSimulatorFinal useCase="uc1" />
        </div>
      </section>

      {/* Final CTA - Slack Style */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Découvrez tout ce que vous pouvez faire avec Aitenders
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Transformez votre approche des appels d'offres dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DemoCTAButton className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              {t('uc1.hero.demoButton') || 'Réservez une Démo'}
            </DemoCTAButton>
            <Button 
              onClick={scrollToSimulator}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold"
            >
              Calculer mon ROI
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}