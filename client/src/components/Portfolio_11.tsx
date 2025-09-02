// src/components/Portfolio_11.tsx
import React from 'react';
import styles from '../styles/Portfolio_11.module.css';

// --- DATA ---
// We store the project data in an array. This makes the component clean and easy to update.
// Note: I've used the same project 3 times to match the Figma design, but you can easily make them unique.
const projectData = [
  {
    title: 'Centre Logistique Régional',
    value: 'Offre 8.5M€',
    description: 'Construction d\'un hub logistique moderne de 25,000 m² avec systèmes automatisés et aires de manœuvre. Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.',
  },
  {
    title: 'Centre Logistique Régional',
    value: 'Offre 8.5M€',
    description: 'Construction d\'un hub logistique moderne de 25,000 m² avec systèmes automatisés et aires de manœuvre. Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.',
  },
  {
    title: 'Centre Logistique Régional',
    value: 'Offre 8.5M€',
    description: 'Construction d\'un hub logistique moderne de 25,000 m² avec systèmes automatisés et aires de manœuvre. Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.',
  },
];

// --- REUSABLE SUB-COMPONENT ---

// A reusable card for a single portfolio project. This prevents code repetition.
interface ProjectCardProps {
  title: string;
  value: string;
  description: string;
}

const ProjectCard = ({ title, value, description }: ProjectCardProps): JSX.Element => (
  <div className={styles.projectCard}>
    <div className={styles.cardImagePlaceholder} />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardValue}>{value}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
);


// --- MAIN COMPONENT ---

export default function Portfolio_11(): JSX.Element {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.heading}>Déployé sur de nombreux projets</h2>
        </div>
        <div className={styles.portfolioGrid}>
          {/* We map over our data array to render the project cards dynamically */}
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              value={project.value}
              description={project.description}
            />
          ))}
          {/* The "View All" card is added separately after the mapped projects */}
          <div className={styles.ctaCard}>
            <button className={styles.viewAllButton}>View all</button>
          </div>
        </div>
      </div>
    </section>
  );
}