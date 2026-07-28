import {
  BarChart3,
  Brain,
  ClipboardList,
  Database,
  FileCheck,
  FileSpreadsheet,
  Gauge,
  Hourglass,
  LayoutDashboard,
  Settings2,
  TrendingUp,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function ReportingAnalyticsCapabilityPage() {
  return (
    <AgentLandingPage
      eyebrow="Capability — Reporting & Analytics"
      headline="See Exactly What's Happening, Without Waiting for a Weekly Report"
      subheadline="Every conversation, outcome, and handoff rolls up into live dashboards — so you know how the agent is performing today, not after next Monday's standup."
      trustLine="Built for teams who make decisions on this week's data, not last quarter's"
      problemHeading="Why Reporting Usually Lags Behind Reality"
      problems={[
        {
          icon: <Hourglass className="h-5 w-5" />,
          title: "Reports Are Always a Week Behind",
          body: "By the time a weekly report lands, the problem it describes has already been happening for days.",
        },
        {
          icon: <FileSpreadsheet className="h-5 w-5" />,
          title: "Every Team Builds Its Own Spreadsheet",
          body: "Support, sales, and leadership each track different numbers pulled from different exports, so nobody agrees on the real total.",
        },
        {
          icon: <Gauge className="h-5 w-5" />,
          title: "Metrics Without Context Don't Drive Action",
          body: "A number moving up or down means little without the conversations behind it to explain why.",
        },
      ]}
      whyHeading="Reporting Built to Move at the Speed of the Conversation"
      featureBlocks={[
        {
          eyebrow: "Live by Default",
          title: "Dashboards That Update as Calls Happen",
          body: "Every metric reflects what's happening right now, not a nightly batch job.",
          checks: [
            "Updates in real time as conversations happen",
            "No overnight processing delay",
            "One shared source of truth for every team",
          ],
        },
        {
          eyebrow: "Built for Every Team",
          title: "The Same Data, Cut However You Need It",
          body: "Leadership, ops, and frontline managers all work from the same underlying data, filtered to what matters to them.",
          checks: [
            "Custom views per team or role",
            "Drill down from a KPI to the actual conversation",
            "Exports cleanly into your existing BI stack",
          ],
        },
        {
          eyebrow: "Context-Rich Metrics",
          title: "Every Number Links Back to Real Conversations",
          body: "Click through any trend line straight to the transcripts driving it — no separate lookup required.",
          checks: [
            "Every metric links to underlying conversations",
            "Explains spikes and dips, not just reports them",
            "Custom KPIs beyond the defaults",
          ],
        },
      ]}
      useCasesHeading="Where Live Reporting Changes How Teams Work"
      useCases={[
        { icon: <LayoutDashboard className="h-4 w-4" />, tag: "Executive", title: "Leadership Dashboards", body: "Give leadership a single live view of volume, outcomes, and cost without a manual roll-up." },
        { icon: <ClipboardList className="h-4 w-4" />, tag: "Ops", title: "Daily Operations Reporting", body: "Track queue health and resolution rates throughout the day, not just at the end of it." },
        { icon: <Settings2 className="h-4 w-4" />, tag: "Custom", title: "Custom KPI Tracking", body: "Define the exact metrics that matter to your business, beyond the defaults." },
        { icon: <Database className="h-4 w-4" />, tag: "Export", title: "BI & Data Warehouse Export", body: "Push clean, structured data into the analytics stack your team already trusts." },
        { icon: <TrendingUp className="h-4 w-4" />, tag: "Trend", title: "Trend & Anomaly Detection", body: "Get flagged automatically when a metric moves outside its normal range." },
        { icon: <FileCheck className="h-4 w-4" />, tag: "Audit", title: "Compliance & Audit Reporting", body: "Generate the exact records auditors ask for, without a manual export scramble." },
      ]}
      statsHeading="Numbers That Update as Fast as You Need Them To"
      stats={[
        { value: "Real-time", label: "Dashboard refresh, not nightly batches" },
        { value: "100%", label: "Conversations reflected in reporting" },
        { value: "-90%", label: "Time spent building manual reports" },
        { value: "1", label: "Shared source of truth across teams" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <BarChart3 className="h-4 w-4" />, title: "Customer 360", tagline: "The full record behind every number." },
        { icon: <Brain className="h-4 w-4" />, title: "Agent Memory", tagline: "Context carried between reports and conversations." },
      ]}
      ctaHeading="Ready to See What's Actually Happening Today?"
    />
  );
}
