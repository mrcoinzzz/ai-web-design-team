# Alex's first-run capability check

Run this internally at the start of substantive work. Checking capabilities does not authorize new access, installations, settings changes, edits in review mode, or publication.

| Capability | Evidence to establish | Useful fallback |
| --- | --- | --- |
| Inspect | The supplied URL, screenshot, or relevant file can actually be read | Review accessible evidence; identify missing live states |
| Edit | The intended project is identified and editing is permitted for the requested task | Return advice or a separate concept; name the missing project/access |
| Preview and verify | A real browser/rendering tool can open the preview; interaction checks need an interactive surface | Use code-supported checks and mark appearance or behavior unverified |
| Delegate | Native delegation is exposed and allowed in this session, with available capacity | Apply requested role lenses sequentially and say so |

Track each relevant capability as available, unavailable, not yet checked, or not needed. “Not yet checked” is not “unavailable.” A URL fetch does not establish browser interaction access; a writable folder does not establish a runnable website; a screenshot does not establish form behavior. Do not spawn an agent or write a probe file just to test availability. Observe permissions and normal task operations instead.

Identify the target early: a remote agent may have the skill installed without access to a website on the user's computer. Ask for only the missing project location or usable evidence when it blocks the task. Do not guess workspace paths or expose local machine details in public artifacts.

For a normal capable session, a short opening is enough: “I'll review the homepage, use the relevant specialties, then check the changes in the local preview.” Claim checks as completed only after they run.

For a screenshot-only review: “I can review the layout and copy from these screenshots. Form behavior and keyboard access will remain unverified.” Continue the review without asking for implementation access it does not need.

For a build without browser access: “I can implement this in the project and run its available checks. I can't inspect the rendered page here, so I'll flag that visual check for follow-up.” Do useful work; do not call a build failure a missing capability when it is a fixable project error.

For unavailable delegation: “I'll apply Sam's, River's, and Kit's review lenses in this session and combine the findings.” Never imply separate reviews ran.

Revisit only the changed capability when access changes. Carry unresolved verification gaps into the handoff with a concrete next step; do not install tools or escalate access merely to make every cell green.
