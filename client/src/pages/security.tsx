import { Shield, Lock, Users, Database, Globe, CheckCircle, Server, Eye, RotateCcw, Brain, Award, Zap } from 'lucide-react';
import Header from '../components/header';

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <Header />
      
      <div className="page-content">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
                 style={{
                   background: 'radial-gradient(circle, #3B82F6 0%, #1E40AF 40%, transparent 70%)'
                 }}></div>
            <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-15 blur-2xl"
                 style={{
                   background: 'radial-gradient(circle, #1E40AF 0%, #3B82F6 30%, transparent 70%)'
                 }}></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Security at Aitenders
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Your Data, Our Priority
            </p>
            
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At Aitenders, we understand that trust is earned through transparency, resilience, and best-in-class practices. 
              Our platform is designed with enterprise-grade security in mind, offering secure infrastructure, encrypted data flows, 
              and strong access controls—so you can focus on winning tenders and managing projects without compromise.
            </p>
          </div>
        </section>

        {/* Platform Security Highlights */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Platform Security Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Secure by Design */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Secure by Design</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Data Encryption in Transit</h4>
                    <p className="text-slate-600">All data exchanged between your browser and our servers is encrypted using HTTPS and SFTP over SSH protocols.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Isolated Workspaces</h4>
                    <p className="text-slate-600">Your data is always separated from other clients, ensuring complete tenant isolation across projects and users.</p>
                  </div>
                </div>
              </div>

              {/* Infrastructure Options */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Infrastructure Options</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-600 mb-3">
                      <strong>Multi-tenant Environment</strong> for smaller teams (Base)
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Dedicated Infrastructure</strong> for larger or regulated organizations (Project, Builder, Architect, Master tiers)
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Backups & Disaster Recovery</h4>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Daily & Monthly backups</li>
                      <li>• 2:1 or 3:1 redundancy setups depending on tier</li>
                      <li>• Full restore capabilities included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access & Identity */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Access & Identity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Role-Based Access Control</h3>
                </div>
                <p className="text-slate-600">
                  Admin-defined permissions ensure the right people access the right data, across your teams and business units.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">SSO Integration</h3>
                </div>
                <p className="text-slate-600">
                  Available on Architect and Master tiers, Aitenders supports Single Sign-On (SSO) for seamless and secure access across your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Privacy & Confidentiality */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Data Privacy & Confidentiality
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">EU-Based Data Hosting</h3>
                </div>
                <p className="text-slate-600">
                  All customer data is securely hosted within the European Union, aligned with GDPR compliance and European data sovereignty principles.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">No Data Sharing</h3>
                </div>
                <p className="text-slate-600">
                  We don't use your data to train models. Your documents remain yours—confidential, untouched, and never accessed without your permission.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Database Encryption</h3>
                </div>
                <p className="text-slate-600">
                  Clients on Architect or Master tiers can activate data-at-rest encryption with enterprise-grade protocols (available as a paid option).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Security */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Operational Security
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Service-Level Commitments (SLA)</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Availability SLA</h4>
                    <p className="text-slate-600">99% (Base & Project), 99.5% (Builder+)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Incident Response SLA</h4>
                    <ul className="text-slate-600 space-y-1">
                      <li>• P1 issues: Resolved in as little as 12h (Master tier)</li>
                      <li>• Full coverage for P1–P3 incidents with guaranteed response windows</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Monitoring & Maintenance</h3>
                </div>
                
                <ul className="text-slate-600 space-y-3">
                  <li>• 24/7 infrastructure monitoring</li>
                  <li>• Regular patches and updates applied without disruption</li>
                  <li>• Optional version control & rollback for documents</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Control & Reversibility */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <RotateCcw className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Data Control & Reversibility
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  We empower clients to maintain full control over their data at every stage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Daily Backups</h3>
                  <p className="text-slate-600">For business continuity</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">90-Day Retention</h3>
                  <p className="text-slate-600">After contract termination</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <RotateCcw className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Full Export</h3>
                  <p className="text-slate-600">For offboarding or migration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Model Security */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                AI Model Security
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <p className="text-lg text-slate-600">
                  All tiers have access to Aitenders' proprietary AI models
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-2">Fine-tune Models</h3>
                  <p className="text-slate-600">Available on Architect & Master tiers (on quote)</p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-2">Connect Your Own LLMs</h3>
                  <p className="text-slate-600">Available on Architect & Master tiers (on quote)</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-slate-600">
                  Host models in isolated, secure infrastructure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Certifications & Compliance
              </h2>
              <p className="text-lg text-slate-600">
                Coming Soon
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <p className="text-slate-600 mb-6 text-center">
                We are committed to best practices and industry standards. Upcoming certifications and audits will include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-slate-900">ISO 27001</h3>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-slate-900">SOC 2 Readiness</h3>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-slate-900">Continuous GDPR Alignment</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Ready CTA */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise-Ready
            </h2>
            
            <p className="text-xl leading-relaxed">
              Whether you're in construction, defense, energy, or procurement, Aitenders is built to handle your operational 
              and security needs. From secure document management to advanced tender workflows, you're covered with a platform 
              that meets the standards of highly regulated sectors.
            </p>
          </div>
        </section>

        {/* Padding for chat */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}