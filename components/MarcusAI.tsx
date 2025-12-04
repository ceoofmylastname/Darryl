import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Bot, CheckCircle2 } from 'lucide-react';

export const MarcusAI: React.FC = () => {
  return (
    <Section>
      <div className="relative rounded-3xl overflow-hidden border border-ls-red/50 shadow-[0_0_50px_rgba(227,24,55,0.15)]">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ls-red/10 to-transparent z-0" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ls-red/20 border border-ls-red/40 text-ls-red text-xs font-bold uppercase tracking-widest mb-6">
              <Bot className="w-4 h-4" />
              AI Operator
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              MARCUS AI SYSTEM
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Marcus is not just a chatbot. He is an <strong>AI operator</strong> that captures leads, answers questions, routes prospects, moves pipelines, and triggers automation based on intent.
            </p>
            
            <ul className="space-y-4">
              {[
                "OpenAI Intelligence Core",
                "Full GHL CRM Body integration",
                "Context-aware workflow routing",
                "Safety guardrails & hallucinaton prevention",
                "Automatic Human-Takeover Logic"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-ls-red" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
             <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 border-4 border-ls-red/30 flex items-center justify-center shadow-[0_0_40px_rgba(227,24,55,0.3)] mb-8 animate-pulse">
                <Bot className="w-24 h-24 text-white" />
             </div>
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl">
               <p className="text-slate-400 text-sm uppercase mb-1">Module Cost</p>
               <p className="text-4xl font-mono font-bold text-white">$2,100</p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};