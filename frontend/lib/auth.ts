// RBAC scaffolding for a future multi-user phase. There is only one
// operator today, so this returns a fixed admin session rather than reading
// any real auth state — a real login flow slots in here later without
// changing how callers consume getCurrentUser()/hasRole().

export type Role = "admin" | "supervisor" | "agent";

export type Session = {
  name: string;
  role: Role;
};

export function getCurrentUser(): Session {
  return { name: "Operator", role: "admin" };
}

export function hasRole(session: Session, allowed: Role[]): boolean {
  return allowed.includes(session.role);
}
