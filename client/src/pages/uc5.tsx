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
  MdMail
} from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Header from '@/components/header';
import ContactSection from '@/components/contact-section';
import ChatInterface from '@/components/chat-interface';
import equansLogo from '@assets/Equans_1753711339292.png';
import bouyguesLogo from '@assets/Bouyges_1753711339292.png';
import colasLogo from '@assets/Colas_1753711339292.png';

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
            
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Pilotage Proactif</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Du réactif au proactif, sans friction.
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]">Chaque engagement suivi, chaque action tracée, chaque alerte anticipée. Anticipez les dérives et sécurisez vos engagements grâce à une gestion proactive des projets. Avec Aitenders, vous détectez les écarts à temps et conservez une traçabilité complète sans surcharge administrative.</p>
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
                <p className="text-sm text-gray-500 mb-6">Solution de référence pour la gestion proactive des projets</p>
                
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

      {/* Pain Points Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Quand la gestion des projets devient un frein plutôt qu'un levier
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Pour les chefs de projet et contract managers, les projets de complexité moyenne exigent rigueur et réactivité. Pourtant, sans outil adapté, chaque engagement à suivre devient une source de stress. Les dérives contractuelles passent inaperçues, la conformité repose sur des contrôles manuels chronophages et la traçabilité se perd dans des fichiers éparpillés.
            </p>
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
              Un <span className="text-blue-600">copilote IA</span> pour sécuriser vos projets moyens
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Aitenders structure vos contrats, trace chaque engagement et vous alerte avant qu'un risque ne devienne un litige, pour réduire par trois le temps de cadrage et renforcer la sérénité de vos équipes.
            </p>
          </div>

          {/* Feature 1: Organisation intelligente des documents - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Organisation intelligente des documents et critères, <span className="text-blue-600">dès le premier jour</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Dès la création du projet, Aitenders analyse vos contrats, plannings et annexes pour construire une base claire et exploitable.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Extraction automatique des clauses et échéances</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Classement intelligent par thèmes et priorités</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Critères de suivi configurés dès le départ</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Temps de cadrage réduit par trois</span>
                </div>
              </div>
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
                      <span className="text-sm text-gray-700">Contrats analysés</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Complet</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Échéances extraites</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">12 trouvées</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Critères configurés</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdSettings className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Suivi fluide des actions - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Action Tracking</h4>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MdGroups className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Décisions tracées</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">100%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Responsabilités attribuées</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Actives</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-sm text-gray-700">Tableaux de bord</span>
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <MdAnalytics className="w-3 h-3 text-white" />
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
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Suivi fluide des actions et des engagements, <span className="text-orange-600">sans zones d'ombre</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Chaque engagement contractuel est transformé en tâche concrète avec responsables et échéances, assurant un pilotage sans zones d'ombre.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Historique complet des décisions</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Responsabilités attribuées aux bons acteurs</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Tableaux de bord partagés en temps réel</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Litiges évités grâce à la traçabilité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Analyses intelligentes et alertes - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Analyses intelligentes et alertes proactives, <span className="text-green-600">avant les problèmes</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Aitenders ne se contente pas d'archiver vos données. L'IA surveille en continu vos projets pour prévenir les risques avant qu'ils ne génèrent des coûts ou des retards.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Recherche par clause, thème ou exigence</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Analyse d'impact instantanée sur coûts et délais</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Alertes ciblées aux équipes concernées</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Décisions basées sur preuves documentées</span>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Smart Alerts</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdSecurity className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-gray-700">Échéance proche</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">3 jours</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-sm text-gray-700">Risque de dérive</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Critique</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Analyse terminée</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdAnalytics className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Un copilote IA qui répond aux besoins de chaque rôle projet
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Anticipez, décidez et prouvez vos engagements sans alourdir vos équipes.
            </p>
          </div>
          
          {/* Audience Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
            {targetAudiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActiveAudience(audience)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeAudience.id === audience.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {audience.title}
              </button>
            ))}
          </div>
          
          {/* Active Audience Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${activeAudience.iconBg} rounded-2xl flex items-center justify-center mr-6`}>
                  <activeAudience.icon className={`w-8 h-8 ${activeAudience.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeAudience.title}</h3>
                  <p className="text-gray-600">Optimisation dédiée à votre rôle</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {activeAudience.description}
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-blue-50/30 border border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Tableau de bord personnalisé</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Engagements tracés</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full bg-${activeAudience.dashboardData.requirements.color}-500`}
                        style={{ width: `${activeAudience.dashboardData.requirements.progress}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-gray-900">{activeAudience.dashboardData.requirements.progress}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Coordination équipe</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full bg-${activeAudience.dashboardData.coordination.color}-500`}
                        style={{ width: `${activeAudience.dashboardData.coordination.progress}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-gray-900">{activeAudience.dashboardData.coordination.progress}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Conformité projet</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full bg-${activeAudience.dashboardData.compliance.color}-500`}
                        style={{ width: `${activeAudience.dashboardData.compliance.progress}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-gray-900">{activeAudience.dashboardData.compliance.progress}%</span>
                  </div>
                </div>
              </div>
              
              {/* Sample Notifications */}
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-800">{activeAudience.notification}</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-800">{activeAudience.alert}</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* KPI Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16 md:mt-20 lg:mt-24">
            
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
                  Moins
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">De litiges ou d'écarts contractuels</p>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 text-center border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-tight">
                  Meilleure
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">Communication inter-équipe</p>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
              Des parcours additionnels qui transforment votre expérience
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Au-delà des fonctionnalités de base, découvrez des capacités avancées qui révolutionnent votre approche des projets
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Intelligence Prédictive */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdFlashOn className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intelligence Prédictive</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Anticipez les dérives avant qu'elles n'impactent vos projets grâce à l'analyse prédictive des patterns contractuels et des historiques de performance.
                </p>
                
                <div className="flex items-center text-blue-400 font-medium">
                  <span className="text-sm">Anticipation</span>
                  <MdAnalytics className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Conformité Automatisée */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Conformité Automatisée</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Validation automatique de la conformité réglementaire et contractuelle avec mise à jour en temps réel des exigences sectorielles et légales.
                </p>
                
                <div className="flex items-center text-green-400 font-medium">
                  <span className="text-sm">Validation</span>
                  <MdVerifiedUser className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Alertes Intelligentes */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdWarning className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Alertes Intelligentes</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Système d'alertes contextuelles qui notifie les bonnes personnes au bon moment avec le niveau d'urgence approprié.
                </p>
                
                <div className="flex items-center text-orange-400 font-medium">
                  <span className="text-sm">Proactivité</span>
                  <MdDescription className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Audit Trail Complet */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdDescription className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Audit Trail Complet</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Traçabilité exhaustive de toutes les décisions, modifications et validations avec horodatage et attribution de responsabilité.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium">
                  <span className="text-sm">Traçabilité</span>
                  <MdAccountBox className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Intégration API */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Intégration API</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Connectez Aitenders à vos outils existants (ERP, CRM, outils de gestion de projet) pour une synchronisation bidirectionnelle.
                </p>
                
                <div className="flex items-center text-cyan-400 font-medium">
                  <span className="text-sm">Connectivité</span>
                  <MdBusiness className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Dashboard Exécutif */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdTableChart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Dashboard Exécutif</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Vue d'ensemble stratégique avec KPIs personnalisés, reporting automatisé et insights métier pour la direction.
                </p>
                
                <div className="flex items-center text-red-400 font-medium">
                  <span className="text-sm">Vue stratégique</span>
                  <MdTableChart className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Sécurité Avancée */}
            <div className="group md:col-span-2 lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdSecurity className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sécurité de niveau entreprise, intégrée dès la conception</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      Chiffrement bout-en-bout, contrôles d'accès granulaires, conformité RGPD native et hébergement souverain pour une protection maximale de vos données contractuelles sensibles.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-indigo-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">Souveraineté</span>
                        <MdShield className="w-4 h-4 ml-2" />
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium bg-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm">RGPD Natif</span>
                        <MdVerifiedUser className="w-4 h-4 ml-2" />
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
              Chaque fonctionnalité ajoute une dimension stratégique à votre processus
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
              Découvrez la transformation complète, du chaos manuel à la précision pilotée par l'IA.
            </p>
          </div>
          
          {/* Simulator Placeholder */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MdPlayArrow className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Simulateur de Transformation</h4>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Visualisez l'impact de l'IA contractuelle sur vos processus métier avec notre simulateur interactif.
            </p>
            <div className="bg-gray-100 rounded-2xl p-12 text-gray-500">
              <MdSettings className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Simulateur en cours de développement</p>
              <p className="text-sm mt-2">Cette fonctionnalité sera bientôt disponible</p>
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

      {/* Contact Section */}
      <ContactSection />

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