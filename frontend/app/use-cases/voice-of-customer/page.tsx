import {
  BarChart3,
  CheckCircle2,
  Gauge,
  Lightbulb,
  MessageSquareText,
  Repeat,
  Search,
  Share2,
  Split,
  Tag,
  TrendingDown,
  UserMinus,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  FloatingSubCard,
  PanelHeader,
  StatTile,
  ChecklistItem,
  ScoreBadge,
} from "@/components/marketing/panels/HeroVisuals";

export default function VoiceOfCustomerUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Voice Of Customer"
      headline="Everything Your Customers Are Telling You, Finally in One Place"
      subheadline="Turn every call, chat, and email into structured product and business signal — so decisions get made on what customers actually said, not on a handful of anecdotes from last week's support queue."
      trustLine="Built for product and CX teams who are done relying on anecdotes"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Voice of Customer" status="This month" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <StatTile value="+42" label="NPS" />
              <StatTile value="4.6" label="CSAT" />
              <StatTile value="18" label="Themes tracked" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <ChecklistItem label="Top theme: pricing clarity" />
              <ChecklistItem label="Rising theme: mobile app requests" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ScoreBadge value="3x" label="More signal than tickets alone" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Customer Feedback Never Reaches the People Who Need It"
      problems={[
        {
          icon: <Split className="h-5 w-5" />,
          title: "Feedback Is Scattered Across Every Channel",
          body: "The same complaint shows up in calls, chats, and emails, but nothing connects them into a single, countable signal.",
        },
        {
          icon: <MessageSquareText className="h-5 w-5" />,
          title: "Product Teams Rely on Anecdotes From Support",
          body: "A roadmap decision gets made because someone remembers hearing a complaint a few times, not because anyone actually counted it.",
        },
        {
          icon: <TrendingDown className="h-5 w-5" />,
          title: "Patterns Surface After They've Already Cost You Customers",
          body: "By the time a recurring issue reaches product or leadership, it's already been driving quiet churn for months.",
        },
      ]}
      whyHeading="A Feedback Loop That Actually Closes"
      featureBlocks={[
        {
          eyebrow: "Cross-Channel Extraction",
          title: "Every Theme, From Every Conversation",
          body: "Requests, complaints, and objections are pulled out automatically, regardless of which channel they came in on.",
          checks: [
            "Extracts themes from voice, chat, and email alike",
            "Groups the same issue together across channels",
            "Counts real frequency, not gut feel",
          ],
        },
        {
          eyebrow: "Routed to the Right Team",
          title: "Insights Land With Product, Not Just a Dashboard",
          body: "Findings get delivered to the team that can actually act on them, framed in terms they use.",
          checks: [
            "Sends product signals directly to product teams",
            "Sends pricing objections to whoever owns pricing",
            "No dashboard nobody opens after the first week",
          ],
        },
        {
          eyebrow: "Frequency & Urgency Tracking",
          title: "Know What's Actually Worth Building",
          body: "Every theme comes with how often it's mentioned and how urgently customers describe it.",
          checks: [
            "Ranks themes by frequency and urgency together",
            "Tracks whether a theme is growing or fading",
            "Links themes back to the accounts raising them",
          ],
        },
      ]}
      useCasesHeading="Where Voice Of Customer Changes Roadmaps"
      useCases={[
        { icon: <Lightbulb className="h-4 w-4" />, tag: "Product", title: "Feature Request Tracking", body: "See exactly which requests keep coming up, and from how many distinct customers." },
        { icon: <Search className="h-4 w-4" />, tag: "Market", title: "Competitor Mention Monitoring", body: "Know when and why customers bring up alternatives, in their own words." },
        { icon: <Repeat className="h-4 w-4" />, tag: "Support", title: "Recurring Complaint Detection", body: "Catch the same complaint building across dozens of conversations before it's a crisis." },
        { icon: <Tag className="h-4 w-4" />, tag: "Pricing", title: "Pricing Objection Tracking", body: "Quantify how often price comes up as a blocker, and in which segments." },
        { icon: <UserMinus className="h-4 w-4" />, tag: "Retention", title: "Churn-Reason Analysis", body: "Understand the real reasons customers leave, straight from their own conversations." },
        { icon: <CheckCircle2 className="h-4 w-4" />, tag: "Loop", title: "Closing the Loop With Customers", body: "Follow up with customers once their feedback actually ships." },
      ]}
      statsHeading="Numbers That Show Up on the Roadmap"
      stats={[
        { value: "100%", label: "Conversations mined for insight" },
        { value: "3x", label: "More product signal than support tickets alone" },
        { value: "-60%", label: "Time from feedback to roadmap decision" },
        { value: "0", label: "Anecdote-driven prioritization calls" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Gauge className="h-4 w-4" />, title: "Sentiment Analysis", tagline: "The emotional signal behind the words." },
        { icon: <Share2 className="h-4 w-4" />, title: "Agent Performance", tagline: "How well those conversations were handled." },
      ]}
      ctaHeading="Ready to Build on What Customers Actually Say?"
    />
  );
}
