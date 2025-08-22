import { translationService } from "./translations";

// UC1 Translation Keys with French reference content
const uc1TranslationKeys = {
  // Hero Section
  'uc1.hero.badge': 'Accélérez l\'Analyse Des Offres Répétitives',
  'uc1.hero.title': 'Une analyse go/no go',
  'uc1.hero.span': 'immediate',
  'uc1.hero.title2': ', alignée avec vos',
  'uc1.hero.span2': 'processus interne.',
  'uc1.hero.description': 'La seule plateforme pensée pour les petits projets à cycles courts : Agents IA d\'analyse des points clés, automatisation d\'une synthèse et validation guidée. Vous transformez des Heures de relecture et d\'analyse en',
  'uc1.hero.description_span': 'minutes',
  'uc1.hero.description2': ', gagnez en sérénité et livrez une offre solide et incontestable — sans surcharge ni faux départs.',
  'uc1.hero.demoButton': 'Réservez une Démo',
  'uc1.hero.downloadButton': 'Téléchargez le cas d\'usage →',

  // Pain Points Section
  'uc1.painPoints.headline': 'Go / No-Go immédiat',
  'uc1.painPoints.headline_span': ', process interne garanti',
  'uc1.painPoints.text1': 'Sur les petits projets, la pression est double : analyser vite et prouver que tout a été lu, compris et contrôlé.',
  'uc1.painPoints.text2': 'Sans support transversal (qualité, juridique), chaque oubli peut coûter cher en marge en exécution et du coup en crédibilité interne.',
  'uc1.painPoints.text3': 'Avec Aitenders, vous obtenez en quelques minutes une vision claire et priorisée de vos documents pour un go/no‑go immédiat. La plateforme guide ensuite la validation et archive chaque contrôle, garantissant que vos obligations internes sont remplies sans surcharge.',
  'uc1.painPoints.contactButton': 'Contact Commercial',
  'uc1.painPoints.demoButton': 'Voir la Démo Rapide',

  // Solution Section
  'uc1.solution_section.mainTitle': 'Votre',
  'uc1.solution_section.mainTitle_span': 'copilote IA',
  'uc1.solution_section.mainTitle2': 'qui accélère l\'analyse de vos petits projets',
  'uc1.solution_section.subtitle': 'Décidez vite et prouvez que tout a été contrôlé, en moins de 48h.',

  // Feature 1
  'uc1.solution_section.feature1_title': 'Structuration instantanée pour un premier "go / no-go"',
  'uc1.solution_section.feature1_span': 'immédiat',
  'uc1.solution_section.feature1_text': 'Grâce aux assistants IA, vos documents sont instantanément analysés, classés et priorisés : critères d\'intérêt, points critiques et preuves associées sont détectés en quelques minutes. Le Responsable Offre démarre ainsi avec une base claire et exploitable : vision globale du projet, identification des points bloquants éventuels et possibilité de décider quasi immédiatement d\'un "go / no‑go".',
  'uc1.solution_section.feature1_highlight': 'Votre analyse prête avant même la première réunion',

  // Feature 2
  'uc1.solution_section.feature2_title': 'Accédez à une vision',
  'uc1.solution_section.feature2_span': 'claire',
  'uc1.solution_section.feature2_title2': 'de votre projet',
  'uc1.solution_section.feature2_text': 'Aitenders génère une vue claire et priorisée de l\'ensemble des critères détectés, avec leurs valeurs et les liens directs vers les documents sources. Le Responsable d\'offre n\'a plus besoin de parcourir des centaines de pages ou de jongler entre plusieurs fichiers : tout est rassemblé dans une synthèse visuelle, exploitable immédiatement.',
  'uc1.solution_section.feature2_highlight': 'Votre revue interne prête en quelques minutes',

  // Feature 3
  'uc1.solution_section.feature3_title': 'Validez et archivez chaque point',
  'uc1.solution_section.feature3_span': 'sans effort',
  'uc1.solution_section.feature3_text': 'Aitenders vous guide pas à pas pour confirmer, ajuster ou rejeter chaque élément identifié par l\'IA. Chaque validation est automatiquement tracée et historisée, créant un dossier de preuves complet. Le responsable d\'offre passe d\'une validation manuelle, lente et incertaine à un processus fluide, sécurisé et incontestable.',
  'uc1.solution_section.feature3_highlight': 'Finies les zones grises : tout est validé et tracé.',

  // Results Section
  'uc1.results_section.headline': 'Ce que nos utilisateurs obtiennent concrètement pour les petites offres',
  'uc1.results_section.subtitle': 'Des résultats mesurables pour chaque profil d\'utilisateur',

  // Card 1
  'uc1.results_section.card1_title': 'Directeur Commercial ou Directeur des Offres',
  'uc1.results_section.card1_subtitle': 'Décision rapide, process validé, crédibilité renforcée',
  'uc1.results_section.card1_text': 'Obtenez en moins de 48h une analyse complète et documentée, prête à présenter. Vous décidez dès le premier jour grâce à un go / no-go immédiat et démontrez que chaque point a été contrôlé et validé. Cette approche garantit la transparence, réduit les allers‑retours internes et renforce la confiance lors des comités.',
  'uc1.results_section.card1_point1': 'Décision éclairée dès J+1 grâce à une analyse instantanée',
  'uc1.results_section.card1_point2': 'Process interne respecté et intégralement tracé',
  'uc1.results_section.card1_point3': 'Transparence totale sur les points critiques',
  'uc1.results_section.card1_point4': 'Crédibilité renforcée lors des comités',

  // Card 2
  'uc1.results_section.card2_title': 'Responsable Offre, Chef de Projet, Assistants commercial',
  'uc1.results_section.card2_subtitle': 'Analyse rapide, validation fluide, sérénité retrouvée',
  'uc1.results_section.card2_text': 'Travaillez dès le premier jour sur une base IA déjà structurée et priorisée, sans retraitement manuel. Vous disposez d\'une vue synthétique et actionnable des points à valider, d\'un accès immédiat aux preuves et d\'un suivi clair de vos validations. Résultat : moins de stress, un gain de temps massif et la capacité de démontrer à tout moment que tout a été contrôlé et tracé.',
  'uc1.results_section.card2_point1': 'Moins de relectures, plus de décisions stratégiques',
  'uc1.results_section.card2_point2': 'Chaque point couvert, chaque preuve archivée',
  'uc1.results_section.card2_point3': 'Crédibilité renforcée face aux décideurs internes',
  'uc1.results_section.card2_point4': 'Validation fluide et intégralement documentée',

  // KPIs Section
  'uc1.results_section.kpis.time': 'Gain de temps',
  'uc1.results_section.kpis.time_desc': 'Réduction du temps d\'analyse des documents',
  'uc1.results_section.kpis.compliance': 'Conformité',
  'uc1.results_section.kpis.compliance_desc': 'Critères critiques vérifiés et documentés',
  'uc1.results_section.kpis.serenity': 'Sérénité maximale',
  'uc1.results_section.kpis.serenity_title': 'Impact organisationnel',
  'uc1.results_section.kpis.serenity_desc': 'Confiance renforcée, stress réduit, zéro escalade interne',

  // Toppings Section
  'uc1.toppings.badge': 'Fonctionnalités Wow',
  'uc1.toppings.headline': 'Des',
  'uc1.toppings.headline_span': 'capacités avancées',
  'uc1.toppings.headline2': 'qui transforment votre approche commerciale',
  'uc1.toppings.subtitle': 'Au-delà de la génération rapide, découvrez des fonctionnalités qui ajoutent une dimension stratégique à votre développement commercial.',

  // Topping Features
  'uc1.toppings.project_summary.title': 'Résumé automatique du projet',
  'uc1.toppings.project_summary.desc': 'Génération instantanée d\'un résumé clair des objectifs et du contexte du projet, affiché sur le dashboard.',
  'uc1.toppings.project_summary.tag': 'Project Summary',
  'uc1.toppings.project_summary.click': 'Cliquez pour détails',

  'uc1.toppings.implicit_requirements.title': 'Détection des exigences implicites',
  'uc1.toppings.implicit_requirements.desc': 'L\'IA identifie automatiquement les "exigences cachées" (non exprimées clairement) dans les documents.',
  'uc1.toppings.implicit_requirements.tag': 'Implicit Requirement Detector',
  'uc1.toppings.implicit_requirements.click': 'Cliquez pour détails',

  'uc1.toppings.document_summary.title': 'Résumé intelligent de chaque document',
  'uc1.toppings.document_summary.desc': 'Chaque document est résumé en quelques lignes, disponible dans le doc center et réutilisable par l\'IA.',
  'uc1.toppings.document_summary.tag': 'Document Summary',
  'uc1.toppings.document_summary.click': 'Cliquez pour détails',

  'uc1.toppings.document_hierarchy.title': 'Gestion dynamique de la hiérarchie documentaire',
  'uc1.toppings.document_hierarchy.desc': 'Les documents sont automatiquement classés selon leur importance, définie par l\'utilisateur ou l\'IA.',
  'uc1.toppings.document_hierarchy.tag': 'Document Precedence',
  'uc1.toppings.document_hierarchy.click': 'Cliquez pour détails',

  'uc1.toppings.content_categorization.title': 'Catégorisation intelligente & arbre thématique',
  'uc1.toppings.content_categorization.desc': 'Les informations sont automatiquement classées par thème (juridique, technique, planning…) et restituées sous forme d\'arbre visuel.',
  'uc1.toppings.content_categorization.tag': 'Content Categorization',
  'uc1.toppings.content_categorization.click': 'Cliquez pour détails',

  'uc1.toppings.project_chat.title': 'Chat contextuel avec le projet',
  'uc1.toppings.project_chat.desc': 'Posez n\'importe quelle question sur le projet à l\'IA et obtenez des réponses précises avec les sources.',
  'uc1.toppings.project_chat.tag': 'Project Chat',
  'uc1.toppings.project_chat.click': 'Cliquez pour détails',

  // Pain Points
  'uc1.pain_points.title1': 'Délais serrés compromettent la qualité',
  'uc1.pain_points.description1': 'Réponses bâclées sur les petits projets créent une image dégradée et réduisent les chances de succès',
  'uc1.pain_points.title2': 'Processus inefficaces et répétitifs',
  'uc1.pain_points.description2': 'Temps perdu sur des tâches manuelles récurrentes au détriment de la personnalisation et de la valeur ajoutée',
  'uc1.pain_points.title3': 'Manque de standardisation',
  'uc1.pain_points.description3': 'Incohérences entre les offres et absence de capitalisation sur les réussites précédentes',

  // Solutions
  'uc1.solutions.title1': 'Génération rapide d\'offres structurées',
  'uc1.solutions.description1': 'IA spécialisée qui produit des réponses complètes et conformes en quelques heures seulement',
  'uc1.solutions.title2': 'Templates et contenus pré-validés',
  'uc1.solutions.description2': 'Bibliothèque d\'argumentaires éprouvés et de réponses standardisées pour une qualité constante',
  'uc1.solutions.title3': 'Validation automatique des exigences',
  'uc1.solutions.description3': 'Vérification systématique du cahier des charges pour éviter les oublis critiques',

  // Journey
  'uc1.journey.title1': 'Analysez le cahier des charges',
  'uc1.journey.description1': 'Importez votre appel d\'offres et laissez l'IA extraire automatiquement toutes les exigences clés',
  'uc1.journey.title2': 'Générez votre réponse structurée',
  'uc1.journey.description2': 'Créez instantanément une proposition complète avec argumentaires adaptés et conformité assurée',
  'uc1.journey.title3': 'Personnalisez et finalisez',
  'uc1.journey.description3': 'Affinez votre offre avec des éléments différenciants tout en gardant la structure gagnante',

  // KPIs
  'uc1.kpis.description2': 'Couverture automatique des exigences',
  'uc1.kpis.description4': 'Conformité des livrables',

  // Differentiators
  'uc1.differentiators.title1': 'Solution Dédiée aux Petits Projets',
  'uc1.differentiators.title2': 'Intelligence Commerciale Intégrée',
  'uc1.differentiators.title3': 'Workflows Automatisés',
  'uc1.differentiators.description3': 'Processus streamlinés pour maximiser la productivité des équipes commerciales',

  // Features
  'uc1.features.hidden_requirements': 'L\'IA identifie automatiquement les "exigences cachées" (non exprimées clairement) dans les documents.',

  // UC1 Additional sections to match UC2 structure
  // Pain Points Section (detailed)
  'uc1.pain_points.title1': 'Délais serrés compromettent la qualité',
  'uc1.pain_points.description1': 'Réponses bâclées sur les petits projets créent une image dégradée et réduisent les chances de succès',
  'uc1.pain_points.title2': 'Processus inefficaces et répétitifs',
  'uc1.pain_points.description2': 'Temps perdu sur des tâches manuelles récurrentes au détriment de la personnalisation et de la valeur ajoutée',
  'uc1.pain_points.title3': 'Manque de standardisation',
  'uc1.pain_points.description3': 'Incohérences entre les offres et absence de capitalisation sur les réussites précédentes',

  // Solutions Section (detailed)
  'uc1.solutions.title1': 'Génération rapide d\'offres structurées',
  'uc1.solutions.description1': 'IA spécialisée qui produit des réponses complètes et conformes en quelques heures seulement',
  'uc1.solutions.title2': 'Templates et contenus pré-validés',
  'uc1.solutions.description2': 'Bibliothèque d\'argumentaires éprouvés et de réponses standardisées pour une qualité constante',
  'uc1.solutions.title3': 'Validation automatique des exigences',
  'uc1.solutions.description3': 'Vérification systématique du cahier des charges pour éviter les oublis critiques',

  // Journey Section (detailed)
  'uc1.journey.title1': 'Analysez le cahier des charges',
  'uc1.journey.description1': 'Importez votre appel d\'offres et laissez l'IA extraire automatiquement toutes les exigences clés',
  'uc1.journey.title2': 'Générez votre réponse structurée',
  'uc1.journey.description2': 'Créez instantanément une proposition complète avec argumentaires adaptés et conformité assurée',
  'uc1.journey.title3': 'Personnalisez et finalisez',
  'uc1.journey.description3': 'Affinez votre offre avec des éléments différenciants tout en gardant la structure gagnante',

  // Audiences Section
  'uc1.audiences.bidManagers': 'Responsables d\'Offres',
  'uc1.audiences.bidManagersDesc': 'Analyse rapide et validation des opportunités commerciales',
  'uc1.audiences.salesDirectors': 'Directeurs Commerciaux',
  'uc1.audiences.salesDirectorsDesc': 'Vision stratégique et décision go/no-go immédiate',

  // KPIs Section (detailed values)
  'uc1.kpis.description1': 'Réduction du temps d\'analyse',
  'uc1.kpis.description2': 'Couverture automatique des exigences',
  'uc1.kpis.description3': 'Amélioration de la qualité des offres',
  'uc1.kpis.description4': 'Conformité des livrables',
  'uc1.results_section.kpis.time_value': '75% de temps d\'analyse économisé',
  'uc1.results_section.kpis.clauses_value': '100% des critères critiques identifiés',
  'uc1.results_section.kpis.surprise_value': '0 oubli critique, maîtrise totale',
  'uc1.results_section.kpis.extra_value': 'Go/No-Go immédiat et documenté',

  // Differentiators Section (detailed)
  'uc1.differentiators.title1': 'Solution Dédiée aux Petits Projets',
  'uc1.differentiators.description1': 'Optimisée spécifiquement pour les cycles courts et les budgets contraints',
  'uc1.differentiators.title2': 'Intelligence Commerciale Intégrée',
  'uc1.differentiators.description2': 'IA spécialisée dans l\'analyse rapide et la prise de décision commerciale',
  'uc1.differentiators.title3': 'Workflows Automatisés',
  'uc1.differentiators.description3': 'Processus streamlinés pour maximiser la productivité des équipes commerciales',

  // Toppings Advanced Features (detailed)
  'uc1.toppings.features.summary.title': 'Résumé automatique avancé',
  'uc1.toppings.features.summary.text': 'Génération intelligente de synthèses multi-niveaux avec recommandations stratégiques et points d\'attention prioritaires.',
  'uc1.toppings.features.summary.tag1': 'Synthèse Multi-Niveaux',
  'uc1.toppings.features.summary.tag2': 'Recommandations IA',

  'uc1.toppings.features.validation.title': 'Validation collaborative intelligente',
  'uc1.toppings.features.validation.text': 'Système de validation collaborative avec workflow d\'approbation automatisé et traçabilité complète des décisions.',
  'uc1.toppings.features.validation.tag1': 'Workflow Collaboratif',
  'uc1.toppings.features.validation.tag2': 'Traçabilité Complète',

  'uc1.toppings.features.learning.title': 'Apprentissage continu et optimisation',
  'uc1.toppings.features.learning.text': 'L\'IA apprend de vos décisions passées et des résultats d\'offres pour améliorer continuellement ses recommandations.',
  'uc1.toppings.features.learning.tag': 'Amélioration Continue',

  'uc1.toppings.features.integration.title': 'Écosystème intégré, performance renforcée',
  'uc1.toppings.features.integration.text': 'Connectivité native avec vos outils métier existants (ERP, CRM, outils de gestion de projet) pour une synergie parfaite.',
  'uc1.toppings.features.integration.tag1': 'API Native',
  'uc1.toppings.features.integration.tag2': 'Sync Temps Réel',

  'uc1.toppings.bottom_text': 'Chaque fonctionnalité optimise vos petits projets pour une performance maximale',
  'uc1.toppings.cta': 'Explorer toutes les fonctionnalités →',

  // Reference Projects Section
  'uc1.reference_projects.headline': 'Nos appels d\'offres de référence sur les petits projets',
  'uc1.reference_projects.subtitle': 'Découvrez comment nos clients transforment leurs petits projets avec l\'IA Aitenders',
  'uc1.reference_projects.project1.title': 'Modernisation IT PME',
  'uc1.reference_projects.project1.sector': 'Technologies',
  'uc1.reference_projects.project1.offer': 'Offre : 2,8 M€',
  'uc1.reference_projects.project1.desc': 'Modernisation complète de l\'infrastructure IT d\'une PME avec migration cloud et formation équipes.',
  'uc1.reference_projects.project1.result': 'Délai réduit de 60%, offre gagnante livrée en 24h',
  'uc1.reference_projects.project1.impact': 'Go/No-Go immédiat, équipe rassurée, direction convaincue',

  'uc1.reference_projects.project2.title': 'Rénovation Énergétique Bâtiment',
  'uc1.reference_projects.project2.sector': 'Construction',
  'uc1.reference_projects.project2.offer': 'Offre : 4,2 M€',
  'uc1.reference_projects.project2.desc': 'Rénovation énergétique complète d\'un bâtiment tertiaire avec certification environnementale.',
  'uc1.reference_projects.project2.result': 'Analyse complète en 3h, validation interne en 1 jour',
  'uc1.reference_projects.project2.impact': 'Zéro surprise, conformité garantie, crédibilité renforcée',

  'uc1.reference_projects.project3.title': 'Système de Sécurité Intégré',
  'uc1.reference_projects.project3.sector': 'Sécurité',
  'uc1.reference_projects.project3.offer': 'Offre : 1,5 M€',
  'uc1.reference_projects.project3.desc': 'Déploiement d\'un système de sécurité intégré avec vidéosurveillance et contrôle d\'accès.',
  'uc1.reference_projects.project3.result': 'Structuration immédiate, points critiques détectés',
  'uc1.reference_projects.project3.impact': 'Décision rapide, processus maîtrisé, stress éliminé',

  'uc1.reference_projects.impact_label': 'Impact client :',

  // ROI Simulator
  'uc1.roi_simulator.badge': 'Simulateur ROI Intégré',
  'uc1.roi_simulator.headline': 'Calculez votre ROI en temps réel',
  'uc1.roi_simulator.subtext': 'Simulateur intelligent intégré à la page pour une analyse immédiate de vos petits projets',

  // Chat Actions
  'uc1.chat_actions.use_cases': 'Nos cas d\'usage',
  'uc1.chat_actions.demo': 'Démo UC1',
  'uc1.chat_actions.roi': 'Calculateur ROI',
  'uc1.chat_actions.contact': 'Expert Contact',
};

