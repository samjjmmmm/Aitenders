import Header from "@/components/header";
import ProductHero from "@/components/product-hero";
import ContactSection from "@/components/contact-section";
import { useState } from "react";

export default function ProductDemoPage() {
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} />
      
      {/* Product Hero - Exact Visual Frame */}
      <ProductHero />
      
      {/* Additional Content */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            AI-Powered Document Analysis in Action
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch how our intelligent platform automatically processes complex tender documents, 
            identifies key requirements, and provides real-time compliance verification and risk assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analysis</h3>
              <p className="text-gray-600">
                Automatically extract and categorize requirements from complex tender documents
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Compliance</h3>
              <p className="text-gray-600">
                Instant verification of compliance requirements and regulatory standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Assessment</h3>
              <p className="text-gray-600">
                Comprehensive risk evaluation with actionable insights and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection language={language} />
    </div>
  );
}