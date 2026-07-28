import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  CheckSquare,
  Handshake,
  MessageSquare,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function CollectionsUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Collections"
      headline="Get Paid Without Damaging the Relationship"
      subheadline="Send payment reminders and negotiate repayment plans with a tone that adapts to how the customer responds — firm when it needs to be, human always."
      trustLine="Built for recovering revenue without losing the customer"
      problemHeading="Why Collections Outreach Backfires So Often"
      problems={[
        {
          icon: <MessageSquare className="h-5 w-5" />,
          title: "One-Size Reminders Backfire",
          body: "The same stern template sent to a loyal customer and a repeat defaulter damages goodwill either way.",
        },
        {
          icon: <Bell className="h-5 w-5" />,
          title: "Timing Is Guesswork",
          body: "Reminders sent too early feel pushy; sent too late, the balance has already gone cold.",
        },
        {
          icon: <AlertTriangle className="h-5 w-5" />,
          title: "Compliance Risk on Every Call",
          body: "Collections language is tightly regulated, and a single misstep can create real legal exposure.",
        },
      ]}
      whyHeading="Collections That Read the Room"
      featureBlocks={[
        {
          eyebrow: "Adaptive Tone",
          title: "Firm When Needed, Human Always",
          body: "The agent adjusts its approach based on how the customer actually responds, not a fixed script.",
          checks: ["Adjusts tone based on customer response", "Offers flexible repayment options in the moment", "Never sounds like a form letter"],
        },
        {
          eyebrow: "Right-Time Outreach",
          title: "Reaches Out When It Actually Works",
          body: "Timing is driven by payment and behavior patterns, not a fixed day-of-month schedule.",
          checks: ["Times reminders to payment and behavior patterns", "Follows up automatically without nagging", "Stops the moment payment is made"],
        },
        {
          eyebrow: "Compliant by Design",
          title: "Every Word Stays Within the Lines",
          body: "Scripts are built to stay within regulatory guardrails, with a full record of every conversation.",
          checks: ["Scripts stay within regulatory guardrails", "Full audit trail of every conversation", "Escalates disputes to a human immediately"],
        },
      ]}
      useCasesHeading="Where Collections Agents Recover Revenue"
      useCases={[
        { icon: <Bell className="h-4 w-4" />, tag: "Reminders", title: "Early-Stage Payment Reminders", body: "Send timely, low-friction nudges before a balance becomes overdue." },
        { icon: <Handshake className="h-4 w-4" />, tag: "Negotiation", title: "Repayment Plan Negotiation", body: "Offer flexible plans in the moment instead of a rigid pay-in-full demand." },
        { icon: <AlertTriangle className="h-4 w-4" />, tag: "Disputes", title: "Dispute Intake & Escalation", body: "Capture disputes accurately and route them to a human right away." },
        { icon: <CheckSquare className="h-4 w-4" />, tag: "Tracking", title: "Promise-to-Pay Tracking", body: "Follow up automatically on commitments customers have already made." },
        { icon: <MessageSquare className="h-4 w-4" />, tag: "Omni-Channel", title: "Multi-Channel Outreach", body: "Reach customers by voice, SMS, or email — whichever they actually respond to." },
        { icon: <CheckCircle2 className="h-4 w-4" />, tag: "Confirmation", title: "Post-Payment Confirmation", body: "Close the loop the moment a payment clears, automatically." },
      ]}
      statsHeading="Numbers That Show Up on the Balance Sheet"
      stats={[
        { value: "+35%", label: "Recovery rate" },
        { value: "-50%", label: "Complaints about tone" },
        { value: "100%", label: "Compliance-reviewed scripts" },
        { value: "<24h", label: "Average time to first contact" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Bell className="h-4 w-4" />, title: "Inbound", tagline: "Where customers reach out first." },
        { icon: <AlertTriangle className="h-4 w-4" />, title: "Escalation Monitoring", tagline: "Catches disputes before they spread." },
      ]}
      ctaHeading="Ready to Recover Revenue the Right Way?"
    />
  );
}
