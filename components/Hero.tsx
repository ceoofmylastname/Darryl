import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToBreakdown = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-slate-950">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/693112d3e0f09276757e1a55.png"
          alt="AOF System Background"
          className="w-full h-full md:w-[130%] max-w-none object-cover object-[center_top] md:object-left-top opacity-50 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
      </div>
      
      {/* Gradient Overlay */}
      {/* Heavy left gradient for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent md:via-slate-950/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      
      {/* Red accent tint */}
      <div className="absolute inset-0 z-10 bg-ls-red/5 mix-blend-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6 text-ls-red font-medium tracking-widest uppercase text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>AOF System Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight mb-8">
            Your LegalShield Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Engineered As a System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed mb-4">
            A complete AI-powered automation build with real pricing and real scope — not theory.
          </p>

          <p className="text-slate-400 text-sm md:text-base max-w-xl border-l-2 border-ls-red/50 pl-4 mb-12">
            This page shows the <strong>exact components</strong> of your system, the <strong>cost per component</strong>, and the <strong>total build cost</strong> before tiering.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#E31837' }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToBreakdown}
            className="group bg-white text-slate-950 px-8 py-4 rounded-md font-bold text-lg flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            View Full System Breakdown
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-20 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
      </motion.div>
    </div>
  );
};