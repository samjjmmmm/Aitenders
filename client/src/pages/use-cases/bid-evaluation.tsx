import Header from "@/components/header";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChartLine, Target, Clock, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function BidEvaluation() {
  const features = [
    {
      icon: Target,
      title: "Automated Bid Qualification",
      description: "From 7,000 opportunities to 700 well-qualified offers with AI-powered filtering based on 40+ internal criteria.",
    },
    {
      icon: Clock,
      title: "Rapid Analysis",
      description: "Reduce evaluation time by 50% with automated document processing and risk assessment.",
    },
    {
      icon: TrendingUp,
      title: "Success Prediction",
      description: "Use historical data and market intelligence to predict bid success probability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="p-0 h-auto font-normal text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ChartLine className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bid Evaluation & Qualification
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Automate your bid no-bid decision process with AI-powered analysis. Transform thousands of opportunities into qualified, winnable bids.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started with Bid Evaluation
          </Button>
        </div>

        {/* Case Study */}
        <Card className="mb-16 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Real Success Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our client needed to improve their selectivity process and find the best opportunities to bid for quickly, based on 40+ internal criteria.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reduced 7,000 opportunities to 700 qualified offers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">90% reduction in manual evaluation time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Improved win rate by 35%</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7,000 → 700</div>
              <div className="text-gray-600">Opportunities Qualified</div>
              <div className="text-2xl font-bold text-green-600 mt-4 mb-2">90%</div>
              <div className="text-gray-600">Time Reduction</div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
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

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Bid Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us show you how to identify the most profitable opportunities faster.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Demo
          </Button>
        </Card>
      </div>

      <ContactSection />
    </div>
  );
}
