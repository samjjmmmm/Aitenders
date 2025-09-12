// src/pages/admin-test.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import contentData from '@/content/admin-test.json';
import Header from "@/components/header";
import Footer_4 from "@/components/Footer_4";

function TestContent({ data }) {
  if (!data) return <p>Waiting for content...</p>;
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>{data.title}</h1>
      <p style={{ fontSize: '24px' }}>{data.subtitle}</p>
    </div>
  );
}

export default function AdminTestPage() {
  const { i18n } = useTranslation();
  const content = contentData[i18n.language];

  if (!content) {
    return <div>Content not available.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="page-content flex-grow">
        <TestContent data={content.test_section} />
      </main>
      <Footer_4 />
    </div>
  );
}