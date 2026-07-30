import {
  ArrowRightLeft,
  History,
  ListFilter,
  RotateCcw,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  PanelHeader,
  ScoreBadge,
  ChecklistItem,
  PipelineStepper,
} from "@/components/marketing/panels/HeroVisuals";

export default function LeadScoringUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Lead Scoring"
      headline="Know Which Leads Deserve a Call Back"
      subheadline="Score every inbound lead the moment they engage — combining conversation signals, buying intent, and account fit — so reps spend time only where it counts."
      trustLine="For teams drowning in leads but starved for signal"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Lead Scorecard" status="Updated live" />
            <div className="mt-4">
              <ScoreBadge value="87 / 100" label="Buying intent score" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <ChecklistItem label="Fits ideal customer profile" />
              <ChecklistItem label="Mentioned budget & timeline" />
              <ChecklistItem label="Auto-routed to AE" />
            </div>
            <div className="mt-5">
              <PipelineStepper steps={["New", "Scored", "Routed"]} currentIndex={2} />
            </div>
          </PanelShell>
        </HeroPanelFrame>
      }
      problemHeading="The Cost of Scoring Leads by Gut Feel"
      problems={[
        {
          icon: <TrendingDown className="h-5 w-5" />,
          title: "Every Lead Looks the Same on Paper",
          body: "Form fills and downloads all look identical in a spreadsheet, hiding which ones are actually ready to buy.",
        },
        {
          icon: <History className="h-5 w-5" />,
          title: "Scoring Models Go Stale",
          body: "Static point systems built once, never updated, miss how buying signals actually shift over time.",
        },
        {
          icon: <ListFilter className="h-5 w-5" />,
          title: "Good Leads Slip Through the Cracks",
          body: "A high-intent lead with a quiet form fill gets the same priority as a tire-kicker, and by the time someone notices, it's already cold.",
        },
      ]}
      whyHeading="Scoring Built From Real Signals, Not Just Forms"
      featureBlocks={[
        {
          eyebrow: "Signal-Rich Scoring",
          title: "Every Interaction Adds to the Picture",
          body: "The score updates continuously as new signals arrive, not just once at form submission.",
          checks: [
            "Scores based on conversation content, not just clicks",
            "Weighs intent language, urgency, and objections",
            "Updates in real time as new signals arrive",
          ],
        },
        {
          eyebrow: "Fit + Intent Together",
          title: "Right Account, Right Moment",
          body: "A lead only scores high when both the account fits your ideal customer profile and the timing is right.",
          checks: [
            "Combines firmographic fit with buying intent",
            "Flags mismatched leads before they reach a rep",
            "Learns from what your best deals actually looked like",
          ],
        },
        {
          eyebrow: "Built to Act On",
          title: "A Score That Comes With a Reason",
          body: "No black-box numbers — every score explains itself and routes automatically to the right person.",
          checks: [
            "Every score explains what drove it",
            "Auto-routes high scorers to the right rep instantly",
            "Syncs directly into your CRM's lead record",
          ],
        },
      ]}
      useCasesHeading="Where Lead Scoring Changes the Math"
      useCases={[
        { icon: <ListFilter className="h-4 w-4" />, tag: "Inbound", title: "Form-Fill Triage", body: "Separate genuine buyers from casual browsers the moment a form is submitted." },
        { icon: <Users className="h-4 w-4" />, tag: "Events", title: "Event & Webinar Follow-Up", body: "Prioritize attendees who asked real questions over those who just registered." },
        { icon: <Target className="h-4 w-4" />, tag: "ABM", title: "Account-Based Scoring", body: "Weight leads higher when they come from accounts already on your target list." },
        { icon: <RotateCcw className="h-4 w-4" />, tag: "Reactivation", title: "Dormant Lead Reactivation", body: "Spot old leads suddenly showing renewed intent and resurface them automatically." },
        { icon: <ArrowRightLeft className="h-4 w-4" />, tag: "Handoff", title: "Marketing-to-Sales Handoff", body: "Set the exact score threshold where a lead moves from nurture to active outreach." },
        { icon: <Users className="h-4 w-4" />, tag: "Routing", title: "Capacity-Aware Routing", body: "Balance high-priority leads across reps based on who actually has room to work them." },
      ]}
      statsHeading="Numbers That Justify the Model"
      stats={[
        { value: "3x", label: "Rep time reclaimed from dead leads" },
        { value: "92%", label: "Scoring accuracy vs. closed-won" },
        { value: "<1 min", label: "Time to score a new lead" },
        { value: "-30%", label: "Fewer wasted follow-up calls" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Target className="h-4 w-4" />, title: "Sales", tagline: "Where scored leads go next." },
        { icon: <RotateCcw className="h-4 w-4" />, title: "Onboarding", tagline: "What happens after they say yes." },
      ]}
      ctaHeading="Ready to Stop Guessing Which Leads Matter?"
    />
  );
}
