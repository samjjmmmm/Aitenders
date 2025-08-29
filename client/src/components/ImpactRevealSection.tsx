import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImpactRevealSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const impactTexts = [
    "réduisez de 70% le temps d'analyse",
    "maîtrisez votre direction risque une réponse compétitive, sans risque de dernière minute",
    "augmentez de 65% vos taux de succès",
    "éliminez 90% des erreurs de conformité",
    "accélérez de 3x la collaboration équipe"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % impactTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [impactTexts.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
          
          {/* Left Side - "Vous" */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-right"
            >
              <h2 
                className="text-8xl md:text-9xl lg:text-[12rem] font-light text-blue-400/80 leading-none"
                style={{ 
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.05em"
                }}
              >
                Vous
              </h2>
            </motion.div>
          </div>

          {/* Right Side - Dynamic Impact Text */}
          <div className="lg:col-span-8 flex items-center">
            <div className="w-full max-w-4xl">
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-center lg:text-left"
              >
                <p 
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-slate-800 leading-tight"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.02em"
                  }}
                >
                  {impactTexts[currentTextIndex]}
                </p>
              </motion.div>

              {/* Progress Indicators */}
              <div className="flex justify-center lg:justify-start mt-8 space-x-2">
                {impactTexts.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentTextIndex 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 w-2'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: index === currentTextIndex ? 1.1 : 0.8,
                      width: index === currentTextIndex ? '2rem' : '0.5rem'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 mt-6 max-w-3xl text-center lg:text-left leading-relaxed"
              >
                Avec Aitenders, transformez votre approche des appels d'offres et donnez à votre équipe les outils pour exceller.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactRevealSection;