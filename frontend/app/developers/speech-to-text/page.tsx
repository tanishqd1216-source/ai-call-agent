import {
  BarChart3,
  FileText,
  Globe,
  Mic,
  Puzzle,
  Terminal,
  Timer,
  Volume1,
  Volume2,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function SpeechToTextPage() {
  return (
    <AgentLandingPage
      eyebrow="Developers — Speech To Text"
      headline="Transcription Accurate Enough to Build a Business On"
      subheadline="Low-latency, high-accuracy speech recognition purpose-built for real-time conversation — with the option to bring your own model if you've already got one."
      trustLine="Built for the accuracy a live conversation actually demands"
      problemHeading="Why Generic Transcription Falls Apart on a Real Call"
      problems={[
        {
          icon: <Mic className="h-5 w-5" />,
          title: "Generic Transcription Wasn't Built for Live Conversation",
          body: "Most speech recognition is tuned for dictation, not the interruptions and cross-talk of a real conversation.",
        },
        {
          icon: <Timer className="h-5 w-5" />,
          title: "Latency Breaks the Illusion of a Real Conversation",
          body: "A half-second delay between speech and transcript is enough to make an agent feel noticeably robotic.",
        },
        {
          icon: <Volume1 className="h-5 w-5" />,
          title: "Accuracy Drops on Accents and Background Noise",
          body: "Real calls happen on noisy lines and in every accent, not a quiet studio recording.",
        },
      ]}
      whyHeading="Transcription Built for Real Calls, Not Studio Audio"
      featureBlocks={[
        {
          eyebrow: "Built for Real-Time",
          title: "Streams Transcription as Words Are Spoken",
          body: "Transcription streams continuously, keeping pace with a live conversation instead of processing after the fact.",
          checks: [
            "Streams transcription in real time, word by word",
            "Handles interruptions and overlapping speech",
            "Tuned specifically for conversational audio",
          ],
        },
        {
          eyebrow: "Accuracy Under Real Conditions",
          title: "Tuned for Noisy Lines and Every Accent",
          body: "Recognition is trained and tuned against real call conditions, not clean studio audio.",
          checks: [
            "Trained on real-world call audio, not studio recordings",
            "Handles background noise and accents robustly",
            "Continuously improves from production data",
          ],
        },
        {
          eyebrow: "Bring Your Own Model",
          title: "Use Ours, or Plug In Your Own",
          body: "Teams with an existing STT investment can bring their own model instead of switching entirely.",
          checks: [
            "Supports bringing your own STT model",
            "Swap providers without rebuilding your agent",
            "No lock-in to a single speech engine",
          ],
        },
      ]}
      useCasesHeading="Where Accurate Transcription Actually Matters"
      useCases={[
        { icon: <Mic className="h-4 w-4" />, tag: "Voice Agents", title: "Real-Time Conversation Transcription", body: "Power live voice agents with transcription that keeps up with natural speech." },
        { icon: <FileText className="h-4 w-4" />, tag: "QA", title: "Call Transcription for QA", body: "Generate accurate transcripts for every call, feeding downstream QA." },
        { icon: <Globe className="h-4 w-4" />, tag: "Multilingual", title: "Multilingual Recognition", body: "Transcribe accurately across the languages your customers actually speak." },
        { icon: <Volume1 className="h-4 w-4" />, tag: "Noisy Lines", title: "Noisy Environment Handling", body: "Maintain accuracy on mobile calls and background noise." },
        { icon: <Puzzle className="h-4 w-4" />, tag: "Custom Models", title: "Bring Your Own Model", body: "Plug in an existing STT investment instead of switching providers." },
        { icon: <BarChart3 className="h-4 w-4" />, tag: "Analytics", title: "Transcript-Driven Analytics", body: "Feed accurate transcripts directly into sentiment and reporting." },
      ]}
      statsHeading="Numbers That Show Up in Transcription Quality"
      stats={[
        { value: "<300ms", label: "Streaming transcription latency" },
        { value: "98%+", label: "Accuracy on real conversational audio" },
        { value: "BYO", label: "Model support for existing STT investments" },
        { value: "24/7", label: "Continuous accuracy improvement from production data" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Volume2 className="h-4 w-4" />, title: "Text To Speech", tagline: "What the agent sounds like." },
        { icon: <Terminal className="h-4 w-4" />, title: "Command Line Interface", tagline: "Where it all gets configured." },
      ]}
      ctaHeading="Ready for Transcription You Can Actually Trust?"
    />
  );
}
