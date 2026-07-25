import { requireSession } from "@/lib/auth";
import { listDepartments } from "@/lib/erp-api";
import { DepartmentTile } from "@/components/erp/DepartmentTile";

export default async function ErpDashboardPage() {
  const session = await requireSession();
  const departments = await listDepartments(session.token);

  return (
    <div>
      <h1 className="text-xl font-semibold tracking-tight mb-1">Departments</h1>
      <p className="text-sm text-muted-foreground mb-4">Choose a department to see its available agents.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((department) => (
          <DepartmentTile key={department.id} department={department} />
        ))}
      </div>
    </div>
  );
}