// UC2 Translation Keys with French reference content
const uc2TranslationKeys = {
  // Hero Section
  'uc2.hero.badge': 'Réponses Conformes, Livrées à Temps',
  'uc2.hero.title': 'Réponses d\'appel d\'offres complètes',
  'uc2.hero.span': 'en 48h maximum.',
  'uc2.hero.description': 'La plateforme dédiée aux projets moyens (5-50 M€) : extraction automatique des exigences, génération de réponses conformes et validation collaborative. Transformez vos délais contraints en avantage concurrentiel.',
  'uc2.hero.demoButton': 'Réservez une Démo',
  'uc2.hero.downloadButton': 'Téléchargez le cas d\'usage →',

  // Pain Points Section
  'uc2.pain_points.title1': 'Délais serrés et exigences complexes',
  'uc2.pain_points.description1': 'Les projets moyens cumulent complexity documentaire et contraintes temporelles, créant un stress permanent sur les équipes',
  'uc2.pain_points.title2': 'Coordination difficile entre équipes',
  'uc2.pain_points.description2': 'Multiplicity des intervenants complique la cohérence et la completude des réponses',
  'uc2.pain_points.title3': 'Risques de non-conformité élevés',
  'uc2.pain_points.description3': 'Oublis et erreurs de compliance peuvent disqualifier instantanément les meilleures propositions',

  // Solutions
  'uc2.solutions.title1': 'Analyse exhaustive des exigences',
  'uc2.solutions.description1': 'IA spécialisée qui identifie et structure automatiquement toutes les requirements cachées ou explicites',
  'uc2.solutions.title2': 'Coordination collaborative intégrée',
  'uc2.solutions.description2': 'Workflows collaboratifs intégrés pour une coordination fluide entre tous les contributeurs',
  'uc2.solutions.title3': 'Validation automatique de conformité',
  'uc2.solutions.description3': 'Contrôles systématiques qui garantissent l\'adhérence complète aux specifications du client',

  // Journey
  'uc2.journey.title1': 'Structurez automatiquement les exigences',
  'uc2.journey.description1': 'Notre IA analyse en profondeur votre appel d\'offres et structure toutes les exigences par domaines métier',
  'uc2.journey.title2': 'Collaborez efficacement en équipe',
  'uc2.journey.description2': 'Répartissez automatiquement le travail et synchronisez les contributions de chaque expert métier',
  'uc2.journey.title3': 'Validez la conformité avant soumission',
  'uc2.journey.description3': 'Vérification automatique de tous les critères obligatoires et generation du dossier final',

  // Audiences
  'uc2.audiences.projectDirectors': 'Directeurs de Projet',
  'uc2.audiences.projectDirectorsDesc': 'Vision globale et coordination des équipes techniques',
  'uc2.audiences.operationsManagers': 'Managers Opérationnels',
  'uc2.audiences.operationsManagersDesc': 'Supervision des livrables et respect des délais',

  // KPIs
  'uc2.kpis.description1': 'Réduction du temps de préparation',
  'uc2.kpis.description2': 'Taux de conformité des réponses',
  'uc2.kpis.description3': 'Amélioration de la coordination équipe',
  'uc2.results_section.kpis.time': '50% du temps d\'analyse initial',
  'uc2.results_section.kpis.clauses': '100% des clauses critiques identifiées',
  'uc2.results_section.kpis.surprise': '0 surprise, aucun challenge de dernière minute',
  'uc2.results_section.kpis.extra': 'Offre plus rapide, plus propre, plus compétitive',

  // Differentiators  
  'uc2.differentiators.title1': 'Solution Adaptée aux Projets Moyens',
  'uc2.differentiators.description1': 'Équilibre parfait entre simplicité et sophistication pour les besoins intermédiaires',
  'uc2.differentiators.title2': 'Workflows Collaboratifs Intégrés',
  'uc2.differentiators.description2': 'Coordination naturelle des équipes multidisciplinaires sans friction organisationnelle',
  'uc2.differentiators.title3': 'Validation de Conformité Automatique',
  'uc2.differentiators.description3': 'Élimination des risques de disqualification par des contrôles systématiques et intelligents',
};

// UC3 Translation Keys with French reference content
const uc3TranslationKeys = {
  // Hero Section
  'uc3.hero.badge': 'Maîtrisez les grands projets',
  'uc3.hero.title': 'Coordonnez et pilotez vos méga-projets',
  'uc3.hero.span': 'avec une précision chirurgicale.',
  'uc3.hero.description': 'La solution enterprise pour les grands projets internationaux (> 10 M€) : coordination multi-lots, gestion des partenariats internationaux et pilotage des risques complexes. Maîtrisez la complexité documentaire, synchronisez vos équipes globales et livrez des offres gagnantes sur les plus grands marchés.',
  'uc3.hero.demoButton': 'Réservez une Démo',
  'uc3.hero.downloadButton': 'Télécharger le cas d\'usage →',

  // Pain Points Section
  'uc3.painPoints.headline': 'Votre méga-projet, 100% maîtrisé, 0% improvisation',
  'uc3.painPoints.text1': 'Sur les grands projets internationaux, vos équipes naviguent entre dizaines de lots, multiples partenaires et exigences complexes, au risque de perdre le contrôle et de compromettre l\'offre.',
  'uc3.painPoints.text2': 'Avec Aitenders, orchestrez automatiquement la complexité : coordination multi-lots intelligente, synchronisation des équipes globales et pilotage des risques en temps réel. Maîtrisez l\'impossible.',
  'uc3.painPoints.optimizeButton': 'Maîtrisez Vos Méga-Projets!',
  'uc3.painPoints.demoButton': 'Voir la Démonstration',

  // Features
  'uc3.features.mainTitle': 'Votre centre de commandement pour les méga-projets',
  'uc3.features.subtitle': 'Coordonnez, pilotez et maîtrisez la complexité.',
  'uc3.features.feature1Title': 'Coordination intelligente multi-lots',
  'uc3.features.feature1Text': 'L\'IA d\'Aitenders orchestre automatiquement les interactions entre tous les lots, identifie les dépendances critiques et synchronise les équipes globales.',
  'uc3.features.feature1Highlight': 'Orchestration automatique de la complexité !',
  'uc3.features.feature2Title': 'Gestion des partenariats internationaux',
  'uc3.features.feature2Text': 'Coordination automatique des partenaires internationaux avec gestion des fuseaux horaires, langues et réglementations locales.',
  'uc3.features.feature2Highlight': 'Synchronisation globale automatisée',
  'uc3.features.feature3Title': 'Pilotage des risques complexes',
  'uc3.features.feature3Text': 'Détection proactive des risques systémiques et recommandations automatiques de mitigation basées sur l\'intelligence collective.',

  // Results Section
  'uc3.results_section.headline': 'Ce que nos utilisateurs gagnent sur les méga-projets',
  'uc3.results_section.subtitle': 'Des résultats transformateurs pour les grandes organisations',
  'uc3.results_section.card1_title': 'Directeur de Programmes ou CEO',
  'uc3.results_section.card1_subtitle': 'Vision globale, contrôle total, réussite assurée',
  'uc3.results_section.card1_text': 'Pilotez sereinement les projets les plus complexes avec une visibilité complète sur tous les aspects. Prenez des décisions éclairées et anticipez les risques.',
  'uc3.results_section.card1_point1': 'Visibilité complète sur la complexité',
  'uc3.results_section.card1_point2': 'Décisions éclairées en temps réel',
  'uc3.results_section.card1_point3': 'Anticipation proactive des risques',
  'uc3.results_section.card2_title': 'Chef de Projet International ou PMO',
  'uc3.results_section.card2_subtitle': 'Coordination fluide, équipes synchronisées',
  'uc3.results_section.card2_text': 'Orchestrez sans effort des équipes réparties sur plusieurs continents. Synchronisez automatiquement tous les acteurs et maintenez la cohérence globale.',
  'uc3.results_section.card2_point1': 'Coordination automatique multi-sites',
  'uc3.results_section.card2_point2': 'Synchronisation en temps réel',
  'uc3.results_section.card2_point3': 'Cohérence globale maintenue',

  // KPIs Section
  'uc3.results_section.kpis.coordination': '90% d\'efficacité de coordination',
  'uc3.results_section.kpis.risks': '95% des risques anticipés',
  'uc3.results_section.kpis.teams': '100% des équipes synchronisées',
  'uc3.results_section.kpis.extra': 'Maîtrise totale de la complexité',
};

// UC4 Translation Keys with French reference content
const uc4TranslationKeys = {
  // Hero Section
  'uc4.hero.badge': 'Documents simples, traitement rapide',
  'uc4.hero.title': 'Analysez et structurez vos petits volumes',
  'uc4.hero.span': 'en quelques minutes.',
  'uc4.hero.description': 'La solution optimisée pour les petits volumes documentaires (1-10 documents) : extraction automatique des informations clés, structuration intelligente et synthèse instantanée. Parfait pour les analyses rapides et les besoins ponctuels d\'expertise documentaire.',
  'uc4.hero.demoButton': 'Réservez une Démo',
  'uc4.hero.downloadButton': 'Testez l\'impact →',

  // Pain Points Section
  'uc4.painPoints.headline': 'Vos documents, analysés et structurés instantanément',
  'uc4.painPoints.text1': 'Face à des documents techniques ou contractuels, vos équipes perdent du temps à extraire manuellement les informations importantes et à créer des synthèses.',
  'uc4.painPoints.text2': 'Avec Aitenders, uploadez vos documents et obtenez instantanément une analyse structurée avec extraction automatique des points clés et synthèse intelligente.',
  'uc4.painPoints.optimizeButton': 'Optimisez Votre Analyse!',
  'uc4.painPoints.demoButton': 'Voir la Démonstration',

  // Features
  'uc4.features.mainTitle': 'Votre analyseur de documents intelligent',
  'uc4.features.subtitle': 'Extrayez, structurez et synthétisez automatiquement.',
  'uc4.features.feature1Title': 'Extraction automatique des informations clés',
  'uc4.features.feature1Text': 'L\'IA identifie et extrait automatiquement tous les éléments importants : dates, montants, obligations, responsabilités et conditions critiques.',
  'uc4.features.feature1Highlight': 'Plus jamais d\'information ratée !',
  'uc4.features.feature2Title': 'Structuration intelligente du contenu',
  'uc4.features.feature2Text': 'Organisation automatique des informations par thèmes et priorités avec création d\'une arborescence logique et navigable.',
  'uc4.features.feature2Highlight': 'Structure claire et navigation intuitive',
  'uc4.features.feature3Title': 'Synthèse instantanée et actionnable',
  'uc4.features.feature3Text': 'Génération automatique de synthèses exécutives avec recommandations d\'actions et points d\'attention prioritaires.',

  // Results Section
  'uc4.results_section.headline': 'Ce que nos utilisateurs gagnent sur l\'analyse documentaire',
  'uc4.results_section.subtitle': 'Des résultats immédiats pour tous les métiers',
  'uc4.results_section.card1_title': 'Juriste ou Responsable Contractuel',
  'uc4.results_section.card1_subtitle': 'Analyse précise, points de risque identifiés',
  'uc4.results_section.card1_text': 'Analysez instantanément tout contrat ou document juridique avec identification automatique des clauses sensibles et des points de vigilance.',
  'uc4.results_section.card1_point1': 'Analyse contractuelle instantanée',
  'uc4.results_section.card1_point2': 'Clauses sensibles automatiquement détectées',
  'uc4.results_section.card1_point3': 'Points de vigilance priorisés',
  'uc4.results_section.card2_title': 'Chef de Projet ou Consultant',
  'uc4.results_section.card2_subtitle': 'Synthèse rapide, action immédiate',
  'uc4.results_section.card2_text': 'Transformez n\'importe quel document technique en plan d\'action structuré avec recommandations priorisées et étapes claires.',
  'uc4.results_section.card2_point1': 'Documents techniques décryptés',
  'uc4.results_section.card2_point2': 'Plan d\'action automatiquement généré',
  'uc4.results_section.card2_point3': 'Recommandations priorisées',

  // KPIs Section
  'uc4.results_section.kpis.speed': '10x plus rapide qu\'une analyse manuelle',
  'uc4.results_section.kpis.accuracy': '99% de précision sur l\'extraction',
  'uc4.results_section.kpis.structure': '100% des documents structurés',
  'uc4.results_section.kpis.extra': 'Prêt à l\'action immédiatement',
};

