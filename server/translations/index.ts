// Index central pour toutes les traductions
import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { productTranslations } from './product';
import { securityTranslations } from './security';
import { privacyTranslations } from './privacy';

// Combiner toutes les traductions en français (référence)
export const allFrenchTranslations = {
  ...commonTranslations,
  ...homeTranslations,
  ...productTranslations,
  ...securityTranslations,
  ...privacyTranslations,

  // UC1 Hero
  'uc1.hero.badge': 'Analyse go/no-go',
  'uc1.hero.title': 'Analyse go/no-go',
  'uc1.hero.span': 'immédiat',
  'uc1.hero.description': 'La seule plateforme pensée pour les petits projets à cycles courts : Agents IA d\'analyse des points clés, automatisation d\'une synthèse et validation guidée. Vous transformez des Heures de relecture et d\'analyse en quelques minutes, gagnez en sérénité et livrez une offre solide et incontestable — sans surcharge ni faux départs.',

  // UC1 Pain Points
  'uc1.painPoints.headline': 'Maîtrisez les projets complexes avant qu\'ils ne vous maîtrisent',
  'uc1.painPoints.text1': 'Les petits projets représentent 70% de votre pipeline commercial, mais les processus actuels ne sont pas adaptés à leurs contraintes de temps et de budget.',
  'uc1.painPoints.text2': 'Résultat : stress permanent, qualité dégradée et opportunités manquées par manque de réactivité.',
  'uc1.painPoints.optimizeButton': 'Optimiser mes offres',
  'uc1.painPoints.demoButton': 'Voir la démo',

  // UC1 Solution Section
  'uc1.solution_section.mainTitle': 'Une approche sur-mesure pour petits projets, grands résultats',
  'uc1.solution_section.subtitle': 'Aitenders transforme votre processus d\'analyse des appels d\'offres pour les petits projets avec une IA spécialisée et des workflows optimisés.',
  'uc1.solution_section.feature1_title': 'Structuration IA immédiate',
  'uc1.solution_section.feature1_text': 'Grâce aux assistants IA, vos documents sont instantanément analysés, classés et priorisés : critères d\'intérêt, points critiques et preuves associées sont détectés en quelques minutes.',
  'uc1.solution_section.feature1_highlight': 'Go/No-Go immédiat avec base documentaire complète',
};

// Structure pour les autres langues (à compléter)
export const allEnglishTranslations = {
  // Traductions anglaises à ajouter
  'nav.home': 'Home',
  'nav.product': 'Product',
  'nav.security': 'Security',
  'nav.privacy': 'Privacy',
  'common.button.demo': 'Book a Demo',
  // UC1 Hero
  'uc1.hero.badge': 'Go/No-go analysis',
  'uc1.hero.title': 'Go/No-go analysis',
  'uc1.hero.span': 'immediate',
  'uc1.hero.description': 'The only platform designed for short-cycle small projects: AI agents for key point analysis, summary automation, and guided validation. Transform hours of review and analysis into minutes, gain peace of mind, and deliver a solid, undeniable offer — without overload or false starts.',
  // UC1 Pain Points
  'uc1.painPoints.headline': 'Master complex projects before they master you',
  'uc1.painPoints.text1': 'Small projects represent 70% of your sales pipeline, but current processes aren\'t suited to their time and budget constraints.',
  'uc1.painPoints.text2': 'Result: constant stress, degraded quality, and missed opportunities due to lack of responsiveness.',
  'uc1.painPoints.optimizeButton': 'Optimize my offers',
  'uc1.painPoints.demoButton': 'See demo',
  // UC1 Solution Section
  'uc1.solution_section.mainTitle': 'A tailor-made approach for small projects, big results',
  'uc1.solution_section.subtitle': 'Aitenders transforms your tender analysis process for small projects with specialized AI and optimized workflows.',
  'uc1.solution_section.feature1_title': 'Immediate AI Structuring',
  'uc1.solution_section.feature1_text': 'Thanks to AI assistants, your documents are instantly analyzed, classified, and prioritized: criteria of interest, critical points, and associated evidence are detected in minutes.',
  'uc1.solution_section.feature1_highlight': 'Immediate Go/No-Go with a complete documentary base',
};

