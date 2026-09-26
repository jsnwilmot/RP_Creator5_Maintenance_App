# Next Steps

**Project:** Rose & Paw Creator 5 Maintenance App  
**Status:** Architect Reviewed Baseline

## Immediate next action

Use the corrected project package as the source of truth for implementation planning.

Before application code is written, confirm the Phase 1 prompt in `11_Codex_Prompts/PHASED_CODEX_PROMPTS.md` against the current `web-dev` repository structure.

## Recommended implementation order

1. Project foundation and quality gates.
2. Data model and IndexedDB persistence.
3. Creator 5 maintenance template and maintenance-status engine.
4. Multi-printer management and dashboard.
5. Maintenance Center, checklist, service completion, and service history.
6. Backup, restore, and optional automatic local-file backup.
7. Settings, Help, About, responsive layout, accessibility, and security hardening.
8. Offline/static-asset resilience if approved for Version 1.
9. Release hardening, regression testing, and production deployment preparation.

## Architecture rules to preserve

- Keep user maintenance data local to the browser.
- Do not introduce authentication, a backend, cloud synchronization, analytics that receive maintenance records, or paid services without a scope review.
- Keep built-in maintenance template definitions separate from user history.
- Preserve Service Records through template upgrades.
- Never depend on a page-close event for reliable backup.
- Validate backup files before altering local data.
- Restore is full replacement only in Version 1.
- Do not silently lower lifetime printer hours.
- Do not silently complete maintenance with missing required checklist items.

## Repository workflow

- Active browser development branch: `web-dev`.
- Stable public branch: `main`.
- Use focused commits.
- Run required checks before requesting review.
- Do not merge to `main` without approval.

## First implementation phase

Phase 1 should establish the web stack, folder structure, lint/test/build tooling, application shell, Rose & Paw theme tokens, and CI-quality commands without implementing full business behavior.
