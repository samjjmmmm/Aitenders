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
  MdRotateRight, MdFlag, MdMail, MdCalculate
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar, FaFileAlt, FaCogs } from "react-icons/fa";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import UC3AnalysisCard from "@/components/UC3AnalysisCard";
import { useState } from "react";
import { motion } from "framer-motion";

// Import client logos
import equansLogo from "@assets/Equans_1753711339292.png";
import bouyguesLogo from "@assets/Bouyges_1753711339292.png";
import colasLogo from "@assets/Colas_1753711339292.png";

// Import hero video
import heroVideo from '../assets/hero-uc1-video.mp4';
import containerUc1Image from "@assets/UI 1_1755601574246.png";
import containerUc1SecondImage from "@assets/2ND_1755082953938.png";
import containerUc1ThirdImage from "@assets/3RD_1755095206907.png";
import ChatSection from "@/components/chat-section";
import ChatInterface from "@/components/chat-interface";
import ToppingModal from "@/components/topping-modal";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";


export default function UC1Page() {
  const [selectedTopping, setSelectedTopping] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Topping modal data for UC1
  const toppingsData = {
    'learning-engine': {
      name: 'Moteur d\'Apprentissage',
      description: 'L\'IA apprend de vos succès et échecs pour optimiser continuellement la qualité et la pertinence de vos futures propositions.',
      icon: MdTrendingUp,
      iconColor: 'text-blue-600',
      integration: {
        title: 'Intégration dans le cycle d\'offres récurrentes',
        steps: ['Analyse historique', 'Apprentissage IA', 'Optimisation continue'],
        visual: 'L\'IA analyse vos offres passées, identifie les patterns de succès et d\'échec, puis optimise automatiquement les nouvelles propositions en s\'appuyant sur ces apprentissages.'
      },
      valueProposition: {
        buyer: {
          title: 'Business Development Managers',
          benefits: [
            'Amélioration continue du taux de succès des offres',
            'Réduction du temps de préparation grâce aux templates optimisés',
            'Identification automatique des arguments gagnants'
          ]
        },
        user: {
          title: 'Proposal Managers',
          benefits: [
            'Workflows automatisés basés sur les meilleures pratiques',
            'Suggestions intelligentes pour chaque section d\'offre',
            'Qualité constante même sur les petites offres'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Amélioration taux de gain', value: '+32%', icon: MdTrendingUp },
        kpi2: { label: 'Réduction temps préparation', value: '-45%', icon: MdAccessTime },
        kpi3: { label: 'Qualité propositions', value: '+28%', icon: MdStars }
      }
    },
    'client-customization': {
      name: 'Personnalisation Client',
      description: 'Adaptation automatique du ton, des arguments et de la structure selon le profil et l\'historique de chaque client cible.',
      icon: MdGroups,
      iconColor: 'text-emerald-600',
      integration: {
        title: 'Personnalisation automatique par client',
        steps: ['Profil client', 'Adaptation IA', 'Proposition sur-mesure'],
        visual: 'Le système analyse le profil du client, ses préférences passées et adapte automatiquement le contenu, le ton et les arguments pour maximiser les chances de succès.'
      },
      valueProposition: {
        buyer: {
          title: 'Business Development Managers',
          benefits: [
            'Messages percutants adaptés à chaque prospect',
            'Augmentation du taux de réponse positive',
            'Différenciation claire vs la concurrence'
          ]
        },
        user: {
          title: 'Proposal Managers',
          benefits: [
            'Templates dynamiques par type de client',
            'Cohérence dans l\'approche commerciale',
            'Gain de temps sur la personnalisation'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Taux de réponse client', value: '+58%', icon: MdTrendingUp },
        kpi2: { label: 'Satisfaction client', value: '+41%', icon: MdStars },
        kpi3: { label: 'Conversion prospects', value: '+35%', icon: MdVerified }
      }
    },
    'competitive-intelligence': {
      name: 'Intelligence Concurrentielle',
      description: 'Analyse automatique du marché et suggestions d\'arguments différenciants basés sur les tendances sectorielles.',
      icon: MdSearch,
      iconColor: 'text-orange-600',
      integration: {
        title: 'Veille concurrentielle intelligente',
        steps: ['Analyse marché', 'Détection tendances', 'Arguments différenciants'],
        visual: 'L\'IA surveille les tendances du marché, analyse les offres concurrentes et suggère automatiquement des arguments de différenciation pertinents.'
      },
      valueProposition: {
        buyer: {
          title: 'Business Development Managers',
          benefits: [
            'Positionnement optimal face à la concurrence',
            'Arguments de vente actualisés en permanence',
            'Identification d\'opportunités de marché'
          ]
        },
        user: {
          title: 'Proposal Managers',
          benefits: [
            'Contenu différenciant intégré automatiquement',
            'Veille concurrentielle sans effort manuel',
            'Messages adaptés aux tendances du marché'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Avantage concurrentiel', value: '+47%', icon: MdTrendingUp },
        kpi2: { label: 'Positionnement marché', value: '+52%', icon: MdGpsFixed },
        kpi3: { label: 'Arguments différenciants', value: '+39%', icon: MdSearch }
      }
    },
    'success-prediction': {
      name: 'Prédiction de Succès',
      description: 'Analyse prédictive basée sur l\'IA pour évaluer la probabilité de gain de chaque opportunité commerciale.',
      icon: MdEmojiEvents,
      iconColor: 'text-purple-600',
      integration: {
        title: 'Intégration dans le scoring des opportunités',
        steps: ['Analyse historique', 'Machine Learning', 'Score prédictif'],
        visual: 'Tableau de bord avec scores en temps réel et recommandations d\'allocation de ressources'
      },
      valueProposition: {
        buyer: {
          title: 'Optimisation des ressources commerciales',
          benefits: ['Focus sur les opportunités à fort potentiel', 'Réduction des efforts sur les dossiers perdants', 'ROI commercial optimisé']
        },
        user: {
          title: 'Prise de décision éclairée',
          benefits: ['Confiance renforcée dans les choix', 'Priorisation objective', 'Moins de stress commercial']
        }
      },
      impact: {
        kpi1: { label: 'Taux de conversion', value: '+35%', icon: MdTrendingUp },
        kpi2: { label: 'Précision prédictive', value: '91%', icon: MdEmojiEvents },
        kpi3: { label: 'Temps implémentation', value: '2 sem', icon: MdAccessTime }
      }
    },
    'multi-format-export': {
      name: 'Export Multi-Format',
      description: 'Génération automatique de vos propositions dans tous les formats professionnels avec charte graphique personnalisée.',
      icon: MdContentCopy,
      iconColor: 'text-pink-600',
      integration: {
        title: 'Intégration dans le workflow de finalisation',
        steps: ['Validation contenu', 'Application charte', 'Export automatique'],
        visual: 'Interface de génération avec aperçu temps réel et options de personnalisation'
      },
      valueProposition: {
        buyer: {
          title: 'Cohérence et professionnalisme',
          benefits: ['Image de marque uniforme', 'Respect des standards client', 'Livraison dans les formats requis']
        },
        user: {
          title: 'Efficacité de production',
          benefits: ['Économie de temps de mise en forme', 'Élimination des erreurs format', 'Focus sur le contenu']
        }
      },
      impact: {
        kpi1: { label: 'Gain temps finalisation', value: '+60%', icon: MdContentCopy },
        kpi2: { label: 'Conformité formats', value: '100%', icon: MdVerified },
        kpi3: { label: 'Temps déploiement', value: 'Immédiat', icon: MdFlashOn }
      }
    }
  };

  const handleToppingClick = (toppingKey: string) => {
    setSelectedTopping(toppingsData[toppingKey as keyof typeof toppingsData]);
    setIsModalOpen(true);
  };

  // Target audience data with interactive content - UC1 adapted
  const targetAudiences = [
    {
      id: 'business-dev',
      title: 'Business Development Managers',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Répondez rapidement aux opportunités de petits projets tout en maintenant la qualité et les standards de conformité des offres. Maximisez votre taux de réussite avec des réponses structurées et percutantes en un temps record.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ Offre générée',
      alert: '📊 Délai: Respecté'
    },
    {
      id: 'proposal-manager',
      title: 'Proposal Managers',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Coordonnez plusieurs petites offres simultanément avec des processus efficaces pour ne rien laisser passer. Gérez votre pipeline d\'offres avec une visibilité complète et des workflows optimisés.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Pipeline optimisé',
      alert: '📈 Efficacité: +40%'
    },
    {
      id: 'project-director',
      title: 'Directeurs de projets',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Supervisez le pipeline complet d\'offres avec une visibilité sur la qualité des propositions et les risques de conformité. Assurez une cohérence et une excellence opérationnelle sur tous vos projets.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Conformité validée',
      alert: '✅ Qualité garantie'
    },
    {
      id: 'sales-director',
      title: 'Directeurs commerciaux',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Augmentez votre taux de conversion sur les petits projets grâce à des réponses plus rapides et plus convaincantes. Optimisez vos ressources commerciales avec des processus automatisés.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Conversion boostée',
      alert: '📋 ROI maximisé'
    },
    {
      id: 'operations-manager',
      title: 'Responsables opérationnels',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Streamlinz vos opérations d\'offres avec des workflows standardisés et une traçabilité complète. Réduisez les délais de réponse tout en maintenant l\'excellence opérationnelle.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Ops optimisées',
      alert: '🎯 Efficacité +50%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Délais serrés compromettent la qualité",
      description: "Réponses bâclées sur les petits projets créent une image dégradée et réduisent les chances de succès"
    },
    {
      icon: MdDescription,
      title: "Processus inefficaces et répétitifs",
      description: "Temps perdu sur des tâches manuelles récurrentes au détriment de la personnalisation et de la valeur ajoutée"
    },
    {
      icon: FaUsers,
      title: "Manque de standardisation",
      description: "Incohérences entre les offres et absence de capitalisation sur les réussites précédentes"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Génération rapide d'offres structurées",
      description: "IA spécialisée qui produit des réponses complètes et conformes en quelques heures seulement"
    },
    {
      icon: MdGroups,
      title: "Templates et contenus pré-validés",
      description: "Bibliothèque d'argumentaires éprouvés et de réponses standardisées pour une qualité constante"
    },
    {
      icon: MdSecurity,
      title: "Validation automatique des exigences",
      description: "Vérification systématique du cahier des charges pour éviter les oublis critiques"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Analysez le cahier des charges",
      description: "Importez votre appel d'offres et laissez l'IA extraire automatiquement toutes les exigences clés",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Générez votre réponse structurée",
      description: "Créez instantanément une proposition complète avec argumentaires adaptés et conformité assurée",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Personnalisez et finalisez", 
      description: "Affinez votre offre avec des éléments différenciants tout en gardant la structure gagnante",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "80%",
      description: "Réduction du temps de rédaction d'offres"
    },
    {
      metric: "90%",
      description: "Couverture automatique des exigences"
    },
    {
      metric: "2h",
      description: "Délai moyen de génération d'offre"
    },
    {
      metric: "100%",
      description: "Conformité des livrables"
    }
  ];

  const differentiators = [
    {
      title: "Solution Dédiée aux Petits Projets",
      description: "Optimisée spécifiquement pour la rapidité et l'efficacité sur les projets de taille réduite"
    },
    {
      title: "Intelligence Commerciale Intégrée",
      description: "IA spécialisée dans la génération d'argumentaires convaincants et différenciants"
    },
    {
      title: "Workflows Automatisés",
      description: "Processus streamlinés pour maximiser la productivité des équipes commerciales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

      <div className="page-content">
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient blob - top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F0F8FF 0%, #E6F3FF 40%, #B3D9FF 70%, transparent 100%)'
               }}></div>

          {/* Medium accent blob - center right */}
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, #B3D9FF 0%, #2563EB 30%, transparent 70%)'
               }}></div>

          {/* Small atmospheric accent - bottom */}
          <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'linear-gradient(135deg, #FAFCFF 0%, #F0F8FF 50%, #E6F3FF 100%)'
               }}></div>

          {/* Flowing wave accent - mobile optimized */}
          <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #F0F8FF 20%, #B3D9FF 40%, #E6F3FF 60%, transparent 100%)'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">

            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Accélérez l'Analyse Des Offres Répétitives</Badge>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Une analyse go/no go   <span className="text-purple-600">immediate</span>, alignée avec vos <span className="text-purple-600">processus interne.</span>
                </h1>

                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  La seule plateforme pensée pour les petits projets à cycles courts : Agents IA d'analyse des points clés, automatisation d'une synthèse et validation guidée. Vous transformez des Heures de relecture et d'analyse en <span className="text-purple-600">minutes</span>, gagnez en sérénité et livrez une offre solide et incontestable — sans surcharge ni faux départs.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                >
                  Réservez une Démo
                </Button>
              </div>

              {/* Secondary CTA - Less Prominent */}
              <div className="mb-20">
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Solution de référence pour les offres rapides et efficaces</p>

                {/* Customer Logos / Trust Indicators */}
                <div className="flex items-center space-x-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={equansLogo} 
                          alt="Equans logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={bouyguesLogo} 
                          alt="Bouygues logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={colasLogo} 
                          alt="Colas logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                    </div>
                    <span>Adopté par les leaders de la construction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Video */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-full flex justify-center">
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-w-lg"
                  style={{
                    transform: 'scale(1.6)',
                    width: '500px',
                    height: '350px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - right side */}
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F0F8FF 0%, #B3D9FF 50%, #E6F3FF 80%, transparent 100%)'
               }}></div>

          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #E6F3FF 0%, #B3D9FF 60%, transparent 100%)'
               }}></div>

          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #2563EB 0%, #B3D9FF 40%, transparent 80%)'
               }}></div>

          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F0F8FF 0%, transparent 30%, #FAFCFF 70%, #E6F3FF 100%)'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Main Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>

            {/* Multi-tone Faded Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            {/* Content Container */}
            <div className="relative z-10 text-center">

              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Go / No-Go immédiat<span className="text-blue-600">, process interne garanti </span>
              </h2>

              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Sur les petits projets, la pression est double : analyser vite et prouver que tout a été lu, compris et contrôlé.
                <p>Sans support transversal (qualité, juridique), chaque oubli peut coûter cher en marge en exécution et du coup en crédibilité interne.</p>

              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec Aitenders, vous obtenez en quelques minutes une vision claire et priorisée de vos documents pour un go/no‑go immédiat. La plateforme guide ensuite la validation et archive chaque contrôle, garantissant que vos obligations internes sont remplies sans surcharge.


              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Boostez Vos Petits Projets!
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Voir la Démo Rapide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Alternating Layout Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing accent - top center */}
          <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FAFCFF 0%, #F0F8FF 30%, #B3D9FF 70%, transparent 100%)'
               }}></div>

          {/* Medium directional blob - middle left */}
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #E6F3FF 0%, #B3D9FF 50%, #2563EB 90%, transparent 100%)'
               }}></div>

          {/* Atmospheric accent - bottom right */}
          <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F0F8FF 0%, #E6F3FF 40%, transparent 100%)'
               }}></div>

          {/* Subtle flowing wave - center */}
          <div className="absolute top-1/2 left-0 w-full h-40 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #B3D9FF 25%, #F0F8FF 50%, #E6F3FF 75%, transparent 100%)'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Votre <span className="text-blue-600">copilote IA</span> qui accélère l'analyse de vos petits projets</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Décidez vite et prouvez que tout a été contrôlé, en moins de 48h.
            </p>
          </div>

          {/* Feature 1: Structuration IA immédiate - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Structuration instantanée pour un premier "go / no-go"  <span className="text-purple-600">immédiat</span> </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grâce aux assistants IA, vos documents sont instantanément analysés, classés et priorisés : critères d’intérêt, points critiques et preuves associées sont détectés en quelques minutes.
                <br /><br />
                Le Responsable Offre démarre ainsi avec une base claire et exploitable : vision globale du projet, identification des points bloquants éventuels et possibilité de décider quasi immédiatement d’un “go / no‑go”.
              </p>
              <div className="space-y-3 mb-8">


              </div>
              <p className="text-lg font-semibold text-blue-600">
                Votre analyse prête avant même la première réunion
              </p>
            </div>
            <div className="order-2">
              <div className="flex justify-center items-center h-full pl-20 pr-8 py-8">
                <img 
                  src={containerUc1Image}
                  alt="Analyse IA - Résumé projet"
                  className="w-full h-auto max-w-[500px] rounded-3xl shadow-2xl"
                  style={{
                    transform: 'scale(1.33)',
                    filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.15))'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Synthèse visuelle claire - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full pl-20 pr-8 py-8">
                <img 
                  src={containerUc1SecondImage}
                  alt="Synthèse Visuelle - Interface IA"
                  className="w-full h-auto max-w-[500px] rounded-3xl shadow-2xl"
                  style={{
                    transform: 'scale(1.33)',
                    filter: 'drop-shadow(0 25px 50px rgba(251, 146, 60, 0.15))'
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Accédez à une vision  <span className="text-orange-600">claire</span> de votre projet</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
               Aitenders génère une vue claire et priorisée de l'ensemble des critères détectés, avec leurs valeurs et les liens directs vers les documents sources.
                <br /><br />
                Le Responsable Offre n'a plus besoin de parcourir des centaines de pages ou de jongler entre plusieurs fichiers : tout est rassemblé dans une synthèse visuelle, exploitable immédiatement.
              </p>
              <div className="space-y-3 mb-8">
              </div>
              <p className="text-lg font-semibold text-orange-600">
                Votre revue interne prête en quelques minutes
              </p>
            </div>
          </div>

          {/* Feature 3: Validation guidée - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Validez et archivez chaque point <span className="text-green-600">sans effort</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders vous guide pas à pas pour confirmer, ajuster ou rejeter chaque élément identifié par l'IA.
                Chaque validation est automatiquement tracée et historisée, créant un dossier de preuves complet.          
                <br /><br />
                Le responsable d'offre passe d'une validation manuelle, lente et incertaine à un processus fluide, sécurisé et incontestable.
              </p>
              <div className="space-y-3 mb-8">

              </div>
              <p className="text-lg font-semibold text-green-600">
                Finies les zones grises : tout est validé et tracé.
              </p>
            </div>
            <div className="order-2">
              <div className="flex justify-center items-center h-full pl-20 pr-8 py-8">
                <img 
                  src={containerUc1ThirdImage}
                  alt="Validation IA - Interface de validation"
                  className="w-full h-auto max-w-[500px] rounded-3xl shadow-2xl"
                  style={{
                    transform: 'scale(1.33)',
                    filter: 'drop-shadow(0 25px 50px rgba(34, 197, 94, 0.15))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User-Focused Results Section - Before Additional Features */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">


          <div className="mb-20 md:mb-24 lg:mb-28">
          <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Ce que nos utilisateurs obtiennent concrètement pour les petites offres</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Des résultats mesurables pour chaque profil d'utilisateur</p>
            </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Directeur commercial directeyr de projet offre */}
            <div className="group">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Directeur Commercial ou Directeur des Offres</h4>
                    <p className="text-sm text-gray-600">Décision rapide, process validé, crédibilité renforcée</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Obtenez en moins de 48h une analyse complète et documentée, prête à présenter. Vous décidez dès le premier jour grâce à un go / no-go immédiat et démontrez que chaque point a été contrôlé et validé. Cette approche garantit la transparence, réduit les allers‑retours internes et renforce la confiance lors des comités.
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Décision éclairée dès J+1 grâce à une analyse instantanée

                  </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>  Process interne respecté et intégralement tracé

                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Transparence totale sur les points critiques</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>
                    Crédibilité renforcée lors des comités</span>
                  </div>
                </div>

              </Card>
            </div>


            {/* chef de projets */}
            <div className="group">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Responsable Offre, Chef de Projet, Assistants commercial</h4>
                    <p className="text-sm text-gray-600">Analyse rapide, validation fluide, sérénité retrouvée</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Travaillez dès le premier jour sur une base IA déjà structurée et priorisée, sans retraitement manuel. Vous disposez d’une vue synthétique et actionnable des points à valider, d’un accès immédiat aux preuves et d’un suivi clair de vos validations. Résultat : moins de stress, un gain de temps massif et la capacité de démontrer à tout moment que tout a été contrôlé et tracé.
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Moins de relectures, plus de décisions stratégiques

                  </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span> Chaque point couvert, chaque preuve archivée

                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Crédibilité renforcée face aux décideurs internes</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>
                    Validation fluide et intégralement documentée</span>
                  </div>
                </div>

              </Card>
            </div>



          </div>
        </div>

        {/* KPI Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* KPI 1 - Time Reduction */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl shadow-lg h-full flex flex-col justify-between min-h-[260px] relative">
                {/* Clean background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <MdAccessTime className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Metric */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-4 leading-tight tracking-tight">
                    -50% à -70%
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Gain de temps</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Réduction du temps d'analyse des documents</p>
                </div>
              </div>
            </div>

            {/* KPI 2 - Quality Assurance */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl shadow-lg h-full flex flex-col justify-between min-h-[260px] relative">
                {/* Clean background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <MdVerified className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Metric */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4 leading-tight tracking-tight">
                    100%
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Conformité</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Critères critiques vérifiés et documentés</p>
                </div>
              </div>
            </div>

            {/* KPI 3 - Peace of Mind */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl shadow-lg h-full flex flex-col justify-between min-h-[260px] relative">
                {/* Clean background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <MdEmojiEvents className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Metric */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4 leading-tight tracking-tight">
                    Sérénité maximale
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Impact organisationnel</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Confiance renforcée, stress réduit, zéro escalade interne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Toppings Section - Wow Features & Additional Functionalities */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
               style={{
                 background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)'
               }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{
                 background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)'
               }}></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
              <MdStars className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-sm md:text-base">Fonctionnalités Wow</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">capacités avancées</span> qui transforment votre approche commerciale
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà de la génération rapide, découvrez des fonctionnalités qui ajoutent une dimension stratégique à votre développement commercial.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Learning Engine */}
            <div className="group">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('learning-engine')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Moteur d'Apprentissage</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  L'IA apprend de vos succès et échecs pour optimiser continuellement la qualité et la pertinence de vos futures propositions.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-cyan-400 font-medium">
                    <span className="text-sm">Amélioration continue</span>
                    <MdAnalytics className="w-4 h-4 ml-2" />
                  </div>
                  
                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Client Customization */}
            <div className="group">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('client-customization')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Personnalisation Client</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Adaptation automatique du ton, des arguments et de la structure selon le profil et l'historique de chaque client cible.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-400 font-medium">
                    <span className="text-sm">Personnalisation IA</span>
                    <MdAutoAwesome className="w-4 h-4 ml-2" />
                  </div>
                  
                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Intelligence */}
            <div className="group">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('competitive-intelligence')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSearch className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Concurrentielle</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Analyse automatique du marché et suggestions d'arguments différenciants basés sur les tendances sectorielles.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium">
                    <span className="text-sm">Veille concurrentielle</span>
                    <MdGpsFixed className="w-4 h-4 ml-2" />
                  </div>
                  
                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* Success Prediction */}
            <div className="group">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('success-prediction')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transformduration-300">
                  <MdEmojiEvents className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Prédiction de Succès</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Score de probabilité de gain calculé en temps réel pour optimiser l'allocation de vos ressources commerciales.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-400 font-medium">
                    <span className="text-sm">Prédictif</span>
                    <MdTrackChanges className="w-4 h-4 ml-2" />
                  </div>
                  
                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Format Export */}
            <div className="group">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('multi-format-export')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdContentCopy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Export Multi-Format</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Génération automatique dans tous les formats requis : PDF, Word, PowerPoint avec charte graphique intégrée.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-pink-400 font-medium">
                    <span className="text-sm">Formats multiples</span>
                    <MdSwapHoriz className="w-4 h-4 ml-2" />
                  </div>
                  
                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Analytics */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdDashboard className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Analytics Avancées</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Tableau de bord avec métriques de performance commerciale, taux de conversion et ROI par type de projet.
                </p>

                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Business Intelligence</span>
                  <MdTableChart className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdPeople className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Collaboration d'équipe native, workflows fluides</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      Workflows collaboratifs intégrés permettant la révision, validation et finalisation en équipe avec traçabilité complète et notifications intelligentes.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Révision collaborative</span>
                        <MdGroups className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Validation workflow</span>
                        <MdVerified className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-gray-200 text-lg mb-8">
              Chaque fonctionnalité optimise votre efficacité commerciale
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              Explorer toutes les fonctionnalités →
            </Button>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">appels d'offres référence</span> sur les petits projets
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nos clients optimisent leurs petits projets avec l'IA Aitenders
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            
            {/* Project 1: Rénovation Écoles Municipales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdBusiness className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rénovation Écoles Municipales</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">Bâtiment</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">Offre : 850 K€</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Programme de rénovation énergétique de 15 écoles municipales avec mise aux normes accessibilité. 
                  Coordination simplifiée entre lots électriques, plomberie, isolation et menuiserie.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +45% temps économisé sur préparation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> 100% normes respectées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Documentation automatisée</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 5 corps de métier synchronisés</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Aménagement Zones Commerciales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdGpsFixed className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aménagement Zones Commerciales</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Aménagement</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">Offre : 720 K€</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Création d'espaces commerciaux modernes avec parkings et voiries associées. 
                  Gestion intégrée des réseaux, éclairage public et espaces verts sur 3 hectares.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +38% accélération des études</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Normes environnementales validées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Suivi temps réel simplifié</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 8 équipes coordonnées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Extension Centre de Santé */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Extension Centre de Santé</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">Santé</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">Offre : 950 K€</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Extension moderne d'un centre de santé avec salles de consultation et équipements médicaux. 
                  Coordination des lots techniques spécialisés avec contraintes d'exploitation continue.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +52% réduction délais conception</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Normes sanitaires strictes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Validation médicale continue</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 6 lots spécialisés</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance pour leurs offres répétitives</h3>
              </div>
              <div className="flex items-center justify-center space-x-12 animate-pulse">
                <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={colasLogo} alt="Colas" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={equansLogo} alt="Equans" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={bouyguesLogo} alt="Bouygues" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Integrated Chat Simulator - Enhanced */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-purple-100 rounded-full border border-purple-200 mb-6">
                  <MdAnalytics className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-semibold text-sm">Simulateur ROI Intégré</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Calculez votre <span className="text-purple-600">ROI en temps réel</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Simulateur intelligent intégré à la page pour une analyse immédiate de vos projets
                </p>
              </div>
              
              {/* Embedded Aitenders ROI Simulator Final */}
              <AitendersSimulatorFinal useCase="UC1" className="w-full" />
              

            </div>
          </div>
        </div>
      </section>


      {/* Chat Interface with UC1-specific actions */}
      <ChatInterface 
        language="fr"
        transparent={true}
        customActions={[
          {
            label: "Nos cas d'usage",
            icon: <span className="text-gray-400">+</span>,
            onClick: () => {} // Navigate to use cases
          },
          {
            label: "Demo UC1",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC1 demo
          },
          {
            label: "ROI Calculator", 
            icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Open ROI calculator
          },
          {
            label: "Contact Expert",
            icon: <MdMail className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Contact form
          }
        ]}
      />

      {/* Add padding to body to account for fixed chat */}
      <div className="h-32"></div>
      
      {/* Topping Modal */}
      <ToppingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        topping={selectedTopping}
      />
      </div>
    </div>
  );
}