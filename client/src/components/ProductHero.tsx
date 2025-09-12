// src/components/ProductHero.tsx
import React, { useState, useCallback } from 'react'; // <-- 1. IMPORT HOOKS
import { useTranslation } from 'react-i18next';
import HubspotMeetingModal from './HubspotMeetingModal'; // <-- 2. IMPORT THE MODAL
import styles from '../styles/ProductHero.module.css';

export default function ProductHero({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  // --- 3. ADD STATE AND LOGIC FOR THE MODAL ---
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // HubSpot form credentials
  const HUBSPOT_PORTAL_ID = "8751172";
  const HUBSPOT_FORM_ID = "9721c1af-c7ab-4d10-b519-28c04d171007";
  const HUBSPOT_REGION = "na1";

  const openDemo = useCallback(() => setIsDemoOpen(true), []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  // Removed the unused 'videoId' variable for clarity

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <div className={styles.badge}>
              {t(`${t_prefix}.badge`)}
            </div>
            <h1 className={styles.heading}>
              {t(`${t_prefix}.title`)}
            </h1>
            <p className={styles.subheading}>
              {t(`${t_prefix}.subtitle`)}
            </p>
            <div className={styles.actions}>
              {/* --- 4. CONNECT THE BUTTON'S ONCLICK --- */}
              <button onClick={openDemo} className={styles.ctaButton}>
                {t(`${t_prefix}.cta_button`)}
              </button>
            </div>
          </div>
          <div className={styles.videoContainer}>
            <iframe 
              src={"https://www.youtube.com/embed/ma1UFP-PXZ8"} 
              title="Aitenders Product Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* --- 5. ADD THE HUBSPOT MODAL COMPONENT --- */}
      <HubspotMeetingModal
        id="product-hero-hubspot-modal"
        isOpen={isDemoOpen}
        onClose={closeDemo}
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region={HUBSPOT_REGION}
      />
    </>
  );
}