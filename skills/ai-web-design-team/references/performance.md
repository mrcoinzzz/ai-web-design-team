# Keep website performance intentional

Use this for redesigns and builds that add or materially change images, fonts, scripts, styles, animation, third-party embeds, or dependencies. Scale the work to the likely impact: a copy-only change does not need a performance audit.

## Establish comparable evidence

Read the project's performance instructions and identify its current budgets, tools, production-build command, and representative routes. Use the project's existing budgets; do not replace them with a generic score. If none exist, record that instead of silently creating a release gate.

For an existing site, capture a baseline before changing performance-relevant code when tools permit. Choose the page, viewport, state, build mode, network/CPU settings, tool and version in advance. Compare equivalent routes, viewports, test conditions, and runs. Prefer several runs and report the representative result when the tool supports repeatable lab measurement; one unusually good run is not a baseline.

Core Web Vitals cover loading (LCP), responsiveness (INP), and visual stability (CLS), but [their definitions and recommended thresholds can evolve](https://web.dev/articles/vitals). Use current authoritative guidance or an explicit project requirement when a threshold matters, and cite its source and date. Do not invent a passing threshold.

## Make deliberate implementation choices

- **Images and media:** use appropriately compressed formats and responsive sources sized for their rendered use. Give images intrinsic `width` and `height` (or an equivalent reserved aspect ratio) to limit layout movement. Lazy-load offscreen media where it helps, but do not lazy-load the likely LCP image; make its loading priority intentional. Keep meaningful alternatives and acceptable visual quality. See web.dev's [image performance guidance](https://web.dev/learn/performance/image-performance) and MDN's [lazy-loading overview](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading).
- **Fonts:** reuse existing families and weights before adding files. When a new font is justified, load only the needed faces and character coverage, prefer efficient supported formats, choose an intentional `font-display` strategy, and test fallback metrics and wrapping. Self-host only when licensing, caching, and the project architecture support it. See web.dev's [font guidance](https://web.dev/learn/performance/optimize-web-fonts).
- **Scripts, styles, and dependencies:** reuse the stack and remove unused work in the changed path. Do not add a library or third-party request for an effect the existing code can provide simply. Defer or split non-critical work using the project's conventions, and account for the loading, main-thread, privacy, and failure cost of embeds and trackers.
- **Stable responsive rendering:** reserve space for media and asynchronous regions, avoid inserting content above the visitor's current position, and check the actual mobile and desktop composition while assets load. Decorative motion must not make the primary journey sluggish or unstable.

Performance choices must preserve accessibility, content quality, required integrations, and the chosen visual direction. A smaller image that no longer communicates the intended detail, or delayed code that breaks a control, is not a successful optimization.

## Verify and hand off

Run the project's existing performance checks on the production-like build when available. Exercise the primary journey as well as initial load when interaction code changed. Record the tested route/state, device or viewport, tool, conditions, budget source, baseline, result, and material variance. Report asset or bundle changes that explain the result; a bundle size alone does not prove user-perceived speed.

Field data and lab results answer different questions. Real-user field data is the best evidence of production experience; a local audit or trace helps reproduce and diagnose a change but does not prove the field outcome. Keep simulated throttling, local measurements, and production data labeled separately.

If measurement tools or a representative environment are unavailable, inspect the performance-relevant code and assets, run available build checks, and name the exact measurement gap. Never fabricate scores, field data, or improvement claims. Do not block an otherwise safe small change on an unrelated full-site audit.
