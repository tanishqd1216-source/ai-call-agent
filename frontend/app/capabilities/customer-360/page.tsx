import {
  BarChart3,
  Brain,
  Database,
  Handshake,
  HelpCircle,
  LayoutGrid,
  PhoneIncoming,
  Repeat,
  Shuffle,
  ShieldAlert,
  Star,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  FloatingSubCard,
  HeroPanelFrame,
  PanelHeader,
  PanelShell,
  StatTile,
} from "@/components/marketing/panels/HeroVisuals";

export default function Customer360CapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Customer 360"
      headline="One Customer Record, Not Five Different Systems"
      subheadline="Every past conversation, order, and preference lives in a single profile the agent can pull up instantly — so no customer repeats themselves twice."
      trustLine="Built for teams tired of stitching together CRM, support, and billing by hand"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Customer Profile" status="Unified record" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatTile value="$4,280" label="Lifetime value" />
              <StatTile value="2 days ago" label="Last contact" />
              <StatTile value="WhatsApp" label="Preferred channel" />
              <StatTile value="Positive" label="Recent sentiment" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-left">
            <div className="text-[10px] text-muted-foreground">Systems merged</div>
            <div className="text-sm font-bold text-primary">5 → 1</div>
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Customer Context Keeps Slipping Through the Cracks"
      problems={[
        {
          icon: <LayoutGrid className="h-5 w-5" />,
          title: "Customer History Lives in Five Different Tools",
          body: "CRM, billing, support tickets, and call logs all hold a piece of the picture, and nothing connects them.",
        },
        {
          icon: <Repeat className="h-5 w-5" />,
          title: "Customers Repeat Themselves Every Time",
          body: "Without shared history, every new conversation starts from zero, no matter how many times they've called before.",
        },
        {
          icon: <HelpCircle className="h-5 w-5" />,
          title: "Reps Guess at Context Mid-Call",
          body: "Without a full picture, a rep can't tell if this is a first-time question or the fifth time this month.",
        },
      ]}
      whyHeading="A Single Record That Follows the Customer Everywhere"
      featureBlocks={[
        {
          eyebrow: "Unified Profile",
          title: "Every System, One Record",
          body: "Order history, past conversations, and preferences merge into a single live profile per customer.",
          checks: [
            "Pulls from CRM, billing, and support in one view",
            "Updates automatically as new conversations happen",
            "No manual data entry to keep it current",
          ],
        },
        {
          eyebrow: "Context on Every Call",
          title: "The Agent Already Knows Who's Calling",
          body: "Before a single word is exchanged, the agent has the customer's full history in hand.",
          checks: [
            "Surfaces relevant history before the call starts",
            "Flags VIP or at-risk accounts automatically",
            "Carries context across every channel",
          ],
        },
        {
          eyebrow: "Privacy-Aware by Design",
          title: "Full Context Without Overexposure",
          body: "Sensitive fields stay protected while still giving the agent what it needs to help.",
          checks: [
            "Role-based access to sensitive fields",
            "Full audit trail of who accessed what",
            "Compliant with your existing data policies",
          ],
        },
      ]}
      useCasesHeading="Where One Record Changes the Conversation"
      useCases={[
        { icon: <PhoneIncoming className="h-4 w-4" />, tag: "Support", title: "Instant Context on Inbound Calls", body: "Skip the ten-question intake because the agent already knows the account." },
        { icon: <Handshake className="h-4 w-4" />, tag: "Sales", title: "Full Deal History for Reps", body: "See every prior touchpoint before a rep picks up the next call." },
        { icon: <ShieldAlert className="h-4 w-4" />, tag: "Retention", title: "At-Risk Account Flagging", body: "Surface accounts with a rough recent history automatically." },
        { icon: <Star className="h-4 w-4" />, tag: "VIP", title: "VIP Recognition", body: "Recognize high-value customers instantly, on any channel." },
        { icon: <Shuffle className="h-4 w-4" />, tag: "Cross-Channel", title: "Channel-to-Channel Continuity", body: "Pick a conversation back up on a different channel without losing context." },
        { icon: <Database className="h-4 w-4" />, tag: "Data", title: "Single Customer Data Layer", body: "Give every team the same underlying customer record." },
      ]}
      statsHeading="Numbers That Show Up in Every Conversation"
      stats={[
        { value: "1", label: "Unified customer record instead of five" },
        { value: "0", label: "Times customers repeat themselves" },
        { value: "100%", label: "History carried across every channel" },
        { value: "-40%", label: "Average handling time with full context" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <BarChart3 className="h-4 w-4" />, title: "Reporting & Analytics", tagline: "What the record adds up to." },
        { icon: <Brain className="h-4 w-4" />, title: "Agent Memory", tagline: "How context carries forward." },
      ]}
      ctaHeading="Ready to Stop Stitching Together Five Systems?"
    />
  );
}
