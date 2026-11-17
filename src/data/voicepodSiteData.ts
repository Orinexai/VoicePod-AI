import heroSculptureImg from '../assets/images/voicepod_hero_sculpture_1794944212100.jpg';
import acousticMicImg from '../assets/images/voicepod_acoustic_mic_1794944212998.jpg';
import globalRoutingImg from '../assets/images/voicepod_global_routing_1794944214993.jpg';
import neuralWaveformImg from '../assets/images/voicepod_neural_waveform_1794944214230.jpg';
import crmWorkspaceImg from '../assets/images/voicepod_crm_workspace_1794944215890.jpg';
import editorialBoardroomImg from '../assets/images/voicepod_editorial_boardroom_1794944215331.jpg';

import archNeuralEdgeImg from '../assets/images/arch_neural_edge_1794944706915.jpg';
import pillarHumanVoiceImg from '../assets/images/pillar_human_voice_1794944707185.jpg';
import pillarAlwaysOnImg from '../assets/images/pillar_always_on_1794944707648.jpg';
import pillarWorkflowSyncImg from '../assets/images/pillar_workflow_sync_1794944707171.jpg';
import pillarPersonaAudioImg from '../assets/images/pillar_persona_audio_1794944708404.jpg';
import solSupportDeskImg from '../assets/images/sol_support_desk_1794944709472.jpg';
import solSalesSdrImg from '../assets/images/sol_sales_sdr_1794944710107.jpg';
import solAppointmentCalImg from '../assets/images/sol_appointment_cal_1794944708967.jpg';
import solOutreachWaveImg from '../assets/images/sol_outreach_wave_1794944710400.jpg';
import newsletterBriefImg from '../assets/images/newsletter_brief_1794944711285.jpg';
import featHeaderCoreImg from '../assets/images/feat_header_core_1794944711983.jpg';
import featSipPipelineImg from '../assets/images/feat_sip_pipeline_1794944711760.jpg';
import featVoiceCloningImg from '../assets/images/feat_voice_cloning_1794944712124.jpg';
import featGlobalDialectsImg from '../assets/images/feat_global_dialects_1794944713536.jpg';

import blogIvrEvolutionImg from '../assets/images/blog_ivr_evolution_1794944798720.jpg';
import blogOmnichannelImg from '../assets/images/blog_omnichannel_messaging_1794944799135.jpg';
import blogRealEstateImg from '../assets/images/blog_real_estate_lead_1794944800802.jpg';
import blogEcommerceImg from '../assets/images/blog_ecommerce_support_1794944800633.jpg';
import pricingEnterpriseRackImg from '../assets/images/pricing_enterprise_rack_1794944804229.jpg';
import tutorialsAcademyDeskImg from '../assets/images/tutorials_academy_desk_1794944802196.jpg';
import resFeaturedPlaybookImg from '../assets/images/res_featured_playbook_1794944802736.jpg';
import faqSupportConsoleImg from '../assets/images/faq_support_console_1794944802858.jpg';

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  agents: string;
  minutes: string;
  features: string[];
  ctaText: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export interface TutorialItem {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  stepsCount: number;
  category: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: string;
  description: string;
  format: string;
  tag: string;
}

export const SITE_METRICS = [
  { value: '1.5K+', label: 'Active AI Voice Agents' },
  { value: '27+', label: 'Supported Accents & Languages' },
  { value: '99.9%', label: 'Telephony Uptime SLA' },
  { value: '70%', label: 'Average Support Cost Reduction' },
];

export const ROBOT_ASSETS = {
  // Primary generated architectural studio visuals & transparent brand PNG/WebP mark
  hero: heroSculptureImg,
  brandMarkPng: '/assets/aistudio/x2dd6rxx_voicepod_icon_transparent__2__8918fc13.webp',
  architecture: archNeuralEdgeImg,
  concierge: editorialBoardroomImg,
  newsletter: newsletterBriefImg,
  featuresHero: featHeaderCoreImg,
  featuresSip: featSipPipelineImg,
  featuresCloning: featVoiceCloningImg,
  featuresDialects: featGlobalDialectsImg,
  pricingEnterprise: pricingEnterpriseRackImg,
  onboarding: tutorialsAcademyDeskImg,
  playbookFeatured: resFeaturedPlaybookImg,
  faqSupport: faqSupportConsoleImg,
  avatarFallback: '/favicon-192x192.png',
  bannerFallback: '/assets/aistudio/x2dd6rxx_voicepod_icon_transparent__2__8918fc13.webp'
};

