// src/components/Layout_401_AI_Copilot.tsx
import React from 'react';

export default function Layout_401_AI_Copilot() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
          AI Agents
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Votre copilote IA qui sécurise la gestion de vos projets moyens
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Analyse Intelligente
          </h3>
          <p className="text-gray-600">
            Analyse automatique des documents contractuels pour identifier les risques et opportunités.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Suivi Automatisé
          </h3>
          <p className="text-gray-600">
            Suivi en temps réel des engagements contractuels et des livrables.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Alertes Proactives
          </h3>
          <p className="text-gray-600">
            Anticipation des risques et alertes automatiques pour éviter les dérives.
          </p>
        </div>
      </div>
    </div>
  );
}