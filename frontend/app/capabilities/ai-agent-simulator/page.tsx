import {
  BookOpen,
  Bug,
  FlaskConical,
  GitCompare,
  Layers,
  ListChecks,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function AIAgentSimulatorCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — AI Agent Simulator"
      headline="Stress-Test Your Agent Before a Single Customer Does"
      subheadline="Run thousands of simulated conversations — including the edge cases you'd never think to script by hand — before any change reaches a real customer."
      trustLine="Built for teams who'd rather find the bug in a simulator than in a live call"
      problemHeading="Why Changes That Look Fine Still Break in Production"
      problems={[
        {
          icon: <ListChecks className="h-5 w-5" />,
          title: "Manual Testing Only Covers What You Thought Of",
          body: "A handful of scripted test conversations never covers the strange, real edge cases customers actually bring.",
        },
        {
          icon: <FlaskConical className="h-5 w-5" />,
          title: "Every Prompt Change Is a Live Experiment",
          body: "Without a safe way to test first, every change effectively gets tested on real customers.",
        },
        {
          icon: <Bug className="h-5 w-5" />,
          title: "Regressions Slip Through Silently",
          body: "A fix for one scenario can quietly break a different one, and nobody notices until complaints start.",
        },
      ]}
      whyHeading="A Simulator That Finds the Bug Before Your Customers Do"
      featureBlocks={[
        {
          eyebrow: "Simulated Conversation Coverage",
          title: "Thousands of Scenarios, Automatically",
          body: "The simulator generates realistic edge cases at a scale no team could script by hand.",
          checks: [
            "Generates thousands of realistic test conversations",
            "Covers edge cases humans rarely think to write",
            "Runs against every proposed change automatically",
          ],
        },
        {
          eyebrow: "Regression Detection",
          title: "Catches What a Change Quietly Breaks",
          body: "Every change is compared against prior behavior to catch unintended regressions before launch.",
          checks: [
            "Flags behavior changes versus the previous version",
            "Scores pass/fail against your own success criteria",
            "Blocks a risky publish automatically",
          ],
        },
        {
          eyebrow: "Realistic Personas",
          title: "Tests Against How Customers Actually Talk",
          body: "Simulated customers range from calm to frustrated to confused, not just clean, polite test scripts.",
          checks: [
            "Simulates a range of customer tones and moods",
            "Includes adversarial and edge-case inputs",
            "Reusable test suites for every future change",
          ],
        },
      ]}
      useCasesHeading="Where Simulation Catches What Manual Testing Misses"
      useCases={[
        { icon: <ListChecks className="h-4 w-4" />, tag: "Pre-Launch", title: "Pre-Publish Regression Testing", body: "Confirm a new prompt doesn't break behavior that used to work fine." },
        { icon: <Bug className="h-4 w-4" />, tag: "Edge Cases", title: "Adversarial Scenario Testing", body: "Throw confusing, rude, or off-topic inputs at the agent before customers do." },
        { icon: <Layers className="h-4 w-4" />, tag: "Scale", title: "Scale & Consistency Testing", body: "Confirm the agent behaves the same on conversation one and conversation ten thousand." },
        { icon: <ShieldCheck className="h-4 w-4" />, tag: "Compliance", title: "Compliance Scenario Testing", body: "Verify required disclosures happen correctly across every simulated path." },
        { icon: <Workflow className="h-4 w-4" />, tag: "Validation", title: "New Flow Validation", body: "Validate an entirely new conversation flow before it ever reaches a customer." },
        { icon: <GitCompare className="h-4 w-4" />, tag: "Benchmarking", title: "Version Comparison", body: "Compare two prompt versions side by side across the same test scenarios." },
      ]}
      statsHeading="Numbers That Show Up Before Launch, Not After"
      stats={[
        { value: "1000s", label: "Simulated conversations per test run" },
        { value: "0", label: "Live customers used as the first test" },
        { value: "-75%", label: "Regressions reaching production" },
        { value: "Minutes", label: "Time to test a new prompt version" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Wrench className="h-4 w-4" />, title: "AI Agent Studio", tagline: "Where the changes get made." },
        { icon: <BookOpen className="h-4 w-4" />, title: "Knowledge Base", tagline: "What gets tested against real docs." },
      ]}
      ctaHeading="Ready to Test Before Customers Do?"
    />
  );
}
