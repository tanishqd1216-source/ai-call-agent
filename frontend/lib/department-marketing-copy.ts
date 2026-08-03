// Short blurbs reused from the marketing site's header nav (lib/marketing-nav-data.ts
// category descriptions — the same copy shown in the public "Use Cases" /
// "Capabilities" menus), keyed by department slug instead of nav item name, for
// the one-line description shown above an agent's launch console.
const DEPARTMENT_DESCRIPTIONS: Record<string, string> = {
  sales: "Qualify, convert, and onboard customers faster with agents that never drop a lead.",
  "customer-support":
    "Handle incoming requests, catch issues before they escalate, and follow up on what's owed.",
  "billing-collections":
    "Handle incoming requests, catch issues before they escalate, and follow up on what's owed.",
  onboarding: "Qualify, convert, and onboard customers faster with agents that never drop a lead.",
  marketing: "Run campaigns and support conversations in any language, across every channel your customers use.",
};

const DEFAULT_AGENT_DESCRIPTION =
  "Carries the conversation — following the right steps, updating your systems, and completing the workflow end to end.";

export function getDepartmentDescription(slug: string): string {
  return DEPARTMENT_DESCRIPTIONS[slug] ?? DEFAULT_AGENT_DESCRIPTION;
}
