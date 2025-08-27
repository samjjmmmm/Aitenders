// Index central pour toutes les traductions
// Re-export all translation modules for centralized access
export * from './common';
export * from './home';
export * from './product';
export * from './privacy';
export * from './security';
export * from './uc1';
export * from './uc2';
export * from './uc3';
export * from './uc4';
export * from './uc5';
export * from './uc6';

// Import all translation objects

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
  privacyFrenchTranslations, 
  privacyEnglishTranslations, 
  privacySpanishTranslations, 
  privacyGermanTranslations 
} from './privacy';

import { 
  securityFrenchTranslations, 
  securityEnglishTranslations, 
  securitySpanishTranslations, 
  securityGermanTranslations 
} from './security';

import { 
  uc1FrenchTranslations, 
  uc1EnglishTranslations, 
  uc1SpanishTranslations, 
  uc1GermanTranslations 
} from './uc1';

import { 
  uc2FrenchTranslations, 
  uc2EnglishTranslations, 
  uc2SpanishTranslations, 
  uc2GermanTranslations 
} from './uc2';

import { 
  uc3FrenchTranslations, 
  uc3EnglishTranslations, 
  uc3SpanishTranslations, 
  uc3GermanTranslations 
} from './uc3';

import { uc4FrenchTranslations, uc4EnglishTranslations, uc4SpanishTranslations, uc4GermanTranslations } from './uc4';
import { uc5FrenchTranslations, uc5EnglishTranslations, uc5SpanishTranslations, uc5GermanTranslations } from './uc5';
import { uc6FrenchTranslations, uc6EnglishTranslations, uc6SpanishTranslations, uc6GermanTranslations } from './uc6';

// Combine all French translations
export const allFrenchTranslations = {
  ...commonFrenchTranslations,
  ...homeFrenchTranslations,
  ...productFrenchTranslations,
  ...privacyFrenchTranslations,
  ...securityFrenchTranslations,
  ...uc1FrenchTranslations,
  ...uc2FrenchTranslations,
  ...uc3FrenchTranslations,
  ...uc4FrenchTranslations,
  ...uc5FrenchTranslations,
  ...uc6FrenchTranslations,
};

// Combine all English translations
export const allEnglishTranslations = {
  ...commonEnglishTranslations,
  ...homeEnglishTranslations,
  ...productEnglishTranslations,
  ...privacyEnglishTranslations,
  ...securityEnglishTranslations,
  ...uc1EnglishTranslations,
  ...uc2EnglishTranslations,
  ...uc3EnglishTranslations,
  ...uc4EnglishTranslations,
  ...uc5EnglishTranslations,
  ...uc6EnglishTranslations,
};

// Combine all Spanish translations
export const allSpanishTranslations = {
  ...commonSpanishTranslations,
  ...homeSpanishTranslations,
  ...productSpanishTranslations,
  ...privacySpanishTranslations,
  ...securitySpanishTranslations,
  ...uc1SpanishTranslations,
  ...uc2SpanishTranslations,
  ...uc3SpanishTranslations,
  ...uc4SpanishTranslations,
  ...uc5SpanishTranslations,
  ...uc6SpanishTranslations,
};

// Combine all German translations
export const allGermanTranslations = {
  ...commonGermanTranslations,
  ...homeGermanTranslations,
  ...productGermanTranslations,
  ...privacyGermanTranslations,
  ...securityGermanTranslations,
  ...uc1GermanTranslations,
  ...uc2GermanTranslations,
  ...uc3GermanTranslations,
  ...uc4GermanTranslations,
  ...uc5GermanTranslations,
  ...uc6GermanTranslations,
};