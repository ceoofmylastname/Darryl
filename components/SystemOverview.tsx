import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Workflow, GitMerge, FileText, Calendar, Cpu, Link } from 'lucide-react';
import { TOTAL_SYSTEM_VALUE } from '../constants';

const data = [
  { name: 'Pipelines', value: 1120, color: '#f8fafc' },
  { name: 'Funnels', value: 3600, color: '#94a3b8' },
  { name: 'Workflows', value: 6600, color: '#E31837' },
  { name: 'AI & Int', value: 3850, color: '#475569' },
  { name: 'Assets', value: 840, color: '#1e293b' },
];

const StatCard = ({ label, value, icon: Icon, delay }: { label: string, value: string | number, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-ls-red/30 transition-colors duration-300"
  >
    <Icon className="w-6 h-6 text-ls-red mb-2" />
    <span className="text-4xl font-display font-bold text-white">{value}</span>
    <span className="text-slate-400 text-xs uppercase tracking-widest">{label}</span>
  </motion.div>
);

export const SystemOverview: React.FC = () => {
  return (
    <Section 
      id="overview" 
      title="Not a Website. A Business Operating System." 
      className="bg-slate-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard icon={GitMerge} label="Pipelines" value="4" delay={0.1} />
            <StatCard icon={FileText} label="Funnels" value="4" delay={0.2} />
            <StatCard icon={FileText} label="Forms" value="4" delay={0.3} />
            <StatCard icon={Calendar} label="Calendars" value="1" delay={0.4} />
            <StatCard icon={Workflow} label="Workflows" value="22" delay={0.5} />
            <StatCard icon={Cpu} label="AI Agents" value="1" delay={0.6} />
            <StatCard icon={Link} label="Integrations" value="7" delay={0.7} />
            <div className="col-span-2 md:col-span-2 glass-panel p-6 rounded-xl border border-ls-red/50 bg-gradient-to-br from-ls-red/10 to-transparent flex flex-col justify-center">
                <span className="text-slate-300 text-sm uppercase tracking-widest mb-1">Total Build Value</span>
                <span className="text-4xl md:text-5xl font-display font-bold text-white glow-text">
                  ${TOTAL_SYSTEM_VALUE.toLocaleString()}
                </span>
            </div>
        </div>

        {/* Right Chart */}
        <div className="h-[300px] lg:h-auto glass-panel rounded-xl p-6 relative">
          <h3 className="text-white font-medium mb-4 text-center text-sm uppercase tracking-widest">Value Distribution</h3>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-6">
             <span className="text-slate-500 text-xs font-mono">100% COVERAGE</span>
          </div>
        </div>
      </div>
    </Section>
  );
};