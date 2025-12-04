import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  totalValue?: number;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", totalValue }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 border-l-4 border-ls-red pl-6">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tight"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400 mt-2 text-lg md:text-xl font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      
      {children}

      {totalValue && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-end"
        >
          <div className="glass-panel px-6 py-3 rounded-full border border-ls-red/30 flex items-center gap-3">
            <span className="text-slate-400 text-sm uppercase tracking-widest">Section Total</span>
            <span className="text-2xl font-bold text-white font-display">${totalValue.toLocaleString()}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};