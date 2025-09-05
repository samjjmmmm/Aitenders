// src/components/Portfolio_11.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Portfolio_11.module.css';

// Define a TypeScript type for a single project object
type Project = {
  title: string;
  value: string;
  description: string;
}

// Reusable card sub-component
const ProjectCard = ({ title, value, description }: Project) => (
  <div className={styles.projectCard}>
    <div className={styles.cardImagePlaceholder} />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardValue}>{value}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
);

// The main, "smart" component
export default function Portfolio_11({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  // Get the array of projects from the JSON file using the prefix
  const projects: Project[] = t(`${t_prefix}.projects`, { returnObjects: true }) || [];

  // Safety check to prevent crashing if translations are missing or incorrect
  if (!Array.isArray(projects) || projects.length === 0) {
    console.error(`Translation for '${t_prefix}.projects' did not return a valid array.`);
    return null; 
  }

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.heading}>{t(`${t_prefix}.title`)}</h2>
        </div>
        <div className={styles.portfolioGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              value={project.value}
              description={project.description}
            />
          ))}
          <div className={styles.ctaCard}>
            <button className={styles.viewAllButton}>{t(`${t_prefix}.cta_button`)}</button>
          </div>
        </div>
      </div>
    </section>
  );
}