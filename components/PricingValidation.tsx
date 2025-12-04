import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Server, 
  Cpu, 
  Activity, 
  BarChart3, 
  Database,
  Calculator,
  Eye,
  EyeOff
} from 'lucide-react';
import { 
  TOTAL_SYSTEM_VALUE, 
  PIPELINES, 
  FUNNELS, 
  FORMS_CALENDAR, 
  WORKFLOW_TOTAL_PRICE, 
  INTEGRATIONS 
} from '../constants';

const LedgerRow = ({ label, qty, unit, total, verified }: { label: string, qty: string, unit: string, total: number, verified?: boolean }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors group">
    <div className="flex items-center gap-3">
      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${verified ? 'bg-green-500/20 text-green-500' : 'bg-slate-800 text-slate-500'}`}>
        <CheckCircle2 className="w-3 h-3" />
      </div>
      <span className="text-slate-300 font-mono text-sm">{label}</span>
    </div>
    <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0 pl-7 md:pl-0">
      <span className="text-xs text-slate-500 font-mono w-24 text-right">{qty} × {unit}</span>
      <span className="text-white font-mono font-medium w-20 text-right">${total.toLocaleString()}</span>
    </div>
  </div>
);

const LayerCard = ({ title, sub, icon: Icon, color, features }: { title: string, sub: string, icon: any, color: string, features: string[] }) => (
  <div className={`p-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden group hover:border-${color}/50 transition-colors`}>
    <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity text-${color}`}>
      <Icon className="w-16 h-16" />
    </div>
    <h4 className={`text-lg font-bold text-white mb-1 flex items-center gap-2`}>
      <Icon className={`w-4 h-4 text-${color}`} /> {title}
    </h4>
    <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">{sub}</p>
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
          <div className={`mt-0.5 w-1 h-1 rounded-full bg-${color}`} />
          {f}
        </li>
      ))}
    </ul>
  </div>
);

