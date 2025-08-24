
import { useState } from "react";
import { MdAccountBox, MdAssignment, MdBusiness, MdDesktopMac, MdCode, MdSpeed, MdTrendingUp } from 'react-icons/md';
import { FaCheckCircle, FaClock, FaShieldAlt, FaUsers, FaLightbulb, FaChartLine, FaRocket, FaCog } from 'react-icons/fa';
import { AitendersSimulatorFinal } from "@/components/aitenders-simulator-final";
import ClientLogos from "@/components/client-logos";
import HubSpotBookingModal from "@/components/hubspot-booking-modal";
import { useGlobalTranslations } from "@/contexts/TranslationContext";

export default function UC1() {
  const { t } = useGlobalTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              {t('uc1.hero.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('uc1.hero.title')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('uc1.hero.span')}
              </span>
              {t('uc1.hero.title2')}{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('uc1.hero.span2')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              {t('uc1.hero.description')}{' '}
              <span className="font-semibold text-blue-600">{t('uc1.hero.description_span')}</span>
              {t('uc1.hero.description2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('uc1.hero.demoButton')}
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors">
                {t('uc1.hero.downloadButton')}
              </button>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/src/assets/uc1-hero-image.png" 
                alt="Aitenders UC1 Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('uc1.painPoints.headline')}{' '}
              <span className="text-blue-600">{t('uc1.painPoints.headline_span')}</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
              <p>{t('uc1.painPoints.text1')}</p>
              <p>{t('uc1.painPoints.text2')}</p>
              <p className="font-medium text-gray-800">{t('uc1.painPoints.text3')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('uc1.painPoints.contactButton')}
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {t('uc1.painPoints.demoButton')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.solution_section.mainTitle')}{' '}
              <span className="text-blue-600">{t('uc1.solution_section.mainTitle_span')}</span>{' '}
              {t('uc1.solution_section.mainTitle2')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.solution_section.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('uc1.solution_section.feature1_title')}{' '}
                <span className="text-blue-600">{t('uc1.solution_section.feature1_span')}</span>
              </h3>
              <p className="text-gray-600 mb-4">
                {t('uc1.solution_section.feature1_text')}
              </p>
              <div className="text-sm font-medium text-blue-600">
                {t('uc1.solution_section.feature1_highlight')}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('uc1.solution_section.feature2_title')}{' '}
                <span className="text-green-600">{t('uc1.solution_section.feature2_span')}</span>{' '}
                {t('uc1.solution_section.feature2_title2')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('uc1.solution_section.feature2_text')}
              </p>
              <div className="text-sm font-medium text-green-600">
                {t('uc1.solution_section.feature2_highlight')}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FaCheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('uc1.solution_section.feature3_title')}{' '}
                <span className="text-purple-600">{t('uc1.solution_section.feature3_span')}</span>
              </h3>
              <p className="text-gray-600 mb-4">
                {t('uc1.solution_section.feature3_text')}
              </p>
              <div className="text-sm font-medium text-purple-600">
                {t('uc1.solution_section.feature3_highlight')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.results_section.headline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.results_section.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <MdBusiness className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('uc1.results_section.card1_title')}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {t('uc1.results_section.card1_subtitle')}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {t('uc1.results_section.card1_text')}
              </p>
              <ul className="space-y-3">
                {[
                  t('uc1.results_section.card1_point1'),
                  t('uc1.results_section.card1_point2'),
                  t('uc1.results_section.card1_point3'),
                  t('uc1.results_section.card1_point4')
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <MdAssignment className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('uc1.results_section.card2_title')}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {t('uc1.results_section.card2_subtitle')}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {t('uc1.results_section.card2_text')}
              </p>
              <ul className="space-y-3">
                {[
                  t('uc1.results_section.card2_point1'),
                  t('uc1.results_section.card2_point2'),
                  t('uc1.results_section.card2_point3'),
                  t('uc1.results_section.card2_point4')
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* KPIs Section */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.time')}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.time_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.compliance')}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.compliance_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.serenity')}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.serenity_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">48h</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('uc1.results_section.kpis.serenity_title')}</h4>
              <p className="text-sm text-gray-600">{t('uc1.results_section.kpis.serenity_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-6">
              {t('uc1.toppings.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('uc1.toppings.headline')}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('uc1.toppings.headline_span')}
              </span>{' '}
              {t('uc1.toppings.headline2')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('uc1.toppings.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FaLightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.project_summary.title')}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.project_summary.desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.project_summary.tag')}
                </span>
                <button className="text-xs text-blue-400 hover:text-blue-300">
                  {t('uc1.toppings.project_summary.click')}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.implicit_requirements.title')}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.implicit_requirements.desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.implicit_requirements.tag')}
                </span>
                <button className="text-xs text-green-400 hover:text-green-300">
                  {t('uc1.toppings.implicit_requirements.click')}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <MdCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.document_summary.title')}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.document_summary.desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.document_summary.tag')}
                </span>
                <button className="text-xs text-purple-400 hover:text-purple-300">
                  {t('uc1.toppings.document_summary.click')}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <FaCog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.document_hierarchy.title')}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.document_hierarchy.desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.document_hierarchy.tag')}
                </span>
                <button className="text-xs text-orange-400 hover:text-orange-300">
                  {t('uc1.toppings.document_hierarchy.click')}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.content_categorization.title')}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.content_categorization.desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.content_categorization.tag')}
                </span>
                <button className="text-xs text-pink-400 hover:text-pink-300">
                  {t('uc1.toppings.content_categorization.click')}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <FaClock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('uc1.toppings.project_chat.title')}</h3>
              <p className="text-gray-300 text-sm mb-4">{t('uc1.toppings.project_chat.desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">
                  {t('uc1.toppings.project_chat.tag')}
                </span>
                <button className="text-xs text-cyan-400 hover:text-cyan-300">
                  {t('uc1.toppings.project_chat.click')}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 text-lg mb-6">{t('uc1.toppings.bottom_text')}</p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              {t('uc1.toppings.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Reference Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.reference_projects.headline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.reference_projects.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('uc1.reference_projects.project1.title')}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {t('uc1.reference_projects.project1.sector')}
                  </span>
                  <span className="font-semibold text-blue-600">
                    {t('uc1.reference_projects.project1.offer')}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('uc1.reference_projects.project1.desc')}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-green-600">
                    {t('uc1.reference_projects.project1.result')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {t('uc1.reference_projects.impact_label')}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('uc1.reference_projects.project1.impact')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('uc1.reference_projects.project2.title')}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {t('uc1.reference_projects.project2.sector')}
                  </span>
                  <span className="font-semibold text-green-600">
                    {t('uc1.reference_projects.project2.offer')}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('uc1.reference_projects.project2.desc')}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-green-600">
                    {t('uc1.reference_projects.project2.result')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {t('uc1.reference_projects.impact_label')}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('uc1.reference_projects.project2.impact')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('uc1.reference_projects.project3.title')}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    {t('uc1.reference_projects.project3.sector')}
                  </span>
                  <span className="font-semibold text-purple-600">
                    {t('uc1.reference_projects.project3.offer')}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('uc1.reference_projects.project3.desc')}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-green-600">
                    {t('uc1.reference_projects.project3.result')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {t('uc1.reference_projects.impact_label')}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('uc1.reference_projects.project3.impact')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Simulator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-6">
              {t('uc1.roi_simulator.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('uc1.roi_simulator.headline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('uc1.roi_simulator.subtext')}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <AitendersSimulatorFinal useCase="UC1" />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* HubSpot Modal */}
      <HubSpotBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
