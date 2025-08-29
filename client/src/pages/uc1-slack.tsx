import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalTranslations } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import DemoCTAButton from "@/components/demo-cta-button";
import { FaCheckCircle, FaLightbulb, FaEye, FaArchive, FaFileAlt, FaChartLine } from 'react-icons/fa';
import uc1HeroImage from "@assets/UC1 HERO_1756117718476.png";

type TabId = 'analyse' | 'validation' | 'integration' | 'ai';

export default function UC1Slack() {
  const { t } = useGlobalTranslations();
  const [activeTab, setActiveTab] = useState<TabId>('analyse');

  const tabs = [
    { id: 'analyse' as TabId, label: 'Analyse Rapide', icon: FaEye },
    { id: 'validation' as TabId, label: 'Validation', icon: FaCheckCircle },
    { id: 'integration' as TabId, label: 'Intégrations', icon: FaArchive },
    { id: 'ai' as TabId, label: 'IA Aitenders', icon: FaLightbulb }
  ];

  const tabContent: Record<TabId, {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    image: string;
  }> = {
    analyse: {
      title: "Analysez instantanément chaque appel d'offres",
      description: "Notre IA examine chaque document, identifie les points critiques et génère une analyse complète en minutes au lieu d'heures.",
      stat: "85%",
      statLabel: "de temps économisé sur l'analyse des AO",
      image: uc1HeroImage
    },
    validation: {
      title: "Validation collaborative et sécurisée",  
      description: "Centralisez les retours de vos équipes, validez les décisions go/no-go et gardez un historique complet de chaque projet.",
      stat: "94%",
      statLabel: "d'amélioration de la prise de décision",
      image: uc1HeroImage
    },
    integration: {
      title: "Connectez vos outils existants",
      description: "Plus de 50 intégrations disponibles pour connecter Aitenders avec votre écosystème : CRM, outils de gestion, systèmes comptables.",
      stat: "50+",
      statLabel: "intégrations disponibles pour optimiser votre workflow",
      image: uc1HeroImage
    },
    ai: {
      title: "Une IA qui comprend vos critères métier", 
      description: "Entraînée spécifiquement sur les appels d'offres, notre IA apprend de vos décisions et s'améliore pour mieux correspondre à vos critères.",
      stat: "97%",
      statLabel: "de précision dans l'identification des points critiques",
      image: uc1HeroImage
    }
  };

  const stats = [
    { value: "700k+", label: "analyses d'AO traitées chaque mois" },
    { value: "85%", label: "de temps économisé sur l'analyse" },
    { value: "2.5h", label: "temps moyen gagné par projet" },
    { value: "94%", label: "taux de satisfaction client" }
  ];

  const customers = [
    { name: "Bouygues Construction", logo: "/api/placeholder/120/60", case: "Comment Bouygues a réduit de 70% le temps d'analyse des AO" },
    { name: "Eiffage", logo: "/api/placeholder/120/60", case: "Eiffage améliore sa prise de décision avec l'IA Aitenders" },
    { name: "Vinci", logo: "/api/placeholder/120/60", case: "Vinci optimise ses processus d'appels d'offres" },
    { name: "Colas", logo: "/api/placeholder/120/60", case: "Colas transforme son approche des projets moyens" }
  ];

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
              <img
                src={uc1HeroImage}
                alt="Aitenders Platform"
                className="w-full max-w-4xl mx-auto mb-8 rounded-lg shadow-2xl"
              />
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Analysez. Décidez. Gagnez.
                <br />
                <span className="text-purple-600">En minutes, pas en heures.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Aitenders révolutionne l'analyse des appels d'offres avec une IA spécialisée qui comprend vos critères métier et accélère vos prises de décision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <DemoCTAButton className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold">
                  Démarrer maintenant
                </DemoCTAButton>
                <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                  Voir les tarifs
                </Button>
              </div>
            </motion.div>

            {/* Company Logos */}
            <div className="border-t pt-12">
              <p className="text-gray-500 text-sm mb-8 font-medium">
                Les leaders du BTP nous font confiance
              </p>
              <ClientLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Feature Section - Slack Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rassemblez vos équipes, vos projets, vos analyses et l'IA.
            </h2>
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
                      : 'bg-white text-gray-600 hover:bg-gray-100'
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
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {tabContent[activeTab].stat}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {tabContent[activeTab].statLabel}
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={tabContent[activeTab].image}
                  alt={`${tabContent[activeTab].title} Feature`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section - Slack Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Des entreprises nous font confiance pour leurs décisions critiques
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories - Slack Style */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Les entreprises les plus innovantes utilisent Aitenders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="h-12 mb-4 flex items-center">
                  <div className="w-24 h-8 bg-gray-600 rounded"></div>
                </div>
                <h3 className="font-semibold mb-2">{customer.name}</h3>
                <p className="text-gray-300 text-sm">{customer.case}</p>
                <div className="mt-4 text-purple-400 text-sm font-medium">
                  Voir l'étude de cas →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition - Slack Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Écoutez plutôt les témoignages de nos utilisateurs.
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Aitenders est leader dans les outils d'analyse d'appels d'offres IA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">AWARD {i}</span>
              </div>
            ))}
          </div>
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
              Démarrer gratuitement
            </DemoCTAButton>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold">
              Contacter notre équipe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}