import { getSession } from "@/lib/auth";
import { Sidebar } from "@/components/layout/Sidebar";

export default async function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar session={session} />
      <div className="flex-1 md:pl-64">
        <main className="px-6 py-6 max-w-6xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
