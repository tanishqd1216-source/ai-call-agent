import {
  FileCode,
  GitCompare,
  History,
  Mic,
  MousePointer,
  RotateCcw,
  Rocket,
  Terminal,
  Volume2,
  Workflow,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import { HeroVisual } from "@/components/marketing/HeroVisual";

export default function CommandLineInterfacePage() {
  return (
    <AgentLandingPage
      heroVisual={<HeroVisual variant="cli" />}
      eyebrow="Developers — Command Line Interface"
      headline="Manage Every Agent From a Terminal, Not a Ticket Queue"
      subheadline="Deploy, configure, and roll back agents with a single CLI — built for engineering teams who'd rather script a change than click through a dashboard five times."
      trustLine="Built for teams who put infrastructure in version control, not a UI"
      problemHeading="Why Dashboard-Only Config Doesn't Scale for Engineering Teams"
      problems={[
        {
          icon: <MousePointer className="h-5 w-5" />,
          title: "Every Config Change Means Clicking Through a UI",
          body: "A change that should take one command instead takes five dashboard clicks, every single time.",
        },
        {
          icon: <Terminal className="h-5 w-5" />,
          title: "No Way to Script Repeatable Deployments",
          body: "Without a CLI, there's no way to automate agent config as part of a real deployment pipeline.",
        },
        {
          icon: <GitCompare className="h-5 w-5" />,
          title: "Configuration Drift Goes Unnoticed",
          body: "Without config in version control, it's impossible to tell what changed between two working states.",
        },
      ]}
      whyHeading="Infrastructure-Grade Control Over Your Agents"
      featureBlocks={[
        {
          eyebrow: "Full Control From the Terminal",
          title: "Everything the Dashboard Can Do, Scriptable",
          body: "Every action available in the UI is available as a command, so nothing requires a browser.",
          checks: [
            "Deploy, configure, and roll back from the terminal",
            "Scriptable for CI/CD pipelines",
            "No action locked behind the dashboard only",
          ],
        },
        {
          eyebrow: "Config as Code",
          title: "Agent Configuration Lives in Version Control",
          body: "Define agent behavior in files you can diff, review, and roll back like any other code.",
          checks: [
            "Configuration stored as version-controlled files",
            "Diffable changes reviewed like a pull request",
            "Instant rollback to any prior configuration",
          ],
        },
        {
          eyebrow: "Built for Automation",
          title: "Wire Agent Deployments Into Your Existing Pipeline",
          body: "The CLI runs the same in CI as it does on a laptop, so deployments become part of your existing workflow.",
          checks: [
            "Runs identically in CI/CD and locally",
            "Scriptable for automated deployment pipelines",
            "Exit codes and output built for automation",
          ],
        },
      ]}
      useCasesHeading="Where Engineering Teams Put the CLI to Work"
      useCases={[
        { icon: <Rocket className="h-4 w-4" />, tag: "Deploy", title: "Scripted Deployments", body: "Deploy a new agent version as part of your existing release process." },
        { icon: <FileCode className="h-4 w-4" />, tag: "Config", title: "Configuration as Code", body: "Manage agent behavior in files reviewed like any other pull request." },
        { icon: <Workflow className="h-4 w-4" />, tag: "CI/CD", title: "Pipeline Integration", body: "Run agent deployments automatically as part of CI/CD." },
        { icon: <RotateCcw className="h-4 w-4" />, tag: "Rollback", title: "Instant Rollback", body: "Revert to a known-good configuration with a single command." },
        { icon: <Terminal className="h-4 w-4" />, tag: "Local Dev", title: "Local Development & Testing", body: "Test agent changes locally before they ever reach production." },
        { icon: <History className="h-4 w-4" />, tag: "Audit", title: "Change History", body: "See exactly what changed, when, and by whom." },
      ]}
      statsHeading="Numbers That Show Up in Deploy Velocity"
      stats={[
        { value: "1 command", label: "To deploy, roll back, or reconfigure" },
        { value: "0", label: "Required dashboard clicks for common tasks" },
        { value: "100%", label: "Feature parity with the web dashboard" },
        { value: "Native", label: "CI/CD pipeline integration" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Mic className="h-4 w-4" />, title: "Speech To Text", tagline: "What the agent hears." },
        { icon: <Volume2 className="h-4 w-4" />, title: "Text To Speech", tagline: "What the agent sounds like." },
      ]}
      ctaHeading="Ready to Manage Agents Like Real Infrastructure?"
    />
  );
}
