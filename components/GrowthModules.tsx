import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Code2, 
  Mic, 
  Megaphone, 
  Users, 
  Target, 
  ArrowDown, 
  Plus, 
  Check, 
  Layers,
  Cpu
} from 'lucide-react';
import { GROWTH_MODULES } from '../constants';

interface ModuleProps {
  id: string;
  title: string;
  price: number;
  subtitle: string;
  description: string;
  isSelected: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const ModuleCard: React.FC<ModuleProps> = ({ id, title, price, subtitle, description, isSelected, onToggle, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative rounded-3xl overflow-hidden border transition-all duration-300 ${
      isSelected 
        ? 'bg-slate-900/80 border-ls-red shadow-[0_0_40px_rgba(227,24,55,0.15)]' 
        : 'bg-slate-900/40 border-white/10 hover:border-white/20'
    }`}
  >
    {/* Selection Indicator */}
    <div className="absolute top-0 right-0 p-6 z-20">
      <button 
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
          isSelected 
            ? 'bg-ls-red text-white shadow-lg' 
            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-white/10'
        }`}
      >
        {isSelected ? (
          <><Check className="w-4 h-4" /> Added to Plan</>
        ) : (
          <><Plus className="w-4 h-4" /> Add Module</>
        )}
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Content Side */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
         <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              Infrastructure Add-On
            </span>
            {id === 'ai-web' && <span className="text-ls-red text-xs font-bold uppercase tracking-widest flex items-center gap-1"><Cpu className="w-3 h-3" /> AI Native</span>}
         </div>
         
         <h3 className="text-3xl font-display font-bold text-white mb-2">{title}</h3>
         <p className="text-ls-red font-bold text-xl mb-6">${price.toLocaleString()}</p>
         
         <p className="text-lg text-white font-medium mb-4">{subtitle}</p>
         <p className="text-slate-400 text-sm leading-relaxed mb-8">{description}</p>
         
         <div className="mt-auto">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Key Capabilities:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {id === 'ai-web' ? (
                ['AI Discovery', 'LLM Optimization', 'Google Trust', 'Geo-Targeting'].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-ls-red rounded-full" /> {c}
                  </div>
                ))
              ) : (
                 ['Traffic Gen', 'Lead Nurture', 'Conversion Logic', 'Enrollment'].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-ls-red rounded-full" /> {c}
                  </div>
                ))
              )}
            </div>
         </div>
      </div>

      {/* Visual Side */}
      <div className="bg-slate-950/50 border-l border-white/5 p-8 md:p-10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ls-red/5 to-transparent opacity-50" />
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

const StackLayer = ({ label, icon: Icon, sub, bg }: { label: string, icon: any, sub: string, bg: string }) => (
  <div className={`flex items-center gap-4 p-3 rounded-lg border border-white/10 mb-2 last:mb-0 backdrop-blur-sm ${bg}`}>
    <div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center text-slate-300 border border-white/5 shadow-sm shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-sm font-bold text-white">{label}</div>
      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{sub}</div>
    </div>
  </div>
);

const FunnelStage = ({ label, desc, color, icon: Icon }: { label: string, desc: string, color: string, icon: any }) => (
  <div className="relative p-4 rounded-xl border border-white/5 bg-slate-900/50 mb-4 text-center group hover:border-white/20 transition-colors">
    <div className={`absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950 border border-${color} flex items-center justify-center text-${color} z-10`}>
      <Icon className="w-3 h-3" />
    </div>
    <div className={`text-${color} text-xs font-bold uppercase tracking-widest mb-1`}>{label}</div>
    <div className="text-white font-bold text-sm mb-1">{desc}</div>
    <div className="w-0.5 h-4 bg-white/10 mx-auto mt-2 mb-[-24px] last:hidden" />
  </div>
);

interface GrowthModulesProps {
  selectedModuleIds: string[];
  onToggle: (id: string) => void;
}

export const GrowthModules: React.FC<GrowthModulesProps> = ({ selectedModuleIds, onToggle }) => {
  // We use the data from constants but map manually to preserve the custom visual children for each
  const aiWeb = GROWTH_MODULES.find(m => m.id === 'ai-web')!;
  const marketing = GROWTH_MODULES.find(m => m.id === 'marketing')!;

  return (
    <Section title="Optional Growth Acceleration Modules" subtitle="Selected by Darryl — Enterprise Expansion Layer.">
      <div className="mb-12 max-w-3xl">
        <p className="text-slate-400 text-lg font-light leading-relaxed">
          These modules extend your operating system into a growth engine. 
          This is not another tier; it is an infrastructure add-on for traffic acquisition, AI visibility, and funnel monetization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 pb-32">
        {/* MODULE 1: AI WEBSITE */}
        <ModuleCard
          {...aiWeb}
          isSelected={selectedModuleIds.includes('ai-web')}
          onToggle={() => onToggle('ai-web')}
        >
          <div className="space-y-4">
            <h4 className="text-center text-xs text-slate-500 uppercase tracking-[0.2em] mb-4">AI Website Technology Stack</h4>
            <div className="space-y-1">
              <StackLayer label="Speakable Headers" sub="Voice & AI Parsing" icon={Mic} bg="bg-indigo-900/20" />
              <StackLayer label="JSON-LD Schema" sub="Machine Readability" icon={Code2} bg="bg-blue-900/20" />
              <StackLayer label="EEAT Architecture" sub="Authority Signals" icon={ShieldCheck} bg="bg-cyan-900/20" />
              <StackLayer label="GEO Optimization" sub="Geographic Indexing" icon={MapPin} bg="bg-emerald-900/20" />
              <StackLayer label="AEO Structure" sub="Answer Engine Optimization" icon={Search} bg="bg-amber-900/20" />
              <StackLayer label="Technical SEO" sub="Core Indexing Foundation" icon={Globe} bg="bg-ls-red/10" />
            </div>
          </div>
        </ModuleCard>

        {/* MODULE 2: MARKETING ENGINE */}
        <ModuleCard
          {...marketing}
          isSelected={selectedModuleIds.includes('marketing')}
          onToggle={() => onToggle('marketing')}
        >
          <div className="relative">
             <h4 className="text-center text-xs text-slate-500 uppercase tracking-[0.2em] mb-6">Traffic to Revenue Flow</h4>
             
             <div className="space-y-4 max-w-xs mx-auto relative z-10">
               <FunnelStage icon={Megaphone} label="TOFU (Awareness)" desc="Content, Social, AI Discovery" color="blue-400" />
               <FunnelStage icon={Users} label="MOFU (Education)" desc="Email, Video, Nurture Logic" color="purple-400" />
               <FunnelStage icon={Target} label="BOFU (Conversion)" desc="Booking, Enrollment Triggers" color="ls-red" />
             </div>

             <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="flex flex-col items-center gap-2">
                   <ArrowDown className="w-5 h-5 text-slate-500 animate-bounce" />
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-white/5 text-xs text-slate-300">
                     <Layers className="w-4 h-4" />
                     Connects to Marcus AI + Pipelines
                   </div>
                </div>
             </div>
          </div>
        </ModuleCard>
      </div>
    </Section>
  );
};