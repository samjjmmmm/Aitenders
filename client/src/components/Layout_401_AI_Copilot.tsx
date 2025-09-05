// src/components/Layout_401_AI_Copilot.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Layout_401_AI_Copilot.module.css';

// 1. We update the function to accept the 't_prefix' prop
export default function Layout_401_AI_Copilot({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.layoutContainer}>
      <main className={styles.contentWrapper}>

        {/* 2. We use the t_prefix to build the translation keys dynamically */}
        <p className={styles.tag}>
          {t(`${t_prefix}.tag`)}
        </p>

        <h1 className={styles.heading}>
          {t(`${t_prefix}.title`)}
        </h1>

        <p className={styles.subheading}>
          {t(`${t_prefix}.subtitle`)}
        </p>

        <div className={styles.flowContainer}>
          <div className={styles.flowStep}>
            {t(`${t_prefix}.step1`)}
          </div>
          <span className={styles.arrow}>→</span>
          <div className={styles.flowStep}>
            {t(`${t_prefix}.step2`)}
          </div>
          <span className={styles.arrow}>→</span>
          <div className={`${styles.flowStep} ${styles.flowStepHighlighted}`}>
            {t(`${t_prefix}.step3`)}
          </div>
        </div>
      </main>
    </div>
  );
}