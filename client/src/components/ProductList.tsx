// src/components/ProductList.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/ProductList.module.css';

// A simple checkmark icon for the feature points
const CheckIcon = () => (
  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Define a type for a single feature
type Feature = {
  title: string;
  description: string;
  points: string[];
  imageUrl: string;
}

// Reusable component for a single text block
const FeatureBlock = ({ feature, onVisible }: { feature: Feature, onVisible: () => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 60% of the block is visible
  });

  useEffect(() => {
    if (inView) {
      onVisible();
    }
  }, [inView, onVisible]);

  return (
    <div ref={ref} className={styles.featureBlock}>
      <h3 className={styles.heading}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
      <ul className={styles.featurePoints}>
        {feature.points.map((point, index) => (
          <li key={index} className={styles.featurePoint}>
            <CheckIcon />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


// The main "smart" component
export default function ProductList({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Get the features data from our dictionary file
  const features: Feature[] = t(`${t_prefix}.features`, { returnObjects: true }) || [];

  if (!Array.isArray(features) || features.length === 0) {
    return null; // Safety check
  }

  return (
    <section className={styles.productListSection}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          {features.map((feature, index) => (
            <FeatureBlock 
              key={index} 
              feature={feature}
              onVisible={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
        <div className={styles.imageColumn}>
          <div className={styles.stickyImageWrapper}>
            {features.map((feature, index) => (
              <img
                key={index}
                src={feature.imageUrl}
                alt={feature.title}
                className={`${styles.featureImage} ${activeImageIndex === index ? styles.active : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}