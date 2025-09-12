// src/components/Header_26.tsx
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronsDown } from 'lucide-react';
import HubspotMeetingModal from './HubspotMeetingModal';
import styles from '../styles/Header_26.module.css';

export default function Header_26({ t_prefix }: { t_prefix: string }) {
  const { t } = useTranslation();

  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const HUBSPOT_PORTAL_ID = "8751172";
  const HUBSPOT_FORM_ID = "9721c1af-c7ab-4d10-b519-28c04d171007";
  const HUBSPOT_REGION = "na1";

  const openDemo = useCallback(() => setIsDemoOpen(true), []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.heading}>
            {t(`${t_prefix}.title`)}
          </h1>
          <p className={styles.subheading}>
            {t(`${t_prefix}.subtitle`)}
          </p>

          <div className={styles.actions}>
            {/* The single, correctly styled button */}
            <button onClick={openDemo} className={styles.ctaButton}>
              {t(`${t_prefix}.cta1`)}
            </button>
          </div>

          <div className={styles.scrollIndicator}>
            <ChevronsDown className={styles.scrollArrow} />
          </div>
        </div>
      </section>

      <HubspotMeetingModal
        id="header-26-hubspot-modal"
        isOpen={isDemoOpen}
        onClose={closeDemo}
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region={HUBSPOT_REGION}
      />
    </>
  );
}

