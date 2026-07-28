import {
  BarChart3,
  ClipboardList,
  Filter,
  HelpCircle,
  Layers,
  PieChart,
  Search,
  Smile,
  TrendingDown,
  Users,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function SentimentAnalysisUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Sentiment Analysis"
      headline="Know Exactly How Customers Feel, Across Every Conversation"
      subheadline="Analyze tone and emotion in 100% of your calls and chats — not a sampled slice — so you catch a dip in satisfaction weeks before it shows up in a survey."
      trustLine="Built for teams tired of guessing from a 5% survey response rate"
      problemHeading="Why Sentiment Stays Invisible Until It's a Problem"
      problems={[
        {
          icon: <Search className="h-5 w-5" />,
          title: "Sentiment Gets Buried in Transcripts Nobody Reads",
          body: "Every conversation carries emotional signal, but no team has time to read thousands of transcripts looking for it.",
        },
        {
          icon: <ClipboardList className="h-5 w-5" />,
          title: "Surveys Only Capture a Sliver of Conversations",
          body: "Response rates hover in the single digits, so the loudest opinions dominate while everyone else stays silent.",
        },
        {
          icon: <HelpCircle className="h-5 w-5" />,
          title: "Teams Know Sentiment Dropped, Not Why",
          body: "A quarterly NPS dip tells you something's wrong without pointing at which product, queue, or change caused it.",
        },
      ]}
      whyHeading="Sentiment Analysis Built on the Full Picture"
      featureBlocks={[
        {
          eyebrow: "Full-Coverage Analysis",
          title: "Every Conversation, Not a Sample",
          body: "Tone is scored on 100% of interactions, so quiet dissatisfaction shows up long before it turns into churn.",
          checks: [
            "Analyzes every call, chat, and email automatically",
            "No survey required to measure sentiment",
            "Runs continuously, not on a reporting cycle",
          ],
        },
        {
          eyebrow: "Root-Cause Tagging",
          title: "Know What's Actually Driving the Number",
          body: "Sentiment scores come attached to the topic, product, or moment that caused them.",
          checks: [
            "Tags the driver behind every sentiment shift",
            "Breaks scores down by topic and product area",
            "Surfaces the exact conversations behind a trend",
          ],
        },
        {
          eyebrow: "Trend-Aware",
          title: "Spots Drift Before It Shows Up in NPS",
          body: "Sentiment is tracked over time so a slow decline gets flagged while there's still time to act on it.",
          checks: [
            "Alerts on week-over-week sentiment drift",
            "Compares sentiment across teams and queues",
            "Flags emerging themes before they scale",
          ],
        },
      ]}
      useCasesHeading="Where Sentiment Analysis Changes What Teams See"
      useCases={[
        { icon: <Smile className="h-4 w-4" />, tag: "Scoring", title: "Post-Call Sentiment Scoring", body: "Score the emotional tone of every conversation the moment it ends." },
        { icon: <PieChart className="h-4 w-4" />, tag: "Breakdown", title: "Topic-Level Sentiment Breakdown", body: "See exactly which products or issues are dragging satisfaction down." },
        { icon: <TrendingDown className="h-4 w-4" />, tag: "Alerts", title: "Weekly Trend Alerts", body: "Get notified the moment sentiment starts drifting in a queue or team." },
        { icon: <Search className="h-4 w-4" />, tag: "Market", title: "Competitor & Pricing Mentions", body: "Track how often customers bring up competitors or price objections unprompted." },
        { icon: <BarChart3 className="h-4 w-4" />, tag: "Rollups", title: "Survey-Free NPS-Style Rollups", body: "Get a satisfaction signal without waiting on customers to fill out a form." },
        { icon: <Users className="h-4 w-4" />, tag: "Comparison", title: "Team & Queue Comparison", body: "Compare sentiment across teams fairly, using the same conversations they actually handle." },
      ]}
      statsHeading="Numbers That Replace Guesswork"
      stats={[
        { value: "100%", label: "Conversations analyzed, not sampled" },
        { value: "4x", label: "More signal than typical survey response" },
        { value: "-70%", label: "Time to detect a sentiment dip" },
        { value: "0", label: "Extra surveys required" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <BarChart3 className="h-4 w-4" />, title: "Agent Performance", tagline: "How your team is actually doing." },
        { icon: <Layers className="h-4 w-4" />, title: "Voice Of Customer", tagline: "What all this sentiment is about." },
      ]}
      ctaHeading="Ready to Know How Customers Really Feel?"
    />
  );
}
