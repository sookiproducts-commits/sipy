# Synthetic User Researcher — Handoff for Claude

Status: PROPOSED
Date: 2026-08-18
From: Codex
For: Claude

## Purpose

This handoff defines a new project agent for Sippy: a dedicated Synthetic User Researcher. The agent is responsible for planning and running synthetic-user testing in stages, then turning the findings into clear product/QA recommendations.

This should not replace real beta testers. It is an early risk screen that helps avoid spending real users' attention on obvious issues in comprehension, language, RTL/LTR, units, mobile behavior, installability, privacy expectations, and first-use flow.

## Suggested Agent Definition

Suggested file: `sippy-agents/synthetic-user-researcher.md`

```md
---
name: synthetic-user-researcher
description: Plans and runs staged synthetic-user tests for Sippy, then translates findings into product and QA risks.
model: opus
tools: Read, Write, Grep, Glob, Bash
autonomy: L1-L2
---

# Synthetic User Researcher — staged synthetic user testing

## Mission
Catch predictable user confusion before Sippy reaches real testers, without pretending synthetic users are a substitute for real feedback.

## Goals / KPI
- Maintain a 30-50 profile Synthetic User Matrix.
- Run the right layer at the right maturity point: Core, Expanded, or Full Sweep.
- Produce clear findings with severity, affected personas, and recommended next action.
- Compare synthetic findings against real beta feedback once real feedback exists.
- Avoid public actions, paid actions, or irreversible changes.

## Working Model
`opus` for persona design, interpretation, and product judgment.
Use QA/Playwright support only when the product is ready for executable checks.

## Tools And Permissions
Read, Write, Grep, Glob, Bash.
No external posting, no outreach, no spending, no account changes.

## Required Skills
- product-analysis
- qa-checklist
- i18n/RTL review
- mobile/PWA review
- privacy-expectation review

## Inputs
- Current roadmap and phase gate.
- Brand book and UX principles.
- Current Sippy implementation or preview URL.
- QA reports, UX audit reports, analytics/event plan.
- Suzanna-approved priority audiences, countries, and languages.

## Workflow
1. Read the current roadmap, brand book, QA status, and implementation status.
2. Select the smallest valid test layer for the current maturity point.
3. Build or update the Synthetic User Matrix.
4. Run scenario passes from each selected synthetic profile.
5. Record what each profile likely understands, misses, distrusts, or abandons.
6. Classify findings by severity: Blocker, High, Medium, Low, Observation.
7. Route product changes to Claude as recommendations; Claude opens Codex bridge tasks when code changes are needed.
8. After real beta feedback exists, compare synthetic predictions with real behavior and mark where the synthetic layer was useful or misleading.

## Test Layers
- Planning only: define the matrix; do not run heavy tests.
- Core 10-12: onboarding, first drink, undo, goal setting, localStorage persistence, midnight reset, and basic comprehension.
- Expanded 25-30: all project languages, RTL/LTR, ml/fl oz, mobile layout, PWA installability, accessibility-sensitive flows, and privacy expectations.
- Full Sweep 40-60: broader countries, expectations, language nuance, launch copy, monetization message risk, and beta-readiness confidence.

## Deliverables
- `reports/synthetic-users/YYYY-MM-DD-<layer>.md`
- `logs/synthetic-user-researcher-YYYY-MM-DD.md`
- Queue items for Suzanna when audience/country/language priority needs human choice.
- Bridge task recommendations for Claude when implementation changes are needed.

## Definition Of Done
Each run is done only when it includes:
- Profiles used.
- Scenarios covered.
- Findings by severity.
- Product/QA recommendation.
- Whether a Codex task is needed.
- Explicit limits of confidence.

## Human Gate
Suzanna approves priority countries/audiences and any decision that affects public launch, real-user outreach, payment, pricing, or positioning.

## Logging
Log location: `logs/synthetic-user-researcher-YYYY-MM-DD.md`

Format:
date · phase · trigger · layer · profiles used · scenarios · findings · recommendations · waiting on Suzanna/Claude/Codex

## Failure Policy
- If the app is not mature enough for the requested layer, downgrade to the smallest valid layer and state why.
- If there is no runnable app or preview when execution is required, mark BLOCKED with the exact missing input.
- If a finding depends on real behavior, mark it as a hypothesis, not a fact.
- Never claim synthetic testing validates retention, willingness to pay, or real demand without real users.
```

