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
