// client/src/pages/Product-page.tsx
import React from "react";

// --- CORE COMPONENTS (used on all pages) ---
import Header from "@/components/header"; 
import ClientLogos from '../components/ClientLogos';
import Cta_25 from '../components/Cta_25';
import Footer_4 from '../components/Footer_4';

// --- NEW COMPONENTS SPECIFIC TO THIS PAGE ---
import ProductHero from '../components/ProductHero';
import ProductList from '../components/ProductList'; // The sticky-scroll features
import IntegrationSection from '../components/IntegrationSection';
import FaqSection from '../components/FaqSection';
import KpiSection from '../components/KpiSection'; // The KPIs/Statistics section

// --- GLOBAL STYLES ---
import '../index.css';

export default function ProductPage() { 

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="page-content flex-grow">

        {/* 
          Here we render all the components in the correct order for the Product Page,
          passing them the "product" prefix to use the right content from your dictionaries.
        */}
        <ProductHero t_prefix="product.hero" />
        <ClientLogos t_prefix="uc2test.scrolling_logos" /> {/* Using the same logos as other pages */}
        <ProductList t_prefix="product" />
        <IntegrationSection t_prefix="product.integrations" />
        <KpiSection t_prefix="product.kpis" />
        <FaqSection t_prefix="product.faq" />

      </main>

      {/* Full-width components are outside the main tag */}
      <Cta_25 t_prefix="uc2test.cta" /> {/* Using the same CTA as other pages */}
      <Footer_4 />
    </div>
  );
}