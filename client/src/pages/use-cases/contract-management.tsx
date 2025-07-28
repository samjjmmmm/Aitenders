import Header from "@/components/header";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, File, Shield, Users, GitBranch } from "lucide-react";
import { Link } from "wouter";

export default function ContractManagement() {
  const features = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and track contractual risks with automated alerts and compliance monitoring.",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Maintain complete version history with full traceability across all contract changes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Enable seamless collaboration between legal, technical, and project teams.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="p-0 h-auto font-normal text-gray-600 hover:text-purple-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <File className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contract Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Streamline your contract lifecycle management with AI-powered tools for risk assessment, version control, and compliance tracking.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started with Contract Management
          </Button>
        </div>

        {/* Case Study */}
        <Card className="mb-16 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10B€ Design & Build Project
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The L15 Paris metro project is currently one of the largest infrastructure tenders in Europe. Our client, a consortium of 15 partners, uses Aitenders for requirement management and version control.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">15 consortium partners coordinated</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">100% version control traceability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">60% reduction in compliance issues</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">€10B</div>
              <div className="text-gray-600">Project Value</div>
              <div className="text-2xl font-bold text-blue-600 mt-4 mb-2">15</div>
              <div className="text-gray-600">Consortium Partners</div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Management Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Traceability</h3>
              <p className="text-gray-600 mb-4">
                Track every change, approval, and decision throughout the contract lifecycle with complete audit trails.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  Document version history
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  Change approval workflows
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  Compliance tracking
                </li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Mitigation</h3>
              <p className="text-gray-600 mb-4">
                Proactively identify and manage contractual risks before they become costly issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  Automated risk detection
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  Compliance alerts
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  Deadline monitoring
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Master Your Contract Lifecycle
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure compliance, reduce risks, and improve collaboration across your entire organization.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Start Managing Contracts
          </Button>
        </Card>
      </div>

      <ContactSection />
    </div>
  );
}
