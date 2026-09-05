# AI Web Design Team

**Turn “make this website better” into a clear design direction, working changes, and checks that the important stuff still works.**

One reusable skill brings together a design lead and three specialists in messaging, visual design, and clarity/accessibility. Use it to **review a website**, **redesign an existing site**, or **build from scratch**.

Designed for **Codex, Claude Code, Cursor, and GitHub Copilot**. The team is a set of Markdown instructions your coding agent follows with its available tools. No separate AI service, API key, or framework is required by this pack. Your agent subscription and website dependencies still apply.

[Get started](#get-started) · [Example prompts](docs/prompts.md) · [Setup by tool](docs/setup.md) · [Meet the team](#meet-the-team) · [Troubleshooting](docs/setup.md#troubleshooting)

## Get started

### 1. Download the team

Use **Code → Download ZIP** on GitHub and extract it, or run:

```sh
git clone https://github.com/mrcoinzzz/ai-web-design-team.git
cd ai-web-design-team
```

### 2. Install in your website project

Run **one** command from the downloaded team folder. Replace `/path/to/your-website` with your website folder. For a new site, create an empty project folder first.

| Your tool | Installation command |
| --- | --- |
| Codex | `python3 scripts/install.py codex --project "/path/to/your-website"` |
| Claude Code | `python3 scripts/install.py claude --project "/path/to/your-website"` |
| Cursor | `python3 scripts/install.py cursor --project "/path/to/your-website"` |
| GitHub Copilot | `python3 scripts/install.py copilot --project "/path/to/your-website"` |

The installer needs Python 3.9+ and copies the complete skill into the tool's project folder. It refuses to overwrite an existing installation and does not change agent settings. Add `--dry-run` to see the destination first. On Windows, use `py -3` instead of `python3` and a Windows project path.

**No Python?** Copy the folder manually using the [setup guide](docs/setup.md). **Multiple tools?** Read the [shared installation guidance](docs/setup.md#using-more-than-one-tool) before making duplicate copies.

### 3. Open your website project and ask

For **Codex**:

```text
Use $ai-web-design-team to review this website. Give me the five most
useful improvements with exact copy or layout changes. Review only.
```

For **Claude Code**:

```text
/ai-web-design-team Review this website. Give me the five most useful
improvements with exact copy or layout changes. Review only.
```

In **Cursor**, type `/` and select `ai-web-design-team`, then give the request. In **Copilot agent mode**, ask it to use the `ai-web-design-team` skill to review this website. [Tool setup and official sources](docs/setup.md).

Give the agent a URL, an open website repository, or screenshots. Include the audience and main action if you know them. You don't need to fill out a questionnaire or manually manage reviewers.

## Choose the job

After invoking the skill, use one of these requests:

| Job | What to ask | What you get |
| --- | --- | --- |
| Review | “Review the homepage. Don't edit it.” | Prioritized findings with evidence and exact changes |
| Redesign | “Redesign and implement the homepage. Keep signup and forms working.” | A coherent direction, updated site, before/after evidence where available, and checks |
| Build | “Build a site for my tutoring business. The main action is booking a call.” | Page/flow plan, design direction, working requested pages, and verification |
| Preview only | “Show a redesign in a separate preview. Don't edit the app.” | A labeled concept; application files remain unchanged |

Add **“Use one agent”** to reduce usage, or **“Focus only on the pricing page”** to narrow the work. These are plain-language preferences, not configuration flags. See [ready-to-use prompts](docs/prompts.md) and the optional [brief template](docs/brief.md).

## Meet the team

| Role | Owns | Hands back |
| --- | --- | --- |
| **Design lead** | Scope, user journey, decisions, implementation, final checks | One direction and a completed result |
| **Messaging and CTA specialist** | What the site says and what visitors do next | Exact headlines, action labels, and content changes |
| **Visual design specialist** | Composition, typography, spacing, imagery, brand | A concrete direction and component guidance |
| **Clarity and accessibility specialist** | Comprehension, controls, navigation, responsive usability | Specific fixes and verification methods |

For substantial work, the lead requests independent specialist subagents when the host supports them. For small tasks, limited tools, or a single-agent request, it applies the same lenses sequentially. It reports which happened. The pack does not require persistent agents, a particular model, or Claude Code's separate Agent Teams feature.

The lead resolves disagreements and owns application edits. Reviewers don't edit the same files or hand you three competing reports.

```mermaid
flowchart LR
    A[Your brief + site evidence] --> B[Design lead]
    B --> C[Messaging]
    B --> D[Visual design]
    B --> E[Clarity + accessibility]
    C --> F[One prioritized direction]
    D --> F
    E --> F
    F --> G{Requested scope}
    G --> H[Review report]
    G --> I[Preview only]
    G --> J[Implement + verify]
```

## What good work looks like

- **Specific:** exact replacement copy and layout changes instead of “make it pop.”
- **Coherent:** a direction tailored to the audience and brand, carried across the requested pages.
- **Functional:** required routes, forms, CTA destinations, integrations, and analytics survive a redesign.
- **Evidence-based:** visual observations and interaction checks are distinguished. Conversion gains are hypotheses until measured.
- **Honest:** no invented testimonials, prices, customers, features, successful submissions, or test results.

An [illustrative review](docs/example-review.md) shows the expected detail. Review needs evidence; implementation needs an editable project; rendered verification needs browser tools. The team states gaps instead of pretending tools exist. Deployment follows your requested scope and permissions.

## Three essentials, handled by the team

For substantial work, the existing roles also make these explicit:

1. **A problem worth solving:** the visitor's task, evidence of friction, and what success would look like.
2. **A small reusable design system:** shared styles and components that keep the requested pages consistent.
3. **A complete journey:** relevant waiting, error, and recovery states, with actual checks distinguished from proposed user testing.

These fit into the normal brief and handoff. You still invoke one skill; small edits skip unnecessary tables and process. See [what we learned from Designer Skills](docs/design-essentials.md) for the comparison and source links.

## Customize or contribute

Start by telling the team your brand, preferred examples, and constraints. To change its workflow, edit the [skill](skills/ai-web-design-team/SKILL.md) or its [role playbooks](skills/ai-web-design-team/references/team.md). Installed copies do not update automatically; see [updating and removing](docs/setup.md#updating-and-removing).

Contributions should include a realistic request, the observed problem, and evidence that the change improves the result. [Contributor guide](CONTRIBUTING.md) · [Behavioral scenarios](evals/scenarios.md).

**Validation status:** installation and package checks are automated. Setup paths are based on official documentation. End-to-end behavior and real-site design quality still need evaluation in each host; documentation support is not a claim that every client was tested.

Licensed under the [MIT License](LICENSE).
