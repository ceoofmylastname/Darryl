import React from 'react';
import { motion } from 'framer-motion';
import { TOTAL_SYSTEM_VALUE } from '../constants';

export const GrandTotal: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-slate-800 via-ls-red to-slate-800"
      >
        <div className="bg-slate-950 rounded-[22px] py-16 px-6 text-center relative overflow-hidden">
           {/* Glow Effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-ls-red/20 blur-[100px] rounded-full" />
           
           <div className="relative z-10">
             <h3 className="text-slate-400 text-lg md:text-xl uppercase tracking-[0.3em] mb-4">Total System Build Value</h3>
             <div className="text-6xl md:text-8xl font-display font-bold text-white mb-6 glow-text">
               ${TOTAL_SYSTEM_VALUE.toLocaleString()}
             </div>
             <p className="text-slate-300 max-w-lg mx-auto border-t border-white/10 pt-6">
               This is the full system cost before packaging into tiers. When you select a tier below, you are leveraging bundled volume pricing.
             </p>
           </div>
        </div>
      </motion.div>
    </section>
  );
};