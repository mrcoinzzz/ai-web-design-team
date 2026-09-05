#!/usr/bin/env python3
"""Copy the self-contained skill into an existing project without overwriting."""

import argparse
from pathlib import Path
import shutil
import sys


SKILL_NAME = "ai-web-design-team"
SOURCE = Path(__file__).resolve().parents[1] / "skills" / SKILL_NAME
TARGETS = {
    "codex": ".agents",
    "claude": ".claude",
    "cursor": ".cursor",
    "copilot": ".github",
}


def install(tool, project, dry_run=False):
    project = Path(project).expanduser().resolve()
    if not project.is_dir():
        raise ValueError("Project folder must already exist. Create it first for a new site.")
    if not (SOURCE / "SKILL.md").is_file():
        raise ValueError("Skill source is missing. Run from a complete repository download.")
    if any(path.is_symlink() for path in SOURCE.rglob("*")):
        raise ValueError("Skill source contains a symlink; use a regular source copy.")

    destination = project / TARGETS[tool] / "skills" / SKILL_NAME
    for path in (destination.parent.parent, destination.parent, destination):
        if path.is_symlink():
            raise ValueError("Destination contains a symlink; use a regular directory or install manually.")
    if destination.exists():
        raise ValueError(
            "Installation already exists. Compare it with the source and move your old "
            "copy outside skill directories before reinstalling. No files were changed."
        )
    if dry_run:
        return "Would install to: {}".format(destination)

    # No dirs_exist_ok: never merge into or overwrite an existing installation.
    shutil.copytree(SOURCE, destination)
    return "Installed to: {}\nOpen that website project in your agent to use the skill.".format(destination)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("tool", choices=TARGETS)
    parser.add_argument("--project", required=True, help="Existing website project folder")
    parser.add_argument("--dry-run", action="store_true", help="Print destination without writing files")
    args = parser.parse_args()
    try:
        print(install(args.tool, args.project, args.dry_run))
    except (OSError, ValueError) as exc:
        print("Install failed: {}".format(exc), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
