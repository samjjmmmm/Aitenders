// client/src/pages/test-uc2.tsx
import React, { useState } from "react";
// Remove useLocation from here as it's likely not used in this specific landing page
// import { useLocation } from "wouter"; 

// Import your existing Header component for site navigation (if this Figma page has one)
import Header from "@/components/header"; 

// Import any existing components that you want to keep visible on this specific Figma-exported page,
// or remove if they are not part of the Figma design's intent.
import ContactSection from "@/components/contact-section"; // You can decide if this should be here
import ChatInterface from "@/components/chat-interface"; // You can decide if this should be here

// This page does not use the interactive card selection logic, so remove its specific imports
// import { Card } from "@/components/ui/card"; 
// import { Button } from "@/components/ui/button"; 
// import { MdBarChart, MdSearch, MdDescription, MdLightbulb, MdTrendingUp, MdSecurity, MdPeople, 
//   MdInsertDriveFile, MdSettings, MdEmojiEvents, MdGpsFixed, 
//   MdSchedule, MdCheckCircle, MdEdit, MdAnalytics, MdVerifiedUser, MdGroups, MdAccountCircle, 
//   MdMail,
//   MdStarOutline
// } from "react-icons/md";
// import { FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

// Import all the Figma-exported components that make up this new landing page
import Header_26 from '../components/Header_26';
import Logo_3 from '../components/Logo_3';
import Layout_401_AI_Copilot from '../components/Layout_401_AI_Copilot';
import Layout_401_OfferSteps from '../components/Layout_401_OfferSteps';
import Layout_356 from '../components/Layout_356';
import Layout_84 from '../components/Layout_84';
import Team_20 from '../components/Team_20';
import Portfolio_11 from '../components/Portfolio_11';
import Cta_25 from '../components/Cta_25';

// Import global CSS for variables and base styles
import '../index.css'; // This is the correct relative path // <--- Corrected path for global CSS from pages folder

// --- START: Translations if this page needs them. Keep if the Figma content uses t[language]. ---
// For this Figma-exported page, the text is largely static.
// You might decide to simplify and remove this if the Figma content replaces it entirely,
// but for maximum safety, we'll keep it for the Header.
const t = {
  fr: {
    // Keep only what Header or other shared components might need
    // Or if any of your Figma-exported component text is dynamic based on translation
    // For the Figma exports themselves, the text is already French in the JSX.
  },
  en: {
    // Keep only what Header or other shared components might need
  }
};
// --- END: Translations ---


  export default function UC2Test() { // Changed function name to match filename
  const [language, setLanguage] = useState<'fr' | 'en'>('fr'); // Keep language state for Header

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Existing Header Component (Your site navigation) */}
      <Header language={language} onLanguageChange={setLanguage} />

      <div className="page-content">

        {/* All your NEW Figma-exported components */}
        <Header_26 />
        <Logo_3 />
        <Layout_401_AI_Copilot />
        <Layout_401_OfferSteps />
        <Layout_356 />
        <Layout_84 />
        <Team_20 />
        <Portfolio_11 />
        <Cta_25 />

        {/* You can decide if your ContactSection or ChatInterface should be on *this* landing page.
            If they are part of the Figma design, keep them. Otherwise, remove them from here.
            For now, let's keep ChatInterface as it's common on many pages.
        */}
        {/* <ContactSection /> */}
        <ChatInterface 
          language={language}
          customActions={[
            // ... your custom actions if needed on this page ...
          ]}
        />
        <div className="h-4"></div>
      </div>
    </div>
  );
}