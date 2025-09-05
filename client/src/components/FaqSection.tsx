// src/components/FaqSection.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/FaqSection.module.css';

// Reusable Icon Component
const ChevronIcon = () => (
  <svg width="32" height="32" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.21777 18.5344L15.7764 11.9758C15.8831 11.8691 15.9834 11.8313 16.1084 11.8313C16.2335 11.8313 16.3337 11.8691 16.4404 11.9758L23.0332 18.5676C23.1424 18.6768 23.1777 18.7755 23.1777 18.8918C23.1777 19.0082 23.1423 19.1069 23.0332 19.2161C22.9292 19.3201 22.8267 19.3605 22.6924 19.3606C22.5578 19.3606 22.4548 19.3202 22.3506 19.2161L16.1074 13.0081L9.86621 19.2493C9.64817 19.4673 9.35626 19.4673 9.13822 19.2493C8.92018 19.0312 8.92018 18.7393 9.13822 18.5213L9.21777 18.5344Z" fill="black" transform="rotate(180 16.1084 15.5959)"/>
  </svg>
);

// Define TypeScript types for our data
type FaqItemData = {
  question: string;
  answer: string;
}

// Reusable Accordion Item sub-component
const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItemData, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={styles.accordionItem}>
      <button className={styles.questionButton} onClick={onClick} aria-expanded={isOpen}>
        <span className={styles.questionText}>{item.question}</span>
        <div className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          <ChevronIcon />
        </div>
      </button>
      <div className={`${styles.answerWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.answerContent}>
          <p className={styles.answerText}>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


// The main "smart" component
export default function FaqSection({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Get the array of FAQs from the dictionary file
  const faqItems: FaqItemData[] = t(`${t_prefix}.faq_list`, { returnObjects: true }) || [];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle or close if already open
  };

  if (!Array.isArray(faqItems) || faqItems.length === 0) {
    return null; // Safety check
  }

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.heading}>{t(`${t_prefix}.title`)}</h2>
          <p className={styles.subheading}>{t(`${t_prefix}.subtitle`)}</p>
        </div>
        <div className={styles.accordionList}>
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}