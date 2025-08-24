// Index central pour toutes les traductions
import { 
  commonFrenchTranslations, 
  commonEnglishTranslations, 
  commonSpanishTranslations, 
  commonGermanTranslations 
} from './common';

import { 
  homeFrenchTranslations, 
  homeEnglishTranslations, 
  homeSpanishTranslations, 
  homeGermanTranslations 
} from './home';

import { 
  productFrenchTranslations, 
  productEnglishTranslations, 
  productSpanishTranslations, 
  productGermanTranslations 
} from './product';

import { 
  securityFrenchTranslations, 
  securityEnglishTranslations, 
  securitySpanishTranslations, 
  securityGermanTranslations 
} from './security';

import { 
  privacyFrenchTranslations, 
  privacyEnglishTranslations, 
  privacySpanishTranslations, 
  privacyGermanTranslations 
} from './privacy';

import { 
  uc1FrenchTranslations, 
  uc1EnglishTranslations, 
  uc1SpanishTranslations, 
  uc1GermanTranslations 
} from './uc1';

// Combiner toutes les traductions en français (référence)
export const allFrenchTranslations = {
  ...commonFrenchTranslations,
  ...homeFrenchTranslations,
  ...productFrenchTranslations,
  ...securityFrenchTranslations,
  ...privacyFrenchTranslations,
  ...uc1FrenchTranslations
};

// Structure pour les autres langues (à compléter)
export const allEnglishTranslations = {
  ...commonEnglishTranslations,
  ...homeEnglishTranslations,
  ...productEnglishTranslations,
  ...securityEnglishTranslations,
  ...privacyEnglishTranslations,
  ...uc1EnglishTranslations
};

export const allSpanishTranslations = {
  ...commonSpanishTranslations,
  ...homeSpanishTranslations,
  ...productSpanishTranslations,
  ...securitySpanishTranslations,
  ...privacySpanishTranslations,
  ...uc1SpanishTranslations
};

export const allGermanTranslations = {
  ...commonGermanTranslations,
  ...homeGermanTranslations,
  ...productGermanTranslations,
  ...securityGermanTranslations,
  ...privacyGermanTranslations,
  ...uc1GermanTranslations
};