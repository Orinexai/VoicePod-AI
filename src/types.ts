export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  turnaroundTime: string;
  deliverables: string[];
  bestFor: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  statNumber: string;
  statLabel: string;
  commonWorkflows: string[];
}

export interface ProcessStep {
  step: string;
  day: string;
  title: string;
  description: string;
  deliverables: string;
  iconName: string;
}

export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  setupFee: number;
  monthlyManagement: number;
  popular?: boolean;
  includedMinutes: string;
  concurrency: string;
  features: string[];
  ctaLabel: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  location: string;
  image: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  testimonialQuote: string;
  authorTitle: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
