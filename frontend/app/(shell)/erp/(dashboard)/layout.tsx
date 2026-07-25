import { requireSession } from "@/lib/auth";

export default async function ErpDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireSession();

  return <>{children}</>;
}
