// src/components/ConcreteResultsSection.tsx
import React from 'react';
import styles from '../styles/ConcreteResultsSection.module.css';

export default function ConcreteResultsSection(): JSX.Element {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <h2 className={styles.heading}>
            Des résultats concrets pour vos équipes
          </h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>-50%</span>
              <p className={styles.statText}>du temps d&apos;analyse initiale.</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <p className={styles.statText}>des clauses critiques identifiées et priorisées.</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>0</span>
              <p className={styles.statText}>Surprise de dernière minute.</p>
            </div>
          </div>
        </div>
        <button className={styles.ctaButton}>
          Lancez la simulation de l&apos;impact pour vos propres projets
        </button>
      </div>
    </section>
  );
}