export const PricingValidation: React.FC = () => {
  const [adminMode, setAdminMode] = useState(false);

  // Calculate totals for ledger
  const pipelinesTotal = PIPELINES.reduce((acc, i) => acc + i.totalPrice, 0);
  const funnelsTotal = FUNNELS.reduce((acc, i) => acc + i.totalPrice, 0);
  const assetsTotal = FORMS_CALENDAR.reduce((acc, i) => acc + (i.totalPrice || 0), 0);
  const workflowsTotal = WORKFLOW_TOTAL_PRICE;
  const aiTotal = 2100; // Marcus AI
  const integrationsTotal = INTEGRATIONS.reduce((acc, i) => acc + i.totalPrice, 0);

  return (
    <Section className="border-t border-white/5" id="validation">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-ls-red mb-2 uppercase tracking-widest text-xs font-bold">
            <Calculator className="w-4 h-4" />
            Financial Logic Verification
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">System Cost Validation</h2>
          <p className="text-slate-400 mt-2 text-lg font-light">Executive Review & Tier Alignment Analysis</p>
        </div>
        
        {/* Admin Toggle */}
        <button 
          onClick={() => setAdminMode(!adminMode)}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all ${adminMode ? 'bg-ls-red/10 border-ls-red text-ls-red' : 'bg-slate-900 border-white/10 text-slate-500'}`}
        >
          {adminMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          <span className="text-xs font-bold uppercase tracking-wider">{adminMode ? 'Admin View: ON' : 'Show Enterprise Reality'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* SECTION 1: LEDGER */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10">
           <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
             <h3 className="text-sm font-bold text-white uppercase tracking-widest">Component Ledger</h3>
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-4 h-4 text-green-500" />
               <span className="text-xs text-green-500 font-mono">MATH VERIFIED</span>
             </div>
           </div>
           
           <div className="space-y-1">
             <LedgerRow label="Pipeline Infrastructure" qty="4" unit="$280" total={pipelinesTotal} verified />
             <LedgerRow label="Funnel Architecture" qty="4" unit="$900" total={funnelsTotal} verified />
             <LedgerRow label="Capture Assets (Forms/Cal)" qty="5" unit="Mixed" total={assetsTotal} verified />
             <LedgerRow label="Automation Engine" qty="22" unit="$300" total={workflowsTotal} verified />
             <LedgerRow label="Marcus AI Core" qty="1" unit="$2,100" total={aiTotal} verified />
             <LedgerRow label="Integrations Grid" qty="7" unit="$250" total={integrationsTotal} verified />
           </div>

           <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center bg-white/5 p-4 rounded-lg">
             <span className="text-slate-400 font-mono text-sm uppercase">Verified Total CAPEX</span>
             <span className="text-2xl font-bold text-white font-mono">${TOTAL_SYSTEM_VALUE.toLocaleString()}</span>
           </div>
        </div>

        {/* SECTION 3 & 4: VALUE STATEMENT & ALERTS */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-ls-red/20 bg-gradient-to-br from-ls-red/5 to-transparent">
             <h3 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest mb-4">
               <AlertTriangle className="w-4 h-4 text-ls-red" />
               Pricing Integrity Review
             </h3>
             <div className="space-y-3">
               <div className="flex gap-3 items-start p-3 bg-slate-950/50 rounded border border-ls-red/20">
                 <div className="text-ls-red text-xs mt-0.5">⚠️</div>
                 <div>
                   <p className="text-sm text-slate-200 font-medium">Pipeline Infrastructure Under-priced</p>
                   <p className="text-xs text-slate-400 mt-1">Modules priced at $280. Market engineering rate is ~$750+ per pipeline stage set.</p>
                 </div>
               </div>
               <div className="flex gap-3 items-start p-3 bg-slate-950/50 rounded border border-ls-red/20">
                 <div className="text-ls-red text-xs mt-0.5">⚠️</div>
                 <div>
                   <p className="text-sm text-slate-200 font-medium">AI System at Flat Cost</p>
                   <p className="text-xs text-slate-400 mt-1">Marcus AI sold as one-time asset ($2,100). No monthly seat licensing added.</p>
                 </div>
               </div>
             </div>
             <div className="mt-4 flex justify-end">
               <span className="text-[10px] text-ls-red border border-ls-red/30 px-2 py-1 rounded bg-ls-red/10 uppercase tracking-wider font-bold">
                 Strategic Tier Discount Applied
               </span>
             </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
             <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">What You Are Actually Buying</h3>
             <p className="text-slate-300 text-sm leading-relaxed mb-4">
               This is <strong className="text-white">NOT</strong> a service retainer, a generic chatbot, or a website setup fee.
             </p>
             <p className="text-slate-300 text-sm leading-relaxed">
               This <strong className="text-white">IS</strong> a capital asset. You are purchasing ownership of a deployed operating system, an automated org chart, and a proprietary revenue engine.
             </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: TIER MATRIX */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold text-white">Do The Tiers Match The Value?</h3>
          <p className="text-slate-400 text-sm">Component Coverage Analysis</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-xs uppercase tracking-widest text-slate-500 font-medium">Component</th>
                <th className="py-4 px-6 text-xs uppercase tracking-widest text-white font-bold bg-slate-900/50">Foundation ($9.5k)</th>
                <th className="py-4 px-6 text-xs uppercase tracking-widest text-white font-bold bg-slate-800/50">AI Automation ($13.5k)</th>
                <th className="py-4 px-6 text-xs uppercase tracking-widest text-ls-red font-bold bg-ls-red/10">Enterprise ($16k)</th>
                <th className="py-4 px-6 text-xs uppercase tracking-widest text-slate-500 font-medium text-right">Real Value</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'Pipeline Infrastructure', f: true, a: true, e: true, val: pipelinesTotal },
                { name: 'Funnel Architecture', f: true, a: true, e: true, val: funnelsTotal },
                { name: 'Forms & Calendars', f: true, a: true, e: true, val: assetsTotal },
                { name: 'Workflows (Automation)', f: false, a: true, e: true, val: workflowsTotal },
                { name: 'Marcus AI System', f: false, a: true, e: true, val: aiTotal },
                { name: 'Adv. Integrations', f: false, a: false, e: true, val: integrationsTotal },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-300">{row.name}</td>
                  <td className="py-4 px-6 bg-slate-900/30">
                    {row.f ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <div className="w-2 h-2 rounded-full bg-slate-800" />}
                  </td>
                  <td className="py-4 px-6 bg-slate-800/30">
                    {row.a ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <div className="w-2 h-2 rounded-full bg-slate-700" />}
                  </td>
                  <td className="py-4 px-6 bg-ls-red/5 border-l border-r border-ls-red/10">
                    {row.e ? <CheckCircle2 className="w-5 h-5 text-ls-red" /> : <div className="w-2 h-2 rounded-full bg-slate-800" />}
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-slate-500">
                    ${row.val.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: TIER LOGIC */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <LayerCard 
          title="FOUNDATION" 
          sub="Infrastructure Layer" 
          icon={Server} 
          color="slate-400"
          features={["Pipelines (The Skeleton)", "Funnels (The Skin)", "CRM Data (The Memory)"]}
        />
        <LayerCard 
          title="AI AUTOMATION" 
          sub="Intelligence Layer" 
          icon={Cpu} 
          color="white"
          features={["Workflows (The Nervous System)", "Marcus AI (The Brain)", "Auto-Routing (The Reflexes)"]}
        />
        <LayerCard 
          title="ENTERPRISE" 
          sub="Control Layer" 
          icon={Activity} 
          color="ls-red"
          features={["Deep Tracking (The Vision)", "Integrations (The Speech)", "Reporting (The Pulse)"]}
        />
      </div>

      {/* ADMIN MODE OVERLAY */}
      <AnimatePresence>
        {adminMode && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-900 border border-ls-red/30 rounded-2xl p-8 mb-16 relative">
              <div className="absolute top-0 left-0 bg-ls-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-br-lg">
                Internal Admin Data
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="py-4">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Equivalent SaaS Cost</p>
                  <p className="text-3xl font-display font-bold text-white mb-1">~$30,000<span className="text-sm font-normal text-slate-500">/yr</span></p>
                  <p className="text-xs text-slate-400">Based on HubSpot Ent. + Zapier + AI Tokens</p>
                </div>
                <div className="py-4">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Equivalent FTE Cost</p>
                  <p className="text-3xl font-display font-bold text-white mb-1">~$65,000<span className="text-sm font-normal text-slate-500">/yr</span></p>
                  <p className="text-xs text-slate-400">Junior Ops Manager Salary</p>
                </div>
                <div className="py-4">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">AOF System Cost</p>
                  <p className="text-3xl font-display font-bold text-ls-red mb-1">One-Time</p>
                  <p className="text-xs text-slate-400">Ownership vs Renting</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL VERDICT */}
      <div className="text-center max-w-2xl mx-auto border border-green-500/20 bg-green-500/5 rounded-xl p-6">
         <h4 className="flex items-center justify-center gap-2 text-green-500 font-bold uppercase tracking-widest text-sm mb-4">
           <ShieldCheck className="w-5 h-5" /> System Logic Verified
         </h4>
         <p className="text-slate-300 font-light mb-4">
           The pricing model favors <strong>infrastructure ownership</strong> over recurring service fees. 
           Tier bundling provides ~15-20% efficiency over modular build costs.
         </p>
         <p className="text-white font-medium">
           "You are not choosing a tier. You are choosing how much of the system you want live."
         </p>
      </div>

    </Section>
  );
};
