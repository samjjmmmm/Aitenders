// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // Use HttpBackend, it's the standard name

i18n
  .use(HttpBackend) // Loads translations from the server
  .use(initReactI18next) // Integrates i18next with React
  .init({
    // --- Important Settings ---
    supportedLngs: ['en', 'fr'],

    // Set a default language explicitly instead of detecting it
    lng: 'fr', 

    // Set a fallback language if the selected one fails
    fallbackLng: 'fr',

    // --- Namespace Configuration ---
    // This tells i18next to load the 'translation.json' file.
    ns: ['translation'],
    defaultNS: 'translation',

    // --- Backend Settings ---
    backend: {
      // Load translations from the API endpoint
      loadPath: '/api/translations/{{lng}}',
    },

    // --- React Settings ---
    react: {
      // This is good practice, it allows for better loading states
      useSuspense: true,
    },

    interpolation: {
      escapeValue: false, // React already does this
    },

    // --- Debugging (Optional but helpful) ---
    // See i18next logs in the browser console
    debug: true, 
  });

export default i18n;