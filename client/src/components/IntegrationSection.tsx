// src/components/IntegrationSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/IntegrationSection.module.css';

// Reusable SVG Icon Components
const PlayIcon = () => (
  <svg className={styles.playButton} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.44336 32.2257C5.44336 17.4981 17.3825 5.55908 32.1101 5.55908C39.1825 5.55908 45.9652 8.3686 50.9662 13.3695C55.9671 18.3705 58.7766 25.1533 58.7766 32.2257C58.7766 46.9533 46.8377 58.8924 32.1101 58.8924C17.3825 58.8924 5.44336 46.9533 5.44336 32.2257ZM27.2302 43.6391L42.7767 33.9324C43.3585 33.5598 43.7104 32.9166 43.7104 32.2257C43.7104 31.5349 43.3585 30.8916 42.7767 30.5191L27.1768 20.8124C26.5624 20.425 25.7861 20.4012 25.1491 20.7501C24.5121 21.0991 24.1143 21.766 24.1101 22.4924V41.9591C24.1015 42.7031 24.5066 43.3904 25.1617 43.7431C25.8168 44.0959 26.6137 44.0558 27.2302 43.6391Z" fill="currentColor" />
  </svg>
);

const ArrowIcon = () => (
    <svg className={styles.arrowIcon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.78125 3.10938L14.6719 8L8.78125 12.8906" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function IntegrationSection({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  return (
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

          <button className={styles.ctaButton}>
            <span>{t(`${t_prefix}.cta_button`)}</span>
            <ArrowIcon />
          </button>
        </div>
        <div className={styles.mediaColumn}>
          <PlayIcon />
        </div>
      </div>
    </section>
  );
}