# See the team workflow in practice

These are **fictional, local-only demonstrations**, created in one Codex session applying the named role lenses sequentially. They are not client projects, independent reviews by four agents, user studies, or evidence of conversion uplift. Both examples include working practice interactions, with no backend or real message delivery.

| Example | What it demonstrates | Start here |
| --- | --- | --- |
| Clearfile | Redesigning a vague homepage while preserving its destinations and form contract | [Redesign walkthrough](clearfile/README.md) |
| Northline | Turning a short tutoring-site brief into a coherent new page | [New-build walkthrough](northline/README.md) |

Download the repository and open the HTML files in a browser; no build step is needed. GitHub displays HTML source, so use the screenshots in the walkthroughs to see the results without downloading. These examples are documentation fixtures, not deployed Sites.

## Reproduce the browser checks

The optional checker needs Node.js and Playwright. These dependencies are **only for example QA**, not for installing or using the design-team skill. From the repository root, on macOS/Linux:

```sh
npm install --prefix .example-tools playwright
./.example-tools/node_modules/.bin/playwright install chromium
NODE_PATH="$PWD/.example-tools/node_modules" node examples/verify.mjs
```

On PowerShell, after the npm installation:

```powershell
.\.example-tools\node_modules\.bin\playwright.cmd install chromium
$env:NODE_PATH = "$PWD/.example-tools/node_modules"
node examples/verify.mjs
```

The checker defaults to Playwright's Chromium. An existing compatible browser may be selected with `EXAMPLE_BROWSER_PATH`. It uses an isolated browser context and local files. It does not use your personal browser profile. The dependency folder is ignored by Git.

It checks the primary destinations, local navigation, horizontal overflow, visible keyboard focus on the first link, native form validation, pending feedback, error recovery, retained input, simulation labels, JavaScript errors, and absence of page-initiated HTTP requests. It captures desktop (1440 × 1000) and mobile (390 × 844) full-page screenshots and writes [results.json](evidence/results.json). The browser version and timestamp are recorded there.

The screenshots and report are generated artifacts: rerun the checker after changing a fixture and inspect the screenshots before committing them. A successful run does not prove full accessibility, screen-reader behavior, production integrations, usability with people, or all responsive widths. Dependency versions may change later rendering; the report identifies the browser used for the saved evidence.
