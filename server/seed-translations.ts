import { translationService } from "./translations";

// UC2 Translation Keys with French reference content
const uc2TranslationKeys = {
  // Hero Section
  'uc2.hero.badge': 'Pilotez les offres moyennes',
  'uc2.hero.title': 'Découvrez, pilotez et sécurisez chaque clause',
  'uc2.hero.span': 'dès le premier jour.',
  'uc2.hero.description': 'La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour : structuration IA du périmètre, détection immédiate des clauses critiques et pilotage dynamique des Q&A et versions. Vous réduisez de moitié votre temps d\'analyse, rassurez votre direction et livrez une réponse compétitive, sans risque de dernière minute.',
  'uc2.hero.demoButton': 'Réservez une Démo',
  'uc2.hero.downloadButton': 'Téléchargez le cas d\'usage →',

  // Pain Points Section
  'uc2.painPoints.headline': 'Votre offre, 100 % claire, 0 % surprise',
  'uc2.painPoints.text1': 'Sur les projets moyen, vos équipes jonglent entre délais serrés, clauses critiques cachées et versions dispersées, au risque d\'erreurs coûteuses et d\'allers‑retours interminables.',
  'uc2.painPoints.text2': 'Avec Aitenders, structurez automatiquement chaque dossier dès le jour 1, détectez instantanément les clauses sensibles et pilotez vos Q&A et versions dans un cockpit centralisé. Résultat : une analyse deux fois plus rapide, zéro clause oubliée, et une offre compétitive validée sans stress.',
  'uc2.painPoints.optimizeButton': 'Optimisez Vos Projets Moyens!',
  'uc2.painPoints.demoButton': 'Voir la Démonstration',

  // Target Audiences
  'uc2.audiences.proposalManagers': 'Proposal Managers',
  'uc2.audiences.proposalManagersDesc': 'Gérez des projets moyens avec complexité modérée tout en maintenant la qualité et les délais. Coordonnez efficacement les équipes techniques et commerciales pour produire des offres structurées et convaincantes.',
  'uc2.audiences.technicalManagers': 'Managers techniques',
  'uc2.audiences.technicalManagersDesc': 'Supervisez la cohérence technique des propositions moyennes avec des workflows optimisés. Assurez la qualité des livrables techniques tout en respectant les contraintes budgétaires et temporelles.',
  'uc2.audiences.commercialDirectors': 'Directeurs commerciaux',
  'uc2.audiences.commercialDirectorsDesc': 'Optimisez votre pipeline de projets moyens avec une visibilité complète sur les performances et les risques. Maximisez le taux de conversion grâce à des processus standardisés et efficaces.',

  // Solutions
  'uc2.solutions.title1': 'Gestion intelligente des projets moyens',
  'uc2.solutions.desc1': 'IA spécialisée qui coordonne automatiquement les ressources et optimise les processus pour les projets intermédiaires',
  'uc2.solutions.title2': 'Workflows standardisés et flexibles',
  'uc2.solutions.desc2': 'Méthodologies éprouvées adaptées à la complexité des projets moyens avec personnalisation selon les besoins',
  'uc2.solutions.title3': 'Contrôle qualité automatisé',
  'uc2.solutions.desc3': 'Validation systématique des livrables et suivi proactif des risques pour maintenir l\'excellence',

  // Features
  'uc2.features.mainTitle': 'Votre copilote IA qui sécurise le pilotage de vos projets moyens',
  'uc2.features.subtitle': 'Découvrez, pilotez et sécurisez chaque clause dès le premier jour.',
  'uc2.features.feature1Title': 'Structuration automatique du périmètre dès J+1',
  'uc2.features.feature1Text': 'Grâce à l\'IA d\'Aitenders, vos documents sont instantanément segmentés et organisés : lots, sous‑ensembles et critères contractuels sont classifiés et structurés en quelques minutes. Le Proposal Manager dispose immédiatement d\'une vision consolidée du périmètre : points bloquants et clauses sensibles sont identifiés sans effort, permettant une décision « go / no‑go » éclairée dès le premier jour.',
  'uc2.features.feature1Highlight': 'Une vision consolidée et priorisée, prête dès le premier jour !',
  'uc2.features.feature2Title': 'Maîtrisez chaque clause critique de votre projet',
  'uc2.features.feature2Text': 'Aitenders identifie et priorise automatiquement toutes les clauses sensibles : responsabilités, engagements, pénalités et conditions critiques. En parallèle, l\'IA vérifie la cohérence documentaire et signale contradictions, doublons et lacunes, pour une analyse fiable et complète. Le Proposal Manager obtient en quelques minutes une vision claire des zones de risque, prêtes à être corrigées et validées sans perte de temps.',
  'uc2.features.feature2Highlight': 'Validation contractuelle proactive, dès J+1',

  // Common Navigation
  'common.nav.home': 'Accueil',
  'common.nav.solutions': 'Solutions',
  'common.nav.pricing': 'Tarifs',
  'common.nav.contact': 'Contact',
  'common.nav.language': 'Langue',

  // Common CTA
  'common.cta.bookDemo': 'Réserver une démo',
  'common.cta.learnMore': 'En savoir plus',
  'common.cta.getStarted': 'Commencer',
  'common.cta.contactSales': 'Contact Commercial',
};