// UC5 Translation Keys with French reference content
const uc5TranslationKeys = {
  // Hero Section
  'uc5.hero.badge': 'Volumes moyens, efficacité maximale',
  'uc5.hero.title': 'Maîtrisez vos volumes documentaires moyens',
  'uc5.hero.span': 'avec une intelligence augmentée.',
  'uc5.hero.description': 'La plateforme optimisée pour les volumes documentaires moyens (10-500 documents) : traitement par lots, analyse comparative et synthèse multi-documents. Transformez la complexité documentaire en avantage concurrentiel avec une approche industrialisée.',
  'uc5.hero.demoButton': 'Réservez une Démo',
  'uc5.hero.downloadButton': 'Testez l\'impact →',

  // Pain Points Section
  'uc5.painPoints.headline': 'Vos volumes moyens, traités avec une efficacité industrielle',
  'uc5.painPoints.text1': 'Avec des dizaines ou centaines de documents à traiter, vos équipes s\'enlisent dans des tâches répétitives et peinent à maintenir la cohérence et la qualité d\'analyse.',
  'uc5.painPoints.text2': 'Avec Aitenders, industrialisez votre traitement documentaire : analyse par lots, détection automatique des patterns et synthèse comparative intelligente. Maintenez la qualité à l\'échelle.',
  'uc5.painPoints.optimizeButton': 'Industrialisez Votre Analyse!',
  'uc5.painPoints.demoButton': 'Voir la Démonstration',

  // Features
  'uc5.features.mainTitle': 'Votre usine à intelligence documentaire',
  'uc5.features.subtitle': 'Traitez, comparez et synthétisez à grande échelle.',
  'uc5.features.feature1Title': 'Traitement industrialisé par lots',
  'uc5.features.feature1Text': 'Processus automatisés de traitement par lots avec gestion intelligente des priorités et optimisation des ressources de calcul.',
  'uc5.features.feature1Highlight': 'Efficacité industrielle garantie !',
  'uc5.features.feature2Title': 'Analyse comparative multi-documents',
  'uc5.features.feature2Text': 'Détection automatique des similitudes, différences et patterns récurrents entre documents avec création de matrices comparatives.',
  'uc5.features.feature2Highlight': 'Vision transversale automatique',
  'uc5.features.feature3Title': 'Synthèse intelligente multi-niveaux',
  'uc5.features.feature3Text': 'Génération de synthèses à plusieurs niveaux : par document, par lot, par thème et synthèse globale avec recommandations stratégiques.',

  // Results Section
  'uc5.results_section.headline': 'Ce que nos utilisateurs gagnent sur les volumes moyens',
  'uc5.results_section.subtitle': 'Des résultats industriels pour une productivité démultipliée',
  'uc5.results_section.card1_title': 'Directeur d\'Études ou Responsable Analyse',
  'uc5.results_section.card1_subtitle': 'Productivité industrielle, qualité préservée',
  'uc5.results_section.card1_text': 'Traitez des centaines de documents avec la même rigueur qu\'une analyse manuelle, mais en 10x moins de temps. Maintenez la qualité à l\'échelle.',
  'uc5.results_section.card1_point1': '10x plus de documents traités',
  'uc5.results_section.card1_point2': 'Qualité d\'analyse préservée',
  'uc5.results_section.card1_point3': 'Vision globale automatique',
  'uc5.results_section.card2_title': 'Analyste ou Chargé d\'Études',
  'uc5.results_section.card2_subtitle': 'Focus sur l\'expertise, automatisation du répétitif',
  'uc5.results_section.card2_text': 'Libérez-vous des tâches répétitives et concentrez-vous sur l\'analyse à haute valeur ajoutée et l\'interprétation stratégique.',
  'uc5.results_section.card2_point1': 'Tâches répétitives automatisées',
  'uc5.results_section.card2_point2': 'Focus sur l\'expertise métier',
  'uc5.results_section.card2_point3': 'Analyse stratégique renforcée',

  // KPIs Section
  'uc5.results_section.kpis.volume': '10x plus de documents traités',
  'uc5.results_section.kpis.consistency': '100% de cohérence maintenue',
  'uc5.results_section.kpis.insights': '5x plus d\'insights générés',
  'uc5.results_section.kpis.extra': 'Productivité industrielle',
};

// UC6 Translation Keys with French reference content
const uc6TranslationKeys = {
  // Hero Section
  'uc6.hero.badge': 'Gros volumes, puissance maximale',
  'uc6.hero.title': 'Dominez la complexité documentaire massive',
  'uc6.hero.span': 'avec l\'IA enterprise.',
  'uc6.hero.description': 'La solution enterprise pour les gros volumes documentaires (> 500 documents) : traitement massif parallélisé, intelligence collective et tableaux de bord exécutifs. Transformez le big data documentaire en avantage stratégique décisif.',
  'uc6.hero.demoButton': 'Réservez une Démo',
  'uc6.hero.downloadButton': 'Télécharger le cas d\'usage →',

  // Pain Points Section
  'uc6.painPoints.headline': 'Votre big data documentaire, maîtrisé et valorisé',
  'uc6.painPoints.text1': 'Face à des milliers de documents, vos équipes sont submergées et incapables d\'extraire une vision stratégique cohérente de cette masse d\'informations critiques.',
  'uc6.painPoints.text2': 'Avec Aitenders Enterprise, transformez cette complexité en avantage : traitement massif parallélisé, intelligence collective et dashboards exécutifs pour une vision stratégique immédiate.',
  'uc6.painPoints.optimizeButton': 'Maîtrisez le Big Data Documentaire!',
  'uc6.painPoints.demoButton': 'Voir la Démonstration',

  // Features
  'uc6.features.mainTitle': 'Votre plateforme enterprise de maîtrise documentaire',
  'uc6.features.subtitle': 'Traitez massivement, analysez globalement, décidez stratégiquement.',
  'uc6.features.feature1Title': 'Traitement massif parallélisé',
  'uc6.features.feature1Text': 'Architecture cloud scalable avec traitement parallèle de milliers de documents simultanément et optimisation automatique des ressources.',
  'uc6.features.feature1Highlight': 'Puissance de calcul illimitée !',
  'uc6.features.feature2Title': 'Intelligence collective et patterns globaux',
  'uc6.features.feature2Text': 'Détection automatique de patterns complexes, tendances émergentes et corrélations cachées à travers l\'ensemble du corpus documentaire.',
  'uc6.features.feature2Highlight': 'Vision stratégique automatique',
  'uc6.features.feature3Title': 'Tableaux de bord exécutifs temps réel',
  'uc6.features.feature3Text': 'Dashboards exécutifs avec KPIs stratégiques, alertes automatiques et recommandations d\'actions prioritaires pour la direction.',

  // Results Section
  'uc6.results_section.headline': 'Ce que nos utilisateurs gagnent sur les gros volumes',
  'uc6.results_section.subtitle': 'Des résultats transformateurs pour les organisations enterprise',
  'uc6.results_section.card1_title': 'Directeur Général ou CDO',
  'uc6.results_section.card1_subtitle': 'Vision stratégique, décisions éclairées, avantage concurrentiel',
  'uc6.results_section.card1_text': 'Transformez votre patrimoine documentaire en avantage stratégique décisif. Prenez des décisions éclairées basées sur une analyse exhaustive et en temps réel.',
  'uc6.results_section.card1_point1': 'Vision stratégique complète',
  'uc6.results_section.card1_point2': 'Décisions basées sur la donnée',
  'uc6.results_section.card1_point3': 'Avantage concurrentiel durable',
  'uc6.results_section.card2_title': 'Directeur de la Connaissance ou CDO',
  'uc6.results_section.card2_subtitle': 'Patrimoine valorisé, intelligence amplifiée',
  'uc6.results_section.card2_text': 'Exploitez pleinement le potentiel de votre patrimoine documentaire avec une intelligence collective qui révèle patterns cachés et opportunités stratégiques.',
  'uc6.results_section.card2_point1': 'Patrimoine documentaire valorisé',
  'uc6.results_section.card2_point2': 'Intelligence collective révélée',
  'uc6.results_section.card2_point3': 'Opportunités stratégiques identifiées',

  // KPIs Section
  'uc6.results_section.kpis.scale': 'Milliers de documents traités simultanément',
  'uc6.results_section.kpis.insights': '100x plus d\'insights stratégiques',
  'uc6.results_section.kpis.decisions': '90% des décisions accélérées',
  'uc6.results_section.kpis.extra': 'Transformation digitale complète',
};

// Additional translations for specific UI elements
const specificUITranslations = {
  // Impact client section (mentioned in uc2.tsx line 1086)
  'uc2.impact_client': 'Impact client :',
  'uc2.reference_projects.impact_label': 'Impact client :',

  // Simulator translations (mentioned in aitenders-simulator-final.tsx line 143)
  'simulator.title': 'Simulateur ROI Aitenders',
  'simulator.useCase': 'Cas d\'usage:',
  'simulator.multiProject': '• Simulation Multi-Projets',
  'simulator.description': '📊 **SIMULATEUR ROI AITENDERS POUR VOS BESOINS**\n\n⏱️ Temps estimé : 3-5 minutes\n📧 Vous recevrez votre rapport détaillé par email\n\n---\n\n**Question 1/4 : Volume et Types de Projets**\n\nPour mieux calculer votre ROI, pouvez-vous me décrire le volume de projets sur lesquels vous soumissionnez annuellement ?\n\n**📋 Exemples de réponses :**\n• "100 petits projets de 5M€ environ"\n• "50 projets moyens de 20M€"\n• "5 grands projets de 100M€"\n\n💡 **Vous pouvez répondre en langage naturel.**',
  'simulator.processing': 'Traitement en cours...',
  'simulator.helpText': '💡 Vous pouvez répondre en langage naturel ou utiliser les formats suggérés',

  // Chat interface placeholder (mentioned in chat-interface.tsx line 909)
  'chat.inputPlaceholder': 'Tapez votre réponse ici...',
};

// Combine all UC translation keys
const allUCTranslationKeys = {
  ...uc1TranslationKeys,
  ...uc2TranslationKeys,
  ...uc3TranslationKeys,
  ...uc4TranslationKeys,
  ...uc5TranslationKeys,
  ...uc6TranslationKeys,
  ...specificUITranslations,
};

