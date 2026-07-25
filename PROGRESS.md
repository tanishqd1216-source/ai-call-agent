# Vetic Voice Agent Dashboard — Progress Log

Standing mission: build the persistence + dashboard layer the Vetic Voice Agent
(`C:\Users\hp\Documents\claude_WO_API\livekit_agent`) has always been missing,
per `C:\Users\hp\Downloads\ai-call-agent-build-goal.md`. **Wrap, don't
replace**: `agent.py`/`agent_inbound.py` stay exactly as they are — they
already satisfy the #1 priority (correctness), backed by real bug fixes. This
repo is the missing piece: real call-history persistence, a proper dashboard,
structured logging. Telephony stays LiveKit's existing browser calling for
now; a Twilio swap is explicitly deferred, a deliberate deviation from the
goal doc's literal tech table. See the approved plan for full context.

Log state here at the end of every work block so a new session can resume
without re-discovering everything (same convention as `livekit_agent`'s log).

---

## 2026-07-25 — Session: M0 scaffolding, backend + frontend built and verified end-to-end

**Repo created**: `C:\Users\hp\ai-call-agent`, git initialized, local identity
`Rajat Tiwari <rajat.tiwari@vetic.in>` (no global git identity exists on this
machine).

**Backend** (`backend/`): Express 5 + TypeScript, Prisma 7 (SQLite for dev,
schema written Postgres-safe). Routes: `POST /api/events` (ingestion —
upserts `Call`, appends `CallTurn` for turn events, `CallEvent` for
start/phase-change/end/error), `GET /api/calls` (filterable history),
`GET /api/calls/:callId` (detail + turns + events), `GET /api/calls/stats`
(aggregates). Zod validation on all inputs, pino structured logging, Vitest
(8 passing tests on the zod schemas). **Verified with real requests**: booted
the server, POSTed a full call_started → turn → call_ended sequence, confirmed
rows landed in SQLite and all three read endpoints returned correct data.

**Frontend** (`frontend/`): Next.js 16 (App Router, Turbopack) + Tailwind +
TypeScript. Dashboard page (stat cards, filter form, call history table,
loading/error states), call detail page (summary + merged turn/event
timeline, 404 handling). RBAC scaffolding stub (`lib/auth.ts` — fixed
single-admin session, no real login yet, matches the confirmed scope cut).
Links out to the existing `webcall_server.py` console (`localhost:8080`) for
actually placing/monitoring a live call rather than reimplementing call
control. **Verified**: `next build` clean, `next start` + curl against a real
running backend confirmed the dashboard renders real call data (stats,
table row, detail timeline) and the 404 path works.

**Notable environment/version findings, not yet fully resolved:**
- **`better-sqlite3` can't be installed here** — needs node-gyp/Visual Studio
  Build Tools, not present on this machine. Used `@prisma/adapter-libsql`
  instead (SQLite-compatible, no native compilation, works identically for
  local dev). **This changes the Postgres-migration story from the goal
  doc's assumption**: Prisma 7 requires an explicit driver adapter per
  database (`@prisma/adapter-pg` + `pg` for Postgres), so moving off SQLite
  later is a small code change (swap the adapter + `datasource provider`),
  not a pure env-var/config change as originally assumed.
- Stack turned out to be considerably newer than expected: Next.js 16.2.11,
  Prisma 7.9.0 (new driver-adapter architecture, `prisma.config.ts` instead
  of schema-embedded URLs), Express 5, React 19, TypeScript 7. Next's
  scaffolded `AGENTS.md` correctly warned APIs would differ from training
  data — confirmed true for both Prisma's client instantiation (adapter now
  required) and Next's error boundary API (`unstable_retry`, not `reset`).
- Known, unaddressed `npm audit` findings: Prisma's dev-tooling deps
  (`find-my-way`, `valibot` — moderate/high) and Next's `sharp`/libvips
  chain (high) both only resolve via a breaking downgrade per `npm audit
  fix --force`'s own suggestion (would install a pre-release Prisma 7.9
  dev build, or Next 9.3.3). Left alone deliberately; revisit when real
  fixes (not breaking downgrades) are available.

