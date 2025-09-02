// client/src/pages/uc2test.tsx
import React, { useState } from "react";

// --- CORE COMPONENTS ---
import Header from "@/components/header"; 
import ChatInterface from "@/components/chat-interface"; 

// --- FIGMA-EXPORTED & CORRECTED COMPONENTS ---
import Header_26 from '../components/Header_26';
import Logo_3 from '../components/Logo_3';
import Layout_401_AI_Copilot from '../components/Layout_401_AI_Copilot';
import Layout_401_OfferSteps from '../components/Layout_401_OfferSteps';
import Layout_356 from '../components/Layout_356';
import Team_20 from '../components/Team_20';
import Portfolio_11 from '../components/Portfolio_11';
import Cta_25 from '../components/Cta_25';

// --- RENAMED/NEW COMPONENTS ---
import Layout_84 from '../components/Layout_84';
import ConcreteResultsSection from '../components/ConcreteResultsSection';

// --- NEW FOOTER IMPORT ---
import Footer_4 from '../components/Footer_4'; // <-- Import your new Footer component

// --- GLOBAL STYLES ---
import '../index.css';

export default function UC2Test() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    // The main page wrapper now has a flex-col layout to correctly position the footer
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* The 'flex-grow' class makes this main section take up all available space */}
      <main className="page-content flex-grow">
        {/* Components will render in this order */}
        <Header_26 />
        <Logo_3 />
        <Layout_401_AI_Copilot />
        <Layout_401_OfferSteps />
        <Layout_356 />
        <ConcreteResultsSection />
        <Layout_84 />
        <Team_20 />
        <Portfolio_11 />
        <Cta_25 />

        {/* Chat interface can remain here, as it's often a floating element */}
        <ChatInterface 
          language={language}
          customActions={[]}
        />
        <div className="h-4"></div>
      </main>

      {/* --- ADDED FOOTER --- */}
      {/* The Footer is placed at the end, outside the main content, for proper structure */}
      <Footer_4 />
    </div>
  );
}