// English translations for all UCs
const allUCEnglishTranslations = {
  // UC1 English
  'uc1.hero.badge': 'Accelerate Repetitive Offer Analysis',
  'uc1.hero.title': 'Immediate go/no-go',
  'uc1.hero.span': 'analysis',
  'uc1.hero.title2': ', aligned with your',
  'uc1.hero.span2': 'internal processes.',
  'uc1.hero.description': 'The only platform designed for short-cycle small projects: AI agents for key point analysis, automated synthesis and guided validation. Transform hours of review and analysis into',
  'uc1.hero.description_span': 'minutes',
  'uc1.hero.description2': ', gain peace of mind and deliver solid, uncontestable offers — without overload or false starts.',
  'uc1.hero.demoButton': 'Book a Demo',
  'uc1.hero.downloadButton': 'Download the use case →',

  'uc1.painPoints.headline': 'Immediate Go / No-Go',
  'uc1.painPoints.headline_span': ', guaranteed internal process',
  'uc1.painPoints.text1': 'On small projects, the pressure is double: analyze quickly and prove everything has been read, understood and controlled.',
  'uc1.painPoints.text2': 'Without cross-functional support (quality, legal), every oversight can cost dearly in execution margin and thus internal credibility.',
  'uc1.painPoints.text3': 'With Aitenders, get a clear and prioritized view of your documents in minutes for immediate go/no-go. The platform then guides validation and archives every control, ensuring your internal obligations are met without overload.',
  'uc1.painPoints.contactButton': 'Commercial Contact',
  'uc1.painPoints.demoButton': 'See Quick Demo',

  'uc1.solution_section.mainTitle': 'Your',
  'uc1.solution_section.mainTitle_span': 'AI copilot',
  'uc1.solution_section.mainTitle2': 'that accelerates analysis of your small projects',
  'uc1.solution_section.subtitle': 'Decide quickly and prove everything has been controlled, in less than 48h.',

  'uc1.solution_section.feature1_title': 'Instant structuring for immediate',
  'uc1.solution_section.feature1_span': '"go / no-go"',
  'uc1.solution_section.feature1_text': 'Thanks to AI assistants, your documents are instantly analyzed, classified and prioritized: interest criteria, critical points and associated evidence are detected in minutes. The Offer Manager thus starts with a clear and exploitable base: global project vision, identification of potential blocking points and ability to decide almost immediately on "go / no-go".',
  'uc1.solution_section.feature1_highlight': 'Your analysis ready before the first meeting',

  'uc1.solution_section.feature2_title': 'Access a',
  'uc1.solution_section.feature2_span': 'clear view',
  'uc1.solution_section.feature2_title2': 'of your project',
  'uc1.solution_section.feature2_text': 'Aitenders generates a clear and prioritized view of all detected criteria, with their values and direct links to source documents. The Offer Manager no longer needs to go through hundreds of pages or juggle between multiple files: everything is gathered in a visual synthesis, immediately exploitable.',
  'uc1.solution_section.feature2_highlight': 'Your internal review in minutes ready',

  'uc1.solution_section.feature3_title': 'Validate and archive every point',
  'uc1.solution_section.feature3_span': 'effortlessly',
  'uc1.solution_section.feature3_text': 'Aitenders guides you step by step to confirm, adjust or reject each element identified by AI. Each validation is automatically traced and historized, creating a complete evidence file. The offer manager moves from manual, slow and uncertain validation to a fluid, secure and uncontestable process.',
  'uc1.solution_section.feature3_highlight': 'No more gray areas: everything is validated and traced.',

  'uc1.results_section.headline': 'What our users concretely get for small offers',
  'uc1.results_section.subtitle': 'Measurable results for each user profile',

  'uc1.results_section.card1_title': 'Sales Director or Bid Director',
  'uc1.results_section.card1_subtitle': 'Quick decision, validated process, enhanced credibility',
  'uc1.results_section.card1_text': 'Get a complete and documented analysis in less than 48h, ready to present. You decide from day one thanks to immediate go / no-go and demonstrate that every point has been controlled and validated. This approach guarantees transparency, reduces internal back-and-forth and strengthens confidence during committees.',
  'uc1.results_section.card1_point1': 'Informed decision from D+1 thanks to instant analysis',
  'uc1.results_section.card1_point2': 'Internal process respected and fully traced',
  'uc1.results_section.card1_point3': 'Total transparency on critical points',
  'uc1.results_section.card1_point4': 'Enhanced credibility during committees',

  'uc1.results_section.card2_title': 'Bid Manager, Project Manager, Sales Assistants',
  'uc1.results_section.card2_subtitle': 'Quick analysis, smooth validation, regained serenity',
  'uc1.results_section.card2_text': 'Work from day one on an AI base already structured and prioritized, without manual reprocessing. You have a synthetic and actionable view of points to validate, immediate access to evidence and clear tracking of your validations. Result: less stress, massive time savings and ability to demonstrate at any time that everything has been controlled and traced.',
  'uc1.results_section.card2_point1': 'Less review, more strategic decisions',
  'uc1.results_section.card2_point2': 'Every point covered, every proof archived',
  'uc1.results_section.card2_point3': 'Enhanced credibility with internal decision makers',
  'uc1.results_section.card2_point4': 'Smooth validation and fully documented',

  'uc1.results_section.kpis.time': 'Time saving',
  'uc1.results_section.kpis.time_desc': 'Reduction in document analysis time',
  'uc1.results_section.kpis.compliance': 'Compliance',
  'uc1.results_section.kpis.compliance_desc': 'Critical criteria verified and documented',
  'uc1.results_section.kpis.serenity': 'Maximum serenity',
  'uc1.results_section.kpis.serenity_title': 'Organizational impact',
  'uc1.results_section.kpis.serenity_desc': 'Enhanced confidence, reduced stress, zero internal escalation',

  'uc1.toppings.badge': 'Wow Features',
  'uc1.toppings.headline': 'Advanced',
  'uc1.toppings.headline_span': 'capabilities',
  'uc1.toppings.headline2': 'that transform your commercial approach',
  'uc1.toppings.subtitle': 'Beyond rapid generation, discover features that add a strategic dimension to your business development.',

  'uc1.toppings.project_summary.title': 'Automatic project summary',
  'uc1.toppings.project_summary.desc': 'Instant generation of a clear summary of project objectives and context, displayed on the dashboard.',
  'uc1.toppings.project_summary.tag': 'Project Summary',
  'uc1.toppings.project_summary.click': 'Click for details',

  'uc1.toppings.implicit_requirements.title': 'Implicit requirement detection',
  'uc1.toppings.implicit_requirements.desc': 'AI automatically identifies "hidden requirements" (not clearly expressed) in documents.',
  'uc1.toppings.implicit_requirements.tag': 'Implicit Requirement Detector',
  'uc1.toppings.implicit_requirements.click': 'Click for details',

  'uc1.toppings.document_summary.title': 'Intelligent summary of each document',
  'uc1.toppings.document_summary.desc': 'Each document is summarized in a few lines, available in the doc center and reusable by AI.',
  'uc1.toppings.document_summary.tag': 'Document Summary',
  'uc1.toppings.document_summary.click': 'Click for details',

  'uc1.toppings.document_hierarchy.title': 'Dynamic document hierarchy management',
  'uc1.toppings.document_hierarchy.desc': 'Documents are automatically classified by importance, defined by user or AI.',
  'uc1.toppings.document_hierarchy.tag': 'Document Precedence',
  'uc1.toppings.document_hierarchy.click': 'Click for details',

  'uc1.toppings.content_categorization.title': 'Intelligent categorization & thematic tree',
  'uc1.toppings.content_categorization.desc': 'Information is automatically classified by theme (legal, technical, planning…) and rendered as a visual tree.',
  'uc1.toppings.content_categorization.tag': 'Content Categorization',
  'uc1.toppings.content_categorization.click': 'Click for details',

  'uc1.toppings.project_chat.title': 'Contextual chat with the project',
  'uc1.toppings.project_chat.desc': 'Ask any question about the project to AI and get precise answers with sources.',
  'uc1.toppings.project_chat.tag': 'Project Chat',
  'uc1.toppings.project_chat.click': 'Click for details',

  // UC1 Additional English translations to match UC2 structure
  'uc1.pain_points.title1': 'Tight deadlines compromise quality',
  'uc1.pain_points.description1': 'Rushed responses on small projects create a degraded image and reduce chances of success',
  'uc1.pain_points.title2': 'Inefficient and repetitive processes',
  'uc1.pain_points.description2': 'Time wasted on recurring manual tasks at the expense of customization and added value',
  'uc1.pain_points.title3': 'Lack of standardization',
  'uc1.pain_points.description3': 'Inconsistencies between offers and absence of capitalization on previous successes',

  'uc1.solutions.title1': 'Rapid generation of structured offers',
  'uc1.solutions.description1': 'Specialized AI that produces complete and compliant responses in just a few hours',
  'uc1.solutions.title2': 'Pre-validated templates and content',
  'uc1.solutions.description2': 'Library of proven arguments and standardized responses for consistent quality',
  'uc1.solutions.title3': 'Automatic requirements validation',
  'uc1.solutions.description3': 'Systematic verification of specifications to avoid critical oversights',

  'uc1.journey.title1': 'Analyze the specifications',
  'uc1.journey.description1': 'Import your tender and let AI automatically extract all key requirements',
  'uc1.journey.title2': 'Generate your structured response',
  'uc1.journey.description2': 'Instantly create a complete proposal with adapted arguments and assured compliance',
  'uc1.journey.title3': 'Customize and finalize',
  'uc1.journey.description3': 'Refine your offer with differentiating elements while keeping the winning structure',

  'uc1.audiences.bidManagers': 'Bid Managers',
  'uc1.audiences.bidManagersDesc': 'Quick analysis and validation of commercial opportunities',
  'uc1.audiences.salesDirectors': 'Sales Directors',
  'uc1.audiences.salesDirectorsDesc': 'Strategic vision and immediate go/no-go decision',

  'uc1.kpis.description1': 'Analysis time reduction',
  'uc1.kpis.description2': 'Automatic requirements coverage',
  'uc1.kpis.description3': 'Offer quality improvement',
  'uc1.kpis.description4': 'Deliverable compliance',
  'uc1.results_section.kpis.time_value': '75% analysis time saved',
  'uc1.results_section.kpis.clauses_value': '100% critical criteria identified',
  'uc1.results_section.kpis.surprise_value': '0 critical oversight, total control',
  'uc1.results_section.kpis.extra_value': 'Immediate and documented Go/No-Go',

  'uc1.differentiators.title1': 'Solution Dedicated to Small Projects',
  'uc1.differentiators.description1': 'Specifically optimized for short cycles and constrained budgets',
  'uc1.differentiators.title2': 'Integrated Commercial Intelligence',
  'uc1.differentiators.description2': 'AI specialized in rapid analysis and commercial decision-making',
  'uc1.differentiators.title3': 'Automated Workflows',
  'uc1.differentiators.description3': 'Streamlined processes to maximize commercial team productivity',

  'uc1.toppings.features.summary.title': 'Advanced automatic summary',
  'uc1.toppings.features.summary.text': 'Intelligent generation of multi-level syntheses with strategic recommendations and priority attention points.',
  'uc1.toppings.features.summary.tag1': 'Multi-Level Synthesis',
  'uc1.toppings.features.summary.tag2': 'AI Recommendations',

  'uc1.toppings.features.validation.title': 'Intelligent collaborative validation',
  'uc1.toppings.features.validation.text': 'Collaborative validation system with automated approval workflow and complete decision traceability.',
  'uc1.toppings.features.validation.tag1': 'Collaborative Workflow',
  'uc1.toppings.features.validation.tag2': 'Complete Traceability',

  'uc1.toppings.features.learning.title': 'Continuous learning and optimization',
  'uc1.toppings.features.learning.text': 'AI learns from your past decisions and offer results to continuously improve its recommendations.',
  'uc1.toppings.features.learning.tag': 'Continuous Improvement',

  'uc1.toppings.features.integration.title': 'Integrated ecosystem, enhanced performance',
  'uc1.toppings.features.integration.text': 'Native connectivity with your existing business tools (ERP, CRM, project management tools) for perfect synergy.',
  'uc1.toppings.features.integration.tag1': 'Native API',
  'uc1.toppings.features.integration.tag2': 'Real-Time Sync',

  'uc1.toppings.bottom_text': 'Each feature optimizes your small projects for maximum performance',
  'uc1.toppings.cta': 'Explore all features →',

  'uc1.reference_projects.headline': 'Our reference tenders for small projects',
  'uc1.reference_projects.subtitle': 'Discover how our clients transform their small projects with Aitenders AI',
  'uc1.reference_projects.project1.title': 'SME IT Modernization',
  'uc1.reference_projects.project1.sector': 'Technology',
  'uc1.reference_projects.project1.offer': 'Offer: €2.8M',
  'uc1.reference_projects.project1.desc': 'Complete IT infrastructure modernization for SME with cloud migration and team training.',
  'uc1.reference_projects.project1.result': '60% time reduction, winning offer delivered in 24h',
  'uc1.reference_projects.project1.impact': 'Immediate Go/No-Go, reassured team, convinced management',

  'uc1.reference_projects.project2.title': 'Building Energy Renovation',
  'uc1.reference_projects.project2.sector': 'Construction',
  'uc1.reference_projects.project2.offer': 'Offer: €4.2M',
  'uc1.reference_projects.project2.desc': 'Complete energy renovation of office building with environmental certification.',
  'uc1.reference_projects.project2.result': 'Complete analysis in 3h, internal validation in 1 day',
  'uc1.reference_projects.project2.impact': 'Zero surprises, guaranteed compliance, enhanced credibility',

  'uc1.reference_projects.project3.title': 'Integrated Security System',
  'uc1.reference_projects.project3.sector': 'Security',
  'uc1.reference_projects.project3.offer': 'Offer: €1.5M',
  'uc1.reference_projects.project3.desc': 'Deployment of integrated security system with video surveillance and access control.',
  'uc1.reference_projects.project3.result': 'Immediate structuring, critical points detected',
  'uc1.reference_projects.project3.impact': 'Quick decision, controlled process, eliminated stress',

  'uc1.reference_projects.impact_label': 'Client impact:',

  'uc1.roi_simulator.badge': 'Integrated ROI Simulator',
  'uc1.roi_simulator.headline': 'Calculate your ROI in real time',
  'uc1.roi_simulator.subtext': 'Smart simulator integrated into the page for immediate analysis of your small projects',

  'uc1.chat_actions.use_cases': 'Our use cases',
  'uc1.chat_actions.demo': 'UC1 Demo',
  'uc1.chat_actions.roi': 'ROI Calculator',
  'uc1.chat_actions.contact': 'Contact Expert',
};

// UC3 English
'uc3.hero.badge': 'Master large projects',
'uc3.hero.title': 'Coordinate and manage your mega-projects',
'uc3.hero.span': 'with surgical precision.',
'uc3.hero.description': 'The enterprise solution for large international projects (> €10M).',
'uc3.hero.demoButton': 'Book a Demo',
'uc3.hero.downloadButton': 'Download use case →',
'uc3.painPoints.headline': 'Your mega-project, 100% controlled, 0% improvisation',
'uc3.painPoints.text1': 'On large international projects, your teams navigate between dozens of lots.',
'uc3.painPoints.text2': 'With Aitenders, automatically orchestrate complexity.',
'uc3.painPoints.optimizeButton': 'Master Your Mega-Projects!',
'uc3.painPoints.demoButton': 'See the Demo',
'uc3.features.mainTitle': 'Your command center for mega-projects',
'uc3.features.subtitle': 'Coordinate, manage and master complexity.',
'uc3.features.feature1Title': 'Intelligent multi-lot coordination',
'uc3.features.feature1Text': 'Aitenders AI automatically orchestrates interactions.',
'uc3.features.feature1Highlight': 'Automatic orchestration of complexity!',
'uc3.features.feature2Title': 'International partnership management',
'uc3.features.feature2Text': 'Automatic coordination of international partners.',
'uc3.features.feature2Highlight': 'Automated global synchronization',
'uc3.features.feature3Title': 'Complex risk management',
'uc3.features.feature3Text': 'Proactive detection of systemic risks.',
'uc3.results_section.headline': 'What our users gain on mega-projects',
'uc3.results_section.subtitle': 'Transformative results for large organizations',
'uc3.results_section.card1_title': 'Program Director or CEO',
'uc3.results_section.card1_subtitle': 'Global vision, total control, assured success',
'uc3.results_section.card1_text': 'Serenely manage the most complex projects.',
'uc3.results_section.card1_point1': 'Complete visibility on complexity',
'uc3.results_section.card1_point2': 'Real-time informed decisions',
'uc3.results_section.card1_point3': 'Proactive risk anticipation',
'uc3.results_section.card2_title': 'International Project Manager or PMO',
'uc3.results_section.card2_subtitle': 'Smooth coordination, synchronized teams',
'uc3.results_section.card2_text': 'Effortlessly orchestrate distributed teams.',
'uc3.results_section.card2_point1': 'Automatic multi-site coordination',
'uc3.results_section.card2_point2': 'Real-time synchronization',
'uc3.results_section.card2_point3': 'Global consistency maintained',
'uc3.results_section.kpis.coordination': '90% coordination efficiency',
'uc3.results_section.kpis.risks': '95% of risks anticipated',
'uc3.results_section.kpis.teams': '100% of teams synchronized',
'uc3.results_section.kpis.extra': 'Total mastery of complexity',

// UC4 English
'uc4.hero.badge': 'Simple documents, fast processing',
'uc4.hero.title': 'Analyze and structure your small volumes',
'uc4.hero.span': 'in minutes.',
'uc4.hero.description': 'The optimized solution for small document volumes (1-10 documents).',
'uc4.hero.demoButton': 'Book a Demo',
'uc4.hero.downloadButton': 'Test the impact →',
'uc4.painPoints.headline': 'Your documents, analyzed and structured instantly',
'uc4.painPoints.text1': 'Faced with technical or contractual documents, your teams waste time.',
'uc4.painPoints.text2': 'With Aitenders, upload your documents and instantly get a structured analysis.',
'uc4.painPoints.optimizeButton': 'Optimize Your Analysis!',
'uc4.painPoints.demoButton': 'See the Demo',
'uc4.features.mainTitle': 'Your intelligent document analyzer',
'uc4.features.subtitle': 'Extract, structure and synthesize automatically.',
'uc4.features.feature1Title': 'Automatic extraction of key information',
'uc4.features.feature1Text': 'AI identifies and automatically extracts all important elements.',
'uc4.features.feature1Highlight': 'Never miss information again!',
'uc4.features.feature2Title': 'Intelligent content structuring',
'uc4.features.feature2Text': 'Automatic organization of information by themes and priorities.',
'uc4.features.feature2Highlight': 'Clear structure and intuitive navigation',
'uc4.features.feature3Title': 'Instant and actionable synthesis',
'uc4.features.feature3Text': 'Automatic generation of executive summaries.',
'uc4.results_section.headline': 'What our users gain on document analysis',
'uc4.results_section.subtitle': 'Immediate results for all professions',
'uc4.results_section.card1_title': 'Lawyer or Contract Manager',
'uc4.results_section.card1_subtitle': 'Precise analysis, risk points identified',
'uc4.results_section.card1_text': 'Instantly analyze any contract or legal document.',
'uc4.results_section.card1_point1': 'Instant contractual analysis',
'uc4.results_section.card1_point2': 'Sensitive clauses automatically detected',
'uc4.results_section.card1_point3': 'Vigilance points prioritized',
'uc4.results_section.card2_title': 'Project Manager or Consultant',
'uc4.results_section.card2_subtitle': 'Quick synthesis, immediate action',
'uc4.results_section.card2_text': 'Transform any technical document into a structured action plan.',
'uc4.results_section.card2_point1': 'Technical documents decrypted',
'uc4.results_section.card2_point2': 'Action plan automatically generated',
'uc4.results_section.card2_point3': 'Prioritized recommendations',
'uc4.results_section.kpis.speed': '10x faster than manual analysis',
'uc4.results_section.kpis.accuracy': '99% extraction accuracy',
'uc4.results_section.kpis.structure': '100% of documents structured',
'uc4.results_section.kpis.extra': 'Ready for immediate action',

