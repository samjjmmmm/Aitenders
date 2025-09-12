import React from "react";

// --- CORE COMPONENTS ---
import Header from "@/components/header";
import Footer_4 from '../components/Footer_4'; // <-- IMPORTED FOOTER

// --- PAGE-SPECIFIC IMPORTS ---
import { useTranslation } from "react-i18next"; // Translation hook

// --- GLOBAL STYLES ---
import '../index.css';

export default function PrivacyPage() {
  const { t } = useTranslation();

  // Helper to safely get list items from translation JSON
  const getListItems = (key: string): string[] => {
    const items = t(key, { returnObjects: true });
    return Array.isArray(items) ? items : [];
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="page-content flex-grow">
        {/* Privacy Policy Content */}
        <section className="py-16 md:py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-dark-blue mb-6">
                {t('privacy_policy.title')}
              </h1>
            </div>

            <div className="space-y-8">
              {/* Section 1 - General Information */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.general_info.title')}
                </h2>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.general_info.scope.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.general_info.scope.p1')}
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  {getListItems('privacy_policy.general_info.scope.list_items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.general_info.scope.p2')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.general_info.controller.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.general_info.controller.p1')}
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-aitenders-dark-blue font-medium mb-2" dangerouslySetInnerHTML={{ __html: t('privacy_policy.general_info.controller.box_line1') }} />
                  <p className="text-aitenders-dark-blue" dangerouslySetInnerHTML={{ __html: t('privacy_policy.general_info.controller.box_address') }} />
                  <p className="text-aitenders-dark-blue" dangerouslySetInnerHTML={{ __html: t('privacy_policy.general_info.controller.box_contact') }} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.general_info.controller.p2')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3 mt-6">{t('privacy_policy.general_info.update.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.general_info.update.p1')}
                </p>
              </div>

              {/* Section 2 - Data Categories */}
              <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.data_categories.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('privacy_policy.data_categories.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.data_categories.contact_business.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.data_categories.contact_business.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.data_categories.communication_transaction.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.data_categories.communication_transaction.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.data_categories.application_usage.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.data_categories.application_usage.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.data_categories.device_browser.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.data_categories.device_browser.p1')}
                </p>
              </div>

              {/* Section 3 - Origin of the data */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.origin.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.origin.p1')}
                </p>
              </div>

              {/* Section 4 - Purposes for processing */}
              <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.purposes.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('privacy_policy.purposes.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.purposes.providing_service.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-2">{t('privacy_policy.purposes.providing_service.p1')}</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  {getListItems('privacy_policy.purposes.providing_service.list_items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.purposes.comments_questions.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.purposes.comments_questions.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.purposes.sales_marketing.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.purposes.sales_marketing.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.purposes.statistics.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.purposes.statistics.p1')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.purposes.security_compliance.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.purposes.security_compliance.p1')}
                </p>
              </div>

              {/* Section 5 - Lawfulness of Processing */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.lawfulness.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.lawfulness.p1')}
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  {getListItems('privacy_policy.lawfulness.list_items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 6 - Cookies and other Tracking Technologies */}
              <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.cookies.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.cookies.p1')}
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  {getListItems('privacy_policy.cookies.list_items').map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.cookies.p2')}
                </p>
              </div>

              {/* Section 7 - Recipients */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.recipients.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_policy.recipients.p1')}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_policy.recipients.p2')}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_policy.recipients.p3')}</p>
                <p className="text-gray-700 leading-relaxed">{t('privacy_policy.recipients.p4')}</p>
              </div>

              {/* Section 8 - Duration of Data Storage */}
              <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.duration.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy_policy.duration.p1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.duration.p2')}
                </p>
              </div>

              {/* Section 9 - Your Rights */}
              <div className="bg-aitenders-light-blue rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                  {t('privacy_policy.your_rights.title')}
                </h2>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.your_rights.gdpr.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_policy.your_rights.gdpr.p1')}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_policy.your_rights.gdpr.p2')}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{t('privacy_policy.your_rights.gdpr.p3')}</p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-aitenders-dark-blue font-medium" dangerouslySetInnerHTML={{ __html: t('privacy_policy.your_rights.gdpr.box_p1') }} />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('privacy_policy.your_rights.gdpr.p4')}
                </p>

                <h3 className="text-xl font-semibold text-aitenders-dark-blue mb-3">{t('privacy_policy.your_rights.california.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_policy.your_rights.california.p1')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer_4 />
    </div>
  );
}