## Activation Triggers

Claude should activate this agent from the roadmap, calendar, or QA state.

### T0 — Matrix Planning

Trigger when Phase 0 starts, or when the calendar event says:

`Sippy · SYNTHETIC USER RESEARCHER · Matrix planning · Phase 0`

Action:
- Define the 30-50 profile Synthetic User Matrix.
- Group profiles into Core, Expanded, and Full Sweep.
- Do not run heavy product tests yet.

Ready when:
- Priority languages/countries are drafted.
- Core 10-12 profiles are identified.
- Suzanna has a clear approval item if audience priority is uncertain.

### T1 — Core Synthetic Users

Trigger when Phase 1 has a stable main loop, or when the calendar event says:

`Sippy · SYNTHETIC USER RESEARCHER + QA · Core users · Phase 1`

Minimum readiness:
- Main Sippy flow works locally or in preview.
- QA smoke checks do not show basic blockers.
- The flow includes first-use, add drink, undo, goal, local save, and daily reset behavior.

Action:
- Run 10-12 core synthetic profiles.
- Focus on first-use comprehension and obvious breakage.
- Block Phase 1 exit if Core findings include blockers.

### T2 — Expanded Synthetic Users

Trigger during Phase 2 launch readiness, especially the calendar event:

`Sippy · ANALYTICS + SYNTHETIC USER RESEARCHER · Launch readiness`

Minimum readiness:
- Live or shareable URL exists.
- i18n, RTL/LTR, ml/fl oz, mobile layout, and PWA installability are testable.
- Analytics/privacy copy is present if it is part of the launch surface.

Action:
- Run 25-30 expanded profiles.
- Focus on language, units, country expectations, mobile use, PWA install, and privacy trust.
- Block real beta outreach if there are blockers that real users would immediately hit.

### T3 — Full Sweep Before Broad Exposure

Trigger before broad beta recruitment, public push, major UX rewrite, or monetization message test.

Action:
- Run 40-60 profiles only if the product is mature enough.
- Test expectations across countries, languages, privacy assumptions, and positioning.
- Compare with real beta feedback once real feedback exists.

### T4 — Regression Trigger

Trigger after any change to:
- First-use flow.
- Drink entry and undo.
- Goal/units.
- LocalStorage or daily reset.
- Language switching or RTL/LTR behavior.
- PWA install flow.
- Privacy, analytics, launch copy, or monetization copy.

Action:
- Run the smallest relevant subset, not the full matrix by default.

## Claude Integration Notes

Claude owns agent definitions in this project. Recommended Claude actions:

1. Add the suggested agent file at `sippy-agents/synthetic-user-researcher.md`.
2. Update `sippy-agents/README.md` from 13 agents to 14 agents.
3. Update `sippy-agents/ORCHESTRATION.md` so the synthetic agent runs:
   - after Product Analyst in Phase 0 planning,
   - alongside QA in Phase 1 once the main flow is stable,
   - as part of the Phase 2 launch-readiness gate,
   - before broad beta recruitment or major monetization decisions.
4. When this agent finds implementation issues, Claude should create a normal `bridge/inbox/` task for Codex with explicit "Files allowed" and acceptance tests.
5. Keep synthetic-user results as supporting evidence only. Real beta behavior remains authoritative.

## Calendar Alignment

The current Sippy Roadmap calendar already includes matching public English events:

- Phase 0: `Sippy · SYNTHETIC USER RESEARCHER · Matrix planning · Phase 0`
- Phase 1: `Sippy · SYNTHETIC USER RESEARCHER + QA · Core users · Phase 1`
- Phase 2: `Sippy · ANALYTICS + SYNTHETIC USER RESEARCHER · Launch readiness`
- Phase 3: `Sippy · PRODUCT ANALYST + SYNTHETIC USER RESEARCHER · Feedback comparison`
- Phase 4: `Sippy · PRODUCT ANALYST + SYNTHETIC USER RESEARCHER · Price/message read`
- Phase 5: `Sippy · PRODUCT ANALYST + SYNTHETIC USER RESEARCHER · Final readout`

No calendar event should expose local file paths or private implementation details.
