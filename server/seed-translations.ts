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
  'uc2.features.feature3Title': 'Suivi centralisé et dynamique des versions et des Q&A',
  'uc2.features.feature3Text': 'Toutes vos Q&A, versions et ajustements de documents sont consolidés et trackés automatiquement par l\'IA. Le Proposal Manager suit chaque modification en temps réel, visualise les écarts, reçoit des alertes et s\'assure que rien n\'est oublié ou modifié sans validation. Fini les suivis fragmentés par email ou tableurs : tout est centralisé dans un cockpit fluide et fiable.',

  // Results Section
  'uc2.results_section.headline': 'Ce que gagnent concrètement nos utilisateurs sur les offres moyennes',
  'uc2.results_section.subtitle': 'Des résultats décisifs pour les acheteurs et équipes d\'offres',
  'uc2.results_section.card1_title': 'Directeur Commercial ou Directeur d\'Offres',
  'uc2.results_section.card1_subtitle': 'Décision rapide, crédibilité renforcée, zéro surprise',
  'uc2.results_section.card1_text': 'Assurez-vous dès le jour 1 que chaque clause critique est identifiée, chaque engagement maîtrisé, et chaque risque couvert. Vous entrez en comité avec une offre solide, immédiatement validable, sans charge mentale et sans escalade inutile.',
  'uc2.results_section.card1_point1': 'Aucune clause oubliée, aucune incohérence détectée trop tard',
  'uc2.results_section.card1_point2': 'Décision go / no-go prise sans retard',
  'uc2.results_section.card1_point3': 'Crédibilité renforcée devant la direction',
  'uc2.results_section.card2_title': 'Proposal Manager, Contract Manager ou Chef de Projet',
  'uc2.results_section.card2_subtitle': 'Analyse claire, pilotage fluide, zéro stress',
  'uc2.results_section.card2_text': 'Démarrez à J+1 avec une base structurée et priorisée générée par l\'IA : chaque critère est classifié, chaque clause sensible détectée, chaque version trackée. Vous passez de subir la pression à être pilote stratégique, capable de prouver la solidité de votre offre à tout moment.',
  'uc2.results_section.card2_point1': 'Analyse prête dès le premier jour, aucun tri manuel',
  'uc2.results_section.card2_point2': 'Aucun stress, aucune surprise, aucun aller-retour inutile',
  'uc2.results_section.card2_point3': 'Maîtrise complète de chaque clause et chaque version',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% du temps d\'analyse initial',
  'uc2.results_section.kpis.clauses': '100% des clauses critiques identifiées',
  'uc2.results_section.kpis.surprise': '0 surprise, aucun défi de dernière minute',
  'uc2.results_section.kpis.extra': 'Plus rapide, plus propre, plus compétitif',

  // Solution Section Main Title
  'uc2.solution_section.mainTitle': 'Votre copilote IA qui sécurise la gestion de vos projets moyens',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Simulateur ROI intégré',
  'uc2.roi_simulator.headline': 'Calculez votre ROI en temps réel',
  'uc2.roi_simulator.subtext': 'Simulateur intelligent intégré à la page pour une analyse immédiate de vos projets',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Nos cas d\'usage',
  'uc2.chat_actions.demo': 'Démo UC2',
  'uc2.chat_actions.roi': 'Calculateur ROI',
  'uc2.chat_actions.contact': 'Contacter un Expert',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Nos appels d\'offres de référence sur les projets moyens',
  'uc2.reference_projects.subtitle': 'Découvrez comment nos clients transforment leurs projets moyens avec l\'IA Aitenders',
  'uc2.reference_projects.project1.title': 'Centre Logistique Régional',
  'uc2.reference_projects.project1.sector': 'Logistique',
  'uc2.reference_projects.project1.offer': 'Offre : 8,5 M€',
  'uc2.reference_projects.project1.desc': 'Construction d\'un hub logistique moderne de 25 000 m² avec systèmes automatisés et aires de manœuvre. Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.',
  'uc2.reference_projects.project1.impact.productivity': 'Productivité : +55% de temps de coordination économisé',
  'uc2.reference_projects.project1.impact.compliance': 'Conformité : Standards logistiques respectés',
  'uc2.reference_projects.project1.impact.traceability': 'Traçabilité : Suivi multi-lots intégré',
  'uc2.reference_projects.project1.impact.collaboration': 'Collaboration : 10 équipes synchronisées',
  'uc2.reference_projects.project2.title': 'Réhabilitation Quartier Urbain',
  'uc2.reference_projects.project2.sector': 'Urbain',
  'uc2.reference_projects.project2.offer': 'Offre : 6,2 M€',
  'uc2.reference_projects.project2.desc': 'Rénovation complète d\'un quartier résidentiel avec 200 logements, espaces verts et commerces. Gestion coordonnée des réseaux, voirie et contraintes d\'occupation sur 5 hectares.',
  'uc2.reference_projects.project2.impact.productivity': 'Productivité : +62% d\'études plus rapides',
  'uc2.reference_projects.project2.impact.compliance': 'Conformité : Urbanisme validé',
  'uc2.reference_projects.project2.impact.traceability': 'Traçabilité : Phases coordonnées',
  'uc2.reference_projects.project2.impact.collaboration': 'Collaboration : 15 corps d\'état impliqués',
  'uc2.reference_projects.project3.title': 'Campus Universitaire Moderne',
  'uc2.reference_projects.project3.sector': 'Éducation',
  'uc2.reference_projects.project3.offer': 'Offre : 4,8 M€',
  'uc2.reference_projects.project3.desc': 'Construction d\'un campus de 15 000 m² avec amphithéâtres, laboratoires et résidences étudiantes. Intégration des technologies numériques et espaces collaboratifs sur un site de 8 hectares.',
  'uc2.reference_projects.project3.impact.productivity': 'Productivité : +48% de réduction du temps',
  'uc2.reference_projects.project3.impact.compliance': 'Conformité : Standards académiques',
  'uc2.reference_projects.project3.impact.traceability': 'Traçabilité : Validation continue',
  'uc2.reference_projects.project3.impact.collaboration': 'Collaboration : 18 lots coordonnés',

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

  // Client Section
  'client.title': 'Approuvé par les Leaders de l\'Industrie',
  'client.subtitle': 'Rejoignez les entreprises de premier plan qui font confiance à Aitenders pour leur gestion d\'appels d\'offres',
};