**Not yet done (explicitly out of scope this session):**
- **M1 — the one planned touch to `livekit_agent/`**: no `event_reporter.py`
  exists yet, and `agent.py`/`agent_inbound.py` are completely untouched. All
  verification above used hand-curled test events, not a real call. This is
  the next milestone and needs its own care (additive-only, then re-run the
  Python stress-test suites to prove zero regression).
- Hosting, Sentry/Better Stack, and the Twilio question all remain deferred
  per the plan's M5 boundary — not needed for this phase's Definition of Done.

**Next steps:**
1. M1: add `event_reporter.py` to `livekit_agent/`, wire the handful of call
   sites into `agent.py`/`agent_inbound.py` (call start, per-turn metrics,
   call end/resolution) — no prompt/business-logic changes. Generate an
   outbound `call_id` (outbound currently has none, unlike inbound's
   `web-call-<uuid>` pattern).
2. Re-run `tests/run_stress_test.py` / `run_stress_test_inbound.py` in
   `livekit_agent/` post-instrumentation to confirm no regression.
3. M2: expand backend test coverage (ingestion validation edge cases, stats
   aggregation) now that real event shapes from M1 exist.
4. M4: place one real end-to-end browser call and confirm it flows through
   to this dashboard correctly.

---

## 2026-07-25 — Session: ERP access flow (login/company/departments/agents) + dashboard restyle

