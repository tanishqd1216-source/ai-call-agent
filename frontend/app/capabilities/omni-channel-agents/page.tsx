import {
  ArrowRightLeft,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  RotateCcw,
  Smartphone,
  Split,
  UserSquare2,
  Workflow,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  ChatBubble,
  FloatingSubCard,
  FlowConnector,
  FlowNode,
  HeroPanelFrame,
  PanelHeader,
  PanelShell,
} from "@/components/marketing/panels/HeroVisuals";

export default function OmniChannelAgentsCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Omni-Channel Agents"
      headline="One Agent, Every Channel, the Same Conversation"
      subheadline="Voice, chat, email, and social all run through the same agent with the same memory — so a conversation that starts on the phone can finish over chat without missing a beat."
      trustLine="Built for customers who don't think in channels, only in conversations"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Unified Conversation" status="4 channels · 1 agent" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <FlowNode icon={<Phone className="h-3.5 w-3.5" />} title="Voice" />
              <FlowNode icon={<MessageCircle className="h-3.5 w-3.5" />} title="WhatsApp" />
              <FlowNode icon={<Mail className="h-3.5 w-3.5" />} title="Email" />
              <FlowNode icon={<MessageSquare className="h-3.5 w-3.5" />} title="Chat" />
            </div>
            <FlowConnector label="merges into" />
            <ChatBubble from="agent" label="Same agent, same memory">
              Picking up where your call left off — here&apos;s your updated order status.
            </ChatBubble>
          </PanelShell>
          <FloatingSubCard position="top-right">
            <div className="text-[10px] text-muted-foreground">Context lost on switch</div>
            <div className="text-sm font-bold text-primary">0</div>
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Channels Usually Feel Like Separate Products"
      problems={[
        {
          icon: <Split className="h-5 w-5" />,
          title: "Every Channel Runs a Different Bot",
          body: "Voice, chat, and email often run on entirely separate systems that don't share context with each other.",
        },
        {
          icon: <RotateCcw className="h-5 w-5" />,
          title: "Switching Channels Means Starting Over",
          body: "A customer who moves from a call to a chat message has to explain the whole situation again.",
        },
        {
          icon: <Layers className="h-5 w-5" />,
          title: "Channel Silos Multiply the Work",
          body: "Every new channel means building, training, and maintaining an entirely separate flow.",
        },
      ]}
      whyHeading="Every Channel, Powered by the Same Agent"
      featureBlocks={[
        {
          eyebrow: "One Agent, Every Surface",
          title: "The Same Intelligence, Wherever the Customer Is",
          body: "A single agent definition powers voice, chat, email, and social, so behavior stays consistent everywhere.",
          checks: [
            "One configuration powers every channel",
            "Consistent tone and policy across all of them",
            "No separate build per channel",
          ],
        },
        {
          eyebrow: "Shared Context Across Channels",
          title: "Picks Up Exactly Where the Last Channel Left Off",
          body: "Conversation history and memory carry seamlessly from one channel to the next.",
          checks: [
            "Full context carries between channels instantly",
            "No repeating information after a channel switch",
            "Works mid-conversation, not just session to session",
          ],
        },
        {
          eyebrow: "Channel-Native Behavior",
          title: "Feels Right on Each Channel, Not Just Functional",
          body: "Response style and pacing adapt to what's natural for voice versus chat versus email.",
          checks: [
            "Adapts tone and length to each channel's norms",
            "Respects channel-specific etiquette automatically",
            "Same underlying logic, different delivery",
          ],
        },
      ]}
      useCasesHeading="Where One Agent Replaces a Patchwork of Bots"
      useCases={[
        { icon: <ArrowRightLeft className="h-4 w-4" />, tag: "Continuity", title: "Voice-to-Chat Handoff", body: "Let a customer continue a phone conversation over chat without repeating themselves." },
        { icon: <MessageCircle className="h-4 w-4" />, tag: "Social", title: "Social Media Response", body: "Handle public and direct social messages with the same agent and context." },
        { icon: <Mail className="h-4 w-4" />, tag: "Email", title: "Email Follow-Up Continuity", body: "Continue a conversation by email days after it started elsewhere." },
        { icon: <Smartphone className="h-4 w-4" />, tag: "Preference", title: "Channel-of-Choice Support", body: "Let customers choose their preferred channel without losing service quality." },
        { icon: <Layers className="h-4 w-4" />, tag: "Unified", title: "Unified Conversation History", body: "Give agents and supervisors one timeline across every channel a customer used." },
        { icon: <Workflow className="h-4 w-4" />, tag: "Efficiency", title: "Single Build, Every Channel", body: "Deploy one agent definition everywhere instead of maintaining channel-specific versions." },
      ]}
      statsHeading="Numbers That Show Up When Channels Actually Connect"
      stats={[
        { value: "1", label: "Agent definition across every channel" },
        { value: "0", label: "Context lost on a channel switch" },
        { value: "-60%", label: "Build effort vs. separate per-channel bots" },
        { value: "100%", label: "Conversation history unified across channels" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Globe className="h-4 w-4" />, title: "Multilingual", tagline: "Every channel, every language." },
        { icon: <UserSquare2 className="h-4 w-4" />, title: "Customer 360", tagline: "The record that travels with the conversation." },
      ]}
      ctaHeading="Ready for One Agent Across Every Channel?"
    />
  );
}
