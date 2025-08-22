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
  'uc2.features.feature1Text': 'Grâce à l'IA d\'Aitenders, vos documents sont instantanément segmentés et organisés : lots, sous‑ensembles et critères contractuels sont classifiés et structurés en quelques minutes. Le Proposal Manager dispose immédiatement d\'une vision consolidée du périmètre : points bloquants et clauses sensibles sont identifiés sans effort, permettant une décision « go / no‑go » éclairée dès le premier jour.',
  'uc2.features.feature1Highlight': 'Une vision consolidée et priorisée, prête dès le premier jour !',
  'uc2.features.feature2Title': 'Maîtrisez chaque clause critique de votre projet',
  'uc2.features.feature2Text': 'Aitenders identifie et priorise automatiquement toutes les clauses sensibles : responsabilités, engagements, pénalités et conditions critiques. En parallèle, l'IA vérifie la cohérence documentaire et signale contradictions, doublons et lacunes, pour une analyse fiable et complète. Le Proposal Manager obtient en quelques minutes une vision claire des zones de risque, prêtes à être corrigées et validées sans perte de temps.',
  'uc2.features.feature2Highlight': 'Validation contractuelle proactive, dès J+1',

  // Solution Section
  'uc2.solution_section.mainTitle': 'Votre copilote IA qui sécurise la gestion de vos projets moyens',
  'uc2.solution_section.title': 'Votre copilote IA qui sécurise la gestion de vos projets moyens',
  'uc2.solution_section.subtitle': 'Découvrez, pilotez et sécurisez chaque clause dès le premier jour.',
  'uc2.solution_section.feature1_title': 'Structuration automatique du périmètre dès le J1',
  'uc2.solution_section.feature1_text': 'Grâce à l\'IA d\'Aitenders, vos documents sont instantanément segmentés et organisés : lots, sous-ensembles et critères contractuels sont classifiés et structurés en quelques minutes. Le Proposal Manager dispose immédiatement d\'une vision consolidée du périmètre : points bloquants et clauses sensibles sont identifiés sans effort, permettant une décision go / no-go éclairée dès le premier jour.',
  'uc2.solution_section.feature1_highlight': 'Une vision consolidée et priorisée, prête dès le premier jour !',
  'uc2.solution_section.feature2_title': 'Maîtrisez chaque clause critique de votre projet',
  'uc2.solution_section.feature2_text': 'Aitenders identifie et hiérarchise automatiquement toutes les clauses sensibles : responsabilités, engagements, pénalités et conditions critiques. Parallèlement, l'IA vérifie la cohérence documentaire et signale contradictions, doublons et lacunes, pour une analyse fiable et complète. Le Proposal Manager obtient en quelques minutes une vision claire des zones de risque, prêtes à être corrigées et validées sans perte de temps.',
  'uc2.solution_section.feature2_highlight': 'Validation contractuelle proactive, dès le J1',
  'uc2.solution_section.feature3_title': 'Pilotez chaque évolution contractuelle en temps réel',
  'uc2.solution_section.feature3_text': 'Toutes vos Q&A, versions et ajustements de documents sont consolidés et trackés automatiquement par l'IA. Le Proposal Manager suit chaque modification en temps réel, visualise les écarts, reçoit des alertes et s\'assure que rien n\'est oublié ou modifié sans validation. Fini les suivis fragmentés par email ou tableurs : tout est centralisé dans un cockpit fluide et fiable.',
  'uc2.solution_section.feature3_highlight': 'Aucune surprise, aucune version perdue, aucun risque d\'oubli',

  // Toppings - Complete Wow Features Section
  'uc2.toppings.badge': 'Fonctionnalités Wow',
  'uc2.toppings.headline': 'Des capacités avancées qui élèvent vos projets moyens',
  'uc2.toppings.subtitle': 'Au-delà de la coordination intelligente, découvrez des fonctionnalités qui transforment la gestion de projets moyens en avantage concurrentiel.',
  'uc2.toppings.features.predictive.title': 'Prédiction de Performance',
  'uc2.toppings.features.predictive.text': 'Anticipez les goulots d\'étranglement et optimisez automatiquement l\'allocation des ressources grâce à l\'analyse prédictive avancée.',
  'uc2.toppings.features.predictive.tag': 'Optimisation IA',
  'uc2.toppings.features.collaboration.title': 'Collaboration Adaptative',
  'uc2.toppings.features.collaboration.text': 'Espaces de travail qui s\'adaptent automatiquement à la taille et à la complexité de chaque équipe projet pour une efficacité maximale.',
  'uc2.toppings.features.collaboration.tag': 'Adaptation dynamique',
  'uc2.toppings.features.metrics.title': 'Métriques Intelligentes',
  'uc2.toppings.features.metrics.text': 'Tableaux de bord adaptatifs qui mettent en évidence les KPIs les plus pertinents selon la phase et la complexité du projet.',
  'uc2.toppings.features.metrics.tag': 'KPIs dynamiques',
  'uc2.toppings.features.risks.title': 'Gestion des Risques',
  'uc2.toppings.features.risks.text': 'Identification proactive des risques avec suggestions de mitigation automatiques basées sur l\'historique de projets similaires.',
  'uc2.toppings.features.risks.tag': 'Prévention IA',
  'uc2.toppings.features.templates.title': 'Templates Intelligents',
  'uc2.toppings.features.templates.text': 'Génération automatique de structures projet personnalisées selon la complexité, le secteur et les exigences spécifiques.',
  'uc2.toppings.features.templates.tag': 'Personnalisation IA',
  'uc2.toppings.features.learning.title': 'Apprentissage Continu',
  'uc2.toppings.features.learning.text': 'Le système apprend de chaque projet pour optimiser automatiquement les processus et améliorer les performances futures.',
  'uc2.toppings.features.learning.tag': 'Amélioration continue',
  'uc2.toppings.features.integration.title': 'Écosystème intégré, performance amplifiée',
  'uc2.toppings.features.integration.text': 'Connectivité native avec vos outils métier existants (ERP, CRM, outils de gestion de projet) pour une synergie parfaite et des données unifiées.',
  'uc2.toppings.features.integration.tag1': 'API Native',
  'uc2.toppings.features.integration.tag2': 'Sync Temps Réel',
  'uc2.toppings.bottom_text': 'Chaque fonctionnalité optimise vos projets moyens pour une performance maximale',
  'uc2.toppings.cta': 'Explorer toutes les fonctionnalités →',

  // Results Section - Missing keys
  'uc2.results_section.card1_point1': 'Aucune clause oubliée, aucune incohérence détectée trop tard',
  'uc2.results_section.card1_point2': 'Décision go / no-go prise sans délai',
  'uc2.results_section.card1_point3': 'Crédibilité renforcée devant la direction générale',
  'uc2.results_section.card2_point1': 'Analyse prête dès le premier jour, aucun tri manuel',
  'uc2.results_section.card2_point2': 'Aucun stress, aucune surprise, aucun aller-retour inutile',
  'uc2.results_section.card2_point3': 'Maîtrise totale de chaque clause et de chaque version',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Nos appels d\'offres de référence sur les projets moyens',
  'uc2.reference_projects.subtitle': 'Découvrez comment nos clients transforment leurs projets moyens avec l\'IA Aitenders',
  'uc2.reference_projects.project1.title': 'Centre Logistique Régional',
  'uc2.reference_projects.project1.sector': 'Logistique',
  'uc2.reference_projects.project1.offer': 'Offre : 8,5 M€',
  'uc2.reference_projects.project1.desc': 'Construction d\'un hub logistique moderne de 25 000 m² avec systèmes automatisés et aires de manœuvre. Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.',
  'uc2.reference_projects.project1.impact.productivity': 'Productivité : +55% de temps de coordination économisé',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% du temps d\'analyse initial',
  'uc2.results_section.kpis.clauses': '100% des clauses critiques identifiées',
  'uc2.results_section.kpis.surprise': '0 surprise, aucun challenge de dernière minute',
  'uc2.results_section.kpis.extra': 'Offre plus rapide, plus propre, plus compétitive',

  // Results Section - Complete
  'uc2.results_section.headline': 'Ce que nos utilisateurs gagnent concrètement sur les offres moyennes',
  'uc2.results_section.subtitle': 'Des résultats décisifs pour les acheteurs et équipes appels d\'offres',
  'uc2.results_section.card1_title': 'Directeur Commercial ou Directeur d\'Appels d\'Offres',
  'uc2.results_section.card1_subtitle': 'Décision rapide, crédibilité renforcée, zéro surprise',
  'uc2.results_section.card1_text': 'Assurez-vous dès le premier jour que chaque clause critique soit identifiée, chaque engagement maîtrisé et chaque risque couvert. Vous vous présentez en comité avec une offre solide, immédiatement validable, sans charge mentale et sans escalade inutile.',
  'uc2.results_section.card2_title': 'Proposal Manager, Contract Manager ou Chef de Projet',
  'uc2.results_section.card2_subtitle': 'Analyse claire, suivi fluide, zéro stress',
  'uc2.results_section.card2_text': 'Démarrez au jour +1 avec une base structurée et priorisée générée par l\'IA : chaque critère est classé, chaque clause sensible détectée, chaque version trackée. Vous passez d\'un état sous pression à celui de pilote stratégique, capable de prouver la solidité de votre offre à tout moment.',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Simulateur ROI Intégré',
  'uc2.roi_simulator.headline': 'Calculez votre ROI en temps réel',
  'uc2.roi_simulator.subtext': 'Simulateur intelligent intégré à la page pour une analyse immédiate de vos projets',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Nos cas d\'usage',
  'uc2.chat_actions.demo': 'Démo UC2',
  'uc2.chat_actions.roi': 'Calculateur ROI',
  'uc2.chat_actions.contact': 'Contacter un Expert',
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
  'uc2.audiences.commercialDirectorsDesc': 'Optimize your pipeline of medium projects with complete visibility on performance and risks. Maximize conversion rate through standardized and efficient processes.',

  'uc2.solution_section.mainTitle': 'Your AI co-pilot securing the management of your medium projects',
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

  // Solution Section
  'uc2.solution_section.title': 'Your AI co-pilot securing the management of your medium projects',
  'uc2.solution_section.subtitle': 'Discover, manage and secure every clause from day one.',
  'uc2.solution_section.feature1_title': 'Automatic scope structuring from day 1',
  'uc2.solution_section.feature1_text': 'Thanks to Aitenders AI, your documents are instantly segmented and organized: lots, sub-packages, and contractual criteria are classified and structured within minutes. The Proposal Manager immediately has a consolidated view of the scope: blocking points and sensitive clauses are identified effortlessly, enabling an informed go/no-go decision from day one.',
  'uc2.solution_section.feature1_highlight': 'A consolidated and prioritized view, ready from day one!',
  'uc2.solution_section.feature2_title': 'Master every critical clause of your project',
  'uc2.solution_section.feature2_text': 'Aitenders automatically identifies and prioritizes all sensitive clauses: responsibilities, commitments, penalties, and critical conditions. Simultaneously, the AI checks document consistency and flags contradictions, duplicates, and gaps for reliable and complete analysis. The Proposal Manager gets a clear view of risk areas in minutes, ready to be corrected and validated without wasting time.',
  'uc2.solution_section.feature2_highlight': 'Proactive contractual validation, from day 1',
  'uc2.solution_section.feature3_title': 'Manage every contractual evolution in real-time',
  'uc2.solution_section.feature3_text': 'All your Q&As, versions, and document adjustments are automatically consolidated and tracked by AI. The Proposal Manager tracks every change in real-time, visualizes deviations, receives alerts, and ensures nothing is forgotten or modified without approval. No more fragmented tracking via email or spreadsheets: everything is centralized in a fluid and reliable cockpit.',
  'uc2.solution_section.feature3_highlight': 'No surprises, no lost versions, no risk of forgetting',

  // Toppings - Complete Wow Features Section
  'uc2.toppings.badge': 'Wow Features',
  'uc2.toppings.headline': 'Advanced capabilities that elevate your medium projects',
  'uc2.toppings.subtitle': 'Beyond intelligent coordination, discover features that turn medium project management into a competitive advantage.',
  'uc2.toppings.features.predictive.title': 'Performance Prediction',
  'uc2.toppings.features.predictive.text': 'Anticipate bottlenecks and automatically optimize resource allocation with advanced predictive analytics.',
  'uc2.toppings.features.predictive.tag': 'AI optimization',
  'uc2.toppings.features.collaboration.title': 'Adaptive Collaboration',
  'uc2.toppings.features.collaboration.text': 'Workspaces that automatically adapt to the size and complexity of each project team for maximum efficiency.',
  'uc2.toppings.features.collaboration.tag': 'Dynamic adaptation',
  'uc2.toppings.features.metrics.title': 'Smart Metrics',
  'uc2.toppings.features.metrics.text': 'Adaptive dashboards highlighting the KPIs most relevant to the project\'s phase and complexity.',
  'uc2.toppings.features.metrics.tag': 'Dynamic KPIs',
  'uc2.toppings.features.risks.title': 'Risk Management',
  'uc2.toppings.features.risks.text': 'Proactive risk identification with automatic mitigation suggestions based on similar past projects.',
  'uc2.toppings.features.risks.tag': 'AI prevention',
  'uc2.toppings.features.templates.title': 'Smart Templates',
  'uc2.toppings.features.templates.text': 'Automatic generation of project structures tailored to complexity, sector, and specific requirements.',
  'uc2.toppings.features.templates.tag': 'AI customization',
  'uc2.toppings.features.learning.title': 'Continuous Learning',
  'uc2.toppings.features.learning.text': 'The system learns from every project to automatically optimize processes and improve future performance.',
  'uc2.toppings.features.learning.tag': 'Continuous improvement',
  'uc2.toppings.features.integration.title': 'Integrated ecosystem, amplified performance',
  'uc2.toppings.features.integration.text': 'Native connectivity with your existing business tools (ERP, CRM, project management tools) for perfect synergy and unified data.',
  'uc2.toppings.features.integration.tag1': 'Native API',
  'uc2.toppings.features.integration.tag2': 'Real-time sync',
  'uc2.toppings.bottom_text': 'Each feature optimizes your medium projects for maximum performance',
  'uc2.toppings.cta': 'Explore all features →',

  // Results Section - Missing keys
  'uc2.results_section.card1_point1': 'No forgotten clause, no inconsistency detected too late',
  'uc2.results_section.card1_point2': 'Go / no-go decision made without delay',
  'uc2.results_section.card1_point3': 'Credibility reinforced before top management',
  'uc2.results_section.card2_point1': 'Analysis ready from day one, no manual sorting',
  'uc2.results_section.card2_point2': 'No stress, no surprises, no unnecessary back-and-forths',
  'uc2.results_section.card2_point3': 'Full control over every clause and every version',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Our reference tenders on medium-size projects',
  'uc2.reference_projects.subtitle': 'See how our clients transform their medium projects with Aitenders AI',
  'uc2.reference_projects.project1.title': 'Regional Logistics Center',
  'uc2.reference_projects.project1.sector': 'Logistics',
  'uc2.reference_projects.project1.offer': 'Offer: €8.5 Million',
  'uc2.reference_projects.project1.desc': 'Construction of a modern 25,000 m² logistics hub with automated systems and maneuvering areas. Coordination of 10 specialized technical lots including handling, security and connectivity.',
  'uc2.reference_projects.project1.impact.productivity': 'Productivity: +55% coordination time saved',
  'uc2.reference_projects.project1.impact.compliance': 'Compliance: Logistics standards respected',
  'uc2.reference_projects.project1.impact.traceability': 'Traceability: Multi-lot tracking integrated',
  'uc2.reference_projects.project1.impact.collaboration': 'Collaboration: 10 teams synchronized',
  'uc2.reference_projects.project2.title': 'Urban District Rehabilitation',
  'uc2.reference_projects.project2.sector': 'Urban',
  'uc2.reference_projects.project2.offer': 'Offer: €6.2 Million',
  'uc2.reference_projects.project2.desc': 'Complete renovation of a residential district with 200 housing units, green spaces and shops. Coordinated management of networks, roads and occupancy constraints over 5 hectares.',
  'uc2.reference_projects.project2.impact.productivity': 'Productivity: +62% faster studies',
  'uc2.reference_projects.project2.impact.compliance': 'Compliance: Urban planning validated',
  'uc2.reference_projects.project2.impact.traceability': 'Traceability: Phases coordinated',
  'uc2.reference_projects.project2.impact.collaboration': 'Collaboration: 15 trades involved',
  'uc2.reference_projects.project3.title': 'Modern University Campus',
  'uc2.reference_projects.project3.sector': 'Education',
  'uc2.reference_projects.project3.offer': 'Offer: €4.8 Million',
  'uc2.reference_projects.project3.desc': 'Construction of a 15,000 m² campus with lecture halls, labs and student residences. Integration of digital technologies and collaborative spaces on an 8-hectare site.',
  'uc2.reference_projects.project3.impact.productivity': 'Productivity: +48% time reduction',
  'uc2.reference_projects.project3.impact.compliance': 'Compliance: Academic standards',
  'uc2.reference_projects.project3.impact.traceability': 'Traceability: Continuous validation',
  'uc2.reference_projects.project3.impact.collaboration': 'Collaboration: 18 lots coordinated',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% of initial analysis time',
  'uc2.results_section.kpis.clauses': '100% of critical clauses identified',
  'uc2.results_section.kpis.surprise': '0 surprise, no last-minute challenge',
  'uc2.results_section.kpis.extra': 'Faster, cleaner, more competitive offer',

  // Results Section - Complete
  'uc2.results_section.headline': 'What our users concretely gain for medium-size tenders',
  'uc2.results_section.subtitle': 'Decisive results for buyers and tender teams',
  'uc2.results_section.card1_title': 'Commercial Director or Bid Director',
  'uc2.results_section.card1_subtitle': 'Fast decision, enhanced credibility, zero surprises',
  'uc2.results_section.card1_text': 'Ensure from day one that every critical clause is identified, every commitment under control, and every risk covered. You walk into the committee with a solid, immediately approvable offer, with no mental load and no unnecessary escalation.',
  'uc2.results_section.card2_title': 'Proposal Manager, Contract Manager or Project Manager',
  'uc2.results_section.card2_subtitle': 'Clear analysis, smooth tracking, zero stress',
  'uc2.results_section.card2_text': 'Start on day +1 with a structured and prioritized base generated by AI: every criterion is classified, every sensitive clause detected, every version tracked. You go from being under pressure to being a strategic pilot, able to prove your offer\'s solidity at any time.',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Integrated ROI Simulator',
  'uc2.roi_simulator.headline': 'Calculate your ROI in real time',
  'uc2.roi_simulator.subtext': 'Smart simulator integrated into the page for immediate analysis of your projects',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Our use cases',
  'uc2.chat_actions.demo': 'UC2 Demo',
  'uc2.chat_actions.roi': 'ROI Calculator',
  'uc2.chat_actions.contact': 'Contact Expert',

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

  'uc2.solution_section.mainTitle': 'Su copiloto IA que asegura la gestión de sus proyectos medianos',
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

  // Solution Section
  'uc2.solution_section.title': 'Tu co-piloto AI asegurando la gestión de tus proyectos medianos',
  'uc2.solution_section.subtitle': 'Descubre, gestiona y asegura cada cláusula desde el primer día.',
  'uc2.solution_section.feature1_title': 'Estructuración automática del alcance desde el día 1',
  'uc2.solution_section.feature1_text': 'Gracias a la IA de Aitenders, tus documentos se segmentan y organizan instantáneamente: lotes, subpaquetes y criterios contractuales se clasifican y estructuran en minutos. El Gestor de Propuestas tiene inmediatamente una visión consolidada del alcance: puntos de bloqueo y cláusulas sensibles se identifican sin esfuerzo, permitiendo una decisión informada de "ir / no ir" desde el primer día.',
  'uc2.solution_section.feature1_highlight': '¡Una visión consolidada y priorizada, lista desde el primer día!',
  'uc2.solution_section.feature2_title': 'Domina cada cláusula crítica de tu proyecto',
  'uc2.solution_section.feature2_text': 'Aitenders identifica y prioriza automáticamente todas las cláusulas sensibles: responsabilidades, compromisos, penalizaciones y condiciones críticas. Al mismo tiempo, la IA verifica la coherencia documental y señala contradicciones, duplicados y lagunas para un análisis fiable y completo. El Gestor de Propuestas obtiene en minutos una visión clara de las áreas de riesgo, listas para ser corregidas y validadas sin perder tiempo.',
  'uc2.solution_section.feature2_highlight': 'Validación contractual proactiva, desde el día 1',
  'uc2.solution_section.feature3_title': 'Gestiona cada evolución contractual en tiempo real',
  'uc2.solution_section.feature3_text': 'Todas tus Q&As, versiones y ajustes de documentos se consolidan y rastrean automáticamente por la IA. El Gestor de Propuestas realiza un seguimiento de cada cambio en tiempo real, visualiza las desviaciones, recibe alertas y se asegura de que nada se olvide o se modifique sin aprobación. Se acabaron los seguimientos fragmentados por correo electrónico o hojas de cálculo: todo se centraliza en un cockpit fluido y fiable.',
  'uc2.solution_section.feature3_highlight': 'Sin sorpresas, sin versiones perdidas, sin riesgo de olvido',

  // Results Section - Missing keys
  'uc2.results_section.card1_point1': 'Ninguna cláusula olvidada, ninguna inconsistencia detectada demasiado tarde',
  'uc2.results_section.card1_point2': 'Decisión ir / no ir tomada sin demora',
  'uc2.results_section.card1_point3': 'Credibilidad reforzada ante la alta dirección',
  'uc2.results_section.card2_point1': 'Análisis listo desde el primer día, sin clasificación manual',
  'uc2.results_section.card2_point2': 'Sin estrés, sin sorpresas, sin intercambios innecesarios',
  'uc2.results_section.card2_point3': 'Control total sobre cada cláusula y cada versión',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Nuestras ofertas de referencia en proyectos medianos',
  'uc2.reference_projects.subtitle': 'Vea cómo nuestros clientes transforman sus proyectos medianos con la IA de Aitenders',
  'uc2.reference_projects.project1.title': 'Centro Logístico Regional',
  'uc2.reference_projects.project1.sector': 'Logística',
  'uc2.reference_projects.project1.offer': 'Oferta: 8,5 millones de €',
  'uc2.reference_projects.project1.desc': 'Construcción de un centro logístico moderno de 25.000 m² con sistemas automatizados y áreas de maniobra. Coordinación de 10 lotes técnicos especializados que incluyen manipulación, seguridad y conectividad.',
  'uc2.reference_projects.project1.impact.productivity': 'Productividad: +55% de tiempo de coordinación ahorrado',
  'uc2.reference_projects.project1.impact.compliance': 'Cumplimiento: Estándares logísticos respetados',
  'uc2.reference_projects.project1.impact.traceability': 'Trazabilidad: Seguimiento multi-lote integrado',
  'uc2.reference_projects.project1.impact.collaboration': 'Colaboración: 10 equipos sincronizados',
  'uc2.reference_projects.project2.title': 'Rehabilitación de Distrito Urbano',
  'uc2.reference_projects.project2.sector': 'Urbano',
  'uc2.reference_projects.project2.offer': 'Oferta: 6,2 millones de €',
  'uc2.reference_projects.project2.desc': 'Renovación completa de un distrito residencial con 200 viviendas, espacios verdes y comercios. Gestión coordinada de redes, viales y restricciones de ocupación en 5 hectáreas.',
  'uc2.reference_projects.project2.impact.productivity': 'Productividad: +62% de estudios más rápidos',
  'uc2.reference_projects.project2.impact.compliance': 'Cumplimiento: Planificación urbana validada',
  'uc2.reference_projects.project2.impact.traceability': 'Trazabilidad: Fases coordinadas',
  'uc2.reference_projects.project2.impact.collaboration': 'Colaboración: 15 gremios involucrados',
  'uc2.reference_projects.project3.title': 'Campus Universitario Moderno',
  'uc2.reference_projects.project3.sector': 'Educación',
  'uc2.reference_projects.project3.offer': 'Oferta: 4,8 millones de €',
  'uc2.reference_projects.project3.desc': 'Construcción de un campus de 15.000 m² con aulas, laboratorios y residencias de estudiantes. Integración de tecnologías digitales y espacios colaborativos en un sitio de 8 hectáreas.',
  'uc2.reference_projects.project3.impact.productivity': 'Productividad: +48% de reducción de tiempo',
  'uc2.reference_projects.project3.impact.compliance': 'Cumplimiento: Estándares académicos',
  'uc2.reference_projects.project3.impact.traceability': 'Trazabilidad: Validación continua',
  'uc2.reference_projects.project3.impact.collaboration': 'Colaboración: 18 lotes coordinados',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% del tiempo de análisis inicial',
  'uc2.results_section.kpis.clauses': '100% de las cláusulas críticas identificadas',
  'uc2.results_section.kpis.surprise': '0 sorpresas, sin desafíos de último momento',
  'uc2.results_section.kpis.extra': 'Oferta más rápida, más limpia, más competitiva',

  // Results Section - Complete
  'uc2.results_section.headline': 'Lo que nuestros usuarios ganan concretamente en ofertas medianas',
  'uc2.results_section.subtitle': 'Resultados decisivos para compradores y equipos de licitación',
  'uc2.results_section.card1_title': 'Director Comercial o Director de Licitaciones',
  'uc2.results_section.card1_subtitle': 'Decisión rápida, credibilidad reforzada, cero sorpresas',
  'uc2.results_section.card1_text': 'Asegúrese desde el primer día de que cada cláusula crítica sea identificada, cada compromiso controlado y cada riesgo cubierto. Se presenta al comité con una oferta sólida, inmediatamente aprobable, sin carga mental y sin escaladas innecesarias.',
  'uc2.results_section.card2_title': 'Gestor de Propuestas, Gestor de Contratos o Jefe de Proyecto',
  'uc2.results_section.card2_subtitle': 'Análisis claro, seguimiento fluido, cero estrés',
  'uc2.results_section.card2_text': 'Comience el día +1 con una base estructurada y priorizada generada por IA: cada criterio está clasificado, cada cláusula sensible detectada, cada versión rastreada. Pasa de estar bajo presión a ser un piloto estratégico, capaz de probar la solidez de su oferta en cualquier momento.',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Simulador ROI Integrado',
  'uc2.roi_simulator.headline': 'Calcule su ROI en tiempo real',
  'uc2.roi_simulator.subtext': 'Simulador inteligente integrado en la página para análisis inmediato de sus proyectos',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Nuestros casos de uso',
  'uc2.chat_actions.demo': 'Demo UC2',
  'uc2.chat_actions.roi': 'Calculadora ROI',
  'uc2.chat_actions.contact': 'Contactar Experto',

  // Toppings - Complete Wow Features Section
  'uc2.toppings.badge': 'Funcionalidades Wow',
  'uc2.toppings.headline': 'Capacidades avanzadas que elevan sus proyectos medianos',
  'uc2.toppings.subtitle': 'Más allá de la coordinación inteligente, descubra funcionalidades que transforman la gestión de proyectos medianos en una ventaja competitiva.',
  'uc2.toppings.features.predictive.title': 'Predicción de Rendimiento',
  'uc2.toppings.features.predictive.text': 'Anticipe cuellos de botella y optimice automáticamente la asignación de recursos con análisis predictivos avanzados.',
  'uc2.toppings.features.predictive.tag': 'Optimización IA',
  'uc2.toppings.features.collaboration.title': 'Colaboración Adaptativa',
  'uc2.toppings.features.collaboration.text': 'Espacios de trabajo que se adaptan automáticamente al tamaño y complejidad de cada equipo de proyecto para una máxima eficiencia.',
  'uc2.toppings.features.collaboration.tag': 'Adaptación dinámica',
  'uc2.toppings.features.metrics.title': 'Métricas Inteligentes',
  'uc2.toppings.features.metrics.text': 'Paneles de control adaptativos que resaltan los KPIs más relevantes según la fase y complejidad del proyecto.',
  'uc2.toppings.features.metrics.tag': 'KPIs dinámicos',
  'uc2.toppings.features.risks.title': 'Gestión de Riesgos',
  'uc2.toppings.features.risks.text': 'Identificación proactiva de riesgos con sugerencias automáticas de mitigación basadas en proyectos similares anteriores.',
  'uc2.toppings.features.risks.tag': 'Prevención IA',
  'uc2.toppings.features.templates.title': 'Plantillas Inteligentes',
  'uc2.toppings.features.templates.text': 'Generación automática de estructuras de proyecto adaptadas a la complejidad, sector y requisitos específicos.',
  'uc2.toppings.features.templates.tag': 'Personalización IA',
  'uc2.toppings.features.learning.title': 'Aprendizaje Continuo',
  'uc2.toppings.features.learning.text': 'El sistema aprende de cada proyecto para optimizar automáticamente los procesos y mejorar el rendimiento futuro.',
  'uc2.toppings.features.learning.tag': 'Mejora continua',
  'uc2.toppings.features.integration.title': 'Ecosistema integrado, rendimiento amplificado',
  'uc2.toppings.features.integration.text': 'Conectividad nativa con sus herramientas de negocio existentes (ERP, CRM, herramientas de gestión de proyectos) para una sinergia perfecta y datos unificados.',
  'uc2.toppings.features.integration.tag1': 'API Nativa',
  'uc2.toppings.features.integration.tag2': 'Sync en Tiempo Real',
  'uc2.toppings.bottom_text': 'Cada funcionalidad optimiza sus proyectos medianos para un máximo rendimiento',
  'uc2.toppings.cta': 'Explorar todas las funcionalidades →',

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

  'uc2.solution_section.mainTitle': 'Ihr KI-Kopilot, der die Verwaltung Ihrer mittleren Projekte sichert',
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

  // Solution Section
  'uc2.solution_section.title': 'Ihr KI-Copilot zur Sicherung der Verwaltung Ihrer mittleren Projekte',
  'uc2.solution_section.subtitle': 'Entdecken, verwalten und sichern Sie jede Klausel vom ersten Tag an.',
  'uc2.solution_section.feature1_title': 'Automatische Umfangsstrukturierung ab Tag 1',
  'uc2.solution_section.feature1_text': 'Dank Aitenders KI werden Ihre Dokumente sofort segmentiert und organisiert: Lose, Teilpakete und vertragliche Kriterien werden in wenigen Minuten klassifiziert und strukturiert. Der Proposal Manager hat sofort einen konsolidierten Überblick über den Umfang: Blockierungspunkte und sensible Klauseln werden mühelos identifiziert, was eine fundierte Go/No-Go-Entscheidung vom ersten Tag an ermöglicht.',
  'uc2.solution_section.feature1_highlight': 'Eine konsolidierte und priorisierte Sicht, bereit ab dem ersten Tag!',
  'uc2.solution_section.feature2_title': 'Beherrschen Sie jede kritische Klausel Ihres Projekts',
  'uc2.solution_section.feature2_text': 'Aitenders identifiziert und priorisiert automatisch alle sensiblen Klauseln: Verantwortlichkeiten, Verpflichtungen, Strafen und kritische Bedingungen. Gleichzeitig prüft die KI die Dokumentenkonsistenz und kennzeichnet Widersprüche, Duplikate und Lücken für eine zuverlässige und vollständige Analyse. Der Proposal Manager erhält in wenigen Minuten einen klaren Überblick über Risikobereiche, die bereit sind, ohne Zeitverlust korrigiert und validiert zu werden.',
  'uc2.solution_section.feature2_highlight': 'Proaktive vertragliche Validierung, ab Tag 1',
  'uc2.solution_section.feature3_title': 'Steuern Sie jede vertragliche Entwicklung in Echtzeit',
  'uc2.solution_section.feature3_text': 'Alle Ihre Q&As, Versionen und Dokumentenanpassungen werden automatisch von der KI konsolidiert und verfolgt. Der Proposal Manager verfolgt jede Änderung in Echtzeit, visualisiert Abweichungen, erhält Benachrichtigungen und stellt sicher, dass nichts vergessen oder ohne Genehmigung geändert wird. Schluss mit fragmentierten Nachverfolgungen per E-Mail oder Tabellenkalkulation: Alles ist in einem flüssigen und zuverlässigen Cockpit zentralisiert.',
  'uc2.solution_section.feature3_highlight': 'Keine Überraschungen, keine verlorenen Versionen, kein Risiko des Vergessens',

  // Results Section - Missing keys
  'uc2.results_section.card1_point1': 'Keine vergessene Klausel, keine Inkonsistenz zu spät erkannt',
  'uc2.results_section.card1_point2': 'Go / No-Go-Entscheidung ohne Verzögerung getroffen',
  'uc2.results_section.card1_point3': 'Glaubwürdigkeit vor dem Top-Management gestärkt',
  'uc2.results_section.card2_point1': 'Analyse vom ersten Tag bereit, keine manuelle Sortierung',
  'uc2.results_section.card2_point2': 'Kein Stress, keine Überraschungen, keine unnötigen Hin- und Her-Gespräche',
  'uc2.results_section.card2_point3': 'Vollständige Kontrolle über jede Klausel und jede Version',

  // Reference Projects Section
  'uc2.reference_projects.headline': 'Unsere Referenzangebote für mittelgroße Projekte',
  'uc2.reference_projects.subtitle': 'Erfahren Sie, wie unsere Kunden ihre mittleren Projekte mit Aitenders KI transformieren',
  'uc2.reference_projects.project1.title': 'Regionales Logistikzentrum',
  'uc2.reference_projects.project1.sector': 'Logistik',
  'uc2.reference_projects.project1.offer': 'Angebot: 8,5 Mio. €',
  'uc2.reference_projects.project1.desc': 'Bau eines modernen Logistikzentrums von 25.000 m² mit automatisierten Systemen und Rangierflächen. Koordination von 10 spezialisierten technischen Losen einschließlich Handling, Sicherheit und Konnektivität.',
  'uc2.reference_projects.project1.impact.productivity': 'Produktivität: +55% Koordinationszeit eingespart',
  'uc2.reference_projects.project1.impact.compliance': 'Konformität: Logistikstandards eingehalten',
  'uc2.reference_projects.project1.impact.traceability': 'Rückverfolgbarkeit: Integrierte Multi-Los-Verfolgung',
  'uc2.reference_projects.project1.impact.collaboration': 'Zusammenarbeit: 10 Teams synchronisiert',
  'uc2.reference_projects.project2.title': 'Sanierung eines Stadtviertels',
  'uc2.reference_projects.project2.sector': 'Städtisch',
  'uc2.reference_projects.project2.offer': 'Angebot: 6,2 Mio. €',
  'uc2.reference_projects.project2.desc': 'Umfassende Renovierung eines Wohnviertels mit 200 Wohneinheiten, Grünflächen und Geschäften. Koordinierte Verwaltung von Netzen, Straßen und Belegungsbeschränkungen auf 5 Hektar.',
  'uc2.reference_projects.project2.impact.productivity': 'Produktivität: +62% schnellere Studien',
  'uc2.reference_projects.project2.impact.compliance': 'Konformität: Stadtplanung validiert',
  'uc2.reference_projects.project2.impact.traceability': 'Rückverfolgbarkeit: Koordinierte Phasen',
  'uc2.reference_projects.project2.impact.collaboration': 'Zusammenarbeit: 15 Gewerke beteiligt',
  'uc2.reference_projects.project3.title': 'Moderner Universitätscampus',
  'uc2.reference_projects.project3.sector': 'Bildung',
  'uc2.reference_projects.project3.offer': 'Angebot: 4,8 Mio. €',
  'uc2.reference_projects.project3.desc': 'Bau eines Campus von 15.000 m² mit Hörsälen, Laboren und Studentenwohnheimen. Integration digitaler Technologien und kollaborativer Räume auf einem 8-Hektar-Gelände.',
  'uc2.reference_projects.project3.impact.productivity': 'Produktivität: +48% Zeitersparnis',
  'uc2.reference_projects.project3.impact.compliance': 'Konformität: Akademische Standards',
  'uc2.reference_projects.project3.impact.traceability': 'Rückverfolgbarkeit: Kontinuierliche Validierung',
  'uc2.reference_projects.project3.impact.collaboration': 'Zusammenarbeit: 18 Lose koordiniert',

  // KPIs Section
  'uc2.results_section.kpis.time': '50% der anfänglichen Analysezeit',
  'uc2.results_section.kpis.clauses': '100% der kritischen Klauseln identifiziert',
  'uc2.results_section.kpis.surprise': '0 Überraschungen, keine Last-Minute-Herausforderungen',
  'uc2.results_section.kpis.extra': 'Schnelleres, saubereres, wettbewerbsfähigeres Angebot',

  // Results Section - Complete
  'uc2.results_section.headline': 'Was unsere Benutzer konkret bei mittelgroßen Angeboten gewinnen',
  'uc2.results_section.subtitle': 'Entscheidende Ergebnisse für Einkäufer und Ausschreibungsteams',
  'uc2.results_section.card1_title': 'Kommerzieller Direktor oder Ausschreibungsdirektor',
  'uc2.results_section.card1_subtitle': 'Schnelle Entscheidung, verstärkte Glaubwürdigkeit, null Überraschungen',
  'uc2.results_section.card1_text': 'Stellen Sie vom ersten Tag an sicher, dass jede kritische Klausel identifiziert, jede Verpflichtung unter Kontrolle und jedes Risiko abgedeckt ist. Sie gehen mit einem soliden, sofort genehmigungsfähigen Angebot in den Ausschuss, ohne mentale Belastung und unnötige Eskalation.',
  'uc2.results_section.card2_title': 'Proposal Manager, Contract Manager oder Projektmanager',
  'uc2.results_section.card2_subtitle': 'Klare Analyse, reibungslose Verfolgung, null Stress',
  'uc2.results_section.card2_text': 'Beginnen Sie am Tag +1 mit einer strukturierten und priorisierten Basis, die von KI generiert wurde: Jedes Kriterium ist klassifiziert, jede sensible Klausel erkannt, jede Version verfolgt. Sie gehen von einem unter Druck stehenden zu einem strategischen Piloten über, der jederzeit die Solidität Ihres Angebots beweisen kann.',

  // ROI Simulator
  'uc2.roi_simulator.badge': 'Integrierter ROI-Simulator',
  'uc2.roi_simulator.headline': 'Berechnen Sie Ihren ROI in Echtzeit',
  'uc2.roi_simulator.subtext': 'Intelligenter Simulator in die Seite integriert für sofortige Analyse Ihrer Projekte',

  // Chat Actions
  'uc2.chat_actions.use_cases': 'Unsere Anwendungsfälle',
  'uc2.chat_actions.demo': 'UC2 Demo',
  'uc2.chat_actions.roi': 'ROI-Rechner',
  'uc2.chat_actions.contact': 'Experten kontaktieren',

  // Toppings - Complete Wow Features Section
  'uc2.toppings.badge': 'Wow Features',
  'uc2.toppings.headline': 'Fortgeschrittene Fähigkeiten, die Ihre mittleren Projekte aufwerten',
  'uc2.toppings.subtitle': 'Über die intelligente Koordination hinaus entdecken Sie Funktionen, die die Verwaltung mittlerer Projekte zu einem Wettbewerbsvorteil machen.',
  'uc2.toppings.features.predictive.title': 'Leistungsprognose',
  'uc2.toppings.features.predictive.text': 'Antizipieren Sie Engpässe und optimieren Sie die Ressourcenzuweisung automatisch mit fortschrittlicher prädiktiver Analytik.',
  'uc2.toppings.features.predictive.tag': 'KI-Optimierung',
  'uc2.toppings.features.collaboration.title': 'Adaptive Zusammenarbeit',
  'uc2.toppings.features.collaboration.text': 'Arbeitsbereiche, die sich automatisch an die Größe und Komplexität jedes Projektteams anpassen, für maximale Effizienz.',
  'uc2.toppings.features.collaboration.tag': 'Dynamische Anpassung',
  'uc2.toppings.features.metrics.title': 'Intelligente Metriken',
  'uc2.toppings.features.metrics.text': 'Adaptive Dashboards, die die für die Projektphase und -komplexität relevantesten KPIs hervorheben.',
  'uc2.toppings.features.metrics.tag': 'Dynamische KPIs',
  'uc2.toppings.features.risks.title': 'Risikomanagement',
  'uc2.toppings.features.risks.text': 'Proaktive Risikoerkennung mit automatischen Vorschlägen zur Risikominderung basierend auf ähnlichen früheren Projekten.',
  'uc2.toppings.features.risks.tag': 'KI-Prävention',
  'uc2.toppings.features.templates.title': 'Intelligente Vorlagen',
  'uc2.toppings.features.templates.text': 'Automatische Generierung von Projektstrukturen, zugeschnitten auf Komplexität, Branche und spezifische Anforderungen.',
  'uc2.toppings.features.templates.tag': 'KI-Anpassung',
  'uc2.toppings.features.learning.title': 'Kontinuierliches Lernen',
  'uc2.toppings.features.learning.text': 'Das System lernt aus jedem Projekt, um Prozesse automatisch zu optimieren und die zukünftige Leistung zu verbessern.',
  'uc2.toppings.features.learning.tag': 'Kontinuierliche Verbesserung',
  'uc2.toppings.features.integration.title': 'Integriertes Ökosystem, verstärkte Leistung',
  'uc2.toppings.features.integration.text': 'Native Konnektivität mit Ihren vorhandenen Geschäftstools (ERP, CRM, Projektmanagement-Tools) für perfekte Synergie und einheitliche Daten.',
  'uc2.toppings.features.integration.tag1': 'Native API',
  'uc2.toppings.features.integration.tag2': 'Echtzeit-Synchronisation',
  'uc2.toppings.bottom_text': 'Jede Funktion optimiert Ihre mittleren Projekte für maximale Leistung',
  'uc2.toppings.cta': 'Alle Funktionen erkunden →',

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