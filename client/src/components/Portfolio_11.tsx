// src/components/Portfolio_11.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Portfolio_11.module.css';
import { X, ArrowRightCircle, ArrowLeftCircle } from 'lucide-react';

type Project = {
  title: string;
  value: string;
  description: string;
  category: string;
  cta_text: string;
  imageSrc?: string;
};

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// --- THIS IS THE CORRECTED FUNCTION ---
function parseDescriptionToSections(desc: string) {
  if (!desc) return null;

  // UPDATED: This regular expression now looks for both English and French labels.
  const rx = /(CONTEXT|CONTEXTE|CLIENT OBJECTIVES|OBJECTIFS DU CLIENT|IMPLEMENTED SOLUTION|MISE EN ŒUVRE|RESULTS|RÉSULTATS)\s*:\s*/gi;

  const out: Array<{ label: string; text: string }> = [];
  let last: string | null = null;
  let lastIdx = 0;
  let m: RegExpExecArray | null;

  while ((m = rx.exec(desc)) !== null) {
    if (last) {
      out.push({ label: last, text: desc.slice(lastIdx, m.index).trim() });
    }
    last = m[1].toUpperCase(); // Standardize to uppercase
    lastIdx = rx.lastIndex;
  }

  if (last) {
    out.push({ label: last, text: desc.slice(lastIdx).trim() });
  }

  return out.length ? out : null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, project }) => {
  // ... (rest of the modal component remains the same)
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const sections = parseDescriptionToSections(project.description);

  return (
    <div className={styles.detailModalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.detailModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.detailModalCloseButton} onClick={onClose} aria-label="Fermer" type="button">
          <X className={styles.detailModalCloseIcon} />
        </button>

        <header className={styles.modalHeader}>
          <h3 className={styles.detailModalTitle}>{project.title}</h3>
          <div className={styles.modalBadges}>
            {project.category && <span className={`${styles.badge} ${styles.badgeNeutral}`}>{project.category}</span>}
            {project.value && <span className={`${styles.badge} ${styles.badgePrimary}`}>{project.value}</span>}
          </div>
        </header>

        <div className={styles.divider} />

        {!sections ? (
          <p className={styles.detailModalDescription}>{project.description}</p>
        ) : (
          <div className={styles.modalSections}>
            {sections.map((s, i) => (
              <section key={`${s.label}-${i}`} className={styles.modalSection}>
                <h4 className={styles.modalSectionLabel}>{s.label}</h4>
                <p className={styles.modalSectionText}>{s.text}</p>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ... (rest of the file remains the same)

interface ProjectCardProps extends Project {
  onOpen: () => void;
  delay: number;
  inView: boolean;
}

const ProjectCard = ({
  title, category, cta_text, imageSrc, onOpen, delay, inView,
}: ProjectCardProps) => (
  <article
    role="button"
    tabIndex={0}
    aria-label={title}
    className={`${styles.projectCard} ${inView ? styles.animate : ''}`}
    style={{ transitionDelay: `${delay}s` }}
    onClick={onOpen}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(); }}
  >
    <div className={styles.cardImageContainer}>
      {imageSrc ? (
        <img src={imageSrc} alt="" className={styles.cardImage} loading="lazy" />
      ) : (
        <div className={styles.cardImageFallback} />
      )}
    </div>

    <div className={styles.cardContent}>
      <span className={styles.cardCategory}>{category}</span>
      <h3 className={styles.cardTitle} title={title}>{title}</h3>

      <a
        href="#"
        className={styles.cardLink}
        onClick={(e) => { e.preventDefault(); onOpen(); }}
      >
        {cta_text} <span className={styles.cardLinkArrow}>→</span>
      </a>
    </div>
  </article>
);

export default function Portfolio_11({ t_prefix }: { t_prefix: string }): JSX.Element | null {
  const { t } = useTranslation();

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const CARDS_PER_PAGE = 3;
  const [page, setPage] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects: Project[] = t(`${t_prefix}.projects`, { returnObjects: true }) || [];
  if (!Array.isArray(projects) || projects.length === 0) return null;

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;

  const lookahead = useMemo(() => projects.slice(start, start + CARDS_PER_PAGE + 1), [projects, start]);

  const visible = useMemo(() => {
    const v = lookahead.slice(0, CARDS_PER_PAGE);
    const fourth = lookahead[3];
    const thirdHasNoImage = v[2] && !v[2].imageSrc;
    const fourthHasImage = fourth && !!fourth.imageSrc;
    if (thirdHasNoImage && fourthHasImage) return [v[0], v[1], fourth];
    return v;
  }, [lookahead]);

  const showPrev = page > 0;
  const showNext = page < totalPages - 1;

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section ref={ref} className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.heading}>{t(`${t_prefix}.title`)}</h2>
        </div>

        <div className={`${styles.portfolioGrid} ${showPrev || showNext ? styles.hasNav : ''}`}>
          {visible.map((p, i) => (
            <ProjectCard
              key={`${p.title}-${start + i}`}
              {...p}
              onOpen={() => { setSelectedProject(p); setIsDetailModalOpen(true); }}
              delay={i * 0.08}
              inView={inView}
            />
          ))}

          {(showPrev || showNext) && (
            <div className={`${styles.navCard} ${styles.navCardRight} ${inView ? styles.animate : ''}`}>
              {showPrev && (
                <button
                  className={`${styles.navButton} ${styles.navButtonPrev}`}
                  onClick={prev}
                  aria-label="Voir les précédents"
                  type="button"
                >
                  <ArrowLeftCircle className={styles.navIcon} />
                </button>
              )}
              {showNext && (
                <button
                  className={`${styles.navButton} ${styles.navButtonNext}`}
                  onClick={next}
                  aria-label="Voir la suite"
                  type="button"
                >
                  <ArrowRightCircle className={styles.navIcon} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <ProjectDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => { setIsDetailModalOpen(false); setSelectedProject(null); }}
        project={selectedProject}
      />
    </section>
  );
}

