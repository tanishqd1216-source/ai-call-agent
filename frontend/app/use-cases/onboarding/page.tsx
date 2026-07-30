import {
  Clock,
  Compass,
  Database,
  EyeOff,
  GraduationCap,
  Handshake,
  LifeBuoy,
  PartyPopper,
  UserX,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  FloatingSubCard,
  PanelHeader,
  ChecklistItem,
  ScoreBadge,
  PipelineStepper,
} from "@/components/marketing/panels/HeroVisuals";

export default function OnboardingUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Onboarding"
      headline="Get New Customers to Their First Win, Faster"
      subheadline="Guide every new customer through setup with proactive check-ins and milestone nudges — so they see real value before the excitement of signing wears off."
      trustLine="Built for the make-or-break first 30 days"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Onboarding Progress" status="Day 4 of 30" />
            <div className="mt-5">
              <PipelineStepper steps={["Signup", "Setup", "First Value"]} currentIndex={1} />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <ChecklistItem label="Account configured" />
              <ChecklistItem label="First data import complete" />
              <ChecklistItem label="First real-use walkthrough" done={false} />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ScoreBadge value="2x" label="Setup completion rate" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why New Customers Stall Before They Start"
      problems={[
        {
          icon: <UserX className="h-5 w-5" />,
          title: "Setup Falls on the Customer",
          body: "Without a guide, customers get stuck on step two and quietly go cold instead of asking for help.",
        },
        {
          icon: <EyeOff className="h-5 w-5" />,
          title: "Success Teams Can't Watch Everyone",
          body: "CS teams can't proactively check in on every account, so struggling customers go unnoticed until a renewal conversation.",
        },
        {
          icon: <Clock className="h-5 w-5" />,
          title: "Value Arrives Too Late",
          body: "By the time a customer sees real value, the excitement from signing has already worn off.",
        },
      ]}
      whyHeading="An Onboarding Guide That Never Sleeps"
      featureBlocks={[
        {
          eyebrow: "Proactive Check-Ins",
          title: "Reaches Out Before They Ask",
          body: "The agent notices when setup has stalled and steps in before frustration turns into silence.",
          checks: [
            "Detects stalled setup automatically",
            "Sends timely nudges across email and chat",
            "Escalates to a human when it matters",
          ],
        },
        {
          eyebrow: "Milestone-Aware",
          title: "Knows What \"Done\" Actually Looks Like",
          body: "Every account is measured against real setup milestones, not a generic days-since-signup counter.",
          checks: [
            "Tracks setup milestones per customer",
            "Celebrates progress to build momentum",
            "Flags accounts falling behind pace",
          ],
        },
        {
          eyebrow: "Personalized Path",
          title: "No Two Onboardings Look the Same",
          body: "The path adapts to the plan and use case a customer actually bought, not a one-size-fits-all checklist.",
          checks: [
            "Adapts steps to plan and use case",
            "Answers setup questions in the moment",
            "Hands off smoothly to CS when needed",
          ],
        },
      ]}
      useCasesHeading="Where Onboarding Agents Earn Their Keep"
      useCases={[
        { icon: <Compass className="h-4 w-4" />, tag: "Setup", title: "Guided Product Setup", body: "Walk new customers through configuration step by step, answering questions as they go." },
        { icon: <Database className="h-4 w-4" />, tag: "Migration", title: "Data & Account Migration", body: "Help customers move existing data in without needing a dedicated migration call." },
        { icon: <GraduationCap className="h-4 w-4" />, tag: "Training", title: "First-Use Walkthroughs", body: "Guide customers through their very first real use of the product, not just a demo." },
        { icon: <LifeBuoy className="h-4 w-4" />, tag: "Rescue", title: "Stalled-Account Rescue", body: "Automatically re-engage accounts that have gone quiet mid-setup." },
        { icon: <PartyPopper className="h-4 w-4" />, tag: "Engagement", title: "Milestone Celebration", body: "Mark and celebrate real progress to keep momentum going through setup." },
        { icon: <Handshake className="h-4 w-4" />, tag: "Handoff", title: "Handoff to Customer Success", body: "Bring in a human at exactly the right moment, with full context already attached." },
      ]}
      statsHeading="Numbers That Show Up in Retention"
      stats={[
        { value: "-45%", label: "Time to first value" },
        { value: "2x", label: "Setup completion rate" },
        { value: "-25%", label: "Early-stage churn" },
        { value: "80%", label: "Onboarding steps completed without a human" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Handshake className="h-4 w-4" />, title: "Sales", tagline: "Where the relationship starts." },
        { icon: <Compass className="h-4 w-4" />, title: "Lead Scoring", tagline: "How the right customers got here." },
      ]}
      ctaHeading="Ready to Make Day One Feel Like a Win?"
    />
  );
}
