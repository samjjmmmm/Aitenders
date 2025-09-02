// src/components/Layout_356.tsx
import React from 'react';
import styles from '../styles/Layout_356.module.css';

// Define the properties (props) for our reusable FeatureSection component using TypeScript
interface FeatureSectionProps {
  tagline: string;
  heading: string;
  description: string;
  imagePosition: 'left' | 'right';
  stats?: { number: string; text: string }[]; // 'stats' is optional
  ctaText?: string; // 'ctaText' is optional
  useRalewayFont?: boolean; // Optional flag for the third heading's font
}

/**
 * A reusable component for displaying a feature with text and an image.
 */
const FeatureSection = ({
  tagline,
  heading,
  description,
  imagePosition,
  stats,
  ctaText,
  useRalewayFont,
}: FeatureSectionProps): JSX.Element => {
  // Conditionally apply a class to reverse the layout
  const sectionClasses = `${styles.featureSection} ${imagePosition === 'left' ? styles.imageOnLeft : ''}`;

  // Conditionally apply an inline style for the one heading that uses a different font
  const headingStyle = useRalewayFont ? { fontFamily: "'Raleway', sans-serif", fontWeight: 500 } : {};

  return (
    <section className={sectionClasses}>
      <div className={styles.textContainer}>
        <span className={styles.tagline}>{tagline}</span>
        <h2 className={styles.heading} style={headingStyle}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        {/* Only render the stats container if stats are provided */}
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

        {/* Only render the button if ctaText is provided */}
        {ctaText && <button className={styles.ctaButton}>{ctaText}</button>}
      </div>
      <div className={styles.imageContainer}>
        {/* This is where your image would go, e.g., <img src="..." alt="..." /> */}
      </div>
    </section>
  );
};

/**
 * The main component that assembles the three feature sections.
 */
export default function Layout_356(): JSX.Element {
  return (
    // Use a React Fragment to group the sections without adding an extra div
    <>
      <FeatureSection
        tagline="Cockpit opérationnel dès J+1"
        heading="Structuration automatique du projet"
        description="L’IA analyse vos AO, mappe chaque exigence et offre une vision claire du périmètre."
        imagePosition="right"
        stats={[
          { number: "100%", text: "des documents structurés, transformés en Jumeaux numérique" }
        ]}
        ctaText="+"
      />
      <FeatureSection
        tagline="Zéro clause oubliée"
        heading="Contrôlez chaque clause critique"
        description="Suivi continu des pénalités, responsabilités et délais. Chaque modification est signalée avec impact mesuré."
        imagePosition="left"
        ctaText="+"
      />
      <FeatureSection
        tagline="Historique contractuel maîtrisé"
        heading="Maîtrisez chaque évolution contractuelle"
        description="Q&A, versions et amendements centralisés, avec traçabilité complète des évolutions."
        imagePosition="right"
        useRalewayFont={true} // Use the special font for this heading
        ctaText="+"
      />
    </>
  );
}