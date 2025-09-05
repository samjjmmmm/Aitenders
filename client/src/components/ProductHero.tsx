// src/components/ProductHero.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ProductHero.module.css';

// The "smart" component accepts a t_prefix
export default function ProductHero({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  // This is the YouTube video ID. You can easily change this in one place.
  const videoId = "dQw4w9WgXcQ"; // Example: Rick Astley

  return (
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
            <button className={styles.ctaButton}>
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
  );
}