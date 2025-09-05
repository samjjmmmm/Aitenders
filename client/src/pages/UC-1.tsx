// client/src/pages/UC-1.tsx
import React from "react";

// --- CORE COMPONENTS ---
import Header from "@/components/header"; 
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

// Give your page function a unique name
export default function UC1Page() { 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Header />

      <main className="page-content flex-grow">

        {/* 
          Here we render all the components, passing them the "uc1" prefix
          to ensure they use the new content from your dictionaries.
        */}
        <Header_26 t_prefix="uc1.header_26" />
        <ClientLogos t_prefix="uc2test.scrolling_logos" /> {/* Stays the same as requested */}
        <Layout_401_AI_Copilot t_prefix="uc1.ai_copilot" />
        <Layout_84 t_prefix="uc1.user_benefits" /> 
        <Layout_401_OfferSteps t_prefix="uc1.offer_steps_headline" />
        <Layout_356 t_prefix="uc1.features" />
        <ConcreteResultsSection t_prefix="uc1.concrete_results" />
        <Team_20 t_prefix="uc1.team_20" />
        <Portfolio_11 t_prefix="uc2test.portfolio" /> {/* Stays the same as requested */}
        <Cta_25 t_prefix="uc2test.cta" /> {/* Stays the same as requested */}

      </main>

      <Footer_4 />
    </div>
  );
}