// UC5 English
'uc5.hero.badge': 'Medium volumes, maximum efficiency',
'uc5.hero.title': 'Master your medium document volumes',
'uc5.hero.span': 'with augmented intelligence.',
'uc5.hero.description': 'The optimized platform for medium document volumes (10-500 documents).',
'uc5.hero.demoButton': 'Book a Demo',
'uc5.hero.downloadButton': 'Test the impact →',
'uc5.painPoints.headline': 'Your medium volumes, processed with industrial efficiency',
'uc5.painPoints.text1': 'With dozens or hundreds of documents to process, your teams get bogged down.',
'uc5.painPoints.text2': 'With Aitenders, industrialize your document processing.',
'uc5.painPoints.optimizeButton': 'Industrialize Your Analysis!',
'uc5.painPoints.demoButton': 'See the Demo',
'uc5.features.mainTitle': 'Your document intelligence factory',
'uc5.features.subtitle': 'Process, compare and synthesize at scale.',
'uc5.features.feature1Title': 'Industrialized batch processing',
'uc5.features.feature1Text': 'Automated batch processing processes.',
'uc5.features.feature1Highlight': 'Industrial efficiency guaranteed!',
'uc5.features.feature2Title': 'Multi-document comparative analysis',
'uc5.features.feature2Text': 'Automatic detection of similarities, differences and patterns.',
'uc5.features.feature2Highlight': 'Automatic cross-sectional vision',
'uc5.features.feature3Title': 'Multi-level intelligent synthesis',
'uc5.features.feature3Text': 'Generation of syntheses at several levels.',
'uc5.results_section.headline': 'What our users gain on medium volumes',
'uc5.results_section.subtitle': 'Industrial results for multiplied productivity',
'uc5.results_section.card1_title': 'Studies Director or Analysis Manager',
'uc5.results_section.card1_subtitle': 'Industrial productivity, preserved quality',
'uc5.results_section.card1_text': 'Process hundreds of documents with the same rigor.',
'uc5.results_section.card1_point1': '10x more documents processed',
'uc5.results_section.card1_point2': 'Analysis quality preserved',
'uc5.results_section.card1_point3': 'Automatic global vision',
'uc5.results_section.card2_title': 'Analyst or Studies Officer',
'uc5.results_section.card2_subtitle': 'Focus on expertise, automation of repetitive',
'uc5.results_section.card2_text': 'Free yourself from repetitive tasks.',
'uc5.results_section.card2_point1': 'Repetitive tasks automated',
'uc5.results_section.card2_point2': 'Focus on business expertise',
'uc5.results_section.card2_point3': 'Strategic analysis reinforced',
'uc5.results_section.kpis.volume': '10x more documents processed',
'uc5.results_section.kpis.consistency': '100% consistency maintained',
'uc5.results_section.kpis.insights': '5x more insights generated',
'uc5.results_section.kpis.extra': 'Industrial productivity',

// UC6 English
'uc6.hero.badge': 'Large volumes, maximum power',
'uc6.hero.title': 'Dominate massive document complexity',
'uc6.hero.span': 'with enterprise AI.',
'uc6.hero.description': 'The enterprise solution for large document volumes (> 500 documents).',
'uc6.hero.demoButton': 'Book a Demo',
'uc6.hero.downloadButton': 'Download use case →',
'uc6.painPoints.headline': 'Your document big data, mastered and valued',
'uc6.painPoints.text1': 'Faced with thousands of documents, your teams are overwhelmed.',
'uc6.painPoints.text2': 'With Aitenders Enterprise, transform this complexity into advantage.',
'uc6.painPoints.optimizeButton': 'Master Document Big Data!',
'uc6.painPoints.demoButton': 'See the Demo',
'uc6.features.mainTitle': 'Your enterprise document mastery platform',
'uc6.features.subtitle': 'Process massively, analyze globally, decide strategically.',
'uc6.features.feature1Title': 'Parallelized massive processing',
'uc6.features.feature1Text': 'Scalable cloud architecture with parallel processing.',
'uc6.features.feature1Highlight': 'Unlimited computing power!',
'uc6.features.feature2Title': 'Collective intelligence and global patterns',
'uc6.features.feature2Text': 'Automatic detection of complex patterns.',
'uc6.features.feature2Highlight': 'Automatic strategic vision',
'uc6.features.feature3Title': 'Real-time executive dashboards',
'uc6.features.feature3Text': 'Executive dashboards with strategic KPIs.',
'uc6.results_section.headline': 'What our users gain on large volumes',
'uc6.results_section.subtitle': 'Transformative results for enterprise organizations',
'uc6.results_section.card1_title': 'CEO or CDO',
'uc6.results_section.card1_subtitle': 'Strategic vision, informed decisions, competitive advantage',
'uc6.results_section.card1_text': 'Transform your document heritage into a decisive strategic advantage.',
'uc6.results_section.card1_point1': 'Complete strategic vision',
'uc6.results_section.card1_point2': 'Data-driven decisions',
'uc6.results_section.card1_point3': 'Sustainable competitive advantage',
'uc6.results_section.card2_title': 'Knowledge Director or CDO',
'uc6.results_section.card2_subtitle': 'Heritage valued, intelligence amplified',
'uc6.results_section.card2_text': 'Fully exploit the potential of your document heritage.',
'uc6.results_section.card2_point1': 'Document heritage valued',
'uc6.results_section.card2_point2': 'Collective intelligence revealed',
'uc6.results_section.card2_point3': 'Strategic opportunities identified',
'uc6.results_section.kpis.scale': 'Thousands of documents processed simultaneously',
'uc6.results_section.kpis.insights': '100x more strategic insights',
'uc6.results_section.kpis.decisions': '90% of decisions accelerated',
'uc6.results_section.kpis.extra': 'Complete digital transformation',

// Specific UI translations - English
'uc2.impact_client': 'Client impact:',
'uc2.reference_projects.impact_label': 'Client impact:',
'simulator.title': 'Aitenders ROI Simulator',
'simulator.useCase': 'Use case:',
'simulator.multiProject': '• Multi-Project Simulation',
'simulator.description': '📊 **AITENDERS ROI SIMULATOR FOR YOUR NEEDS**\n\n⏱️ Estimated time: 3-5 minutes\n📧 You will receive your detailed report by email\n\n---\n\n**Question 1/4: Volume and Types of Projects**\n\nTo better calculate your ROI, can you describe the volume of projects you bid on annually?\n\n**📋 Example responses:**\n• "100 small projects around €5M"\n• "50 medium projects of €20M"\n• "5 large projects of €100M"\n\n💡 **You can respond in natural language.**',
'simulator.processing': 'Processing...',
'simulator.helpText': '💡 You can respond in natural language or use the suggested formats',
'chat.inputPlaceholder': 'Type your response here...',
};

