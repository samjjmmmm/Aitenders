// src/components/Layout_401_AI_Copilot.tsx
import React from 'react';
// CORRECTED: The import now points to a CSS file with a matching name.
import styles from '../styles/Layout_401_AI_Copilot.module.css';

export default function Layout_401_AI_Copilot(): JSX.Element {
  return (
    <div className={styles.layoutContainer}>
      {/* Decorative frame from the design */}
      <div className={styles.frame}>
        <div className={`${styles.line} ${styles.topLeftHorz}`} />
        <div className={`${styles.line} ${styles.topLeftVert}`} />
        <div className={`${styles.line} ${styles.topRightHorz}`} />
        <div className={`${styles.line} ${styles.topRightVert}`} />
        <div className={`${styles.line} ${styles.bottomLeftHorz}`} />
        <div className={`${styles.line} ${styles.bottomLeftVert}`} />
        <div className={`${styles.line} ${styles.bottomRightHorz}`} />
        <div className={`${styles.line} ${styles.bottomRightVert}`} />
        <div className={`${styles.line} ${styles.topCenter}`} />
        <div className={`${styles.line} ${styles.bottomCenter}`} />
        <div className={`${styles.line} ${styles.leftCenter}`} />
        <div className={`${styles.line} ${styles.rightCenter}`} />
      </div>

      <main className={styles.contentWrapper}>
        <p className={styles.tag}>AI Agents</p>
        <h1 className={styles.heading}>
          Votre copilote IA qui sécurise la gestion de vos projets moyens
        </h1>
        <p className={styles.subheading}>
          La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour
        </p>
        <div className={styles.flowContainer}>
          <div className={styles.flowStep}>
            Structuration du projet avec l&apos;IA
          </div>
          <span className={styles.arrow}>→</span>
          <div className={styles.flowStep}>
            Détection immédiate des clauses critiques
          </div>
          <span className={styles.arrow}>→</span>
          <div className={`${styles.flowStep} ${styles.flowStepHighlighted}`}>
            Pilotage dynamique des Q&A et versions.
          </div>
        </div>
      </main>
    </div>
  );
}