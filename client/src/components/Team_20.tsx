// src/components/Team_20.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Team_20.module.css';

// MODIFIED: Renamed imageUrl to iconSrc for clarity
type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc?: string; // This prop will now hold the path to the SVG icon
}

// MODIFIED: Component now uses iconSrc
const FeatureCard = ({ title, description, iconSrc }: FeatureCardProps) => (
  <div className={styles.featureCard}>
    <div className={styles.cardImageContainer}>
      {/* MODIFIED: Use iconSrc to render the SVG */}
      {iconSrc && <img src={iconSrc} alt={title} className={styles.cardImage} />}
    </div>
    <div className={styles.cardTextContainer}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>#</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
);

export default function Team_20({ t_prefix }: { t_prefix: string }): JSX.Element | null {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const tag = t(`${t_prefix}.tag`);
  const title = t(`${t_prefix}.title`);
  const description = t(`${t_prefix}.description`);
  // MODIFIED: Ensure that 'cards' objects from translation have 'iconSrc'
  const cards: FeatureCardProps[] = t(`${t_prefix}.cards`, { returnObjects: true });

  if (!Array.isArray(cards) || cards.length === 0) {
    return null;
  }

  return (
    <section ref={ref} className={styles.sectionContainer}>
      <div className={`${styles.mainContent} ${inView ? styles.inView : ''}`}>
        <div className={styles.introColumn}>
          <span className={styles.tag}>{tag}</span>
          <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.gridColumn}>
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              iconSrc={card.iconSrc} // MODIFIED: Pass card.iconSrc
            />
          ))}
        </div>
      </div>
    </section>
  );
}