export const CORE_FEATURES = [
  {
    id: 'inbound-outbound',
    title: 'Inbound & Outbound AI Calling',
    tag: 'Calling Engine',
    description: 'Never miss an opportunity with AI voice agents that manage both incoming and outgoing calls. Deliver instant responses, engage prospects, follow up on leads, and provide 24/7 call center support.',
    bullets: ['Qualify leads before handoff', 'Run automated outbound campaigns', 'Answer inbound calls 24/7 in zero rings'],
    icon: 'PhoneCall',
    image: crmWorkspaceImg
  },
  {
    id: 'custom-voices',
    title: 'Custom AI Voices',
    tag: 'Audio Quality',
    description: 'Create a unique voice experience that reflects your brand. Choose from a wide range of realistic AI voices or customize speech inflection, pacing, pitch, and conversational tone.',
    bullets: ['Adjustable tone and speaking style', 'Brand-specific voice selection', 'Natural human-like cadence and breathing'],
    icon: 'Mic',
    image: acousticMicImg
  },
  {
    id: 'multiple-accents',
    title: 'Multiple Regional Accents',
    tag: 'Localization',
    description: 'Build stronger customer connections with AI voices that speak in familiar regional accents. Deliver conversations that feel natural, trustworthy, and culturally tuned.',
    bullets: ['Better engagement & trust', 'Localized customer experience', 'Regional English, US, UK, and Australian accents'],
    icon: 'Globe',
    image: globalRoutingImg
  },
  {
    id: 'multilingual-support',
    title: 'Multi-Language AI Conversations',
    tag: 'Global Scale',
    description: 'Expand your business globally with AI voice agents that communicate fluently in multiple languages, ensuring every customer feels heard regardless of geography.',
    bullets: ['Natural multilingual conversations', 'Automatic caller language detection', 'Support 50+ international languages'],
    icon: 'Languages',
    image: neuralWaveformImg
  }
];

export const PILLAR_CAPABILITIES = [
  {
    title: 'Human-Like AI Conversations',
    description: 'Deploy intelligent AI agents that understand customers, answer questions, handle interruptions, and maintain conversations naturally like a real human representative.',
    icon: 'Sparkles',
    image: pillarHumanVoiceImg
  },
  {
    title: 'Always Available, Always Responsive',
    description: 'Never miss a customer opportunity with AI agents that answer calls, follow up with leads, and provide support around the clock 24/7/365 without hold music.',
    icon: 'Clock',
    image: pillarAlwaysOnImg
  },
  {
    title: 'Connect Your Existing Workflow',
    description: 'Seamlessly integrate VoicePod with your CRM (Salesforce, HubSpot), calendar (Google/Outlook), WhatsApp, SMS, and Zapier to automate tasks.',
    icon: 'Cpu',
    image: pillarWorkflowSyncImg
  },
  {
    title: 'Personalized AI Voice Experience',
    description: 'Choose custom voices, accents, and languages to create AI agents that match your brand identity and connect empathetically with your callers.',
    icon: 'UserCheck',
    image: pillarPersonaAudioImg
  }
];

export const SOLUTIONS_PROJECTS = [
  {
    title: 'Customer Support Automation',
    tag: 'Support & Triage',
    description: 'Provide 24/7 first-call resolution for customer inquiries, billing questions, tracking updates, and account assistance with seamless escalation.',
    metrics: '99.8% Resolution',
    image: solSupportDeskImg
  },
  {
    title: 'AI Sales Development Assistant',
    tag: 'Outbound & Inbound Sales',
    description: 'Engage web inquiries within 60 seconds, pre-qualify prospects based on BANT criteria, and route high-value leads directly to your sales closers.',
    metrics: '60s Speed-to-Lead',
    image: solSalesSdrImg
  },
  {
    title: 'Smart AI Appointment Scheduler',
    tag: 'Calendar Automation',
    description: 'Check real-time calendar availability during live phone calls, lock in appointment dates, handle cancellations, and send automated SMS reminders.',
    metrics: 'Zero Double-Booking',
    image: solAppointmentCalImg
  },
  {
    title: 'AI-Powered Outreach Campaigns',
    tag: 'Proactive Engagement',
    description: 'Conduct compliant outbound notification campaigns, event registration confirmations, renewal reminders, and customer survey callbacks.',
    metrics: '4.8x Reach Rate',
    image: solOutreachWaveImg
  }
];

