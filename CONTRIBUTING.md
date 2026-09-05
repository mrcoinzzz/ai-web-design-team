# Contributing

Keep the pack easy to invoke, portable, and focused on useful design outcomes. The source of truth is `skills/ai-web-design-team`; do not commit duplicate installed copies.

For a workflow change, provide a realistic prompt, what went wrong, the focused change, and evidence from trying it. For a host integration, link the official setup documentation and distinguish documented support from actual end-to-end testing. Keep client-specific commands in the setup guide rather than the shared role instructions.

## Local checks

Python 3.9+; no third-party packages required:

```sh
python3 -m unittest discover -s tests -v
```

These checks exercise all installer destinations, copy completeness, overwrite protection, dry runs, invalid paths, and local documentation links. They do not measure design quality. Run relevant [behavioral scenarios](evals/scenarios.md) in an isolated project for workflow changes and record actual evidence, including failures and unavailable tools.

Keep example sites and data fictional or authorized for sharing. Before publishing commits, verify the author and committer identity with `git log -1 --format=fuller`; use your preferred public identity and a noreply address if appropriate. Do not include local machine paths or personal details in public test reports.
