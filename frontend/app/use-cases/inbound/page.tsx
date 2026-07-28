import {
  Bell,
  Calendar,
  Lock,
  Moon,
  Package,
  Receipt,
  Wrench,
  Zap,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function InboundUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Inbound"
      headline="Answer Every Incoming Request the Moment It Arrives"
      subheadline="Route, triage, and resolve inbound support requests across voice, chat, and email — without customers waiting in a queue for a human to be free."
      trustLine="Built for teams who measure support in seconds, not tickets"
      problemHeading="Why Queues Keep Growing Faster Than Rep Capacity"
      problems={[
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Queues Build Faster Than Reps Can Clear Them",
          body: "Peak hours mean long waits no matter how many reps are on shift — volume always wins.",
        },
        {
          icon: <Bell className="h-5 w-5" />,
          title: "First Response Sets the Tone",
          body: "A slow first reply colors the entire support experience, even if the issue is eventually solved well.",
        },
        {
          icon: <Wrench className="h-5 w-5" />,
          title: "Simple Requests Eat Rep Time",
          body: "Password resets and order-status checks take the same queue slot as complex issues that actually need a person.",
        },
      ]}
      whyHeading="An Inbound Agent That's Always the First to Answer"
      featureBlocks={[
        {
          eyebrow: "Instant First Response",
          title: "No One Waits in a Queue",
          body: "Every inbound request gets an immediate response, on whichever channel the customer picked.",
          checks: ["Answers every inbound request immediately", "Works across voice, chat, and email", "Never puts a customer on hold"],
        },
        {
          eyebrow: "Smart Triage",
          title: "Routes the Right Issue to the Right Place",
          body: "Simple requests get resolved on the spot; complex ones move to a human with full context already attached.",
          checks: ["Resolves simple requests without a human", "Classifies and prioritizes by urgency", "Escalates complex issues with full context"],
        },
        {
          eyebrow: "Consistent at Any Volume",
          title: "Same Quality at 10 Requests or 10,000",
          body: "The agent doesn't slow down or get sloppy during a spike the way a stretched team does.",
          checks: ["Scales instantly during peak hours", "No queue regardless of volume", "Maintains tone and accuracy under load"],
        },
      ]}
      useCasesHeading="Built for Every High-Volume Inbound Scenario"
      useCases={[
        { icon: <Package className="h-4 w-4" />, tag: "Retail", title: "Order Status & Tracking", body: "Answer where-is-my-order questions instantly, pulling live shipping data." },
        { icon: <Lock className="h-4 w-4" />, tag: "Self-Serve", title: "Account & Password Help", body: "Resolve access issues without a rep ever touching the ticket." },
        { icon: <Receipt className="h-4 w-4" />, tag: "Billing", title: "Billing Questions", body: "Explain charges and resolve simple disputes on the first contact." },
        { icon: <Wrench className="h-4 w-4" />, tag: "Technical", title: "Product Troubleshooting", body: "Walk customers through common fixes before escalating to a specialist." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Scheduling", title: "Appointment Changes", body: "Handle reschedules and cancellations without a phone tree." },
        { icon: <Moon className="h-4 w-4" />, tag: "24/7", title: "After-Hours Coverage", body: "Keep answering requests overnight and on weekends, at full quality." },
      ]}
      statsHeading="Numbers That Matter When Volume Spikes"
      stats={[
        { value: "<15s", label: "Average first response" },
        { value: "70%", label: "Resolved without a human" },
        { value: "0", label: "Customers on hold" },
        { value: "24/7", label: "Always-on coverage" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Bell className="h-4 w-4" />, title: "Escalation Monitoring", tagline: "Knows when to hand off." },
        { icon: <Receipt className="h-4 w-4" />, title: "Collections", tagline: "For the harder conversations." },
      ]}
      ctaHeading="Ready to Clear the Queue Before It Forms?"
    />
  );
}
