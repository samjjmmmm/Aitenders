import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // --- Important Settings ---
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'fr',

    // --- NEW: Explicit Namespace Configuration ---
    // This tells i18next EXACTLY what namespaces to use.
    ns: ['translation'],
    defaultNS: 'translation',

    // --- Backend Settings ---
    backend: {
      // UPDATED: We removed {{ns}} to be explicit about the filename.
      loadPath: '/locales/{{lng}}/translation.json',
    },

    // --- React Settings ---
    react: {
      useSuspense: true,
    },

    // --- Debugging ---
    debug: true,
  });

export default i18n;