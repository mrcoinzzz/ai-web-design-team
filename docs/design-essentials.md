# Three lessons from Designer Skills

[Back to the README](../README.md)

We reviewed selected playbooks in [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills), a broader collection spanning research, systems, interaction, and testing. These are our three highest-value takeaways for a small website team. Links below pin the inspected revision; this was a playbook comparison, not an end-to-end benchmark of the other repository.

## 1. Establish the problem before choosing the treatment

Their [problem-framing command](https://github.com/Owl-Listener/designer-skills/blob/9a6930cf84a822eb458624bd11c61aac5bbdf224/ux-strategy/commands/frame-problem.md) connects the challenge, constraints, and success criteria. Their [jobs-to-be-done skill](https://github.com/Owl-Listener/designer-skills/blob/9a6930cf84a822eb458624bd11c61aac5bbdf224/design-research/skills/jobs-to-be-done/SKILL.md) asks what outcome motivates the user.

Our team already captured audience and CTA, but needed a clearer connection between a design recommendation and evidence of a visitor problem. The lead now records a short success brief: visitor situation, friction and its source, desired outcome, observable check, and uncertainty. The messaging specialist uses it to judge the content.

For example, “make it premium” becomes a design preference alongside a concrete task such as helping visitors understand the offer and request a demo. A working demo link is testable now; increased demo requests need measurement.

## 2. Turn appearance into reusable decisions

Their [design-token skill](https://github.com/Owl-Listener/designer-skills/blob/9a6930cf84a822eb458624bd11c61aac5bbdf224/design-systems/skills/design-token/SKILL.md) organizes shared visual values. Their [component specification skill](https://github.com/Owl-Listener/designer-skills/blob/9a6930cf84a822eb458624bd11c61aac5bbdf224/design-systems/skills/component-spec/SKILL.md) connects a component's appearance to variants, behavior, and accessibility.

We already asked for consistent styling. The visual specialist now maps the relevant colors, typography, spacing, and repeated controls to existing source files or a small new shared set. The lead checks other consumers when changing a shared component. This makes consistency implementable without requiring a separate design-system project.

## 3. Validate the journey beyond its successful state

Their [state-machine skill](https://github.com/Owl-Listener/designer-skills/blob/9a6930cf84a822eb458624bd11c61aac5bbdf224/interaction-design/skills/state-machine/SKILL.md) makes transitions explicit. Their [test-scenario skill](https://github.com/Owl-Listener/designer-skills/blob/9a6930cf84a822eb458624bd11c61aac5bbdf224/prototyping-testing/skills/test-scenario/SKILL.md) describes realistic visitor tasks with observable outcomes.

Our verification guidance mentioned error states but lacked a small reusable way to specify them. The clarity/accessibility specialist now proposes relevant state, event, expected-result, and recovery checks. The lead runs available checks and separates those from usability studies that have only been proposed.

A contact flow should handle invalid input, waiting, confirmation, and failure where applicable. It should not lose safe input unnecessarily or imply a message was delivered without backend confirmation.

## Keeping the team easy to use

All three practices live in one short [internal reference](../skills/ai-web-design-team/references/essentials.md), routed by the existing skill. There are no new agents, commands, dependencies, compulsory documents, or approval stages. The lead scales the detail to the task and includes it in the normal result.

These are independently written adaptations of general practices identified in the linked playbooks. No upstream skill files or plugin configuration are bundled. The broader repository remains useful when a project actually needs a dedicated research, systems, or testing workflow.

**Still missing:** evidence from real projects. Installer tests establish packaging behavior, not whether this team makes better design decisions. The next meaningful evaluation is an existing-site redesign and a new-site build, recording the starting evidence, actual changes, flow checks, and user feedback.
