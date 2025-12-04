import React from 'react';
import { Section } from './ui/Section';
import { TIERS } from '../constants';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Tier } from '../types';

interface PricingTiersProps {
  selectedTierName: string | null;
  onSelect: (tier: Tier) => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ selectedTierName, onSelect }) => {
  return (
    <Section title="Select Your Infrastructure Level" className="bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {TIERS.map((tier, idx) => {
          const isSelected = selectedTierName === tier.name;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              onClick={() => onSelect(tier)}
              className={`relative flex flex-col p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'bg-slate-900 border-ls-red shadow-[0_0_30px_rgba(227,24,55,0.2)] transform scale-[1.02]'
                  : tier.highlight 
                    ? 'bg-slate-900/60 border-ls-red/50 hover:border-ls-red' 
                    : 'bg-slate-900/40 border-white/10 hover:border-white/30'
              }`}
            >
              {tier.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ls-red text-white text-xs font-bold uppercase py-1 px-4 rounded-full tracking-widest shadow-lg z-10">
                  Most Popular
                </div>
              )}
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                {isSelected && (
                  <div className="bg-ls-red rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              
              <p className="text-slate-400 text-sm h-12 mb-6">{tier.description}</p>
              
              <div className={`text-4xl font-display font-bold mb-8 ${isSelected ? 'text-ls-red' : 'text-white'}`}>
                {tier.price}
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${isSelected || tier.highlight ? 'bg-ls-red text-white' : 'bg-slate-800 text-slate-300'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all ${
                  isSelected 
                    ? 'bg-ls-red text-white shadow-lg shadow-red-900/20' 
                    : tier.highlight
                      ? 'bg-white text-slate-950 hover:bg-slate-200'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                {isSelected ? 'Selected' : `Select ${tier.name.split(' ')[0]}`}
              </button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};