// English translations for UC2
const uc2EnglishTranslations = {
  'uc2.hero.badge': 'Manage medium offers',
  'uc2.hero.title': 'Discover, manage and secure every clause',
  'uc2.hero.span': 'from day one.',
  'uc2.hero.description': 'The only platform designed to transform medium-size tenders (€1M–10M) into a clear contractual vision from the very first day: AI structuring of scope, immediate detection of critical clauses, and dynamic management of Q&As and versions. You cut analysis time in half, reassure your management, and deliver a competitive answer with no last-minute risk.',
  'uc2.hero.demoButton': 'Book a Demo',
  'uc2.hero.downloadButton': 'Download the use case →',

  'uc2.painPoints.headline': 'Your offer, 100% clear, 0% surprise',
  'uc2.painPoints.text1': 'On medium-size projects, your teams juggle tight deadlines, hidden critical clauses and scattered versions—at the risk of costly errors and endless back-and-forths.',
  'uc2.painPoints.text2': 'With Aitenders, automatically structure each tender from day one, instantly detect sensitive clauses, and manage your Q&As and versions in a central cockpit. Result: analysis twice as fast, no forgotten clauses, and a validated, competitive offer with no stress.',
  'uc2.painPoints.optimizeButton': 'Optimize Your Medium Projects!',
  'uc2.painPoints.demoButton': 'See the Demo',

  'uc2.audiences.proposalManagers': 'Proposal Managers',
  'uc2.audiences.proposalManagersDesc': 'Manage medium projects with moderate complexity while maintaining quality and deadlines. Effectively coordinate technical and commercial teams to produce structured and compelling offers.',
  'uc2.audiences.technicalManagers': 'Technical Managers',
  'uc2.audiences.technicalManagersDesc': 'Supervise the technical consistency of medium proposals with optimized workflows. Ensure the quality of technical deliverables while respecting budgetary and time constraints.',
  'uc2.audiences.commercialDirectors': 'Commercial Directors',
  'uc2.audiences.commercialDirectorsDesc': 'Optimize your medium project pipeline with complete visibility on performance and risks. Maximize conversion rate through standardized and efficient processes.',

  'uc2.solutions.title1': 'Intelligent medium project management',
  'uc2.solutions.desc1': 'Specialized AI that automatically coordinates resources and optimizes processes for intermediate projects',
  'uc2.solutions.title2': 'Standardized and flexible workflows',
  'uc2.solutions.desc2': 'Proven methodologies adapted to medium project complexity with customization according to needs',
  'uc2.solutions.title3': 'Automated quality control',
  'uc2.solutions.desc3': 'Systematic validation of deliverables and proactive risk monitoring to maintain excellence',

  'uc2.features.mainTitle': 'Your AI co-pilot securing the management of your medium projects',
  'uc2.features.subtitle': 'Discover, manage and secure every clause from day one.',
  'uc2.features.feature1Title': 'Automatic structuring of scope from day 1',
  'uc2.features.feature1Text': 'Thanks to Aitenders\' AI, your documents are instantly segmented and organized: lots, sub-packages and contractual criteria are classified and structured within minutes. The Proposal Manager immediately has a consolidated vision of the scope: blocking points and sensitive clauses are identified effortlessly, enabling an informed \'go / no-go\' decision from day one.',
  'uc2.features.feature1Highlight': 'A consolidated and prioritized vision, ready from the first day!',
  'uc2.features.feature2Title': 'Control every critical clause of your project',
  'uc2.features.feature2Text': 'Aitenders automatically identifies and prioritizes all sensitive clauses: responsibilities, commitments, penalties, and critical conditions. At the same time, the AI checks document consistency and flags contradictions, duplicates, and gaps, for a reliable and complete analysis. The Proposal Manager gets a clear view of risk areas in minutes, ready to be corrected and validated without wasting time.',
  'uc2.features.feature2Highlight': 'Proactive contractual validation, from day 1',

  'common.nav.home': 'Home',
  'common.nav.solutions': 'Solutions',
  'common.nav.pricing': 'Pricing',
  'common.nav.contact': 'Contact',
  'common.nav.language': 'Language',

  'common.cta.bookDemo': 'Book a demo',
  'common.cta.learnMore': 'Learn more',
  'common.cta.getStarted': 'Get started',
  'common.cta.contactSales': 'Contact Sales',
};

// Initialize languages and UC2 translations
export async function seedTranslations() {
  console.log('🌱 Seeding translations...');
  
  try {
    // Initialize supported languages
    await translationService.initializeLanguages();
    console.log('✅ Languages initialized');

    // Add UC2 translation keys with French content
    for (const [key, frenchValue] of Object.entries(uc2TranslationKeys)) {
      await translationService.setTranslation(key, 'fr', frenchValue);
    }
    
    console.log('✅ UC2 French translations seeded');

    // Add English translations
    for (const [key, englishValue] of Object.entries(uc2EnglishTranslations)) {
      await translationService.setTranslation(key, 'en', englishValue);
    }
    
    console.log('✅ UC2 English translations seeded');
    console.log(`📊 Total keys: ${Object.keys(uc2TranslationKeys).length}`);
    
    return true;
  } catch (error) {
    console.error('❌ Error seeding translations:', error);
    throw error;
  }
}

// Run if called directly (ES module compatible)
if (import.meta.url === `file://${process.argv[1]}`) {
  seedTranslations()
    .then(() => {
      console.log('🎉 Translation seeding completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Translation seeding failed:', error);
      process.exit(1);
    });
}