export const allSpanishTranslations = {
  // Traductions espagnoles à ajouter
  'nav.home': 'Inicio',
  'nav.product': 'Producto',
  'nav.security': 'Seguridad',
  'nav.privacy': 'Privacidad',
  'common.button.demo': 'Reservar Demo',
  // UC1 Hero
  'uc1.hero.badge': 'Análisis go/no-go',
  'uc1.hero.title': 'Análisis go/no-go',
  'uc1.hero.span': 'inmediato',
  'uc1.hero.description': 'La única plataforma pensada para proyectos pequeños de ciclo corto: Agentes de IA para el análisis de puntos clave, automatización de resúmenes y validación guiada. Transforme horas de revisión y análisis en minutos, gane tranquilidad y entregue una oferta sólida e innegable, sin sobrecarga ni inicios en falso.',
  // UC1 Pain Points
  'uc1.painPoints.headline': 'Domina los proyectos complejos antes de que te dominen',
  'uc1.painPoints.text1': 'Los proyectos pequeños representan el 70% de su pipeline comercial, pero los procesos actuales no se adaptan a sus restricciones de tiempo y presupuesto.',
  'uc1.painPoints.text2': 'Resultado: estrés constante, calidad degradada y oportunidades perdidas por falta de respuesta.',
  'uc1.painPoints.optimizeButton': 'Optimizar mis ofertas',
  'uc1.painPoints.demoButton': 'Ver demo',
  // UC1 Solution Section
  'uc1.solution_section.mainTitle': 'Un enfoque a medida para proyectos pequeños, grandes resultados',
  'uc1.solution_section.subtitle': 'Aitenders transforma su proceso de análisis de licitaciones para proyectos pequeños con IA especializada y flujos de trabajo optimizados.',
  'uc1.solution_section.feature1_title': 'Estructuración inmediata de IA',
  'uc1.solution_section.feature1_text': 'Gracias a los asistentes de IA, sus documentos se analizan, clasifican y priorizan instantáneamente: los criterios de interés, los puntos críticos y la evidencia asociada se detectan en minutos.',
  'uc1.solution_section.feature1_highlight': 'Go/No-Go inmediato con base documental completa',
};

export const allGermanTranslations = {
  // Traductions allemandes à ajouter
  'nav.home': 'Startseite',
  'nav.product': 'Produkt',
  'nav.security': 'Sicherheit',
  'nav.privacy': 'Datenschutz',
  'common.button.demo': 'Demo buchen',
  // UC1 Hero
  'uc1.hero.badge': 'Go/No-go-Analyse',
  'uc1.hero.title': 'Go/No-go-Analyse',
  'uc1.hero.span': 'sofort',
  'uc1.hero.description': 'Die einzige Plattform, die für kleine Projekte mit kurzen Zyklen entwickelt wurde: KI-Agenten zur Analyse von Kernpunkten, Zusammenfassung von Automatisierung und geführter Validierung. Verwandeln Sie Stunden der Überprüfung und Analyse in Minuten, gewinnen Sie Sicherheit und liefern Sie ein solides, unbestreitbares Angebot – ohne Überlastung oder Fehlstarts.',
  // UC1 Pain Points
  'uc1.painPoints.headline': 'Beherrschen Sie komplexe Projekte, bevor sie Sie beherrschen',
  'uc1.painPoints.text1': 'Kleine Projekte machen 70 % Ihrer Verkaufspipeline aus, aber die aktuellen Prozesse sind nicht an ihre Zeit- und Budgetbeschränkungen angepasst.',
  'uc1.painPoints.text2': 'Ergebnis: ständiger Stress, verschlechterte Qualität und verpasste Chancen aufgrund mangelnder Reaktionsfähigkeit.',
  'uc1.painPoints.optimizeButton': 'Meine Angebote optimieren',
  'uc1.painPoints.demoButton': 'Demo ansehen',
  // UC1 Solution Section
  'uc1.solution_section.mainTitle': 'Ein maßgeschneiderter Ansatz für kleine Projekte, große Ergebnisse',
  'uc1.solution_section.subtitle': 'Aitenders transformiert Ihren Ausschreibungsanalyseprozess für kleine Projekte mit spezialisierter KI und optimierten Workflows.',
  'uc1.solution_section.feature1_title': 'Sofortige KI-Strukturierung',
  'uc1.solution_section.feature1_text': 'Dank KI-Assistenten werden Ihre Dokumente sofort analysiert, klassifiziert und priorisiert: Interessenskriterien, kritische Punkte und zugehörige Beweise werden in wenigen Minuten erkannt.',
  'uc1.solution_section.feature1_highlight': 'Sofortiges Go/No-Go mit vollständiger Dokumentationsbasis',
};