import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MdSchedule, MdCheckCircle, MdWarning, MdPeople, MdTrendingUp, MdSecurity, 
  MdFlashOn, MdArrowForward, MdGpsFixed, MdVerifiedUser, MdAnalytics, MdEmojiEvents, 
  MdMessage, MdShield, MdGroups, MdPlayArrow, MdDescription, MdAccountBox, MdNotifications
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar } from "react-icons/fa";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import BouyguesLogo from "@assets/Bouyges_1753711339292.png";
import ColasLogo from "@assets/Colas_1753711339292.png";
import EquansLogo from "@assets/Equans_1753711339292.png";

export default function UC1Page() {
  const [activeAudience, setActiveAudience] = useState({
    id: 'business-dev',
    title: 'Business Development Manager',
    description: 'You need to respond fast to small project opportunities while maintaining bid quality and compliance standards.'
  });

  // Target audience data
  const targetAudiences = [
    {
      id: 'business-dev',
      title: 'Business Development Manager',
      description: 'You need to respond fast to small project opportunities while maintaining bid quality and compliance standards.'
    },
    {
      id: 'proposal-manager',
      title: 'Proposal Manager',
      description: 'You coordinate multiple small bids simultaneously and need efficient processes to ensure nothing falls through the cracks.'
    },
    {
      id: 'project-director',
      title: 'Project Director',
      description: 'You oversee the complete bidding pipeline and need visibility into proposal quality and compliance risks.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-40 px-8 bg-gradient-to-br from-aitenders-white-blue via-aitenders-pale-blue/30 to-aitenders-pastel-blue/20 relative overflow-hidden">
        {/* Subtitle placeholder - exact same structure as UC3 */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-gradient-to-r from-aitenders-pastel-blue to-aitenders-light-blue text-aitenders-dark-blue border-aitenders-light-blue/50 px-6 py-3 text-lg font-medium rounded-full shadow-sm">
            Use Case 1 • Fast-Track Small Project Bids
          </Badge>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-aitenders-black mb-12 leading-[1.1] tracking-tight">
            Content will be <br/>
            <span className="bg-gradient-to-r from-aitenders-primary-blue to-aitenders-dark-blue bg-clip-text text-transparent">added later</span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-aitenders-dark-blue max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            Placeholder content for UC1 - same structure as UC3
          </p>
          
          {/* Primary CTA */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
            >
              Request a Demo
            </Button>
          </div>
          
          {/* Secondary CTA */}
          <div className="mb-20">
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
            >
              Download Use Case →
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 lg:p-20 border border-gray-100/50 relative overflow-hidden mb-20">
            <div className="relative z-10 text-center">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-[1.1] tracking-tight">
                Pain Point Content <span className="text-purple-600">Placeholder</span>
              </h2>
              
              <p className="text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto font-light">
                Content will be added later - same structure as UC3 pain points section.
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

              {/* Supporting Cards - 3 Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MdSecurity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Feature 1</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-lg">
                    Feature description placeholder
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MdFlashOn className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Feature 2</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-lg">
                    Feature description placeholder
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MdShield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Feature 3</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-lg">
                    Feature description placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Alternating Layout Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Solution Section Placeholder
            </h1>
            <h3 className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Content structure matches UC3 exactly
            </h3>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Interactive Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Target Audience Placeholder
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              key={activeAudience.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">{activeAudience.title}</h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10 font-light">
                {activeAudience.description}
              </p>
              
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl w-fit transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Request Demo →
              </Button>
            </motion.div>

            <motion.div 
              key={`${activeAudience.id}-ui`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center relative"
            >
              <div className="text-center text-gray-500">
                Interactive mockup placeholder
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Journey Section - High Conversion Design */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              User Journey Placeholder
            </h2>
          </div>
        </div>
      </section>

      {/* KPI Section - High Impact Design */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">KPI Section Placeholder</h2>
        </div>
      </section>

      {/* Comparison Section - High-Conversion Enterprise Design */}
      <section className="py-40 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Before/After Comparison Placeholder
            </h2>
          </div>
        </div>
      </section>

      {/* Master Compliance Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Compliance Section Placeholder
              </h2>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 relative overflow-hidden">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MdShield className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Testimonial Placeholder</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light italic">
                  "Customer testimonial content goes here"
                </p>

                {/* Company Logo Section */}
                <div className="flex flex-col items-center space-y-4">
                  <img 
                    src={BouyguesLogo} 
                    alt="Company" 
                    className="h-12 w-auto opacity-60" 
                  />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Customer Name</p>
                    <p className="text-gray-600 text-sm">Job Title, Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Company Logos Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-8 text-lg">Trusted by leading construction companies</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <img src={BouyguesLogo} alt="Bouygues" className="h-12 w-auto" />
            <img src={ColasLogo} alt="Colas" className="h-12 w-auto" />
            <img src={EquansLogo} alt="Equans" className="h-12 w-auto" />
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Fast-Track Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Content placeholder for final CTA
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