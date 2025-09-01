// src/components/Header_26.tsx
import React, { useState, useEffect } from 'react';

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
    if (isDeleting && displayedText !== '') {
      timer = setTimeout(handleTyping, deletingSpeed);
    } else if (displayedText === dynamicPhrases[currentPhraseIndex] && !isDeleting) {
      timer = setTimeout(handleTyping, pauseBeforeDelete);
    } else {
      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Une vision contractuelle{' '}
          <span className="text-blue-200 border-r-2 border-blue-200 animate-pulse min-h-[1em] inline-block min-w-[200px] text-left">
            {displayedText}
          </span>
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Transformez vos appels d'offres complexes en projets maîtrisés grâce à l'intelligence artificielle
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Découvrir la solution
        </button>
      </div>
    </header>
  );
}