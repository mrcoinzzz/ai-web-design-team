# AI Web Design Team

A reusable design team for your coding agent. Review an existing website, redesign it without breaking its flows, or build a new site from a brief.

**One skill to invoke. Three specialists. One lead responsible for the result.**

This first version is an instruction-only skill for Codex. It includes focused role playbooks, scope rules, and implementation checks. No API keys, package installation, or hosted service are required by the skill itself; inspecting and building a site uses your agent's available tools and your project's dependencies.

## Meet the team

| Role | Responsibility |
| --- | --- |
| Lead coordinator | Establish context, reconcile advice, implement, and verify |
| Messaging and CTA specialist | Value proposition, headlines, action copy, reassurance |
| Visual design specialist | Layout, hierarchy, typography, spacing, color, brand |
| Clarity and accessibility specialist | Comprehension, controls, keyboard access, responsive presentation |

The specialists are role instructions, not permanently running agents. For substantive tasks, the skill requests three independent subagents. Small tasks and environments without delegation use the same lenses sequentially. Parallel reviewers consume additional usage. This follows Codex's documented support for [delegation through skill instructions](https://learn.chatgpt.com/docs/agent-configuration/subagents).

## Install in a project

Download or clone this repository. Copy the complete `skills/ai-web-design-team` folder into your website project's `.agents/skills/` directory:

```text
your-website/
└── .agents/
    └── skills/
        └── ai-web-design-team/
            ├── SKILL.md
            ├── agents/openai.yaml
            └── references/...
```

Keep the references with the skill. If a copy already exists, review the differences before replacing it. Open the website project in Codex and select the skill or mention `$ai-web-design-team`. If discovery does not refresh, restart Codex. See the official [skill format and discovery documentation](https://learn.chatgpt.com/docs/build-skills).

You can also try it without copying: ask your agent to read `skills/ai-web-design-team/SKILL.md` from this checkout and apply it to a specified website project. Other agents can read the Markdown playbook, but their discovery and delegation mechanisms may differ; compatibility has not been tested.

## Use it

### Review an existing site

```text
Use $ai-web-design-team to review https://example.com.
Our audience is freelance accountants, and the main action is booking a demo.
Give me prioritized recommendations. Review only; don't edit the site.
```

### Redesign and implement

```text
Use $ai-web-design-team to redesign the homepage in this repository.
Make the offer clearer and the design more confident. Keep our logo,
signup destinations, forms, and analytics behavior. Implement the changes
and verify desktop and mobile layouts and the affected interactions.
```

### Build from scratch

```text
Use $ai-web-design-team to build a website for a scheduling tool for tutors.
Create a homepage and features page. The main CTA should link to /signup
in our existing app. Use a calm, editorial visual direction.
Do not invent testimonials or pricing. Build a working local preview.
```

For a visual concept only, add “Preview only; don't change application files.” For lower usage, add “Use one agent and apply the three review lenses sequentially.” You can narrow a task to one page, section, or role.

## What you get

| Mode | Workflow | Result |
| --- | --- | --- |
| Review | Inspect → independent review → consolidate | Prioritized findings with evidence, exact changes, and verification criteria |
| Redesign | Baseline → review → preview → implement → verify | Updated site, comparable before/after evidence where available, behavior checks |
| Build | Brief → page/flow plan → design → implement → verify | Working requested pages, coherent design direction, verification report |

The core rule is to improve appearance and communication while preserving required functionality and flows. Conversion gains remain hypotheses until measured. Reviews report what was actually inspected; screenshots alone cannot prove keyboard access or working forms. Publishing requires a request or existing authorization.

## Customize and contribute

The [entry skill](skills/ai-web-design-team/SKILL.md) owns routing and shared rules. [Team responsibilities](skills/ai-web-design-team/references/team.md) define specialist behavior. The other references cover new sites, implementation, and deliverables. Change these directly; no build step is needed.

When contributing, include a realistic prompt, the observed weakness, your focused change, and evidence that the behavior improved. Use the [evaluation scenarios](evals/scenarios.md) for manual checks. Avoid adding mandatory specialists or process steps without a demonstrated need.

Status: initial playbook. Structural validation does not establish design quality; this version still needs trials on real websites. The repository includes no live-site evaluation results.

Licensed under the [MIT License](LICENSE).
