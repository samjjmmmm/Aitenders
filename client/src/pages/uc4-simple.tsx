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
  MdRotateRight, MdFlag, MdMail, MdShare, MdQuestionAnswer
} from "react-icons/md";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import { useState, useEffect, useRef } from "react";

export default function UC4Page() {
  // Scroll animation state management
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-scroll-id');
          if (id) {
            if (entry.isIntersecting) {
              setVisibleElements(prev => {
                const newSet = new Set(prev);
                newSet.add(id);
                return newSet;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Register element for scroll animation
  const registerElement = (id: string, element: Element | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />
      
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        <div className="content-boundary relative z-10">
          
          {/* Content Section - Top */}
          <div 
            ref={(el) => registerElement('hero-content', el)}
            data-scroll-id="hero-content"
            className={`text-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
              visibleElements.has('hero-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="mb-8 md:mb-12">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm">
                Pilotez les offres moyennes
              </Badge>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Pilotez les <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">offres moyennes</span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 md:mb-10 font-light leading-relaxed max-w-5xl mx-auto">
              Découvrez, pilotez et sécurisez chaque clause <span className="text-purple-600 font-semibold">dès le premier jour</span>.
            </h2>
            
            {/* Body Copy */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 md:mb-12 max-w-4xl mx-auto">
              La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour : structuration IA du périmètre, détection immédiate des clauses critiques et pilotage dynamique des Q&A et versions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 md:mb-20">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                Réservez une Démo
              </Button>
              <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-12 py-6 text-xl font-bold rounded-3xl transition-all duration-300 transform hover:-translate-y-1">
                Explorer les Fonctionnalités
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            ref={(el) => registerElement('hero-image', el)}
            data-scroll-id="hero-image"
            className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
              visibleElements.has('hero-image') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interface UC4 - Gestion des Contrats</h3>
                <p className="text-gray-600">Visualisation des clauses contractuelles critiques</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          
          {/* Section Header */}
          <div 
            ref={(el) => registerElement('features-header', el)}
            data-scroll-id="features-header"
            className={`text-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
              visibleElements.has('features-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge className="bg-gradient-to-r from-purple-50 to-indigo-100/80 text-purple-800 border-purple-200/50 font-semibold px-6 py-3 rounded-full shadow-sm mb-8">
              Solutions UC4
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Trois fonctionnalités pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">maîtriser vos contrats</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Chaque clause utile, chaque décision sécurisée : accédez aux éléments clés de vos contrats dès le jour 1, sans relecture fastidieuse.
            </h3>
          </div>

          {/* Feature 1: Fiche contrat intelligente */}
          <div 
            ref={(el) => registerElement('feature-1', el)}
            data-scroll-id="feature-1"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-400 ${
              visibleElements.has('feature-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Fiche contrat intelligente, <span className="text-blue-600">structurée dès le jour 1</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders transforme automatiquement chaque contrat PDF en une fiche structurée et navigable. 
                <span className="text-blue-600">En 5 minutes</span>, vous disposez d'une vue d'ensemble claire : 
                périmètre, durée, obligations, jalons et points d'attention, sans avoir à parcourir 50 pages.
              </p>
              <div className="flex items-center text-lg font-bold text-blue-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Le contrat devient lisible et actionnable immédiatement.
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <div className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <MdDescription className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Fiche Contrat</h4>
                    <p className="text-gray-600">Structure intelligente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Accès ciblé aux clauses critiques */}
          <div 
            ref={(el) => registerElement('feature-2', el)}
            data-scroll-id="feature-2"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-600 ${
              visibleElements.has('feature-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Accès ciblé aux clauses critiques, <span className="text-green-600">sans relecture</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders propose une visualisation claire et structurée du contrat, organisée par thématique (durée, engagement, pénalités, résiliation…). 
                Chaque utilisateur accède directement à la clause concernée, <span className="text-green-600">sans avoir à parcourir l'intégralité du document</span>.
              </p>
              <div className="flex items-center text-lg font-bold text-green-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                La lecture intelligente remplace la recherche manuelle.
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <div className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <MdSearch className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Recherche Thématique</h4>
                    <p className="text-gray-600">Accès direct aux clauses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Q&A Contractuel */}
          <div 
            ref={(el) => registerElement('feature-3', el)}
            data-scroll-id="feature-3"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-800 ${
              visibleElements.has('feature-3') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Posez une question, <span className="text-indigo-600">l'IA vous répond</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders embarque un moteur de <span className="text-indigo-600">Q&A contractuel</span>. 
                Posez une question naturelle (« Quel est le préavis ? », « Quelle est la durée de l'engagement ? ») et recevez 
                immédiatement la clause exacte, accompagnée de sa source.
              </p>
              <div className="flex items-center text-lg font-bold text-indigo-600">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Comme interroger un juriste, mais en instantané
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                <div className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <MdQuestionAnswer className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Q&A Contractuel</h4>
                    <p className="text-gray-600">Réponses instantanées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          
          {/* KPI Grid */}
          <div 
            ref={(el) => registerElement('kpi-grid', el)}
            data-scroll-id="kpi-grid"
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${
              visibleElements.has('kpi-grid') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  -60 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  Temps réduit pour accéder aux clauses clés
                </p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  +80 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  Des questions traitées sans solliciter le juridique
                </p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-8 text-center border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                  Décisions alignées avec les engagements contractuels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gray-50">
        <div className="content-boundary">
          <div 
            ref={(el) => registerElement('client-logos', el)}
            data-scroll-id="client-logos"
            className={`mb-16 md:mb-20 transition-all duration-1000 delay-600 ${
              visibleElements.has('client-logos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <ClientLogos language="fr" />
          </div>
        </div>
      </section>

      {/* ROI Simulator Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">
          <div 
            ref={(el) => registerElement('simulator-section', el)}
            data-scroll-id="simulator-section"
            className={`bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden transition-all duration-1000 delay-800 ${
              visibleElements.has('simulator-section') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-gradient-to-r from-purple-50 to-indigo-100/80 text-purple-800 border-purple-200/50 font-semibold px-6 py-3 rounded-full shadow-sm mb-8">
                Simulateur ROI Intégré
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Calculez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">retour sur investissement</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Découvrez en temps réel l'impact d'Aitenders sur vos projets de gestion contractuelle
              </p>
            </div>
            
            {/* Simulator Component */}
            <AitendersSimulatorFinal />
          </div>
        </div>
      </section>

    </div>
  );
}