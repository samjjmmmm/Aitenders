import React from "react";

// --- CORE COMPONENTS ---
import Header from "@/components/header"; 
import Footer_4 from '../components/Footer_4'; // <-- IMPORTED FOOTER

// --- PAGE-SPECIFIC IMPORTS ---
import { MdStore, MdDescription, MdCheck } from "react-icons/md";
import { useTranslation } from "react-i18next"; // Translation hook

// --- GLOBAL STYLES ---
import '../index.css';

export default function WordAddonPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="page-content flex-grow">
        {/* Word Add-in Content */}
        <section className="py-16 md:py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-dark-blue mb-6">
                {t('word_addon.title')}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('word_addon.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-aitenders-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-aitenders-dark-blue">
                    {t('word_addon.step1_title')}{' '}
                    <a href="https://appsource.microsoft.com/en-ca/product/office/wa200002578?tab=overview" target="_blank" rel="noopener noreferrer" className="text-aitenders-primary-blue hover:underline">
                      {t('word_addon.step1_link')}
                    </a>
                  </h2>
                </div>
                <div className="flex items-center space-x-4">
                  <MdStore className="w-8 h-8 text-aitenders-primary-blue" />
                  <p className="text-gray-700 leading-relaxed">
                    {t('word_addon.step1_desc')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-aitenders-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-aitenders-dark-blue">
                    {t('word_addon.step2_title')}
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MdDescription className="w-6 h-6 text-aitenders-primary-blue mt-1 flex-shrink-0" />
                    <p 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: t('word_addon.step2_desc1') }}
                    />
                  </div>

                  <div className="ml-10 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {t('word_addon.step2_desc2')}
                    </p>

                    <p 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: t('word_addon.step2_desc3') }}
                    />

                    <div className="bg-aitenders-light-blue rounded-lg p-4">
                      <p 
                        className="text-aitenders-dark-blue text-sm"
                        dangerouslySetInnerHTML={{ __html: t('word_addon.step2_note') }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Step - Confirmation */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <MdCheck className="w-8 h-8 text-green-600 mr-4" />
                  <h3 className="text-xl font-bold text-green-800">
                    {t('word_addon.step3_title')}
                  </h3>
                </div>
                <p className="text-green-700 leading-relaxed">
                  {t('word_addon.step3_desc')}
                </p>
              </div>

              {/* Additional Help Section */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-aitenders-dark-blue mb-4">
                  {t('word_addon.support_title')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('word_addon.support_desc')}
                </p>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <p className="text-aitenders-dark-blue font-medium">
                    {t('word_addon.support_contact')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer_4 />
    </div>
  );
}