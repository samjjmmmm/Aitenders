// client/src/components/Layout_84.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Layout_84.module.css';

export default function Layout_84(): JSX.Element {

  // This hook detects when the component is visible on the screen
  const { ref, inView } = useInView({
    triggerOnce: true,    // Ensures the animation only runs once
    threshold: 0.3,       // Triggers when 30% of the component is visible
  });

  return (
    // The 'ref' is attached here to observe this whole section
    <section ref={ref} className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.youColumn}>
          <h2 className={styles.heading}>Vous</h2>
        </div>

        {/* The 'animated' class is added here only when 'inView' is true */}
        <div className={`${styles.statsColumn} ${inView ? styles.animated : ''}`}>
          <div className={styles.statItem}>
            <span className={styles.number}>-50%</span>
            <p className={styles.text}>du temps d&apos;analyse initiale.</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>100%</span>
            <p className={styles.text}>des clauses critiques identifiées et priorisées.</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>0</span>
            <p className={styles.text}>surprise de dernière minute.</p>
          </div>
        </div>
      </div>
    </section>
  );
}