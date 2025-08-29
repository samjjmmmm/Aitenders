import { FaCheckCircle, FaLightbulb, FaEye, FaArchive, FaFileAlt, FaChartLine, FaComments, FaCog, FaLayerGroup, FaTags, FaSlack } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useGlobalTranslations } from "@/contexts/TranslationContext";
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import ClientLogos from "@/components/client-logos";
import DemoCTAButton from "@/components/demo-cta-button";
import ChatInterface from "@/components/chat-interface";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import uc1HeroImage from "@assets/UC1 HERO_1756117718476.png";
import featureImage1 from "@assets/wow 1_1756122537818.png";
import featureImage2 from "@assets/wow 2_1756122537819.png";
import featureImage3 from "@assets/wow 3_1756122537813.png";

export default function UC1Slack() {
  const { t, currentLanguage } = useGlobalTranslations();

  // Function to scroll to simulator section
  const scrollToSimulator = () => {
    const simulatorSection = document.getElementById('roi-simulator-section');
    if (simulatorSection) {
      simulatorSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" variants={fadeInUp}>
            
            {/* Badge */}
            <div className="mb-6 md:mb-8">
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300 text-sm md:text-base font-semibold px-4 md:px-6 py-2 rounded-full">
                <FaSlack className="inline-block mr-2" />
                Slack Integration - Tender Analysis
              </Badge>
            </div>

            {/* Hero Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Slack-Powered
              </span>
              <br />
              <span className="text-gray-800">
                Tender Analysis
              </span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Transform your team's tender analysis workflow with AI-powered insights delivered directly to your Slack workspace. 
              Streamline collaboration and accelerate decision-making processes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16"
              variants={fadeInUp}
            >
              <Button 
                onClick={scrollToSimulator}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-testid="button-try-simulator"
              >
                Try ROI Simulator
              </Button>
              <DemoCTAButton />
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative mt-8 md:mt-12"
            variants={fadeInUp}
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-200">
                <img 
                  src={uc1HeroImage} 
                  alt="Slack Integration Dashboard"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-lg"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 md:py-20 lg:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Slack Integration Features
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your team's productivity with seamless Slack integration for tender analysis and collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: FaSlack,
                title: "Real-time Notifications",
                description: "Get instant alerts in your Slack channels when new tender opportunities are identified."
              },
              {
                icon: FaComments,
                title: "Team Collaboration",
                description: "Discuss tender opportunities directly in Slack with AI-powered analysis and recommendations."
              },
              {
                icon: FaChartLine,
                title: "Performance Metrics",
                description: "Track tender success rates and ROI metrics shared automatically to your team channels."
              },
              {
                icon: FaFileAlt,
                title: "Document Sharing",
                description: "Share tender documents and analysis reports seamlessly within your Slack workspace."
              },
              {
                icon: FaEye,
                title: "Smart Monitoring",
                description: "Monitor tender databases and opportunities with intelligent filtering and alerts."
              },
              {
                icon: FaCog,
                title: "Custom Workflows",
                description: "Create custom Slack workflows for tender evaluation and approval processes."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 md:p-8 h-full bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-xl group">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-full group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ROI Simulator Section */}
      <section id="roi-simulator-section" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your Slack Integration ROI
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Slack integration can transform your tender analysis workflow and boost your team's efficiency.
            </p>
          </motion.div>
          
          <AitendersSimulatorFinal />
        </div>
      </section>

      {/* Chat Interface Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Try Aitenders Copilot
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience AI-powered assistance for your Slack integration questions and tender analysis needs.
            </p>
          </motion.div>
          
          <ChatInterface />
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />
    </div>
  );
}