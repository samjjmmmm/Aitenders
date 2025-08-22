import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MdDescription, 
  MdFlashOn, 
  MdGroups, 
  MdSecurity, 
  MdWarning, 
  MdAccountBox, 
  MdBusiness, 
  MdGavel,
  MdMail 
} from "react-icons/md";
import { FaUsers, FaCheckCircle } from "react-icons/fa";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import UC3AnalysisCard from "@/components/UC3AnalysisCard";
import ClientLogos from "@/components/client-logos";
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

// Import client logos
import equansLogo from "@assets/Equans_1753711339292.png";
import bouyguesLogo from "@assets/Bouyges_1753711339292.png";
import colasLogo from "@assets/Colas_1753711339292.png";

export default function UC2Page() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<'en' | 'fr'>((i18n.language as 'en' | 'fr') || 'fr');

  // Handle language changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // Target audience data
  const targetAudiences = [
    {
      id: 'proposal-managers',
      title: "Proposal Manager, Contract Manager ou Chargé de projet",
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: "Gérez des projets moyens avec complexité modérée tout en maintenant la qualité et les délais. Coordonnez efficacement les équipes techniques et commerciales pour produire des offres structurées et convaincantes.",
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
      title: "Managers techniques",
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: "Supervisez la cohérence technique des propositions moyennes avec des workflows optimisés. Assurez la qualité des livrables techniques tout en respectant les contraintes budgétaires et temporelles.",
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
      title: "Directeurs commerciaux",
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: "Optimisez votre pipeline de projets moyens avec une visibilité complète sur les performances et les risques. Maximisez le taux de conversion grâce à des processus standardisés et efficaces.",
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 88, color: 'purple' }
      },
      notification: '🎯 ROI optimisé',
      alert: '💼 Performance élevée'
    }
  ];

  // Pain points data
  const painPoints = [
    {
      icon: MdWarning,
      title: "Complexité croissante difficile à gérer",
      description: "Les projets moyens nécessitent plus de coordination et de ressources, créant des risques de dépassement et d'erreurs"
    },
    {
      icon: MdDescription,
      title: "Processus peu standardisés",
      description: "Manque de méthodologie claire pour gérer efficacement les projets de taille intermédiaire"
    },
    {
      icon: FaUsers,
      title: "Coordination équipes complexe",
      description: "Difficultés à aligner les équipes techniques et commerciales sur des projets multi-disciplinaires"
    }
  ];

  // Solutions data  
  const solutions = [
    {
      icon: MdFlashOn,
      title: "Gestion intelligente des projets moyens",
      description: "IA spécialisée qui coordonne automatiquement les ressources et optimise les processus pour les projets intermédiaires"
    },
    {
      icon: MdGroups,
      title: "Workflows standardisés et flexibles",
      description: "Méthodologies éprouvées adaptées à la complexité des projets moyens avec personnalisation selon les besoins"
    },
    {
      icon: MdSecurity,
      title: "Contrôle qualité automatisé",
      description: "Validation systématique des livrables et suivi proactif des risques pour maintenir l'excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header language={language} onLanguageChange={setLanguage} />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{ backgroundColor: '#EBF2FD' }}>
          <div className="content-boundary relative z-10">
            <div className="text-center">
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">
                  {t('hero_section.badge')}
                </Badge>

                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight"
                  style={{ color: '#112646' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t('hero_section.title')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {t('hero_section.span')}
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {t('hero_section.description')}
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {t('hero_section.demo_button')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    {t('hero_section.download_button')}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="mt-16 md:mt-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <img 
                  src={uc2HeroImage} 
                  alt="Aitenders UC2 Platform Demo"
                  className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="content-boundary">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#112646' }}>
                Votre offre, 100 % claire, 0 % surprise
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Sur les projets moyens, vos équipes jonglent entre délais serrés, clauses critiques cachées et versions dispersées, au risque d'erreurs coûteuses et d'allers‑retours interminables.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                        <point.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{point.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="content-boundary">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#112646' }}>
                Votre co-pilote IA sécurisant le pilotage de vos projets moyens
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Découvrez, pilotez et sécurisez chaque clause dès le premier jour.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                        <solution.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audiences Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="content-boundary">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#112646' }}>
                Ce que nos utilisateurs gagnent concrètement pour les appels d'offres moyens
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Des résultats décisifs pour les acheteurs et les équipes de réponse à appels d'offres
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudiences.map((audience, index) => (
                <UC3AnalysisCard 
                  key={audience.id}
                  audience={audience}
                  isActive={true}
                  onToggle={() => {}}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />

        {/* ROI Simulator */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="content-boundary">
            <AitendersSimulatorFinal />
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Chat Interface */}
      <ChatInterface
        actions={[
          {
            id: 'use-cases',
            label: 'Nos cas d\'usage',
            icon: <MdDescription className="w-3 h-3 text-gray-400" />,
            onClick: () => {}
          },
          {
            id: 'demo',
            label: 'Démo UC2',
            icon: <MdFlashOn className="w-3 h-3 text-gray-400" />,
            onClick: () => {}
          },
          {
            id: 'roi',
            label: 'Calcul ROI',
            icon: <MdGroups className="w-3 h-3 text-gray-400" />,
            onClick: () => {}
          },
          {
            id: 'contact',
            label: 'Contact Expert',
            icon: <MdMail className="w-3 h-3 text-gray-400" />,
            onClick: () => {}
          }
        ]}
      />
    </div>
  );
}