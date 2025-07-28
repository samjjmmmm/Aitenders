import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MdSchedule, MdCheckCircle, MdWarning, MdPeople, MdTrendingUp, MdSecurity, 
  MdFlashOn, MdArrowForward, MdGpsFixed, MdVerifiedUser, MdAnalytics, MdEmojiEvents, 
  MdMessage, MdShield, MdGroups, MdDescription, MdSettings, MdAccountBox, MdBusiness, 
  MdEngineering, MdGavel, MdTableChart, MdAccessTime, MdContentCopy, MdRefresh, MdSearch,
  MdDashboard, MdBolt, MdEdit, MdNotifications, MdVerified, MdSwapHoriz, MdPlayArrow,
  MdClose, MdCheck
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

export default function UC3Page() {
  // Target audience data with interactive content
  const targetAudiences = [
    {
      id: 'bid-response',
      title: 'Bid Response Managers',
      icon: MdAccountBox,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      description: 'Coordinate technical, legal, commercial, and quality experts seamlessly with AI-powered project organization. Structure 500+ page RFPs instantly and maintain complete compliance visibility—eliminating requirement gaps and protecting team credibility.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 78, color: 'blue' },
        compliance: { progress: 92, color: 'purple' }
      },
      notification: '✓ 500+ pages analyzed',
      alert: '📊 Compliance: 92%'
    },
    {
      id: 'project-offer',
      title: 'Project Offer Leaders',
      icon: MdBusiness,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      description: 'Lead winning strategies with intelligent project setup that eliminates weeks of manual preparation. Access real-time compliance tracking and automated change detection while demonstrating 100% requirement coverage to management.',
      dashboardData: {
        requirements: { progress: 95, color: 'green' },
        coordination: { progress: 88, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '⚡ Setup Complete',
      alert: '📈 Win Rate: 94%'
    },
    {
      id: 'contract-managers',
      title: 'Contract Managers',
      icon: MdGavel,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      description: 'Ensure compliance across multi-departmental teams with dynamic requirement tracking and automated inconsistency detection. Maintain complete audit trails while preventing costly oversights on million-euro opportunities.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 95, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '🔒 Audit Ready',
      alert: '✅ Zero Gaps'
    },
    {
      id: 'technical-directors',
      title: 'Technical Directors',
      icon: MdEngineering,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      description: 'Focus your specialists on solution development instead of administrative compliance. Provide pre-organized requirement structures that eliminate interpretation errors while ensuring every technical obligation is properly documented.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 85, color: 'blue' },
        compliance: { progress: 98, color: 'purple' }
      },
      notification: '🔧 Tech Ready',
      alert: '📋 All Specs Met'
    },
    {
      id: 'commercial-directors',
      title: 'Commercial Directors',
      icon: MdAnalytics,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      description: 'Pursue complex international opportunities with bulletproof compliance foundations. Demonstrate complete requirement coverage to senior management, protecting commercial reputation and maximizing win probability.',
      dashboardData: {
        requirements: { progress: 100, color: 'green' },
        coordination: { progress: 92, color: 'blue' },
        compliance: { progress: 100, color: 'purple' }
      },
      notification: '💼 Exec Ready',
      alert: '🎯 100% Coverage'
    }
  ];

  const [activeAudience, setActiveAudience] = useState(targetAudiences[0]);

  const painPoints = [
    {
      icon: MdWarning,
      title: "Excel Compliance Chaos",
      description: "Manual tracking across 8+ experts creates dangerous gaps that cost million-euro opportunities"
    },
    {
      icon: MdDescription,
      title: "Documentation Overwhelm",
      description: "Days lost extracting requirements from 500+ page RFPs with copy-paste errors risking exclusions"
    },
    {
      icon: FaUsers,
      title: "Expert Coordination Issues",
      description: "Multiple review cycles delay submission while hidden requirement gaps cause rejections"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Structure Complex Projects Instantly",
      description: "AI document analysis automatically organizes 500+ page RFPs into structured data and actionable insights"
    },
    {
      icon: MdGroups,
      title: "Orchestrate Expert Teams Seamlessly",
      description: "Coordinate technical, legal, commercial, and quality specialists with dynamic compliance matrices"
    },
    {
      icon: MdSecurity,
      title: "Control Every Project Evolution",
      description: "Automatically detect document changes and track version evolution with instant alerts"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Upload Complex Documentation",
      description: "Drop your project files and watch AI structure everything automatically",
      icon: MdDescription
    },
    {
      step: "2", 
      title: "Collaborate on Compliance",
      description: "Generate matrices, allocate expert responsibilities, and build response strategy as a team",
      icon: MdGroups
    },
    {
      step: "3",
      title: "Control Every Evolution", 
      description: "Track changes, manage Q&As, and ensure zero gaps throughout the project lifecycle",
      icon: MdSecurity
    }
  ];

  const kpis = [
    {
      metric: "90%",
      description: "Data organization completed immediately"
    },
    {
      metric: "40%",
      description: "Faster review organization"
    },
    {
      metric: "0",
      description: "Formal rejections for non-compliance"
    },
    {
      metric: "100%",
      description: "Requirement coverage guaranteed"
    }
  ];

  const differentiators = [
    {
      title: "First Platform for Mega-Projects",
      description: "Purpose-built for multi-lot, international projects with full traceability"
    },
    {
      title: "Agile Alternative to Siloed Tools",
      description: "Native AI integration for analysis and guided content creation"
    },
    {
      title: "Dynamic Requirement Linking",
      description: "Connect requirements, compliance, and deliverables automatically"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-40 px-8 bg-gradient-to-br from-white via-slate-50/30 to-purple-50/20 relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-12">
                <Badge className="mb-12 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-base font-semibold px-6 py-3 rounded-full shadow-sm">
                  Complex Multi-Lot Bid Management
                </Badge>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-[1.1] tracking-tight">
                  Chaque exigence traitée, <span className="text-purple-600">chaque risque maîtrisé</span>
                </h1>
                
                <p className="text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed font-light">
                  AI-powered coordination for multi-lot projects. Structure 500+ page RFPs instantly, orchestrate expert teams seamlessly.
                </p>
              </div>
              
              {/* Single Key Metric */}
              <div className="mb-16">
                <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 shadow-sm">
                  <span className="text-3xl font-bold text-green-700 mr-3">90%</span>
                  <span className="text-gray-700 text-xl font-medium">faster project organization</span>
                </div>
              </div>
              
              {/* Primary CTA */}
              <div className="mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                >
                  Request a Demo
                </Button>
              </div>
              
              {/* Secondary CTA - Less Prominent */}
              <div className="mb-20">
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Download Use Case →
                </Button>
              </div>
              
              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Mentioned in one of top 25 AI/ML solutions</p>
                
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
                    <span>Used by Fortune 500 teams</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MdSecurity className="w-5 h-5 mr-2 text-green-500" />
                    <span>Enterprise-grade security</span>
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
                    <div className="text-sm text-gray-600 font-medium">AItenders - Project Dashboard</div>
                    <div className="w-12"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-8">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Infrastructure Project RFP</h3>
                        <p className="text-gray-600">Multi-lot tender • 8 expert teams</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Live</span>
                      </div>
                    </div>
                    
                    {/* Progress Overview */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                        <div className="text-3xl font-bold text-green-700 mb-2">127</div>
                        <div className="text-sm text-gray-600">Requirements processed</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                        <div className="text-3xl font-bold text-blue-700 mb-2">8</div>
                        <div className="text-sm text-gray-600">Expert teams coordinated</div>
                      </div>
                    </div>
                    
                    {/* Team Status */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Progress</h4>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <MdEngineering className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Technical Team</div>
                            <div className="text-sm text-gray-600">24 requirements assigned</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-blue-600">85%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                            <MdGavel className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Legal Team</div>
                            <div className="text-sm text-gray-600">18 requirements assigned</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-purple-600">92%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MdBusiness className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Commercial Team</div>
                            <div className="text-sm text-gray-600">31 requirements assigned</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '76%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-green-600">76%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Success Notifications */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-bounce">
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="w-4 h-4" />
                    <span>Requirements analyzed</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-pulse">
                  <div className="flex items-center space-x-2">
                    <MdNotifications className="w-4 h-4" />
                    <span>Teams notified</span>
                  </div>
                </div>
                
                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200/15 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - right side */}
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #C3D9F8 50%, #EBF2FD 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          
          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #C3D9F8 40%, transparent 80%)'
               }}></div>
          
          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 30%, #FBFCFF 70%, #EBF2FD 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Feature Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>
            
            {/* Multi-tone Faded Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/25 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative z-10 text-center">
              
              {/* Main Headline */}
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-[1.1] tracking-tight">
                Validate faster, without <span className="text-purple-600">risking credibility</span>
              </h2>
              
              {/* Body Copy */}
              <p className="text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto font-light">
                Tight deadlines leave no room for error. Small teams manage manual reviews that are slow, repetitive, and prone to mistakes — with no legal or quality support. Each missed clause can cost internal trust and even derail your bid.
              </p>
              
              <p className="text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto font-light">
                With Aitenders, validation tracking and smart AI reading ensure nothing is overlooked — so you deliver on time with confidence.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Request a Demo
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Watch Quick Demo
                </Button>
              </div>

              {/* Supporting Cards - 3 Card Grid Inside Main Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
                {/* Card 1: Stay compliant */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60 hover:border-purple-200/50 transform hover:-translate-y-2 transition-all duration-300"
                     style={{
                       boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                     }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MdSecurity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Stay compliant</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-lg">
                    Every review step is logged and traceable for instant proof of rigor.
                  </p>
                </div>

                {/* Card 2: Save hours */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60 hover:border-purple-200/50 transform hover:-translate-y-2 transition-all duration-300"
                     style={{
                       boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                     }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MdFlashOn className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Save hours</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-lg">
                    Automated smart reading cuts down re‑reads and accelerates validation.
                  </p>
                </div>

                {/* Card 3: Protect credibility */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60 hover:border-purple-200/50 transform hover:-translate-y-2 transition-all duration-300"
                     style={{
                       boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                     }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MdShield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Protect credibility</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-lg">
                    Avoid costly oversights that damage trust inside your organization.
                  </p>
                </div>

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
                 background: 'radial-gradient(circle, #FBFCFF 0%, #F5F9FE 30%, #C3D9F8 70%, transparent 100%)'
               }}></div>
          
          {/* Medium directional blob - middle left */}
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #EBF2FD 0%, #C3D9F8 50%, #3880E8 90%, transparent 100%)'
               }}></div>
          
          {/* Atmospheric accent - bottom right */}
          <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, transparent 100%)'
               }}></div>
          
          {/* Subtle flowing wave - center */}
          <div className="absolute top-1/2 left-0 w-full h-40 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #C3D9F8 25%, #F5F9FE 50%, #EBF2FD 75%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">AItenders empowers your team with AI-driven coordination and compliance for complex RFPs</h1>
            <h3 className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Structure massive documentation instantly, orchestrate expert collaboration seamlessly, 
              and control every project evolution without gaps.
            </h3>
          </div>

          {/* Feature 1: Structure Complex Projects - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdFlashOn className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Structure Complex Projects Instantly</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Equipped with AI document analysis and intelligent requirement extraction, AItenders automatically organizes 500+ page RFPs into structured data, classified requirements, and actionable insights ready for expert analysis from day 1.
              </p>
              <div className="flex items-center text-lg text-gray-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Save days of manual document processing
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
                      <span className="text-sm text-gray-700">Requirements extraction</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Data classification</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <MdCheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Insight generation</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature 2: Orchestrate Expert Teams - Text Right, Card Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="order-2 lg:order-1">
              <Card className="p-10 bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Expert Coordination</h4>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdAccountBox className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">T</span>
                        </div>
                        <span className="text-sm text-gray-700">Technical specialist</span>
                      </div>
                      <span className="text-xs text-gray-500">24 tasks</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">L</span>
                        </div>
                        <span className="text-sm text-gray-700">Legal specialist</span>
                      </div>
                      <span className="text-xs text-gray-500">18 tasks</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">C</span>
                        </div>
                        <span className="text-sm text-gray-700">Commercial specialist</span>
                      </div>
                      <span className="text-xs text-gray-500">31 tasks</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdGroups className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Orchestrate Expert Teams Seamlessly</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                AItenders helps you coordinate technical, legal, commercial, and quality specialists by generating dynamic compliance matrices, allocating requirements to the right experts, and creating unified deliverable structures that eliminate silos.
              </p>
              <div className="flex items-center text-lg text-gray-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Eliminate coordination bottlenecks across departments
              </div>
            </div>
          </div>

          {/* Feature 3: Control Every Evolution - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-1">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <MdSecurity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Control Every Project Evolution</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                The platform automatically detects document changes, tracks version evolution, and instantly alerts relevant team members to prevent requirement gaps, ensuring zero oversight across the entire project lifecycle.
              </p>
              <div className="flex items-center text-lg text-gray-500">
                <MdCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Guarantee 100% requirement coverage with audit trails
              </div>
            </div>
            <div className="order-2">
              <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-3xl transition-all duration-500 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Version Control</h4>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <MdSettings className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-gray-700">Document v2.3 detected</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">New</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-gray-700">3 requirements updated</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Alert</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-700">Team notification sent</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <MdMessage className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Target Audience Section - Interactive Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric presence - left side */}
          <div className="absolute top-10 -left-40 w-[450px] h-[450px] rounded-full opacity-20 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 60%, #C3D9F8 85%, transparent 100%)'
               }}></div>
          
          {/* Medium flowing accent - right top */}
          <div className="absolute top-1/4 -right-24 w-72 h-72 rounded-full opacity-18 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #FBFCFF 0%, #C3D9F8 40%, #EBF2FD 100%)'
               }}></div>
          
          {/* Directional accent with brand primary */}
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full opacity-12 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #C3D9F8 50%, transparent 90%)'
               }}></div>
          
          {/* Subtle horizontal flow */}
          <div className="absolute bottom-16 left-0 w-full h-28 opacity-8 blur-xl lg:opacity-12"
               style={{
                 background: 'linear-gradient(90deg, #EBF2FD 0%, #F5F9FE 30%, transparent 50%, #FBFCFF 80%, #C3D9F8 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-[1.1] tracking-tight">
              Bid management for <span className="text-purple-600">all your needs</span>
            </h1>
            
            {/* Interactive Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {targetAudiences.map((audience) => (
                <button
                  key={audience.id}
                  onClick={() => setActiveAudience(audience)}
                  onMouseEnter={() => setActiveAudience(audience)}
                  className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeAudience.id === audience.id
                      ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                  }`}
                >
                  {audience.title}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Content Card */}
          <Card className="bg-white rounded-3xl overflow-hidden border border-gray-100/50"
               style={{
                 boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
               }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              
              {/* Left Side - Dynamic Content */}
              <motion.div 
                key={activeAudience.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-16 flex flex-col justify-center"
              >
                <div className={`w-16 h-16 ${activeAudience.iconBg} rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 shadow-lg`}>
                  <activeAudience.icon className={`w-8 h-8 ${activeAudience.iconColor}`} />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">{activeAudience.title}</h3>
                
                <p className="text-gray-700 text-xl leading-relaxed mb-10 font-light">
                  {activeAudience.description}
                </p>
                
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl w-fit transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  Request Demo →
                </Button>
              </motion.div>

              {/* Right Side - Dynamic UI Mockup */}
              <motion.div 
                key={`${activeAudience.id}-ui`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center relative"
              >
                
                {/* Main Dashboard Mockup */}
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
                  
                  {/* Header Bar */}
                  <div className="bg-gray-900 text-white p-4 rounded-t-xl flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">AItenders Dashboard</span>
                    <div className="text-sm text-gray-300">Live</div>
                  </div>

                  {/* Dynamic Dashboard Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                      <div className="space-y-3">
                        
                        {/* Dynamic Progress Bars */}
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-700">Requirements Analysis</span>
                            <span className={`text-sm font-medium text-${activeAudience.dashboardData.requirements.color}-600`}>
                              {activeAudience.dashboardData.requirements.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${activeAudience.dashboardData.requirements.progress}%` }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className={`bg-${activeAudience.dashboardData.requirements.color}-500 h-2 rounded-full`}
                            />
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-700">Expert Coordination</span>
                            <span className={`text-sm font-medium text-${activeAudience.dashboardData.coordination.color}-600`}>
                              {activeAudience.dashboardData.coordination.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${activeAudience.dashboardData.coordination.progress}%` }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              className={`bg-${activeAudience.dashboardData.coordination.color}-500 h-2 rounded-full`}
                            />
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-700">Compliance Check</span>
                            <span className={`text-sm font-medium text-${activeAudience.dashboardData.compliance.color}-600`}>
                              {activeAudience.dashboardData.compliance.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${activeAudience.dashboardData.compliance.progress}%` }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                              className={`bg-${activeAudience.dashboardData.compliance.color}-500 h-2 rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Team Status */}
                    <div className="border-t pt-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-3">Team Status</h5>
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs text-white font-medium">T</span>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs text-white font-medium">L</span>
                        </div>
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs text-white font-medium">C</span>
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs text-white font-medium">Q</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs text-gray-600 font-medium">+3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Floating Notification */}
                <motion.div 
                  key={`${activeAudience.id}-notification`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
                >
                  {activeAudience.notification}
                </motion.div>

                {/* Dynamic Floating Alert */}
                <motion.div 
                  key={`${activeAudience.id}-alert`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
                >
                  {activeAudience.alert}
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </div>
      </section>
      {/* User Journey Section - High Conversion Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - center top */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-22 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #FBFCFF 0%, #F5F9FE 35%, #C3D9F8 70%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - bottom left */}
          <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full opacity-18 blur-2xl"
               style={{
                 background: 'linear-gradient(45deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          
          {/* Directional accent - right side */}
          <div className="absolute top-1/3 -right-28 w-72 h-72 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #EBF2FD 40%, transparent 80%)'
               }}></div>
          
          {/* Subtle connecting flow */}
          <div className="absolute top-2/3 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-14"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 20%, #C3D9F8 50%, transparent 80%, #FBFCFF 100%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">Three Steps to Compliant Project Success</h3>
          </div>
          
          {/* Steps Flow */}
          <div className="relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-12 border border-gray-100/50 hover:border-purple-200/50 transform hover:-translate-y-3 transition-all duration-500"
                     style={{
                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                     }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-8 left-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl flex items-center justify-center text-2xl font-bold shadow-xl">
                      1
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MdDescription className="w-12 h-12 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">Upload Complex Documentation</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">Drop your project files and watch AI structure everything automatically</p>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MdGroups className="w-10 h-10 text-green-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Collaborate on Compliance</h4>
                    <p className="text-gray-600 leading-relaxed">Generate matrices, allocate expert responsibilities, and build response strategy as a team</p>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MdSecurity className="w-10 h-10 text-orange-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Control Every Evolution</h4>
                    <p className="text-gray-600 leading-relaxed">Track changes, manage Q&As, and ensure zero gaps throughout the project lifecycle</p>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Watch a 2-Minute Demo
            </Button>
          </div>
        </div>
      </section>
      {/* KPI Section - High Impact Design */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Measurable Impact on Complex Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from teams managing multi-lot international projects</p>
          </div>
          
          {/* KPI Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* KPI 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[200px]">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  90%
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Data organization completed immediately</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[200px]">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  40%
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Faster review organization</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[200px]">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  0
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Formal rejections for non-compliance</p>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 text-center border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[200px]">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Requirement coverage guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Comparison Section - High-Conversion Enterprise Design */}
      <section className="py-40 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-blue-200/15 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Clean Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Changes with AItenders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the complete transformation from manual chaos to AI-powered precision
            </p>
          </div>

          {/* Clean Comparison Container */}
          <div className="relative">
            {/* Desktop Clean Comparison Table */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Simple Table Header */}
                <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
                  <div className="p-6 border-r border-gray-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                        <MdWarning className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Manual Process Before</h3>
                        <p className="text-sm text-gray-600">Chaos, delays, and risks</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AI-Powered AItenders</h3>
                        <p className="text-sm text-gray-600">Automated, accurate, efficient</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Comparison Rows */}
                <div className="divide-y divide-gray-200">
                  {/* Row 1 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Excel compliance chaos across 8+ experts</h4>
                          <p className="text-gray-600 text-xs">Spreadsheets scattered across departments with no central coordination</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Unified AI compliance dashboard for all teams</h4>
                          <p className="text-gray-600 text-xs">Single source of truth with real-time collaboration for all experts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Days lost extracting requirements from 500+ pages</h4>
                          <p className="text-gray-600 text-xs">Manual document analysis consumes weeks of expert time</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Instant requirement extraction and classification</h4>
                          <p className="text-gray-600 text-xs">AI processes complex documents in minutes, not weeks</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Copy-paste errors risk million-euro exclusions</h4>
                          <p className="text-gray-600 text-xs">Human errors in manual processes cost critical opportunities</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">AI-guided writing with source verification</h4>
                          <p className="text-gray-600 text-xs">Intelligent assistance eliminates errors with automated checks</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Multiple review cycles delay submission</h4>
                          <p className="text-gray-600 text-xs">Endless back-and-forth coordination slows everything down</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Real-time inconsistency detection and alerts</h4>
                          <p className="text-gray-600 text-xs">Proactive quality control with instant team notifications</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdClose className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Hidden requirement gaps cause rejections</h4>
                          <p className="text-gray-600 text-xs">Critical oversights discovered too late in the process</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                          <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">100% requirement coverage with proof trails</h4>
                          <p className="text-gray-600 text-xs">Complete audit trail ensures nothing is ever missed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Comparison - Simple Cards */}
            <div className="lg:hidden space-y-6">
              {/* Before Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-red-500 rounded mr-3">
                    <MdWarning className="w-4 h-4 text-white m-1" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Manual Process Before</h3>
                </div>
                <div className="space-y-3">
                  {/* Mobile comparison items with same content */}
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Excel compliance chaos across 8+ experts</h4>
                      <p className="text-xs text-gray-600">Spreadsheets scattered across departments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Days lost extracting requirements from 500+ pages</h4>
                      <p className="text-xs text-gray-600">Manual document analysis takes weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Copy-paste errors risk million-euro exclusions</h4>
                      <p className="text-xs text-gray-600">Human errors cost opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Multiple review cycles delay submission</h4>
                      <p className="text-xs text-gray-600">Endless coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdClose className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Hidden requirement gaps cause rejections</h4>
                      <p className="text-xs text-gray-600">Critical oversights discovered too late</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded mr-3">
                    <MdCheckCircle className="w-4 h-4 text-white m-1" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">AI-Powered AItenders</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Unified AI compliance dashboard for all teams</h4>
                      <p className="text-xs text-gray-600">Single source of truth for all experts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Instant requirement extraction and classification</h4>
                      <p className="text-xs text-gray-600">AI processes documents in minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">AI-guided writing with source verification</h4>
                      <p className="text-xs text-gray-600">Eliminate errors with intelligent assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">Real-time inconsistency detection and alerts</h4>
                      <p className="text-xs text-gray-600">Proactive quality control</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 mt-1 flex-shrink-0">
                      <MdCheck className="w-2 h-2 m-1 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">100% requirement coverage with proof trails</h4>
                      <p className="text-xs text-gray-600">Complete audit trail ensures nothing is missed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      
      {/* Master Compliance Section - Inspired by Image Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - center */}
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, #C3D9F8 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - bottom right */}
          <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #FBFCFF 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          
          {/* Directional accent - top left */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-12 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #EBF2FD 50%, transparent 90%)'
               }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Header with subtle background */}
              <div className="bg-gradient-to-br from-white/80 to-gray-50/60 rounded-3xl p-10 border border-gray-100/50 backdrop-blur-sm"
                   style={{
                     boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                   }}>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Master compliance in high-stakes tenders
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  The only "engineering light" platform designed for complex bids.
                </p>

                {/* Feature list */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        1.500+ pages instantly structured into an intelligent base
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Live conformity matrix for expert collaboration - no Excel
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Automatic alerts on risks, inconsistencies, and updates
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mt-8 font-medium">
                  A flexible alternative to siloed internal tools, guaranteeing 100% compliance.
                </p>
              </div>
            </div>

            {/* Right Column - Testimonial */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-8 border border-gray-100/50 transform hover:-translate-y-2 transition-all duration-300"
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                   }}>
                
                {/* Company Logo Section */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    AItenders
                  </div>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-light italic">
                  "With AItenders, the complexity of our multi-lot international projects becomes manageable. 99% of our compliance requirements are automatically tracked throughout the entire tender process."
                </blockquote>

                {/* CTA Link */}
                <div className="mb-8">
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center transition-colors">
                    Read the customer case →
                  </a>
                </div>

                {/* Author Information */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">PD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pierre Dubois</div>
                    <div className="text-gray-600 text-sm">Project Director</div>
                  </div>
                </div>

                {/* Bottom navigation dots (inspired by image) */}
                <div className="flex justify-center mt-8 space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>

                {/* Bottom link */}
                <div className="text-center mt-6">
                  <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors">
                    Read their testimonies →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust & Compliance */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-green-50/50 border-green-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MdSecurity className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Security for Critical Projects</h2>
              <p className="text-lg text-gray-600">Audit-Ready Compliance and Data Protection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <MdVerifiedUser className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Complete Project Audit Trails</h4>
                <p className="text-gray-600 text-sm">Full version control and collaboration tracking</p>
              </div>
              <div>
                <MdShield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Multi-Expert Validation</h4>
                <p className="text-gray-600 text-sm">Collaborative tracking across all team members</p>
              </div>
              <div>
                <MdAnalytics className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise Integration</h4>
                <p className="text-gray-600 text-sm">Seamless connection with existing project systems</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Your Next Complex Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the project teams who trust AItenders to secure their complex bids, eliminate compliance risks, 
            and win with complete confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <MdMessage className="w-5 h-5 mr-2" />
              Request a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-purple-600 px-8 py-4 text-lg backdrop-blur-sm">
              Contact Our Team
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-80">Enterprise-grade security • Multi-expert collaboration • Complete audit trails</p>
        </div>
      </section>
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}