Per `C:\Users\hp\Downloads\erp-interface-conversion-prompt.md`: the calling-agent page
(`webcall.html`, in `livekit_agent/`) should no longer be the app's entry point — it should sit
behind a login → company-verification → department dashboard → agent picker flow. Built entirely
inside this repo (matches the prompt's own Next.js/Express/SQLite tech stack note), under a new
`/erp/*` route namespace so the existing call-history dashboard at `/` stays untouched.

**Backend** (`backend/`): added `Company`, `User`, `Session`, `Department`, `Agent` Prisma models
(migration `20260725121606_add_erp_auth_and_org`), all Postgres-safe (`cuid()` ids, `@@index`,
same conventions as the existing `Call`/`CallTurn`/`CallEvent` models). Added `bcryptjs` (pure JS,
deliberately not `bcrypt` — this repo already hit one native-module wall this project with
`better-sqlite3`, no point risking a second). New `backend/prisma/seed.ts` (idempotent, wired via
`prisma.config.ts`'s `migrations.seed`) creates one test company ("Vetic Demo Clinic"), one test
user (`operator@vetic.in` / `ChangeMe123!`, printed to stdout on seed, not hardcoded elsewhere),
and three departments (Sales, HR, Customer Support) with agents under each — Customer Support gets
exactly "Inbound Support Agent" and "Refund Agent" per the spec. New routes: `POST /api/auth/login`,
`POST /api/auth/logout`, `GET /api/auth/me` (opaque bearer-token sessions backed by a `Session`
table, not JWT — trivial revocation, no key management), `GET /api/departments`,
`GET /api/departments/:id/agents` (auth-gated, resolves each agent's `launchUrl` against a
`WEBCALL_URL` env var fallback so Launch buttons point at the real webcall console/ngrok URL, not
a hardcoded localhost). Added `passwords.test.ts` (hash/verify roundtrip). All 11 backend tests
pass; `tsc --noEmit` clean.

**Frontend** (`frontend/`): this Next.js version (16.2.11) renames `middleware.ts` to `proxy.ts`
(confirmed against the vendored docs in `node_modules/next/dist/docs` — a real, version-specific
breaking change, exactly what `frontend/AGENTS.md` warns about) — used `proxy.ts` for an
optimistic cookie-presence redirect, with the authoritative check (`requireSession()` in
`lib/auth.ts`, fully rewritten from its old hardcoded single-admin stub) inside the
`/erp/(dashboard)/layout.tsx` route-group layout. New pages: `/erp/login` (Server Action +
`useActionState` form, inline error on bad credentials, no crash/blank page), `/erp` (department
tile grid, purely data-driven — adding a department is a DB row, not a code change),
`/erp/departments/[departmentId]` (agent list, each "Launch" a plain `target="_blank"` link,
same pattern the dashboard already used for the webcall console link — no iframe). Company name
shown prominently in the dashboard layout's header per the spec.

**Also gave the existing call-history dashboard (`/`, `/calls/[callId]`) a real visual identity**
(previously default Next.js starter styling, `Arial` font override bug in `globals.css` despite
Geist being loaded) — added proper `@theme` color tokens (primary indigo, semantic status colors,
light/dark surface tones), restyled `StatCard`/`StatusBadge`/`FilterBar`/`CallsTable`, the root
header, and the call-detail page. Shared the same theme tokens with the new `/erp/*` pages since
it's the same Next.js app/Tailwind config, rather than building two inconsistent visual systems.

**Verified end-to-end:** full curl sequence against the backend (login success/failure, `/me`
gated correctly, departments/agents list correctly, logout invalidates the token) and against the
frontend (unauth `/erp` → 307 to `/erp/login`; authed → company name + department tiles render;
Customer Support → both agents with `launchUrl` resolved to the webcall console; `/erp/login`
redirects away when already authed; `/` unaffected). `next build` clean both before and after the
ERP routes were added.

**One nuance worth knowing:** a *stale/expired* session (cookie present but the token was revoked
server-side) doesn't get a clean HTTP 307 from `requireSession()` — Next's streaming SSR means the
outer shell can start streaming before the nested layout's `redirect()` throws, so it falls back
to embedding a client-side/meta-refresh redirect instruction instead (confirmed this is *not*
dev-mode-only; reproduced the same behavior against a production `next build && next start`).
Functionally correct in a real browser (the client router acts on it immediately), just not
curl-observable as a raw 307 the way the "no cookie at all" case is (which the `proxy.ts`
optimistic check still handles as a clean 307).

**Security finding, pre-existing, unrelated to this session's changes (flagged, not fixed — lives
in a different project):** `webcall_server.py`'s `GET /api/config` returns raw provider secrets
(LiveKit, Sarvam, Anthropic API keys) in the response body; the client only filters which fields
it *displays*, not what the server *sends*. Noted in `livekit_agent/PROGRESS.md` too.

**Not done / explicitly deferred:** no automated browser test of the login form's actual Server
Action POST (verified the underlying `login()`/`setSessionCookie()` calls it depends on directly
instead, since no browser tool was available this session) — a real manual login-form submission
in a browser is still worth doing once someone's at a keyboard.

**Update, same day:** the above gap was closed later this session — installed Playwright +
Chromium into a scratch dir and drove the actual login form (real cookie-free browser context,
real click/fill/submit) end-to-end, both against `localhost:3000` and through the ngrok tunnel.
Zero console errors other than the expected dev-mode HMR websocket failure over ngrok.

**Follow-up, same day: `/` now redirects into the ERP flow.** The user pointed out that visiting
the app should land on login, matching the original conversion prompt's "first screen" requirement
— previously only `/erp` did this, `/` still served the old call-history dashboard directly.
Moved the dashboard (`app/page.tsx`, `app/loading.tsx`, `app/error.tsx`, `app/calls/[callId]/*`) to
`app/calls-history/*` (via `git mv`, history preserved), updated every internal link that pointed
at `/` or `/calls/:id` (`CallsTable`, `FilterBar`'s Reset link, the call-detail page's back-link,
its not-found page) to point at `/calls-history` instead, and added `/` to `proxy.ts`'s matcher so
it redirects to `/erp` (which then resolves to login or the dashboard depending on session state —
avoids a redundant extra hop through `/erp/login` for already-authenticated visitors). `app/page.tsx`
itself is now a one-line `redirect("/erp")` Server Component, kept as defense-in-depth in case the
proxy rule is ever bypassed. Also repointed the root layout's brand-name link from `/` to `/erp`
since `/` no longer renders anything itself. Verified via `next build` (clean) and a real browser:
`/` → `/erp` → `/erp/login` (two 307s, confirmed with Playwright following redirects), and
`/calls-history` still renders the real call data standalone (3 calls, correct stats).