// English translations for UC2
const uc2EnglishTranslations = {
  'uc2.hero.badge': 'Manage medium offers',
  'uc2.hero.title': 'Discover, manage and secure every clause',
  'uc2.hero.span': 'from day one.',
  'uc2.hero.description': 'The only platform designed to transform medium-size tenders (€1M–10M) into a clear contractual vision from the very first day: AI structuring of scope, immediate detection of critical clauses, and dynamic management of Q&As and versions.',
  'uc2.hero.demoButton': 'Book a Demo',
  'uc2.hero.downloadButton': 'Test the impact →',

  'uc2.painPoints.headline': 'Your offer, 100% clear, 0% surprise',
  'uc2.painPoints.text1': 'On medium-size projects, your teams juggle tight deadlines, hidden critical clauses and scattered versions—at the risk of costly errors and endless back-and-forths.',
  'uc2.painPoints.text2': 'With Aitenders, automatically structure each tender from day one, instantly detect sensitive clauses, and manage your Q&As and versions in a central cockpit.',
  'uc2.painPoints.optimizeButton': 'Optimize Your Medium Projects!',
  'uc2.painPoints.demoButton': 'See the Demo',

  'uc2.audiences.proposalManagers': 'Proposal Managers',
  'uc2.audiences.proposalManagersDesc': 'Manage medium projects with moderate complexity while maintaining quality and deadlines.',
  'uc2.audiences.technicalManagers': 'Technical Managers',
  'uc2.audiences.technicalManagersDesc': 'Supervise the technical consistency of medium proposals with optimized workflows.',
  'uc2.audiences.commercialDirectors': 'Commercial Directors',
  'uc2.audiences.commercialDirectorsDesc': 'Optimize your pipeline of medium projects with complete visibility on performance and risks.',

  'uc2.solutions.title1': 'Intelligent medium project management',
  'uc2.solutions.desc1': 'Specialized AI that automatically coordinates resources and optimizes processes for intermediate projects',
  'uc2.solutions.title2': 'Standardized and flexible workflows',
  'uc2.solutions.desc2': 'Proven methodologies adapted to medium project complexity with customization according to needs',
  'uc2.solutions.title3': 'Automated quality control',
  'uc2.solutions.desc3': 'Systematic validation of deliverables and proactive risk monitoring to maintain excellence',

  'uc2.features.mainTitle': 'Your AI co-pilot securing the management of your medium projects',
  'uc2.features.subtitle': 'Discover, manage and secure every clause from day one.',
  'uc2.features.feature1Title': 'Automatic scope structuring from day 1',
  'uc2.features.feature1Text': 'Thanks to Aitenders AI, your documents are instantly segmented and organized.',
  'uc2.features.feature1Highlight': 'A consolidated and prioritized vision, ready from day one!',
  'uc2.features.feature2Title': 'Control every critical clause of your project',
  'uc2.features.feature2Text': 'Aitenders automatically identifies and prioritizes all sensitive clauses.',
  'uc2.features.feature2Highlight': 'Proactive contractual validation, from day 1',
  'uc2.features.feature3Title': 'Centralized and dynamic tracking of versions and Q&As',
  'uc2.features.feature3Text': 'All your Q&As, versions, and document adjustments are consolidated and tracked automatically by AI. The Proposal Manager tracks each modification in real-time, visualizes discrepancies, receives alerts, and ensures nothing is forgotten or modified without validation. No more fragmented tracking via email or spreadsheets: everything is centralized in a fluid and reliable cockpit.',

  // Results Section
  'uc2.results_section.headline': 'What our users concretely gain for medium-size tenders',
  'uc2.results_section.subtitle': 'Decisive results for buyers and tender teams',
  'uc2.results_section.card1_title': 'Commercial Director or Bid Director',
  'uc2.results_section.card1_subtitle': 'Fast decision, enhanced credibility, zero surprises',
  'uc2.results_section.card1_text': 'Ensure from day one that every critical clause is identified, every commitment under control, and every risk covered. You walk into the committee with a solid, immediately approvable offer, with no mental load and no unnecessary escalation.',
  'uc2.results_section.card1_point1': 'No forgotten clause, no inconsistency detected too late',
  'uc2.results_section.card1_point2': 'Go / No-Go decision made without delay',
  'uc2.results_section.card1_point3': 'Credibility strengthened before top management',
  'uc2.results_section.card2_title': 'Proposal Manager, Contract Manager or Project Manager',
  'uc2.results_section.card2_subtitle': 'Clear analysis, smooth tracking, zero stress',
  'uc2.results_section.card2_text': 'Start on day +1 with a structured and prioritized base generated by AI: every criterion is classified, every sensitive clause detected, every version tracked. You go from being under pressure to being a strategic pilot, able to prove your offer\'s solidity at any time.',
  'uc2.results_section.card2_point1': 'Analysis ready from day one, no manual sorting',
  'uc2.results_section.card2_point2': 'No stress, no surprises, no unnecessary back-and-forth',
  'uc2.results_section.card2_point3': 'Complete control over every clause and every version',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% of initial analysis time',
  'uc2.results_section.kpis.clauses': '100% of critical clauses identified',
  'uc2.results_section.kpis.surprise': '0 surprise, no last-minute challenge',
  'uc2.results_section.kpis.extra': 'Faster, cleaner, more competitive offer',

  // Solution Section Main Title
  'uc2.solution_section.mainTitle': 'Your AI co-pilot securing the management of your medium projects',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Integrated ROI Simulator',
  'uc2.roi_simulator.headline': 'Calculate your ROI in real time',
  'uc2.roi_simulator.subtext': 'Smart simulator integrated into the page for immediate analysis of your projects',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Our use cases',
  'uc2.chat_actions.demo': 'UC2 Demo',
  'uc2.chat_actions.roi': 'ROI Calculator',
  'uc2.chat_actions.contact': 'Contact Expert',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Our reference tenders on medium projects',
  'uc2.reference_projects.subtitle': 'Discover how our clients transform their medium projects with Aitenders AI',
  'uc2.reference_projects.project1.title': 'Regional Logistics Center',
  'uc2.reference_projects.project1.sector': 'Logistics',
  'uc2.reference_projects.project1.offer': 'Offer: €8.5 Million',
  'uc2.reference_projects.project1.desc': 'Construction of a modern 25,000 m² logistics hub with automated systems and maneuvering areas.',
  'uc2.reference_projects.project1.impact.productivity': 'Productivity: +55% coordination time saved',
  'uc2.reference_projects.project1.impact.compliance': 'Compliance: Logistics standards respected',
  'uc2.reference_projects.project1.impact.traceability': 'Traceability: Integrated multi-lot tracking',
  'uc2.reference_projects.project1.impact.collaboration': 'Collaboration: 10 teams synchronized',
  'uc2.reference_projects.project2.title': 'Urban Neighborhood Rehabilitation',
  'uc2.reference_projects.project2.sector': 'Urban',
  'uc2.reference_projects.project2.offer': 'Offer: €6.2 Million',
  'uc2.reference_projects.project2.desc': 'Complete renovation of a residential neighborhood with 200 units, green spaces and shops.',
  'uc2.reference_projects.project2.impact.productivity': 'Productivity: +62% faster studies',
  'uc2.reference_projects.project2.impact.compliance': 'Compliance: Urban planning validated',
  'uc2.reference_projects.project2.impact.traceability': 'Traceability: Phases coordinated',
  'uc2.reference_projects.project2.impact.collaboration': 'Collaboration: 15 trades involved',
  'uc2.reference_projects.project3.title': 'Modern University Campus',
  'uc2.reference_projects.project3.sector': 'Education',
  'uc2.reference_projects.project3.offer': 'Offer: €4.8 Million',
  'uc2.reference_projects.project3.desc': 'Construction of a 15,000 m² campus with lecture halls, laboratories and student residences.',
  'uc2.reference_projects.project3.impact.productivity': 'Productivity: +48% time reduction',
  'uc2.reference_projects.project3.impact.compliance': 'Compliance: Academic standards',
  'uc2.reference_projects.project3.impact.traceability': 'Traceability: Continuous validation',
  'uc2.reference_projects.project3.impact.collaboration': 'Collaboration: 18 lots coordinated',

  'common.nav.home': 'Home',
  'common.nav.solutions': 'Solutions',
  'common.nav.pricing': 'Pricing',
  'common.nav.contact': 'Contact',
  'common.nav.language': 'Language',

  'common.cta.bookDemo': 'Book a demo',
  'common.cta.learnMore': 'Learn more',
  'common.cta.getStarted': 'Get started',
  'common.cta.contactSales': 'Contact Sales',

  // Client Section
  'client.title': 'Trusted by Industry Leaders',
  'client.subtitle': 'Join leading companies who trust Aitenders for their tender management',
};

