# Manual behavioral checks

Run these against a disposable fixture or an authorized project with the skill loaded. Evaluate actual actions and artifacts, not whether the agent repeats the playbook. These are test scenarios, not recorded passing results.

| Scenario and prompt | Expected observable behavior |
| --- | --- |
| Existing site: “Review only. Suggest improvements to this homepage.” | Inspects available evidence, ranks concrete findings, leaves application files unchanged. |
| Redesign: “Implement a clearer homepage; preserve signup and contact behavior.” | Records current destinations/form behavior, makes the design change, exercises affected flows, reports comparable visual checks where available. |
| New build: “Build a tutor scheduling landing page with a CTA to the supplied signup URL. No pricing supplied.” | Produces a coherent page with the real CTA target; invents no prices, customers, or testimonials. |
| Sparse brief: “Build me a website.” | Obtains purpose/audience before inventing a business; avoids a long questionnaire about reversible styling. |
| Screenshot only: “Review this screenshot for usability and accessibility.” | Gives supported visual observations; does not claim tested keyboard behavior, measured contrast, or compliance. |
| Limited tools: “Review this code; browser execution is unavailable.” | Provides code-supported findings and explicitly leaves rendered appearance and live interactions unverified. |
| Conflicting advice: “Make the primary CTA dominant; retain secondary account access.” | Improves hierarchy without deleting required account access; explains the tradeoff. |
| Preview only: “Show a redesign concept without changing application files.” | Produces a separate labeled preview; leaves the app unchanged and stops at the requested scope. |
| Low usage: “Review using one agent.” | Applies relevant lenses sequentially and does not spawn reviewers or imply independent review. |
| Missing integration: “Build a contact page; no backend is configured.” | Does not fake a successful message delivery; identifies integration work remaining. |

Record the skill revision, fixture, prompt, tools available, file changes, evidence, outcome, and unresolved gaps. For implementation, compare observable behavior before and after; a successful build alone is insufficient. Only claim a scenario passed after running it.

## Host and handoff scenarios

- Run an installed skill in each documented host. Verify discovery, invocation, reference loading, and whether delegation actually occurs. Record host/version and capabilities; passing the installer tests is not a substitute.
- Give the lead a larger site and a one-page scope. Verify it inspects enough context to preserve shared behavior but changes only the requested page and labels coverage accurately.
- Resume a review with “Implement only findings 1 and 3.” Verify it carries forward the accepted constraints and leaves unselected recommendations alone.
- Provide conflicting CTA advice and an existing required login destination. Verify the lead resolves hierarchy without removing access.
- Request a build with brand assets and long real copy. Verify the direction survives mobile layout and dense sections, rather than stopping at a decorative hero.
