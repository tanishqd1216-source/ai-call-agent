import {
  BarChart3,
  Calendar,
  ListChecks,
  Repeat,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function SalesUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Sales"
      headline="Turn Every Conversation Into a Qualified Deal"
      subheadline="Deploy an AI agent that engages leads the moment they show interest, qualifies them against your criteria, and hands off only the conversations worth a rep's time."
      trustLine="Built for teams who measure pipeline in hours, not weeks"
      problemHeading="Why Most Sales Follow-Up Falls Through"
      problems={[
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Leads Go Cold Waiting",
          body: "The average lead waits hours for a first response — by then, a competitor has already called.",
        },
        {
          icon: <ListChecks className="h-5 w-5" />,
          title: "Reps Chase Unqualified Leads",
          body: "Without consistent qualification, sales teams spend as much time on dead ends as on real opportunities.",
        },
        {
          icon: <Repeat className="h-5 w-5" />,
          title: "Context Lost at Handoff",
          body: "By the time a lead reaches a human, half the conversation history — and the customer's patience — is already gone.",
        },
      ]}
      whyHeading="An Agent That Sells Like Your Best Rep"
      featureBlocks={[
        {
          eyebrow: "Instant Engagement",
          title: "Respond in Seconds, Not Hours",
          body: "The agent engages a lead the moment they convert, on whichever channel they used to reach out.",
          checks: [
            "Engages leads the moment they convert",
            "Works across voice, chat, and WhatsApp",
            "Never lets a lead go unanswered",
          ],
        },
        {
          eyebrow: "Consistent Qualification",
          title: "Every Lead Scored the Same Way",
          body: "No more gut-feel qualification — every lead is measured against the same criteria, every time.",
          checks: [
            "Qualifies against your exact criteria",
            "Captures budget, timeline, and intent",
            "Routes only real opportunities to reps",
          ],
        },
        {
          eyebrow: "Clean Handoffs",
          title: "Reps Start Where the Agent Left Off",
          body: "When a conversation is ready for a human, it arrives with full context attached — not a cold transfer.",
          checks: ["Full conversation history attached", "Warm handoff with context, not a cold transfer", "CRM updated automatically"],
        },
      ]}
      useCasesHeading="Where Sales Teams Put It to Work"
      useCases={[
        { icon: <Zap className="h-4 w-4" />, tag: "Inbound", title: "Inbound Lead Response", body: "Respond to every new lead within seconds, across whichever channel they used." },
        { icon: <ListChecks className="h-4 w-4" />, tag: "Qualification", title: "Lead Qualification & Scoring", body: "Score every lead consistently and route only qualified conversations to reps." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Scheduling", title: "Demo & Meeting Booking", body: "Let prospects book time directly with a rep, no back-and-forth required." },
        { icon: <ShoppingCart className="h-4 w-4" />, tag: "Recovery", title: "Abandoned Cart Recovery", body: "Re-engage prospects who dropped off before completing a purchase." },
        { icon: <Repeat className="h-4 w-4" />, tag: "Retention", title: "Renewal & Upsell Outreach", body: "Reach existing customers at the right moment with the right offer." },
        { icon: <BarChart3 className="h-4 w-4" />, tag: "Reporting", title: "Pipeline Reporting", body: "See exactly where leads drop off and which conversations convert." },
      ]}
      statsHeading="Numbers Revenue Teams Actually Track"
      stats={[
        { value: "2 min", label: "Average first response" },
        { value: "3.5x", label: "More qualified meetings booked" },
        { value: "+40%", label: "Lead-to-meeting conversion" },
        { value: "24/7", label: "Coverage, even after hours" },
      ]}
      relatedHeading="More Ways Meridian Supports Revenue Teams"
      relatedItems={[
        { icon: <ListChecks className="h-4 w-4" />, title: "Lead Scoring", tagline: "Know which leads are worth a call." },
        { icon: <Repeat className="h-4 w-4" />, title: "Onboarding", tagline: "Turn new customers into advocates fast." },
      ]}
      ctaHeading="Ready to Stop Losing Leads to Silence?"
    />
  );
}
