// src/components/IntegrationSection.tsx
import React, { useState, useCallback } from 'react'; // <-- 1. IMPORT HOOKS
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import HubspotMeetingModal from './HubspotMeetingModal'; // <-- 2. IMPORT THE MODAL
import styles from '../styles/IntegrationSection.module.css';

// Import your Lottie animation JSON file
import integrationAnimation from '../assets/integration-animation.json';

// Reusable SVG Icon Component
const ArrowIcon = () => (
    <svg className={styles.arrowIcon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.78125 3.10938L14.6719 8L8.78125 12.8906" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function IntegrationSection({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  // --- 3. ADD STATE AND LOGIC FOR THE MODAL ---
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // HubSpot form credentials
  const HUBSPOT_PORTAL_ID = "8751172";
  const HUBSPOT_FORM_ID = "9721c1af-c7ab-4d10-b519-28c04d171007";
  const HUBSPOT_REGION = "na1";

  const openDemo = useCallback(() => setIsDemoOpen(true), []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  return (
    <>
      <section className={styles.integrationSection}>
        <div className={styles.container}>
          <div className={styles.textColumn}>
            <span className={styles.tagline}>{t(`${t_prefix}.tagline`)}</span>
            <h2 className={styles.heading}>{t(`${t_prefix}.heading`)}</h2>
            <p className={styles.description}>{t(`${t_prefix}.description`)}</p>

            <div className={styles.subfeatures}>
              <div className={styles.subfeatureItem}>
                <h3 className={styles.subheading}>{t(`${t_prefix}.subheading1`)}</h3>
                <p className={styles.subfeatureText}>{t(`${t_prefix}.subfeature1_text`)}</p>
              </div>
              <div className={styles.subfeatureItem}>
                <h3 className={styles.subheading}>{t(`${t_prefix}.subheading2`)}</h3>
                <p className={styles.subfeatureText}>{t(`${t_prefix}.subfeature2_text`)}</p>
              </div>
            </div>

            {/* --- 4. CONNECT THE BUTTON'S ONCLICK --- */}
            <button onClick={openDemo} className={styles.ctaButton}>
              <span>{t(`${t_prefix}.cta_button`)}</span>
              <ArrowIcon />
            </button>
          </div>

          <div className={styles.mediaColumn}>
            <Lottie
              animationData={integrationAnimation}
              loop={true}
              className={styles.lottieAnimation}
            />
          </div>
        </div>
      </section>

      {/* --- 5. ADD THE HUBSPOT MODAL COMPONENT --- */}
      <HubspotMeetingModal
        id="integration-hubspot-form-modal"
        isOpen={isDemoOpen}
        onClose={closeDemo}
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region={HUBSPOT_REGION}
      />
    </>
  );
}