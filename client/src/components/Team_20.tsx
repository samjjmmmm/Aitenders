// src/components/Team_20.tsx
import React from 'react';
import styles from '../styles/Team_20.module.css';

// --- DATA ---
// We put all the card data in an array. To add a new card, just add an object here!
const featuresData = [
  {
    title: 'Analyse Sémantique',
    description: 'Comprenez les nuances et les intentions cachées dans les documents grâce à une IA avancée.',
  },
  {
    title: 'Scoring de Risque',
    description: 'Évaluez automatiquement le niveau de risque de chaque clause pour prioriser vos efforts.',
  },
  {
    title: 'Génération de Synthèse',
    description: 'Obtenez des résumés clairs et concis des points clés de vos projets en quelques secondes.',
  },
  {
    title: 'Compliance Automatisée',
    description: 'Vérifiez la conformité de vos documents par rapport aux standards et régulations en vigueur.',
  },
  {
    title: 'Recommandations Stratégiques',
    description: 'Recevez des suggestions proactives pour optimiser vos réponses et renforcer votre position.',
  },
  {
    title: 'Tableau de Bord Intuitif',
    description: 'Visualisez toutes les données et analyses critiques sur une interface centralisée et facile à utiliser.',
  },
];

// --- REUSABLE SUB-COMPONENTS ---

// An Icon component to avoid repeating the SVG code
const FeatureIcon = () => (
  <svg className={styles.cardIcon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7285 9.18408V15.1841H7.72852V9.18408H17.7285ZM19.7285 3.18408H17.7285V6.18408H19.7285V3.18408ZM7.72852 3.18408H5.72852V6.18408H7.72852V3.18408ZM23.7285 7.18408H20.7285V9.18408H23.7285V7.18408ZM19.7285 7.18408H5.72852V17.1841H19.7285V7.18408ZM4.72852 7.18408H1.72852V9.18408H4.72852V7.18408ZM23.7285 15.1841H20.7285V17.1841H23.7285V15.1841ZM4.72852 15.1841H1.72852V17.1841H4.72852V15.1841ZM19.7285 18.1841H17.7285V21.1841H19.7285V18.1841ZM7.72852 18.1841H5.72852V21.1841H7.72852V18.1841Z" fill="currentColor" />
  </svg>
);

// A reusable card component
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps): JSX.Element => (
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


// --- MAIN COMPONENT ---

export default function Team_20(): JSX.Element {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.mainContent}>
        <div className={styles.introColumn}>
          <div className={styles.tag}>Impact additionnel</div>
          <h2 className={styles.heading}>Augmentez encore plus vos équipes</h2>
          <p className={styles.description}>
            Sur les offres semie-complexe, découvrez des fonctionnalités qui ajoutent une dimension stratégique à votre développement commercial.
          </p>
        </div>
        <div className={styles.gridColumn}>
          {/* We map over the data array to render each card automatically */}
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}