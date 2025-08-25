import { useState } from "react";
import { FaCheckCircle, FaLightbulb, FaEye, FaArchive, FaFileAlt, FaChartLine, FaComments, FaCog, FaLayerGroup, FaTags } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useGlobalTranslations } from "@/contexts/TranslationContext";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import ClientLogos from "@/components/client-logos";
import HubSpotBookingModal from "@/components/hubspot-booking-modal";
import ChatInterface from "@/components/chat-interface";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import uc1HeroImage from "@assets/UC1 HERO_1756117718476.png";
import featureImage1 from "@assets/wow 1_1756122537818.png";
import featureImage2 from "@assets/wow 2_1756122537819.png";
import featureImage3 from "@assets/wow 3_1756122537813.png";

export default function UC1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, currentLanguage } = useGlobalTranslations();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" variants={fadeInUp}>
            
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300 text-sm md:text-base font-semibold px-4 md:px-6 py-2 rounded-full">
                {t('uc1.hero.badge') || 'Accélérez l\'Analyse Des Offres Répétitives'}
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Une analyse go/no go <span className="text-purple-600">immédiate</span>, alignée avec vos <span className="text-purple-600">processus interne</span>.
            </h1>
            
            {/* Body Copy */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 md:mb-12 max-w-4xl mx-auto">
              {t('uc1.hero.description') || 'La seule plateforme pensée pour les petits projets à cycles courts : Agents IA d\'analyse des points clés, automatisation d\'une synthèse et validation guidée. Vous transformez des heures de relecture et d\'analyse en'} <span className="font-semibold text-blue-600">{t('uc1.hero.description_span') || 'minutes'}</span>, {t('uc1.hero.description2') || 'gagnez en sérénité et livrez une offre solide et incontestable — sans surcharge ni faux départs.'}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 md:mb-20">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                {t('uc1.hero.demoButton') || 'Réservez une Démo'}
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-3xl transition-all duration-300">
                {t('uc1.hero.downloadButton') || 'Téléchargez le cas d\'usage →'}
              </Button>
            </div>
          </motion.div>

          {/* Hero Image - Bottom */}
          <div className="w-full max-w-7xl mx-auto mt-8">
            <div className="flex justify-center items-center">
              <div className="relative flex justify-center items-center h-full px-0 py-6">
                <img
                  src={uc1HeroImage}
                  alt="Aitenders UC1 Interface - Fast Analysis and Go/No-Go Decision Dashboard"
                  className="block w-[640px] md:w-[760px] lg:w-[880px] max-w-full h-auto select-none pointer-events-none object-contain"
                  style={{
                    transform: 'scale(1.22)',
                    transformOrigin: 'center',
                    imageRendering: 'auto',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Go/No-Go Card Section */}
      <motion.section 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('uc1.painPoints.headline') || 'Go / No-Go immédiat'}, <span className="text-blue-600">{t('uc1.painPoints.headline_span') || 'process interne garanti'}</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('uc1.painPoints.text1') || 'Sur les petits projets, la pression est double : analyser vite et prouver que tout a été lu, compris et contrôlé.'}
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('uc1.painPoints.text2') || 'Sans support transversal (qualité, juridique), chaque oubli peut coûter cher au marge et décision et en coup de crédibilité interne. Avec Aitenders, vous obtenez en quelques minutes une vision claire et priorisée de vos documents pour un go/no-go'}
              <span className="font-semibold">{t('uc1.painPoints.text2_span') || ' immédiat'}</span>. {t('uc1.painPoints.text3') || 'La plateforme guide ensuite la validation et archive chaque contrôle, garantissant que vos obligations internes sont remplies sans surcharge.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium">
                Boostez Vos Petits Projets!
              </Button>

              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 font-medium">
                → Voir la Démo Rapide
              </Button>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Solution Features Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.solution_section.mainTitle') || 'Votre'} <span className="text-blue-600">{t('uc1.solution_section.mainTitle_span') || 'copilote IA'}</span> {t('uc1.solution_section.mainTitle2') || 'qui accélère l\'analyse de vos petits projets'}
            </h2>
            <p className="text-xl text-gray-600">
              {t('uc1.solution_section.subtitle') || 'Décidez vite et prouvez que tout a été contrôlé, en moins de 48h.'}
            </p>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span dangerouslySetInnerHTML={{ __html: t('uc1.solution_section.feature1_title') || 'Structuration instantanée pour un<br />premier "go / no-go"' }} /> <span className="text-purple-600">{t('uc1.solution_section.feature1_highlight') || 'immédiat'}</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t('uc1.solution_section.feature1_text') || 'Grâce aux assistants IA, vos documents sont instantanément analysés, classés et priorisés : critères d\'intérêt, points critiques et preuves associées sont détectés en quelques minutes.'}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Le Responsable Offre démarre ainsi avec une base claire et exploitable : vision globale du projet, identification des points bloquants éventuels et possibilité de décider quasi immédiatement d'un "go / no-go".
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Votre analyse prête avant même la première réunion
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <img
                    src={featureImage1}
                    alt="Interface d'analyse automatique - Structuration des documents"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="flex flex-col lg:flex-row-reverse items-center gap-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('uc1.solution.feature2.title') || 'Accédez à une vision'} <span className="text-orange-600">{t('uc1.solution.feature2.span') || 'claire'}</span> <span dangerouslySetInnerHTML={{ __html: t('uc1.solution.feature2.title2') || 'de<br />votre projet' }} />
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t('uc1.solution.feature2.text1') || 'Aitenders génère une vue claire et priorisée de l\'ensemble des critères détectés, avec leurs valeurs et les liens directs vers les documents sources.'}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('uc1.solution.feature2.text2') || 'Le Responsable Offre n\'a plus besoin de parcourir des centaines de pages ou de jongler entre plusieurs fichiers : tout est rassemblé dans une synthèse visuelle, exploitable immédiatement.'}
                </p>
                <p className="text-lg font-semibold text-orange-600">
                  {t('uc1.solution.feature2.highlight') || 'Votre revue interne prête en quelques minutes'}
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <img
                    src={featureImage2}
                    alt="Dashboard de synthèse projet - Vision claire et recherche intelligente"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('uc1.solution.feature3.title') || 'Validez et archivez chaque point'}<br /><span className="text-green-600">{t('uc1.solution.feature3.span') || 'sans effort'}</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t('uc1.solution.feature3.text1') || 'Aitenders vous guide pas à pas pour confirmer, ajuster ou rejeter chaque élément identifié par l\'IA. Chaque validation est automatiquement tracée et historisée, créant un dossier de preuves complet.'}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('uc1.solution.feature3.text2') || 'Le responsable d\'offre passe d\'une validation manuelle, lente et incertaine à un processus fluide, sécurisé et incontestable.'}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  {t('uc1.solution.feature3.highlight') || 'Finies les zones grises : tout est validé et tracé.'}
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <img
                    src={featureImage3}
                    alt="Interface de validation guidée - Validation et archivage automatique"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results/Testimonials Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.results.headline') || 'Ce que nos utilisateurs obtiennent concrètement pour les'} <span className="text-blue-600">{t('uc1.results_section.kpis.serenity') || 'petites offres'}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t('uc1.results.subtitle') || 'Des résultats mesurés sur nos clients les plus actifs'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 */}
            <Card className="bg-blue-50 border-blue-200 p-8">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('uc1.results.testimonial1.title') || 'Directeur Commercial vs Chargé des Affaires'}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t('uc1.results.testimonial1.text') || '"Nous avions un chef commercial apte, confirmé... Maintenant nous avons accès à son niveau d\'expertise sur chaque petit appel d\'offres. Le gain sur une équipe de 4 commerciaux junior devient évident : ils produisent maintenant un niveau d\'expertise que seuls les experts expérimentés maîtrisent"'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.benefit1') || 'Temps économisé: jusqu\'\u00e0 80% d\'expertise'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.benefit2') || 'Précision dans l\'analyse: +60%'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.benefit3') || 'Couverture étendue: +3x plus d\'analyses'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial1.benefit4') || 'Validation Auto: Diagnostic automatique'}
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-green-50 border-green-200 p-8">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('uc1.results.testimonial2.title') || 'Responsable offres - Chef du Projet Assistant commercial'}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t('uc1.results.testimonial2.text') || '"Une révolution complète sur notre capacité d\'\u00eatre réactif. Avant, je finissais par refuser des offres intéressantes faute de temps d\'analyse. Maintenant, je traite en quelques minutes ce qui me demandait des heures, sans perdre en qualité. La validation interne est transparente : chaque contrôle est documenté."'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.benefit1') || 'Temps de traitement des offres réduit'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.benefit2') || 'Traitement rapide: Tout devient facile'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.benefit3') || '+150% de fréquence d\'offres traitées'}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {t('uc1.results.testimonial2.benefit4') || 'Validation interne: Diagnostic automatisé'}
                </div>
              </div>
            </Card>
          </div>

          {/* KPI Grid */}
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
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{t('uc1.results.kpi3.desc') || 'Confiance renforcée, stress réduit, zéro escalade interne'}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Capabilities Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Badge className="bg-orange-500 text-white px-6 py-3 text-sm font-medium rounded-full">
                {t('uc1.advanced.badge') || '🌟 Fonctionnalités Wow'}
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('uc1.advanced.title') || 'Des'} <span className="text-yellow-400">{t('uc1.advanced.span') || 'capacités avancées'}</span> {t('uc1.advanced.title2') || 'qui transforment votre approche commerciale'}
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              {t('uc1.advanced.subtitle') || 'Au-delà de la génération rapide, découvrez des fonctionnalités qui ajoutent une dimension stratégique à votre développement commercial.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <div className="bg-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30 hover:bg-purple-700/40 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <FaFileAlt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{t('uc1.advanced.feature1.title') || 'Résumé automatique du projet'}</h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
{t('uc1.advanced.feature1.desc') || 'Génération instantanée d\'un résumé clair des objectifs et du contexte du projet, affiché sur le dashboard.'}
              </p>
              <div className="flex items-start justify-between gap-2">
                <Badge className="bg-blue-500/20 text-blue-300 px-2 py-1 text-xs border border-blue-400/30 flex-shrink-0">
{t('uc1.advanced.feature1.tag') || 'Project Summary ✨'}
                </Badge>
                <span className="text-xs text-purple-300 cursor-pointer hover:text-purple-200 text-right flex-shrink-0">Cliquez pour
                détails</span>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30 hover:bg-purple-700/40 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <FaLightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{t('uc1.advanced.feature2.title') || 'Détection des exigences implicites'}</h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
{t('uc1.advanced.feature2.desc') || 'L\'IA identifie automatiquement les contraintes "cachées" (non explicitement clairements) dans les documents.'}
              </p>
              <div className="flex items-start justify-between gap-2">
                <Badge className="bg-green-500/20 text-green-300 px-2 py-1 text-xs border border-green-400/30 flex-shrink-0">
                  Implicit Requirements ⚠️
                </Badge>
                <span className="text-xs text-purple-300 cursor-pointer hover:text-purple-200 text-right flex-shrink-0">Cliquez pour
                détails</span>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30 hover:bg-purple-700/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{t('uc1.advanced.feature3.title') || 'Résumé intelligent de chaque document'}</h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                Chaque document est résumé en quelques lignes, disponible dans le doc center et réutilisable par l'IA.
              </p>
              <div className="flex items-start justify-between gap-2">
                <Badge className="bg-orange-500/20 text-orange-300 px-2 py-1 text-xs border border-orange-400/30 flex-shrink-0">
                  Document Summary ✓
                </Badge>
                <span className="text-xs text-purple-300 cursor-pointer hover:text-purple-200 text-right flex-shrink-0">Cliquez pour
                détails</span>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30 hover:bg-purple-700/40 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <FaLayerGroup className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{t('uc1.advanced.feature4.title') || 'Gestion dynamique de la hiérarchie documentaire'}</h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                Les documents sont automatiquement classés selon leur importance, définie par l'utilisateur ou l'IA.
              </p>
              <div className="flex items-start justify-between gap-2">
                <Badge className="bg-purple-500/20 text-purple-300 px-2 py-1 text-xs border border-purple-400/30 flex-shrink-0">
                  Document Precedence 📋
                </Badge>
                <span className="text-xs text-purple-300 cursor-pointer hover:text-purple-200 text-right flex-shrink-0">Cliquez pour
détails</span>
              </div>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30 hover:bg-purple-700/40 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                <FaCog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{t('uc1.advanced.feature5.title') || 'Catégorisation intelligente & arbre thématique'}</h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                Les informations sont automatiquement classées par thème (juridique, technique, planning...) et restituées sous forme d'arbre visuel.
              </p>
              <div className="flex items-start justify-between gap-2">
                <Badge className="bg-pink-500/20 text-pink-300 px-2 py-1 text-xs border border-pink-400/30 flex-shrink-0">
                  Content Categorization 🗂️
                </Badge>
                <span className="text-xs text-purple-300 cursor-pointer hover:text-purple-200 text-right flex-shrink-0">Cliquez pour
détails</span>
              </div>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30 hover:bg-purple-700/40 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                <FaComments className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{t('uc1.advanced.feature6.title') || 'Chat contextuel avec le projet'}</h3>
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                L'utilisateur interroge son projet en langage naturel ("Quelle sont les critères de sélection ?", "Y a-t-il une clause pénale ?") et obtient une réponse directe avec la source.
              </p>
              <div className="flex items-start justify-between gap-2">
                <Badge className="bg-red-500/20 text-red-300 px-2 py-1 text-xs border border-red-400/30 flex-shrink-0">
                  Chat with Project Data 💬
                </Badge>
                <span className="text-xs text-purple-300 cursor-pointer hover:text-purple-200 text-right flex-shrink-0">Cliquez pour
détails</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
              {t('uc1.advanced.conclusion') || 'Chaque fonctionnalité optimise votre efficacité commerciale'}
            </p>
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
{t('uc1.advanced.button') || 'Explorer toutes les fonctionnalités →'}
              </Button>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl"></div>
        </div>
      </motion.section>

      {/* Reference Projects Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.reference.title') || 'Nos'} <span className="text-blue-600">{t('uc1.reference.span') || 'appels d\'offres référence'}</span> {t('uc1.reference.title2') || 'sur les petits projets'}
            </h2>
            <p className="text-xl text-gray-600">
{t('uc1.reference.subtitle') || 'Découvrez comment nos clients optimisent leurs petits projets avec nos solutions.'}
            </p>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-8">
            <ClientLogos language={currentLanguage} />
          </div>

          {/* ROI Simulator */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <Badge className="bg-blue-600 text-white px-4 py-2 mb-4">
              {t('uc1.roi.badge') || 'Simulateur ROI Aitenders'}
            </Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('uc1.roi.title') || 'Calculez votre ROI en temps réel'}
            </h3>
            <p className="text-gray-600 mb-8">
{t('uc1.roi.description') || 'Découvrez l\'impact financier d\'Aitenders sur votre activité petits projets'}
            </p>

            <div className="bg-white rounded-lg p-6">
              <AitendersSimulatorFinal useCase="UC1" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Chat Interface */}
      <ChatInterface />

      {/* HubSpot Modal */}
      <HubSpotBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}