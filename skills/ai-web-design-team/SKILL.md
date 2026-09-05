---
name: ai-web-design-team
description: Review website design, redesign existing pages while preserving behavior, or build a new website from a brief. Coordinates messaging, visual design, and clarity/accessibility specialists. Use for a website design team workflow, not unrelated backend work or isolated bug fixes.
---

# AI Web Design Team

Act as design lead and implementation owner. Improve how the website looks and communicates while preserving required functionality and user flows. Follow the user's scope and project instructions; this playbook does not authorize publishing or unrelated product changes.

## Choose the mode

Infer the mode from the request and state it briefly. Ask only when a missing fact materially blocks useful work.

Keep onboarding light: start from the website/project, its purpose and audience, and the main visitor action. Inspect supplied context before asking for it again. Group necessary questions into one short request and continue independent work. Treat style, spacing, and component choices as the team's work rather than a questionnaire for the user.

| Mode | Trigger | Deliverable |
| --- | --- | --- |
| Review | Audit, critique, recommendations | Evidence-backed, prioritized recommendations; no application edits |
| Redesign | Improve or redesign an existing site | Baseline, design direction, representative before/after, implementation and verification |
| Build | Create a website from a brief | Page and flow plan, design direction, working implementation and verification |

Respect narrower requests: a preview-only request ends with the preview. A request to implement authorizes ordinary local design and implementation choices; do not introduce a mandatory approval between every phase. If intent is ambiguous between critique and editing, begin with review and clarify before application edits.

## Establish shared context

Inspect the supplied URL, screenshots, files, or repository with available tools. Read project instructions and identify the existing stack and design system before choosing implementation tools. Use an applicable site-building skill when available and required by the project; this skill supplies design direction, not a replacement hosting workflow.

Prepare a concise shared brief: audience, user task, primary action, pages in scope, brand/tone, constraints, evidence inspected, and unknowns. Separate supplied facts from working assumptions. For an existing site, record routes, CTA destinations, forms, state changes, integrations, analytics hooks, and other relevant behavior that must survive. Inspect representative desktop and mobile states when possible.

For substantive work, use the relevant sections of [essentials.md](references/essentials.md) to make three decisions explicit: the user problem and success criteria; shared styles/components to reuse; and the primary journey's states and checks. Fold these into the existing brief and verification report. They are not extra modes, agents, mandatory files, or an intake form. A small copy edit may need only a sentence about the goal and an affected-link check.

Choose the review depth from scope: one component gets focused role lenses; a page or journey gets the team; a larger site gets representative page types and critical flows before expansion. Honor explicit requests for full coverage. State what was sampled and never present a homepage review as a whole-site audit.

If only screenshots or code are available, constrain claims to that evidence. Do not invent live interactions, measured contrast, analytics, or a visual baseline. For a new site there is no before state; read [new-site.md](references/new-site.md) before planning it.

## Run the team

For a substantive website review or design, delegate independent passes to three subagents when supported: messaging, visual design, and clarity/accessibility. Read [team.md](references/team.md) for their briefs and output contract. Give each the same shared brief and evidence, plus its role instructions. Keep reviewers read-only and have them return findings to the coordinator. Do not have them delegate further or edit shared files.

Use the host's native delegation tools if available; role names here are task briefs, not configured agent types or executable commands. Do not assume Codex tool names work in Claude Code, Cursor, or Copilot. Inherit the user's model settings. The skill does not require persistent agents or a separate agent-teams feature.

Respect available concurrency and the user's usage preferences. For a small task, a requested single-agent run, or unavailable delegation, apply the relevant role lenses yourself and say that the review was sequential. Never imply independent reviewers ran when they did not. Do not force three full reviews of a tiny change.

While specialists review, the coordinator can inspect implementation constraints or prepare the behavior checklist. Collect their results before selecting the final direction. Reconcile disagreements using evidence, the primary user task, accessibility, brand constraints, and implementation cost. Explain meaningful tradeoffs; do not concatenate three reports or average their opinions.

## Decide and deliver

Use [deliverables.md](references/deliverables.md) for the compact findings and handoff format. Prioritize task blockers and comprehension before cosmetic polish. Give exact replacement copy or actionable styling/layout changes tied to a location and evidence. Keep conversion outcomes as hypotheses unless measured; never invent testimonials, customer logos, product capabilities, prices, or performance results.

In review mode, return the consolidated report and stop. For redesign/build, read [implementation.md](references/implementation.md), create a coherent representative design, implement the requested scope, and verify appearance and behavior. Preserve the existing design system where it serves the brief; make deliberate changes where evidence supports them. Continue through authorized implementation rather than ending at recommendations.

Before implementation, define the direction using [design-direction.md](references/design-direction.md). Keep one compact working brief rather than repeating all reviewer notes. For multi-step tasks, preserve agreed decisions, unresolved facts, and verification gaps in a short handoff; save it to a file only when useful and within scope. Resume from that state on follow-up requests and implement only the recommendations the user selects.

Close with the result, artifact or preview links, checks actually performed, and material unverified items. A static mockup is a mockup; a working website needs working required interactions.
