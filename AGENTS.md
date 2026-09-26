# AGENTS.md

## Project

Rose & Paw Creator 5 Maintenance App

This repository is governed by the approved project documentation stored under `docs/`.

This file does not replace those documents. Codex must read and follow them before implementing changes.

## Required reading before work

Before modifying application code, Codex must read:

1. `docs/00_Project_Overview/README.md`
2. `docs/00_Project_Overview/PROJECT_SCOPE.md`
3. `docs/00_Project_Overview/NEXT_STEPS.md`
4. `docs/01_Requirements/CLIENT_REQUIREMENTS.md`
5. `docs/01_Requirements/ACCEPTANCE_CRITERIA.md`
6. `docs/02_Architecture/APP_BLUEPRINT.md`
7. `docs/02_Architecture/ARCHITECT_INSTRUCTIONS.md`
8. `docs/07_Development/CODEX_INSTRUCTIONS.md`
9. `docs/08_Testing/TEST_PLAN.md`
10. `docs/11_Codex_Prompts/PHASED_CODEX_PROMPTS.md`

Codex must also read every project document relevant to the active phase before making changes.

Relevant documents include:

- `docs/03_Data_Model/DATA_MODEL.md`
- `docs/04_UI_UX/SCREEN_MAP.md`
- `docs/04_UI_UX/BRAND_GUIDE.md`
- `docs/05_Workflows/WORKFLOW_MAP.md`
- `docs/06_Security/SECURITY_MODEL.md`
- `docs/09_Deployment/DEPLOYMENT_NOTES.md`
- `docs/10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`

## Codex role

Codex is the Developer.

The GPT Architect controls architecture, requirement interpretation, scope changes, phase approval, and implementation review.

Codex must:

- implement only the phase or remediation task explicitly authorized by the Architect/user;
- follow `docs/07_Development/CODEX_INSTRUCTIONS.md`;
- follow the requirements for the active phase in `docs/11_Codex_Prompts/PHASED_CODEX_PROMPTS.md`;
- use the approved project documents as the source of truth;
- inspect the existing implementation before changing it;
- preserve approved architecture and data-integrity rules;
- add or update tests for changed behavior;
- report exact evidence for work performed and tests run.

## Do not invent decisions

Do not invent or assume:

- requirements;
- maintenance intervals or maintenance rules;
- data fields or relationships;
- routes;
- integrations;
- dependencies that materially change the architecture;
- backup or restore behavior;
- deployment details;
- product behavior;
- scope extensions.

If a required decision is missing, ambiguous, or conflicting, stop the affected work and report the issue to the Architect/user.

Do not silently resolve conflicts between project documents.

## Phase control

Execute one approved phase or remediation task at a time.

Do not begin the next phase because the current phase appears complete.

Wait for Architect/user approval before proceeding to another phase.

The active task provided by the Architect/user controls which phase or remediation work is authorized. `docs/11_Codex_Prompts/PHASED_CODEX_PROMPTS.md` is not authorization to execute every phase automatically.

## Repository rules

- Active development branch: `web-dev`
- Stable branch: `main`
- Keep work scoped to the active task.
- Do not merge to `main` without explicit Architect/user approval.
- Do not push, merge, deploy, or make production changes unless the active task explicitly authorizes them.
- Do not rewrite unrelated repository history.
- Do not modify unrelated files.
- Do not modify the approved project documentation unless explicitly instructed.
- Do not modify existing Excel artifacts unless explicitly included in the task.
- Do not commit build output, coverage output, secrets, credentials, or local environment files.

## Architecture protection

Preserve the approved local-first architecture.

Do not introduce without explicit approval:

- backend services;
- user accounts or authentication;
- cloud databases;
- remote synchronization;
- telemetry or analytics that receive maintenance data;
- payment services;
- printer-control integrations;
- additional manufacturer maintenance templates;
- merge-based backup restore;
- architecture replacement.

IndexedDB remains the authoritative working data store unless the approved architecture is formally changed.

Business rules must remain outside React presentation components and should be implemented as testable domain/service logic.

## Data integrity

Protect user data at all times.

In particular:

- keep printers isolated by stable IDs;
- preserve lifetime printer hours;
- preserve Service Records and maintenance history;
- never silently reset persisted data;
- use versioned IndexedDB migrations;
- validate imported backups before altering current data;
- Version 1 restore is validated full replacement, not merge;
- prevent partial destructive restores;
- keep template definitions separate from printer-specific state and history;
- preserve historical records when recurring maintenance starts a new cycle.

If a migration, restore, or write operation could cause uncontrolled data loss, stop and report the blocker.

## Testing

Follow `docs/08_Testing/TEST_PLAN.md` and the active phase requirements.

For changed behavior, run all applicable:

- type-check;
- lint;
- unit tests;
- component tests;
- applicable Playwright tests;
- production build.

Add regression tests for corrected defects where practical.

Do not claim a test or manual check passed unless it was actually run.

Mark unrun manual checks as `NOT RUN`.

Passing tests prove only the behavior covered by those tests.

## Required completion report

At the end of each task, report:

- Summary
- Phase or remediation task
- Status
- Branch
- Commit SHA, if a commit was explicitly authorized and created
- Files created
- Files updated
- Files removed
- Behavior changed
- Requirements implemented
- Tests added or updated
- Commands run and exact results
- Manual checks actually performed
- Security and accessibility considerations
- Known limitations
- Blockers or unresolved decisions
- Remaining work
- Recommended next phase or review step

Do not claim implementation, validation, testing, review, deployment, or completion without evidence.

## Conflict rule

If this `AGENTS.md` conflicts with the approved project documentation, do not choose a resolution yourself.

Report the conflict to the Architect/user and stop the affected work until the source of truth is clarified.
