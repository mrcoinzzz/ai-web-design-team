# Implement and verify

## Baseline and design

For a redesign, record the relevant current behavior before editing. Capture representative desktop and mobile screenshots if the environment supports it, noting URL/route, viewport, and state. Use equivalent conditions for after captures. If baseline capture is unavailable, state the limitation and preserve the available evidence.

Create a representative preview at the level the request warrants: a rendered page, component, or clearly labeled mockup. Prefer the actual application for implementation tasks so the preview exercises real content and constraints. Continue with the chosen direction unless the user requested a checkpoint or a material business decision remains unresolved.

Keep a compact behavior checklist with location, trigger, expected destination/state, and verification result. For example, a homepage “Start trial” link must retain its signup destination and required query parameters after restyling. A form must retain validation, submission, and error handling.

For affected forms or multi-step interactions, use the state/recovery table in [essentials.md](essentials.md) as the checklist. Include relevant unhappy paths and truthful completion feedback. For changed shared components or tokens, check representative consumers as well as the page under redesign.

## Implementation ownership

The coordinator owns application edits. Reuse current components and tokens where appropriate. Preserve contracts for routes, event handlers, forms, authentication, payment flows, integrations, and analytics; do not silently remove controls to simplify a composition. When a requested flow change conflicts with preservation, the user's explicit change controls, and its consequences should be verified.

Use real copy lengths and responsive layouts. Include meaningful semantic HTML, visible interactive states, and appropriate motion behavior. Avoid unrelated dependency migrations or replacing the whole app to implement a visual change.

For a redesign, retain meaningful document titles, heading structure, internal links, and indexable content unless the requested change calls for updates. Size and load imagery deliberately and avoid new layout shifts or unnecessary animation. Check performance or search-related behavior where the edit can affect it; do not expand every design task into a full performance or SEO audit.

## Verification

Read the project's verification instructions and run checks relevant to the change. For a typical page redesign:

- Render the changed pages at representative desktop and mobile widths, and inspect intermediate widths where the layout changes. Check wrapping, overflow, clipping, image behavior, and content hierarchy.
- Exercise affected navigation, primary and necessary secondary actions, and relevant form states. Compare against the baseline checklist. Use safe test environments for consequential actions.
- Check keyboard operation, focus visibility, labels/semantics, and contrast using suitable tools. Distinguish automated checks from manual observations; report their actual coverage.
- Run applicable build, lint, and existing tests. Add focused regression coverage when changed behavior warrants it; do not create a large suite for a copy-only edit.

Fix failures caused by the work, then repeat affected checks. Report pre-existing failures separately with evidence. If browser execution or an integration is unavailable, finish the accessible work and label visual or behavioral verification as unverified. Do not treat a successful build as proof of correct appearance or functioning interactions.

## Handoff

Link the preview and relevant files, summarize what changed and why, and report verification results and gaps. Include comparable before/after evidence for a redesign when captured. Publish or deploy only when requested or already authorized; a local build request alone does not authorize external publication.

Completion means the requested pages/sections exist, the chosen direction is consistent, affected required behavior is checked, and material failures introduced by the work are resolved. If something is blocked, name the exact missing input or capability and the unfinished requirement. Never call a preview a completed production integration.
