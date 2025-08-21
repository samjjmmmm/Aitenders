import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  MdFlashOn, 
  MdGroups, 
  MdSecurity, 
  MdWarning, 
  MdDescription, 
  MdAccountBox, 
  MdBusiness, 
  MdEngineering, 
  MdAnalytics, 
  MdStars,
  MdSettings,
  MdShield,
  MdVerifiedUser,
  MdTableChart,
  MdPlayArrow,
  MdMail,
  MdCheckCircle,
  MdAssignmentTurnedIn,
  MdMessage,
  MdRotateRight,
  MdTrendingUp,
  MdDashboard,
  MdQuestionAnswer,
  MdAutoAwesome,
  MdTrackChanges,
  MdAccountTree,
  MdTimeline,
  MdHistory,
  MdNotificationsActive,
  MdFlag,
  MdVerified
} from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import ContactSection from '@/components/contact-section';
import ChatInterface from '@/components/chat-interface';
import equansLogo from '@assets/Equans_1753711339292.png';
import bouyguesLogo from '@assets/Bouyges_1753711339292.png';
import colasLogo from '@assets/Colas_1753711339292.png';
import Lottie from 'lottie-react';
import wow1Uc5Animation from '../assets/wow-1-uc5.json';
import wow2Uc5Animation from '../assets/wow-2-uc5.json';
import wow3Uc5Animation from '../assets/wow-3-uc5.json';
import uc5SecondFeatureImage from "@assets/wow 2_1755751777579.png";

