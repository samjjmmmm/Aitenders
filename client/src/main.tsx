// client/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// --- 1. Import the official provider and your configured i18n instance ---
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Your i18n.ts file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* --- 2. Wrap your ENTIRE App in the I18nextProvider --- */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);