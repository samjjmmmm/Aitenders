import Header from "@/components/header";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, BarChart3, Target, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function TenderIntelligence() {
  const features = [
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Get comprehensive market insights and competitor analysis for better strategic decisions.",
    },
    {
      icon: Target,
      title: "Opportunity Scoring",
      description: "Systematically analyze and score opportunities based on multiple decision criteria.",
    },
    {
      icon: TrendingUp,
      title: "Success Prediction",
      description: "Use predictive analytics to identify the most promising tender opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="p-0 h-auto font-normal text-gray-600 hover:text-orange-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-10 h-10 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tender Intelligence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get insights and market intelligence to make informed tender decisions. Systematize your analysis and maximize your success rate.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Unlock Tender Intelligence
          </Button>
        </div>

        {/* Case Study */}
        <Card className="mb-16 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                400+ Offers Per Year
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our client needed to systematize the analysis of main decision criteria and speed up the launch of projects for over 400 tenders per year.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">400+ tender opportunities analyzed annually</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">80% faster decision-making process</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">45% improvement in bid success rate</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">400+</div>
              <div className="text-gray-600">Annual Opportunities</div>
              <div className="text-2xl font-bold text-blue-600 mt-4 mb-2">45%</div>
              <div className="text-gray-600">Success Rate Improvement</div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Intelligence Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
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

        {/* Intelligence Dashboard Preview */}
        <Card className="mb-16 p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Comprehensive Intelligence Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-sm text-gray-600">Faster Analysis</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Win Rate Improvement</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Market Monitoring</div>
            </div>
          </div>
        </Card>

        {/* Intelligence Process */}
        <Card className="mb-16 p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Intelligence Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-3">Data Collection</h3>
              <p className="text-sm text-gray-600">
                Gather market data, competitor information, and historical tender results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-3">AI Analysis</h3>
              <p className="text-sm text-gray-600">
                Apply machine learning algorithms to identify patterns and opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-3">Strategic Insights</h3>
              <p className="text-sm text-gray-600">
                Receive actionable recommendations and success probability scores
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Make Smarter Tender Decisions
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Access the intelligence you need to win more tenders and grow your business.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            Get Market Intelligence
          </Button>
        </Card>
      </div>

      <ContactSection />
    </div>
  );
}