export function UC5() {
  const targetAudiences = [
    {
      id: 'execution-project-managers',
      title: 'Chef de projet exécution',
      icon: MdAccountBox,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Pilotez vos projets sans perte d\'information ni surcharge administrative. Vision claire des engagements dès le premier jour, suivi fluide des actions et responsabilités, décisions rapides et documentées. Aitenders transforme vos contrats en actions concrètes, pour une gestion proactive et sans zones d\'ombre.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '🎯 Engagements clairs',
      alert: '📋 Actions tracées'
    },
    {
      id: 'contract-managers',
      title: 'Contract Manager',
      icon: MdBusiness,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Sécurisez vos obligations sans multiplier les fichiers ni les réunions. Engagements extraits et organisés automatiquement, traçabilité complète pour chaque clause, preuves prêtes pour audits et comités. Aitenders allie rigueur juridique et simplicité grâce à son copilote IA.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 90, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '⚖️ Conformité sécurisée',
      alert: '📋 Preuves disponibles'
    },
    {
      id: 'pmo-coordinators',
      title: 'PMO ou Coordinateur de projet',
      icon: MdEngineering,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Gardez le contrôle et anticipez les écarts critiques. Suivi structuré et collaboratif, alertes précoces sur dérives et échéances sensibles, réduction des litiges et contestations. Aitenders vous aide à gagner du temps tout en réduisant les risques grâce à une lecture intelligente et actionnable des contrats.',
      dashboardData: {
        requirements: { progress: 92, color: 'green' },
        coordination: { progress: 96, color: 'blue' },
        compliance: { progress: 94, color: 'purple' }
      },
      notification: '📊 Contrôle anticipé',
      alert: '⚠️ Alertes précoces'
    },
    {
      id: 'client-engagement-managers',
      title: 'Responsable Client ou Engagement',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Renforcez la confiance de vos clients en prouvant la maîtrise de vos engagements. Engagements suivis et validés en continu, transparence renforcée auprès des parties prenantes, plus de sérénité et moins de risques de litige. Aitenders transforme la conformité en un véritable avantage relationnel.',
      dashboardData: {
        requirements: { progress: 98, color: 'green' },
        coordination: { progress: 94, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🤝 Confiance renforcée',
      alert: '🎯 Maîtrise prouvée'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Dérives contractuelles non détectées",
      description: "Les écarts passent inaperçus faute d'outils de suivi adaptés, générant des risques de surcoûts et de litiges"
    },
    {
      icon: MdDescription,
      title: "Contrôles manuels chronophages",
      description: "La conformité repose sur des vérifications manuelles répétitives qui mobilisent les équipes sans créer de valeur"
    },
    {
      icon: FaUsers,
      title: "Traçabilité perdue dans les fichiers",
      description: "Les engagements se perdent dans des documents éparpillés, rendant impossible le suivi proactif des projets"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Organisation intelligente des documents et critères",
      description: "Dès la création du projet, Aitenders analyse vos contrats, plannings et annexes pour construire une base claire et exploitable"
    },
    {
      icon: MdGroups,
      title: "Suivi fluide des actions et des engagements",
      description: "Chaque engagement contractuel est transformé en tâche concrète avec responsables et échéances, assurant un pilotage sans zones d'ombre"
    },
    {
      icon: MdSecurity,
      title: "Analyses intelligentes et alertes proactives",
      description: "Aitenders ne se contente pas d'archiver vos données. L'IA surveille en continu vos projets pour prévenir les risques avant qu'ils ne génèrent des coûts ou des retards"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Cadrez votre projet en minutes",
      description: "Importez vos documents contractuels et laissez l'IA extraire automatiquement tous les engagements et échéances critiques",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Suivez chaque action en temps réel",
      description: "Visualisez instantanément l'avancement de chaque engagement avec attribution claire des responsabilités et alertes proactives",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Anticipez et sécurisez l'exécution", 
      description: "Recevez des alertes ciblées sur les dérives potentielles et accédez aux preuves documentées pour chaque décision",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "80%",
      description: "Gain de temps sur le cadrage projet"
    },
    {
      metric: "100%",
      description: "Engagements tracés et contextualisés"
    },
    {
      metric: "Moins",
      description: "De litiges ou d'écarts contractuels"
    },
    {
      metric: "Meilleure",
      description: "Communication inter-équipe"
    }
  ];

  const differentiators = [
    {
      title: "Première Solution de Gestion Proactive",
      description: "Conçue spécifiquement pour anticiper les dérives plutôt que les subir"
    },
    {
      title: "Intelligence Contractuelle Avancée",
      description: "IA spécialisée dans l'extraction et le suivi d'engagements complexes"
    },
    {
      title: "Traçabilité Complète Sans Surcharge",
      description: "Documentation automatique de chaque décision sans alourdir les processus"
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
            
            {/* Left Side - Content UC5 */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-indigo-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">
                 Suivi des contrats semi-complexes
                </Badge>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Chaque engagement suivi, <span className="text-purple-600">chaque action tracée</span>, chaque alerte anticipée
                </h1>

                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">
                  <span className="text-purple-300">La première plateforme conçue pour piloter les projets de complexité moyenne :</span> 
                  centralisez vos engagements, suivez vos actions et anticipez les dérives contractuelles. 
                  Vous éliminez les suivis artisanaux par mails ou Excel, gagnez en réactivité et sécurisez vos projets 
                  <span className="text-purple-600"> avec une traçabilité complète et sans surcharge administrative</span>.
                </p>
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

              {/* Secondary CTA */}
              <div className="mb-20">
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">
                  Déjà adopté par les leaders de la gestion de projets complexes
                </p>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img src={equansLogo} alt="Equans logo" className="w-10 h-6 object-contain" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img src={bouyguesLogo} alt="Bouygues logo" className="w-10 h-6 object-contain" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img src={colasLogo} alt="Colas logo" className="w-10 h-6 object-contain" />
                      </div>
                    </div>
                    <span>Plébiscité par les acteurs de référence</span>
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
                    <div className="text-sm text-gray-600 font-medium">AItenders - Project Tracking</div>
                    <div className="w-6"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 space-y-6">
                    
                    {/* Project Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Projet Infrastructure</h3>
                        <p className="text-sm text-gray-600">Suivi proactif des engagements</p>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Progress Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{activeAudience.dashboardData.requirements.progress}%</div>
                        <div className="text-xs text-gray-600">Engagements</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{activeAudience.dashboardData.coordination.progress}%</div>
                        <div className="text-xs text-gray-600">Actions</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">{activeAudience.dashboardData.compliance.progress}%</div>
                        <div className="text-xs text-gray-600">Conformité</div>
                      </div>
                    </div>
                    
                    {/* Active Tasks */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">{activeAudience.notification}</span>
                        </div>
                        <span className="text-xs text-gray-600">2h</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">{activeAudience.alert}</span>
                        </div>
                        <span className="text-xs text-gray-600">1j</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Action Button */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl flex items-center justify-center">
                  <MdAnalytics className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #C3D9F8 50%, #EBF2FD 80%, transparent 100%)'
               }}></div>
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #C3D9F8 40%, transparent 80%)'
               }}></div>
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 30%, #FBFCFF 70%, #EBF2FD 100%)'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Pilotage du  contrat: du reactif <span className="text-purple-600">au proactif</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Sur les projets moyens, les suivis par mails ou fichiers Excel laissent passer des écarts critiques. 
                Résultat : engagements non alignés, retards accumulés et stress accru pour vos équipes.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec Aitenders, centralisez vos engagements, détectez les dérives en temps réel et pilotez chaque action 
                avec une traçabilité complète. Vous transformez le suivi réactif en pilotage proactif, sans surcharge administrative.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Contactez-nous
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Voir une démo rapide
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Votre <span className="text-purple-600">copilote IA</span> pour anticiper et maîtriser vos <span className="text-purple-600">claims</span>
            </h1>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Détectez les dérives avant qu’elles ne deviennent des litiges, documentez chaque engagement et assurez 
              une traçabilité complète pour sécuriser vos projets et éviter les contestations.
            </h3>
          </div>

          {/* Feature 1: Organisation intelligente UC5 - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Organisation intelligente des documents et critères <span className="text-purple-600">dès le jour 1</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders structure automatiquement le projet à partir des documents initiaux : contrats, plannings, annexes. 
                Vous démarrez avec une base projet intelligente, structurée autour des vrais engagements à suivre. Fini le démarrage à blanc ou les semaines perdues en préparation.
                <span className="text-purple-600"> Tout est prêt dès le jour 1, sans intervention manuelle.</span>
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Base projet claire et activable dès le premier jour
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full">
                <Lottie 
                  animationData={wow1Uc5Animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full max-w-[400px] max-h-[400px]"
                  style={{ 
                    transform: 'scale(1.5)',
                    filter: 'drop-shadow(0 8px 32px rgba(59, 130, 246, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>



          {/* Feature 2: Suivi d’actions et évolution des engagements - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center items-center h-full">
                <figure className="w-full max-w-[500px] mx-auto">
                  <img 
                    src={uc5SecondFeatureImage}
                    alt="Aitenders engagement tracking interface showing commitment evolution and detailed document management"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'drop-shadow(0 8px 32px rgba(147, 51, 234, 0.2))'
                    }}
                  />
                </figure>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Suivez l’évolution des engagements <span className="text-purple-600">en toute confiance</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Chaque clause ou obligation devient une action tracée. Avec Aitenders, vous suivez qui fait quoi, quand, et pourquoi. 
                Le projet est documenté, lisible et piloté sans dépendre d’Excel ni de mails dispersés.
              </p>
              <div className="flex items-center text-lg text-gray-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                <span className="font-bold text-blue-500">Vous n’avez plus besoin de courir après l’information</span>
              </div>
            </div>
          </div>

          

          {/* Feature 3: Analyses intelligentes et alertes - Text Left, Card Right */}
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Anticipez chaque dérive <span className="text-purple-600">avant qu’elle ne devienne un claim</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                L’IA et vos équipes projet collaborent pour identifier et suivre les zones critiques. 
                Recherchez un engagement, un historique ou une clause, et retrouvez instantanément 
                l’information fiable et sourcée.  
                <p>
                  <span className="text-purple-600">  Les informations sont actionnables, organisées et fiables. </span> 
                Le projet est sous contrôle, les décisions sont prises sur preuve, pas sur intuition.
                </p>
              </p>
              <div className="flex items-center text-lg font-bold text-blue-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Vous anticipez au lieu de réagir.
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center items-center h-full">
                <Lottie 
                  animationData={wow3Uc5Animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full max-w-[400px] max-h-[400px]"
                  style={{ 
                    transform: 'scale(1.5)',
                    filter: 'drop-shadow(0 8px 32px rgba(34, 197, 94, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>


          
        </div>
      </section>

      {/* User-Focused Results Section - UC5 */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-24 lg:mb-28">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Résultats concrets pour vos projets de complexité moyenne
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Des bénéfices mesurables pour chefs de projet, contract managers et équipes terrain
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

              {/* Chefs de projet */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdAccountBox className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les chefs de projet</h4>
                      <p className="text-sm text-gray-600">Un cadrage rapide et structuré</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Démarrez avec une base claire, évitez les dérives et gardez une vision consolidée des engagements.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Vision claire des engagements et des échéances
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Suivi fluide des actions et responsabilités
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Décisions rapides et documentées
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-blue-200/30">
                    <p className="text-sm text-gray-700 font-medium">
                      Impact : un pilotage serein et proactif, sans zones d’ombre
                    </p>
                  </div>
                </Card>
              </div>

              {/* Contract managers */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdBusiness className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les contract managers</h4>
                      <p className="text-sm text-gray-600">Engagements tracés et sécurisés</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Garantissez la conformité contractuelle sans fichiers éparpillés ni doublons administratifs.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Traçabilité complète des validations et décisions
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Engagements extraits et organisés automatiquement
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Preuves prêtes pour audits et comités
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-orange-200/30">
                    <p className="text-sm text-gray-700 font-medium">
                      Impact : zéro litige évitable, zéro preuve manquante
                    </p>
                  </div>
                </Card>
              </div>

              {/* Équipes opérationnelles */}
              <div className="group">
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MdGroups className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Pour les équipes terrain</h4>
                      <p className="text-sm text-gray-600">Autonomie et décisions sûres</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Accédez immédiatement aux clauses utiles, sans dépendre du juridique ni relire des dizaines de pages.
                  </p>

                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Questions terrain résolues en autonomie
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Preuves disponibles et contextualisées
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Décisions rapides et sécurisées face au client
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-white/70 rounded-lg border border-green-200/30">
                    <p className="text-sm text-gray-700 font-medium">
                      Impact : un contrat vivant, accessible et utile au quotidien
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  80 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Gain de temps sur le cadrage projet</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  100 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Engagements tracés et contextualisés</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 md:p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  -50 %
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Moins de litiges et de contestations</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Toppings Section - UC5 Additional Features */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
               style={{
                 background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)'
               }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"
               style={{
                 background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)'
               }}></div>
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
              <span className="text-white font-semibold text-sm md:text-base">Fonctionnalités Proactives</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">toppings</span> pour anticiper et sécuriser vos projets
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Au-delà du suivi classique, activez des fonctionnalités avancées pour réduire les litiges, fluidifier vos claims et garantir la sérénité de vos équipes.
            </p>
          </div>

          {/* Toppings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Alertes Proactives */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdNotificationsActive className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Alertes Proactives Claims</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Détectez en temps réel les dérives, échéances sensibles et risques de pénalités. Soyez alertés avant que le problème n’apparaisse.
                </p>
                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Anticipation</span>
                  <MdWarning className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Journal des Modifications */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdHistory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Journal des Modifications</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Conservez un historique horodaté de toutes les décisions et changements contractuels pour une traçabilité incontestable.
                </p>
                <div className="flex items-center text-blue-400 font-medium">
                  <span className="text-sm">Traçabilité</span>
                  <MdTimeline className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Lien Contrats ↔ Livrables */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Lien Contrats ↔ Livrables</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Reliez chaque clause aux livrables associés pour prouver la conformité et éviter les contestations.
                </p>
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Conformité</span>
                  <MdTrackChanges className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Moteur Q&A Terrain */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdQuestionAnswer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Q&A Contractuel Terrain</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Posez une question naturelle et obtenez directement la clause correspondante, prête à être partagée.
                </p>
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Autonomie</span>
                  <MdAutoAwesome className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Dashboard Claims */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdDashboard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Dashboard Claims</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Visualisez en un coup d’œil l’évolution des claims, des risques et des points sensibles du projet.
                </p>
                <div className="flex items-center text-yellow-400 font-medium">
                  <span className="text-sm">Pilotage</span>
                  <MdTrendingUp className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Sécurité et Gouvernance */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdSecurity className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sécurité & Gouvernance Avancées</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      Contrôle des accès par rôle, conformité RGPD et auditabilité intégrée pour sécuriser chaque décision.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Souverain</span>
                        <MdRotateRight className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Audit Ready</span>
                        <MdFlag className="w-4 h-4 ml-2" />
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
              Chaque fonctionnalité fait de votre contrat un outil proactif et sécurisé
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              Explorer tous les toppings →
            </Button>
          </div>
        </div>
      </section>



      {/* Real Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">projets référence</span> sur les contrats semi-complexes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nos clients pilotent leurs projets en exécution avec l'IA Aitenders
            </p>
          </div>

          {/* 3 Real Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
            
            {/* Project 1: Parc Éolien Offshore */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdAccountTree className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Parc Éolien Offshore</h3>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-800 font-medium">Énergie</Badge>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-4">Exécution : 245 documents</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Installation de 67 éoliennes offshore avec raccordement électrique et maintenance sur 25 ans. 
                  Dossier d'exécution avec 245 documents : plans, procédures, certificats et obligations contractuelles.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +75% réduction temps pilotage</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Obligations extractées automatiquement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Actions tracées en temps réel</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> Équipes synchronisées offshore</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Ligne Ferroviaire Haute Vitesse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdTimeline className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ligne Ferroviaire Haute Vitesse</h3>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-800 font-medium">Transport</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-4">Exécution : 387 documents</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Construction de 85 km de ligne TGV avec 12 ouvrages d'art et systèmes de signalisation avancés. 
                  Pilotage avec 387 documents : plans d'exécution, procédures et 1,200 obligations techniques.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +82% gain efficacité gestion</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Normes ferroviaires respectées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Obligations monitorées H24</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 30 entreprises coordonnées</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Usine Automobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <MdSettings className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Usine Automobile Intelligente</h3>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800 font-medium">Industrie</Badge>
                </div>
                <div className="text-xl font-bold text-green-600 mb-4">Exécution : 156 documents</div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Construction d'une usine de véhicules électriques avec chaînes robotisées et systèmes Industry 4.0. 
                  Suivi de 156 documents d'exécution incluant 800 obligations techniques et certifications qualité.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact client :</h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    <span><strong>Productivité :</strong> +69% réduction temps administratif</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdVerified className="w-4 h-4 mr-2 text-blue-500" />
                    <span><strong>Conformité :</strong> Certifications ISO assurées</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdTrackChanges className="w-4 h-4 mr-2 text-purple-500" />
                    <span><strong>Traçabilité :</strong> Performance temps réel</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MdGroups className="w-4 h-4 mr-2 text-orange-500" />
                    <span><strong>Collaboration :</strong> 22 lots industriels</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Scrolling Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance pour leurs projets industriels</h3>
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

          {/* Integrated Chat Simulator */}
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vous voulez voir l'impact sur <span className="text-purple-600">vos projets ?</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez en 2 minutes le potentiel d'optimisation spécifique à votre contexte
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ChatInterface 
                language="fr"
                customActions={[
                  {
                    label: "🚀 Simulateur ROI",
                    icon: <MdAnalytics className="w-4 h-4" />,
                    onClick: () => {}
                  },
                  {
                    label: "📋 Nos Cas d'Usage",
                    icon: <MdDashboard className="w-4 h-4" />,
                    onClick: () => {}
                  },
                  {
                    label: "💬 Parler à un Expert",
                    icon: <MdMail className="w-4 h-4" />,
                    onClick: () => {}
                  }
                ]}
                transparent={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à Maîtriser Votre Prochaine Offre Complexe ?
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Rejoignez les équipes de projet qui font confiance à Aitenders pour sécuriser leurs offres complexes, éliminer les risques de non-conformité, et gagner en toute confiance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              📅 Programmer une Démo
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contacter Notre Équipe
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            Sécurité de niveau entreprise • Collaboration multi-experts • Prise en main complète
          </div>
        </div>
      </section>



      {/* Chat Interface with UC5-specific actions */}
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
            label: "Demo UC5",
            icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
            onClick: () => {} // Launch UC5 demo
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