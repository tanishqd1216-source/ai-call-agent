export type CategoryItem = string | { name: string; href: string };
export type Category = { name: string; description: string; items: CategoryItem[] };

const AGENTS_CATEGORIES: Category[] = [
  {
    name: "Conversational AI Agent",
    description:
      "Carry conversations across voice, chat, social media and email — while the agent follows the right steps, updates your systems, and completes end-to-end workflows.",
    items: [
      { name: "Voice AI Agent", href: "/agents/voice-ai-agent" },
      "WhatsApp AI Agent",
      "Email AI Agent",
      "Chat AI Agent",
      "Social Media AI Agent",
    ],
  },
  {
    name: "Analyzer AI Agent",
    description:
      "Turn calls, chats, and emails into clear, data-backed actions to win more deals, improve coaching, and scale performance.",
    items: ["Supervisor AI Agent", "Insights AI Agents"],
  },
  {
    name: "Copilot AI Agent",
    description:
      "Assist agents with real-time intelligence, smarter rebuttals and next best actions — so they can deliver faster, more consistent outcomes at scale.",
    items: ["Pre-Conversation", "Live-Conversation", "Post-Conversation"],
  },
];

const CAPABILITIES_CATEGORIES: Category[] = [
  {
    name: "Intelligence & Insights",
    description:
      "Turn every interaction into structured data — reporting, customer history, and long-term memory the agent can act on.",
    items: [
      { name: "Reporting & Analytics", href: "/capabilities/reporting-analytics" },
      { name: "Customer 360", href: "/capabilities/customer-360" },
      { name: "Agent Memory", href: "/capabilities/agent-memory" },
    ],
  },
  {
    name: "Build & Automate",
    description:
      "Design, connect, and test your AI agents — from prompts and actions to full simulation before going live.",
    items: [
      { name: "AI Agent Studio", href: "/capabilities/ai-agent-studio" },
      { name: "Actions Framework", href: "/capabilities/actions-framework" },
      { name: "Knowledge Base", href: "/capabilities/knowledge-base" },
      { name: "AI Agent Simulator", href: "/capabilities/ai-agent-simulator" },
    ],
  },
  {
    name: "Reach & Scale",
    description: "Run campaigns and support conversations in any language, across every channel your customers use.",
    items: [
      { name: "Campaigns", href: "/capabilities/campaigns" },
      { name: "Multilingual", href: "/capabilities/multilingual" },
      { name: "Omni-Channel Agents", href: "/capabilities/omni-channel-agents" },
    ],
  },
];

const INDUSTRIES_CATEGORIES: Category[] = [
  {
    name: "Consumer & Retail",
    description: "High-volume, high-expectation buyers — agents that handle browsing, bookings, and after-sales in real time.",
    items: [
      { name: "Retail", href: "/industries/retail" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Real Estate", href: "/industries/real-estate" },
    ],
  },
  {
    name: "Financial Services",
    description: "Secure, compliant conversations for accounts, claims, and advisory — with a full audit trail.",
    items: [
      { name: "Banking and Finance", href: "/industries/banking-and-finance" },
      { name: "Insurance", href: "/industries/insurance" },
    ],
  },
  {
    name: "Services & Care",
    description: "Sensitive, high-trust interactions in healthcare and education, handled with the right tone every time.",
    items: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "EdTech", href: "/industries/edtech" },
    ],
  },
];

const USE_CASES_CATEGORIES: Category[] = [
  {
    name: "Sales & Growth",
    description: "Qualify, convert, and onboard customers faster with agents that never drop a lead.",
    items: [
      { name: "Sales", href: "/use-cases/sales" },
      { name: "Lead Scoring", href: "/use-cases/lead-scoring" },
      { name: "Onboarding", href: "/use-cases/onboarding" },
    ],
  },
  {
    name: "Support & Service",
    description: "Handle incoming requests, catch issues before they escalate, and follow up on what's owed.",
    items: [
      { name: "Inbound", href: "/use-cases/inbound" },
      { name: "Escalation Monitoring", href: "/use-cases/escalation-monitoring" },
      { name: "Collections", href: "/use-cases/collections" },
    ],
  },
  {
    name: "Quality & Insight",
    description: "Understand how every conversation went — sentiment, performance, and the voice of your customer.",
    items: [
      { name: "Sentiment Analysis", href: "/use-cases/sentiment-analysis" },
      { name: "Agent Performance", href: "/use-cases/agent-performance" },
      { name: "Voice Of Customer", href: "/use-cases/voice-of-customer" },
    ],
  },
];

const DEVELOPERS_CATEGORIES: Category[] = [
  {
    name: "Build Tools",
    description: "Manage agents, deployments, and configuration directly from your terminal.",
    items: [{ name: "Command Line Interface", href: "/developers/command-line-interface" }],
  },
  {
    name: "Voice Infrastructure",
    description: "The speech engines powering every voice interaction — bring your own or use ours.",
    items: [
      { name: "Speech To Text", href: "/developers/speech-to-text" },
      { name: "Text To Speech", href: "/developers/text-to-speech" },
    ],
  },
];

const COMPANY_CATEGORIES: Category[] = [
  {
    name: "Company",
    description: "Who we are, and how to reach us.",
    items: [{ name: "About Us", href: "/company/about-us" }],
  },
];

export type MarketingMenu = { label: string; categories: Category[] };

export const MARKETING_MENUS: MarketingMenu[] = [
  { label: "Agents", categories: AGENTS_CATEGORIES },
  { label: "Capabilities", categories: CAPABILITIES_CATEGORIES },
  { label: "Industries", categories: INDUSTRIES_CATEGORIES },
  { label: "Use Cases", categories: USE_CASES_CATEGORIES },
  { label: "Developers", categories: DEVELOPERS_CATEGORIES },
  { label: "Company", categories: COMPANY_CATEGORIES },
];
