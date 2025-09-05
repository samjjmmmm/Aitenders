// src/components/Cta_25.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Cta_25.module.css';

// Reusable SVG Icon Components
const EllipsisIcon = () => (
  <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.33984 2.00009C6.33984 1.08327 7.08303 0.340088 7.99984 0.340088C8.91666 0.340088 9.65984 1.08327 9.65984 2.00009C9.65984 2.91691 8.91666 3.66009 7.99984 3.66009C7.08303 3.66009 6.33984 2.91691 6.33984 2.00009Z" fill="#565D6D" />
    <path d="M12.1699 2.00009C12.1699 1.08327 12.9131 0.340088 13.8299 0.340088C14.7467 0.340088 15.4899 1.08327 15.4899 2.00009C15.4899 2.91691 14.7467 3.66009 13.8299 3.66009C12.9131 3.66009 12.1699 2.91691 12.1699 2.00009Z" fill="#565D6D" />
    <path d="M0.509766 2.00009C0.509766 1.08327 1.25297 0.340088 2.16977 0.340088C3.08656 0.340088 3.82977 1.08327 3.82977 2.00009C3.82977 2.91691 3.08656 3.66009 2.16977 3.66009C1.25297 3.66009 0.509766 2.91691 0.509766 2.00009Z" fill="#565D6D" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.885 4.87695C11.255 4.87695 11.555 5.17691 11.555 5.54695C11.555 5.91699 11.255 6.21695 10.885 6.21695L1.50496 6.21695C1.13493 6.21695 0.834961 5.91699 0.834961 5.54695C0.834961 5.17691 1.13493 4.87695 1.50496 4.87695L10.885 4.87695Z" fill="#565D6D" />
    <path d="M5.70599 0.383145C5.95128 0.137845 6.33921 0.122709 6.60239 0.337344L6.65344 0.383145L11.3434 5.07316C11.6051 5.3348 11.6051 5.75891 11.3434 6.02055L6.65344 10.7105C6.3918 10.9722 5.96763 10.9722 5.70599 10.7105C5.44436 10.4489 5.44436 10.0248 5.70599 9.76316L9.9223 5.54685L5.70599 1.33056L5.66023 1.27953C5.44556 1.01638 5.4607 0.628445 5.70599 0.383145Z" fill="#565D6D" />
  </svg>
);

export default function Cta_25({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: t(`${t_prefix}.title`).replace(' exactly ', ' <em style="font-style: italic;">exactly</em> ') }} />
          <p className={styles.subheading}>{t(`${t_prefix}.subtitle`)}</p>
        </div>
        <div className={styles.chatCardColumn}>
          <div className={styles.chatCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>{t(`${t_prefix}.card_title`)}</span>
              <EllipsisIcon />
            </div>
            <div className={styles.messageBubble}>
              {t(`${t_prefix}.card_message`)}
            </div>
            <button className={styles.assessmentButton}>
              <span className={styles.buttonText}>
                {t(`${t_prefix}.card_button`)}
              </span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}