// Spanish translations for all UCs
const allUCSpanishTranslations = {
  // UC1 Spanish
  'uc1.hero.badge': 'Acelere el Análisis de Ofertas Repetitivas',
  'uc1.hero.title': 'Análisis go/no-go',
  'uc1.hero.span': 'inmediato',
  'uc1.hero.title2': ', alineado con sus',
  'uc1.hero.span2': 'procesos internos.',
  'uc1.hero.description': 'La única plataforma diseñada para proyectos pequeños de ciclos cortos: Agentes IA de análisis de puntos clave, automatización de síntesis y validación guiada. Transforme horas de revisión y análisis en',
  'uc1.hero.description_span': 'minutos',
  'uc1.hero.description2': ', gane tranquilidad y entregue una oferta sólida e incontestable — sin sobrecarga ni arranques en falso.',
  'uc1.hero.demoButton': 'Reservar Demo',
  'uc1.hero.downloadButton': 'Descargar el caso de uso →',

  'uc1.painPoints.headline': 'Go / No-Go inmediato',
  'uc1.painPoints.headline_span': ', proceso interno garantizado',
  'uc1.painPoints.text1': 'En proyectos pequeños, la presión es doble: analizar rápido y demostrar que todo ha sido leído, comprendido y controlado.',
  'uc1.painPoints.text2': 'Sin soporte transversal (calidad, jurídico), cada olvido puede costar caro en margen de ejecución y por tanto en credibilidad interna.',
  'uc1.painPoints.text3': 'Con Aitenders, obtenga en minutos una visión clara y priorizada de sus documentos para un go/no-go inmediato. La plataforma luego guía la validación y archiva cada control, garantizando que sus obligaciones internas se cumplan sin sobrecarga.',
  'uc1.painPoints.contactButton': 'Contacto Comercial',
  'uc1.painPoints.demoButton': 'Ver Demo Rápida',

  'uc1.solution_section.mainTitle': 'Su',
  'uc1.solution_section.mainTitle_span': 'copiloto IA',
  'uc1.solution_section.mainTitle2': 'que acelera el análisis de sus proyectos pequeños',
  'uc1.solution_section.subtitle': 'Decida rápido y demuestre que todo ha sido controlado, en menos de 48h.',

  'uc1.solution_section.feature1_title': 'Estructuración instantánea para un primer "go / no-go"',
  'uc1.solution_section.feature1_span': 'inmediato',
  'uc1.solution_section.feature1_text': 'Gracias a los asistentes IA, sus documentos son instantáneamente analizados, clasificados y priorizados: criterios de interés, puntos críticos y pruebas asociadas se detectan en minutos. El Responsable de Oferta así comienza con una base clara y explotable: visión global del proyecto, identificación de puntos bloqueantes eventuales y posibilidad de decidir casi inmediatamente un "go / no-go".',
  'uc1.solution_section.feature1_highlight': 'Su análisis listo antes de la primera reunión',

  'uc1.solution_section.feature2_title': 'Acceda a una visión',
  'uc1.solution_section.feature2_span': 'clara',
  'uc1.solution_section.feature2_title2': 'de su proyecto',
  'uc1.solution_section.feature2_text': 'Aitenders genera una vista clara y priorizada del conjunto de criterios detectados, con sus valores y enlaces directos a los documentos fuente. El Responsable de Oferta ya no necesita revisar cientos de páginas o hacer malabarismos entre múltiples archivos: todo está reunido en una síntesis visual, explotable inmediatamente.',
  'uc1.solution_section.feature2_highlight': 'Su revisión interna lista en minutos',

  'uc1.solution_section.feature3_title': 'Valide y archive cada punto',
  'uc1.solution_section.feature3_span': 'sin esfuerzo',
  'uc1.solution_section.feature3_text': 'Aitenders le guía paso a paso para confirmar, ajustar o rechazar cada elemento identificado por la IA. Cada validación es automáticamente trazada e historizada, creando un expediente de pruebas completo. El responsable de oferta pasa de una validación manual, lenta e incierta a un proceso fluido, seguro e incontestable.',
  'uc1.solution_section.feature3_highlight': 'Se acabaron las zonas grises: todo está validado y trazado.',

  'uc1.results_section.headline': 'Lo que nuestros usuarios obtienen concretamente para las ofertas pequeñas',
  'uc1.results_section.subtitle': 'Resultados medibles para cada perfil de usuario',

  'uc1.results_section.card1_title': 'Director Comercial o Director de Ofertas',
  'uc1.results_section.card1_subtitle': 'Decisión rápida, proceso validado, credibilidad reforzada',
  'uc1.results_section.card1_text': 'Obtenga en menos de 48h un análisis completo y documentado, listo para presentar. Decide desde el primer día gracias a un go / no-go inmediato y demuestra que cada punto ha sido controlado y validado. Este enfoque garantiza transparencia, reduce los vaivenes internos y refuerza la confianza durante los comités.',
  'uc1.results_section.card1_point1': 'Decisión informada desde D+1 gracias a análisis instantáneo',
  'uc1.results_section.card1_point2': 'Proceso interno respetado e integralmente trazado',
  'uc1.results_section.card1_point3': 'Transparencia total sobre puntos críticos',
  'uc1.results_section.card1_point4': 'Credibilidad reforzada durante comités',

  'uc1.results_section.card2_title': 'Responsable de Oferta, Jefe de Proyecto, Asistentes comerciales',
  'uc1.results_section.card2_subtitle': 'Análisis rápido, validación fluida, serenidad recuperada',
  'uc1.results_section.card2_text': 'Trabaje desde el primer día sobre una base IA ya estructurada y priorizada, sin reprocesamiento manual. Dispone de una vista sintética y accionable de puntos a validar, acceso inmediato a pruebas y seguimiento claro de sus validaciones. Resultado: menos estrés, ganancia de tiempo masiva y capacidad de demostrar en cualquier momento que todo ha sido controlado y trazado.',
  'uc1.results_section.card2_point1': 'Menos relecturas, más decisiones estratégicas',
  'uc1.results_section.card2_point2': 'Cada punto cubierto, cada prueba archivada',
  'uc1.results_section.card2_point3': 'Credibilidad reforzada ante decisores internos',
  'uc1.results_section.card2_point4': 'Validación fluida e integralmente documentada',

  'uc1.results_section.kpis.time': 'Ganancia de tiempo',
  'uc1.results_section.kpis.time_desc': 'Reducción del tiempo de análisis de documentos',
  'uc1.results_section.kpis.compliance': 'Conformidad',
  'uc1.results_section.kpis.compliance_desc': 'Criterios críticos verificados y documentados',
  'uc1.results_section.kpis.serenity': 'Serenidad máxima',
  'uc1.results_section.kpis.serenity_title': 'Impacto organizacional',
  'uc1.results_section.kpis.serenity_desc': 'Confianza reforzada, estrés reducido, cero escalada interna',

  'uc1.toppings.badge': 'Funcionalidades Wow',
  'uc1.toppings.headline': 'Capacidades',
  'uc1.toppings.headline_span': 'avanzadas',
  'uc1.toppings.headline2': 'que transforman su enfoque comercial',
  'uc1.toppings.subtitle': 'Más allá de la generación rápida, descubra funcionalidades que añaden una dimensión estratégica a su desarrollo comercial.',

  'uc1.toppings.project_summary.title': 'Resumen automático del proyecto',
  'uc1.toppings.project_summary.desc': 'Generación instantánea de un resumen claro de objetivos y contexto del proyecto, mostrado en el dashboard.',
  'uc1.toppings.project_summary.tag': 'Project Summary',
  'uc1.toppings.project_summary.click': 'Clic para detalles',

  'uc1.toppings.implicit_requirements.title': 'Detección de requisitos implícitos',
  'uc1.toppings.implicit_requirements.desc': 'La IA identifica automáticamente los "requisitos ocultos" (no expresados claramente) en los documentos.',
  'uc1.toppings.implicit_requirements.tag': 'Implicit Requirement Detector',
  'uc1.toppings.implicit_requirements.click': 'Clic para detalles',

  'uc1.toppings.document_summary.title': 'Resumen inteligente de cada documento',
  'uc1.toppings.document_summary.desc': 'Cada documento se resume en pocas líneas, disponible en el centro de documentos y reutilizable por la IA.',
  'uc1.toppings.document_summary.tag': 'Document Summary',
  'uc1.toppings.document_summary.click': 'Clic para detalles',

  'uc1.toppings.document_hierarchy.title': 'Gestión dinámica de jerarquía documental',
  'uc1.toppings.document_hierarchy.desc': 'Los documentos se clasifican automáticamente según su importancia, definida por el usuario o la IA.',
  'uc1.toppings.document_hierarchy.tag': 'Document Precedence',
  'uc1.toppings.document_hierarchy.click': 'Clic para detalles',

  'uc1.toppings.content_categorization.title': 'Categorización inteligente y árbol temático',
  'uc1.toppings.content_categorization.desc': 'La información se clasifica automáticamente por tema (jurídico, técnico, planificación…) y se restituye como árbol visual.',
  'uc1.toppings.content_categorization.tag': 'Content Categorization',
  'uc1.toppings.content_categorization.click': 'Clic para detalles',

  'uc1.toppings.project_chat.title': 'Chat contextual con el proyecto',
  'uc1.toppings.project_chat.desc': 'Haga cualquier pregunta sobre el proyecto a la IA y obtenga respuestas precisas con fuentes.',
  'uc1.toppings.project_chat.tag': 'Project Chat',
  'uc1.toppings.project_chat.click': 'Clic para detalles',

  // UC1 Additional Spanish translations to match UC2 structure
  'uc1.pain_points.title1': 'Plazos ajustados comprometen la calidad',
  'uc1.pain_points.description1': 'Respuestas apresuradas en proyectos pequeños crean una imagen degradada y reducen las posibilidades de éxito',
  'uc1.pain_points.title2': 'Procesos ineficientes y repetitivos',
  'uc1.pain_points.description2': 'Tiempo perdido en tareas manuales recurrentes en detrimento de la personalización y el valor añadido',
  'uc1.pain_points.title3': 'Falta de estandarización',
  'uc1.pain_points.description3': 'Inconsistencias entre ofertas y ausencia de capitalización sobre éxitos anteriores',

  'uc1.solutions.title1': 'Generación rápida de ofertas estructuradas',
  'uc1.solutions.description1': 'IA especializada que produce respuestas completas y conformes en solo unas horas',
  'uc1.solutions.title2': 'Plantillas y contenidos pre-validados',
  'uc1.solutions.description2': 'Biblioteca de argumentarios probados y respuestas estandarizadas para calidad constante',
  'uc1.solutions.title3': 'Validación automática de requisitos',
  'uc1.solutions.description3': 'Verificación sistemática del pliego de condiciones para evitar olvidos críticos',

  'uc1.journey.title1': 'Analizar las especificaciones',
  'uc1.journey.description1': 'Importa tu licitación y deja que la IA extraiga automáticamente todos los requisitos clave',
  'uc1.journey.title2': 'Generar tu respuesta estructurada',
  'uc1.journey.description2': 'Crea instantáneamente una propuesta completa con argumentos adaptados y cumplimiento asegurado',
  'uc1.journey.title3': 'Personalizar y finalizar',
  'uc1.journey.description3': 'Refina tu oferta con elementos diferenciadores manteniendo la estructura ganadora',

  'uc1.audiences.bidManagers': 'Responsables de Ofertas',
  'uc1.audiences.bidManagersDesc': 'Análisis rápido y validación de oportunidades comerciales',
  'uc1.audiences.salesDirectors': 'Directores Comerciales',
  'uc1.audiences.salesDirectorsDesc': 'Visión estratégica y decisión go/no-go inmediata',

  'uc1.kpis.description1': 'Reducción del tiempo de análisis',
  'uc1.kpis.description2': 'Cobertura automática de requisitos',
  'uc1.kpis.description3': 'Mejora de la calidad de ofertas',
  'uc1.kpis.description4': 'Conformidad de entregables',
  'uc1.results_section.kpis.time_value': '75% de tiempo de análisis ahorrado',
  'uc1.results_section.kpis.clauses_value': '100% de criterios críticos identificados',
  'uc1.results_section.kpis.surprise_value': '0 olvido crítico, control total',
  'uc1.results_section.kpis.extra_value': 'Go/No-Go inmediato y documentado',

  'uc1.differentiators.title1': 'Solución Dedicada a Proyectos Pequeños',
  'uc1.differentiators.description1': 'Optimizada específicamente para ciclos cortos y presupuestos limitados',
  'uc1.differentiators.title2': 'Inteligencia Comercial Integrada',
  'uc1.differentiators.description2': 'IA especializada en análisis rápido y toma de decisiones comerciales',
  'uc1.differentiators.title3': 'Flujos de Trabajo Automatizados',
  'uc1.differentiators.description3': 'Procesos optimizados para maximizar la productividad de equipos comerciales',

  'uc1.toppings.features.summary.title': 'Resumen automático avanzado',
  'uc1.toppings.features.summary.text': 'Generación inteligente de síntesis multi-nivel con recomendaciones estratégicas y puntos de atención prioritarios.',
  'uc1.toppings.features.summary.tag1': 'Síntesis Multi-Nivel',
  'uc1.toppings.features.summary.tag2': 'Recomendaciones IA',

  'uc1.toppings.features.validation.title': 'Validación colaborativa inteligente',
  'uc1.toppings.features.validation.text': 'Sistema de validación colaborativa con flujo de aprobación automatizado y trazabilidad completa de decisiones.',
  'uc1.toppings.features.validation.tag1': 'Flujo Colaborativo',
  'uc1.toppings.features.validation.tag2': 'Trazabilidad Completa',

  'uc1.toppings.features.learning.title': 'Aprendizaje continuo y optimización',
  'uc1.toppings.features.learning.text': 'La IA aprende de tus decisiones pasadas y resultados de ofertas para mejorar continuamente sus recomendaciones.',
  'uc1.toppings.features.learning.tag': 'Mejora Continua',

  'uc1.toppings.features.integration.title': 'Ecosistema integrado, rendimiento mejorado',
  'uc1.toppings.features.integration.text': 'Conectividad nativa con tus herramientas empresariales existentes (ERP, CRM, herramientas de gestión de proyectos) para sinergia perfecta.',
  'uc1.toppings.features.integration.tag1': 'API Nativa',
  'uc1.toppings.features.integration.tag2': 'Sincronización Tiempo Real',

  'uc1.toppings.bottom_text': 'Cada funcionalidad optimiza tus proyectos pequeños para máximo rendimiento',
  'uc1.toppings.cta': 'Explorar todas las funcionalidades →',

  'uc1.reference_projects.headline': 'Nuestras licitaciones de referencia para proyectos pequeños',
  'uc1.reference_projects.subtitle': 'Descubre cómo nuestros clientes transforman sus proyectos pequeños con IA Aitenders',
  'uc1.reference_projects.project1.title': 'Modernización IT PYME',
  'uc1.reference_projects.project1.sector': 'Tecnología',
  'uc1.reference_projects.project1.offer': 'Oferta: 2,8 M€',
  'uc1.reference_projects.project1.desc': 'Modernización completa de infraestructura IT de PYME con migración cloud y formación de equipos.',
  'uc1.reference_projects.project1.result': '60% reducción de tiempo, oferta ganadora entregada en 24h',
  'uc1.reference_projects.project1.impact': 'Go/No-Go inmediato, equipo tranquilizado, dirección convencida',

  'uc1.reference_projects.project2.title': 'Renovación Energética Edificio',
  'uc1.reference_projects.project2.sector': 'Construcción',
  'uc1.reference_projects.project2.offer': 'Oferta: 4,2 M€',
  'uc1.reference_projects.project2.desc': 'Renovación energética completa de edificio terciario con certificación ambiental.',
  'uc1.reference_projects.project2.result': 'Análisis completo en 3h, validación interna en 1 día',
  'uc1.reference_projects.project2.impact': 'Cero sorpresas, cumplimiento garantizado, credibilidad reforzada',

  'uc1.reference_projects.project3.title': 'Sistema de Seguridad Integrado',
  'uc1.reference_projects.project3.sector': 'Seguridad',
  'uc1.reference_projects.project3.offer': 'Oferta: 1,5 M€',
  'uc1.reference_projects.project3.desc': 'Despliegue de sistema de seguridad integrado con videovigilancia y control de acceso.',
  'uc1.reference_projects.project3.result': 'Estructuración inmediata, puntos críticos detectados',
  'uc1.reference_projects.project3.impact': 'Decisión rápida, proceso controlado, estrés eliminado',

  'uc1.reference_projects.impact_label': 'Impacto cliente:',

  'uc1.roi_simulator.badge': 'Simulador ROI Integrado',
  'uc1.roi_simulator.headline': 'Calcula tu ROI en tiempo real',
  'uc1.roi_simulator.subtext': 'Simulador inteligente integrado en la página para análisis inmediato de tus proyectos pequeños',

  'uc1.chat_actions.use_cases': 'Nuestros casos de uso',
  'uc1.chat_actions.demo': 'Demo UC1',
  'uc1.chat_actions.roi': 'Calculadora ROI',
  'uc1.chat_actions.contact': 'Contactar Experto',
};

