import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Globe, Shield, Users, Zap, BarChart3, Clock, CheckCircle, ArrowRight, Star, Building, Briefcase, Target, TrendingUp, Eye, Lock, Smartphone, AlertTriangle, FileText, Settings, Database, Code, Mail, Phone, MapPin, Search, Repeat } from 'lucide-react';

// Import components that we'll use
import WaveBackground from '../components/WaveBackground';
import HomeTenderComplexitySection from '../components/HomeTenderComplexitySection';
import ComparisonSection from '../components/product/ComparisonSection';
import VerticalIndustryCasesSection from '../components/product/VerticalIndustryCasesSection';
import SecurityTrustSection from '../components/product/SecurityTrustSection';
import BenefitsSection from '../components/BenefitsSection';

const ProductPage: React.FC = () => {
  const { t } = useTranslation();

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Toggle FAQ accordion item
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Define FAQ data
  const faqData = [
    {
      question: "How long does it take to onboard?",
      answer: "Most teams are up and running within 48 hours. Our implementation specialists will guide you through the setup process, and your team can start using the platform immediately after the initial configuration."
    },
    {
      question: "Can it integrate with internal LDAP or SSO?",
      answer: "Yes, Aitenders supports SAML 2.0 and OAuth 2.0 for Single Sign-On (SSO) integration, including LDAP directory services. We also offer custom integrations for enterprise clients."
    },
    {
      question: "Is all data encrypted?",
      answer: "Absolutely. We use industry-standard encryption (AES-256) for all data at rest and TLS 1.3 for data in transit. Your documents and sensitive information never leave your secure environment."
    },
    {
      question: "What is the pricing model (per user or per project)?",
      answer: "We offer flexible pricing models including per-user licensing and project-based options. Enterprise customers can choose the model that best fits their usage patterns. Contact our sales team for a customized quote."
    }
  ];

  // Define the feature cards data
  const featureCards = [
    {
      badge: { text: "REVIEW", bgColor: "#C3D9F8", textColor: "#112646" },
      icon: <Users className="w-6 h-6" />,
      iconBgColor: "#EBF5FF",
      title: "AI-Powered Document Analysis",
      description: "Automatically scan and flag critical requirements and potential issues in RFPs and tenders."
    },
    {
      badge: { text: "COLLABORATION", bgColor: "#E0D8FC", textColor: "#6A42C1" },
      icon: <Users className="w-6 h-6" />,
      iconBgColor: "#F5F0FF",
      title: "Unified Workspace for Teams",
      description: "Connect legal, procurement, and delivery teams with role-based views and approval workflows."
    },
    {
      badge: { text: "COMPLIANCE", bgColor: "#D7F9E8", textColor: "#1A6E42" },
      icon: <Shield className="w-6 h-6" />,
      iconBgColor: "#ECFDF5",
      title: "Compliance Tracking & Alerts",
      description: "Real-time monitoring of contractual obligations and automated compliance checks."
    },
    {
      badge: { text: "EFFICIENCY", bgColor: "#FEE2E2", textColor: "#9B1C1C" },
      icon: <Clock className="w-6 h-6" />,
      iconBgColor: "#FEF2F2",
      title: "Time-Saving Templates",
      description: "Reuse previous successful bids with smart templates and auto-generated sections."
    },
    {
      badge: { text: "ANALYTICS", bgColor: "#DBEAFE", textColor: "#1E40AF" },
      icon: <BarChart3 className="w-6 h-6" />,
      iconBgColor: "#EFF6FF",
      title: "Performance Dashboard",
      description: "Track win rates, response times, and bid performance with customizable analytics."
    },
    {
      badge: { text: "AUTOMATION", bgColor: "#FEF3C7", textColor: "#92400E" },
      icon: <FileText className="w-6 h-6" />,
      iconBgColor: "#FFFBEB",
      title: "Smart Content Generation",
      description: "AI-assisted content creation for responses that perfectly match tender requirements."
    }
  ];

  // Define product lifecycle data
  const lifecycleStages = [
    {
      title: "Analyze – Spot Risks Instantly",
      points: [
        "AI-powered document analysis flags critical requirements",
        "Automated risk scoring and prioritization",
        "Identify go/no-go criteria within minutes"
      ],
      icon: <Search className="w-8 h-8" color="#3880E8" />
    },
    {
      title: "Write – Collaborate Seamlessly",
      points: [
        "Multi-stakeholder contribution and reviews",
        "Real-time commenting and change tracking",
        "Template library of successful responses"
      ],
      icon: <PenTool className="w-8 h-8" color="#8B5CF6" />
    },
    {
      title: "Pilot – Execute Flawlessly",
      points: [
        "Milestone tracking and compliance monitoring",
        "Automated deliverable reminders",
        "Analytics dashboard for performance insights"
      ],
      icon: <PlayCircle className="w-8 h-8" color="#10B981" />
    }
  ];

  // Define persona roles
  const personaRoles = [
    {
      role: "Legal Teams",
      benefit: "Centralized access to obligations and contract deviations",
      icon: <Scale className="w-10 h-10" color="#3880E8" />
    },
    {
      role: "Procurement",
      benefit: "Qualify tenders in minutes with AI flags",
      icon: <Search className="w-10 h-10" color="#8B5CF6" />
    },
    {
      role: "Operations",
      benefit: "Track modifications, approvals and delivery timelines",
      icon: <Briefcase className="w-10 h-10" color="#10B981" />
    },
    {
      role: "Executives",
      benefit: "Drive more deal wins with smarter oversight",
      icon: <PieChart className="w-10 h-10" color="#EF4444" />
    }
  ];

  // Define problem cards data
  const problemCards = [
    {
      title: "Hours spent chasing outdated document versions",
      icon: <Clock className="w-8 h-8" color="#EF4444" />,
      description: "Teams waste 30% of their time simply finding the right documents and correcting version issues."
    },
    {
      title: "No visibility into compliance red flags",
      icon: <AlertTriangle className="w-8 h-8" color="#F59E0B" />,
      description: "Critical deal-breakers often go unnoticed until it's too late, resulting in disqualified bids."
    },
    {
      title: "Legal, Ops, and Procurement working in silos",
      icon: <Users className="w-8 h-8" color="#8B5CF6" />,
      description: "Disconnected teams create misaligned responses that fail to address tender requirements cohesively."
    }
  ];

  return (
    <div className="product-page">
      {/* 1. HERO SECTION */}
      <section 
        style={{ 
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)", 
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          minHeight: "85vh"
        }}
        className="py-20 md:py-32"
      >
        <WaveBackground />

        {/* Enhanced floating elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 100%)",
          borderRadius: "24px",
          backdropFilter: "blur(10px)",
          animation: "float 8s ease-in-out infinite"
        }}></div>

        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.05) 100%)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          animation: "float 6s ease-in-out infinite 2s"
        }}></div>

        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center" style={{ minHeight: "700px" }}>
            <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
              <h1 
                style={{ 
                  fontSize: "clamp(2.75rem, 5.5vw, 4rem)", 
                  fontWeight: "900", 
                  lineHeight: "1.1",
                  marginBottom: "2.5rem",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.025em"
                }}
              >
                All Your Tender Intelligence, In One Human-Centered Platform
              </h1>
              <p 
                style={{ 
                  fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", 
                  lineHeight: "1.65",
                  marginBottom: "3rem",
                  color: "#CBD5E1",
                  fontWeight: "500",
                  maxWidth: "90%"
                }}
              >
                Aitenders is your AI-powered command center to flag tender blockers, control modifications, and ensure compliance.
              </p>
              <div className="flex flex-wrap gap-6" style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}>
                <button 
                style={{ 
                  background: "linear-gradient(135deg, #3974FF 0%, #2563EB 100%)", 
                  color: "#FFFFFF",
                  padding: "20px 40px",
                  borderRadius: "16px",
                  fontWeight: "700",
                  fontSize: "18px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 16px 40px rgba(57,116,255,0.5), 0 4px 0 rgba(255,255,255,0.2) inset",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  letterSpacing: "0.3px",
                  position: "relative",
                  overflow: "hidden",
                  minWidth: "280px",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 24px 50px rgba(57,116,255,0.6), 0 4px 0 rgba(255,255,255,0.25) inset";
                  e.currentTarget.style.background = "linear-gradient(135deg, #4285FF 0%, #3074EB 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(57,116,255,0.5), 0 4px 0 rgba(255,255,255,0.2) inset";
                  e.currentTarget.style.background = "linear-gradient(135deg, #3974FF 0%, #2563EB 100%)";
                }}
              >
                🚀 Get My Custom Demo
              </button>
                <button 
                style={{ 
                  backgroundColor: "rgba(255,255,255,0.12)", 
                  color: "#FFFFFF",
                  padding: "20px 40px",
                  borderRadius: "16px",
                  fontWeight: "600",
                  fontSize: "18px",
                  border: "2px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  backdropFilter: "blur(15px)",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.3px",
                  minWidth: "280px",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                🎬 Watch 2-Min Demo
              </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                style={{
                  background: "#F9FAFB",
                  borderRadius: "16px",
                  padding: "0",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  position: "relative",
                  width: "900px",
                  height: "600px",
                  overflow: "hidden",
                  border: "1px solid rgba(226, 232, 240, 0.2)",
                  fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                  margin: "auto"
                }}
              >
                {/* Top Risk Legend Bar */}
                <div 
                  style={{
                    display: "flex",
                    height: "40px",
                    width: "100%",
                    borderRadius: "16px 16px 0 0",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ 
                    flex: 1, 
                    background: "#F44336", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "white", 
                    fontSize: "14px", 
                    fontWeight: "600" 
                  }}>
                    🔴 High Risk
                  </div>
                  <div style={{ 
                    flex: 1, 
                    background: "#FF9800", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "white", 
                    fontSize: "14px", 
                    fontWeight: "600" 
                  }}>
                    🟠 Medium Risk
                  </div>
                  <div style={{ 
                    flex: 1, 
                    background: "#FFEB3B", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "#333", 
                    fontSize: "14px", 
                    fontWeight: "600" 
                  }}>
                    🟡 Low Risk
                  </div>
                  <div style={{ 
                    flex: 1, 
                    background: "#4CAF50", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "white", 
                    fontSize: "14px", 
                    fontWeight: "600" 
                  }}>
                    🟢 Compliant (No Risk)
                  </div>
                </div>

                {/* Main Content - Tracked Documents List */}
                <div style={{ 
                  padding: "16px", 
                  height: "440px", 
                  overflowY: "auto",
                  background: "#F9FAFB"
                }}>
                  {/* Document Row 1 */}
                  <div 
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      height: "60px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F8FAFC";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div style={{ marginRight: "16px", fontSize: "20px" }}>📄</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "15px", fontWeight: "600", color: "#1F2937", marginBottom: "4px" }}>Contract Delivery Timeline</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ 
                        background: "#F44336", 
                        color: "white", 
                        padding: "4px 12px", 
                        borderRadius: "12px", 
                        fontSize: "12px", 
                        fontWeight: "600" 
                      }}>🔴 3 Issues</span>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#3B82F6", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👤</div>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#10B981", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👥</div>
                      </div>
                    </div>
                  </div>

                  {/* Document Row 2 */}
                  <div 
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      height: "60px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F8FAFC";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div style={{ marginRight: "16px", fontSize: "20px" }}>📄</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "15px", fontWeight: "600", color: "#1F2937", marginBottom: "4px" }}>Technical Specs File</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ 
                        background: "#FF9800", 
                        color: "white", 
                        padding: "4px 12px", 
                        borderRadius: "12px", 
                        fontSize: "12px", 
                        fontWeight: "600" 
                      }}>🟠 2 Gaps</span>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#8B5CF6", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👤</div>
                      </div>
                    </div>
                  </div>

                  {/* Document Row 3 */}
                  <div 
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      height: "60px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F8FAFC";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div style={{ marginRight: "16px", fontSize: "20px" }}>📄</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "15px", fontWeight: "600", color: "#1F2937", marginBottom: "4px" }}>Pricing Breakdown</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ 
                        background: "#FFEB3B", 
                        color: "#333", 
                        padding: "4px 12px", 
                        borderRadius: "12px", 
                        fontSize: "12px", 
                        fontWeight: "600" 
                      }}>🟡 1 Issue</span>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#F59E0B", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👤</div>
                      </div>
                    </div>
                  </div>

                  {/* Document Row 4 */}
                  <div 
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      height: "60px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F8FAFC";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div style={{ marginRight: "16px", fontSize: "20px" }}>📄</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "15px", fontWeight: "600", color: "#1F2937", marginBottom: "4px" }}>Compliance Matrix</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ 
                        background: "#4CAF50", 
                        color: "white", 
                        padding: "4px 12px", 
                        borderRadius: "12px", 
                        fontSize: "12px", 
                        fontWeight: "600" 
                      }}>🟢 OK</span>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#EF4444", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👤</div>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#06B6D4", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👤</div>
                        <div style={{ 
                          width: "24px", 
                          height: "24px", 
                          borderRadius: "50%", 
                          background: "#84CC16", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: "10px", 
                          color: "white", 
                          fontWeight: "600" 
                        }}>👥</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Insight Box at Bottom */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "5%",
                    right: "5%",
                    width: "90%",
                    background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    borderRadius: "10px",
                    padding: "16px",
                    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px"
                  }}
                >
                  <div style={{ fontSize: "16px", marginTop: "1px" }}>✨</div>
                  <div>
                    <div style={{ fontSize: "15px", color: "white", fontWeight: "600", marginBottom: "4px" }}>AI Insight</div>
                    <div style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.4", fontFamily: "'Open Sans', sans-serif", fontWeight: "300" }}>
                      3 technical specs are missing supplier references in the Contract Delivery Timeline. This may delay submission.
                    </div>
                  </div>
                </div>

                {/* Subtle animated indicators */}
                <div style={{ position: "absolute", top: "80px", right: "20px", width: "4px", height: "4px", borderRadius: "50%", background: "#F44336", animation: "pulse 2s infinite" }}></div>
                <div style={{ position: "absolute", top: "150px", right: "15px", width: "3px", height: "3px", borderRadius: "50%", background: "#FF9800", animation: "pulse 2.5s infinite" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <BenefitsSection />

      {/* 3. BY ROLE (Persona Segmentation) */}
      <section 
        style={{ 
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
          padding: "8rem 0",
          position: "relative"
        }}
      >
        {/* Subtle decorative element */}
        <div style={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "100px",
          height: "100px",
          background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 100%)",
          borderRadius: "20px",
          animation: "float 9s ease-in-out infinite"
        }}></div>

        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 
              style={{ 
                fontSize: "clamp(2rem, 4vw, 2.75rem)", 
                fontWeight: "900", 
                color: "#0F172A",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
                letterSpacing: "-0.025em"
              }}
            >
              Built for Every Stakeholder
            </h2>
            <p 
              style={{
                fontSize: "1.25rem",
                color: "#475569",
                maxWidth: "700px",
                margin: "0 auto",
                fontWeight: "500",
                lineHeight: "1.6"
              }}
            >
              Aitenders provides specialized tools and insights for each role in your bid management process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personaRoles.map((role, index) => (
              <div 
                key={index}
                style={{
                  background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                  borderRadius: "24px",
                  padding: "2.5rem",
                  boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  border: "1px solid rgba(226, 232, 240, 0.6)",
                  height: "100%",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(15, 23, 42, 0.15), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
                }}
              >
                <div 
                  style={{ 
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    margin: "0 auto 2rem auto",
                    boxShadow: "0 8px 24px rgba(59,130,246,0.15)"
                  }}
                >
                  {role.icon}
                </div>
                <h3 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "0.75rem"
                  }}
                >
                  {role.role}
                </h3>
                <p 
                  style={{ 
                    fontSize: "1rem", 
                    color: "#6B7280",
                    lineHeight: "1.6"
                  }}
                >
                  {role.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TENDER INTELLIGENCE SECTION */}
      <section 
        style={{ 
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", 
          padding: "8rem 0",
          position: "relative"
        }}
      >
        {/* Subtle decorative element */}
        <div style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 100%)",
          borderRadius: "24px",
          animation: "float 8s ease-in-out infinite"
        }}></div>

        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 
              style={{ 
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
                fontWeight: "900", 
                color: "#0F172A",
                marginBottom: "2rem",
                lineHeight: "1.1",
                letterSpacing: "-0.025em"
              }}
            >
              More than automation. True tender intelligence.
            </h2>
            <p 
              style={{
                fontSize: "1.3rem",
                color: "#475569",
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: "500",
                lineHeight: "1.6"
              }}
            >
              Aitenders empowers your teams to analyze, write, and manage complex tenders — turning every challenge into a strategic advantage. Built to amplify your people, not replace them.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Feature 1: AI-powered document analysis */}
            <div 
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                borderRadius: "24px",
                padding: "3rem",
                boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "1px solid rgba(226, 232, 240, 0.6)",
                height: "100%"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(15, 23, 42, 0.15), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
            >
              <div 
                style={{ 
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.25)"
                }}
              >
                <Search size={28} color="white" />
              </div>
              <h3 
                style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Understand every requirement, instantly
              </h3>
              <p 
                style={{ 
                  fontSize: "1.1rem", 
                  color: "#6B7280",
                  lineHeight: "1.6",
                  marginBottom: "2rem"
                }}
              >
                Stop manual clause hunting and missed obligations. Our AI processes thousands of pages in seconds, identifying compliance risks, technical specs, and hidden obligations — so your teams focus on decisions, not digging through PDFs.
              </p>
              <div className="flex gap-4">
                <div style={{ 
                  backgroundColor: "#EBF5FF", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #DBEAFE"
                }}>
                  <div style={{ fontWeight: "700", color: "#1E40AF", fontSize: "1.1rem" }}>85%</div>
                  <div style={{ fontSize: "0.9rem", color: "#3B82F6" }}>faster processing</div>
                </div>
                <div style={{ 
                  backgroundColor: "#EBF5FF", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #DBEAFE"
                }}>
                  <div style={{ fontWeight: "700", color: "#1E40AF", fontSize: "1.1rem" }}>98%</div>
                  <div style={{ fontSize: "0.9rem", color: "#3B82F6" }}>tracking accuracy</div>
                </div>
              </div>
            </div>

            {/* Feature 2: Automated compliance matrix */}
            <div 
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                borderRadius: "24px",
                padding: "3rem",
                boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "1px solid rgba(226, 232, 240, 0.6)",
                height: "100%"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(15, 23, 42, 0.15), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
            >
              <div 
                style={{ 
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  boxShadow: "0 8px 24px rgba(16,185,129,0.25)"
                }}
              >
                <CheckCircle size={28} color="white" />
              </div>
              <h3 
                style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Map every obligation without errors
              </h3>
              <p 
                style={{ 
                  fontSize: "1.1rem", 
                  color: "#6B7280",
                  lineHeight: "1.6",
                  marginBottom: "2rem"
                }}
              >
                Automatically build your conformity and compliance matrices. Track obligations, approvals, and delivery requirements in real time — keeping projects aligned and audit-ready.
              </p>
              <div className="flex gap-4">
                <div style={{ 
                  backgroundColor: "#ECFDF5", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #D1FAE5"
                }}>
                  <div style={{ fontWeight: "700", color: "#065F46", fontSize: "1rem" }}>Live compliance</div>
                  <div style={{ fontSize: "0.9rem", color: "#10B981" }}>dashboards</div>
                </div>
                <div style={{ 
                  backgroundColor: "#ECFDF5", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #D1FAE5"
                }}>
                  <div style={{ fontWeight: "700", color: "#065F46", fontSize: "1rem" }}>Zero missed</div>
                  <div style={{ fontSize: "0.9rem", color: "#10B981" }}>clauses</div>
                </div>
              </div>
            </div>

            {/* Feature 3: Smart content reuse */}
            <div 
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                borderRadius: "24px",
                padding: "3rem",
                boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "1px solid rgba(226, 232, 240, 0.6)",
                height: "100%"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(15, 23, 42, 0.15), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
            >
              <div 
                style={{ 
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  boxShadow: "0 8px 24px rgba(139,92,246,0.25)"
                }}
              >
                <Repeat size={28} color="white" />
              </div>
              <h3 
                style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Write smarter, not harder
              </h3>
              <p 
                style={{ 
                  fontSize: "1.1rem", 
                  color: "#6B7280",
                  lineHeight: "1.6",
                  marginBottom: "2rem"
                }}
              >
                Leverage our clause library to reuse approved responses from previous bids. Accelerate content creation and ensure consistent, compliant messaging across all submissions.
              </p>
              <div className="flex gap-4">
                <div style={{ 
                  backgroundColor: "#F5F3FF", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #E9D5FF"
                }}>
                  <div style={{ fontWeight: "700", color: "#6B21A8", fontSize: "1.1rem" }}>40%</div>
                  <div style={{ fontSize: "0.9rem", color: "#8B5CF6" }}>writing time saved</div>
                </div>
                <div style={{ 
                  backgroundColor: "#F5F3FF", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #E9D5FF"
                }}>
                  <div style={{ fontWeight: "700", color: "#6B21A8", fontSize: "1rem" }}>Stronger</div>
                  <div style={{ fontSize: "0.9rem", color: "#8B5CF6" }}>scoring</div>
                </div>
              </div>
            </div>

            {/* Feature 4: One unified workspace */}
            <div 
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                borderRadius: "24px",
                padding: "3rem",
                boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "1px solid rgba(226, 232, 240, 0.6)",
                height: "100%"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(15, 23, 42, 0.15), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(255, 255, 255, 0.8) inset";
              }}
            >
              <div 
                style={{ 
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  boxShadow: "0 8px 24px rgba(245,158,11,0.25)"
                }}
              >
                <Users size={28} color="white" />
              </div>
              <h3 
                style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1rem"
                }}
              >
                Align legal, ops, and bid teams in one place
              </h3>
              <p 
                style={{ 
                  fontSize: "1.1rem", 
                  color: "#6B7280",
                  lineHeight: "1.6",
                  marginBottom: "2rem"
                }}
              >
                Centralize all your teams and documents. Comment, edit, and track versions collaboratively — no more tool switching, silos, or lost feedback loops.
              </p>
              <div className="flex gap-4">
                <div style={{ 
                  backgroundColor: "#FFFBEB", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #FDE68A"
                }}>
                  <div style={{ fontWeight: "700", color: "#92400E", fontSize: "1.1rem" }}>3.2 weeks</div>
                  <div style={{ fontSize: "0.9rem", color: "#F59E0B" }}>saved per project</div>
                </div>
                <div style={{ 
                  backgroundColor: "#FFFBEB", 
                  padding: "0.75rem 1.5rem", 
                  borderRadius: "12px",
                  border: "1px solid #FDE68A"
                }}>
                  <div style={{ fontWeight: "700", color: "#92400E", fontSize: "1rem" }}>Faster</div>
                  <div style={{ fontSize: "0.9rem", color: "#F59E0B" }}>approvals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Feature */}
          <div 
            style={{
              background: "linear-gradient(135deg, #112646 0%, #1E293B 100%)",
              borderRadius: "24px",
              padding: "3rem",
              color: "white",
              textAlign: "center",
              marginBottom: "4rem",
              boxShadow: "0 20px 60px rgba(17, 38, 70, 0.25)"
            }}
          >
            <div 
              style={{ 
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                boxShadow: "0 8px 24px rgba(255,255,255,0.1)"
              }}
            >
              <Shield size={36} color="white" />
            </div>
            <h3 
              style={{ 
                fontSize: "1.75rem", 
                fontWeight: "700", 
                marginBottom: "1rem"
              }}
            >
              Enterprise-grade security
            </h3>
            <p 
              style={{ 
                fontSize: "1.2rem", 
                opacity: "0.9",
                lineHeight: "1.6",
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem"
              }}
            >
              Aitenders is built for high-stakes industries. With end-to-end encryption, role-based access, and full audit trails, your data and workflows stay secure and compliant from day one.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div style={{ 
                backgroundColor: "rgba(255,255,255,0.1)", 
                padding: "1rem 1.5rem", 
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <div style={{ fontWeight: "700", fontSize: "1rem" }}>SOC 2 Type II</div>
              </div>
              <div style={{ 
                backgroundColor: "rgba(255,255,255,0.1)", 
                padding: "1rem 1.5rem", 
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <div style={{ fontWeight: "700", fontSize: "1rem" }}>GDPR compliant</div>
              </div>
              <div style={{ 
                backgroundColor: "rgba(255,255,255,0.1)", 
                padding: "1rem 1.5rem", 
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <div style={{ fontWeight: "700", fontSize: "1rem" }}>ISO 27001-ready</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ textAlign: "center" }}>
            <h3 
              style={{ 
                fontSize: "2rem", 
                fontWeight: "700", 
                color: "#0F172A",
                marginBottom: "2rem"
              }}
            >
              Ready to transform your tender process?
            </h3>
            <button 
              style={{ 
                background: "linear-gradient(135deg, #3880E8 0%, #2563EB 100%)", 
                color: "#FFFFFF",
                padding: "1.25rem 3rem",
                borderRadius: "16px",
                fontWeight: "700",
                fontSize: "1.125rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 16px 40px rgba(56,128,232,0.4), 0 4px 0 rgba(255,255,255,0.2) inset",
                transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                letterSpacing: "0.3px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 24px 50px rgba(56,128,232,0.5), 0 4px 0 rgba(255,255,255,0.25) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(56,128,232,0.4), 0 4px 0 rgba(255,255,255,0.2) inset";
              }}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* 3B. COMPARISON SECTION */}
      <ComparisonSection />

      {/* 4. BUILT FOR TENDER COMPLEXITY SECTION */}
      <HomeTenderComplexitySection />

      {/* 4B. ADDITIONAL COMPLEXITY SECTION */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)" }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/5 to-indigo-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Built for Tender Complexity</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Intelligence that adapts to your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    most complex tenders
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full"></div>
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                From multi-billion infrastructure projects to specialized compliance requirements, our AI scales with your ambition.
              </p>

              {/* Feature highlights */}
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">AI-Powered Clause Recognition</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Extracts legal, technical, and financial clauses automatically from multi-format RFPs</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Content-Aware Risk Detection</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Flags non-standard or contradictory clauses with AI-driven risk scoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg" style={{ perspective: "1000px" }}>
                {/* Main AI Dashboard Container */}
                <div 
                  className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500"
                  style={{ 
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.1)"
                  }}
                >
                  {/* Dashboard Header */}
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                    <div className="ml-auto text-white text-sm font-semibold">AI Tender Analysis</div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-6">
                    {/* Document Analysis Status */}
                    <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-blue-900">Document Intelligence</h4>
                        <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Active</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-blue-700">
                          <span>Clause Extraction</span>
                          <span>98%</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Risk Analysis */}
                    <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-amber-900">Risk Detection</h4>
                        <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">2 Flags</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-amber-700">Non-standard payment terms detected</div>
                        <div className="text-xs text-amber-700">Compliance deviation in Section 4.2</div>
                      </div>
                    </div>

                    {/* Complexity Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-slate-800">847</div>
                        <div className="text-xs text-slate-600">Clauses Parsed</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-slate-800">12</div>
                        <div className="text-xs text-slate-600">Risk Areas</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated indicators */}
                  <div className="absolute top-20 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute bottom-20 left-6 w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>

                  {/* Floating data points */}
                  <div className="absolute top-24 left-8 w-4 h-4 bg-blue-100 rounded-full animate-float opacity-60"></div>
                  <div className="absolute bottom-32 right-8 w-3 h-3 bg-indigo-100 rounded-full animate-float opacity-60" style={{ animationDelay: "1.5s" }}></div>
                </div>

                {/* Shadow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-xl opacity-20 -z-10"
                  style={{ 
                    background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                    transform: "translateY(20px) scale(0.95)"
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Enhanced CSS animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(2deg);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .hover\\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </section>

      {/* 5. PRODUCT LIFECYCLE VIEW */}
      <section 
        style={{ 
          backgroundColor: "#112646", 
          padding: "8rem 0",
          color: "#FBFCFF"
        }}
      >
        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div 
              style={{ 
                backgroundColor: "rgba(56, 128, 232, 0.2)",
                color: "#3880E8",
                display: "inline-block",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "1rem"
              }}
            >
              FULL LIFECYCLE SUPPORT
            </div>
            <h2 
              style={{ 
                fontSize: "2.25rem", 
                fontWeight: "700", 
                marginBottom: "1rem"
              }}
            >
              Your AI Assistant Through Every Stage of the Tender
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                opacity: "0.8",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              From initial qualification to final execution, Aitenders streamlines your entire process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifecycleStages.map((stage, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  height: "100%",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div 
                  style={{ 
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1.5rem"
                  }}
                >
                  <div 
                    style={{ 
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem"
                    }}
                  >
                    {stage.icon}
                  </div>
                  <h3 
                    style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "700"
                    }}
                  >
                    {stage.title}
                  </h3>
                </div>
                <ul 
                  style={{ 
                    listStyleType: "none",
                    padding: 0,
                    margin: 0
                  }}
                >
                  {stage.points.map((point, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        opacity: "0.8"
                      }}
                    >
                      <div style={{ marginRight: "0.75rem", marginTop: "0.2rem" }}>
                        <CheckCircle size={16} color="#3880E8" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div 
                  style={{ 
                    position: "absolute",
                    bottom: "1.5rem",
                    right: "1.5rem",
                    width: "120px",
                    height: "80px",
                    backgroundImage: "url('/images/lifecycle-chart.svg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: "0.1"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURE GRID (INTERACTIVE CARDS) */}
      <section 
        style={{ 
          backgroundColor: "#F5F9FE", 
          padding: "8rem 0"
        }}
      >
        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 
              style={{ 
                fontSize: "2.25rem", 
                fontWeight: "700", 
                color: "#0B1A2E",
                marginBottom: "1rem"
              }}
            >
              What You Can Do with Aitenders
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              Powerful features designed to streamline your tender management process from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "#FBFCFF",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.1)";

                  const underline = e.currentTarget.querySelector('.card-underline') as HTMLElement;
                  if (underline) {
                    underline.style.width = "100%";
                    underline.style.opacity = "1";
                  }

                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.06)";

                  const underline = e.currentTarget.querySelector('.card-underline') as HTMLElement;
                  if (underline) {
                    underline.style.width = "40px";
                    underline.style.opacity = "0.7";
                  }

                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.transform = "scale(1)";
                  }
                }}
              >
                <div 
                  style={{ 
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    marginBottom: "1.5rem",
                    backgroundColor: card.badge.bgColor,
                    color: card.badge.textColor
                  }}
                >
                  {card.badge.text}
                </div>
                <div 
                  className="icon-container"
                  style={{ 
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    backgroundColor: card.iconBgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    transition: "transform 0.3s ease"
                  }}
                >
                  {card.icon}
                </div>
                <h3 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "0.75rem"
                  }}
                >
                  {card.title}
                </h3>
                <p 
                  style={{ 
                    fontSize: "1rem", 
                    color: "#6B7280",
                    lineHeight: "1.6",
                    marginBottom: "2rem"
                  }}
                >
                  {card.description}
                </p>
                <div 
                  className="card-underline"
                  style={{ 
                    height: "3px", 
                    width: "40px", 
                    backgroundColor: card.badge.textColor, 
                    borderRadius: "2px",
                    transition: "width 0.3s ease, opacity 0.3s ease",
                    opacity: "0.7",
                    position: "absolute",
                    bottom: "0",
                    left: "0"
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE SECTION */}
      <section 
        style={{ 
          backgroundColor: "#FBFCFF", 
          padding: "8rem 0"
        }}
      >
        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
                style={{ 
                  fontSize: "2.25rem", 
                  fontWeight: "700", 
                  color: "#0B1A2E",
                  marginBottom: "1.5rem"
                }}
              >
                Security & Compliance You Can Trust
              </h2>
              <p 
                style={{
                  fontSize: "1.125rem",
                  color: "#6B7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6"
                }}
              >
                We take security seriously. Your data is protected with enterprise-grade security measures and compliance standards.
              </p>
              <ul 
                style={{ 
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: "2rem"
                }}
              >
                {[
                  "SOC 2 Compliant",
                  "SSO & Secure Workspace Access",
                  "GDPR-ready",
                  "Data Encryption & Isolation"
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                      fontSize: "1rem",
                      color: "#0B1A2E"
                    }}
                  >
                    <div 
                      style={{ 
                        marginRight: "0.75rem",
                        backgroundColor: "#EBF5FF",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <CheckCircle size={14} color="#3880E8" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div 
                style={{
                  backgroundColor: "#F5F9FE",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.06)",
                  textAlign: "center"
                }}
              >
                <div 
                  style={{ 
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "#EBF5FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem"
                  }}
                >
                  <Shield size={32} color="#3880E8" />
                </div>
                <h3 
                  style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700", 
                    color: "#0B1A2E",
                    marginBottom: "0.75rem"
                  }}
                >
                  Get Our Security Overview
                </h3>
                <p 
                  style={{ 
                    fontSize: "1rem", 
                    color: "#6B7280",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem"
                  }}
                >
                  Download our comprehensive security documentation to learn more about how we protect your data.
                </p>
                <button 
                  style={{ 
                    backgroundColor: "#3880E8", 
                    color: "#FBFCFF",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Download size={18} /> 
                  <span>Download Security Overview PDF</span>
                </button>
                <div 
                  style={{ 
                    marginTop: "2rem",
                    padding: "1.5rem",
                    borderTop: "1px solid #E5E7EB",
                    position: "relative"
                  }}
                >
                  <div 
                    style={{ 
                      position: "absolute",
                      top: "-18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#F5F9FE",
                      padding: "0 0.75rem",
                      color: "#6B7280",
                      fontSize: "0.875rem"
                    }}
                  >
                    TRUSTED BY INDUSTRY LEADERS
                  </div>
                  <div 
                    style={{ 
                      display: "flex",
                      justifyContent: "center",
                      gap: "1.5rem",
                      marginTop: "0.5rem"
                    }}
                  >
                    {/* These would be actual company logos */}
                    <div style={{ width: "80px", height: "30px", backgroundColor: "#E5E7EB", borderRadius: "4px" }} />
                    <div style={{ width: "80px", height: "30px", backgroundColor: "#E5E7EB", borderRadius: "4px" }} />
                    <div style={{ width: "80px", height: "30px", backgroundColor: "#E5E7EB", borderRadius: "4px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section 
        style={{ 
          backgroundColor: "#F5F9FE", 
          padding: "8rem 0"
        }}
      >
        <div className="grid-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 
              style={{ 
                fontSize: "2.25rem", 
                fontWeight: "700", 
                color: "#0B1A2E",
                marginBottom: "1rem"
              }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              style={{
                fontSize: "1.125rem",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              Get answers to common questions about Aitenders implementation and features.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "#FBFCFF",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                  transition: "box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div 
                  style={{
                    padding: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: openFaq === index ? "#F5F9FE" : "#FBFCFF",
                    borderBottom: openFaq === index ? "1px solid #E5E7EB" : "none"
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <h3 
                    style={{ 
                      fontSize: "1.125rem", 
                      fontWeight: "600", 
                      color: "#0B1A2E" 
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                <div 
                  style={{
                    padding: openFaq === index ? "1.25rem" : "0 1.25rem",
                    maxHeight: openFaq === index ? "500px" : "0",
                    opacity: openFaq === index ? "1" : "0",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <p 
                    style={{ 
                      fontSize: "1rem", 
                      color: "#6B7280",
                      lineHeight: "1.6"
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section 
        style={{ 
          backgroundColor: "#112646", 
          padding: "8rem 0",
          color: "#FBFCFF",
          textAlign: "center"
        }}
      >
        <div className="grid-container">
          <h2 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700", 
              marginBottom: "1.5rem",
              maxWidth: "800px",
              margin: "0 auto 1.5rem"
            }}
          >
            Ready to Win Your Next Tender with AI?
          </h2>
          <p 
            style={{
              fontSize: "1.25rem",
              opacity: "0.8",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              lineHeight: "1.6"
            }}
          >
            Let us show you how your team can save hours and deliver 100% compliance.
          </p>
          <button 
            style={{ 
              backgroundColor: "#3880E8", 
              color: "#FBFCFF",
              padding: "1rem 2rem",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "1.125rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            🚀 Book Your Demo Now
          </button>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }

        @keyframes scan {
          0% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(20px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 0.15; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .grid-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        @media (max-width: 768px) {
          .grid-container {
            padding: 0 1rem;
          }

          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .grid-cols-1.md\\:grid-cols-3 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .grid-cols-1.md\\:grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .grid-cols-1.md\\:grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductPage;