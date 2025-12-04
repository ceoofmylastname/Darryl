export interface BreakdownItem {
  id: string;
  name: string;
  description?: string;
  count?: number;
  unitPrice?: number;
  totalPrice: number;
  details?: string[];
}

export interface SectionData {
  title: string;
  items: BreakdownItem[];
  totalSectionValue: number;
}

export interface Tier {
  name: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  isRecommended?: boolean;
  highlight?: boolean;
}

export interface GrowthModule {
  id: string;
  title: string;
  price: number;
  subtitle: string;
  description: string;
  capabilities: string[];
  isAiNative?: boolean;
}