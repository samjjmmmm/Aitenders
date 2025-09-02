// client/src/components/Layout_401_AI_Copilot.tsx
import React from 'react';
import styles from '../styles/Layout_401.module.css';

// Placeholder Icon Component - you can replace the SVG content with your DALL-E generated icons
const AnalyseIntelligenteIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9.00001V9.01001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SuiviAutomatiseIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AlertesProactivesIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className={styles.Column_9253_31235}>
    <div className={styles.IconContainer}>
      {icon}
    </div>
    <span className={styles.FeatureTitle}>{title}</span>
    <span className={styles.FeatureDescription}>{description}</span>
  </div>
);

export default function Layout_401_AI_Copilot() {
  return (
    <section className={styles.Layout_401_9248_28988}>
      <div className={styles.Container_9253_31226}>
        <div className={styles.SectionTitle_9253_31227}>
          <div className={styles.TaglineWrapper_9253_31228}>
            <span className={styles.Tagline_9253_31229}>AI Agents</span>
          </div>
          <div className={styles.Content_9253_31230}>
            <h2 className={styles.Heading_9253_31231}>Votre copilote IA qui sécurise la gestion de vos projets moyens</h2>
            <p className={styles.Text_9253_31232}>
              La seule plateforme conçue pour transformer des dossiers moyens (1 à 10&nbsp;M€) en une vision contractuelle claire dès le premier jour
            </p>
          </div>
        </div>
        <div className={styles.Row_9253_31234}>
          <Feature 
            icon={<AnalyseIntelligenteIcon />} 
            title="Analyse Intelligente" 
            description="Analyse automatique des documents contractuels pour identifier les risques et opportunités." 
          />
          <Feature 
            icon={<SuiviAutomatiseIcon />} 
            title="Suivi Automatisé" 
            description="Suivi en temps réel des engagements contractuels et des livrables." 
          />
          <Feature 
            icon={<AlertesProactivesIcon />} 
            title="Alertes Proactives" 
            description="Anticipation des risques et alertes automatiques pour éviter les dérives." 
          />
        </div>
      </div>
    </section>
  );
}