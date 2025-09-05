// src/components/KpiSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/KpiSection.module.css';

export default function KpiSection({ t_prefix }: { t_prefix: string }) {
  const { t } = useTranslation();
  return (
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
          <button className={styles.ctaButton}>{t(`${t_prefix}.cta_button`)}</button>
          <button className={styles.secondaryButton}>{t(`${t_prefix}.cta_button2`)}</button>
        </div>
      </div>
    </section>
  );
}