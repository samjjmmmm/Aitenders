// src/components/Layout_401_OfferSteps.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// This component uses a regular CSS file
import '../styles/Layout_401_OfferSteps.css';

// 1. We update the function to accept the 't_prefix' prop.
export default function Layout_401_OfferSteps({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="offer-steps-container">
      <h2 className="offer-steps-headline">
        {/* 2. We use the t_prefix to build the translation key dynamically */}
        {t(`${t_prefix}.title`)}
      </h2>
    </section>
  );
}