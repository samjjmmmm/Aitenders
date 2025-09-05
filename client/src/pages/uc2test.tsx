// client/src/pages/uc2test.tsx
import React from "react";

// --- CORE COMPONENTS ---
import Header from "@/components/header"; 
import ChatInterface from "@/components/chat-interface"; 
import ClientLogos from '../components/ClientLogos';
import Footer_4 from '../components/Footer_4';

// --- PAGE-SPECIFIC CONTENT COMPONENTS ---
import Header_26 from '../components/Header_26';
import Layout_401_AI_Copilot from '../components/Layout_401_AI_Copilot';
import Layout_84 from '../components/Layout_84';
import Layout_401_OfferSteps from '../components/Layout_401_OfferSteps';
import Layout_356 from '../components/Layout_356';
import ConcreteResultsSection from '../components/ConcreteResultsSection';
import Team_20 from '../components/Team_20';
import Portfolio_11 from '../components/Portfolio_11';
import Cta_25 from '../components/Cta_25';

// --- GLOBAL STYLES ---
import '../index.css';

export default function UC2Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Header />

      <main className="page-content flex-grow">

        {/* 
          CORRECTED: We now provide the 't_prefix' to every component that needs it,
          telling them all to use the "uc2test" chapter of the dictionary.
        */}
        <Header_26 t_prefix="uc2test.header_26" />
        <ClientLogos t_prefix="uc2test.scrolling_logos" />
        <Layout_401_AI_Copilot t_prefix="uc2test.ai_copilot" />
        <Layout_84 t_prefix="uc2test.user_benefits" /> 
        <Layout_401_OfferSteps t_prefix="uc2test.offer_steps_headline" />
        <Layout_356 t_prefix="uc2test.features" />
        <ConcreteResultsSection t_prefix="uc2test.concrete_results" />
        <Team_20 t_prefix="uc2test.team_20" />
        <Portfolio_11 t_prefix="uc2test.portfolio" />
        <Cta_25 t_prefix="uc2test.cta" />

        <ChatInterface />
        <div className="h-4"></div>
      </main>

      <Footer_4 />
    </div>
  );
}