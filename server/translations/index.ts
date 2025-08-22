
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
};

// Structure pour les autres langues (à compléter)
export const allEnglishTranslations = {
  // Traductions anglaises à ajouter
  'nav.home': 'Home',
  'nav.product': 'Product',
  'nav.security': 'Security',
  'nav.privacy': 'Privacy',
  'common.button.demo': 'Book a Demo',
  // ... etc
};

export const allSpanishTranslations = {
  // Traductions espagnoles à ajouter
  'nav.home': 'Inicio',
  'nav.product': 'Producto',
  'nav.security': 'Seguridad',
  'nav.privacy': 'Privacidad',
  'common.button.demo': 'Reservar Demo',
  // ... etc
};

export const allGermanTranslations = {
  // Traductions allemandes à ajouter
  'nav.home': 'Startseite',
  'nav.product': 'Produkt',
  'nav.security': 'Sicherheit',
  'nav.privacy': 'Datenschutz',
  'common.button.demo': 'Demo buchen',
  // ... etc
};
