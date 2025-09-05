// client/src/components/Layout_84.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Layout_84.module.css';

export default function Layout_84({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  const statsData = [
    {
      number: t(`${t_prefix}.stat1_number`),
      text: t(`${t_prefix}.stat1_text`)
    },
    {
      number: t(`${t_prefix}.stat2_number`),
      text: t(`${t_prefix}.stat2_text`)
    },
    {
      number: t(`${t_prefix}.stat3_number`),
      text: t(`${t_prefix}.stat3_text`)
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.youColumn}>
          <h2 className={styles.heading}>{t(`${t_prefix}.you`)}</h2>
        </div>
        <div className={`${styles.statsColumn} ${inView ? styles.animated : ''}`}>
          {statsData.map((stat, index) => (
            <div className={styles.statItem} key={index}>

              {/* CRITICAL CHANGE: Only render the number if it's not an empty string */}
              {stat.number && (
                <span className={styles.number}>{stat.number}</span>
              )}

              <p className={styles.text}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}