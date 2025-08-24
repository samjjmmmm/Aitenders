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
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import client logos
import equansLogo from "@assets/Equans_1753711339292.png";
import bouyguesLogo from "@assets/Bouyges_1753711339292.png";
import colasLogo from "@assets/Colas_1753711339292.png";

// Import hero image
import uc1HeroImage from "@assets/UC1 HERO_1755876730972.png";
import containerUc1Image from "@assets/wow 1_1755783954069.png";
import containerUc1SecondImage from "@assets/wow 2_1755784888651.png";
import containerUc1ThirdImage from "@assets/wow 3_1755616987675.png";
import ChatSection from "@/components/chat-section";
import ChatInterface from "@/components/chat-interface";
import ToppingModal from "@/components/topping-modal";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import ClientLogos from "@/components/client-logos";
import HubSpotBookingModal from "@/components/hubspot-booking-modal";
import { useGlobalTranslations } from "@/contexts/TranslationContext";


export default function UC1Page() {
  const { t, currentLanguage, isLoading: translationsLoading } = useGlobalTranslations();
  const [selectedTopping, setSelectedTopping] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    },
    'project-summary': {
      name: 'Résumé Automatique du Projet',
      description: 'Génération automatique d\'un résumé exécutif structuré à partir de tous les documents du dossier d\'appel d\'offres.',
      icon: MdDescription,
      iconColor: 'text-blue-600',
      integration: {
        title: 'Intégration dans le workflow d\'analyse',
        steps: ['Analyse documents', 'Extraction clés', 'Génération résumé'],
        visual: 'L\'IA analyse tous les documents fournis et génère automatiquement un résumé structuré avec les points clés, enjeux et exigences principales.'
      },
      valueProposition: {
        buyer: {
          title: 'Directeurs Commerciaux',
          benefits: [
            'Vue d\'ensemble immédiate de chaque opportunité',
            'Prise de décision go/no-go accélérée',
            'Allocation optimale des ressources'
          ]
        },
        user: {
          title: 'Chargés d\'Affaires',
          benefits: [
            'Compréhension rapide des enjeux projet',
            'Points d\'attention identifiés automatiquement',
            'Base solide pour la stratégie d\'offre'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Temps compréhension projet', value: '-70%', icon: MdAccessTime },
        kpi2: { label: 'Qualité analyse préliminaire', value: '+85%', icon: MdStars },
        kpi3: { label: 'Réactivité commerciale', value: '+45%', icon: MdTrendingUp }
      }
    },
    'implicit-requirements': {
      name: 'Détection des Exigences Implicites',
      description: 'Identification automatique des attentes non exprimées et des exigences cachées dans les documents d\'appel d\'offres.',
      icon: MdSearch,
      iconColor: 'text-emerald-600',
      integration: {
        title: 'Analyse sémantique avancée',
        steps: ['Analyse textuelle', 'Détection patterns', 'Exigences implicites'],
        visual: 'Moteur IA qui détecte les sous-entendus, références croisées et exigences non explicitement formulées.'
      },
      valueProposition: {
        buyer: {
          title: 'Directeurs Commerciaux',
          benefits: [
            'Réduction des risques d\'offres non conformes',
            'Différenciation par compréhension fine',
            'Moins de clarifications post-soumission'
          ]
        },
        user: {
          title: 'Chargés d\'Affaires',
          benefits: [
            'Anticipation des attentes client',
            'Offres plus complètes et précises',
            'Confiance renforcée dans la réponse'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Conformité offres', value: '+92%', icon: MdVerified },
        kpi2: { label: 'Taux de clarifications', value: '-65%', icon: MdWarning },
        kpi3: { label: 'Précision réponses', value: '+78%', icon: MdGpsFixed }
      }
    },
    'document-summary': {
      name: 'Résumé Intelligent par Document',
      description: 'Synthèse automatique de chaque document avec extraction des points clés et classification par importance.',
      icon: MdTableChart,
      iconColor: 'text-orange-600',
      integration: {
        title: 'Traitement documentaire intelligent',
        steps: ['Analyse document', 'Extraction points clés', 'Classification importance'],
        visual: 'Interface avec résumés structurés par document, points clés surlignés et niveau d\'importance indiqué.'
      },
      valueProposition: {
        buyer: {
          title: 'Directeurs Commerciaux',
          benefits: [
            'Lecture rapide des dossiers complexes',
            'Identification immédiate des risques',
            'Priorisation efficace des actions'
          ]
        },
        user: {
          title: 'Chargés d\'Affaires',
          benefits: [
            'Gain de temps considérable en lecture',
            'Points critiques jamais manqués',
            'Navigation fluide dans la documentation'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Temps analyse documents', value: '-80%', icon: MdAccessTime },
        kpi2: { label: 'Points clés identifiés', value: '100%', icon: MdCheckCircle },
        kpi3: { label: 'Efficacité lecture', value: '+120%', icon: MdTrendingUp }
      }
    },
    'document-hierarchy': {
      name: 'Gestion Dynamique de la Hiérarchie',
      description: 'Organisation automatique des documents par importance, dépendances et impact sur l\'offre.',
      icon: MdAccountTree,
      iconColor: 'text-purple-600',
      integration: {
        title: 'Structuration intelligente des dossiers',
        steps: ['Analyse relations', 'Hiérarchisation', 'Navigation optimisée'],
        visual: 'Arbre interactif montrant les relations entre documents avec niveaux de priorité et chemins de lecture optimisés.'
      },
      valueProposition: {
        buyer: {
          title: 'Directeurs Commerciaux',
          benefits: [
            'Vision claire de l\'architecture documentaire',
            'Priorisation objective des efforts',
            'Réduction des oublis critiques'
          ]
        },
        user: {
          title: 'Chargés d\'Affaires',
          benefits: [
            'Parcours de lecture optimisé',
            'Dépendances documentaires clarifiées',
            'Efficacité maximale dans l\'analyse'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Organisation documentaire', value: '+95%', icon: MdAccountTree },
        kpi2: { label: 'Efficacité navigation', value: '+75%', icon: MdSwapHoriz },
        kpi3: { label: 'Compréhension globale', value: '+68%', icon: MdStars }
      }
    },
    'content-categorization': {
      name: 'Catégorisation Intelligente',
      description: 'Classification automatique du contenu par thématiques avec création d\'un arbre de navigation intuitif.',
      icon: MdSchema,
      iconColor: 'text-pink-600',
      integration: {
        title: 'Taxonomie automatique du contenu',
        steps: ['Analyse sémantique', 'Classification thématique', 'Arbre navigation'],
        visual: 'Interface avec catégories automatiques, tags intelligents et arbre thématique pour navigation rapide.'
      },
      valueProposition: {
        buyer: {
          title: 'Directeurs Commerciaux',
          benefits: [
            'Accès rapide à l\'information recherchée',
            'Vue transversale par thématique',
            'Exploitation optimale de la documentation'
          ]
        },
        user: {
          title: 'Chargés d\'Affaires',
          benefits: [
            'Recherche intuitive par sujet',
            'Regroupement logique des informations',
            'Productivité maximale dans l\'analyse'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Rapidité recherche info', value: '+85%', icon: MdSearch },
        kpi2: { label: 'Organisation contenu', value: '+90%', icon: MdSchema },
        kpi3: { label: 'Exhaustivité analyse', value: '+72%', icon: MdCheckCircle }
      }
    },
    'project-chat': {
      name: 'Chat Contextuel avec le Projet',
      description: 'Assistant IA conversationnel qui répond aux questions sur le projet en temps réel avec références aux sources.',
      icon: MdMessage,
      iconColor: 'text-indigo-600',
      integration: {
        title: 'Assistant intelligent intégré',
        steps: ['Question naturelle', 'Analyse contextuelle', 'Réponse sourcée'],
        visual: 'Interface de chat avec réponses instantanées, références aux documents sources et suggestions de questions.'
      },
      valueProposition: {
        buyer: {
          title: 'Directeurs Commerciaux',
          benefits: [
            'Réponses immédiates aux questions urgentes',
            'Pas de dépendance aux experts internes',
            'Accélération de la prise de décision'
          ]
        },
        user: {
          title: 'Chargés d\'Affaires',
          benefits: [
            'Clarifications instantanées',
            'Exploration interactive du dossier',
            'Autonomie complète dans l\'analyse'
          ]
        }
      },
      impact: {
        kpi1: { label: 'Temps résolution questions', value: '-90%', icon: MdAccessTime },
        kpi2: { label: 'Autonomie utilisateur', value: '+95%', icon: MdPeople },
        kpi3: { label: 'Qualité réponses', value: '+88%', icon: MdStars }
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
      title: t('uc1.audiences.business_dev.title'),
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: t('uc1.audiences.business_dev.description'),
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: t('uc1.audiences.business_dev.notification'),
      alert: t('uc1.audiences.business_dev.alert')
    },
    {
      id: 'proposal-manager',
      title: t('uc1.audiences.proposal_manager.title'),
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: t('uc1.audiences.proposal_manager.description'),
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: t('uc1.audiences.proposal_manager.notification'),
      alert: t('uc1.audiences.proposal_manager.alert')
    },
    {
      id: 'project-director',
      title: t('uc1.audiences.project_director.title'),
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: t('uc1.audiences.project_director.description'),
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: t('uc1.audiences.project_director.notification'),
      alert: t('uc1.audiences.project_director.alert')
    },
    {
      id: 'sales-director',
      title: t('uc1.audiences.sales_director.title'),
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: t('uc1.audiences.sales_director.description'),
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: t('uc1.audiences.sales_director.notification'),
      alert: t('uc1.audiences.sales_director.alert')
    },
    {
      id: 'operations-manager',
      title: t('uc1.audiences.operations_manager.title'),
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: t('uc1.audiences.operations_manager.description'),
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: t('uc1.audiences.operations_manager.notification'),
      alert: t('uc1.audiences.operations_manager.alert')
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: t('uc1.pain_points.title1'),
      description: t('uc1.pain_points.description1')
    },
    {
      icon: MdDescription,
      title: t('uc1.pain_points.title2'),
      description: t('uc1.pain_points.description2')
    },
    {
      icon: FaUsers,
      title: t('uc1.pain_points.title3'),
      description: t('uc1.pain_points.description3')
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: t('uc1.solutions.title1'),
      description: t('uc1.solutions.description1')
    },
    {
      icon: MdGroups,
      title: t('uc1.solutions.title2'),
      description: t('uc1.solutions.description2')
    },
    {
      icon: MdSecurity,
      title: t('uc1.solutions.title3'),
      description: t('uc1.solutions.description3')
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: t('uc1.journey.title1'),
      description: t('uc1.journey.description1'),
      icon: MdDescription
    },
    {
      step: "2", 
      title: t('uc1.journey.title2'),
      description: t('uc1.journey.description2'),
      icon: MdGroups
    },
    {
      step: "3",
      title: t('uc1.journey.title3'), 
      description: t('uc1.journey.description3'),
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: t('uc1.kpis.metric1_value'),
      description: t('uc1.kpis.metric1_description')
    },
    {
      metric: t('uc1.kpis.metric2_value'),
      description: t('uc1.kpis.description2')
    },
    {
      metric: t('uc1.kpis.metric3_value'),
      description: t('uc1.kpis.metric3_description')
    },
    {
      metric: "100%",
      description: t('uc1.kpis.description4')
    }
  ];

  const differentiators = [
    {
      title: t('uc1.differentiators.title1'),
      description: t('uc1.differentiators.description1')
    },
    {
      title: t('uc1.differentiators.title2'),
      description: t('uc1.differentiators.description2')
    },
    {
      title: t('uc1.differentiators.title3'),
      description: t('uc1.differentiators.description3')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

      <main className="page-content">
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

        <div className="content-boundary relative z-10">

            {/* Content UC1 - Top */}
            <div className="w-full max-w-5xl px-4">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">{t('uc1.hero.badge')}</Badge>
                </motion.div>

                <motion.h1
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {t('uc1.hero.title')} <span className="text-purple-600">{t('uc1.hero.span')}</span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {t('uc1.hero.description')}
                </motion.p>
              </motion.div>

              {/* CTA Buttons - Side by Side */}
              <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  {t('uc1.hero.demoButton')}
                </Button>

                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  {t('uc1.hero.downloadButton')}
                </Button>
              </div>

            </div>

            {/* Hero Image - Bottom */}
            <motion.div 
              className="w-full max-w-7xl mx-auto mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.3
              }}
            >
              <div className="flex justify-center items-center">
                <div className="relative flex justify-center items-center h-full px-0 py-6">
                  <img
                    src={uc1HeroImage}
                    alt="Aitenders UC1 Interface"
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
            </motion.div>
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

        <div className="content-boundary relative z-10">

          {/* Main Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20 fade-in-up"
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
                {t('uc1.painPoints.headline')}
                <span className="text-blue-600">{t('uc1.painPoints.headline_span')}</span>
              </h2>

              {/* Body Copy */}
              <div className="text-xl text-gray-600 leading-relaxed mb-8 font-light space-y-4">
                <p>{t('uc1.painPoints.text1')}</p>
                <p>{t('uc1.painPoints.text2')}</p>
                <p>{t('uc1.painPoints.text3')}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  {t('uc1.painPoints.contactButton')}
                </Button>
                <HubSpotBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
                <Button variant="outline" size="lg" className="group">
                  <MdPlayArrow className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  {t('uc1.painPoints.demoButton')}
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

        <div className="content-boundary relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              {t('uc1.solution_section.mainTitle')}
              <span className="text-blue-600">{t('uc1.solution_section.mainTitle_span')}</span>
              <br />
              {t('uc1.solution_section.mainTitle2')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('uc1.solution_section.subtitle')}
            </p>
          </div>

          {/* Feature 1: Structuration IA immédiate - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 fade-in-left lg:pr-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc1.solution_section.feature1_title')}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc1.solution_section.feature1_text')}
              </p>
              <p className="text-base md:text-lg font-semibold text-blue-600">
                {t('uc1.solution_section.feature1_highlight')}
              </p>
            </div>
            <div className="order-2">
              <div className="relative flex justify-center items-center h-full px-0 py-6">
                <img
                  src={containerUc1Image}
                  alt="Mock UI"
                  className="block w-[640px] md:w-[760px] lg:w-[880px] max-w-full h-auto select-none pointer-events-none object-contain"
                  style={{
                    transform: 'scale(1.14)',
                    transformOrigin: 'center',
                    imageRendering: 'auto',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Synthèse visuelle claire - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1 fade-in-left">
              <div className="relative flex justify-center items-center h-full px-0 py-6">
                <img
                  src={containerUc1SecondImage}
                  alt="Mock UI"
                  className="block w-[640px] md:w-[760px] lg:w-[880px] max-w-full h-auto select-none pointer-events-none object-contain"
                  style={{
                    transform: 'scale(1.12)',
                    transformOrigin: 'center',
                    imageRendering: 'auto',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 fade-in-right lg:pl-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc1.solution_section.feature2_title')}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc1.solution_section.feature2_text')}
              </p>
              <p className="text-base md:text-lg font-semibold text-orange-600">
                {t('uc1.solution_section.feature2_highlight')}
              </p>
            </div>
          </div>

          {/* Feature 3: Validation guidée - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1 fade-in-left lg:pr-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-[1.1] tracking-tight">{t('uc1.solution_section.feature3_title')}</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                {t('uc1.solution_section.feature3_text')}
              </p>
              <p className="text-base md:text-lg font-semibold text-green-600">
                {t('uc1.solution_section.feature3_highlight')}
              </p>
            </div>
            <div className="order-2 fade-in-right">
              <div className="relative flex justify-center items-center h-full px-0 py-6">
                <img
                  src={containerUc1ThirdImage}
                  alt="Mock UI"
                  className="block w-[640px] md:w-[760px] lg:w-[880px] max-w-full h-auto select-none pointer-events-none object-contain"
                  style={{
                    transform: 'scale(1.12)',
                    transformOrigin: 'center',
                    imageRendering: 'auto',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User-Focused Results Section - Before Additional Features */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="content-boundary">


          <div className="mb-20 md:mb-24 lg:mb-28">
          <div className="text-center mb-12 md:mb-16 fade-in-up">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{t('uc1.results.headline')}</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('uc1.results.subtitle')}</p>
            </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Directeur commercial directeyr de projet offre */}
            <div className="group fade-in-left">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{t('uc1.results.role1_title')}</h4>
                    <p className="text-sm text-gray-600">{t('uc1.results.role1_subtitle')}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {t('uc1.results.role1_text1')}
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{t('uc1.results.role1_benefit1')}
                  </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>  {t('uc1.results.role1_benefit2')}

                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{t('uc1.results.role1_benefit3')}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>
                    {t('uc1.results.role1_benefit4')}</span>
                  </div>
                </div>

              </Card>
            </div>


            {/* chef de projets */}
            <div className="group fade-in-right">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{t('uc1.results.role2_title')}</h4>
                    <p className="text-sm text-gray-600">{t('uc1.results.role2_subtitle')}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {t('uc1.results.role2_text1')}
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{t('uc1.results.role2_benefit1')}
                  </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>  {t('uc1.results.role2_benefit2')}

                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{t('uc1.results.role2_benefit3')}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>
                    {t('uc1.results.role2_benefit4')}</span>
                  </div>
                </div>

              </Card>
            </div>



          </div>
        </div>

        {/* KPI Grid */}
        <div className="content-boundary fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* KPI 1 - Time Reduction */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 text-center border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/50 shadow-xl h-full flex flex-col justify-between min-h-[260px] relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent rounded-3xl opacity-60"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center shadow-lg border border-gray-600 group-hover:scale-105 transition-transform duration-300">
                    <MdAccessTime className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Metric */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                    -50% à -70%
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('uc1.kpis.metric1_title')}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{t('uc1.kpis.metric1_description')}</p>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('uc1.kpis.metric2_title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('uc1.kpis.metric2_description')}</p>
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
                    {t('uc1.kpis.metric3_title')}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('uc1.kpis.metric3_subtitle')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('uc1.kpis.metric3_description')}</p>
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

        <div className="content-boundary relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24 fade-in-up">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
              <MdStars className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-sm md:text-base">{t('uc1.features.headline')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              {t('uc1.features.title1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">{t('uc1.features.title2')}</span>
              {t('uc1.features.title3')}
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              {t('uc1.features.subtitle')}
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* 1️⃣ Résumé automatique du projet */}
            <div className="group fade-in-up">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('project-summary')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdDescription className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc1.features.project_summary.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc1.features.project_summary.description')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-cyan-400 font-medium">
                    <span className="text-sm">Project Summary</span>
                    <MdAutoAwesome className="w-4 h-4 ml-2" />
                  </div>

                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ Détection des exigences implicites */}
            <div className="group fade-in-up">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('implicit-requirements')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSearch className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc1.features.implicit_requirements.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc1.features.implicit_requirements.description')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-400 font-medium">
                    <span className="text-sm">Implicit Requirement Detector</span>
                    <MdWarning className="w-4 h-4 ml-2" />
                  </div>

                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* 3️⃣ Résumé intelligent de chaque document */}
            <div className="group fade-in-up">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('document-summary')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdContentCopy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc1.features.document_summary.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc1.features.document_summary.description')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium">
                    <span className="text-sm">Document Summary</span>
                    <MdCreate className="w-4 h-4 ml-2" />
                  </div>

                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* 4️⃣ Gestion dynamique de la hiérarchie documentaire */}
            <div className="group fade-in-up">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('document-hierarchy')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc1.features.document_hierarchy.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc1.features.document_hierarchy.description')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-400 font-medium">
                    <span className="text-sm">Document Precedence</span>
                    <MdSchema className="w-4 h-4 ml-2" />
                  </div>

                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* 5️⃣ Catégorisation intelligente & arbre thématique */}
            <div className="group fade-in-up">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('content-categorization')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdCallSplit className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc1.features.content_categorization.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc1.features.content_categorization.description')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-pink-400 font-medium">
                    <span className="text-sm">Content Categorization</span>
                    <MdTimeline className="w-4 h-4 ml-2" />
                  </div>

                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

            {/* 6️⃣ Chat contextuel avec le projet */}
            <div className="group fade-in-up">
              <div 
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full cursor-pointer"
                onClick={() => handleToppingClick('project-chat')}
              >
                {/* Expand Icon - appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MdArrowForward className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdMessage className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('uc1.features.project_chat.title')}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  {t('uc1.features.project_chat.description')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-red-400 font-medium">
                    <span className="text-sm">Chat with Project Data</span>
                    <MdMessage className="w-4 h-4 ml-2" />
                  </div>

                  {/* Click indicator */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white text-xs">
                    Cliquez pour détails
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-gray-200 text-lg mb-8">
              {t('uc1.features.cta_subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              {t('uc1.features.cta_button')}
            </Button>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="content-boundary">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              {t('uc1.projects.headline1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{t('uc1.projects.headline2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('uc1.projects.subtitle')}
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

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc1.projects.project1_title')}</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">{t('uc1.projects.project1_category')}</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">{t('uc1.projects.project1_offer')}</div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('uc1.projects.project1_description')}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('uc1.projects.project1_impact_title')}</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span>{t('uc1.projects.project1_impact1')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{t('uc1.projects.project1_impact2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{t('uc1.projects.project1_impact3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{t('uc1.projects.project1_impact4')}</span>
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

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc1.projects.project2_title')}</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">{t('uc1.projects.project2_category')}</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">{t('uc1.projects.project2_offer')}</div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('uc1.projects.project2_description')}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('uc1.projects.project2_impact_title')}</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span>{t('uc1.projects.project2_impact1')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{t('uc1.projects.project2_impact2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{t('uc1.projects.project2_impact3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{t('uc1.projects.project2_impact4')}</span>
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

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('uc1.projects.project3_title')}</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">{t('uc1.projects.project3_category')}</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">{t('uc1.projects.project3_offer')}</div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('uc1.projects.project3_description')}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('uc1.projects.project3_impact_title')}</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span>{t('uc1.projects.project3_impact1')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{t('uc1.projects.project3_impact2')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{t('uc1.projects.project3_impact3')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{t('uc1.projects.project3_impact4')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20 fade-in-up">
            <ClientLogos language="fr" />
          </div>

          {/* Integrated Chat Simulator - Enhanced */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden fade-in-up">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-purple-100 rounded-full border border-purple-200 mb-6">
                  <MdAnalytics className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-semibold text-sm">{t('uc1.roi_simulator.title')}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t('uc1.roi_simulator.headline1')}
                  <span className="text-purple-600">{t('uc1.roi_simulator.headline2')}</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t('uc1.roi_simulator.subtitle')}
                </p>
              </div>

              {/* Embedded Aitenders ROI Simulator Final */}
              <AitendersSimulatorFinal 
                useCase="UC1" 
                className="w-full" 
                // Pass translations to the simulator if it uses them
                // translations={{ title: t('simulator.title'), ... }} 
              />


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

      {/* HubSpot Booking Modal */}
      <HubSpotBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      </main>
    </div>
  );
}