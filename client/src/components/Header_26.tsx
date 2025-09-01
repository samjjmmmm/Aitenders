// src/components/Header_26.tsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/Header_26.module.css';

// Dynamic texts for the headline animation
const dynamicPhrases = [
  "100% claire",
  "sans surprise",
  "rapidement livrée",
  "entièrement conforme"
];

export default function Header_26() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // milliseconds per character
  const pauseBeforeDelete = 1500; // milliseconds
  const pauseBeforeType = 500; // milliseconds

  useEffect(() => {
    const handleTyping = () => {
      const currentFullPhrase = dynamicPhrases[currentPhraseIndex];
      if (isDeleting) {
        setDisplayedText(prev => currentFullPhrase.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          // Wait a bit before typing the next phrase
          setTimeout(() => setCurrentPhraseIndex(prev => (prev + 1) % dynamicPhrases.length), pauseBeforeType);
        }
      } else {
        setDisplayedText(prev => currentFullPhrase.substring(0, prev.length + 1));
        if (displayedText === currentFullPhrase) {
          setIsDeleting(true);
        }
      }
    };

    let timer: NodeJS.Timeout;
    if (isDeleting && displayedText !== '') { // Only delete if there's text to delete
      timer = setTimeout(handleTyping, deletingSpeed);
    } else if (displayedText === dynamicPhrases[currentPhraseIndex] && !isDeleting) { // Pause after full phrase is typed
      timer = setTimeout(handleTyping, pauseBeforeDelete);
    } else { // Typing
      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, dynamicPhrases, pauseBeforeDelete, pauseBeforeType, typingSpeed, deletingSpeed]);


  return (
    <div className={styles.Header_26_9248_28760}>
      <div className={styles.Container_9248_28761}>
        <div className={styles.Column_9248_28762}>
          <div className={styles.Content_9248_28763}>
            {/* Main headline with animation */}
            <span className={styles.MediumLengthHeroHeadlineGoesHere_9248_28764}>
              <span>Votre offre,&nbsp;</span> {/* Static part */}
              <span className={styles.dynamicText}>
                {displayedText}
                {/* Add a blinking cursor for typing effect */}
                <span style={{ borderRight: `2px solid ${isDeleting || displayedText === dynamicPhrases[currentPhraseIndex] ? 'transparent' : 'currentColor'}`, animation: `blink-caret .75s step-end infinite` }}></span>
              </span>
            </span>
            {/* Sub-headline */}
            <span className={styles.LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverraOrnareErosDolorInterdumNullaUtCommodoDiamLiberoVitaeErat_9248_28765}>
              Découvrez, pilotez et sécurisez chaque clause&nbsp;dès le premier jour.
            </span>
          </div>
          <div className={styles.Actions_9248_28766}>
            <div className={styles.Button_9248_28767}><span className={styles.Button_4179_8873}>Get Started</span></div>
            <div className={styles.Button_9248_28768}><span className={styles.Button_4179_8893}>Learn More</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}