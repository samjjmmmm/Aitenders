// src/components/KpiSection.tsx
import React, { useState, useCallback } from 'react'; // <-- 1. IMPORT HOOKS
import { useTranslation } from 'react-i18next';
import HubspotMeetingModal from './HubspotMeetingModal'; // <-- 2. IMPORT THE MODAL
import styles from '../styles/KpiSection.module.css';

export default function KpiSection({ t_prefix }: { t_prefix: string }) {
  const { t } = useTranslation();

  // --- 3. ADD STATE AND LOGIC FOR THE MODAL ---
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // HubSpot form credentials (same as your header)
  const HUBSPOT_PORTAL_ID = "8751172";
  const HUBSPOT_FORM_ID = "9721c1af-c7ab-4d10-b519-28c04d171007";
  const HUBSPOT_REGION = "na1";

  const openDemo = useCallback(() => setIsDemoOpen(true), []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  return (
    <>
      <section className={styles.kpiSection}>
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <p className={styles.tagline}>{t(`${t_prefix}.tagline`)}</p>
            <h2 className={styles.heading}>{t(`${t_prefix}.heading`)}</h2>
            <p className={styles.description}>{t(`${t_prefix}.description`)}</p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>{t(`${t_prefix}.stat1_number`)}</p>
              <p className={styles.statText}>{t(`${t_prefix}.stat1_text`)}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>{t(`${t_prefix}.stat2_number`)}</p>
              <p className={styles.statText}>{t(`${t_prefix}.stat2_text`)}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>{t(`${t_prefix}.stat3_number`)}</p>
              <p className={styles.statText}>{t(`${t_prefix}.stat3_text`)}</p>
            </div>
          </div>
          <div className={styles.actions}>
            {/* --- 4. CONNECT THE BUTTON'S ONCLICK --- */}
            <button onClick={openDemo} className={styles.ctaButton}>
              {t(`${t_prefix}.cta_button`)}
            </button>
          </div>
        </div>
      </section>

      {/* --- 5. ADD THE HUBSPOT MODAL COMPONENT --- */}
      <HubspotMeetingModal
        id="kpi-hubspot-form-modal"
        isOpen={isDemoOpen}
        onClose={closeDemo}
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region={HUBSPOT_REGION}
      />
    </>
  );
}