// src/components/Team_20.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Team_20.module.css';

// Reusable SVG Icon Component
const FeatureIcon = () => (
  <svg className={styles.cardIcon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7285 9.18408V15.1841H7.72852V9.18408H17.7285ZM19.7285 3.18408H17.7285V6.18408H19.7285V3.18408ZM7.72852 3.18408H5.72852V6.18408H7.72852V3.18408ZM23.7285 7.18408H20.7285V9.18408H23.7285V7.18408ZM19.7285 7.18408H5.72852V17.1841H19.7285V7.18408ZM4.72852 7.18408H1.72852V9.18408H4.72852V7.18408ZM23.7285 15.1841H20.7285V17.1841H23.7285V15.1841ZM4.72852 15.1841H1.72852V17.1841H4.72852V15.1841ZM19.7285 18.1841H17.7285V21.1841H19.7285V18.1841ZM7.72852 18.1841H5.72852V21.1841H7.72852V18.1841Z" fill="currentColor" />
  </svg>
);

// Define the shape of a single card's data for TypeScript
type Card = {
  title: string;
  description: string;
}

// Reusable card sub-component
const FeatureCard = ({ title, description }: Card) => (
  <div className={styles.featureCard}>
    <div className={styles.cardImagePlaceholder} />
    <div className={styles.cardTextContainer}>
      <div className={styles.cardHeader}>
        <FeatureIcon />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
);

// The main, "smart" component
export default function Team_20({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  // Get the array of cards from the JSON file using the prefix
  const cards: Card[] = t(`${t_prefix}.cards`, { returnObjects: true }) || [];

  // Safety check to prevent crashing if translations are missing or incorrect
  if (!Array.isArray(cards)) {
    console.error(`Translation for '${t_prefix}.cards' did not return an array.`);
    return null; 
  }

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.mainContent}>
        <div className={styles.introColumn}>
          <div className={styles.tag}>{t(`${t_prefix}.tag`)}</div>
          <h2 className={styles.heading}>{t(`${t_prefix}.title`)}</h2>
          <p className={styles.description}>{t(`${t_prefix}.description`)}</p>
        </div>
        <div className={styles.gridColumn}>
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}