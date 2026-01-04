import React, { useState } from 'react';
import { Hero } from './Hero';
import { SystemOverview } from './SystemOverview';
import { ComponentBreakdown } from './ComponentBreakdown';
import { Workflows } from './Workflows';
import { MarcusAI } from './MarcusAI';
import { GrandTotal } from './GrandTotal';
import { PricingValidation } from './PricingValidation';
import { PricingTiers } from './PricingTiers';
import { GrowthModules } from './GrowthModules';
import { CheckoutBar } from './CheckoutBar';
import { Section } from './ui/Section';
import { PIPELINES, FUNNELS, FORMS_CALENDAR, INTEGRATIONS } from '../constants';
import { Tier } from '../types';

export const Home = () => {
    const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
    const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([]);

    const toggleModule = (id: string) => {
        setSelectedModuleIds(prev =>
            prev.includes(id)
                ? prev.filter(mId => mId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-ls-red selection:text-white pb-32">
            <Hero />

            <SystemOverview />

            <Section title="Pipeline Infrastructure" subtitle="The backbone of your prospect management.">
                <ComponentBreakdown
                    title="Pipelines Breakdown"
                    items={PIPELINES}
                    calculation="4 Pipelines × $280"
                    total={1120}
                />
            </Section>

            <Section title="Funnels & Pages" subtitle="High-converting digital assets ($900 per 3-page funnel).">
                <ComponentBreakdown
                    title="Funnel Architecture"
                    items={FUNNELS}
                    calculation="4 Funnel Systems × $900"
                    total={3600}
                />
            </Section>

            <Section title="Capture Assets" subtitle="Scheduling and qualification mechanisms.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ComponentBreakdown
                        title="Forms & Calendars"
                        items={FORMS_CALENDAR}
                        calculation="4 Forms × $140 + 1 Calendar"
                        total={840}
                    />
                </div>
            </Section>

            <Workflows />

            <MarcusAI />

            <Section title="System Integrations" subtitle="Connectivity between disparate data points.">
                <ComponentBreakdown
                    title="Integration Grid"
                    items={INTEGRATIONS}
                    calculation="7 Integrations × $250"
                    total={1750}
                />
            </Section>

            <GrandTotal />

            <PricingValidation />

            <div id="tiers">
                <PricingTiers
                    selectedTierName={selectedTier?.name || null}
                    onSelect={setSelectedTier}
                />
            </div>

            <GrowthModules
                selectedModuleIds={selectedModuleIds}
                onToggle={toggleModule}
            />

            <CheckoutBar
                selectedTier={selectedTier}
                selectedModuleIds={selectedModuleIds}
            />

            <footer className="py-12 border-t border-white/5 bg-slate-950 text-center text-slate-600 text-sm">
                <p>© {new Date().getFullYear()} AOF System Framework. All Rights Reserved.</p>
                <p className="mt-2">Built for LegalShield Professionals.</p>
            </footer>
        </div>
    );
};