// Spanish translations for UC2
const uc2SpanishTranslations = {
  'uc2.hero.badge': 'Gestionar ofertas medianas',
  'uc2.hero.title': 'Descubrir, gestionar y asegurar cada cláusula',
  'uc2.hero.span': 'desde el primer día.',
  'uc2.hero.description': 'La única plataforma diseñada para transformar las licitaciones de tamaño mediano (€1M–10M) en una visión contractual clara desde el primer día.',
  'uc2.hero.demoButton': 'Reservar una Demo',
  'uc2.hero.downloadButton': 'Probar el impacto →',

  'uc2.painPoints.headline': 'Tu oferta, 100% clara, 0% sorpresas',
  'uc2.painPoints.text1': 'En proyectos de tamaño mediano, tus equipos manejan plazos ajustados, cláusulas críticas ocultas y versiones dispersas.',
  'uc2.painPoints.text2': 'Con Aitenders, estructura automáticamente cada licitación desde el primer día, detecta instantáneamente cláusulas sensibles.',
  'uc2.painPoints.optimizeButton': 'Optimizar Tus Proyectos Medianos!',
  'uc2.painPoints.demoButton': 'Ver la Demo',

  'uc2.audiences.proposalManagers': 'Gestores de Propuestas',
  'uc2.audiences.proposalManagersDesc': 'Gestionar proyectos medianos con complejidad moderada manteniendo calidad y plazos.',
  'uc2.audiences.technicalManagers': 'Gestores Técnicos',
  'uc2.audiences.technicalManagersDesc': 'Supervisar la consistencia técnica de propuestas medianas con flujos optimizados.',
  'uc2.audiences.commercialDirectors': 'Directores Comerciales',
  'uc2.audiences.commercialDirectorsDesc': 'Optimizar tu pipeline de proyectos medianos con visibilidad completa.',

  'uc2.solutions.title1': 'Gestión inteligente de proyectos medianos',
  'uc2.solutions.desc1': 'AI especializada que coordina automáticamente recursos y optimiza procesos',
  'uc2.solutions.title2': 'Flujos estandarizados y flexibles',
  'uc2.solutions.desc2': 'Metodologías probadas adaptadas a la complejidad de proyectos medianos',
  'uc2.solutions.title3': 'Control de calidad automatizado',
  'uc2.solutions.desc3': 'Validación sistemática de entregables y monitoreo proactivo de riesgos',

  'uc2.features.mainTitle': 'Tu co-piloto AI asegurando la gestión de tus proyectos medianos',
  'uc2.features.subtitle': 'Descubrir, gestionar y asegurar cada cláusula desde el primer día.',
  'uc2.features.feature1Title': 'Estructuración automática del alcance desde el día 1',
  'uc2.features.feature1Text': 'Gracias a la AI de Aitenders, tus documentos se segmentan y organizan instantáneamente.',
  'uc2.features.feature1Highlight': 'Una visión consolidada y priorizada, lista desde el primer día!',
  'uc2.features.feature2Title': 'Controlar cada cláusula crítica de tu proyecto',
  'uc2.features.feature2Text': 'Aitenders identifica y prioriza automáticamente todas las cláusulas sensibles.',
  'uc2.features.feature2Highlight': 'Validación contractual proactiva, desde el día 1',
  'uc2.features.feature3Title': 'Seguimiento centralizado y dinámico de versiones y Q&A',
  'uc2.features.feature3Text': 'Todas tus Q&A, versiones y ajustes de documentos se consolidan y rastrean automáticamente por la IA. El Gestor de Propuestas realiza un seguimiento de cada modificación en tiempo real, visualiza discrepancias, recibe alertas y se asegura de que nada se olvide ni se modifique sin validación. Se acabaron los seguimientos fragmentados por correo electrónico o hojas de cálculo: todo se centraliza en un cockpit fluido y fiable.',

  // Results Section
  'uc2.results_section.headline': 'Lo que ganan concretamente nuestros usuarios en ofertas medianas',
  'uc2.results_section.subtitle': 'Resultados decisivos para compradores y equipos de ofertas',
  'uc2.results_section.card1_title': 'Director Comercial o Director de Ofertas',
  'uc2.results_section.card1_subtitle': 'Decisión rápida, credibilidad reforzada, cero sorpresas',
  'uc2.results_section.card1_text': 'Asegúrese desde el día 1 que cada cláusula crítica esté identificada, cada compromiso controlado y cada riesgo cubierto. Entra al comité con una oferta sólida, inmediatamente validable, sin carga mental y sin escalada innecesaria.',
  'uc2.results_section.card1_point1': 'Ninguna cláusula olvidada, ninguna inconsistencia detectada demasiado tarde',
  'uc2.results_section.card1_point2': 'Decisión go / no-go tomada sin retraso',
  'uc2.results_section.card1_point3': 'Credibilidad reforzada ante la dirección',
  'uc2.results_section.card2_title': 'Gestor de Propuestas, Gestor de Contratos o Jefe de Proyecto',
  'uc2.results_section.card2_subtitle': 'Análisis claro, seguimiento fluido, cero estrés',
  'uc2.results_section.card2_text': 'Comience en J+1 con una base estructurada y priorizada generada por IA: cada criterio está clasificado, cada cláusula sensible detectada, cada versión rastreada. Pasa de estar bajo presión a ser un piloto estratégico, capaz de demostrar la solidez de su oferta en cualquier momento.',
  'uc2.results_section.card2_point1': 'Análisis listo desde el primer día, sin clasificación manual',
  'uc2.results_section.card2_point2': 'Sin estrés, sin sorpresas, sin ida y vuelta innecesarios',
  'uc2.results_section.card2_point3': 'Control completo de cada cláusula y cada versión',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% del tiempo de análisis inicial',
  'uc2.results_section.kpis.clauses': '100% de las cláusulas críticas identificadas',
  'uc2.results_section.kpis.surprise': '0 sorpresas, ningún desafío de última hora',
  'uc2.results_section.kpis.extra': 'Más rápido, más limpio, más competitivo',

  // Solution Section Main Title
  'uc2.solution_section.mainTitle': 'Tu copiloto IA que asegura la gestión de tus proyectos medianos',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Simulador ROI Integrado',
  'uc2.roi_simulator.headline': 'Calcula tu ROI en tiempo real',
  'uc2.roi_simulator.subtext': 'Simulador inteligente integrado en la página para análisis inmediato de tus proyectos',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Nuestros casos de uso',
  'uc2.chat_actions.demo': 'Demo UC2',
  'uc2.chat_actions.roi': 'Calculadora ROI',
  'uc2.chat_actions.contact': 'Contactar Experto',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Nuestras licitaciones de referencia en proyectos medianos',
  'uc2.reference_projects.subtitle': 'Descubre cómo nuestros clientes transforman sus proyectos medianos',
  'uc2.reference_projects.project1.title': 'Centro Logístico Regional',
  'uc2.reference_projects.project1.sector': 'Logística',
  'uc2.reference_projects.project1.offer': 'Oferta: €8,5 Millones',
  'uc2.reference_projects.project1.desc': 'Construcción de un centro logístico moderno de 25.000 m².',
  'uc2.reference_projects.project1.impact.productivity': 'Productividad: +55% tiempo de coordinación ahorrado',
  'uc2.reference_projects.project1.impact.compliance': 'Cumplimiento: Estándares logísticos respetados',
  'uc2.reference_projects.project1.impact.traceability': 'Trazabilidad: Seguimiento multi-lote integrado',
  'uc2.reference_projects.project1.impact.collaboration': 'Colaboración: 10 equipos sincronizados',
  'uc2.reference_projects.project2.title': 'Rehabilitación Barrio Urbano',
  'uc2.reference_projects.project2.sector': 'Urbano',
  'uc2.reference_projects.project2.offer': 'Oferta: €6,2 Millones',
  'uc2.reference_projects.project2.desc': 'Renovación completa de un barrio residencial con 200 viviendas.',
  'uc2.reference_projects.project2.impact.productivity': 'Productividad: +62% estudios más rápidos',
  'uc2.reference_projects.project2.impact.compliance': 'Cumplimiento: Planificación urbana validada',
  'uc2.reference_projects.project2.impact.traceability': 'Trazabilidad: Fases coordinadas',
  'uc2.reference_projects.project2.impact.collaboration': 'Colaboración: 15 oficios involucrados',
  'uc2.reference_projects.project3.title': 'Campus Universitario Moderno',
  'uc2.reference_projects.project3.sector': 'Educación',
  'uc2.reference_projects.project3.offer': 'Oferta: €4,8 Millones',
  'uc2.reference_projects.project3.desc': 'Construcción de un campus de 15.000 m² con aulas y laboratorios.',
  'uc2.reference_projects.project3.impact.productivity': 'Productividad: +48% reducción de tiempo',
  'uc2.reference_projects.project3.impact.compliance': 'Cumplimiento: Estándares académicos',
  'uc2.reference_projects.project3.impact.traceability': 'Trazabilidad: Validación continua',
  'uc2.reference_projects.project3.impact.collaboration': 'Colaboración: 18 lotes coordinados',

  'common.nav.home': 'Inicio',
  'common.nav.solutions': 'Soluciones',
  'common.nav.pricing': 'Precios',
  'common.nav.contact': 'Contacto',
  'common.nav.language': 'Idioma',

  'common.cta.bookDemo': 'Reservar demo',
  'common.cta.learnMore': 'Saber más',
  'common.cta.getStarted': 'Comenzar',
  'common.cta.contactSales': 'Contactar Ventas',

  // Client Section
  'client.title': 'Reconocido por Líderes de la Industria',
  'client.subtitle': 'Únete a las empresas líderes que confían en Aitenders',
};

