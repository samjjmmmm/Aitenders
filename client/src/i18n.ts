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
    supportedLngs: ['en', 'fr'], // The languages you support
    fallbackLng: 'fr', // The default language to use

    // --- Backend Settings ---
    // This tells i18next where to find your files.
    // {{lng}} will be replaced with 'en' or 'fr'
    // {{ns}} will be replaced with 'translation' by default
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // --- React Settings ---
    react: {
      useSuspense: true, // This is crucial for making Suspense work correctly
    },

    // --- Debugging ---
    debug: true, // Keep this on during development
  });

export default i18n;