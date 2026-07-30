import {
  AlertTriangle,
  Building2,
  Calendar,
  CreditCard,
  EarOff,
  Gauge,
  Headphones,
  Mic,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  ChatBubble,
  FloatingSubCard,
  HeroPanelFrame,
  PanelHeader,
  PanelShell,
  ScoreBadge,
  StatTile,
} from "@/components/marketing/panels/HeroVisuals";

export default function VoiceAiAgentPage() {
  return (
    <AgentLandingPage
      eyebrow="Voice AI Agent"
      headline="Answer Every Call Like Your Best Rep Would"
      subheadline="Deploy a real-time voice agent that handles support, sales, and bookings with natural, low-latency conversation — no scripts, no hold music."
      trustLine="Built for teams who can't afford a dropped call"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Live Call" status="00:42" />
            <div className="mt-4 space-y-3">
              <ChatBubble from="user">Hey, I need to reschedule my appointment for tomorrow.</ChatBubble>
              <ChatBubble from="agent">Sure — I have 2:00 PM or 4:30 PM open. Which works?</ChatBubble>
              <ChatBubble from="user">4:30 works great, thanks.</ChatBubble>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <StatTile value="<800ms" label="Response latency" />
              <StatTile value="90%+" label="Resolved without a human" />
              <StatTile value="+55%" label="CSAT improvement" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ScoreBadge value="Positive" label="Live sentiment" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Most Voice Bots Feel Robotic"
      problems={[
        {
          icon: <AlertTriangle className="h-5 w-5" />,
          title: "Rigid, One-Size Scripts",
          body: "Most voice bots can't adapt tone, language, or pacing to your brand — callers end up stuck in a maze of menus instead of a conversation.",
        },
        {
          icon: <Gauge className="h-5 w-5" />,
          title: "Latency Kills the Illusion",
          body: "A half-second of dead air is enough to break the spell. Legacy speech pipelines can't keep up with how people actually talk.",
        },
        {
          icon: <EarOff className="h-5 w-5" />,
          title: "No Read on the Room",
          body: "Without emotional intelligence, agents miss frustration, urgency, or hesitation — and respond the same flat way every time.",
        },
      ]}
      whyHeading="Voice AI That Actually Listens"
      featureBlocks={[
        {
          eyebrow: "Real-Time Conversation",
          title: "Speak Naturally, Get Answered Naturally",
          body: "Ultra-low-latency speech-to-speech that understands interruptions, tone, and intent — so the call feels like a call, not a queue.",
          checks: [
            "Sub-second response latency",
            "Handles interruptions and overlapping speech",
            "Live sentiment and intent tracking",
            "Enterprise-grade security by default",
          ],
        },
        {
          eyebrow: "Your Brand, Your Voice",
          title: "Sounds Like You, Not a Bot",
          body: "Fine-tune the voice by department, market, and tone so every caller hears something that's unmistakably yours.",
          checks: ["Custom voice per department or brand", "20+ languages and regional accents", "Tunable tone and pacing"],
        },
        {
          eyebrow: "Scales With You",
          title: "From First Call to a Thousand",
          body: "Go from pilot to production without re-architecting — the same agent handles one line or a hundred.",
          checks: [
            "Hundreds of concurrent calls per node",
            "Auto-scaling, multi-tenant by design",
            "Live in weeks, not quarters",
            "Human handoff whenever it's needed",
          ],
        },
      ]}
      useCasesHeading="Built for Every High-Volume Voice Use Case"
      useCases={[
        { icon: <Headphones className="h-4 w-4" />, tag: "Support", title: "Support & Resolution", body: "Handle high-volume support calls end to end — questions, follow-ups, and everything in between." },
        { icon: <TrendingUp className="h-4 w-4" />, tag: "Sales", title: "Sales & Qualification", body: "Engage every lead instantly, qualify with precision, and route hot conversations to your team." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Scheduling", title: "Bookings & Reservations", body: "Let customers book, reschedule, and get reminders through a natural voice conversation." },
        { icon: <Stethoscope className="h-4 w-4" />, tag: "Healthcare", title: "Patient Support", body: "Voice-based triage, appointment reminders, and follow-ups — compliant and empathetic." },
        { icon: <ShieldCheck className="h-4 w-4" />, tag: "Compliance", title: "Identity Verification", body: "Automate secure, voice-based identity checks that hold up to audit." },
        { icon: <CreditCard className="h-4 w-4" />, tag: "Finance", title: "Payments & Reminders", body: "Send polite, personalized payment nudges that adapt to how the customer responds." },
      ]}
      statsHeading="Performance Metrics That Show Up in the P&L"
      stats={[
        { value: "<800ms", label: "Response latency" },
        { value: "90%+", label: "Resolved without a human" },
        { value: "Up to 60%", label: "Cost reduction" },
        { value: "+55%", label: "CSAT improvement" },
      ]}
      relatedHeading="AI Voice Agents for Every Need"
      relatedItems={[
        { icon: <Mic className="h-4 w-4" />, title: "Brand Voice Agent", tagline: "Your brand. Your voice. In real time." },
        { icon: <Headphones className="h-4 w-4" />, title: "Support Resolution Agent", tagline: "Support that actually sounds human." },
        { icon: <TrendingUp className="h-4 w-4" />, title: "Sales & Revenue Agent", tagline: "Conversations that convert." },
        { icon: <Building2 className="h-4 w-4" />, title: "Enterprise Operations Agent", tagline: "Fast, secure, and always on-brand." },
        { icon: <Sparkles className="h-4 w-4" />, title: "Personalization Agent", tagline: "Every conversation, tailored." },
        { icon: <ShieldCheck className="h-4 w-4" />, title: "Trust & Security Agent", tagline: "Built for trust at scale." },
      ]}
      ctaHeading="Ready to Never Miss Another Call?"
    />
  );
}
