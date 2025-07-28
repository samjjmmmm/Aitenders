import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MdDescription, 
  MdGroups, 
  MdSecurity, 
  MdCheck, 
  MdCheckCircle, 
  MdShield,
  MdFolder,
  MdWarning,
  MdEdit
} from 'react-icons/md';
import { FaUsers, FaFolderOpen, FaExclamationTriangle } from 'react-icons/fa';

// Configuration for the three animation phases with refined timings
const PHASES_CONFIG = [
  {
    key: 'start',
    duration: 3000,
    text: "From 500+ pages to a structured compliance base — instantly.",
    Icon: MdDescription,
  },
  {
    key: 'collaborate',
    duration: 2000,
    text: "Experts collaborate in real‑time — without Excel chaos.",
    Icon: MdGroups,
  },
  {
    key: 'risk',
    duration: 3000,
    text: "Every change detected, every risk managed.",
    Icon: MdSecurity,
  },
];

// Main Card Component
const UC3AnalysisCard = () => {
  const [phaseIndex, setPhaseIndex] = useState(0);

  // The core animation loop controller
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhaseIndex((prevIndex) => (prevIndex + 1) % PHASES_CONFIG.length);
    }, PHASES_CONFIG[phaseIndex].duration);

    return () => clearTimeout(timer);
  }, [phaseIndex]);

  const currentPhase = PHASES_CONFIG[phaseIndex];

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg mx-auto font-sans flex flex-col h-[380px] relative">
      
      {/* TOP: ANIMATION AREA */}
      <div className="w-full h-[210px] bg-gradient-to-br from-slate-50 to-slate-100 p-4 flex flex-col justify-center items-center relative overflow-hidden">
        <AnimationScene phaseKey={currentPhase.key} phaseIndex={phaseIndex} />
        <OverlayContent key={phaseIndex} phase={currentPhase} />
        
        {/* Floating Elements */}
        <FloatingElements phaseIndex={phaseIndex} />
      </div>

      {/* BOTTOM: CONTENT AREA */}
      <div className="p-6 bg-white flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-800 text-lg">
            Every requirement addressed, every risk under control.
          </h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            <MiniBullet Icon={FaFolderOpen} text="90% faster organization" />
            <MiniBullet Icon={FaUsers} text="40% faster reviews" />
            <MiniBullet Icon={FaExclamationTriangle} text="0 compliance gaps" />
          </ul>
        </div>
        <a 
          href="/uc3" 
          className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-center py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          Explore UC3
        </a>
      </div>
    </div>
  );
};

