import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

// Import the background image (using existing asset)
import backgroundImage from "@assets/Document Review and Categorization_1754034061301.png";

export default function ProductHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Animation timing based on the JSON data
  // Video plays from 290ms
  // First overlay appears at 570ms (moveThenScaleIn)
  // Second overlay at 1420ms
  // Third overlay at 2240ms  
  // Dashboard reveal at 2530ms

  useEffect(() => {
    // Auto-restart animation every 4 seconds to match duration
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero Container */}
      <div className="relative w-full h-[846px] max-w-[1496px] mx-auto">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img 
            src={backgroundImage}
            alt="Document Review and Categorization"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video Element - positioned as per JSON (x:112, y:281, size:173x129) */}
        <motion.div
          key={`video-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.29, duration: 0.5 }}
          className="absolute z-10"
          style={{
            left: '112px',
            top: '281px',
            width: '173px',
            height: '129px'
          }}
        >
          <div className="relative w-full h-full bg-gray-900 rounded overflow-hidden shadow-lg">
            {/* Video placeholder with play button */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-1" />
                )}
              </button>
            </div>
            
            {/* Video overlay text */}
            <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
              AI Analysis Demo
            </div>
          </div>
        </motion.div>

        {/* First UI Overlay - Analysis Progress (x:430, y:166, size:406x104) */}
        <motion.div
          key={`overlay1-${animationKey}`}
          initial={{ 
            opacity: 0, 
            y: 20.8, 
            scale: 0.9 
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          transition={{ 
            delay: 0.57,
            duration: 1,
            ease: "easeOut"
          }}
          className="absolute z-20"
          style={{
            left: '430px',
            top: '166px',
            width: '406px',
            height: '104px'
          }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 border border-gray-100"
               style={{
                 boxShadow: '10px 20px 8px rgba(0, 0, 0, 0.5)'
               }}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-gray-900">Document Analysis</h3>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Processing Requirements</span>
                <span>87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second UI Overlay - Compliance Check (x:430, y:287, size:406x56) */}
        <motion.div
          key={`overlay2-${animationKey}`}
          initial={{ 
            opacity: 0, 
            y: 11.2, 
            scale: 0.9 
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          transition={{ 
            delay: 1.42,
            duration: 1,
            ease: "easeOut"
          }}
          className="absolute z-20"
          style={{
            left: '430px',
            top: '287px',
            width: '406px',
            height: '56px'
          }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-lg px-4 py-2 border border-gray-100 flex items-center"
               style={{
                 boxShadow: '10px 20px 8px rgba(0, 0, 0, 0.5)'
               }}>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">Compliance Requirements Verified</span>
              <div className="ml-auto w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third UI Overlay - Risk Assessment (x:430, y:360, size:407x79) */}
        <motion.div
          key={`overlay3-${animationKey}`}
          initial={{ 
            opacity: 0, 
            y: 15.8, 
            scale: 0.9 
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          transition={{ 
            delay: 2.24,
            duration: 1,
            ease: "easeOut"
          }}
          className="absolute z-20"
          style={{
            left: '430px',
            top: '360px',
            width: '407px',
            height: '79px'
          }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-lg p-3 border border-gray-100"
               style={{
                 boxShadow: '10px 20px 8px rgba(0, 0, 0, 0.5)'
               }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-900">Risk Assessment</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Medium Risk - Action Required</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-orange-600">6.2</div>
                <div className="text-xs text-gray-500">Risk Score</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Reveal - positioned bottom left (x:17, y:493, size:617x306) */}
        <motion.div
          key={`dashboard-${animationKey}`}
          initial={{ 
            opacity: 0,
            y: 50,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{ 
            delay: 2.53,
            duration: 1,
            ease: "easeOut"
          }}
          className="absolute z-15"
          style={{
            left: '17px',
            top: '493px',
            width: '617px',
            height: '306px'
          }}
        >
          <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
               style={{
                 boxShadow: '20px 10px 8px rgba(0, 0, 0, 0.5)'
               }}>
            
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Project Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 space-y-4">
              
              {/* Progress Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">87%</div>
                  <div className="text-xs text-gray-600">Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-xs text-gray-600">Requirements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-xs text-gray-600">Teams</div>
                </div>
              </div>

              {/* Status List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Technical Review</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-600 h-1 rounded-full w-3/4"></div>
                    </div>
                    <span className="text-blue-600 font-medium">75%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Legal Compliance</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1">
                      <div className="bg-green-600 h-1 rounded-full w-full"></div>
                    </div>
                    <span className="text-green-600 font-medium">100%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Risk Assessment</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1">
                      <div className="bg-orange-500 h-1 rounded-full w-1/2"></div>
                    </div>
                    <span className="text-orange-500 font-medium">50%</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded hover:bg-gray-200 transition-colors">
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          key={`bg-effect-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
        />
        
        <motion.div
          key={`bg-effect2-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/15 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}