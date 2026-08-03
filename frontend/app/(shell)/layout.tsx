import { getSession } from "@/lib/auth";
import { listDepartmentsWithAgents } from "@/lib/erp-api";
import { Sidebar } from "@/components/layout/Sidebar";

export default async function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const departments = session ? await listDepartmentsWithAgents(session.token) : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar session={session} departments={departments} />
      <div className="pt-16 md:pt-0 md:pl-72">
        <main className="px-6 py-6 max-w-6xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
