import {
  Compass,
  Globe,
  Handshake,
  Megaphone,
  Shuffle,
  ShieldCheck,
  Smartphone,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function MultilingualCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Multilingual"
      headline="The Same Quality Conversation, in Whatever Language the Customer Speaks"
      subheadline="Detect a customer's language automatically and respond fluently — without hiring a separate team, building a separate flow, or lowering quality for anyone."
      trustLine="Built for teams who serve customers in more languages than they have native-speaking reps for"
      problemHeading="Why Language Coverage Usually Comes at a Cost"
      problems={[
        {
          icon: <Users className="h-5 w-5" />,
          title: "Language Support Usually Means Hiring More Reps",
          body: "Covering a new language traditionally means a whole new hiring and training cycle.",
        },
        {
          icon: <TrendingDown className="h-5 w-5" />,
          title: "Quality Drops Outside the Primary Language",
          body: "Secondary-language support is often an afterthought, with slower responses and rougher translations.",
        },
        {
          icon: <Shuffle className="h-5 w-5" />,
          title: "Switching Languages Mid-Call Breaks the Flow",
          body: "A customer who switches languages partway through often has to start the conversation over.",
        },
      ]}
      whyHeading="Fluent in Every Language You Actually Need"
      featureBlocks={[
        {
          eyebrow: "Automatic Detection",
          title: "Knows the Language Before You Do",
          body: "The agent detects the customer's language from the first words and responds natively, no menu required.",
          checks: [
            "Detects language automatically, no menu selection",
            "Responds fluently from the very first turn",
            "Switches mid-conversation without losing context",
          ],
        },
        {
          eyebrow: "Consistent Quality Everywhere",
          title: "No 'Primary' and 'Secondary' Languages",
          body: "Every supported language gets the same conversation quality and the same capabilities.",
          checks: [
            "Same feature set across every language",
            "No quality gap for non-primary languages",
            "Native-quality tone, not literal translation",
          ],
        },
        {
          eyebrow: "Unified Reporting",
          title: "One View Across Every Language",
          body: "Analytics and QA scoring roll up across languages into one consistent view.",
          checks: [
            "Reporting unified across all languages",
            "QA scoring applies consistently everywhere",
            "No separate team needed to manage each language",
          ],
        },
      ]}
      useCasesHeading="Where Multilingual Support Removes a Bottleneck"
      useCases={[
        { icon: <Globe className="h-4 w-4" />, tag: "Global Support", title: "Multilingual Customer Support", body: "Support customers natively without routing by language to different teams." },
        { icon: <Compass className="h-4 w-4" />, tag: "Onboarding", title: "Localized Onboarding", body: "Guide new customers through setup in their preferred language from day one." },
        { icon: <Handshake className="h-4 w-4" />, tag: "Sales", title: "Multilingual Sales Outreach", body: "Run outbound campaigns across regions without translating scripts by hand." },
        { icon: <Shuffle className="h-4 w-4" />, tag: "Switching", title: "Mid-Conversation Language Switching", body: "Let bilingual customers switch languages naturally without restarting." },
        { icon: <TrendingUp className="h-4 w-4" />, tag: "Expansion", title: "New-Market Expansion", body: "Enter a new region without a parallel hiring effort for local-language support." },
        { icon: <ShieldCheck className="h-4 w-4" />, tag: "Compliance", title: "Localized Compliance Language", body: "Deliver required disclosures accurately in the customer's own language." },
      ]}
      statsHeading="Numbers That Show Up Across Every Market"
      stats={[
        { value: "Auto", label: "Language detection, no menu required" },
        { value: "0", label: "Quality gap between supported languages" },
        { value: "-100%", label: "Need for a separate per-language team" },
        { value: "Instant", label: "Mid-conversation language switching" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Smartphone className="h-4 w-4" />, title: "Omni-Channel Agents", tagline: "Every language, every channel." },
        { icon: <Megaphone className="h-4 w-4" />, title: "Campaigns", tagline: "Reach every market at once." },
      ]}
      ctaHeading="Ready to Serve Every Market in Its Own Language?"
    />
  );
}