// German translations for UC2
const uc2GermanTranslations = {
  'uc2.hero.badge': 'Mittelgroße Angebote verwalten',
  'uc2.hero.title': 'Entdecken, verwalten und sichern Sie jede Klausel',
  'uc2.hero.span': 'vom ersten Tag an.',
  'uc2.hero.description': 'Die einzige Plattform, die entwickelt wurde, um mittelgroße Ausschreibungen in eine klare vertragliche Sicht zu verwandeln.',
  'uc2.hero.demoButton': 'Demo buchen',
  'uc2.hero.downloadButton': 'Wirkung testen →',

  'uc2.painPoints.headline': 'Ihr Angebot, 100% klar, 0% Überraschungen',
  'uc2.painPoints.text1': 'Bei mittelgroßen Projekten jonglieren Ihre Teams mit engen Terminen und kritischen Klauseln.',
  'uc2.painPoints.text2': 'Mit Aitenders strukturieren Sie automatisch jede Ausschreibung vom ersten Tag an.',
  'uc2.painPoints.optimizeButton': 'Optimieren Sie Ihre mittleren Projekte!',
  'uc2.painPoints.demoButton': 'Demo ansehen',

  'uc2.audiences.proposalManagers': 'Proposal Manager',
  'uc2.audiences.proposalManagersDesc': 'Verwalten Sie mittelgroße Projekte mit moderater Komplexität.',
  'uc2.audiences.technicalManagers': 'Technische Manager',
  'uc2.audiences.technicalManagersDesc': 'Überwachen Sie die technische Konsistenz mittelgroßer Vorschläge.',
  'uc2.audiences.commercialDirectors': 'Kommerzielle Direktoren',
  'uc2.audiences.commercialDirectorsDesc': 'Optimieren Sie Ihre Pipeline für mittlere Projekte.',

  'uc2.solutions.title1': 'Intelligentes Management mittelgroßer Projekte',
  'uc2.solutions.desc1': 'Spezialisierte KI, die automatisch Ressourcen koordiniert',
  'uc2.solutions.title2': 'Standardisierte und flexible Arbeitsabläufe',
  'uc2.solutions.desc2': 'Bewährte Methoden, angepasst an die Komplexität mittelgroßer Projekte',
  'uc2.solutions.title3': 'Automatisierte Qualitätskontrolle',
  'uc2.solutions.desc3': 'Systematische Validierung von Liefergegenständen',

  'uc2.features.mainTitle': 'Ihr KI-Copilot zur Sicherung der Verwaltung Ihrer mittleren Projekte',
  'uc2.features.subtitle': 'Entdecken, verwalten und sichern Sie jede Klausel vom ersten Tag an.',
  'uc2.features.feature1Title': 'Automatische Strukturierung des Umfangs ab Tag 1',
  'uc2.features.feature1Text': 'Dank Aitenders KI werden Ihre Dokumente sofort segmentiert und organisiert.',
  'uc2.features.feature1Highlight': 'Eine konsolidierte und priorisierte Sicht, bereit ab dem ersten Tag!',
  'uc2.features.feature2Title': 'Kontrollieren Sie jede kritische Klausel Ihres Projekts',
  'uc2.features.feature2Text': 'Aitenders identifiziert und priorisiert automatisch alle sensiblen Klauseln.',
  'uc2.features.feature2Highlight': 'Proaktive vertragliche Validierung, ab Tag 1',
  'uc2.features.feature3Title': 'Zentralisierte und dynamische Verfolgung von Versionen und Q&As',
  'uc2.features.feature3Text': 'Alle Ihre Q&As, Versionen und Dokumentenanpassungen werden automatisch von der KI konsolidiert und verfolgt. Der Proposal Manager verfolgt jede Änderung in Echtzeit, visualisiert Abweichungen, erhält Benachrichtigungen und stellt sicher, dass nichts vergessen oder ohne Validierung geändert wird. Keine fragmentierten Verfolgungen mehr per E-Mail oder Tabellenkalkulation: Alles ist in einem flüssigen und zuverlässigen Cockpit zentralisiert.',

  // Results Section
  'uc2.results_section.headline': 'Was unsere Nutzer konkret bei mittleren Ausschreibungen gewinnen',
  'uc2.results_section.subtitle': 'Entscheidende Ergebnisse für Käufer und Ausschreibungsteams',
  'uc2.results_section.card1_title': 'Kommerzieller Direktor oder Ausschreibungsdirektor',
  'uc2.results_section.card1_subtitle': 'Schnelle Entscheidung, verstärkte Glaubwürdigkeit, null Überraschungen',
  'uc2.results_section.card1_text': 'Stellen Sie ab Tag 1 sicher, dass jede kritische Klausel identifiziert, jede Verpflichtung unter Kontrolle und jedes Risiko abgedeckt ist. Sie gehen mit einem soliden, sofort genehmigbaren Angebot ins Komitee, ohne mentale Belastung und ohne unnötige Eskalation.',
  'uc2.results_section.card1_point1': 'Keine vergessene Klausel, keine zu spät erkannte Inkonsistenz',
  'uc2.results_section.card1_point2': 'Go / No-Go-Entscheidung ohne Verzögerung getroffen',
  'uc2.results_section.card1_point3': 'Glaubwürdigkeit vor dem Top-Management gestärkt',
  'uc2.results_section.card2_title': 'Proposal Manager, Contract Manager oder Projektleiter',
  'uc2.results_section.card2_subtitle': 'Klare Analyse, reibungslose Verfolgung, null Stress',
  'uc2.results_section.card2_text': 'Starten Sie an J+1 mit einer strukturierten und priorisierten Basis, die von KI generiert wurde: Jedes Kriterium ist klassifiziert, jede sensible Klausel erkannt, jede Version verfolgt. Sie wechseln von unter Druck stehen zu einem strategischen Piloten, der jederzeit die Solidität Ihres Angebots beweisen kann.',
  'uc2.results_section.card2_point1': 'Analyse vom ersten Tag bereit, keine manuelle Sortierung',
  'uc2.results_section.card2_point2': 'Kein Stress, keine Überraschungen, kein unnötiges Hin und Her',
  'uc2.results_section.card2_point3': 'Vollständige Kontrolle über jede Klausel und jede Version',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% der ursprünglichen Analysezeit',
  'uc2.results_section.kpis.clauses': '100% der kritischen Klauseln identifiziert',
  'uc2.results_section.kpis.surprise': '0 Überraschungen, keine Last-Minute-Herausforderung',
  'uc2.results_section.kpis.extra': 'Schneller, sauberer, wettbewerbsfähiger',

  // Solution Section Main Title
  'uc2.solution_section.mainTitle': 'Ihr KI-Copilot zur Sicherung der Verwaltung Ihrer mittleren Projekte',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Integrierter ROI-Simulator',
  'uc2.roi_simulator.headline': 'Berechnen Sie Ihren ROI in Echtzeit',
  'uc2.roi_simulator.subtext': 'Intelligenter Simulator, der in die Seite integriert ist für sofortige Analyse Ihrer Projekte',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Unsere Anwendungsfälle',
  'uc2.chat_actions.demo': 'UC2 Demo',
  'uc2.chat_actions.roi': 'ROI-Rechner',
  'uc2.chat_actions.contact': 'Experten kontaktieren',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Unsere Referenzangebote für mittelgroße Projekte',
  'uc2.reference_projects.subtitle': 'Erfahren Sie, wie unsere Kunden ihre mittleren Projekte transformieren',
  'uc2.reference_projects.project1.title': 'Regionales Logistikzentrum',
  'uc2.reference_projects.project1.sector': 'Logistik',
  'uc2.reference_projects.project1.offer': 'Angebot: 8,5 Mio. €',
  'uc2.reference_projects.project1.desc': 'Bau eines modernen Logistikzentrums von 25.000 m².',
  'uc2.reference_projects.project1.impact.productivity': 'Produktivität: +55% Koordinationszeit eingespart',
  'uc2.reference_projects.project1.impact.compliance': 'Konformität: Logistikstandards eingehalten',
  'uc2.reference_projects.project1.impact.traceability': 'Rückverfolgbarkeit: Integrierte Multi-Los-Verfolgung',
  'uc2.reference_projects.project1.impact.collaboration': 'Zusammenarbeit: 10 Teams synchronisiert',
  'uc2.reference_projects.project2.title': 'Sanierung eines Stadtviertels',
  'uc2.reference_projects.project2.sector': 'Städtisch',
  'uc2.reference_projects.project2.offer': 'Angebot: 6,2 Mio. €',
  'uc2.reference_projects.project2.desc': 'Umfassende Renovierung eines Wohnviertels mit 200 Wohneinheiten.',
  'uc2.reference_projects.project2.impact.productivity': 'Produktivität: +62% schnellere Studien',
  'uc2.reference_projects.project2.impact.compliance': 'Konformität: Stadtplanung validiert',
  'uc2.reference_projects.project2.impact.traceability': 'Rückverfolgbarkeit: Koordinierte Phasen',
  'uc2.reference_projects.project2.impact.collaboration': 'Zusammenarbeit: 15 Gewerke beteiligt',
  'uc2.reference_projects.project3.title': 'Moderner Universitätscampus',
  'uc2.reference_projects.project3.sector': 'Bildung',
  'uc2.reference_projects.project3.offer': 'Angebot: 4,8 Mio. €',
  'uc2.reference_projects.project3.desc': 'Bau eines Campus von 15.000 m² mit Hörsälen und Laboren.',
  'uc2.reference_projects.project3.impact.productivity': 'Produktivität: +48% Zeitersparnis',
  'uc2.reference_projects.project3.impact.compliance': 'Konformität: Akademische Standards',
  'uc2.reference_projects.project3.impact.traceability': 'Rückverfolgbarkeit: Kontinuierliche Validierung',
  'uc2.reference_projects.project3.impact.collaboration': 'Zusammenarbeit: 18 Lose koordiniert',

  'common.nav.home': 'Startseite',
  'common.nav.solutions': 'Lösungen',
  'common.nav.pricing': 'Preise',
  'common.nav.contact': 'Kontakt',
  'common.nav.language': 'Sprache',

  'common.cta.bookDemo': 'Demo buchen',
  'common.cta.learnMore': 'Mehr erfahren',
  'common.cta.getStarted': 'Loslegen',
  'common.cta.contactSales': 'Vertrieb kontaktieren',

  // Client Section
  'client.title': 'Vertraut von Branchenführern',
  'client.subtitle': 'Schließen Sie sich führenden Unternehmen an, die Aitenders vertrauen',
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