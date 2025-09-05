// src/components/ConcreteResultsSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import the hook
import styles from '../styles/ConcreteResultsSection.module.css';

// 2. We update the function to accept the 't_prefix' prop
export default function ConcreteResultsSection({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation(); // 3. Use the hook

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.topRow}>

          {/* 4. We use the t_prefix to build the translation keys dynamically */}
          <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: t(`${t_prefix}.title`).replace(/\n/g, '<br />') }} />

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{t(`${t_prefix}.stat1_number`)}</span>
              <p className={styles.statText}>{t(`${t_prefix}.stat1_text`)}</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{t(`${t_prefix}.stat2_number`)}</span>
              <p className={styles.statText}>{t(`${t_prefix}.stat2_text`)}</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{t(`${t_prefix}.stat3_number`)}</span>
              <p className={styles.statText}>{t(`${t_prefix}.stat3_text`)}</p>
            </div>
          </div>
        </div>

        <button className={styles.ctaButton}>
          {t(`${t_prefix}.cta_button`)}
        </button>

      </div>
    </section>
  );
}