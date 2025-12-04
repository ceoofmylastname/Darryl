import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Tier } from '../types';
import { GROWTH_MODULES } from '../constants';

interface CheckoutBarProps {
  selectedTier: Tier | null;
  selectedModuleIds: string[];
}

export const CheckoutBar: React.FC<CheckoutBarProps> = ({ selectedTier, selectedModuleIds }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Calculate totals
  const tierPrice = selectedTier ? selectedTier.priceValue : 0;
  const modulesTotal = selectedModuleIds.reduce((acc, id) => {
    const module = GROWTH_MODULES.find(m => m.id === id);
    return acc + (module ? module.price : 0);
  }, 0);
  
  const grandTotal = tierPrice + modulesTotal;
  const selectedModulesCount = selectedModuleIds.length;

  useEffect(() => {
    if (selectedTier || selectedModuleIds.length > 0) {
      setIsVisible(true);
    }
  }, [selectedTier, selectedModuleIds]);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-ls-red/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 pointer-events-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Configuration Details */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-ls-red/10 border border-ls-red/20 text-ls-red">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Current Configuration
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-slate-400">
                <span className={selectedTier ? 'text-white font-medium' : 'text-slate-500 italic'}>
                  {selectedTier ? selectedTier.name : 'No Infrastructure Selected'}
                </span>
                {selectedModulesCount > 0 && (
                  <span className="hidden md:inline text-slate-600">•</span>
                )}
                {selectedModulesCount > 0 && (
                  <span className="text-white font-medium">
                    {selectedModulesCount} Growth Module{selectedModulesCount > 1 ? 's' : ''} Added
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Big Total */}
          <div className="w-full md:w-auto text-center md:text-right border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
            <div className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-1">Total System Investment</div>
            <div className="text-4xl font-display font-bold text-white glow-text">
              ${grandTotal.toLocaleString()}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};