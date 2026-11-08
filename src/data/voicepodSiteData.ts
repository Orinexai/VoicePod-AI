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
  // Official VoicePod 3D AI Robot avatar from user attachment
  hero: '/assets/aistudio/image_8e75406e.png',
  // High-fidelity futuristic 3D humanoid robots & cybernetic artwork
  architecture: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
  support: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
  concierge: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=900&q=80',
  newsletter: '/assets/aistudio/image_8e75406e.png',
  playbook: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
  onboarding: '/assets/aistudio/image_8e75406e.png',
  avatarFallback: '/assets/aistudio/image_8e75406e.png',
  bannerFallback: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
};

export const CORE_FEATURES = [
  {
    id: 'inbound-outbound',
    title: 'Inbound & Outbound AI Calling',
    tag: 'Calling Engine',
    description: 'Never miss an opportunity with AI voice agents that manage both incoming and outgoing calls. Deliver instant responses, engage prospects, follow up on leads, and provide 24/7 call center support.',
    bullets: ['Qualify leads before handoff', 'Run automated outbound campaigns', 'Answer inbound calls 24/7 in zero rings'],
    icon: 'PhoneCall',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'custom-voices',
    title: 'Custom AI Voices',
    tag: 'Audio Quality',
    description: 'Create a unique voice experience that reflects your brand. Choose from a wide range of realistic AI voices or customize speech inflection, pacing, pitch, and conversational tone.',
    bullets: ['Adjustable tone and speaking style', 'Brand-specific voice selection', 'Natural human-like cadence and breathing'],
    icon: 'Mic',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'multiple-accents',
    title: 'Multiple Regional Accents',
    tag: 'Localization',
    description: 'Build stronger customer connections with AI voices that speak in familiar regional accents. Deliver conversations that feel natural, trustworthy, and culturally tuned.',
    bullets: ['Better engagement & trust', 'Localized customer experience', 'Regional English, US, UK, and Australian accents'],
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'multilingual-support',
    title: 'Multi-Language AI Conversations',
    tag: 'Global Scale',
    description: 'Expand your business globally with AI voice agents that communicate fluently in multiple languages, ensuring every customer feels heard regardless of geography.',
    bullets: ['Natural multilingual conversations', 'Automatic caller language detection', 'Support 50+ international languages'],
    icon: 'Languages',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  }
];

export const PILLAR_CAPABILITIES = [
  {
    title: 'Human-Like AI Conversations',
    description: 'Deploy intelligent AI agents that understand customers, answer questions, handle interruptions, and maintain conversations naturally like a real human representative.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Always Available, Always Responsive',
    description: 'Never miss a customer opportunity with AI agents that answer calls, follow up with leads, and provide support around the clock 24/7/365 without hold music.',
    icon: 'Clock',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Connect Your Existing Workflow',
    description: 'Seamlessly integrate VoicePod with your CRM (Salesforce, HubSpot), calendar (Google/Outlook), WhatsApp, SMS, and Zapier to automate tasks.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Personalized AI Voice Experience',
    description: 'Choose custom voices, accents, and languages to create AI agents that match your brand identity and connect empathetically with your callers.',
    icon: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  }
];

export const SOLUTIONS_PROJECTS = [
  {
    title: 'Customer Support Automation',
    tag: 'Support & Triage',
    description: 'Provide 24/7 first-call resolution for customer inquiries, billing questions, tracking updates, and account assistance with seamless escalation.',
    metrics: '99.8% Resolution',
    image: 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI Sales Development Assistant',
    tag: 'Outbound & Inbound Sales',
    description: 'Engage web inquiries within 60 seconds, pre-qualify prospects based on BANT criteria, and route high-value leads directly to your sales closers.',
    metrics: '60s Speed-to-Lead',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Smart AI Appointment Scheduler',
    tag: 'Calendar Automation',
    description: 'Check real-time calendar availability during live phone calls, lock in appointment dates, handle cancellations, and send automated SMS reminders.',
    metrics: 'Zero Double-Booking',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI-Powered Outreach Campaigns',
    tag: 'Proactive Engagement',
    description: 'Conduct compliant outbound notification campaigns, event registration confirmations, renewal reminders, and customer survey callbacks.',
    metrics: '4.8x Reach Rate',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'multichannel-magic',
    title: 'Multi-Channel Magic: Voice + SMS + WhatsApp Integration',
    excerpt: 'Learn how combining VoicePod AI voice assistants with automated SMS and WhatsApp messaging creates unified customer journeys and boosts retention.',
    date: 'March 2026',
    category: 'Omnichannel Strategy',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'real-estate-blueprint',
    title: 'Real Estate Lead Conversion Blueprint: Speed to Lead',
    excerpt: 'How top brokerages use autonomous 60-second voice follow-up to pre-qualify Zillow leads and secure private property tours before competitors.',
    date: 'February 2026',
    category: 'Real Estate Growth',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Customer Support Automation Kit',
    excerpt: 'Slash support ticket queues by resolving return requests, tracking inquiries, and order modifications directly over phone and messaging.',
    date: 'January 2026',
    category: 'E-Commerce Playbook',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80'
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
  address: 'London, United Kingdom',
  email: 'support@voicepod.ai',
  legalEntity: 'Tech Future Solutions Ltd, registered in England and Wales, company number [NUMBER], registered office [ADDRESS]',
  copyright: '© 2026 VOICEPOD. All rights reserved.'
};
