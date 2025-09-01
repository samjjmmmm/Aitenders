// src/components/Layout_401_OfferSteps.tsx
import React from 'react';

export default function Layout_401_OfferSteps() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nous accompagnons les équipes à chaque étape de l'offre
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            1
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Analyse des Documents
          </h3>
          <p className="text-gray-600">
            Extraction intelligente des exigences techniques et contractuelles
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            2
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Évaluation des Risques
          </h3>
          <p className="text-gray-600">
            Identification proactive des risques juridiques et financiers
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            3
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Optimisation des Coûts
          </h3>
          <p className="text-gray-600">
            Simulation ROI et recommandations d'optimisation budgétaire
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            4
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Suivi Contractuel
          </h3>
          <p className="text-gray-600">
            Monitoring continu des engagements et livrables projet
          </p>
        </div>
      </div>
    </div>
  );
}