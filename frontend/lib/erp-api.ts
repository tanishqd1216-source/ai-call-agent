import { apiBaseUrl } from "@/lib/api";

export type ErpUser = { id: string; email: string; name: string | null };
export type ErpCompany = { id: string; name: string };

export type LoginResult =
  | { ok: true; token: string; user: ErpUser; company: ErpCompany }
  | { ok: false; error: string };

export type Department = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  agentCount: number;
};

export type Agent = {
  id: string;
  name: string;
  description: string | null;
};

export type DepartmentDetail = {
  id: string;
  name: string;
  slug: string;
  agents: Agent[];
};

export async function login(email: string, password: string): Promise<LoginResult> {
  const res = await fetch(`${apiBaseUrl()}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    return { ok: false, error: data.error ?? "Invalid email or password." };
  }
  return { ok: true, token: data.token, user: data.user, company: data.company };
}

export async function getMe(
  token: string,
): Promise<{ user: ErpUser; company: ErpCompany } | null> {
  const res = await fetch(`${apiBaseUrl()}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function logout(token: string): Promise<void> {
  await fetch(`${apiBaseUrl()}/api/auth/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function listDepartments(token: string): Promise<Department[]> {
  const res = await fetch(`${apiBaseUrl()}/api/departments`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to load departments (${res.status})`);
  return res.json();
}

export async function getDepartmentAgents(
  token: string,
  departmentId: string,
): Promise<DepartmentDetail | null> {
  const res = await fetch(`${apiBaseUrl()}/api/departments/${encodeURIComponent(departmentId)}/agents`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load department agents (${res.status})`);
  return res.json();
}
