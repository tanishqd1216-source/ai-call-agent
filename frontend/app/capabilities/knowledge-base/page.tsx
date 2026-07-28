import {
  BookOpen,
  FileQuestion,
  FileText,
  FlaskConical,
  HelpCircle,
  Layers,
  Library,
  RefreshCcw,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function KnowledgeBaseCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Knowledge Base"
      headline="Answers Grounded in Your Actual Docs, Not a Guess"
      subheadline="Connect your help center, policies, and internal docs so every answer the agent gives is grounded in what your business actually says — updated the moment your docs change."
      trustLine="Built for teams tired of correcting confidently wrong answers"
      problemHeading="Why Generic Answers Keep Getting Corrected"
      problems={[
        {
          icon: <FileQuestion className="h-5 w-5" />,
          title: "Generic Answers Don't Match Your Policies",
          body: "A generic AI answer can sound right and still be completely wrong for your specific refund policy.",
        },
        {
          icon: <RefreshCcw className="h-5 w-5" />,
          title: "Docs Change Faster Than Anyone Updates the Bot",
          body: "Policy pages get updated, but the agent keeps repeating whatever it learned months ago.",
        },
        {
          icon: <HelpCircle className="h-5 w-5" />,
          title: "Nobody Knows What the Agent Actually Knows",
          body: "Without visibility into its knowledge sources, teams can't tell why an answer was wrong.",
        },
      ]}
      whyHeading="A Knowledge Base the Agent Actually Reads From"
      featureBlocks={[
        {
          eyebrow: "Live Document Sync",
          title: "Updates the Moment Your Docs Do",
          body: "Connected sources sync automatically, so a policy change is reflected in the next conversation.",
          checks: [
            "Syncs automatically with connected sources",
            "No manual re-training after a doc update",
            "Supports docs, help centers, and internal wikis",
          ],
        },
        {
          eyebrow: "Source-Grounded Answers",
          title: "Every Answer Traces Back to a Source",
          body: "Responses cite the specific document they came from, so nothing is invented.",
          checks: [
            "Every answer grounded in a real source",
            "Flags when no confident answer exists",
            "No hallucinated policies or pricing",
          ],
        },
        {
          eyebrow: "Full Visibility",
          title: "See Exactly What the Agent Knows",
          body: "Teams can browse, audit, and correct the knowledge base directly.",
          checks: [
            "Browse the full indexed knowledge base",
            "Correct or remove outdated content directly",
            "Track which sources get used most",
          ],
        },
      ]}
      useCasesHeading="Where Grounded Answers Matter Most"
      useCases={[
        { icon: <FileText className="h-4 w-4" />, tag: "Support", title: "Policy & FAQ Answers", body: "Answer policy questions with the exact current wording, every time." },
        { icon: <BookOpen className="h-4 w-4" />, tag: "Product", title: "Product Documentation Lookup", body: "Pull accurate technical detail straight from product docs." },
        { icon: <Library className="h-4 w-4" />, tag: "Internal", title: "Internal Wiki Grounding", body: "Ground answers in internal runbooks and SOPs, not public web content." },
        { icon: <ShieldCheck className="h-4 w-4" />, tag: "Compliance", title: "Regulated Answer Accuracy", body: "Ensure compliance-sensitive answers always match the approved current policy." },
        { icon: <Layers className="h-4 w-4" />, tag: "Multi-Source", title: "Multi-Source Knowledge Merge", body: "Combine multiple documentation sources into one coherent answer." },
        { icon: <Search className="h-4 w-4" />, tag: "Gaps", title: "Knowledge Gap Detection", body: "Surface the questions your knowledge base can't confidently answer yet." },
      ]}
      statsHeading="Numbers That Show Up in Answer Accuracy"
      stats={[
        { value: "Real-time", label: "Sync with connected knowledge sources" },
        { value: "0", label: "Manual re-training cycles after a doc update" },
        { value: "100%", label: "Answers traceable to a source" },
        { value: "-90%", label: "Outdated-answer complaints" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Zap className="h-4 w-4" />, title: "Actions Framework", tagline: "What happens after the answer." },
        { icon: <FlaskConical className="h-4 w-4" />, title: "AI Agent Simulator", tagline: "Where knowledge gets tested." },
      ]}
      ctaHeading="Ready for Answers Grounded in What You Actually Say?"
    />
  );
}
