import { BreakdownItem, Tier, GrowthModule } from './types';

export const PIPELINES: BreakdownItem[] = [
  { id: 'p1', name: 'Recruiting Pipeline', details: ['14 Stages'], unitPrice: 280, totalPrice: 280 },
  { id: 'p2', name: 'DBR Pipeline', details: ['9 Stages'], unitPrice: 280, totalPrice: 280 },
  { id: 'p3', name: 'New Recruit Onboarding', details: ['9 Stages'], unitPrice: 280, totalPrice: 280 },
  { id: 'p4', name: 'Conversion Tracking', details: ['8 Stages'], unitPrice: 280, totalPrice: 280 },
];

export const FUNNELS: BreakdownItem[] = [
  { id: 'f1', name: 'Recruiting Funnel System', details: ['3 Pages', 'Lead Capture', '$105/pg Overage'], unitPrice: 900, totalPrice: 900 },
  { id: 'f2', name: 'DBR Presentation Funnel', details: ['3 Pages', 'Video Sales', '$105/pg Overage'], unitPrice: 900, totalPrice: 900 },
  { id: 'f3', name: 'Onboarding Funnel', details: ['3 Pages', 'Training', '$105/pg Overage'], unitPrice: 900, totalPrice: 900 },
  { id: 'f4', name: 'Tracking & Redirects', details: ['3 Pages', 'Analytics', '$105/pg Overage'], unitPrice: 900, totalPrice: 900 },
];

export const FORMS_CALENDAR: BreakdownItem[] = [
  { id: 'fc1', name: 'Qualification Form (Funnel 1)', unitPrice: 140, totalPrice: 140 },
  { id: 'fc2', name: 'Qualification Form (Funnel 2)', unitPrice: 140, totalPrice: 140 },
  { id: 'fc3', name: 'Qualification Form (Funnel 3)', unitPrice: 140, totalPrice: 140 },
  { id: 'fc4', name: 'Qualification Form (Funnel 4)', unitPrice: 140, totalPrice: 140 },
  { id: 'fc5', name: 'New Recruit Onboarding Calendar', totalPrice: 280 },
];

export const WORKFLOWS_GROUPS = [
  { name: 'Recruiting Automation', count: 9 },
  { name: 'DBR Automation', count: 6 },
  { name: 'Onboarding Sequences', count: 4 },
  { name: 'Conversion Tracking', count: 3 },
];

export const WORKFLOW_TOTAL_COUNT = 22;
export const WORKFLOW_UNIT_PRICE = 300;
export const WORKFLOW_TOTAL_PRICE = 6600;

export const INTEGRATIONS: BreakdownItem[] = [
  { id: 'i1', name: 'Email Parser', totalPrice: 250 },
  { id: 'i2', name: 'GHL Webhooks', totalPrice: 250 },
  { id: 'i3', name: 'AI Bot API', totalPrice: 250 },
  { id: 'i4', name: 'Video Tracking Events', totalPrice: 250 },
  { id: 'i5', name: 'CRM Automation', totalPrice: 250 },
  { id: 'i6', name: 'Telegram Connection', totalPrice: 250 },
  { id: 'i7', name: 'Enrollment Trigger Recognition', totalPrice: 250 },
];

export const TOTAL_SYSTEM_VALUE = 16010;

export const TIERS: Tier[] = [
  {
    name: "FOUNDATION SYSTEM",
    price: "$9,500",
    priceValue: 9500,
    description: "The core infrastructure required to operate professionally.",
    features: [
      "All 4 Pipelines",
      "Complete Funnel System (4 Funnels)",
      "4 Qualification Forms",
      "Onboarding Calendar",
      "CRM Setup"
    ]
  },
  {
    name: "AI AUTOMATION SYSTEM",
    price: "$13,500",
    priceValue: 13500,
    description: "Full automation engine with intelligent agent capabilities.",
    isRecommended: true,
    features: [
      "Everything in Foundation",
      "Marcus AI System Integration",
      "All 22 Automation Workflows",
      "Recruiting Automations",
      "DBR Automations",
      "Human-Takeover Logic"
    ]
  },
  {
    name: "ENTERPRISE ENGINE",
    price: "$16,010+",
    priceValue: 16010,
    description: "Maximum visibility, tracking, and complex integrations.",
    highlight: true,
    features: [
      "Everything in AI Automation",
      "Advanced Conversion Tracking",
      "Parsing & Reporting Systems",
      "All 7 Advanced Integrations",
      "Telegram & Webhook Connections",
      "Priority Support Channel"
    ]
  }
];

export const GROWTH_MODULES: GrowthModule[] = [
  {
    id: 'ai-web',
    title: "AI SEO / AEO / GEO / EEAT",
    price: 5940,
    subtitle: "AI-Optimized Website Architecture",
    description: "Deploys a fully optimized AI website framework designed to make your LegalShield brand discoverable by AI systems, understandable by LLMs, credible to Google, and trusted algorithmically.",
    capabilities: ['AI Discovery', 'LLM Optimization', 'Google Trust', 'Geo-Targeting'],
    isAiNative: true
  },
  {
    id: 'marketing',
    title: "TOFU / MOFU / BOFU ENGINE",
    price: 1400,
    subtitle: "Full-Funnel Marketing Strategy Implementation",
    description: "Builds a complete traffic, nurture, and conversion system. Traffic feeds AI, AI routes leads, pipelines organize, and automations convert.",
    capabilities: ['Traffic Gen', 'Lead Nurture', 'Conversion Logic', 'Enrollment']
  }
];