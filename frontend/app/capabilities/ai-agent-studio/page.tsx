import {
  CheckCircle2,
  Code2,
  EyeOff,
  FlaskConical,
  GitBranch,
  History,
  MessagesSquare,
  Play,
  ShieldCheck,
  Smile,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  FloatingSubCard,
  FlowConnector,
  FlowNode,
  HeroPanelFrame,
  PanelHeader,
  PanelShell,
} from "@/components/marketing/panels/HeroVisuals";

export default function AIAgentStudioCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — AI Agent Studio"
      headline="Design Your Agent's Behavior Without Writing a Line of Code"
      subheadline="Build prompts, conversation flows, and personas visually — then publish changes in minutes instead of waiting on an engineering sprint."
      trustLine="Built for ops and CX teams who own the agent, not just the engineers who shipped it"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Flow Builder" status="Draft · Unpublished" />
            <div className="mt-4 flex flex-col gap-1">
              <FlowNode icon={<Play className="h-3.5 w-3.5" />} title="Start" subtitle="Customer says 'cancel my order'" />
              <FlowConnector label="if" />
              <FlowNode icon={<GitBranch className="h-3.5 w-3.5" />} title="Condition" subtitle="Order placed under 24h ago" />
              <FlowConnector label="then" />
              <FlowNode icon={<Zap className="h-3.5 w-3.5" />} title="Action" subtitle="Cancel order & confirm" active />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 className="h-3.5 w-3.5" /> Quality Analysis
            </div>
            <div className="mt-0.5 text-[10px] text-muted-foreground">Passed · 0 guardrail violations</div>
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Small Changes Take Weeks Instead of Minutes"
      problems={[
        {
          icon: <Code2 className="h-5 w-5" />,
          title: "Every Change Needs an Engineer",
          body: "A small wording tweak to the agent's greeting shouldn't require a pull request and a deploy.",
        },
        {
          icon: <EyeOff className="h-5 w-5" />,
          title: "Prompt Changes Ship Blind",
          body: "Without a way to preview behavior, teams find out a change broke something only after customers hit it.",
        },
        {
          icon: <MessagesSquare className="h-5 w-5" />,
          title: "Nobody Owns the Agent's Voice",
          body: "Tone and personality drift over time when every team edits the same prompt differently.",
        },
      ]}
      whyHeading="A Studio Built for the People Who Own the Agent"
      featureBlocks={[
        {
          eyebrow: "Visual Flow Builder",
          title: "Design Conversations, Not Prompts",
          body: "Build the agent's logic as a flow you can actually see, not a wall of prompt text.",
          checks: [
            "Drag-and-drop conversation flow builder",
            "Branches for every customer scenario",
            "No code required to publish changes",
          ],
        },
        {
          eyebrow: "Safe Preview & Publish",
          title: "Test Before It Ever Reaches a Customer",
          body: "Every change gets previewed against real scenarios before it goes live.",
          checks: [
            "Preview changes against sample conversations",
            "Version history with instant rollback",
            "Staged rollout before a full publish",
          ],
        },
        {
          eyebrow: "Consistent Persona Controls",
          title: "One Voice, Enforced Everywhere",
          body: "Tone, vocabulary, and personality are defined once and applied consistently across every flow.",
          checks: [
            "Central persona and tone settings",
            "Reusable prompt components across flows",
            "Guardrails to prevent off-brand responses",
          ],
        },
      ]}
      useCasesHeading="Where the Studio Changes Who Can Ship a Change"
      useCases={[
        { icon: <Workflow className="h-4 w-4" />, tag: "Design", title: "Conversation Flow Design", body: "Map out exactly how the agent should handle each type of request." },
        { icon: <Smile className="h-4 w-4" />, tag: "Persona", title: "Brand Voice & Persona Setup", body: "Define tone and personality once, applied across every channel." },
        { icon: <FlaskConical className="h-4 w-4" />, tag: "Testing", title: "Pre-Publish Testing", body: "Run new prompts against real scenarios before customers ever see them." },
        { icon: <History className="h-4 w-4" />, tag: "Versioning", title: "Version History & Rollback", body: "Roll back instantly if a change doesn't perform the way you expected." },
        { icon: <Users className="h-4 w-4" />, tag: "Collaboration", title: "Non-Technical Collaboration", body: "Let ops and CX teams edit agent behavior directly, without a dev queue." },
        { icon: <ShieldCheck className="h-4 w-4" />, tag: "Guardrails", title: "Response Guardrails", body: "Set hard boundaries the agent can never cross, regardless of the prompt." },
      ]}
      statsHeading="Numbers That Show Up in Release Velocity"
      stats={[
        { value: "0", label: "Engineering tickets for a wording change" },
        { value: "10x", label: "Faster time from idea to published change" },
        { value: "100%", label: "Changes previewed before going live" },
        { value: "1-click", label: "Rollback to any prior version" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Zap className="h-4 w-4" />, title: "Actions Framework", tagline: "What the agent can actually do." },
        { icon: <FlaskConical className="h-4 w-4" />, title: "AI Agent Simulator", tagline: "Where flows get stress-tested." },
      ]}
      ctaHeading="Ready to Design Your Agent Without Waiting on a Sprint?"
    />
  );
}
