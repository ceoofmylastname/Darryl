import React from 'react';
import { motion } from 'framer-motion';

export const TestingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 1, 0.3],
          filter: ["blur(4px)", "blur(0px)", "blur(4px)"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 shadow-2xl">
          TESTING
        </h1>
      </motion.div>
    </div>
  );
};
