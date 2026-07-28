import {
  Bell,
  Repeat,
  ShieldAlert,
  Star,
  TrendingDown,
  UserMinus,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function EscalationMonitoringUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Escalation Monitoring"
      headline="Catch the Conversation Before It Becomes a Complaint"
      subheadline="Monitor every live interaction for risk signals — frustration, compliance flags, churn language — and route it to a human before it boils over."
      trustLine="For teams who'd rather prevent a bad review than respond to one"
      problemHeading="Why Warning Signs Get Missed Until It's Too Late"
      problems={[
        {
          icon: <TrendingDown className="h-5 w-5" />,
          title: "Warning Signs Get Missed in Real Time",
          body: "A frustrated customer can escalate three exchanges before anyone notices the tone has shifted.",
        },
        {
          icon: <ShieldAlert className="h-5 w-5" />,
          title: "Escalation Rules Are Too Rigid",
          body: "Keyword lists catch \"refund\" but miss the sarcasm, the sigh, the slow fade into silence.",
        },
        {
          icon: <UserMinus className="h-5 w-5" />,
          title: "By the Time It's Flagged, It's Already Public",
          body: "Manual review happens after the fact, often after the customer has already posted about it.",
        },
      ]}
      whyHeading="Escalation Detection That Reads the Whole Conversation"
      featureBlocks={[
        {
          eyebrow: "Real-Time Sentiment Tracking",
          title: "Sees the Shift as It Happens",
          body: "Tone is tracked turn by turn, not just scanned for trigger words after the fact.",
          checks: ["Tracks tone and sentiment turn by turn", "Flags frustration before a customer states it", "Works across voice, chat, and email"],
        },
        {
          eyebrow: "Context-Aware Rules",
          title: "Knows the Difference Between Annoyed and Done",
          body: "Escalation thresholds weigh the whole conversation and the customer's history, not one message in isolation.",
          checks: ["Understands nuance beyond keyword matching", "Weighs conversation history, not just this message", "Adjusts thresholds by customer value or risk"],
        },
        {
          eyebrow: "Routed, Not Just Flagged",
          title: "Gets to the Right Person With the Right Context",
          body: "An escalation arrives as a summary a human can act on immediately, not a raw transcript to dig through.",
          checks: ["Escalates with a full summary attached", "Prioritizes by severity, not just recency", "Notifies the right team automatically"],
        },
      ]}
      useCasesHeading="Where Escalation Monitoring Prevents the Worst Outcomes"
      useCases={[
        { icon: <TrendingDown className="h-4 w-4" />, tag: "Sentiment", title: "Sentiment Drift Detection", body: "Notice a conversation turning sour well before the customer says so directly." },
        { icon: <ShieldAlert className="h-4 w-4" />, tag: "Compliance", title: "Compliance Risk Flags", body: "Catch language that could create legal or regulatory exposure in the moment." },
        { icon: <UserMinus className="h-4 w-4" />, tag: "Retention", title: "Churn-Language Detection", body: "Spot cancellation intent early enough to actually do something about it." },
        { icon: <Star className="h-4 w-4" />, tag: "Priority", title: "VIP Account Monitoring", body: "Apply tighter thresholds for your highest-value accounts automatically." },
        { icon: <Repeat className="h-4 w-4" />, tag: "Patterns", title: "Repeat-Contact Detection", body: "Flag customers reaching out again and again about the same unresolved issue." },
        { icon: <Bell className="h-4 w-4" />, tag: "Supervision", title: "Live Supervisor Alerts", body: "Notify a supervisor the instant a conversation crosses a risk threshold." },
      ]}
      statsHeading="Numbers That Show Up Before the Damage Does"
      stats={[
        { value: "-60%", label: "Escalations reaching social media" },
        { value: "3x", label: "Faster time-to-intervention" },
        { value: "90%", label: "Risk signals caught before customer states them" },
        { value: "100%", label: "Conversations monitored, not sampled" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Bell className="h-4 w-4" />, title: "Inbound", tagline: "Where most conversations start." },
        { icon: <ShieldAlert className="h-4 w-4" />, title: "Collections", tagline: "Where tone matters most." },
      ]}
      ctaHeading="Ready to Catch Problems Before They Escalate?"
    />
  );
}
