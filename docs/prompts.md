# Prompts you can copy

[Back to the README](../README.md)

First select the skill: `$ai-web-design-team` in Codex; `/ai-web-design-team` in Claude Code; the `/` skill picker in Cursor; or “Use the ai-web-design-team skill” in Copilot. Then add a request below. Replace the sample business facts with yours.

New to the team? Start with [your first session](first-session.md). **Alex** coordinates; **Sam** handles messaging; **River** handles visual design; **Kit** handles clarity and accessibility. Names are optional ways to direct the skill, not separate commands.

## Ask Alex to get you started

```text
Alex, help me improve this website. I'm new to AI design. Start with a
review, explain the most useful changes simply, and don't edit the site yet.
```

## Ask one specialist or a pair

```text
River, review only the homepage layout, typography, and spacing.
Keep our existing brand. Give me three concrete improvements.
```

```text
Sam and Kit, review the signup page for clear copy and usable controls.
Keep the current visual direction. Don't edit anything yet.
```

```text
Use one agent. Apply Sam's messaging lens to this hero and suggest
three accurate headline options. Alex, recommend one and explain why.
```

These requests narrow the review. Alex still coordinates implementation when you ask for changes. If a specialist's review is performed by the same agent, the result should say so rather than imply an independent review took place.

## Review an existing site

```text
Review https://example.com. We help freelance accountants manage client
documents. The main action is booking a demo. Focus on the homepage
and pricing page. Give me the five strongest improvements with evidence,
exact replacement copy or layout changes, and a way to verify each.
Review only; don't change the application.
```

## Redesign and implement

```text
Redesign and implement the homepage in this repository. The audience is
independent consultants and the main action is starting a trial.
Keep the logo, product facts, signup destinations, forms, and analytics.
Make it feel confident and editorial with clear typography.
Use the existing stack. Show comparable before/after views if possible
and verify affected interactions on desktop and mobile.
```

## Build a new site

```text
Build a three-page website for a pottery studio: Home, Classes, and
Contact. Visitors should understand the classes and contact us to book.
Use the supplied studio photos and class descriptions. Choose a warm,
craft-focused direction. No online payment or account system.
Build a local preview; identify any missing contact integration.
```

## Preview without editing the app

```text
Create a separate redesign preview of the homepage. Keep the current
app untouched. Retain our logo and key content, and explore a quieter,
more premium direction. Explain the major choices. Stop after the preview.
```

## Improve one thing with lower usage

```text
Use one agent. Improve only the hero copy and CTA hierarchy. Keep the
existing layout, links, and product claims. Implement the change and
check text wrapping at desktop and mobile widths.
```

## Review screenshots

```text
Review these desktop and mobile screenshots. Focus on hierarchy,
readability, and clarity of the next action. Apply the roles sequentially.
Separate visible observations from anything that needs live testing.
```

## Continue an earlier review

```text
Implement recommendations 1 and 3 from the review above. Leave the others
for later. Preserve the recorded behavior and verify those two changes.
Report any remaining evidence gaps.
```

## Useful constraints

For a larger redesign, you can make the built-in essentials explicit:

```text
Redesign and implement this site. Start by explaining the visitor problem
and what success means. Reuse a small set of shared styles and components.
Check the main journey, including relevant errors and recovery. Keep this
in the normal brief and handoff; don't create extra process documents.
```

- “Keep the existing design system and component library.”
- “Accessibility and readability take priority over motion effects.”
- “Use these references for typography and composition; keep our own identity and copy.”
- “The audience is technical buyers; lead with capability and concrete evidence.”
- “Stay within marketing pages; don't change the logged-in product.”
- “Don't deploy; deliver a local preview.”

Style preferences are enough to start. You don't need to prescribe every font size or layout decision. For a larger project, use the optional [brief template](brief.md).
