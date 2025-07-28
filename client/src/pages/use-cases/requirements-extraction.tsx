import Header from "@/components/header";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, FileText, CheckCircle, Database } from "lucide-react";
import { Link } from "wouter";

export default function RequirementsExtraction() {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Extraction",
      description: "Automatically identify and extract requirements from complex technical documents with 95% accuracy.",
    },
    {
      icon: Database,
      title: "Structured Database",
      description: "Organize extracted requirements in a searchable, traceable database for easy management.",
    },
    {
      icon: CheckCircle,
      title: "Compliance Matrix",
      description: "Generate compliance matrices automatically to ensure all requirements are addressed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="p-0 h-auto font-normal text-gray-600 hover:text-green-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Requirements Extraction
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Extract and manage requirements efficiently from complex tender documents. Transform unstructured data into actionable insights.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Start Extracting Requirements
          </Button>
        </div>

        {/* Case Study */}
        <Card className="mb-16 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                40M€ Tender Success
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For a partial project supplying integrated metro traction systems for a new Metro system in France, our client had to identify over 2,000 requirements across 50 different technical documents.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">2,000+ requirements extracted automatically</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">50 technical documents processed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">75% time reduction in compliance matrix creation</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,000+</div>
              <div className="text-gray-600">Requirements Extracted</div>
              <div className="text-2xl font-bold text-blue-600 mt-4 mb-2">50</div>
              <div className="text-gray-600">Documents Processed</div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Extraction Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
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

        {/* Process Flow */}
        <Card className="mb-16 p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Upload Documents</h3>
              <p className="text-sm text-gray-600">Upload your tender and technical documents</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">Our AI identifies and extracts requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Review & Validate</h3>
              <p className="text-sm text-gray-600">Review extracted requirements and make adjustments</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Generate Matrix</h3>
              <p className="text-sm text-gray-600">Create compliance matrices automatically</p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Requirements Process
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop manual requirement extraction. Let AI do the heavy lifting.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
            Try Requirements Extraction
          </Button>
        </Card>
      </div>

      <ContactSection />
    </div>
  );
}