export const PRICING_DATA: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    subtitle: 'Perfect for small teams getting started with AI voice automation',
    price: '$149',
    period: '/Per Month',
    agents: '4 AI agents',
    minutes: '250 bundled minutes included',
    ctaText: 'Start 14-Day Free Trial',
    features: [
      '4 AI agents',
      '250 bundled minutes included',
      '14-day free trial',
      'Dashboard access',
      'Calendar integration (Google & Outlook)',
      'Batch campaigns',
      'WhatsApp/SMS connect',
      'Real-time booking',
      'Team member invites',
      'Multi-language support',
      'Zapier/Make/Webhook integrations',
      'Inbound & outbound calls',
      'Custom voices & accents'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    subtitle: 'Best for growing businesses with higher volume needs',
    price: '$449',
    period: '/Per Month',
    popular: true,
    agents: '8 AI agents',
    minutes: '800 bundled minutes included',
    ctaText: 'Get Started with Pro',
    features: [
      '8 AI agents',
      '800 bundled minutes included',
      '14-day free trial',
      'Dashboard access',
      'Calendar integration (Google & Outlook)',
      'Batch campaigns',
      'WhatsApp/SMS connect',
      'Real-time booking',
      'Team member invites',
      'Multi-language support',
      'Zapier/Make/Webhook integrations',
      'Inbound & outbound calls',
      'Custom voices & accents',
      'Priority 24/7 support'
    ]
  },
  {
    id: 'scale',
    name: 'Scale Plan',
    subtitle: 'Enterprise solution with flexible credit-based calling',
    price: '$999',
    period: '/Per Month',
    agents: '12 AI agents',
    minutes: 'Credit-based calling at $0.49/min',
    ctaText: 'Deploy Scale Plan',
    features: [
      '12 AI agents',
      '$999/month subscription fee',
      'Credit-based calling at $0.49/min',
      'Calls billed separately on top of subscription',
      '14-day free trial',
      'Dashboard access',
      'Calendar integration',
      'Batch campaigns',
      'WhatsApp/SMS connect',
      'Real-time booking',
      'Team member invites',
      'Multi-language support',
      'Zapier/Make/Webhook integrations',
      'Inbound & outbound calls',
      'Custom voices & accents',
      'Dedicated support',
      'Custom integrations'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Tailored solutions for large organizations and call centers',
    price: 'Custom',
    period: 'Pricing',
    agents: 'Unlimited AI agents',
    minutes: 'High-volume custom minute packages',
    ctaText: 'Contact Sales',
    features: [
      'Unlimited AI agents',
      'Unlimited users',
      'Custom voice training & cloning',
      'Dedicated infrastructure & SIP trunks',
      'White-glove onboarding',
      '24/7 dedicated support',
      'Custom integrations (Salesforce, Zendesk)',
      'Advanced analytics & latency monitoring',
      'Multi-language support (50+ languages)',
      'Custom voices & regional accents',
      'Inbound & outbound calls',
      'SLA guarantees (99.99%)',
      'Custom reporting & enterprise security',
      'Custom contracts & HIPAA/SOC-2 BAAs'
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Setting up VoicePod was incredibly easy. The compliance features and professional voice quality make it perfect for client intake and appointment scheduling.",
    author: "Emma R.",
    role: "Law Firm Director",
    country: "United Kingdom"
  },
  {
    quote: "VoicePod's AI agents handle our client inquiries 24/7 with complete compliance. We never miss a potential client again, and our team can focus on high-value activities.",
    author: "David T.",
    role: "CEO",
    country: "Australia"
  },
  {
    quote: "Student inquiries and course enrollment became seamless with VoicePod. The multi-language support helps us serve international students effectively.",
    author: "Lisa M.",
    role: "Founder",
    country: "Germany"
  },
  {
    quote: "We reduced operational costs by 70% while improving first-call resolution rates. VoicePod's AI agents work alongside our human agents perfectly.",
    author: "James K.",
    role: "Operations Director",
    country: "Singapore"
  },
  {
    quote: "The speed-to-lead outbound calls transformed our conversion rates. The moment a customer signs up on our website, VoicePod initiates a warm conversation.",
    author: "Sarah J.",
    role: "E-Commerce Founder",
    country: "United States"
  },
  {
    quote: "Our front desk staff used to be swamped by appointment calls. VoicePod took over 80% of our scheduling volume with zero double bookings.",
    author: "Michael C.",
    role: "Business Owner",
    country: "Canada"
  }
];

export const FAQS_DATA: FaqEntry[] = [
  {
    question: 'What is VoicePod and what can it do?',
    answer: 'VoicePod is an AI voice automation platform that enables businesses to create, customize, and deploy AI voice assistants for automating inbound and outbound calls, customer support, appointment scheduling, lead qualification, and more. Our AI agents can handle customer interactions 24/7, schedule appointments, send follow-ups via email/SMS/WhatsApp, and integrate with your existing CRM.'
  },
  {
    question: 'How do I get started with VoicePod?',
    answer: 'Getting started is simple: 1) Sign up for your free 14-day trial, 2) Define your AI agent’s purpose and configure call flows, 3) Upload your knowledge base (FAQs, scripts, training materials), 4) Connect your phone numbers and integrate with your CRM, 5) Test thoroughly, then launch and monitor performance. Setup takes just minutes!'
  },
  {
    question: 'What integrations does VoicePod support?',
    answer: 'VoicePod integrates with 50+ popular business tools including CRMs (Salesforce, HubSpot, Pipedrive), communication platforms (WhatsApp, SMS), calendar systems (Google Calendar, Calendly), Zapier, Make.com, and custom Webhooks for automated workflows.'
  },
  {
    question: 'What industries can benefit from VoicePod?',
    answer: 'VoicePod is designed for Real Estate (lead qualification, property inquiries), E-commerce (order status, support), Call Centers (overflow handling, 24/7 support), Education & Coaching (enrollment inquiries), Financial Services, and Law Firms (client intake).'
  },
  {
    question: 'What pricing plans do you offer?',
    answer: 'We offer 4 plans: Starter ($149/mo, 4 agents, 250 bundled mins), Pro ($449/mo, 8 agents, 800 bundled mins), Scale ($999/mo + $0.49/min usage, 12 agents), and Enterprise (custom pricing). Starter, Pro and Scale include a 14-day free trial.'
  },
  {
    question: 'Do you support multiple languages and accents?',
    answer: 'Yes! VoicePod supports 50+ languages and regional accents. Our AI adapts to different cultural dialects and terminology, making it ideal for international and diverse markets.'
  },
  {
    question: 'Can I customize the AI voice and personality?',
    answer: 'Absolutely! You can choose from dozens of ultra-realistic neural voices, adjust tone, speaking speed, pitch, empathy levels, and train the assistant with custom prompt rules and industry-specific vocabulary.'
  },
  {
    question: 'Is my data secure and compliant?',
    answer: 'We take data protection seriously. Please contact us at support@voicepod.ai for details of our security and data-protection measures.'
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'ai-revolutionising-service',
    title: 'How AI Voice Assistants Are Revolutionising Customer Service',
    excerpt: 'Discover how modern enterprises replace robotic IVR phone trees with conversational AI agents to achieve sub-300ms latency, zero hold queues, and 24/7 first-contact resolution.',
    date: 'March 2026',
    category: 'Customer Experience',
    readTime: '6 min read',
    image: blogIvrEvolutionImg
  },
  {
    id: 'multichannel-magic',
    title: 'Multi-Channel Magic: Voice + SMS + WhatsApp Integration',
    excerpt: 'Learn how combining VoicePod AI voice assistants with automated SMS and WhatsApp messaging creates unified customer journeys and boosts retention.',
    date: 'March 2026',
    category: 'Omnichannel Strategy',
    readTime: '5 min read',
    image: blogOmnichannelImg
  },
  {
    id: 'real-estate-blueprint',
    title: 'Real Estate Lead Conversion Blueprint: Speed to Lead',
    excerpt: 'How top brokerages use autonomous 60-second voice follow-up to pre-qualify Zillow leads and secure private property tours before competitors.',
    date: 'February 2026',
    category: 'Real Estate Growth',
    readTime: '4 min read',
    image: blogRealEstateImg
  },
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Customer Support Automation Kit',
    excerpt: 'Slash support ticket queues by resolving return requests, tracking inquiries, and order modifications directly over phone and messaging.',
    date: 'January 2026',
    category: 'E-Commerce Playbook',
    readTime: '7 min read',
    image: blogEcommerceImg
  }
];

