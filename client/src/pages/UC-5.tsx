// client/src/pages/UC-5.tsx
import React from "react";

// --- CORE COMPONENTS ---
import Header from "@/components/header"; 
// import ChatInterface from "@/components/chat-interface"; // <-- REMOVED
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

export default function UC5Page() { 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Header />

      <main className="page-content flex-grow">

        <Header_26 t_prefix="uc5.header_26" />
        <ClientLogos t_prefix="uc2test.scrolling_logos" />
        <Layout_401_AI_Copilot t_prefix="uc5.ai_copilot" />
        <Layout_84 t_prefix="uc5.user_benefits" /> 
        <Layout_401_OfferSteps t_prefix="uc5.offer_steps_headline" />
        <Layout_356 t_prefix="uc5.features" />
        <ConcreteResultsSection t_prefix="uc5.concrete_results" />
        <Team_20 t_prefix="uc5.team_20" />
        <Portfolio_11 t_prefix="uc5.portfolio" />
        <Cta_25 t_prefix="uc2test.cta" />

        {/* --- CHAT INTERFACE REMOVED FROM HERE --- */}

      </main>

      <Footer_4 />
    </div>
  );
}