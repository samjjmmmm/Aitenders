// src/components/Layout_401_OfferSteps.tsx
import React from 'react';
// Correctly import the regular CSS file. Note there is no "styles from" part.
import '../styles/Layout_401_OfferSteps.css';

export default function Layout_401_OfferSteps(): JSX.Element {
  return (
    // We use a regular string for the className now
    <section className="offer-steps-section-container">
      <h2 className="offer-steps-headline">
        Nous accompagnons les équipes à chaque étape de l&apos;offre
      </h2>
    </section>
  );
}