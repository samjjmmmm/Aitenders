import React, { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/HubspotMeetingModal.module.css';

declare global {
  interface Window {
    hbspt?: any;
  }
}

type Props = {
  id?: string;
  isOpen: boolean;
  onClose: () => void;

  /** For HubSpot meeting scheduler (iframe) */
  hubspotDataSrc?: string; // e.g. 'https://meetings.hubspot.com/...?...&embed=true'

  /** For HubSpot FORM (v2 API) */
  portalId?: string;
  formId?: string;
  region?: string;
};

export default function HubspotMeetingModal({
  id = 'hubspot-meeting-modal',
  isOpen,
  onClose,
  hubspotDataSrc,
  portalId,
  formId,
  region,
}: Props) {
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Lock scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  // ESC to close
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );
  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onKeyDown]);

  // If we’re in FORM mode, load v2.js (once) and render the form
  useEffect(() => {
    if (!isOpen) return;
    const isFormMode = !!(portalId && formId);

    if (!isFormMode) return;

    const renderForm = () => {
      if (!window.hbspt || !formContainerRef.current) return;
      formContainerRef.current.innerHTML = '';
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${id}-form-container`,
      });
    };

    if (window.hbspt?.forms?.create) {
      renderForm();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      'script[src="https://js.hsforms.net/forms/v2.js"]'
    );
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    script.addEventListener('load', renderForm, { once: true });

    return () => script?.removeEventListener('load', renderForm);
  }, [isOpen, portalId, formId, region, id]);

  if (!isOpen) return null;

  const isFormMode = !!(portalId && formId);
  const isMeetingMode = !!hubspotDataSrc;

  return createPortal(
    <div
      id={id}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        {isFormMode && (
          <div
            id={`${id}-form-container`}
            ref={formContainerRef}
            className={styles.content}
          />
        )}

        {isMeetingMode && !isFormMode && (
          <iframe
            className={styles.iframe}
            src={hubspotDataSrc}
            title="HubSpot meeting"
            allow="geolocation *; microphone *; camera *"
            frameBorder="0"
          />
        )}
      </div>
    </div>,
    document.body
  );
}
