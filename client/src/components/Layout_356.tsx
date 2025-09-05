// src/components/Layout_356.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import the hook
import styles from '../styles/Layout_356.module.css';

// --- SUB-COMPONENTS (No changes needed here) ---
const ToggleIcon = () => (
  <svg className={styles.toggleIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12H19" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface FeatureSectionProps {
  tagline: string;
  heading: string;
  description: string;
  extendedDescription: string;
  imagePosition: 'left' | 'right';
  imageUrl: string;
  stats?: { number: string; text: string }[];
  useRalewayFont?: boolean;
}

const FeatureSection = ({
  tagline,
  heading,
  description,
  extendedDescription,
  imagePosition,
  imageUrl,
  stats,
  useRalewayFont,
}: FeatureSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const sectionClasses = `${styles.featureSection} ${imagePosition === 'left' ? styles.imageOnLeft : ''}`;
  const headingStyle = useRalewayFont ? { fontFamily: "'Raleway', sans-serif", fontWeight: 500 } : {};

  return (
    <section className={sectionClasses}>
      <div className={styles.textContainer}>
        <span className={styles.tagline}>{tagline}</span>
        <h2 className={styles.heading} style={headingStyle}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        {stats && (
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statText}>{stat.text}</span>
              </div>
            ))}
          </div>
        )}

        <button 
          className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`} 
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close details' : 'Open details'}
        >
          <ToggleIcon />
        </button>

        <div className={`${styles.collapsibleContent} ${isOpen ? styles.open : ''}`}>
          <p>{extendedDescription}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={heading} />
      </div>
    </section>
  );
};


// --- MAIN COMPONENT (NOW "SMART") ---

// 2. Update the function to accept the 't_prefix' prop
export default function Layout_356({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation(); // 3. Use the hook

  return (
    <>
      {/* 4. Use the t_prefix to build all translation keys dynamically */}
      <FeatureSection
        tagline={t(`${t_prefix}.feature1_tag`)}
        heading={t(`${t_prefix}.feature1_title`)}
        description={t(`${t_prefix}.feature1_desc`)}
        extendedDescription={t(`${t_prefix}.feature1_popup`)}
        imagePosition="right"
        imageUrl="/images/UI1.svg" 
        stats={[{ number: "100%", text: t(`${t_prefix}.feature1_stat`) }]}
      />
      <FeatureSection
        tagline={t(`${t_prefix}.feature2_tag`)}
        heading={t(`${t_prefix}.feature2_title`)}
        description={t(`${t_prefix}.feature2_desc`)}
        extendedDescription={t(`${t_prefix}.feature2_popup`)}
        imagePosition="left"
        imageUrl="/images/UI 2.svg" 
      />
      <FeatureSection
        tagline={t(`${t_prefix}.feature3_tag`)}
        heading={t(`${t_prefix}.feature3_title`)}
        description={t(`${t_prefix}.feature3_desc`)}
        extendedDescription={t(`${t_prefix}.feature3_popup`)}
        imagePosition="right"
        imageUrl="/images/UI 3.svg" 
        useRalewayFont={true}
      />
    </>
  );
}