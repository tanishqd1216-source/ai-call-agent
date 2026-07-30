import {
  Calculator,
  FileQuestion,
  FileWarning,
  Landmark,
  Phone,
  Receipt,
  RotateCcw,
  Search,
  Stethoscope,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  FloatingSubCard,
  PanelHeader,
  PipelineStepper,
  StatTile,
  ChecklistItem,
} from "@/components/marketing/panels/HeroVisuals";

export default function InsuranceIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — Insurance"
      headline="File a Claim in Minutes, Not After a Hold Song"
      subheadline="Take a first notice of loss, check claim status, and answer policy questions — all with the accuracy and documentation a claim actually requires."
      trustLine="Built for insurers who lose customers in the gap between filing and follow-up"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Claim #48213" status="Reviewing" />
            <div className="mt-5">
              <PipelineStepper steps={["Filed", "Reviewing", "Approved"]} currentIndex={1} />
            </div>
            <div className="mt-5 border-t border-border pt-4">
              <StatTile value="48 hrs" label="Est. time to decision" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ChecklistItem label="Adjuster review not required" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Claims Conversations Are the Hardest to Get Right"
      problems={[
        {
          icon: <FileWarning className="h-5 w-5" />,
          title: "Claim Intake Is Slow When It Matters Most",
          body: "Customers filing a claim are often already having a bad day, and a long intake call makes it worse.",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          title: "Claim Status Questions Flood the Same Line as New Claims",
          body: "'Where's my claim' calls take up the same capacity that's needed for genuinely urgent first-notice-of-loss calls.",
        },
        {
          icon: <FileQuestion className="h-5 w-5" />,
          title: "Policy Questions Need Accurate, Current Answers",
          body: "A wrong answer about coverage isn't just unhelpful, it can create real liability.",
        },
      ]}
      whyHeading="Claims Handled With the Accuracy They Require"
      featureBlocks={[
        {
          eyebrow: "Structured Claim Intake",
          title: "Captures a Complete First Notice of Loss",
          body: "Every required detail is captured accurately the first time, in a natural conversation.",
          checks: [
            "Captures all required FNOL details accurately",
            "Documents the incident in the customer's own words",
            "Routes to the right adjuster automatically",
          ],
        },
        {
          eyebrow: "Status Without the Wait",
          title: "Claim Status, Instantly, Any Time",
          body: "Customers get an accurate claim status update without waiting for an adjuster callback.",
          checks: [
            "Provides real-time claim status updates",
            "Frees adjusters from routine status calls",
            "Available around the clock, not just business hours",
          ],
        },
        {
          eyebrow: "Grounded Policy Answers",
          title: "Coverage Answers Tied to the Actual Policy",
          body: "Policy questions are answered against the customer's actual coverage, not a generic FAQ.",
          checks: [
            "Answers grounded in the customer's real policy",
            "Flags questions that need a licensed agent",
            "Full record of what was said and why",
          ],
        },
      ]}
      useCasesHeading="Where Insurers Put This to Work"
      useCases={[
        { icon: <FileWarning className="h-4 w-4" />, tag: "Claims", title: "First Notice of Loss Intake", body: "Capture a complete, accurate claim report the moment an incident happens." },
        { icon: <Search className="h-4 w-4" />, tag: "Status", title: "Claim Status Updates", body: "Give customers a real-time answer without an adjuster callback." },
        { icon: <FileQuestion className="h-4 w-4" />, tag: "Policy", title: "Coverage & Policy Questions", body: "Answer what's covered accurately, grounded in the actual policy." },
        { icon: <RotateCcw className="h-4 w-4" />, tag: "Renewals", title: "Policy Renewal Outreach", body: "Reach customers proactively ahead of a renewal deadline." },
        { icon: <Receipt className="h-4 w-4" />, tag: "Billing", title: "Premium & Billing Questions", body: "Resolve billing questions without a transfer to accounting." },
        { icon: <Calculator className="h-4 w-4" />, tag: "Quotes", title: "New Quote Requests", body: "Capture the details needed to generate a new quote." },
      ]}
      statsHeading="Numbers That Show Up From First Call to Payout"
      stats={[
        { value: "-70%", label: "Time to complete claim intake" },
        { value: "24/7", label: "Claim status availability" },
        { value: "100%", label: "Answers grounded in actual policy terms" },
        { value: "+30%", label: "Adjuster capacity freed for complex claims" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Landmark className="h-4 w-4" />, title: "Banking & Finance", tagline: "Another regulated, high-trust conversation." },
        { icon: <Stethoscope className="h-4 w-4" />, title: "Healthcare", tagline: "Another sensitive claims-adjacent domain." },
      ]}
      ctaHeading="Ready to File a Claim Without the Hold Song?"
    />
  );
}
