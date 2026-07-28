import {
  BookOpen,
  Calendar,
  Database,
  Lock,
  MessageSquareOff,
  Package,
  Puzzle,
  Receipt,
  UserCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function ActionsFrameworkCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Actions Framework"
      headline="An Agent That Can Actually Do the Thing, Not Just Talk About It"
      subheadline="Connect the agent directly to your CRM, billing, and scheduling systems so it can issue a refund, update a record, or book an appointment — not just tell the customer to wait for someone who can."
      trustLine="Built for teams done routing every request to a human just to click a button"
      problemHeading="Why Conversation Alone Doesn't Resolve Anything"
      problems={[
        {
          icon: <MessageSquareOff className="h-5 w-5" />,
          title: "Agents That Can Only Talk Aren't That Useful",
          body: "A conversation that ends in 'let me transfer you' hasn't actually solved anything.",
        },
        {
          icon: <UserCheck className="h-5 w-5" />,
          title: "Every Action Still Needs a Human",
          body: "Even simple tasks like updating an address get routed to a rep just to click three buttons in a CRM.",
        },
        {
          icon: <Puzzle className="h-5 w-5" />,
          title: "Integrations Are Custom Engineering Work",
          body: "Connecting the agent to a new system usually means a bespoke integration project.",
        },
      ]}
      whyHeading="An Agent That Finishes What It Starts"
      featureBlocks={[
        {
          eyebrow: "Real System Actions",
          title: "Not Just Answers — Actual Changes",
          body: "The agent can update records, issue refunds, and book appointments directly in your systems.",
          checks: [
            "Executes real actions in connected systems",
            "No human click required for routine tasks",
            "Confirms every action back to the customer",
          ],
        },
        {
          eyebrow: "Pre-Built Connectors",
          title: "Plug Into What You Already Use",
          body: "Common CRMs, billing platforms, and scheduling tools connect without custom engineering.",
          checks: [
            "Pre-built connectors for common platforms",
            "Custom actions for anything else via API",
            "No bespoke integration project required",
          ],
        },
        {
          eyebrow: "Guardrailed Autonomy",
          title: "Powerful, But Only Within Limits You Set",
          body: "Every action respects limits and approval rules you define, so autonomy never means recklessness.",
          checks: [
            "Approval thresholds for higher-risk actions",
            "Full log of every action taken and why",
            "Instant disable for any single action type",
          ],
        },
      ]}
      useCasesHeading="Where Real Actions Replace a Handoff"
      useCases={[
        { icon: <Receipt className="h-4 w-4" />, tag: "Billing", title: "Refunds & Credits", body: "Process a straightforward refund without a human touching the ticket." },
        { icon: <Database className="h-4 w-4" />, tag: "CRM", title: "Record Updates", body: "Update contact details, preferences, or account status directly." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Scheduling", title: "Appointment Booking & Rescheduling", body: "Book, move, or cancel appointments in real time during the conversation." },
        { icon: <Package className="h-4 w-4" />, tag: "Orders", title: "Order Modifications", body: "Change or cancel an order without a manual back-office step." },
        { icon: <Lock className="h-4 w-4" />, tag: "Access", title: "Account & Access Changes", body: "Reset access or update account permissions on request." },
        { icon: <Workflow className="h-4 w-4" />, tag: "Custom", title: "Custom Workflow Actions", body: "Trigger any internal workflow your business already runs." },
      ]}
      statsHeading="Numbers That Show Up in Resolution, Not Just Conversation"
      stats={[
        { value: "0", label: "Human clicks for routine actions" },
        { value: "80%", label: "Requests resolved without a handoff" },
        { value: "<5s", label: "Average time to execute an action" },
        { value: "100%", label: "Actions logged for audit" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Wrench className="h-4 w-4" />, title: "AI Agent Studio", tagline: "Where actions get wired into flows." },
        { icon: <BookOpen className="h-4 w-4" />, title: "Knowledge Base", tagline: "What the agent knows before it acts." },
      ]}
      ctaHeading="Ready for an Agent That Finishes the Job?"
    />
  );
}
