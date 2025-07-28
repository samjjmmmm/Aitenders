import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MdMessage, MdShield, MdPlayArrow } from "react-icons/md";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import BouyguesLogo from "@assets/Bouyges_1753711339292.png";
import ColasLogo from "@assets/Colas_1753711339292.png";
import EquansLogo from "@assets/Equans_1753711339292.png";

export default function UC5Page() {
  const [activeAudience] = useState({
    id: 'project-manager',
    title: 'Project Manager',
    description: 'Content will be added later for UC5 target audience.'
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-40 px-8 bg-gradient-to-br from-white via-slate-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200/50 px-6 py-3 text-lg font-medium rounded-full shadow-sm">
            Use Case 5 • Content Coming Soon
          </Badge>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-[1.1] tracking-tight">
            Content will be <br/>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">added later</span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            Placeholder content for UC5 - same structure as UC3
          </p>
          
          <div className="mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
            >
              Request a Demo
            </Button>
          </div>
          
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

      {/* Pain Points Section */}
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
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Request a Demo
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-3xl transition-all duration-300">
                  <MdPlayArrow className="w-6 h-6 mr-2" />
                  Watch Quick Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All other sections with same wireframe structure */}
      <section className="py-32 px-8 bg-gradient-to-br from-white via-slate-50/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Solution Section Placeholder
            </h1>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Target Audience Placeholder
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">{activeAudience.title}</h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10 font-light">
                {activeAudience.description}
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl w-fit transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Request Demo →
              </Button>
            </motion.div>
            <motion.div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center relative">
              <div className="text-center text-gray-500">Interactive mockup placeholder</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              User Journey Placeholder
            </h2>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">KPI Section Placeholder</h2>
        </div>
      </section>

      <section className="py-40 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Before/After Comparison Placeholder
            </h2>
          </div>
        </div>
      </section>

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
                <div className="flex flex-col items-center space-y-4">
                  <img src={BouyguesLogo} alt="Company" className="h-12 w-auto opacity-60" />
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

      <section className="py-20 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">Content placeholder for final CTA</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <MdMessage className="w-5 h-5 mr-2" />
              Request a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-purple-600 px-8 py-4 text-lg backdrop-blur-sm">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}