// German translations for all UCs
const allUCGermanTranslations = {
  // UC1 German
  'uc1.hero.badge': 'Beschleunigen Sie die Analyse repetitiver Angebote',
  'uc1.hero.title': 'Sofortige Go/No-Go',
  'uc1.hero.span': 'Analyse',
  'uc1.hero.title2': ', abgestimmt auf Ihre',
  'uc1.hero.span2': 'internen Prozesse.',
  'uc1.hero.description': 'Die einzige Plattform, die für kurzzyklische kleine Projekte konzipiert wurde: KI-Agenten für die Analyse von Schlüsselpunkten, Automatisierung der Synthese und geführte Validierung. Verwandeln Sie Stunden der Überprüfung und Analyse in',
  'uc1.hero.description_span': 'Minuten',
  'uc1.hero.description2': ', gewinnen Sie Seelenfrieden und liefern Sie solide, unbestreitbare Angebote — ohne Überlastung oder Fehlstarts.',
  'uc1.hero.demoButton': 'Demo buchen',
  'uc1.hero.downloadButton': 'Anwendungsfall herunterladen →',

  'uc1.painPoints.headline': 'Sofortiges Go / No-Go',
  'uc1.painPoints.headline_span': ', garantierter interner Prozess',
  'uc1.painPoints.text1': 'Bei kleinen Projekten ist der Druck doppelt: schnell analysieren und beweisen, dass alles gelesen, verstanden und kontrolliert wurde.',
  'uc1.painPoints.text2': 'Ohne funktionsübergreifende Unterstützung (Qualität, Recht) kann jede Nachlässigkeit teuer in der Ausführungsmarge und damit in der internen Glaubwürdigkeit werden.',
  'uc1.painPoints.text3': 'Mit Aitenders erhalten Sie in Minuten eine klare und priorisierte Sicht auf Ihre Dokumente für ein sofortiges Go/No-Go. Die Plattform führt dann die Validierung und archiviert jede Kontrolle, garantiert, dass Ihre internen Verpflichtungen ohne Überlastung erfüllt werden.',
  'uc1.painPoints.contactButton': 'Kommerzieller Kontakt',
  'uc1.painPoints.demoButton': 'Schnelle Demo ansehen',

  'uc1.solution_section.mainTitle': 'Ihr',
  'uc1.solution_section.mainTitle_span': 'KI-Copilot',
  'uc1.solution_section.mainTitle2': 'der die Analyse Ihrer kleinen Projekte beschleunigt',
  'uc1.solution_section.subtitle': 'Entscheiden Sie schnell und beweisen Sie, dass alles kontrolliert wurde, in weniger als 48h.',

  'uc1.solution_section.feature1_title': 'Sofortige Strukturierung für ein erstes',
  'uc1.solution_section.feature1_span': '"Go / No-Go"',
  'uc1.solution_section.feature1_text': 'Dank KI-Assistenten werden Ihre Dokumente sofort analysiert, klassifiziert und priorisiert: Interessenskriterien, kritische Punkte und zugehörige Beweise werden in Minuten erkannt. Der Angebotsmanager startet so mit einer klaren und nutzbaren Basis: globale Projektvision, Identifikation möglicher Blockadepunkte und die Möglichkeit, fast sofort ein "Go / No-Go" zu entscheiden.',
  'uc1.solution_section.feature1_highlight': 'Ihre Analyse bereit vor dem ersten Meeting',

  'uc1.solution_section.feature2_title': 'Erhalten Sie eine',
  'uc1.solution_section.feature2_span': 'klare Sicht',
  'uc1.solution_section.feature2_title2': 'auf Ihr Projekt',
  'uc1.solution_section.feature2_text': 'Aitenders generiert eine klare und priorisierte Sicht auf alle erkannten Kriterien, mit ihren Werten und direkten Links zu Quelldokumenten. Der Angebotsmanager muss nicht mehr hunderte Seiten durchgehen oder zwischen mehreren Dateien jonglieren: alles ist in einer visuellen Synthese zusammengefasst, sofort nutzbar.',
  'uc1.solution_section.feature2_highlight': 'Ihre interne Überprüfung in Minuten bereit',

  'uc1.solution_section.feature3_title': 'Validieren und archivieren Sie jeden Punkt',
  'uc1.solution_section.feature3_span': 'mühelos',
  'uc1.solution_section.feature3_text': 'Aitenders führt Sie Schritt für Schritt durch die Bestätigung, Anpassung oder Ablehnung jedes von der KI identifizierten Elements. Jede Validierung wird automatisch verfolgt und historisiert, wodurch eine vollständige Beweisakte erstellt wird. Der Angebotsverantwortliche wechselt von einer manuellen, langsamen und unsicheren Validierung zu einem fließenden, sicheren und unbestreitbaren Prozess.',
  'uc1.solution_section.feature3_highlight': 'Keine Grauzonen mehr: alles ist validiert und verfolgt.',

  'uc1.results_section.headline': 'Was unsere Nutzer konkret für kleine Angebote erhalten',
  'uc1.results_section.subtitle': 'Messbare Ergebnisse für jedes Nutzerprofil',

  'uc1.results_section.card1_title': 'Vertriebsdirektor oder Angebotsdirektor',
  'uc1.results_section.card1_subtitle': 'Schnelle Entscheidung, validierter Prozess, verstärkte Glaubwürdigkeit',
  'uc1.results_section.card1_text': 'Erhalten Sie in weniger als 48h eine vollständige und dokumentierte Analyse, präsentationsbereit. Sie entscheiden vom ersten Tag an dank sofortigem Go / No-Go und zeigen, dass jeder Punkt kontrolliert und validiert wurde. Dieser Ansatz garantiert Transparenz, reduziert interne Rückfragen und stärkt das Vertrauen bei Ausschüssen.',
  'uc1.results_section.card1_point1': 'Fundierte Entscheidung ab T+1 dank sofortiger Analyse',
  'uc1.results_section.card1_point2': 'Interner Prozess respektiert und vollständig verfolgt',
  'uc1.results_section.card1_point3': 'Totale Transparenz bei kritischen Punkten',
  'uc1.results_section.card1_point4': 'Verstärkte Glaubwürdigkeit bei Ausschüssen',

  'uc1.results_section.card2_title': 'Angebotsmanager, Projektleiter, Vertriebsassistenten',
  'uc1.results_section.card2_subtitle': 'Schnelle Analyse, reibungslose Validierung, wiedergefundene Gelassenheit',
  'uc1.results_section.card2_text': 'Arbeiten Sie vom ersten Tag an auf einer bereits strukturierten und priorisierten KI-Basis, ohne manuelle Nachbearbeitung. Sie haben eine synthetische und umsetzbare Sicht auf zu validierende Punkte, sofortigen Zugang zu Beweisen und klare Verfolgung Ihrer Validierungen. Ergebnis: weniger Stress, massive Zeitersparnis und die Fähigkeit, jederzeit zu demonstrieren, dass alles kontrolliert und verfolgt wurde.',
  'uc1.results_section.card2_point1': 'Weniger Nachprüfungen, mehr strategische Entscheidungen',
  'uc1.results_section.card2_point2': 'Jeder Punkt abgedeckt, jeder Beweis archiviert',
  'uc1.results_section.card2_point3': 'Verstärkte Glaubwürdigkeit bei internen Entscheidungsträgern',
  'uc1.results_section.card2_point4': 'Reibungslose Validierung und vollständig dokumentiert',

  'uc1.results_section.kpis.time': 'Zeitersparnis',
  'uc1.results_section.kpis.time_desc': 'Reduzierung der Dokumentenanalysezeit',
  'uc1.results_section.kpis.compliance': 'Compliance',
  'uc1.results_section.kpis.compliance_desc': 'Kritische Kriterien überprüft und dokumentiert',
  'uc1.results_section.kpis.serenity': 'Maximale Gelassenheit',
  'uc1.results_section.kpis.serenity_title': 'Organisatorische Auswirkung',
  'uc1.results_section.kpis.serenity_desc': 'Verstärktes Vertrauen, reduzierter Stress, null interne Eskalation',

  'uc1.toppings.badge': 'Wow-Features',
  'uc1.toppings.headline': 'Erweiterte',
  'uc1.toppings.headline_span': 'Fähigkeiten',
  'uc1.toppings.headline2': 'die Ihren kommerziellen Ansatz transformieren',
  'uc1.toppings.subtitle': 'Jenseits der schnellen Generierung entdecken Sie Features, die eine strategische Dimension zu Ihrer Geschäftsentwicklung hinzufügen.',

  'uc1.toppings.project_summary.title': 'Automatische Projektzusammenfassung',
  'uc1.toppings.project_summary.desc': 'Sofortige Generierung einer klaren Zusammenfassung der Projektziele und des Kontexts, angezeigt im Dashboard.',
  'uc1.toppings.project_summary.tag': 'Project Summary',
  'uc1.toppings.project_summary.click': 'Klicken für Details',

  'uc1.toppings.implicit_requirements.title': 'Erkennung impliziter Anforderungen',
  'uc1.toppings.implicit_requirements.desc': 'KI identifiziert automatisch "versteckte Anforderungen" (nicht klar ausgedrückt) in Dokumenten.',
  'uc1.toppings.implicit_requirements.tag': 'Implicit Requirement Detector',
  'uc1.toppings.implicit_requirements.click': 'Klicken für Details',

  'uc1.toppings.document_summary.title': 'Intelligente Zusammenfassung jedes Dokuments',
  'uc1.toppings.document_summary.desc': 'Jedes Dokument wird in wenigen Zeilen zusammengefasst, verfügbar im Doc Center und wiederverwendbar durch KI.',
  'uc1.toppings.document_summary.tag': 'Document Summary',
  'uc1.toppings.document_summary.click': 'Klicken für Details',

  'uc1.toppings.document_hierarchy.title': 'Dynamisches Dokumentenhierarchie-Management',
  'uc1.toppings.document_hierarchy.desc': 'Dokumente werden automatisch nach Wichtigkeit klassifiziert, definiert durch Benutzer oder KI.',
  'uc1.toppings.document_hierarchy.tag': 'Document Precedence',
  'uc1.toppings.document_hierarchy.click': 'Klicken für Details',

  'uc1.toppings.content_categorization.title': 'Intelligente Kategorisierung & thematischer Baum',
  'uc1.toppings.content_categorization.desc': 'Informationen werden automatisch nach Thema klassifiziert (rechtlich, technisch, Planung…) und als visueller Baum dargestellt.',
  'uc1.toppings.content_categorization.tag': 'Content Categorization',
  'uc1.toppings.content_categorization.click': 'Klicken für Details',

  'uc1.toppings.project_chat.title': 'Kontextueller Chat mit dem Projekt',
  'uc1.toppings.project_chat.desc': 'Stellen Sie der KI jede Frage zum Projekt und erhalten Sie präzise Antworten mit Quellen.',
  'uc1.toppings.project_chat.tag': 'Project Chat',
  'uc1.toppings.project_chat.click': 'Klicken für Details',

  // UC1 Additional German translations to match UC2 structure
  'uc1.pain_points.title1': 'Enge Fristen gefährden die Qualität',
  'uc1.pain_points.description1': 'Hastige Antworten bei kleinen Projekten schaffen ein schlechtes Image und reduzieren Erfolgschancen',
  'uc1.pain_points.title2': 'Ineffiziente und sich wiederholende Prozesse',
  'uc1.pain_points.description2': 'Zeitverlust bei wiederkehrenden manuellen Aufgaben auf Kosten von Anpassung und Mehrwert',
  'uc1.pain_points.title3': 'Mangel an Standardisierung',
  'uc1.pain_points.description3': 'Inkonsistenzen zwischen Angeboten und fehlende Kapitalisierung früherer Erfolge',

  'uc1.solutions.title1': 'Schnelle Generierung strukturierter Angebote',
  'uc1.solutions.description1': 'Spezialisierte KI, die vollständige und konforme Antworten in nur wenigen Stunden produziert',
  'uc1.solutions.title2': 'Vorvalidierte Vorlagen und Inhalte',
  'uc1.solutions.description2': 'Bibliothek bewährter Argumente und standardisierter Antworten für konstante Qualität',
  'uc1.solutions.title3': 'Automatische Anforderungsvalidierung',
  'uc1.solutions.description3': 'Systematische Überprüfung der Spezifikationen zur Vermeidung kritischer Übersehungen',

  'uc1.journey.title1': 'Spezifikationen analysieren',
  'uc1.journey.description1': 'Importieren Sie Ihre Ausschreibung und lassen Sie KI automatisch alle Schlüsselanforderungen extrahieren',
  'uc1.journey.title2': 'Strukturierte Antwort generieren',
  'uc1.journey.description2': 'Erstellen Sie sofort einen vollständigen Vorschlag mit angepassten Argumenten und gesicherter Compliance',
  'uc1.journey.title3': 'Anpassen und finalisieren',
  'uc1.journey.description3': 'Verfeinern Sie Ihr Angebot mit differenzierenden Elementen bei Beibehaltung der Gewinnstruktur',

  'uc1.audiences.bidManagers': 'Angebotsmanager',
  'uc1.audiences.bidManagersDesc': 'Schnelle Analyse und Validierung kommerzieller Möglichkeiten',
  'uc1.audiences.salesDirectors': 'Vertriebsdirektoren',
  'uc1.audiences.salesDirectorsDesc': 'Strategische Vision und sofortige Go/No-Go-Entscheidung',

  'uc1.kpis.description1': 'Reduzierung der Analysezeit',
  'uc1.kpis.description2': 'Automatische Anforderungsabdeckung',
  'uc1.kpis.description3': 'Verbesserung der Angebotsqualität',
  'uc1.kpis.description4': 'Lieferbare Compliance',
  'uc1.results_section.kpis.time_value': '75% gesparte Analysezeit',
  'uc1.results_section.kpis.clauses_value': '100% kritische Kriterien identifiziert',
  'uc1.results_section.kpis.surprise_value': '0 kritische Übersehung, totale Kontrolle',
  'uc1.results_section.kpis.extra_value': 'Sofortiges und dokumentiertes Go/No-Go',

  'uc1.differentiators.title1': 'Lösung für kleine Projekte',
  'uc1.differentiators.description1': 'Speziell optimiert für kurze Zyklen und begrenzte Budgets',
  'uc1.differentiators.title2': 'Integrierte kommerzielle Intelligenz',
  'uc1.differentiators.description2': 'KI spezialisiert auf schnelle Analyse und kommerzielle Entscheidungsfindung',
  'uc1.differentiators.title3': 'Automatisierte Workflows',
  'uc1.differentiators.description3': 'Optimierte Prozesse zur Maximierung der Produktivität von Verkaufsteams',

  'uc1.toppings.features.summary.title': 'Erweiterte automatische Zusammenfassung',
  'uc1.toppings.features.summary.text': 'Intelligente Generierung mehrstufiger Synthesen mit strategischen Empfehlungen und prioritären Aufmerksamkeitspunkten.',
  'uc1.toppings.features.summary.tag1': 'Mehrstufige Synthese',
  'uc1.toppings.features.summary.tag2': 'KI-Empfehlungen',

  'uc1.toppings.features.validation.title': 'Intelligente kollaborative Validierung',
  'uc1.toppings.features.validation.text': 'Kollaboratives Validierungssystem mit automatisiertem Genehmigungsworkflow und vollständiger Entscheidungsrückverfolgbarkeit.',
  'uc1.toppings.features.validation.tag1': 'Kollaborativer Workflow',
  'uc1.toppings.features.validation.tag2': 'Vollständige Rückverfolgbarkeit',

  'uc1.toppings.features.learning.title': 'Kontinuierliches Lernen und Optimierung',
  'uc1.toppings.features.learning.text': 'KI lernt aus Ihren vergangenen Entscheidungen und Angebotsergebnissen, um ihre Empfehlungen kontinuierlich zu verbessern.',
  'uc1.toppings.features.learning.tag': 'Kontinuierliche Verbesserung',

  'uc1.toppings.features.integration.title': 'Integriertes Ökosystem, verbesserte Leistung',
  'uc1.toppings.features.integration.text': 'Native Konnektivität mit Ihren bestehenden Geschäftstools (ERP, CRM, Projektmanagement-Tools) für perfekte Synergie.',
  'uc1.toppings.features.integration.tag1': 'Native API',
  'uc1.toppings.features.integration.tag2': 'Echtzeit-Synchronisation',

  'uc1.toppings.bottom_text': 'Jede Funktion optimiert Ihre kleinen Projekte für maximale Leistung',
  'uc1.toppings.cta': 'Alle Funktionen erkunden →',

  'uc1.reference_projects.headline': 'Unsere Referenzausschreibungen für kleine Projekte',
  'uc1.reference_projects.subtitle': 'Entdecken Sie, wie unsere Kunden ihre kleinen Projekte mit Aitenders KI transformieren',
  'uc1.reference_projects.project1.title': 'KMU IT-Modernisierung',
  'uc1.reference_projects.project1.sector': 'Technologie',
  'uc1.reference_projects.project1.offer': 'Angebot: 2,8 M€',
  'uc1.reference_projects.project1.desc': 'Vollständige IT-Infrastruktur-Modernisierung für KMU mit Cloud-Migration und Teamschulung.',
  'uc1.reference_projects.project1.result': '60% Zeitreduzierung, Gewinner-Angebot in 24h geliefert',
  'uc1.reference_projects.project1.impact': 'Sofortiges Go/No-Go, beruhigtes Team, überzeugte Führung',

  'uc1.reference_projects.project2.title': 'Gebäude-Energiesanierung',
  'uc1.reference_projects.project2.sector': 'Bau',
  'uc1.reference_projects.project2.offer': 'Angebot: 4,2 M€',
  'uc1.reference_projects.project2.desc': 'Vollständige energetische Sanierung eines Bürogebäudes mit Umweltzertifizierung.',
  'uc1.reference_projects.project2.result': 'Vollständige Analyse in 3h, interne Validierung in 1 Tag',
  'uc1.reference_projects.project2.impact': 'Null Überraschungen, garantierte Compliance, verstärkte Glaubwürdigkeit',

  'uc1.reference_projects.project3.title': 'Integriertes Sicherheitssystem',
  'uc1.reference_projects.project3.sector': 'Sicherheit',
  'uc1.reference_projects.project3.offer': 'Angebot: 1,5 M€',
  'uc1.reference_projects.project3.desc': 'Einsatz eines integrierten Sicherheitssystems mit Videoüberwachung und Zugangskontrollen.',
  'uc1.reference_projects.project3.result': 'Sofortige Strukturierung, kritische Punkte erkannt',
  'uc1.reference_projects.project3.impact': 'Schnelle Entscheidung, kontrollierter Prozess, eliminierter Stress',

  'uc1.reference_projects.impact_label': 'Kundenauswirkung:',

  'uc1.roi_simulator.badge': 'Integrierter ROI-Simulator',
  'uc1.roi_simulator.headline': 'Berechnen Sie Ihren ROI in Echtzeit',
  'uc1.roi_simulator.subtext': 'Intelligenter Simulator in die Seite integriert für sofortige Analyse Ihrer kleinen Projekte',

  'uc1.chat_actions.use_cases': 'Unsere Anwendungsfälle',
  'uc1.chat_actions.demo': 'UC1 Demo',
  'uc1.chat_actions.roi': 'ROI-Rechner',
  'uc1.chat_actions.contact': 'Experten kontaktieren',

  // UC3 German
  'uc3.hero.badge': 'Große Projekte meistern',
  'uc3.hero.title': 'Koordinieren und verwalten Sie Ihre Mega-Projekte',
  'uc3.hero.span': 'mit chirurgischer Präzision.',
  'uc3.hero.description': 'Die Enterprise-Lösung für große internationale Projekte (> 10M€).',
  'uc3.hero.demoButton': 'Demo buchen',
  'uc3.hero.downloadButton': 'Anwendungsfall herunterladen →',
  'uc3.painPoints.headline': 'Ihr Mega-Projekt, 100% kontrolliert, 0% Improvisation',
  'uc3.painPoints.text1': 'Bei großen internationalen Projekten navigieren Ihre Teams zwischen Dutzenden von Losen.',
  'uc3.painPoints.text2': 'Mit Aitenders, orchestrieren Sie automatisch die Komplexität.',
  'uc3.painPoints.optimizeButton': 'Meistern Sie Ihre Mega-Projekte!',
  'uc3.painPoints.demoButton': 'Demo ansehen',
  'uc3.features.mainTitle': 'Ihr Kommandozentrum für Mega-Projekte',
  'uc3.features.subtitle': 'Koordinieren, verwalten und die Komplexität meistern.',
  'uc3.features.feature1Title': 'Intelligente Multi-Los-Koordination',
  'uc3.features.feature1Text': 'Aitenders KI orchestriert automatisch die Interaktionen.',
  'uc3.features.feature1Highlight': 'Automatische Orchestrierung der Komplexität!',
  'uc3.features.feature2Title': 'Internationale Partnerschaftsverwaltung',
  'uc3.features.feature2Text': 'Automatische Koordination internationaler Partner.',
  'uc3.features.feature2Highlight': 'Automatisierte globale Synchronisation',
  'uc3.features.feature3Title': 'Komplexes Risikomanagement',
  'uc3.features.feature3Text': 'Proaktive Erkennung systemischer Risiken.',
  'uc3.results_section.headline': 'Was unsere Nutzer bei Mega-Projekten gewinnen',
  'uc3.results_section.subtitle': 'Transformative Ergebnisse für große Organisationen',
  'uc3.results_section.card1_title': 'Programmdirektor oder CEO',
  'uc3.results_section.card1_subtitle': 'Globale Vision, totale Kontrolle, gesicherter Erfolg',
  'uc3.results_section.card1_text': 'Verwalten Sie gelassen die komplexesten Projekte.',
  'uc3.results_section.card1_point1': 'Vollständige Sichtbarkeit der Komplexität',
  'uc3.results_section.card1_point2': 'Informierte Entscheidungen in Echtzeit',
  'uc3.results_section.card1_point3': 'Proaktive Risikovorwegnahme',
  'uc3.results_section.card2_title': 'Internationaler Projektleiter oder PMO',
  'uc3.results_section.card2_subtitle': 'Reibungslose Koordination, synchronisierte Teams',
  'uc3.results_section.card2_text': 'Orchestrieren Sie mühelos verteilte Teams.',
  'uc3.results_section.card2_point1': 'Automatische Multi-Site-Koordination',
  'uc3.results_section.card2_point2': 'Echtzeit-Synchronisation',
  'uc3.results_section.card2_point3': 'Globale Konsistenz aufrechterhalten',
  'uc3.results_section.kpis.coordination': '90% Koordinationseffizienz',
  'uc3.results_section.kpis.risks': '95% der Risiken antizipiert',
  'uc3.results_section.kpis.teams': '100% der Teams synchronisiert',
  'uc3.results_section.kpis.extra': 'Totale Beherrschung der Komplexität',

  // UC4 German
  'uc4.hero.badge': 'Einfache Dokumente, schnelle Verarbeitung',
  'uc4.hero.title': 'Analysieren und strukturieren Sie Ihre kleinen Volumina',
  'uc4.hero.span': 'in Minuten.',
  'uc4.hero.description': 'Die optimierte Lösung für kleine Dokumentenvolumina (1-10 Dokumente).',
  'uc4.hero.demoButton': 'Demo buchen',
  'uc4.hero.downloadButton': 'Wirkung testen →',
  'uc4.painPoints.headline': 'Ihre Dokumente, sofort analysiert und strukturiert',
  'uc4.painPoints.text1': 'Angesichts technischer oder vertraglicher Dokumente verlieren Ihre Teams Zeit.',
  'uc4.painPoints.text2': 'Mit Aitenders laden Sie Ihre Dokumente hoch und erhalten sofort eine strukturierte Analyse.',
  'uc4.painPoints.optimizeButton': 'Optimieren Sie Ihre Analyse!',
  'uc4.painPoints.demoButton': 'Demo ansehen',
  'uc4.features.mainTitle': 'Ihr intelligenter Dokumentenanalysator',
  'uc4.features.subtitle': 'Extrahieren, strukturieren und automatisch synthetisieren.',
  'uc4.features.feature1Title': 'Automatische Extraktion von Schlüsselinformationen',
  'uc4.features.feature1Text': 'KI identifiziert und extrahiert automatisch alle wichtigen Elemente.',
  'uc4.features.feature1Highlight': 'Nie wieder verpasste Informationen!',
  'uc4.features.feature2Title': 'Intelligente Inhaltsstrukturierung',
  'uc4.features.feature2Text': 'Automatische Organisation von Informationen nach Themen und Prioritäten.',
  'uc4.features.feature2Highlight': 'Klare Struktur und intuitive Navigation',
  'uc4.features.feature3Title': 'Sofortige und umsetzbare Synthese',
  'uc4.features.feature3Text': 'Automatische Generierung von Führungszusammenfassungen.',
  'uc4.results_section.headline': 'Was unsere Nutzer bei der Dokumentenanalyse gewinnen',
  'uc4.results_section.subtitle': 'Sofortige Ergebnisse für alle Berufe',
  'uc4.results_section.card1_title': 'Anwalt oder Vertragsmanager',
  'uc4.results_section.card1_subtitle': 'Präzise Analyse, Risikopunkte identifiziert',
  'uc4.results_section.card1_text': 'Analysieren Sie sofort jeden Vertrag oder jedes Rechtsdokument.',
  'uc4.results_section.card1_point1': 'Sofortige Vertragsanalyse',
  'uc4.results_section.card1_point2': 'Sensible Klauseln automatisch erkannt',
  'uc4.results_section.card1_point3': 'Wachsamkeitspunkte priorisiert',
  'uc4.results_section.card2_title': 'Projektleiter oder Berater',
  'uc4.results_section.card2_subtitle': 'Schnelle Synthese, sofortige Aktion',
  'uc4.results_section.card2_text': 'Verwandeln Sie jedes technische Dokument in einen strukturierten Aktionsplan.',
  'uc4.results_section.card2_point1': 'Technische Dokumente entschlüsselt',
  'uc4.results_section.card2_point2': 'Aktionsplan automatisch generiert',
  'uc4.results_section.card2_point3': 'Priorisierte Empfehlungen',
  'uc4.results_section.kpis.speed': '10x schneller als manuelle Analyse',
  'uc4.results_section.kpis.accuracy': '99% Extraktionsgenauigkeit',
  'uc4.results_section.kpis.structure': '100% der Dokumente strukturiert',
  'uc4.results_section.kpis.extra': 'Bereit für sofortige Aktion',

  // UC5 German
  'uc5.hero.badge': 'Mittlere Volumina, maximale Effizienz',
  'uc5.hero.title': 'Beherrschen Sie Ihre mittleren Dokumentenvolumina',
  'uc5.hero.span': 'mit verstärkter Intelligenz.',
  'uc5.hero.description': 'Die optimierte Plattform für mittlere Dokumentenvolumina (10-500 Dokumente).',
  'uc5.hero.demoButton': 'Demo buchen',
  'uc5.hero.downloadButton': 'Wirkung testen →',
  'uc5.painPoints.headline': 'Ihre mittleren Volumina, mit industrieller Effizienz verarbeitet',
  'uc5.painPoints.text1': 'Mit Dutzenden oder Hunderten von zu verarbeitenden Dokumenten geraten Ihre Teams ins Stocken.',
  'uc5.painPoints.text2': 'Mit Aitenders industrialisieren Sie Ihre Dokumentenverarbeitung.',
  'uc5.painPoints.optimizeButton': 'Industrialisieren Sie Ihre Analyse!',
  'uc5.painPoints.demoButton': 'Demo ansehen',
  'uc5.features.mainTitle': 'Ihre Dokumentenintelligenz-Fabrik',
  'uc5.features.subtitle': 'Verarbeiten, vergleichen und im großen Maßstab synthetisieren.',
  'uc5.features.feature1Title': 'Industrialisierte Batch-Verarbeitung',
  'uc5.features.feature1Text': 'Automatisierte Batch-Verarbeitungsprozesse.',
  'uc5.features.feature1Highlight': 'Industrielle Effizienz garantiert!',
  'uc5.features.feature2Title': 'Multi-Dokument-Vergleichsanalyse',
  'uc5.features.feature2Text': 'Automatische Erkennung von Ähnlichkeiten, Unterschieden und Mustern.',
  'uc5.features.feature2Highlight': 'Automatische Querschnittsansicht',
  'uc5.features.feature3Title': 'Multi-Level intelligente Synthese',
  'uc5.features.feature3Text': 'Generierung von Synthesen auf mehreren Ebenen.',
  'uc5.results_section.headline': 'Was unsere Nutzer bei mittleren Volumina gewinnen',
  'uc5.results_section.subtitle': 'Industrielle Ergebnisse für vervielfachte Produktivität',
  'uc5.results_section.card1_title': 'Studiendirektor oder Analyseleiter',
  'uc5.results_section.card1_subtitle': 'Industrielle Produktivität, erhaltene Qualität',
  'uc5.results_section.card1_text': 'Verarbeiten Sie Hunderte von Dokumenten mit derselben Sorgfalt.',
  'uc5.results_section.card1_point1': '10x mehr Dokumente verarbeitet',
  'uc5.results_section.card1_point2': 'Analysequalität erhalten',
  'uc5.results_section.card1_point3': 'Automatische globale Vision',
  'uc5.results_section.card2_title': 'Analyst oder Studienbeauftragte',
  'uc5.results_section.card2_subtitle': 'Fokus auf Expertise, Automatisierung des Wiederholenden',
  'uc5.results_section.card2_text': 'Befreien Sie sich von wiederholenden Aufgaben.',
  'uc5.results_section.card2_point1': 'Wiederholende Aufgaben automatisiert',
  'uc5.results_section.card2_point2': 'Fokus auf Geschäftsexpertise',
  'uc5.results_section.card2_point3': 'Strategische Analyse verstärkt',
  'uc5.results_section.kpis.volume': '10x mehr Dokumente verarbeitet',
  'uc5.results_section.kpis.consistency': '100% Konsistenz aufrechterhalten',
  'uc5.results_section.kpis.insights': '5x mehr Erkenntnisse generiert',
  'uc5.results_section.kpis.extra': 'Industrielle Produktivität',

  // UC6 German
  'uc6.hero.badge': 'Große Volumina, maximale Leistung',
  'uc6.hero.title': 'Beherrschen Sie massive Dokumentenkomplexität',
  'uc6.hero.span': 'mit Enterprise-KI.',
  'uc6.hero.description': 'Die Enterprise-Lösung für große Dokumentenvolumina (> 500 Dokumente).',
  'uc6.hero.demoButton': 'Demo buchen',
  'uc6.hero.downloadButton': 'Anwendungsfall herunterladen →',
  'uc6.painPoints.headline': 'Ihr dokumentares Big Data, beherrscht und geschätzt',
  'uc6.painPoints.text1': 'Angesichts Tausender von Dokumenten sind Ihre Teams überfordert.',
  'uc6.painPoints.text2': 'Mit Aitenders Enterprise verwandeln Sie diese Komplexität in einen Vorteil.',
  'uc6.painPoints.optimizeButton': 'Beherrschen Sie dokumentares Big Data!',
  'uc6.painPoints.demoButton': 'Demo ansehen',
  'uc6.features.mainTitle': 'Ihre Enterprise-Dokumentenbeherrschungsplattform',
  'uc6.features.subtitle': 'Massiv verarbeiten, global analysieren, strategisch entscheiden.',
  'uc6.features.feature1Title': 'Parallelisierte Massenverarbeitung',
  'uc6.features.feature1Text': 'Skalierbare Cloud-Architektur mit paralleler Verarbeitung.',
  'uc6.features.feature1Highlight': 'Unbegrenzte Rechenleistung!',
  'uc6.features.feature2Title': 'Kollektive Intelligenz und globale Muster',
  'uc6.features.feature2Text': 'Automatische Erkennung komplexer Muster.',
  'uc6.features.feature2Highlight': 'Automatische strategische Vision',
  'uc6.features.feature3Title': 'Executive Dashboards in Echtzeit',
  'uc6.features.feature3Text': 'Executive Dashboards mit strategischen KPIs.',
  'uc6.results_section.headline': 'Was unsere Nutzer bei großen Volumina gewinnen',
  'uc6.results_section.subtitle': 'Transformative Ergebnisse für Enterprise-Organisationen',
  'uc6.results_section.card1_title': 'CEO oder CDO',
  'uc6.results_section.card1_subtitle': 'Strategische Vision, informierte Entscheidungen, Wettbewerbsvorteil',
  'uc6.results_section.card1_text': 'Verwandeln Sie Ihr Dokumentenerbe in einen entscheidenden strategischen Vorteil.',
  'uc6.results_section.card1_point1': 'Vollständige strategische Vision',
  'uc6.results_section.card1_point2': 'Datenbasierte Entscheidungen',
  'uc6.results_section.card1_point3': 'Nachhaltiger Wettbewerbsvorteil',
  'uc6.results_section.card2_title': 'Wissensdirektor oder CDO',
  'uc6.results_section.card2_subtitle': 'Geschätztes Erbe, verstärkte Intelligenz',
  'uc6.results_section.card2_text': 'Nutzen Sie das Potenzial Ihres Dokumentenerbes voll aus.',
  'uc6.results_section.card2_point1': 'Dokumentenerbe geschätzt',
  'uc6.results_section.card2_point2': 'Kollektive Intelligenz enthüllt',
  'uc6.results_section.card2_point3': 'Strategische Möglichkeiten identifiziert',
  'uc6.results_section.kpis.scale': 'Tausende von Dokumenten gleichzeitig verarbeitet',
  'uc6.results_section.kpis.insights': '100x mehr strategische Erkenntnisse',
  'uc6.results_section.kpis.decisions': '90% der Entscheidungen beschleunigt',
  'uc6.results_section.kpis.extra': 'Vollständige digitale Transformation',

  // Specific UI translations - German
  'uc2.impact_client': 'Kundenauswirkung:',
  'uc2.reference_projects.impact_label': 'Kundenauswirkung:',
  'simulator.title': 'Aitenders ROI-Simulator',
  'simulator.useCase': 'Anwendungsfall:',
  'simulator.multiProject': '• Multi-Projekt-Simulation',
  'simulator.description': '📊 **AITENDERS ROI-SIMULATOR FÜR IHRE BEDÜRFNISSE**\n\n⏱️ Geschätzte Zeit: 3-5 Minuten\n📧 Sie erhalten Ihren detaillierten Bericht per E-Mail\n\n---\n\n**Frage 1/4: Volumen und Arten von Projekten**\n\nUm Ihren ROI besser zu berechnen, können Sie das Volumen der Projekte beschreiben, auf die Sie jährlich bieten?\n\n**📋 Beispielantworten:**\n• "100 kleine Projekte um 5M€"\n• "50 mittlere Projekte von 20M€"\n• "5 große Projekte von 100M€"\n\n💡 **Sie können in natürlicher Sprache antworten.**',
  'simulator.processing': 'Verarbeitung...',
  'simulator.helpText': '💡 Sie können in natürlicher Sprache antworten oder die vorgeschlagenen Formate verwenden',
  'chat.inputPlaceholder': 'Geben Sie Ihre Antwort hier ein...',
};

