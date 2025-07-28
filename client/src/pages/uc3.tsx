import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MdSchedule, MdCheckCircle, MdWarning, MdPeople, MdTrendingUp, MdSecurity, 
  MdFlashOn, MdArrowForward, MdGpsFixed, MdVerifiedUser, MdAnalytics, MdEmojiEvents, 
  MdMessage, MdShield, MdGroups, MdDescription, MdSettings, MdAccountBox
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar, FaFileAlt, FaCogs } from "react-icons/fa";
import ContactSection from "@/components/contact-section";

export default function UC3Page() {
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
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
            Use Case: Complex Multi-Lot Bid Management
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Chaque exigence traitée, <span className="text-purple-600">chaque risque maîtrisé</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform complex bid documentation into structured, compliant proposals. 
            Master complex bids before they master you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg">
              Request a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg">
              Download the Use Case
            </Button>
          </div>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <MdSchedule className="w-4 h-4 mr-2" />
            Perfect for multi-lot international mega-projects
          </div>
        </div>
      </section>

      {/* Pain Points Section - Clean Modern Design */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Centered Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master complex bids before they master you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Your trusted partner for seamless multi-lot project management
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-base font-medium">
              Request Demo
            </Button>
          </div>

          {/* Four Column Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MdVerifiedUser className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your trusted compliance partner</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AItenders is <span className="text-purple-600 font-medium">enterprise-grade compliant</span> by design, with advanced capabilities such as <span className="text-purple-600 font-medium">multi-expert coordination</span> across technical, legal, and commercial teams
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MdSecurity className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified for complex projects</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Benefit from secure document processing through <span className="text-purple-600 font-medium">AI analysis</span> and high-grade <span className="text-purple-600 font-medium">compliance tracking</span>, with complete audit trails to ensure best-in-class project management for demanding mega-projects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MdTrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">90% faster organization</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AItenders delivers instant project structuring with <span className="text-purple-600 font-medium">90% data organization</span> completed on Day 1 for all Enterprise customers working with 500+ page RFPs
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MdGroups className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects that scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Manage complex projects from <span className="text-purple-600 font-medium">multi-lot to mega-projects</span> with seamless coordination across <span className="text-purple-600 font-medium">8+ expert teams</span> while maintaining 100% compliance coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Detailed Card Design */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AItenders amplifies your team's intelligence with AI-driven project coordination and compliance tools for complex, multi-lot RFPs.
            </h1>
            <h3 className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Structure massive documentation instantly, orchestrate expert collaboration seamlessly, 
              and control every project evolution without gaps.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Structure Complex Projects Instantly */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <MdFlashOn className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Structure Complex Projects Instantly</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Equipped with AI document analysis and intelligent requirement extraction, AItenders automatically organizes 500+ page RFPs into structured data, classified requirements, and actionable insights ready for expert analysis from day 1.
                </p>
              </div>

              {/* Detailed UI Mockup */}
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

            {/* Card 2: Orchestrate Expert Teams Seamlessly */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <MdGroups className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Orchestrate Expert Teams Seamlessly</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AItenders helps you coordinate technical, legal, commercial, and quality specialists by generating dynamic compliance matrices, allocating requirements to the right experts, and creating unified deliverable structures that eliminate silos.
                </p>
              </div>

              {/* Detailed UI Mockup */}
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

            {/* Card 3: Control Every Project Evolution */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Control Every Project Evolution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The platform automatically detects document changes, tracks version evolution, and instantly alerts relevant team members to prevent requirement gaps, ensuring zero oversight across the entire project lifecycle.
                </p>
              </div>

              {/* Detailed UI Mockup */}
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
      </section>

      {/* Before and After Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Changes with AItenders</h2>
            <p className="text-lg text-gray-600">See the transformation in complex project management</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-red-100 bg-red-50/30">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Manual Process Before</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MdWarning className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Excel compliance chaos across 8+ experts</span>
                </li>
                <li className="flex items-start">
                  <MdWarning className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Days lost extracting requirements from 500+ pages</span>
                </li>
                <li className="flex items-start">
                  <MdWarning className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Copy-paste errors risk million-euro exclusions</span>
                </li>
                <li className="flex items-start">
                  <MdWarning className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Multiple review cycles delay submission</span>
                </li>
                <li className="flex items-start">
                  <MdWarning className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Hidden requirement gaps cause rejections</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-green-100 bg-green-50/30">
              <h3 className="text-2xl font-bold text-green-800 mb-6">AI-Powered Process With AItenders</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Unified AI compliance dashboard for all teams</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Instant requirement extraction and classification</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">AI-guided writing with source verification</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Real-time inconsistency detection and alerts</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">100% requirement coverage with proof trails</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Empower your expert teams to master complex bids with confidence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="p-6 border-purple-100 bg-purple-50/30">
                <div className="flex items-start mb-4">
                  <MdAccountBox className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">For Bid Response Managers</h3>
                    <p className="text-gray-600 text-sm">
                      Coordinate technical, legal, commercial, and quality experts seamlessly with AI-powered project organization. 
                      Structure 500+ page RFPs instantly and maintain complete compliance visibility.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-purple-100 bg-purple-50/30">
                <div className="flex items-start mb-4">
                  <MdTrendingUp className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">For Project Offer Leaders</h3>
                    <p className="text-gray-600 text-sm">
                      Lead winning strategies with intelligent project setup that eliminates weeks of manual preparation. 
                      Access real-time compliance tracking and automated change detection.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-purple-100 bg-purple-50/30">
                <div className="flex items-start mb-4">
                  <MdSettings className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">For Contract Managers</h3>
                    <p className="text-gray-600 text-sm">
                      Ensure compliance across multi-departmental teams with dynamic requirement tracking and 
                      automated inconsistency detection. Maintain complete audit trails.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-purple-100 bg-purple-50/30">
                <div className="flex items-start mb-4">
                  <FaCogs className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">For Technical Directors</h3>
                    <p className="text-gray-600 text-sm">
                      Focus your specialists on solution development instead of administrative compliance. 
                      Provide pre-organized requirement structures that eliminate interpretation errors.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-purple-100 bg-purple-50/30">
                <div className="flex items-start mb-4">
                  <MdAnalytics className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">For Large Account Commercial Directors</h3>
                    <p className="text-gray-600 text-sm">
                      Pursue complex international opportunities with bulletproof compliance foundations. 
                      Demonstrate complete requirement coverage to senior management.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Testimonial */}
              <Card className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200">
                <blockquote className="text-gray-700 italic mb-3">
                  "90% of our data organization is done on Day 1. We save days of manual work and eliminate interpretation errors."
                </blockquote>
                <p className="text-sm text-gray-600 font-medium">— Expert Team Lead, Major Infrastructure Project</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Three Steps to Compliant Project Success</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userJourneySteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
                {index < userJourneySteps.length - 1 && (
                  <MdArrowForward className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Watch a 2-Minute Demo
            </Button>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Impact on Complex Projects</h2>
            <p className="text-lg text-gray-600">Real results from teams managing multi-lot international projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{kpi.metric}</div>
                <p className="text-gray-600 text-sm">{kpi.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Purpose-Built for Large-Scale Complexity</h2>
            <p className="text-lg text-gray-600">Why AItenders Leads Complex Project Analysis</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MdEmojiEvents className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </Card>
            ))}
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