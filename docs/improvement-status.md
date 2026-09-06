# Improvement status

## Implemented

| Improvement | What is available | Evidence or instructions |
| --- | --- | --- |
| Worked examples | A fictional existing-site redesign and a fictional new-site build, with HTML, screenshots, decisions, and a reproducible browser checker | [Examples](../examples/README.md) |
| First-run capability check | Alex establishes inspection, editing, preview, and delegation capabilities; explains relevant gaps and proceeds within scope | [Session readiness](../skills/ai-web-design-team/references/session-readiness.md) |
| Preference discovery | River translates likes/dislikes into a direction, offers small alternatives when useful, and retains preferences in the brief | [Design preferences](../skills/ai-web-design-team/references/design-preferences.md) |
| Performance workflow | Performance-relevant builds preserve comparable evidence, make deliberate image/font/script choices, and distinguish lab checks from real-user data | [Performance guidance](../skills/ai-web-design-team/references/performance.md) |

The team still uses one skill and the same four responsibilities. The capability check is internal rather than a user-filled form. Design comparison is selective rather than a required checkpoint. The examples use local practice forms, with no real data delivery or production integrations.

## Verification evidence

The browser report records 88 passed assertions across six fixture/viewport cases: the Clearfile baseline, Clearfile redesign, and Northline build at desktop and mobile sizes. Screenshots were rendered and visually inspected. Installation/package checks validate copied files, links, preservation behavior, and core safety/performance guidance. These checks validate the artifacts and packaging, not autonomous agent quality, production performance, or user outcomes.

## Evaluation still needed

- Have newcomers follow the first-session guide and record where they get stuck. No human user study has been conducted or implied.
- Run the installed skill through a real task in each documented host, including OpenClaw and Hermes. Documentation verification is not live integration testing.
- Run the performance scenario on representative production-like projects and compare actual before/after measurements. Package checks establish that the workflow is present, not that generated sites meet a budget.
- Evaluate real authorized projects, including production integrations and comprehension with intended visitors. No conversion uplift or full accessibility conformance is claimed.

Use [behavioral scenarios](../evals/scenarios.md) and the [newcomer test guide](newcomer-test.md) to collect that evidence without presenting proposed tests as completed ones.
