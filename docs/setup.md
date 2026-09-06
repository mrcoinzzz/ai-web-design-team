# Setup by tool

[Back to the README](../README.md)

For Codex, Claude Code, Cursor, and Copilot, install in the **website project you want to work on**. OpenClaw and Hermes use their native skill installation commands below. This repository stores the source in `skills/ai-web-design-team`; opening this repository alone does not install it into another project or agent.

[Codex](#codex) · [Claude Code](#claude-code) · [Cursor](#cursor) · [Copilot](#github-copilot) · [OpenClaw](#openclaw) · [Hermes Agent](#hermes-agent)

The optional installer requires Python 3.9+ and uses only the standard library. Run it from the downloaded repository with an existing website folder as `--project`. It copies the full skill, makes no network calls, and refuses to replace an existing destination.

One installation includes **Alex — Design Lead**, **Sam — Messaging & CTA**, **River — Visual Design**, and **Kit — Clarity & Accessibility**. After invoking the skill, address them naturally in your request. They are role labels; there are no separate `/alex`, `/sam`, `/river`, or `/kit` commands. See [your first session](first-session.md) for a guided introduction.

## Codex

```sh
python3 scripts/install.py codex --project "/path/to/your-website"
```

Or copy the complete folder to `.agents/skills/ai-web-design-team/` in your website. Open that project in Codex and invoke `$ai-web-design-team`, or select the skill in the client's picker. [Official skill format and discovery documentation](https://learn.chatgpt.com/docs/build-skills).

```text
Use $ai-web-design-team to redesign and implement this homepage.
Our audience is independent consultants. Keep existing forms and links.
Verify affected interactions and mobile layout.
```

The skill requests specialist delegation for substantial work. Codex supports delegation requested by applicable skill instructions. [Subagent documentation](https://learn.chatgpt.com/docs/agent-configuration/subagents).

## Claude Code

```sh
python3 scripts/install.py claude --project "/path/to/your-website"
```

Or copy the whole folder to `.claude/skills/ai-web-design-team/`. Start Claude Code in your website folder, then use:

```text
/ai-web-design-team Redesign and implement this homepage for independent
consultants. Keep existing forms and links. Verify mobile and desktop.
```

Claude Code discovers project skills in `.claude/skills` and exposes `/skill-name` invocation. [Official skills documentation](https://code.claude.com/docs/en/skills).

The main conversation acts as lead and requests subagents where available. This pack does not install custom `.claude/agents` definitions or require Agent Teams. It does not force `context: fork`: the coordinator retains your project context and implementation ownership. [Claude Code subagents](https://code.claude.com/docs/en/sub-agents).

These instructions target **Claude Code**, not the general Claude website. For a chat-only workflow, use the fallback below.

## Cursor

```sh
python3 scripts/install.py cursor --project "/path/to/your-website"
```

Or copy the whole folder to `.cursor/skills/ai-web-design-team/`. Open the website in Cursor, use Agent chat, type `/`, and select `ai-web-design-team`. Add your request. [Official Agent Skills documentation](https://cursor.com/docs/skills).

If the skill is absent, reopen the project/session and check the layout. Local installation does not by itself make files available in a remote agent workspace; include the project skill there.

## GitHub Copilot

```sh
python3 scripts/install.py copilot --project "/path/to/your-website"
```

Or copy the whole folder to `.github/skills/ai-web-design-team/`. In a Copilot client with agent skills support, use agent mode and ask:

```text
Use the ai-web-design-team skill to review this homepage. Prioritize
clarity, visual hierarchy, and accessibility. Review only.
```

GitHub documents supported clients and project skill locations in [About agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills). Capabilities and organization policies can differ. For repository-based remote tasks, commit the installed skill so it is present in the remote checkout. Use sequential role reviews if delegation is unavailable.

## OpenClaw

With OpenClaw already set up, download or clone this repository, then run from its root:

```sh
openclaw skills install ./skills/ai-web-design-team
openclaw skills info ai-web-design-team
```

This installs into the active OpenClaw workspace. For a specific configured agent, add `--agent YOUR_AGENT_ID` to both commands. That ID identifies your OpenClaw agent, not Alex, Sam, River, or Kit. [Official CLI documentation](https://docs.openclaw.ai/cli/skills).

Use the skill folder shown above: OpenClaw's Git/local installer expects `SKILL.md` at the source root, whereas our repository keeps it under `skills/ai-web-design-team`. This installation is not ClawHub-tracked; `openclaw skills update` does not update it. Refresh the download and follow the manual-copy update guidance below, using the installed location shown by `info`.

Manual fallback: copy the complete `ai-web-design-team` folder into `<your-openclaw-workspace>/skills/`. Check visibility in the intended workspace before starting. [Skill loading locations](https://docs.openclaw.ai/tools/skills).

## Hermes Agent

These instructions mean **Nous Research's Hermes Agent**. With Hermes already set up, install directly from GitHub:

```sh
hermes skills install mrcoinzzz/ai-web-design-team/skills/ai-web-design-team
hermes skills list --source hub
```

No clone, Python installer, or additional tap is needed. Hermes supports installing a skill by its public GitHub repository path. [Official Skills System documentation](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills/).

Run the commands in the Hermes environment you actually use. The installation makes the playbook available; it doesn't copy your website project into that environment.

For later updates or removal:

```sh
hermes skills update ai-web-design-team
```

```sh
hermes skills uninstall ai-web-design-team
```

Review any installation prompts normally. The setup doesn't require forcing an overwrite or bypassing a scan.

## First request in OpenClaw or Hermes

Start a fresh conversation after installation and provide a reachable website URL or project path:

```text
Use the ai-web-design-team skill. Alex, review this website with the
team and explain the five most useful improvements. Don't edit it yet.
```

For a first session with predictable usage, add “Use one agent and apply Sam's, River's, and Kit's review lenses.” Independent specialist reviews depend on the host's available delegation tools and configuration. A skill installation alone doesn't provide browser access, editable project files, or additional agents.

If the CLI reports an unknown command, check the installed version's help against the linked official documentation. If the skill isn't visible, verify the selected agent/workspace or Hermes environment, rather than installing duplicate copies into guessed folders.

**Verification:** these two native install procedures were checked against official documentation on 2026-09-06. Neither CLI was available in the development environment, so installation and end-to-end execution in OpenClaw/Hermes have not been run here. The automated Python installer tests cover the original four targets only.

## Using more than one tool

Keep one authoritative installed copy when possible. Codex uses `.agents/skills`; current Cursor and Copilot documentation also lists that location. A Codex installation can serve those three tools without another copy. Claude Code uses `.claude/skills` for project installation. Cursor and Copilot can also discover that directory, so when combining Codex and Claude Code, check for duplicate skill entries in those clients.

The Python installer supports one of the original four targets per invocation and does not synchronize copies. OpenClaw and Hermes use the native commands above. Do not install every option just because it is listed. If separate copies are needed, update each deliberately. `agents/openai.yaml` is Codex UI metadata, not an executable agent or a dependency required by other hosts.

## Other agents and chat-only tools

For a coding agent with local file access but no skill discovery, provide the full path to the downloaded `SKILL.md` and say:

```text
Read this SKILL.md and the references relevant to my request. Apply the
AI Web Design Team workflow to my website project. Use one agent if
delegation isn't available. Review only to begin with.
```

For a chat-only tool, attach the skill and relevant reference files along with screenshots, page copy, or a brief. Ask it to apply the roles sequentially. Local Markdown links cannot load files you haven't supplied. An attached playbook does not grant browser access, project editing, or independent agents. Treat the result as advice or a concept unless those capabilities are available.

This is a manual fallback, not a tested native integration for every assistant. For another host supporting Agent Skills, use its documented install location.

## Windows and manual installation

In PowerShell with Python installed:

```powershell
py -3 scripts/install.py claude --project "C:/Projects/my-website"
```

Substitute `codex`, `cursor`, or `copilot` as needed. Or use a file manager to create the tool's skills directory and copy the complete `ai-web-design-team` folder into it. The layout must be `<tool-folder>/skills/ai-web-design-team/SKILL.md`, with `references/` beside that file. Avoid an extra nested `ai-web-design-team` folder.

## Updating and removing

The following procedure is for manually copied skills and our Python installer. For Hermes, use its update/uninstall commands above. For OpenClaw's local-directory installation, use this copy procedure at the location reported by `openclaw skills info ai-web-design-team`.

Update your downloaded source with `git pull --ff-only` or download a fresh ZIP. Installed copies stay unchanged. Compare the installed folder with the new source, move the old copy somewhere **outside all skill discovery directories**, reinstall, then reapply intentional customizations. The installer refuses to overwrite a destination so local edits aren't silently lost.

To uninstall, remove only the installed `ai-web-design-team` folder and restart the agent session if needed. Do not remove the entire `.agents`, `.claude`, `.cursor`, or `.github` directory; it may contain unrelated configuration.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Skill not listed | Open the website project, check the exact folder layout, and start a new session. Confirm the client supports skills. |
| Existing destination | Follow the update procedure; the installer deliberately refuses overwrites. |
| Installer refuses a symlink | Use a real skills directory or install manually for your custom layout. |
| Agent can't inspect the site | Supply reachable evidence or a local preview. Authentication and browser tools belong to the host. |
| Advice when you wanted code | Ask to “redesign and implement,” and provide an editable project. |
| Too much usage | Request “one agent,” fewer pages, or a single specialist focus. |
| Three separate reports | Ask the lead to consolidate into one prioritized direction. |
| No browser verification | The report should say unverified. Enable suitable tools or run the checks yourself. |

Original four host guides checked against linked official sources on 2026-09-05; OpenClaw/Hermes additions checked on 2026-09-06. Installer tests validate copied files and safety behavior; they do not launch these clients or establish real-site design quality.