export const TUTORIALS_DATA: TutorialItem[] = [
  {
    id: 'getting-started',
    title: 'Welcome to VoicePod: Your Complete Getting Started Guide',
    duration: '8 mins',
    level: 'Beginner',
    description: 'Learn the fundamentals of setting up your account, creating your first voice assistant, and testing inbound phone handling.',
    stepsCount: 5,
    category: 'Foundations'
  },
  {
    id: 'account-profile',
    title: 'Account Setup & Profile Management',
    duration: '6 mins',
    level: 'Beginner',
    description: 'Configure organization permissions, team seats, phone numbers, and notification settings for your account.',
    stepsCount: 4,
    category: 'Administration'
  },
  {
    id: 'dashboard-navigation',
    title: 'Navigating the VoicePod Dashboard',
    duration: '10 mins',
    level: 'Intermediate',
    description: 'Master live call monitoring, analytics graphs, latency metrics, transcript exports, and caller sentiment charts.',
    stepsCount: 6,
    category: 'Analytics'
  },
  {
    id: 'crm-workflow',
    title: 'Configuring Inbound & Outbound Workflows with CRM',
    duration: '12 mins',
    level: 'Advanced',
    description: 'Connect HubSpot, Salesforce, or webhooks to trigger outbound speed-to-lead calls and sync meeting calendar slots.',
    stepsCount: 7,
    category: 'Integrations'
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'playbook',
    title: 'Complete AI Voice Implementation Playbook',
    type: 'Comprehensive Guide',
    description: 'Step-by-step framework to transition from human receptionists to hybrid AI call centers without business interruption.',
    format: 'Executive Guide',
    tag: 'Implementation'
  },
  {
    id: 'roi-template',
    title: 'ROI Calculator & Business Case Template',
    type: 'Financial Model',
    description: 'Spreadsheet template to calculate payroll savings, call capture rates, and projected revenue upside.',
    format: 'Excel & Interactive Model',
    tag: 'Financial Planning'
  },
  {
    id: 'real-estate-case',
    title: 'Real Estate Brokerage: 400% Lead Capture',
    type: 'Case Study',
    description: 'How a multi-office real estate firm used VoicePod speed-to-lead outbound calls to capture $42K/mo in property sales commissions.',
    format: 'Executive Case Brief',
    tag: 'Case Study'
  },
  {
    id: 'saas-case',
    title: 'SaaS Company USA: 250% Lead Generation Increase',
    type: 'Case Study',
    description: 'How a cloud software firm used VoicePod speed-to-lead outbound calls to 2.5x demo bookings.',
    format: 'Growth Report',
    tag: 'Case Study'
  },
  {
    id: 'industry-report',
    title: 'AI Voice Industry Report 2024–2026',
    type: 'Industry Research',
    description: 'Key benchmarks on conversational latency, customer satisfaction, and call center adoption trends.',
    format: 'Research Whitepaper',
    tag: 'Research'
  },
  {
    id: 'crm-scripts',
    title: 'CRM Integration Scripts & API Reference',
    type: 'Developer Docs',
    description: 'Webhook payloads, REST API endpoints, and Zapier recipes for seamless bi-directional database synchronization.',
    format: 'API Reference & Code',
    tag: 'Technical'
  }
];

export const OFFICE_INFO = {
  name: 'Tech Future Solutions Ltd',
  companyNumber: '16669292',
  address: '5 Brayford Square, London. E1 0SG',
  mapUrl: 'https://maps.app.goo.gl/3iRTpQxg8PMXyMG9A',
  email: 'support@voicepod.ai',
  legalEntity: 'Tech Future Solutions Ltd, registered in England and Wales, company number 16669292, registered office 5 Brayford Square, London. E1 0SG',
  copyright: '© 2026 VOICEPOD. All rights reserved.'
};
