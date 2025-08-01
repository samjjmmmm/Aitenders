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
import ChatSection from "@/components/chat-section";
import ChatInterface from "@/components/chat-interface";

export default function UC2Page() {
  // Target audience data with interactive content - UC2 adapted
  const targetAudiences = [
    {
      id: 'proposal-managers',
      title: 'Proposal Managers',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Gérez des projets moyens avec complexité modérée tout en maintenant la qualité et les délais. Coordonnez efficacement les équipes techniques et commerciales pour produire des offres structurées et convaincantes.',
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
      title: 'Managers techniques',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Supervisez la cohérence technique des propositions moyennes avec des workflows optimisés. Assurez la qualité des livrables techniques tout en respectant les contraintes budgétaires et temporelles.',
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
      title: 'Directeurs commerciaux',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Optimisez votre pipeline de projets moyens avec une visibilité complète sur les performances et les risques. Maximisez le taux de conversion grâce à des processus standardisés et efficaces.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Pipeline optimisé',
      alert: '✅ ROI maximisé'
    },
    {
      id: 'project-directors',
      title: 'Directeurs de projets',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Pilotez la livraison de projets moyens avec des outils de suivi et de contrôle avancés. Assurez la conformité opérationnelle et la satisfaction client sur l\'ensemble du portfolio.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Projets pilotés',
      alert: '📋 Conformité validée'
    },
    {
      id: 'operations-managers',
      title: 'Responsables opérationnels',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Standardisez les processus opérationnels pour les projets moyens avec une approche méthodique. Optimisez les ressources et réduisez les délais grâce à l\'automatisation intelligente.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Processus optimisés',
      alert: '🎯 Efficacité +60%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

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

  const userJourneySteps = [
    {
      step: "1",
      title: "Analysez votre projet moyen",
      description: "Importez vos documents et laissez l'IA structurer automatiquement les exigences et les ressources nécessaires",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Coordonnez vos équipes",
      description: "Organisez efficacement les interactions entre équipes techniques et commerciales avec des workflows optimisés",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Livrez avec excellence", 
      description: "Suivez l'avancement en temps réel et assurez la qualité des livrables avec des contrôles automatisés",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "70%",
      description: "Réduction du temps de coordination"
    },
    {
      metric: "85%",
      description: "Amélioration de la qualité des livrables"
    },
    {
      metric: "3-5 jours",
      description: "Délai moyen de structuration projet"
    },
    {
      metric: "100%",
      description: "Traçabilité des processus"
    }
  ];

  const differentiators = [
    {
      title: "Solution Optimisée Projets Moyens",
      description: "Conçue spécifiquement pour équilibrer complexité et efficacité sur les projets intermédiaires"
    },
    {
      title: "Intelligence Collaborative Avancée",
      description: "IA spécialisée dans la coordination multi-équipes et la gestion des dépendances"
    },
    {
      title: "Flexibilité et Standardisation",
      description: "Processus adaptatifs qui s'ajustent à la complexité spécifique de chaque projet"
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
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Optimisez Vos Projets</Badge>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Votre offre, 100% claire, 0% surprise.
                </h1>

                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  Transformez un dossier dense et complexe en une vision contractuelle claire dès les premières heures. Gagnez du temps, crédibilisez votre réponse et livrez une offre sans aucune surprise de dernière minute.
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
                <p className="text-sm text-gray-500 mb-6">Solution de référence pour la gestion de projets moyens</p>

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

            {/* Right Side - Realistic Product Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">

                {/* Main Dashboard Mockup */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden backdrop-blur-sm"
                     style={{
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                     }}>

                  {/* Browser Header */}
                  <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">AItenders - Medium Project Manager</div>
                    <div className="w-12"></div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Medium Scale Project</h3>
                        <p className="text-gray-600">€2.5M infrastructure • 8 teams coordination</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Coordinating</span>
                      </div>
                    </div>

                    {/* Project Overview */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                        <div className="text-3xl font-bold text-blue-700 mb-2">8</div>
                        <div className="text-sm text-gray-600">Teams coordinated</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                        <div className="text-3xl font-bold text-green-700 mb-2">85%</div>
                        <div className="text-sm text-gray-600">Project completion</div>
                      </div>
                    </div>

                    {/* Team Coordination */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Coordination</h4>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MdGroups className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Technical Teams</div>
                            <div className="text-sm text-gray-600">Aligned and productive</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-green-600">Excellent</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <MdTableChart className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Resource Planning</div>
                            <div className="text-sm text-gray-600">Optimized allocation</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-blue-600">Optimized</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                            <MdVerified className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Quality Control</div>
                            <div className="text-sm text-gray-600">Automated validation</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '88%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-orange-600">Strong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Coordination Alerts */}
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-bounce">
                  <div className="flex items-center space-x-2">
                    <MdGroups className="w-4 h-4" />
                    <span>Teams aligned</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-pulse">
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="w-4 h-4" />
                    <span>85% complete</span>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-200/15 rounded-full blur-3xl"></div>
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
                Structuration automatique du périmètre dès le jour 1
              </h2>

              {/* Body Copy */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Vos équipes, souvent réduites et dispersées, passent des heures à relire et comparer des versions. Résultat : décisions prises dans l'urgence, incohérences non détectées et risque accru de perte de crédibilité.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec Aitenders, vos documents sont analysés automatiquement : contradictions détectées, clauses critiques identifiées et versions harmonisées. Vous gagnez en rapidité et validez chaque critère avec une fiabilité totale.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Optimisez Vos Projets Moyens!
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Voir la Démonstration
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Votre <span className="text-blue-600">copilote IA</span> pour sécuriser vos réponses dès le premier jour</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Aitenders transforme vos dossiers complexes en réponses structurées et conformes, pour livrer en toute sérénité.
            </p>
          </div>

          {/* Feature 1: Structuration automatique - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Structuration instantanée pour un premier "go / no-go" immédiat</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dès le chargement du dossier, Aitenders organise vos documents et extrait toutes les clauses critiques.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Identification immédiate des obligations, échéances et pénalités</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Classement par priorité et par thématique</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Vision claire de la charge et des risques dès le départ</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-blue-600">
                Vous réduisez de 50 % le temps de cadrage et éliminez les oublis critiques.
              </p>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Document Analysis</h4>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MdDescription className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Obligations extracted</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Complete</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Priority classification</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Structured</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Risk assessment</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Détection automatique - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Risk Detection</h4>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MdWarning className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Critical clauses identified</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Detected</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">SLA monitoring</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Validation ready</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdVerified className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdWarning className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Une analyse proactive et une cohérence contractuelle garantie dès   <span className="text-orange-600">le premier scan</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Grâce à l’IA d’Aitenders, vos documents sont instantanément segmentés et organisés en lots et critères contractuels.

                Le Responsable Offre accède immédiatement à une vue synthétique : points bloquants, écarts et zones sensibles sont visibles sans parcourir des centaines de pages.

                Votre vision claire et priorisée dès le premier jour
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Contrôle instantané des délais, SLA et pénalités</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Alertes précises sur les clauses sensibles et incohérentes</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Suivi documenté prêt pour validation hiérarchique</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-orange-600">
                Vous évitez jusqu'à 90 % des risques de rejet liés aux erreurs contractuelles.
              </p>
            </div>
          </div>

          {/* Feature 3: Pilotage dynamique - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdDashboard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">Un contrôle total sur chaque évolution, <span className="text-green-600">sans surprisess</span></h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Collaborez efficacement sur chaque réponse et gardez toujours la bonne version sous contrôle.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Suivi en temps réel des questions, réponses et validations</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Gestion des versions et historique des modifications</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Tableaux de bord partagés pour assurer la cohérence globale</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-green-600">
                Vous gagnez plusieurs jours de coordination et livrez une réponse sans faille.
              </p>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Collaboration Control</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdGroups className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Q&A tracking</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Real-time</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Version control</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Managed</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Global consistency</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
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
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Des résultats concrets pour chaque acteur clé</h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Aitenders aide chaque profil impliqué dans les appels d’offres complexes à gagner du temps, sécuriser la conformité et livrer des réponses crédibles sans compromis.</p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

              {/* Proposal Managers */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les Bid Managers</h4>
                      <p className="text-sm text-gray-600">Décision accélérée et sans erreur</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Accélérez la qualification et livrez des propositions solides sans perdre de temps en relectures manuelles.
                  </p>

                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>
                        et incohérences</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Tableaux de critères prêts à valider dès le jour 1</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Gain de temps majeur pour affiner l’argumentaire</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-blue-200/30">
                    <p className="text-sm text-gray-700 font-medium">Vous transformez des dossiers complexes en offres prêtes à défendre en moins de 48h.</p>
                  </div>
                </Card>
              </div>

              {/* Managers techniques */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdShield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les Contract Managers</h4>
                      <p className="text-sm text-gray-600">Conformité garantie et traçabilité totale</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Sécurisez chaque exigence et réduisez vos risques de non‑conformité grâce à une analyse contractuelle intelligente.
                  </p>

                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Chaque clause reliée à son exigence source</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Vérification instantanée de la cohérence et de la couverture</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Justificatifs prêts pour audits et négociations</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-orange-200/30">
                    <p className="text-sm text-gray-700 font-medium">Vous éliminez jusqu’à 90% des risques de rejet liés aux erreurs contractuelles.</p>
                  </div>
                </Card>
              </div>

              {/* Directeurs commerciaux */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdGroups className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les Chefs de Projet</h4>
                      <p className="text-sm text-gray-600">Gardez une vision complète et partagée de l’avancement, sans surcharge administrative.</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    -
                  </p>

                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Tableaux de bord en temps réel sur les validations</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Gestion fluide des Q&A et des versions</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Historique centralisé des décisions</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-green-200/30">
                    <p className="text-sm text-gray-700 font-medium">Vous divisez par deux vos cycles de coordination et réduisez les retards.</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Add fourth card for Directeurs Techniques */}
            <div className="mt-8">
              <div className="group max-w-lg mx-auto">
                <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdEngineering className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les Directeurs Techniques</h4>
                      <p className="text-sm text-gray-600">Validation technique rapide et fiable</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Accédez directement aux points techniques critiques sans lire des centaines de pages.
                  </p>

                  <div className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Liens directs vers les clauses techniques clés</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Analyse d'impact sur coûts, délais et livrables</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Traçabilité complète des choix techniques</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-purple-200/30">
                    <p className="text-sm text-gray-700 font-medium">Vous validez la faisabilité et rassurez la direction en un temps record.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  ⚡ -50 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">du temps d’analyse initiale.</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  ✅ 100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">des clauses critiques identifiées et priorisées.</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 text-center border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  🛡️
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Confiance immédiate de la direction, moins d’allers-retours, zéro remise en cause.</p>
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
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">capacités avancées</span> qui élèvent vos projets moyens
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà de la coordination intelligente, découvrez des fonctionnalités qui transforment la gestion de projets moyens en avantage concurrentiel.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Intelligence Prédictive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Prédiction de Performance</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Anticipez les goulots d'étranglement et optimisez automatiquement l'allocation des ressources grâce à l'analyse prédictive avancée.
                </p>

                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Optimisation IA</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Collaboration Adaptive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Collaboration Adaptive</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Espaces de travail qui s'adaptent automatiquement à la taille et à la complexité de chaque équipe projet pour une efficacité maximale.
                </p>

                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Adaptation dynamique</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Métriques Intelligentes */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTableChart className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Métriques Intelligentes</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Tableaux de bord adaptatifs qui mettent en évidence les KPIs les plus pertinents selon la phase et la complexité du projet.
                </p>

                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">KPIs dynamiques</span>
                  <MdDashboard className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Gestion des Risques */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Gestion des Risques</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Identification proactive des risques avec suggestions de mitigation automatiques basées sur l'historique de projets similaires.
                </p>

                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Prévention IA</span>
                  <MdWarning className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Templates Intelligents */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdContentCopy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Templates Intelligents</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Génération automatique de structures projet personnalisées selon la complexité, le secteur et les exigences spécifiques.
                </p>

                <div className="flex items-center text-pink-400 font-medium">
                  <span className="text-sm">Personnalisation IA</span>
                  <MdCreate className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Apprentissage Continu */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdRotateRight className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Apprentissage Continu</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Le système apprend de chaque projet pour optimiser automatiquement les processus et améliorer les performances futures.
                </p>

                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Amélioration continue</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Intégration Écosystème */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdCloudSync className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Écosystème intégré, performance amplifiée</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      Connectivité native avec vos outils métier existants (ERP, CRM, outils de gestion de projet) pour une synergie parfaite et des données unifiées.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">API Native</span>
                        <MdLink className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Sync Temps Réel</span>
                        <MdSwapHoriz className="w-4 h-4 ml-2" />
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
              Chaque fonctionnalité optimise vos projets moyens pour une performance maximale
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
              Découvrez la transformation complète, de la coordination manuelle à l'orchestration intelligente.
            </p>
          </div>

          {/* Simulator Placeholder */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MdPlayArrow className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Simulateur de Coordination Projet</h4>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Visualisez l'impact de l'IA sur l'efficacité de coordination et la qualité de vos projets moyens avec notre simulateur interactif.
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

      {/* Chat Interface with UC2-specific actions */}
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
            label: "Demo UC2",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC2 demo
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