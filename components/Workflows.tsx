import React from 'react';
import { Section } from './ui/Section';
import { WORKFLOWS_GROUPS, WORKFLOW_TOTAL_PRICE } from '../constants';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const Workflows: React.FC = () => {
  return (
    <Section 
      title="Automation Engine" 
      subtitle="22 Distinct workflows orchestrating your business logic."
      totalValue={WORKFLOW_TOTAL_PRICE}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORKFLOWS_GROUPS.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-xl border-t-4 border-t-ls-red relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Zap className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">{group.count}</h4>
            <p className="text-slate-300 font-medium">{group.name}</p>
            <p className="text-xs text-slate-500 mt-4 uppercase tracking-wider">Workflows Included</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-900 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="p-3 bg-ls-red/20 rounded-lg text-ls-red">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-white font-bold">Standardized Pricing</h5>
            <p className="text-sm text-slate-400">Consistent engineering cost across all logic flows.</p>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-sm text-slate-500">22 Workflows × $300</span>
          <span className="block text-2xl font-bold text-white font-mono">$6,600</span>
        </div>
      </div>
    </Section>
  );
};