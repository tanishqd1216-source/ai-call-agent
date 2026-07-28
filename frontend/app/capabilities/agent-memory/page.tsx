import {
  ArrowRightLeft,
  ClipboardCheck,
  Eye,
  FileX,
  MessageCircleQuestion,
  Repeat,
  RotateCcw,
  Settings2,
  Smile,
  UserSquare2,
  Wrench,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function AgentMemoryCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Agent Memory"
      headline="An Agent That Remembers the Last Conversation, Not Just the Last Message"
      subheadline="Preferences, prior commitments, and how a conversation ended all carry forward automatically — so every follow-up picks up exactly where the last one left off."
      trustLine="Built so customers never have to say 'like I told you last time' again"
      problemHeading="Why Conversations Keep Starting From Zero"
      problems={[
        {
          icon: <RotateCcw className="h-5 w-5" />,
          title: "Every Conversation Starts From Scratch",
          body: "Without memory, an agent forgets a promise made five minutes after the call ends.",
        },
        {
          icon: <MessageCircleQuestion className="h-5 w-5" />,
          title: "Preferences Get Asked for Again and Again",
          body: "A customer who already said they prefer email gets asked their preferred channel every single time.",
        },
        {
          icon: <FileX className="h-5 w-5" />,
          title: "Commitments Get Lost Between Conversations",
          body: "A promised callback or follow-up has nowhere to live once the conversation ends.",
        },
      ]}
      whyHeading="Memory That Actually Carries the Relationship Forward"
      featureBlocks={[
        {
          eyebrow: "Persistent Memory",
          title: "Remembers What Was Said, Not Just What Was Logged",
          body: "Key facts, preferences, and commitments carry forward automatically into the next interaction.",
          checks: [
            "Retains preferences across every conversation",
            "Tracks open commitments until they're resolved",
            "No manual note-taking required",
          ],
        },
        {
          eyebrow: "Tone-Aware Continuity",
          title: "Picks Up the Relationship, Not Just the Ticket",
          body: "The agent remembers how a relationship has gone, not just what was said in the last transcript.",
          checks: [
            "Carries relationship context, not just facts",
            "Adjusts tone based on history",
            "Recognizes recurring issues automatically",
          ],
        },
        {
          eyebrow: "Controlled & Auditable",
          title: "Memory You Can See and Correct",
          body: "Every retained fact is visible and editable, so memory never becomes a black box.",
          checks: [
            "Every stored fact is visible and editable",
            "Customers can request memory be cleared",
            "Full audit trail of what's remembered and why",
          ],
        },
      ]}
      useCasesHeading="Where Memory Changes What a Follow-Up Feels Like"
      useCases={[
        { icon: <ArrowRightLeft className="h-4 w-4" />, tag: "Continuity", title: "Cross-Session Follow-Ups", body: "Resume a conversation days later without asking the customer to repeat anything." },
        { icon: <Settings2 className="h-4 w-4" />, tag: "Preferences", title: "Remembered Preferences", body: "Respect a stated channel or communication preference permanently." },
        { icon: <ClipboardCheck className="h-4 w-4" />, tag: "Commitments", title: "Open Commitment Tracking", body: "Keep a promised callback or follow-up alive until it's actually done." },
        { icon: <Smile className="h-4 w-4" />, tag: "Relationship", title: "Relationship-Aware Tone", body: "Adjust warmth and patience based on how the relationship has actually gone." },
        { icon: <Repeat className="h-4 w-4" />, tag: "Recurring", title: "Recurring Issue Recognition", body: "Recognize when the same problem is happening again, even months later." },
        { icon: <Eye className="h-4 w-4" />, tag: "Governance", title: "Memory Review & Correction", body: "Give supervisors a clear view into what the agent has retained about any account." },
      ]}
      statsHeading="Numbers That Show Up in Fewer Repeated Conversations"
      stats={[
        { value: "0", label: "Times a stated preference gets asked again" },
        { value: "100%", label: "Commitments tracked until resolved" },
        { value: "-35%", label: "Repeat contacts about the same issue" },
        { value: "Full", label: "Auditability of every retained fact" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <UserSquare2 className="h-4 w-4" />, title: "Customer 360", tagline: "The data memory draws from." },
        { icon: <Wrench className="h-4 w-4" />, title: "AI Agent Studio", tagline: "Where memory behavior gets configured." },
      ]}
      ctaHeading="Ready for an Agent That Actually Remembers?"
    />
  );
}
