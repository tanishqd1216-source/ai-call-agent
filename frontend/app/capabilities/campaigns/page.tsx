import {
  Bell,
  ClipboardList,
  Globe,
  Hourglass,
  Megaphone,
  MessagesSquare,
  RotateCcw,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function CampaignsCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Campaigns"
      headline="Reach Thousands of Customers at Once, Each Conversation Still Personal"
      subheadline="Launch outbound voice, SMS, and chat campaigns at scale — reminders, promotions, surveys — without every conversation sounding like the same broadcast message."
      trustLine="Built for teams who need reach without sounding like a robocall"
      problemHeading="Why Outbound at Scale Usually Feels Impersonal"
      problems={[
        {
          icon: <MessagesSquare className="h-5 w-5" />,
          title: "Outbound at Scale Usually Means Generic",
          body: "Mass outreach tools blast the same script to everyone, ignoring who's actually on the other end.",
        },
        {
          icon: <Hourglass className="h-5 w-5" />,
          title: "Campaign Results Arrive Too Late to Adjust",
          body: "By the time a campaign's results are reported, it's already finished running.",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Manual Outbound Doesn't Scale",
          body: "A team can only make so many outbound calls a day before scale becomes the actual bottleneck.",
        },
      ]}
      whyHeading="Outbound That Scales Without Sounding Like a Broadcast"
      featureBlocks={[
        {
          eyebrow: "Personalized at Scale",
          title: "Every Call Still Feels One-to-One",
          body: "Each conversation adapts to the individual customer's history, even across a campaign of thousands.",
          checks: [
            "Personalizes every conversation using customer data",
            "Adapts pacing and tone per recipient",
            "Handles objections and questions live, not just a script",
          ],
        },
        {
          eyebrow: "Live Campaign Visibility",
          title: "See Results While the Campaign Is Still Running",
          body: "Track connect rates, outcomes, and sentiment in real time as the campaign runs, not after.",
          checks: [
            "Real-time connect and outcome tracking",
            "Pause or adjust a campaign mid-run",
            "Segment performance by audience group",
          ],
        },
        {
          eyebrow: "Built-In Compliance",
          title: "Respects Consent and Contact Rules Automatically",
          body: "Time-of-day rules, opt-outs, and frequency caps are enforced automatically across every campaign.",
          checks: [
            "Enforces contact time and frequency rules",
            "Honors opt-outs instantly across all campaigns",
            "Full audit trail for every outbound attempt",
          ],
        },
      ]}
      useCasesHeading="Where Campaigns Replace a Manual Dialing Effort"
      useCases={[
        { icon: <Bell className="h-4 w-4" />, tag: "Reminders", title: "Appointment & Payment Reminders", body: "Reduce no-shows and missed payments with timely proactive outreach." },
        { icon: <Megaphone className="h-4 w-4" />, tag: "Promotions", title: "Promotional Outreach", body: "Announce offers to segmented audiences without a manual dialing effort." },
        { icon: <ClipboardList className="h-4 w-4" />, tag: "Surveys", title: "Post-Interaction Surveys", body: "Collect feedback proactively instead of waiting for customers to volunteer it." },
        { icon: <RotateCcw className="h-4 w-4" />, tag: "Win-Back", title: "Win-Back Campaigns", body: "Re-engage dormant customers with an outreach that adapts to why they went quiet." },
        { icon: <TrendingUp className="h-4 w-4" />, tag: "Renewals", title: "Renewal & Upsell Outreach", body: "Reach customers proactively ahead of a renewal date, not after it's lapsed." },
        { icon: <Smartphone className="h-4 w-4" />, tag: "Multi-Channel", title: "Voice, SMS & Chat Campaigns", body: "Run the same campaign across channels and let customers respond on whichever they prefer." },
      ]}
      statsHeading="Numbers That Show Up in Reach, Not Just Volume"
      stats={[
        { value: "1000s", label: "Conversations run per campaign" },
        { value: "100%", label: "Consent and contact rules enforced automatically" },
        { value: "Live", label: "Campaign performance visibility" },
        { value: "+25%", label: "Connect rate vs. generic broadcast outreach" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Globe className="h-4 w-4" />, title: "Multilingual", tagline: "Reach every audience, any language." },
        { icon: <Smartphone className="h-4 w-4" />, title: "Omni-Channel Agents", tagline: "Where campaigns actually run." },
      ]}
      ctaHeading="Ready to Reach Thousands Without Sounding Like a Robocall?"
    />
  );
}