// Initialize languages and translations for all UCs
export async function seedTranslations() {
  console.log('🌱 Seeding translations for all use cases...');

  try {
    // Initialize supported languages
    await translationService.initializeLanguages();
    console.log('✅ Languages initialized');

    // Add French translations (reference language)
    for (const [key, frenchValue] of Object.entries(allUCTranslationKeys)) {
      await translationService.setTranslation(key, 'fr', frenchValue);
    }
    console.log('✅ All UC French translations seeded');

    // Add English translations
    for (const [key, englishValue] of Object.entries(allUCEnglishTranslations)) {
      await translationService.setTranslation(key, 'en', englishValue);
    }
    console.log('✅ All UC English translations seeded');

    // Add Spanish translations
    for (const [key, spanishValue] of Object.entries(allUCSpanishTranslations)) {
      await translationService.setTranslation(key, 'es', spanishValue);
    }
    console.log('✅ All UC Spanish translations seeded');

    // Add German translations
    for (const [key, germanValue] of Object.entries(allUCGermanTranslations)) {
      await translationService.setTranslation(key, 'de', germanValue);
    }
    console.log('✅ All UC German translations seeded');

    console.log(`📊 Total keys seeded: ${Object.keys(allUCTranslationKeys).length} per language`);
    console.log('🎯 Use cases covered: UC1, UC2, UC3, UC4, UC5, UC6');

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
      console.log('🎉 All UC translation seeding completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 All UC translation seeding failed:', error);
      process.exit(1);
    });
}