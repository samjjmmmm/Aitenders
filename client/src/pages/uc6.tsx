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
  MdRotateRight, MdFlag, MdMail,
  MdAssignmentTurnedIn,
  MdBusinessCenter,
  MdPerson,
  MdGppGood,
  MdHistory,
  MdHandshake,
  MdSchool
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

export default function UC6Page() {
  // Target audience data with interactive content
  const targetAudiences = [
    {
      id: 'digital-transformation',
      title: 'Responsables transformation digitale',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Pilotez la digitalisation des processus métier avec une vision 360° des enjeux stratégiques. Grâce à l\'IA, orchestrez la transformation en temps réel et assurez l\'adoption utilisateur tout en mesurant l\'impact sur la performance organisationnelle.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 95, color: 'purple' }
      },
      notification: '✓ Transformation lancée',
      alert: '📊 Adoption: 85%'
    },
    {
      id: 'change-managers',
      title: 'Gestionnaires du changement',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Accompagnez les équipes dans l\'évolution des pratiques avec des outils de suivi personnalisés. Anticipez les résistances, mesurez l\'engagement et adaptez votre stratégie grâce à des données comportementales en temps réel.',
      dashboardData: {
        requirements: { progress: 92, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 88, color: 'purple' }
      },
      notification: '⚡ Formation déployée',
      alert: '📈 Engagement: 78%'
    },
    {
      id: 'innovation-leaders',
      title: 'Directeurs innovation',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Accélérez l\'innovation organisationnelle avec une plateforme intelligente qui identifie les opportunités d\'amélioration et mesure l\'impact des initiatives. Créez une culture d\'innovation durable et mesurable.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 90, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '🔒 Innovation ready',
      alert: '✅ Roadmap validée'
    },
    {
      id: 'operations-directors',
      title: 'Directeurs opérationnels',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Optimisez la performance opérationnelle avec une vision consolidée des processus métier. Identifiez les goulots d\'étranglement, automatisez les tâches répétitives et pilotez l\'amélioration continue.',
      dashboardData: {
        requirements: { progress: 96, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 94, color: 'purple' }
      },
      notification: '🔧 Ops optimisées',
      alert: '📋 Performance +15%'
    },
    {
      id: 'strategy-directors',
      title: 'Directeurs stratégie',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Alignez la stratégie organisationnelle avec l\'exécution opérationnelle grâce à des tableaux de bord stratégiques. Anticipez les tendances, mesurez l\'impact des décisions et ajustez la trajectoire en temps réel.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '💼 Stratégie alignée',
      alert: '🎯 Objectifs: 95%'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Silos Organisationnels",
      description: "La transformation s'enlise dans des départements cloisonnés qui freinent l'innovation collaborative"
    },
    {
      icon: MdDescription,
      title: "Résistance au Changement",
      description: "Les équipes peinent à adopter de nouvelles méthodes sans accompagnement structuré et mesurable"
    },
    {
      icon: FaUsers,
      title: "Manque de Vision Globale",
      description: "L'absence d'indicateurs unifiés empêche de mesurer l'impact réel des initiatives de transformation"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Orchestrez la Transformation Intelligemment",
      description: "IA qui analyse l'organisation et propose des parcours de transformation personnalisés et évolutifs"
    },
    {
      icon: MdGroups,
      title: "Fédérez les Équipes Autour d'Objectifs Communs",
      description: "Créez une culture collaborative avec des outils de suivi partagés et des métriques transparentes"
    },
    {
      icon: MdSecurity,
      title: "Pilotez l'Impact en Temps Réel",
      description: "Tableaux de bord stratégiques qui mesurent l'adoption, l'engagement et la performance globale"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Analysez l'Existant",
      description: "Cartographiez automatiquement vos processus et identifiez les opportunités de transformation",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Concevez la Stratégie",
      description: "Définissez une roadmap collaborative avec jalons mesurables et indicateurs de succès",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Pilotez l'Exécution", 
      description: "Suivez l'avancement, mesurez l'impact et ajustez la stratégie selon les résultats obtenus",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "75%",
      description: "Accélération des projets de transformation"
    },
    {
      metric: "60%",
      description: "Amélioration de l'adoption utilisateur"
    },
    {
      metric: "90%",
      description: "Satisfaction des équipes transformées"
    },
    {
      metric: "100%",
      description: "Visibilité sur l'avancement stratégique"
    }
  ];

  const differentiators = [
    {
      title: "Première Plateforme de Transformation Intelligente",
      description: "IA dédiée à l'orchestration du changement organisationnel avec métriques prédictives"
    },
    {
      title: "Approche Humano-Centrée",
      description: "Focus sur l'accompagnement des équipes avec outils collaboratifs intégrés"
    },
    {
      title: "Pilotage Stratégique en Temps Réel",
      description: "Tableaux de bord exécutifs qui connectent transformation et performance business"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-white via-slate-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="content-boundary">
          {/* Subtle Abstract Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large flowing gradient blob - top left */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
                 style={{
                   background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, #C3D9F8 70%, transparent 100%)'
                 }}></div>
            
            {/* Medium accent blob - center right */}
            <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
                 style={{
                   background: 'radial-gradient(circle, #C3D9F8 0%, #3880E8 30%, transparent 70%)'
                 }}></div>
            
            {/* Small atmospheric accent - bottom */}
            <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
                 style={{
                   background: 'linear-gradient(135deg, #FBFCFF 0%, #F5F9FE 50%, #EBF2FD 100%)'
                 }}></div>
            
            {/* Flowing wave accent - mobile optimized */}
            <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
                 style={{
                   background: 'linear-gradient(90deg, transparent 0%, #F5F9FE 20%, #C3D9F8 40%, #EBF2FD 60%, transparent 100%)'
                 }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
              
              {/* Left Side - Content */}
              <div className="text-left">
                <div className="mb-12">
                  <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Exécution des Projets Complexes</Badge>
                  
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                    De l'exigence à la livraison, chaque engagement tenu, <span className="text-purple-600">Zéro écart, zéro surprise.</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> Chaque exigence est reliée à ses livrables et suivie en temps réel.Vous réduisez les risques opérationnels et financiers tout en garantissant conformité, traçabilité et collaboration fluide entre équipes.</p>
                </div>
                
                {/* Primary CTA */}
                <div className="mb-16">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                  >
                   Réservez une Démo
                  </Button>
                </div>
                
                {/* Secondary CTA - Less Prominent */}
                <div className="mb-20">
                  <Button 
                    variant="ghost" 
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                  >
                    Téléchargez le cas d'usage
                  </Button>
                </div>
                
                {/* Trust Elements */}
                <div className="border-t border-gray-100 pt-8">
                  <p className="text-sm text-gray-500 mb-6">Partenaire de transformation des leaders du secteur</p>
                  
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
                      <span>Accompagne la transformation des entreprises leaders</span>
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
                      <div className="text-xs text-gray-500 font-medium">aitenders.com/uc6-transformation</div>
                      <div className="w-16"></div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Transformation Dashboard</h3>
                          <p className="text-sm text-gray-600">Pilotage temps réel</p>
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <MdAutoAwesome className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-500">Exigences</span>
                            <MdCheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-900">{activeAudience.dashboardData.requirements.progress}%</span>
                            <div className="w-8 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${activeAudience.dashboardData.requirements.color === 'green' ? 'bg-green-500' : 'bg-blue-500'} rounded-full transition-all duration-500`}
                                style={{ width: `${activeAudience.dashboardData.requirements.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-500">Coordination</span>
                            <MdGroups className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-900">{activeAudience.dashboardData.coordination.progress}%</span>
                            <div className="w-8 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                style={{ width: `${activeAudience.dashboardData.coordination.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-500">Conformité</span>
                            <MdSecurity className="w-4 h-4 text-purple-500" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-900">{activeAudience.dashboardData.compliance.progress}%</span>
                            <div className="w-8 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-500 rounded-full transition-all duration-500"
                                style={{ width: `${activeAudience.dashboardData.compliance.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Active Projects */}
                      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700">Projets Actifs</span>
                          <span className="text-xs text-gray-500">12 en cours</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Infrastructure Digitale</span>
                            <span className="text-xs font-medium text-green-600">85%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Formation Équipes</span>
                            <span className="text-xs font-medium text-blue-600">72%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Processus Métier</span>
                            <span className="text-xs font-medium text-purple-600">94%</span>
                          </div>
                        </div>
                      </div>

                      {/* Notifications */}
                      <div className="space-y-2">
                        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <div className="flex items-center space-x-2">
                            <MdCheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-xs font-medium text-green-800">{activeAudience.notification}</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                          <div className="flex items-center space-x-2">
                            <MdTrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-800">{activeAudience.alert}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="content-boundary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Exigence ↔ Rédaction ↔ Preuve, <span className="text-purple-600">chaque engagement tenu</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Aujourd'hui, la gestion manuelle via <strong>Excel, emails et workshops dispersés</strong> alourdit les processus, multiplie les risques 
                d'erreurs et consomme un temps critique. Demain, avec Aitenders, chaque exigence – explicite ou implicite – sera reliée 
                à ses livrables, intégrée dans vos documents finaux, et suivie comme un fil conducteur vivant de la production.
              </p>
              
              <p>
                Aitenders accompagne vos équipes dans la <strong>maîtrise totale des exigences</strong> tout au long de l'exécution, en garantissant 
                la couverture complète, la traçabilité des décisions et la conformité contractuelle. Résultat : des projets menés sans 
                écart, sans litige, et en totale confiance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-contact"
              >
                Contactez-nous!
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                data-testid="button-demo"
              >
                <MdPlayArrow className="w-5 h-5 mr-2" />
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre Approche de Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme intelligente qui accompagne votre organisation dans sa transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <solution.icon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Conçu pour les Leaders de la Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions personnalisées selon votre rôle et vos enjeux stratégiques
            </p>
          </div>

          {/* Interactive Audience Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {targetAudiences.map((audience) => (
              <Card 
                key={audience.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeAudience.id === audience.id 
                    ? 'ring-2 ring-purple-500 shadow-lg' 
                    : 'hover:ring-1 hover:ring-purple-300'
                }`}
                onClick={() => setActiveAudience(audience)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${audience.iconBg} flex items-center justify-center`}>
                    <audience.icon className={`w-6 h-6 ${audience.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{audience.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Votre Parcours de Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée en 3 étapes pour orchestrer votre évolution organisationnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userJourneySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Résultats Mesurables, Impact Démontré
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Les métriques qui comptent pour mesurer le succès de votre transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {kpi.metric}
                </div>
                <p className="text-purple-100">{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="content-boundary">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Aitenders ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche unique qui combine intelligence artificielle et expertise métier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MdStars className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Chat Interface */}
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
            label: "Demo UC6",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC6 demo
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