// Sub-component for the main animation visuals with enhanced transformations
const AnimationScene = ({ phaseKey, phaseIndex }: { phaseKey: string; phaseIndex: number }) => {
  const mockRows = [1, 2, 3, 4]; // For the compliance matrix

  return (
    <div className="w-full h-full relative">
      {/* Phase 1: Smart Start - The Transformation */}
      <AnimatePresence mode="wait">
        {phaseKey === 'start' && (
          <motion.div
            key="transformation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Messy Documents flying in and transforming */}
            <motion.div
              key={`doc-1-${phaseIndex}`}
              className="absolute w-32 h-20 bg-white border border-slate-300 rounded-md shadow-md"
              initial={{ x: -200, y: -100, rotate: -45, opacity: 0 }}
              animate={{ 
                x: -20, y: -10, rotate: -15, opacity: 1,
                transition: { delay: 0.2, duration: 0.8, type: 'spring' }
              }}
              exit={{
                x: 0, y: 0, rotate: 0, scale: 0.3, opacity: 0,
                transition: { delay: 1.5, duration: 0.5 }
              }}
            />
            <motion.div
              key={`doc-2-${phaseIndex}`}
              className="absolute w-32 h-20 bg-white border border-slate-300 rounded-md shadow-md"
              initial={{ x: 200, y: -80, rotate: 35, opacity: 0 }}
              animate={{ 
                x: 15, y: 5, rotate: 8, opacity: 1,
                transition: { delay: 0.4, duration: 0.8, type: 'spring' }
              }}
              exit={{
                x: 0, y: 0, rotate: 0, scale: 0.3, opacity: 0,
                transition: { delay: 1.5, duration: 0.5 }
              }}
            />
            <motion.div
              key={`doc-3-${phaseIndex}`}
              className="absolute w-32 h-20 bg-white border border-slate-300 rounded-md shadow-lg flex items-center justify-center"
              initial={{ x: -150, y: 120, rotate: -25, opacity: 0 }}
              animate={{ 
                x: -5, y: 10, rotate: -3, opacity: 1,
                transition: { delay: 0.6, duration: 0.8, type: 'spring' }
              }}
              exit={{
                x: 0, y: 0, rotate: 0, scale: 0.3, opacity: 0,
                transition: { delay: 1.5, duration: 0.5 }
              }}
            >
              <MdDescription className="text-slate-400" size={24} />
            </motion.div>
            
            {/* Matrix emerging from convergence */}
            <motion.div
              key={`matrix-emerge-${phaseIndex}`}
              className="absolute w-64 bg-white rounded-lg shadow-xl p-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, opacity: 1,
                transition: { delay: 2.2, duration: 0.6, type: 'spring', stiffness: 200 }
              }}
            >
              {mockRows.map((row, i) => (
                <div key={i} className="flex items-center justify-between h-8 px-2 my-1 rounded-md bg-slate-100">
                  <div className="w-2/5 h-2 bg-slate-300 rounded-full" />
                  <div className="w-1/4 h-2 bg-slate-300 rounded-full" />
                  <div className="w-6 h-6" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Phase 2 & 3: Matrix with interactions */}
      <AnimatePresence>
        {phaseKey !== 'start' && (
          <motion.div
            key="interactive-matrix"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, scale: 1,
              transition: { duration: 0.3, type: 'spring', stiffness: 150 } 
            }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
          >
            {/* The matrix itself */}
            <div className="w-64 bg-white rounded-lg shadow-xl p-2">
              {mockRows.map((row, i) => (
                <MatrixRow key={i} index={i} phaseKey={phaseKey} />
              ))}
            </div>
            
            {/* Avatars for Collaboration Phase */}
            {phaseKey === 'collaborate' && <CollaborationAvatars />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// A single row in the animated matrix with enhanced interactions
const MatrixRow = ({ index, phaseKey }: { index: number; phaseKey: string }) => {
  const isAlertRow = index === 2; // Let's make the 3rd row the one with the alert

  return (
    <motion.div 
      className={`flex items-center justify-between h-8 px-2 my-1 rounded-md transition-colors duration-500 ${
        phaseKey === 'risk' && isAlertRow ? 'bg-red-100' : 'bg-slate-100'
      }`}
      animate={{
        backgroundColor: phaseKey === 'risk' && isAlertRow 
          ? ['rgb(254 226 226)', 'rgb(254 226 226)', 'rgb(220 252 231)'] 
          : 'rgb(241 245 249)'
      }}
      transition={{
        duration: phaseKey === 'risk' && isAlertRow ? 2 : 0.5,
        times: phaseKey === 'risk' && isAlertRow ? [0, 0.6, 1] : undefined,
        delay: phaseKey === 'risk' && isAlertRow ? 1 : 0
      }}
    >
      <div className="w-2/5 h-2 bg-slate-300 rounded-full" />
      <div className="w-1/4 h-2 bg-slate-300 rounded-full" />
      <div className="w-6 h-6 flex items-center justify-center relative">
        {/* Collaboration checkmarks with SVG path animation */}
        {phaseKey === 'collaborate' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              transition: { 
                delay: 0.5 + index * 0.15, 
                type: 'spring', 
                stiffness: 300,
                damping: 15
              } 
            }}
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <motion.path
                d="M20 6L9 17l-5-5"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  transition: { 
                    delay: 0.7 + index * 0.15, 
                    duration: 0.4, 
                    ease: "easeInOut" 
                  }
                }}
              />
            </motion.svg>
          </motion.div>
        )}
        
        {/* Risk alert and resolution with smooth morphing */}
        {phaseKey === 'risk' && isAlertRow && (
          <AnimatePresence mode="wait">
            <motion.div
              key="alert"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1], 
                opacity: 1,
                transition: { 
                  delay: 0.5, 
                  duration: 0.5,
                  times: [0, 0.6, 1]
                }
              }}
              exit={{ 
                scale: 0, 
                opacity: 0,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  transition: { 
                    repeat: 2, 
                    duration: 0.6, 
                    delay: 0.8 
                  }
                }}
              >
                <MdWarning className="text-red-500" size={20} />
              </motion.div>
            </motion.div>
            
            <motion.div
              key="resolved"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1], 
                opacity: 1,
                transition: { 
                  delay: 2, 
                  duration: 0.5,
                  times: [0, 0.6, 1]
                }
              }}
            >
              <MdCheckCircle className="text-green-600" size={20} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};

