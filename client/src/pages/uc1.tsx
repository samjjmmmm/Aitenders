import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MdSchedule, MdCheckCircle, MdWarning, MdPeople, MdTrendingUp, MdSecurity, 
  MdFlashOn, MdArrowForward, MdGpsFixed, MdVerifiedUser, MdAnalytics, MdEmojiEvents, 
  MdMessage, MdShield, MdGroups 
} from "react-icons/md";
import { FaUsers, FaShieldAlt, FaChartBar } from "react-icons/fa";
import ContactSection from "@/components/contact-section";

export default function UC1Page() {
  const painPoints = [
    {
      icon: MdSchedule,
      title: "Time Pressure",  
      description: "Quick turnaround times leave little room for thorough proposal analysis"
    },
    {
      icon: MdWarning,
      title: "Risk Oversight",
      description: "Missing critical requirements or compliance issues in fast-paced environments"
    },
    {
      icon: FaUsers,
      title: "Resource Constraints",
      description: "Limited team capacity to handle multiple simultaneous small projects"
    }
  ];

  const solutions = [
    {
      icon: MdFlashOn,
      title: "Instant Analysis",
      description: "AI-powered document analysis delivers insights in minutes, not hours"
    },
    {
      icon: MdCheckCircle,
      title: "Automated Validation",
      description: "Intelligent compliance checking ensures no critical requirements are missed"
    },
    {
      icon: MdTrendingUp,
      title: "Scalable Process",
      description: "Handle multiple projects simultaneously without compromising quality"
    }
  ];

  const userJourneySteps = [
    {
      step: "1",
      title: "Upload Documents",
      description: "Simply upload tender documents and requirements"
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Our AI extracts key requirements and risks instantly"
    },
    {
      step: "3",
      title: "Get Insights",
      description: "Receive structured analysis and compliance recommendations"
    },
    {
      step: "4",
      title: "Submit Winning Bids",
      description: "Submit confident, compliant proposals in record time"
    }
  ];

  const kpis = [
    {
      metric: "75%",
      description: "Faster proposal preparation"
    },
    {
      metric: "95%",
      description: "Compliance accuracy rate"
    },
    {
      metric: "3x",
      description: "More bids processed simultaneously"
    },
    {
      metric: "60%",
      description: "Reduction in missed requirements"
    }
  ];

  const differentiators = [
    {
      title: "Speed Without Compromise",
      description: "Purpose-built for fast turnaround projects while maintaining quality standards"
    },
    {
      title: "Learning AI Engine",
      description: "Gets smarter with each project, understanding your specific industry patterns"
    },
    {
      title: "No Setup Required",
      description: "Start analyzing documents immediately - no complex configurations or training"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            Use Case: Small & Frequent Projects
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fast-Track Your <span className="text-blue-600">Small Project Bids</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn rapid-fire tender opportunities into winning proposals with AI-powered analysis 
            that delivers insights in minutes, not hours.
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 mb-8">
            <MdSchedule className="w-4 h-4 mr-2" />
            Perfect for projects with 24-48 hour turnaround times
          </div>
        </div>
      </section>

      {/* Pain Points Section - Modern Enterprise Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          {/* Hero Headlines */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Master complex bids before they master you
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Instantly resolve compliance chaos with AItenders
            </p>
          </div>

          {/* Two-Column Problem vs Solution Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            
            {/* Problems Column */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Problems Without AItenders</h3>
                <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 border border-red-100 bg-red-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdSchedule className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Time Pressure Crisis</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Quick turnaround times leave zero room for thorough analysis.<br/>
                        Every minute counts but manual processes slow you down.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-red-100 bg-red-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdWarning className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Compliance Nightmare</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Missing critical requirements risks million-dollar exclusions.<br/>
                        Manual oversight creates dangerous gaps in fast-paced environments.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-red-100 bg-red-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaUsers className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Resource Overload</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Limited team capacity struggles with multiple projects.<br/>
                        Quality suffers when spreading resources too thin.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Solutions Column */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">How AItenders Fixes This</h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 border border-blue-100 bg-blue-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdFlashOn className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Instant Analysis</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• AI-powered document analysis in minutes</li>
                        <li>• Complete insights delivered in 15-30 minutes</li>
                        <li>• Zero setup time required</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-green-100 bg-green-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdCheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-900 mb-2">Automated Validation</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 95% accuracy in requirement identification</li>
                        <li>• Intelligent compliance checking</li>
                        <li>• Zero critical requirements missed</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-purple-100 bg-purple-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdTrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900 mb-2">Scalable Process</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Handle 5-6 projects simultaneously</li>
                        <li>• Consistent quality regardless of pressure</li>
                        <li>• Team capacity multiplied without hiring</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-orange-100 bg-orange-50/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdSecurity className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-900 mb-2">Risk Protection</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Complete audit trails and documentation</li>
                        <li>• Proactive risk identification</li>
                        <li>• Enterprise-grade security compliance</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Fast-Track Bidding
            </Button>
            <p className="text-sm text-gray-500 mt-4">See how teams save 40+ hours per project</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Aitenders Solution</h2>
            <p className="text-lg text-gray-600">AI-powered analysis that matches your pace</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6 border-green-100 bg-green-50/50">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before vs After</h2>
            <p className="text-lg text-gray-600">See the transformation in your bidding process</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-red-100 bg-red-50/30">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Before Aitenders</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Manual document review takes 4-6 hours per project</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">High risk of missing critical requirements under pressure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Can only handle 1-2 projects simultaneously</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Inconsistent analysis quality due to time constraints</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-green-100 bg-green-50/30">
              <h3 className="text-2xl font-bold text-green-800 mb-6">After Aitenders</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Complete analysis delivered in 15-30 minutes</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">95% accuracy in requirement identification</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Handle 5-6 projects simultaneously with confidence</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Consistent, thorough analysis regardless of time pressure</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-lg text-gray-600">Professionals who need speed without sacrificing quality</p>
          </div>
          <Card className="p-8 bg-blue-50/50 border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Profile</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MdGpsFixed className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Bid managers handling 10+ small projects monthly</span>
                  </li>
                  <li className="flex items-center">
                    <MdGpsFixed className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Small to medium enterprises in construction/services</span>
                  </li>
                  <li className="flex items-center">
                    <MdGpsFixed className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Teams with limited proposal resources</span>
                  </li>
                  <li className="flex items-center">
                    <MdGpsFixed className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Companies competing on speed-to-market</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdGroups className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-gray-600 font-medium">Designed for agile bid teams who value efficiency</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey to Success</h2>
            <p className="text-lg text-gray-600">From document upload to winning bid in record time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {userJourneySteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Impact</h2>
            <p className="text-lg text-gray-600">Real results from teams using Aitenders for small projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{kpi.metric}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aitenders</h2>
            <p className="text-lg text-gray-600">Built specifically for fast-paced bidding environments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <MdEmojiEvents className="w-6 h-6 text-blue-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
              <p className="text-lg text-gray-600">Your data and projects are protected by enterprise-grade security</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <MdVerifiedUser className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">ISO 27001 Certified</h4>
                <p className="text-gray-600 text-sm">International security management standards</p>
              </div>
              <div>
                <MdShield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h4>
                <p className="text-gray-600 text-sm">Full European data protection compliance</p>
              </div>
              <div>
                <MdAnalytics className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">99.9% Uptime</h4>
                <p className="text-gray-600 text-sm">Reliable access when you need it most</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Bidding Process?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of teams who have transformed their small project workflow with Aitenders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <MdMessage className="w-5 h-5 mr-2" />
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-80">No setup required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}