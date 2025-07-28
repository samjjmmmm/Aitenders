import Header from "@/components/header";
import ChatSection from "@/components/chat-section";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChartLine, Search, File, Lightbulb, Home, TrendingUp, Shield, Users } from "lucide-react";

export default function HomePage() {
  const pathwayOptions = [
    {
      title: "I need help with bid evaluation",
      description: "Automate bid analysis and qualification",
      icon: ChartLine,
      href: "/use-cases/bid-evaluation",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "I want to extract requirements",
      description: "Extract and manage requirements efficiently",
      icon: Search,
      href: "/use-cases/requirements-extraction",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "I need contract management support",
      description: "Streamline contract lifecycle management",
      icon: File,
      href: "/use-cases/contract-management",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "I'm looking for tender intelligence",
      description: "Get insights and market intelligence",
      icon: Lightbulb,
      href: "/use-cases/tender-intelligence",
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      title: "+50% Productivity",
      description: "Reduce time on each step of the tender process and detect information 95% faster",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Shield,
      title: "Better Quality",
      description: "Improve the quality of review and deliverables with full traceability",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Users,
      title: "Team Efficiency",
      description: "Staff are less stressed and meetings are more focused on key subjects",
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Aitenders,<br />
              <span className="text-blue-600">How can we help you?</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform complex tender and project contractual documents into intelligence with our AI-powered platform.
            </p>
          </div>

          {/* Pathway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
            {pathwayOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Link key={index} href={option.href}>
                  <Card className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md card-hover cursor-pointer border border-gray-200 hover:border-blue-300">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${option.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Go to Homepage Button */}
          <div className="text-center mb-16">
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </button>
          </div>
        </div>
      </main>

      {/* Chat Section */}
      <ChatSection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aitenders?</h2>
            <p className="text-lg text-gray-600">See the measurable impact on your tender management process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