// Avatars that appear during the collaboration phase with enhanced spring animations
const CollaborationAvatars = () => {
  const avatars = [
    { initials: 'AB', pos: 'top-0 -left-4', color: 'bg-cyan-400', fromDirection: { x: -100, y: -50 } },
    { initials: 'CD', pos: '-top-4 right-8', color: 'bg-fuchsia-400', fromDirection: { x: 100, y: -50 } },
    { initials: 'EF', pos: 'bottom-0 -right-4', color: 'bg-emerald-400', fromDirection: { x: 100, y: 100 } },
  ];
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
      }}
    >
      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.initials}
          variants={{
            hidden: { 
              opacity: 0, 
              scale: 0.3,
              x: avatar.fromDirection.x,
              y: avatar.fromDirection.y
            },
            visible: { 
              opacity: 1, 
              scale: 1,
              x: 0,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 25,
                mass: 0.8
              }
            }
          }}
          className={`absolute ${avatar.pos} w-10 h-10 ${avatar.color} text-white text-sm font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg`}
        >
          {avatar.initials}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Floating UI elements that provide context throughout the animation
const FloatingElements = ({ phaseIndex }: { phaseIndex: number }) => {
  return (
    <>
      {/* AI Analysis Complete - appears at start and stays */}
      <motion.div
        key="ai-complete"
        className="absolute top-2 right-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-sm"
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { delay: 0.5, duration: 0.4, type: 'spring' }
        }}
      >
        <MdCheckCircle className="w-3 h-3 mr-1" />
        AI Analysis Complete
      </motion.div>

      {/* Ready for Review - appears near end of cycle */}
      <AnimatePresence>
        {phaseIndex === 2 && (
          <motion.div
            key="ready-review"
            className="absolute bottom-2 left-2 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-sm"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: [20, -2, 0], 
              scale: 1,
              transition: { 
                delay: 2, 
                duration: 0.6, 
                type: 'spring',
                times: [0, 0.6, 1]
              }
            }}
            exit={{ 
              opacity: 0, 
              y: 20, 
              scale: 0.8,
              transition: { duration: 0.3 }
            }}
          >
            <MdEdit className="w-3 h-3 mr-1" />
            Ready for Review
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// The text and icon overlay that changes each phase
const OverlayContent = ({ phase }: { phase: any }) => {
  return (
    <div className="absolute bottom-2 left-4 right-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={phase.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeInOut" } }}
          className="flex items-center justify-center text-center"
        >
          <phase.Icon className="w-5 h-5 mr-2 text-slate-600 flex-shrink-0" />
          <p className="text-sm text-slate-700 font-medium">{phase.text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Small utility component for the bottom bullet points
const MiniBullet = ({ Icon, text }: { Icon: any; text: string }) => (
  <li className="flex items-center text-sm">
    <Icon className="w-4 h-4 mr-2.5 text-purple-600" />
    <span>{text}</span>
  </li>
);

export default UC3AnalysisCard;