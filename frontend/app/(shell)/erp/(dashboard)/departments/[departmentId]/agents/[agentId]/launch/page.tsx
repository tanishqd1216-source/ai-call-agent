import { notFound } from "next/navigation";
import Link from "next/link";
import { requireSession } from "@/lib/auth";
import { getDepartmentAgents } from "@/lib/erp-api";
import { LaunchFrame } from "@/components/erp/LaunchFrame";

export default async function AgentLaunchPage({
  params,
}: {
  params: Promise<{ departmentId: string; agentId: string }>;
}) {
  const { departmentId, agentId } = await params;
  const session = await requireSession();
  const department = await getDepartmentAgents(session.token, departmentId);
  const agent = department?.agents.find((a) => a.id === agentId);

  if (!department || !agent) {
    notFound();
  }

  return (
    // Breaks out of the shell layout's padded/max-width <main> so the console
    // fills the entire viewport below the (fixed) top nav bar.
    <LaunchFrame>
      <Link
        href="/erp"
        aria-label={`Back to ${department.name}`}
        title={`Back to ${department.name}`}
        className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80"
      >
        ←
      </Link>

      {/* Same-origin path, proxied to WEBCALL_URL by next.config.ts's rewrites —
          avoids opening a new tab and avoids the mixed-content block an HTTPS
          tunnel would hit embedding a raw http:// URL directly. */}
      <iframe
        src={agent.launchUrl ?? "/webcall"}
        title={agent.name}
        allow="microphone; autoplay"
        className="w-full h-full border-0"
      />
    </LaunchFrame>
  );
}
