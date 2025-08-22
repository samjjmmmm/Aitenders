import { translationService } from "./translations";

// UC2 Translation Keys with French reference content
const uc2TranslationKeys = {
  // Hero Section
  'uc2.hero.badge': 'Pilotez les offres moyennes',
  'uc2.hero.title': 'Découvrez, pilotez et sécurisez chaque clause',
  'uc2.hero.span': 'dès le premier jour.',
  'uc2.hero.description': 'La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour : structuration IA du périmètre, détection immédiate des clauses critiques et pilotage dynamique des Q&A et versions. Vous réduisez de moitié votre temps d\'analyse, rassurez votre direction et livrez une réponse compétitive, sans risque de dernière minute.',
  'uc2.hero.demoButton': 'Réservez une Démo',
  'uc2.hero.downloadButton': 'Testez l\'impact →',

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
  'uc2.hero.downloadButton': 'Test the impact →',

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

// Spanish translations for UC2
const uc2SpanishTranslations = {
  'uc2.hero.badge': 'Gestionar ofertas medianas',
  'uc2.hero.title': 'Descubrir, gestionar y asegurar cada cláusula',
  'uc2.hero.span': 'desde el primer día.',
  'uc2.hero.description': 'La única plataforma diseñada para transformar las licitaciones de tamaño mediano (€1M–10M) en una visión contractual clara desde el primer día: estructuración AI del alcance, detección inmediata de cláusulas críticas, y gestión dinámica de Q&As y versiones.',
  'uc2.hero.demoButton': 'Reservar una Demo',
  'uc2.hero.downloadButton': 'Probar el impacto →',

  'uc2.painPoints.headline': 'Tu oferta, 100% clara, 0% sorpresas',
  'uc2.painPoints.text1': 'En proyectos de tamaño mediano, tus equipos manejan plazos ajustados, cláusulas críticas ocultas y versiones dispersas—con el riesgo de errores costosos e intercambios interminables.',
  'uc2.painPoints.text2': 'Con Aitenders, estructura automáticamente cada licitación desde el primer día, detecta instantáneamente cláusulas sensibles, y gestiona tus Q&As y versiones en un panel central.',
  'uc2.painPoints.optimizeButton': 'Optimizar Tus Proyectos Medianos!',
  'uc2.painPoints.demoButton': 'Ver la Demo',

  'uc2.audiences.proposalManagers': 'Gestores de Propuestas',
  'uc2.audiences.proposalManagersDesc': 'Gestionar proyectos medianos con complejidad moderada manteniendo calidad y plazos.',
  'uc2.audiences.technicalManagers': 'Gestores Técnicos',
  'uc2.audiences.technicalManagersDesc': 'Supervisar la consistencia técnica de propuestas medianas con flujos optimizados.',
  'uc2.audiences.commercialDirectors': 'Directores Comerciales',
  'uc2.audiences.commercialDirectorsDesc': 'Optimizar tu pipeline de proyectos medianos con visibilidad completa sobre rendimiento y riesgos.',

  'uc2.solutions.title1': 'Gestión inteligente de proyectos medianos',
  'uc2.solutions.desc1': 'AI especializada que coordina automáticamente recursos y optimiza procesos para proyectos intermedios',
  'uc2.solutions.title2': 'Flujos estandarizados y flexibles',
  'uc2.solutions.desc2': 'Metodologías probadas adaptadas a la complejidad de proyectos medianos con personalización según necesidades',
  'uc2.solutions.title3': 'Control de calidad automatizado',
  'uc2.solutions.desc3': 'Validación sistemática de entregables y monitoreo proactivo de riesgos para mantener la excelencia',

  'uc2.features.mainTitle': 'Tu co-piloto AI asegurando la gestión de tus proyectos medianos',
  'uc2.features.subtitle': 'Descubrir, gestionar y asegurar cada cláusula desde el primer día.',
  'uc2.features.feature1Title': 'Estructuración automática del alcance desde el día 1',
  'uc2.features.feature1Text': 'Gracias a la AI de Aitenders, tus documentos se segmentan y organizan instantáneamente.',
  'uc2.features.feature1Highlight': 'Una visión consolidada y priorizada, lista desde el primer día!',
  'uc2.features.feature2Title': 'Controlar cada cláusula crítica de tu proyecto',
  'uc2.features.feature2Text': 'Aitenders identifica y prioriza automáticamente todas las cláusulas sensibles.',
  'uc2.features.feature2Highlight': 'Validación contractual proactiva, desde el día 1',

  'common.nav.home': 'Inicio',
  'common.nav.solutions': 'Soluciones',
  'common.nav.pricing': 'Precios',
  'common.nav.contact': 'Contacto',
  'common.nav.language': 'Idioma',

  'common.cta.bookDemo': 'Reservar demo',
  'common.cta.learnMore': 'Saber más',
  'common.cta.getStarted': 'Comenzar',
  'common.cta.contactSales': 'Contactar Ventas',
};

// German translations for UC2
const uc2GermanTranslations = {
  'uc2.hero.badge': 'Mittelgroße Angebote verwalten',
  'uc2.hero.title': 'Entdecken, verwalten und sichern Sie jede Klausel',
  'uc2.hero.span': 'vom ersten Tag an.',
  'uc2.hero.description': 'Die einzige Plattform, die entwickelt wurde, um mittelgroße Ausschreibungen (€1M–10M) ab dem ersten Tag in eine klare vertragliche Sicht zu verwandeln: KI-Strukturierung des Umfangs, sofortige Erkennung kritischer Klauseln und dynamisches Management von Q&As und Versionen.',
  'uc2.hero.demoButton': 'Demo buchen',
  'uc2.hero.downloadButton': 'Wirkung testen →',

  'uc2.painPoints.headline': 'Ihr Angebot, 100% klar, 0% Überraschungen',
  'uc2.painPoints.text1': 'Bei mittelgroßen Projekten jonglieren Ihre Teams mit engen Terminen, versteckten kritischen Klauseln und verstreuten Versionen—mit dem Risiko kostspieliger Fehler und endloser Hin- und Her-Gespräche.',
  'uc2.painPoints.text2': 'Mit Aitenders strukturieren Sie automatisch jede Ausschreibung vom ersten Tag an, erkennen sofort sensible Klauseln und verwalten Ihre Q&As und Versionen in einem zentralen Cockpit.',
  'uc2.painPoints.optimizeButton': 'Optimieren Sie Ihre mittleren Projekte!',
  'uc2.painPoints.demoButton': 'Demo ansehen',

  'uc2.audiences.proposalManagers': 'Proposal Manager',
  'uc2.audiences.proposalManagersDesc': 'Verwalten Sie mittelgroße Projekte mit moderater Komplexität unter Beibehaltung von Qualität und Terminen.',
  'uc2.audiences.technicalManagers': 'Technische Manager',
  'uc2.audiences.technicalManagersDesc': 'Überwachen Sie die technische Konsistenz mittelgroßer Vorschläge mit optimierten Arbeitsabläufen.',
  'uc2.audiences.commercialDirectors': 'Kommerzielle Direktoren',
  'uc2.audiences.commercialDirectorsDesc': 'Optimieren Sie Ihre Pipeline für mittlere Projekte mit vollständiger Sichtbarkeit auf Leistung und Risiken.',

  'uc2.solutions.title1': 'Intelligentes Management mittelgroßer Projekte',
  'uc2.solutions.desc1': 'Spezialisierte KI, die automatisch Ressourcen koordiniert und Prozesse für Zwischenprojekte optimiert',
  'uc2.solutions.title2': 'Standardisierte und flexible Arbeitsabläufe',
  'uc2.solutions.desc2': 'Bewährte Methoden, angepasst an die Komplexität mittelgroßer Projekte mit Anpassung nach Bedarf',
  'uc2.solutions.title3': 'Automatisierte Qualitätskontrolle',
  'uc2.solutions.desc3': 'Systematische Validierung von Liefergegenständen und proaktive Risikoüberwachung zur Aufrechterhaltung der Exzellenz',

  'uc2.features.mainTitle': 'Ihr KI-Copilot zur Sicherung der Verwaltung Ihrer mittleren Projekte',
  'uc2.features.subtitle': 'Entdecken, verwalten und sichern Sie jede Klausel vom ersten Tag an.',
  'uc2.features.feature1Title': 'Automatische Strukturierung des Umfangs ab Tag 1',
  'uc2.features.feature1Text': 'Dank Aitenders KI werden Ihre Dokumente sofort segmentiert und organisiert.',
  'uc2.features.feature1Highlight': 'Eine konsolidierte und priorisierte Sicht, bereit ab dem ersten Tag!',
  'uc2.features.feature2Title': 'Kontrollieren Sie jede kritische Klausel Ihres Projekts',
  'uc2.features.feature2Text': 'Aitenders identifiziert und priorisiert automatisch alle sensiblen Klauseln.',
  'uc2.features.feature2Highlight': 'Proaktive vertragliche Validierung, ab Tag 1',

  'common.nav.home': 'Startseite',
  'common.nav.solutions': 'Lösungen',
  'common.nav.pricing': 'Preise',
  'common.nav.contact': 'Kontakt',
  'common.nav.language': 'Sprache',

  'common.cta.bookDemo': 'Demo buchen',
  'common.cta.learnMore': 'Mehr erfahren',
  'common.cta.getStarted': 'Loslegen',
  'common.cta.contactSales': 'Vertrieb kontaktieren',
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

    // Add Spanish translations
    for (const [key, spanishValue] of Object.entries(uc2SpanishTranslations)) {
      await translationService.setTranslation(key, 'es', spanishValue);
    }
    
    console.log('✅ UC2 Spanish translations seeded');

    // Add German translations
    for (const [key, germanValue] of Object.entries(uc2GermanTranslations)) {
      await translationService.setTranslation(key, 'de', germanValue);
    }
    
    console.log('✅ UC2 German translations seeded');
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