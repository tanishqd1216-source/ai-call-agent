import {
  BarChart3,
  ClipboardCheck,
  Crosshair,
  Hourglass,
  ListTree,
  MessageSquareText,
  Percent,
  ShieldCheck,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  FloatingSubCard,
  PanelHeader,
  StatTile,
  ScoreBadge,
  ChecklistItem,
} from "@/components/marketing/panels/HeroVisuals";

export default function AgentPerformanceUseCasePage() {
  return (
    <AgentLandingPage
      eyebrow="Use Case — Agent Performance"
      headline="Turn Every Call Into a Coaching Opportunity"
      subheadline="Score every conversation against your own rubric automatically, and hand coaches the exact moment to talk about — not just a number on a scorecard."
      trustLine="Built for teams who QA 2% of calls and coach on guesswork for the rest"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Agent Scorecard · Auto-QA" status="Live" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatTile value="94" label="QA score / 100" />
              <StatTile value="6m 40s" label="Avg handle time" />
              <StatTile value="4.7 / 5" label="CSAT" />
              <StatTile value="88%" label="First-call resolution" />
            </div>
            <div className="mt-4">
              <ScoreBadge value="Top 10%" label="Vs. team this week" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ChecklistItem label="Coaching moment flagged" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Most QA Programs Miss Almost Everything"
      problems={[
        {
          icon: <Percent className="h-5 w-5" />,
          title: "Manual QA Only Reviews a Sliver of Calls",
          body: "Reviewers can realistically sample a couple percent of conversations, so most performance goes unmeasured entirely.",
        },
        {
          icon: <Hourglass className="h-5 w-5" />,
          title: "Feedback Arrives Weeks After the Call",
          body: "By the time a review reaches a rep, they've already repeated the same mistake dozens of times.",
        },
        {
          icon: <Percent className="h-5 w-5" />,
          title: "Averages Hide Who's Actually Struggling",
          body: "Team-level metrics like average handle time look fine even when specific reps are quietly falling behind.",
        },
      ]}
      whyHeading="Performance Coaching Built on Every Call, Not a Sample"
      featureBlocks={[
        {
          eyebrow: "100% Coverage",
          title: "Every Call Scored, Not a Sample",
          body: "The same rubric your QA team already uses gets applied automatically to every single conversation.",
          checks: [
            "Scores 100% of calls against your rubric",
            "Applies the same standard across every rep",
            "Runs the moment a call ends, not weeks later",
          ],
        },
        {
          eyebrow: "Moment-Level Coaching",
          title: "Points to the Exact Moment, Not Just a Score",
          body: "Coaches get the specific exchange that earned or lost points, so feedback is concrete instead of generic.",
          checks: [
            "Timestamps the exact moment behind a score",
            "Explains why a call scored the way it did",
            "Groups recurring coaching moments across calls",
          ],
        },
        {
          eyebrow: "Fair Benchmarking",
          title: "Compares Reps Against Real Top Performers",
          body: "Benchmarks are built from your own best conversations, not an arbitrary industry average.",
          checks: [
            "Benchmarks against your own top performers",
            "Adjusts for call difficulty and call type",
            "Tracks ramp speed for every new hire",
          ],
        },
      ]}
      useCasesHeading="Where Performance Scoring Changes Coaching"
      useCases={[
        { icon: <ClipboardCheck className="h-4 w-4" />, tag: "QA", title: "Automated QA Scoring", body: "Apply your existing rubric to every call automatically, with nothing left unreviewed." },
        { icon: <ShieldCheck className="h-4 w-4" />, tag: "Compliance", title: "Script & Compliance Adherence", body: "Confirm required disclosures and steps were actually said, every time." },
        { icon: <Crosshair className="h-4 w-4" />, tag: "Coaching", title: "Coaching Moment Flagging", body: "Surface the exact exchange a manager should review in a 1:1, ready to go." },
        { icon: <TrendingUp className="h-4 w-4" />, tag: "Ramp", title: "New-Rep Ramp Tracking", body: "See exactly how fast a new hire is closing the gap to your best performers." },
        { icon: <Trophy className="h-4 w-4" />, tag: "Recognition", title: "Team Leaderboards", body: "Recognize top performers using the same objective scoring across the whole team." },
        { icon: <ListTree className="h-4 w-4" />, tag: "Analysis", title: "Call-Driver Analysis", body: "Understand which behaviors actually correlate with a great outcome." },
      ]}
      statsHeading="Numbers That Show Up in Coaching, Not Just Reports"
      stats={[
        { value: "100%", label: "Calls scored, not 2% sampled" },
        { value: "5x", label: "More coaching moments surfaced" },
        { value: "-80%", label: "Time from call to feedback" },
        { value: "+30%", label: "Faster new-rep ramp time" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <BarChart3 className="h-4 w-4" />, title: "Sentiment Analysis", tagline: "How customers felt on those calls." },
        { icon: <MessageSquareText className="h-4 w-4" />, title: "Voice Of Customer", tagline: "What good calls have in common." },
      ]}
      ctaHeading="Ready to Coach on Every Call, Not Just a Sample?"
    />
  );
}
