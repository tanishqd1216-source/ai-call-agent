import {
  ArrowDown,
  Ear,
  Globe,
  Mic,
  MessageCircle,
  Palette,
  Puzzle,
  Speaker,
  Terminal,
  Timer,
  Volume2,
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

const TTS_WAVEFORM_HEIGHTS = [10, 18, 24, 14, 28, 16, 22, 12, 20, 8, 26, 14, 18, 10, 24, 16];

export default function TextToSpeechPage() {
  return (
    <AgentLandingPage
      eyebrow="Developers — Text To Speech"
      headline="A Voice That Doesn't Sound Like It's Reading a Script"
      subheadline="Natural, low-latency speech synthesis that keeps a conversation feeling human — with custom voice and brand tone options when you need them."
      trustLine="Built so customers forget they're talking to software"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Speech Synthesis" status="Generating" />
            <ChatBubble from="agent" label="Input text">
              &ldquo;Your appointment is confirmed for 4:30 PM tomorrow.&rdquo;
            </ChatBubble>
            <div className="mt-3 flex items-center justify-center">
              <ArrowDown className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-1 flex h-12 items-end gap-[3px]">
              {TTS_WAVEFORM_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-primary/40"}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatTile value="<200ms" label="Time to first audio byte" />
              <StatTile value="30+" label="Languages supported" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ScoreBadge value="Custom" label="Brand voice" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Synthetic Speech Usually Gives Itself Away"
      problems={[
        {
          icon: <Speaker className="h-5 w-5" />,
          title: "Synthetic Voices Still Sound Synthetic",
          body: "Robotic pacing and flat intonation are usually the first thing that gives an AI agent away.",
        },
        {
          icon: <Timer className="h-5 w-5" />,
          title: "Latency Kills the Illusion of a Real Reply",
          body: "A noticeable pause before the agent responds breaks the rhythm of a natural conversation.",
        },
        {
          icon: <Palette className="h-5 w-5" />,
          title: "One Generic Voice Doesn't Fit Every Brand",
          body: "A default voice that sounds the same for every business doesn't reinforce anyone's brand identity.",
        },
      ]}
      whyHeading="Speech That Sounds Like a Person, Not a Script"
      featureBlocks={[
        {
          eyebrow: "Natural by Default",
          title: "Pacing and Intonation That Sound Human",
          body: "Speech synthesis is tuned for natural conversational rhythm, not flat text-to-speech recitation.",
          checks: [
            "Natural pacing, emphasis, and intonation",
            "Handles interruptions and mid-sentence changes",
            "Sounds conversational, not read aloud",
          ],
        },
        {
          eyebrow: "Real-Time Generation",
          title: "Speaks as Fast as the Agent Thinks",
          body: "Speech generates with low enough latency to keep a live conversation feeling responsive.",
          checks: [
            "Low-latency streaming speech generation",
            "Keeps pace with real-time conversation",
            "No noticeable pause before a reply",
          ],
        },
        {
          eyebrow: "Custom Voice & Brand Tone",
          title: "A Voice That's Actually Yours",
          body: "Choose or build a voice that matches your brand instead of a generic default.",
          checks: [
            "Choose from a range of natural voice options",
            "Build a custom voice for your brand",
            "Bring your own TTS voice if you already have one",
          ],
        },
      ]}
      useCasesHeading="Where Natural Speech Output Matters Most"
      useCases={[
        { icon: <MessageCircle className="h-4 w-4" />, tag: "Voice Agents", title: "Natural Conversational Speech", body: "Power live voice agents with speech that sounds genuinely conversational." },
        { icon: <Palette className="h-4 w-4" />, tag: "Branding", title: "Custom Brand Voice", body: "Give your agent a voice that's recognizably yours." },
        { icon: <Globe className="h-4 w-4" />, tag: "Multilingual", title: "Multilingual Speech Output", body: "Speak naturally across every language your customers use." },
        { icon: <Volume2 className="h-4 w-4" />, tag: "IVR", title: "IVR & Announcements", body: "Replace robotic IVR prompts with natural-sounding speech." },
        { icon: <Puzzle className="h-4 w-4" />, tag: "Custom Voice", title: "Bring Your Own Voice", body: "Plug in an existing TTS voice instead of starting from scratch." },
        { icon: <Ear className="h-4 w-4" />, tag: "Accessibility", title: "Accessible Audio Output", body: "Generate clear, natural audio for accessibility use cases." },
      ]}
      statsHeading="Numbers That Show Up in How Natural It Sounds"
      stats={[
        { value: "<200ms", label: "Time to first audio byte" },
        { value: "Natural", label: "Pacing and intonation by default" },
        { value: "Custom", label: "Brand voice options available" },
        { value: "BYO", label: "Voice support for existing TTS investments" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Mic className="h-4 w-4" />, title: "Speech To Text", tagline: "What the agent hears." },
        { icon: <Terminal className="h-4 w-4" />, title: "Command Line Interface", tagline: "Where it all gets configured." },
      ]}
      ctaHeading="Ready for a Voice That Doesn't Sound Synthetic?"
    />
  );
}
