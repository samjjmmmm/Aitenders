import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MdSchedule, MdCheckCircle, MdWarning, MdPeople, MdTrendingUp, MdSecurity, 
  MdFlashOn, MdArrowForward, MdGpsFixed, MdVerifiedUser, MdAnalytics, MdEmojiEvents, 
  MdMessage, MdShield, MdGroups, MdDescription, MdSettings, MdAccountBox, MdBusiness, 
  MdEngineering, MdGavel, MdTableChart, MdAccessTime, MdContentCopy, MdRefresh, MdSearch
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar, FaFileAlt, FaCogs } from "react-icons/fa";
import ContactSection from "@/components/contact-section";
import UC3AnalysisCard from "@/components/UC3AnalysisCard";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Redesigned with Animated Card */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                Use Case: Complex Multi-Lot Bid Management
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Chaque exigence traitée, <span className="text-purple-600">chaque risque maîtrisé</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Transform complex bid documentation into structured, compliant proposals. 
                Master complex bids before they master you.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90%</div>
                  <div className="text-sm text-gray-600">Faster organization</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Compliance gaps</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Coverage guaranteed</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:border-purple-700 transition-all duration-300">
                  Download the Use Case
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Trusted by expert teams managing multi-lot international projects</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MdShield className="w-5 h-5 mr-2 text-green-500" />
                    Enterprise-grade security
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MdCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
                    ISO 27001 compliant
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <UC3AnalysisCard />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Success Indicators */}
                <div className="absolute -top-8 left-8 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce">
                  ✓ AI Analysis Complete
                </div>
                <div className="absolute -bottom-4 right-8 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium animate-pulse">
                  🚀 Ready for Review
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pain Points Section - Clean Modern High-Conversion Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20">
        <div className="max-w-7xl mx-auto">
          {/* Centered Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              🚀 Trusted by 100+ Enterprise Teams
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Master complex bids before <br className="hidden lg:block" />
              <span className="text-purple-600">they master you</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Your trusted partner for seamless multi-lot project management with enterprise-grade compliance and AI-powered coordination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Request Demo
              </Button>
              <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl hover:border-purple-700 transition-all duration-300">
                Watch 2-Min Video
              </Button>
            </div>
          </div>

          {/* Four Column Features Grid with Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1 - Trust & Compliance */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Trusted Compliance Partner</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  <span className="text-purple-600 font-semibold">Enterprise-grade compliant</span> by design, with advanced capabilities for 
                  <span className="text-purple-600 font-semibold"> multi-expert coordination</span> across technical, legal, and commercial teams
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    ISO 27001 Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Security & Projects */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Complex Project Ready</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Secure document processing through <span className="text-purple-600 font-semibold">AI analysis</span> and 
                  <span className="text-purple-600 font-semibold"> compliance tracking</span>, with complete audit trails for demanding mega-projects
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Bank-grade Security
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Speed & Efficiency */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">90% Faster Organization</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Instant project structuring with <span className="text-purple-600 font-semibold">90% data organization</span> completed on Day 1 
                  for Enterprise customers working with 500+ page RFPs
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Same-day Results
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 - Scale & Teams */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Projects That Scale</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Manage complex projects from <span className="text-purple-600 font-semibold">multi-lot to mega-projects</span> with seamless coordination 
                  across <span className="text-purple-600 font-semibold">8+ expert teams</span> maintaining 100% compliance coverage
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Unlimited Scale
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* Solution Section - Alternating Layout Design */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">AItenders empowers your team with AI-driven coordination and compliance for complex RFPs</h1>
            <h3 className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Structure massive documentation instantly, orchestrate expert collaboration seamlessly, 
              and control every project evolution without gaps.
            </h3>
          </div>

          {/* Feature 1: Structure Complex Projects - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-1">
              <div className="w-16 h-16 bg-blue-500 rounded-3xl flex items-center justify-center mb-6">
                <MdFlashOn className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Structure Complex Projects Instantly</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Equipped with AI document analysis and intelligent requirement extraction, AItenders automatically organizes 500+ page RFPs into structured data, classified requirements, and actionable insights ready for expert analysis from day 1.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MdCheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Save days of manual document processing
              </div>
            </div>
            <div className="order-2">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
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
              <div className="w-16 h-16 bg-purple-500 rounded-3xl flex items-center justify-center mb-6">
                <MdGroups className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Orchestrate Expert Teams Seamlessly</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AItenders helps you coordinate technical, legal, commercial, and quality specialists by generating dynamic compliance matrices, allocating requirements to the right experts, and creating unified deliverable structures that eliminate silos.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MdCheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Eliminate coordination bottlenecks across departments
              </div>
            </div>
          </div>

          {/* Feature 3: Control Every Evolution - Text Left, Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center mb-6">
                <MdSecurity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Control Every Project Evolution</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The platform automatically detects document changes, tracks version evolution, and instantly alerts relevant team members to prevent requirement gaps, ensuring zero oversight across the entire project lifecycle.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MdCheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Guarantee 100% requirement coverage with audit trails
              </div>
            </div>
            <div className="order-2">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Bid management for <span className="text-purple-600">all your needs</span>
            </h1>
            
            {/* Interactive Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {targetAudiences.map((audience) => (
                <button
                  key={audience.id}
                  onClick={() => setActiveAudience(audience)}
                  onMouseEnter={() => setActiveAudience(audience)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeAudience.id === audience.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {audience.title}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Content Card */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              
              {/* Left Side - Dynamic Content */}
              <motion.div 
                key={activeAudience.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-12 flex flex-col justify-center"
              >
                <div className={`w-12 h-12 ${activeAudience.iconBg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
                  <activeAudience.icon className={`w-6 h-6 ${activeAudience.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{activeAudience.title}</h3>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {activeAudience.description}
                </p>
                
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 w-fit transition-all duration-300 hover:shadow-lg">
                  Learn more →
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
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Three Steps to Compliant Project Success</h3>
          </div>
          
          {/* Steps Flow */}
          <div className="relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MdDescription className="w-10 h-10 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Upload Complex Documentation</h4>
                    <p className="text-gray-600 leading-relaxed">Drop your project files and watch AI structure everything automatically</p>
                  </div>
                  
                  {/* Subtle Animation Element */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  90%
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Data organization completed immediately</p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  40%
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Faster review organization</p>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 text-center border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  0
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Formal rejections for non-compliance</p>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 text-center border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">Requirement coverage guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Comparison Section - High Conversion Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Changes with AItenders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See the complete transformation from manual chaos to AI-powered precision</p>
          </div>

          {/* Before vs After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Before - Manual Process */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-100 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                    <MdWarning className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-1">Manual Process Before</h3>
                    <p className="text-red-600 text-sm">Chaos, delays, and risks</p>
                  </div>
                </div>

                {/* Problems List */}
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-red-200 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdTableChart className="w-4 h-4 text-white" aria-label="Excel spreadsheet chaos" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Excel compliance chaos across 8+ experts</h4>
                        <p className="text-gray-600 text-sm">Spreadsheets scattered across departments</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-red-200 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdAccessTime className="w-4 h-4 text-white" aria-label="Time lost on manual processing" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Days lost extracting requirements from 500+ pages</h4>
                        <p className="text-gray-600 text-sm">Manual document analysis takes weeks</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-red-200 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdContentCopy className="w-4 h-4 text-white" aria-label="Copy-paste errors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Copy-paste errors risk million-euro exclusions</h4>
                        <p className="text-gray-600 text-sm">Human errors cost critical opportunities</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-red-200 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdRefresh className="w-4 h-4 text-white" aria-label="Multiple review cycles" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Multiple review cycles delay submission</h4>
                        <p className="text-gray-600 text-sm">Endless back-and-forth coordination</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-red-200 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdSearch className="w-4 h-4 text-white" aria-label="Hidden requirement gaps" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Hidden requirement gaps cause rejections</h4>
                        <p className="text-gray-600 text-sm">Critical oversights discovered too late</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-red-200/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* After - AI-Powered Process */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                    <MdCheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-1">AI-Powered Process With AItenders</h3>
                    <p className="text-green-600 text-sm">Automated, accurate, and efficient</p>
                  </div>
                </div>

                {/* Solutions List */}
                <div className="space-y-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-green-200 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Unified AI compliance dashboard for all teams</h4>
                        <p className="text-gray-600 text-sm">Single source of truth for all experts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-green-200 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Instant requirement extraction and classification</h4>
                        <p className="text-gray-600 text-sm">AI processes documents in minutes, not days</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-green-200 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">AI-guided writing with source verification</h4>
                        <p className="text-gray-600 text-sm">Eliminate errors with intelligent assistance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-green-200 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Real-time inconsistency detection and alerts</h4>
                        <p className="text-gray-600 text-sm">Proactive quality control throughout the process</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-green-200 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MdCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">100% requirement coverage with proof trails</h4>
                        <p className="text-gray-600 text-sm">Complete audit trail ensures nothing is missed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-purple-600 text-white rounded-full p-4 shadow-2xl">
              <MdArrowForward className="w-8 h-8" />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Bid Management?</h3>
              <p className="text-lg mb-6 opacity-90">Join teams who've eliminated compliance chaos and accelerated their success</p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Request Your Demo Today
              </Button>
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
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
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