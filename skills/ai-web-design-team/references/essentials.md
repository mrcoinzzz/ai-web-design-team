# Three essentials for a useful website

Use the sections relevant to the task. The lead keeps these in the shared brief; reviewers contribute within their existing responsibilities. Keep review-only work read-only and preview work within its requested boundary.

## 1. Establish the problem and what success means

Before choosing a treatment, write a short success brief:

| Decision | Record |
| --- | --- |
| Visitor situation | The task or decision that brought the visitor here |
| Friction | What currently makes that task difficult, with its evidence source |
| Desired outcome | What the visitor should understand or accomplish |
| Success check | An observable result and how it can be checked |
| Uncertainty | What is assumed, unknown, or needs user evidence |

Use supplied research, support feedback, analytics, or observed behavior when available and relevant. A stakeholder's belief is a useful input, not proof of visitor behavior. Do not invent personas, interviews, or reasons users abandon a page. For a new site, mark untested audience needs as assumptions.

Separate an implementation check from a business outcome. “The demo CTA reaches the correct form” can be verified locally. “More visitors request a demo” needs suitable measurement. If data is supplied, retain its date range, source, and metric definition; do not infer causation from a before/after count. If no data exists, propose the smallest useful check without inventing a numerical uplift target or adding tracking outside scope.

Example: “Accountants need to judge whether this product helps collect client documents. The supplied hero screenshot doesn't explain that task. Make the offering and demo step explicit. Verify product truth and destination now; test visitor comprehension later. Increased demo requests remain a hypothesis.”

## 2. Make visual decisions reusable

For changes spanning repeated elements or multiple pages, have the visual specialist identify the existing style and component sources first. Record only what the requested work needs:

| Decision | Existing source or proposed shared rule | Where it applies |
| --- | --- | --- |
| Text, background, action, and focus colors | Current semantic tokens, or a small set of named variables | Changed components |
| Type hierarchy and spacing | Current theme/classes, or a consistent small scale | Headings, copy, sections |
| Repeated components | Existing button, field, navigation, or card component | Relevant pages and states |

Fill this with actual source locations and values after inspection, not guessed library names. On a new site, define the smallest useful shared set in the chosen stack. On an existing site, extend the established mechanism; do not introduce a separate token tool, dependency, or naming scheme just for this exercise.

For each affected reusable control, specify only the variants and behavior needed: label/content rules, action, responsive treatment, focus, and applicable disabled or pending states. Avoid restyling repeated controls independently across pages. When changing a shared token/component, inspect representative consumers outside the immediate page for unintended effects; keep unrelated redesign work out of scope.

The handoff should identify the shared sources changed. For a one-off text edit, reuse existing styling and skip the table.

## 3. Check journeys, including failures and recovery

For an affected interaction, map the main task from entry to its real outcome. Add applicable failure and recovery states; not every site needs every state.

Use a small table instead of a formal state-machine tool:

| Starting state | Event | Expected visible result and behavior | Recovery/next step |
| --- | --- | --- | --- |
| Form ready | Submit invalid data | Clear field errors; no request sent | Correct the input |
| Valid form | Submit | Pending feedback; avoid duplicate requests | Wait for a response |
| Request pending | Server confirms receipt | Truthful confirmation | Clear next action |
| Request pending | Request fails | Explain the failure; retain safe input | Retry where safe, with duplicate protection where needed |

These rows are illustrative expectations, not evidence that a form was tested. Adapt to actual contracts; do not retain sensitive inputs unnecessarily or add submission behavior the product does not support. Preserve cancellation, back navigation, and recovery where required. A static link may need only a destination check. A missing backend means successful delivery remains unverified, not that success can be simulated silently.

Run relevant scenarios in the available test environment and record expected versus observed behavior. Distinguish agent/browser checks from usability testing with people. If comprehension or discoverability is uncertain, suggest a short task expressed as a visitor goal—for example, “Find out whether this service suits your team and arrange a conversation”—without telling participants which control to click. Record completion, wrong turns, and assistance if that study is actually run.

Do not recruit participants, contact users, or run live experiments without authorization. A proposed study is a next validation step, not a prerequisite for every local design change and not a completed test result.
