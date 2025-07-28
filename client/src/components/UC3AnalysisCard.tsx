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
  MdWarning 
} from 'react-icons/md';
import { FaUsers, FaFolderOpen, FaExclamationTriangle } from 'react-icons/fa';

// Configuration for the three animation phases
const PHASES_CONFIG = [
  {
    key: 'start',
    duration: 3000,
    text: "From 500+ pages to a structured compliance base — instantly.",
    Icon: MdDescription,
  },
  {
    key: 'collaborate',
    duration: 2500,
    text: "Experts collaborate in real-time — without Excel chaos.",
    Icon: MdGroups,
  },
  {
    key: 'risk',
    duration: 2500,
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
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg mx-auto font-sans flex flex-col h-[380px]">
      
      {/* TOP: ANIMATION AREA */}
      <div className="w-full h-[210px] bg-slate-100/70 p-4 flex flex-col justify-center items-center relative overflow-hidden">
        <AnimationScene phaseKey={currentPhase.key} />
        <OverlayContent key={phaseIndex} phase={currentPhase} />
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
          className="mt-4 w-full bg-purple-600 text-white font-semibold text-center py-2.5 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          Explore UC3
        </a>
      </div>
    </div>
  );
};

// Sub-component for the main animation visuals
const AnimationScene = ({ phaseKey }: { phaseKey: string }) => {
  const mockRows = [1, 2, 3, 4]; // For the compliance matrix

  return (
    <div className="w-full h-full relative">
      {/* Phase 1: Messy Docs to Clean Matrix */}
      <AnimatePresence>
        {phaseKey === 'start' && (
          <motion.div
            key="messy-docs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* The stack of messy documents */}
            <motion.div
              className="w-48 h-28 bg-white border border-slate-300 rounded-md shadow-md"
              style={{ rotate: -15, x: -10, y: 10 }}
            />
            <motion.div
              className="w-48 h-28 bg-white border border-slate-300 rounded-md shadow-lg"
              style={{ rotate: 5, x: 10 }}
            />
            <motion.div
              className="w-48 h-28 bg-white border border-slate-300 rounded-md shadow-xl flex items-center justify-center"
              style={{ rotate: -2, y: -10 }}
            >
              <MdDescription className="text-slate-400" size={40} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* The Clean Compliance Matrix (visible in all phases after the first) */}
      <AnimatePresence>
        {phaseKey !== 'start' && (
          <motion.div
            key="matrix"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, y: 0,
              transition: { delay: 0.3, type: 'spring', stiffness: 100 } 
            }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          >
            {/* The matrix itself with a glowing effect */}
            <div className="w-64 bg-white rounded-lg shadow-xl p-2 animate-pulse">
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

// A single row in the animated matrix
const MatrixRow = ({ index, phaseKey }: { index: number; phaseKey: string }) => {
  const isAlertRow = index === 2; // Let's make the 3rd row the one with the alert

  return (
    <div className={`flex items-center justify-between h-8 px-2 my-1 rounded-md transition-colors duration-500 ${
      phaseKey === 'risk' && isAlertRow ? 'bg-red-100' : 'bg-slate-100'
    }`}>
      <div className="w-2/5 h-2 bg-slate-300 rounded-full" />
      <div className="w-1/4 h-2 bg-slate-300 rounded-full" />
      <div className="w-6 h-6 flex items-center justify-center">
        {/* Collaboration checkmarks */}
        {phaseKey === 'collaborate' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.8 + index * 0.2, type: 'spring', stiffness: 200 } }}
          >
            <MdCheck className="text-green-500" size={20} />
          </motion.div>
        )}
        {/* Risk alert and resolution */}
        {phaseKey === 'risk' && isAlertRow && (
          <AnimatePresence mode="wait">
            <motion.div
              key="alert"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.5 } }}
              exit={{ scale: 0 }}
              className="absolute animate-pulse"
            >
              <MdWarning className="text-red-500" size={24} />
            </motion.div>
            <motion.div
              key="resolved"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 1.5 } }}
            >
              <MdCheckCircle className="text-green-600" size={24} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

// Avatars that appear during the collaboration phase
const CollaborationAvatars = () => {
  const avatars = [
    { initials: 'AB', pos: 'top-0 -left-4', color: 'bg-sky-500' },
    { initials: 'CD', pos: '-top-4 right-8', color: 'bg-fuchsia-500' },
    { initials: 'EF', pos: 'bottom-0 -right-4', color: 'bg-emerald-500' },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
      }}
    >
      {avatars.map(avatar => (
        <motion.div
          key={avatar.initials}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 }
          }}
          className={`absolute ${avatar.pos} w-10 h-10 ${avatar.color} text-white text-sm font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg`}
        >
          {avatar.initials}
        </motion.div>
      ))}
    </motion.div>
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
    <Icon className="w-4 h-4 mr-2.5 text-purple-500" />
    <span>{text}</span>
  </li>
);

export default UC3AnalysisCard;