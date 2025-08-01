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
  MdRotateRight, MdFlag, MdMail
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

// Import hero image
import heroImage from "@assets/Dell XPS 15__1754046364427.png";
import ChatSection from "@/components/chat-section";
import ChatInterface from "@/components/chat-interface";

export default function UC1Page() {
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
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Accélérez Vos Offres</Badge>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Analyse express. Contrôle total. Confiance immédiate.
                </h1>

                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  Validez tous les critères en moins de 48h, rassurez votre hiérarchie et gagnez un temps précieux, grâce à une analyse complète, cohérente et prête à présenter.
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

            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full">
                <img 
                  src={heroImage}
                  alt="Aitenders Document Review Interface"
                  className="w-full h-auto max-w-none"
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
                Quand chaque heure compte, <span className="text-blue-600">vos validations ne peuvent pas attendre</span>
              </h2>

              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Sur les petits projets répétés, il faut valider vite et rassurer sa hiérarchie, souvent sans équipe support. Les relectures manuelles rallongent les délais, multiplient les erreurs et ajoutent un stress inutile.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec Aitenders, vos documents deviennent exploitables dès le premier jour : structuration automatique, exigences identifiées et points clés synthétisés. Vous gagnez un temps précieux et validez sereinement vos projets en moins de 48 heures.
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Ne perdez plus de jours précieux <span className="text-blue-600">à tout relire</span></h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Aitenders transforme vos documents en une base claire et exploitable dès le premier jour, pour décider plus vite et valider sans stress.
            </p>
          </div>

          {/* Feature 1: Structuration IA immédiate - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Structuration IA immédiate</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Vos documents sont analysés automatiquement pour fournir une base exploitable dès leur dépôt.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Clauses et exigences extraites et classées par priorité</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Détection instantanée des incohérences ou doublons</span>```text
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Vision stratégique claire en quelques minutes</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-blue-600">
                Vous réduisez de 50 % le temps nécessaire au cadrage initial.
              </p>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Bid Generation</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MdFlashOn className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Technical response ready</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Complete</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Commercial proposal generated</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">90%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-sm text-gray-700">Final review pending</span>
                      <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <MdAccessTime className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Synthèse visuelle claire - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Synthèse Visuelle</h4>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MdGroups className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Tableaux de critères</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Prêts</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Liens vers sources</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Directs</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Points de vigilance</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdSettings className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Synthèse visuelle claire et <span className="text-orange-600">actionnable</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Une vue consolidée présente vos critères critiques avec des preuves directement accessibles.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Tableaux de critères prêts à l'emploi</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Liens directs vers les passages contractuels sources</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Mise en évidence automatique des points de vigilance</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-orange-600">
                Vous divisez par trois le temps d'analyse et gagnez en précision.
              </p>
            </div>
          </div>

          {/* Feature 3: Validation guidée - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Validation guidée et <span className="text-green-600">tracée</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Chaque exigence suit un processus de validation structuré et documenté.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Acceptation, ajustement ou rejet avec justification associée</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Historique complet des validations et décisions</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MdCheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>Dossier de conformité prêt pour hiérarchie ou audit</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-green-600">
                Vous validez sereinement tous vos critères en moins de 48 heures.
              </p>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Validation Guidée</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdSecurity className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Processus structuré</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Actif</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Traçabilité complète</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Documenté</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Dossier conformité</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdVerified className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User-Focused Results Section - Before Additional Features */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          
          <div className="mb-20 md:mb-24 lg:mb-28">
          <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Des résultats concrets pour chaque rôle clé</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Aitenders permet à chaque acteur de la réponse aux appels d'offres de gagner du temps, d'assurer la conformité et de présenter des dossiers solides en toute confiance.</p>
            </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Rédacteurs & Chefs de projet offre */}
            <div className="group">
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdEdit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Rédacteurs & Chefs de projet offre</h4>
                    <p className="text-sm text-gray-600">Génération de contenu</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Produisez des réponses structurées, conformes et prêtes à convaincre dès le premier jour.
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>90% du contenu généré automatiquement à partir du cahier des charges</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Argumentaires alignés sur les attentes de l'acheteur</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Temps libéré pour renforcer la valeur ajoutée de l'offre</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/70 rounded-lg border border-gray-200/30">
                  <p className="text-sm text-gray-700 font-medium">Vous livrez une proposition complète et différenciante en quelques heures, pas en plusieurs jours.</p>
                </div>
              </Card>
            </div>

            {/* Contract Managers & Responsables conformité */}
            <div className="group">
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdVerified className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Contract Managers & Responsables conformité</h4>
                    <p className="text-sm text-gray-600">Conformité sécurisée</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Assurez la couverture de chaque exigence et réduisez vos risques de non‑conformité.
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Paragraphes directement reliés à leurs exigences sources</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Vérification instantanée de la cohérence et de la traçabilité</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Justification documentée prête pour audits et négociations</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/70 rounded-lg border border-gray-200/30">
                  <p className="text-sm text-gray-700 font-medium">Vous éliminez jusqu'à 90% des risques de rejet liés à la conformité.</p>
                </div>
              </Card>
            </div>

            {/* Directeurs techniques & PMO */}
            <div className="group">
              <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50 hover:border-opacity-75 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <MdDashboard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Directeurs techniques & PMO</h4>
                    <p className="text-sm text-gray-600">Visibilité et pilotage</p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Supervisez la cohérence globale et garantissez un suivi clair pour la direction.
                </p>

                <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Tableaux de bord en temps réel sur la couverture des livrables</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Processus de validation simplifié et collaboratif</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Historique centralisé prêt pour audits et comités</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/70 rounded-lg border border-gray-200/30">
                  <p className="text-sm text-gray-700 font-medium">Vous réduisez vos cycles de validation de moitié et offrez un suivi transparent à la direction.</p>
                </div>
              </Card>
            </div>
          </div>
          
          
          
          
          

          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  80 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Réduction du temps de rédaction d'offres</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  90 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Couverture automatique des exigences</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 text-center border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  2h
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Délai moyen de génération d'offre</p>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Conformité des livrables</p>
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
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Moteur d'Apprentissage</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  L'IA apprend de vos succès et échecs pour optimiser continuellement la qualité et la pertinence de vos futures propositions.
                </p>

                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Amélioration continue</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Multi-Client Customization */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Personnalisation Client</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Adaptation automatique du ton, des arguments et de la structure selon le profil et l'historique de chaque client cible.
                </p>

                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Personnalisation IA</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Competitive Intelligence */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSearch className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Concurrentielle</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Analyse automatique du marché et suggestions d'arguments différenciants basés sur les tendances sectorielles.
                </p>

                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Veille concurrentielle</span>
                  <MdGpsFixed className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Success Prediction */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transformduration-300">
                  <MdEmojiEvents className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Prédiction de Succès</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Score de probabilité de gain calculé en temps réel pour optimiser l'allocation de vos ressources commerciales.
                </p>

                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Prédictif</span>
                  <MdTrackChanges className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Multi-Format Export */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdContentCopy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Export Multi-Format</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Génération automatique dans tous les formats requis : PDF, Word, PowerPoint avec charte graphique intégrée.
                </p>

                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Formats multiples</span>
                  <MdSwapHoriz className="w-4 h-4 ml-2" />
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

      {/* Ce qui change avec Aitenders Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Ce qui change avec Aitenders</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la transformation complète, des réponses bâclées aux offres professionnelles gagnantes.
            </p>
          </div>

          {/* Simulator Placeholder */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MdPlayArrow className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Simulateur de Performance Commerciale</h4>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Visualisez l'impact de l'IA sur votre taux de conversion et votre efficacité commerciale avec notre simulateur interactif.
            </p>
            <div className="bg-gray-100 rounded-2xl p-12 text-gray-500">
              <MdSettings className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Simulateur en cours de développement</p>
              <p className="text-sm mt-2">Cette fonctionnalité sera bientôt disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

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
    </div>
  );
}