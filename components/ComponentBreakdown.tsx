import React from 'react';
import { Section } from './ui/Section';
import { BreakdownItem } from '../types';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  items: BreakdownItem[];
  calculation?: string;
  total: number;
}

const Row: React.FC<{ item: BreakdownItem; index: number }> = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row md:items-center justify-between p-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
  >
    <div>
      <h4 className="text-lg font-medium text-white">{item.name}</h4>
      {item.details && (
        <div className="flex gap-2 mt-1">
          {item.details.map((d, i) => (
            <span key={i} className="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-white/10">{d}</span>
          ))}
        </div>
      )}
    </div>
    <div className="mt-2 md:mt-0 font-mono text-slate-300">
      {item.unitPrice ? `$${item.unitPrice} ea` : ''} 
      {item.totalPrice && !item.unitPrice ? `$${item.totalPrice}` : ''}
    </div>
  </motion.div>
);

export const ComponentBreakdown: React.FC<Props> = ({ title, items, calculation, total }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 mb-8">
      <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">{title}</h3>
        <div className="text-right">
           <div className="text-xs text-slate-400 mb-1">{calculation}</div>
           <div className="text-2xl font-bold text-ls-red">${total.toLocaleString()}</div>
        </div>
      </div>
      <div>
        {items.map((item, idx) => (
          <Row key={item.id} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
};