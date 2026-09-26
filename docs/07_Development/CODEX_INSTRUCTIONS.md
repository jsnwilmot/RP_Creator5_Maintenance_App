# Codex Instructions

**Project:** Rose & Paw Creator 5 Maintenance App  
**Project type:** Web application  
**App subtype:** Local-first single-user maintenance tracking SPA  
**Active development branch:** `web-dev`  
**Stable branch:** `main`

## Developer role

Codex is the Developer. Implement only the active Architect-approved phase. Do not expand scope, make product decisions that are not documented, or merge stable work without approval.

## Required stack

- React
- TypeScript with strict checking
- Vite
- IndexedDB
- `idb` or equivalent minimal IndexedDB wrapper is permitted
- Zod or equivalent schema validation is permitted
- Vitest
- React Testing Library
- Playwright for critical end-to-end/browser workflows where applicable
- Plain CSS/CSS Modules with CSS custom properties preferred over a large UI framework

Do not replace the stack without Architect approval.

## Core architecture rules

- Keep business rules out of React components.
- Maintenance calculations should be pure/testable domain functions.
- Use repository/service boundaries for IndexedDB access.
- Keep template definitions separate from printer-specific maintenance state.
- Keep permanent Service Records immutable except for narrowly defined correction/edit behavior approved later.
- Version IndexedDB migrations.
- Version backup format independently from application version where useful.
- Never trust imported backup content.
- Never render imported/user text as raw HTML.

## Version 1 decisions

- Multiple independently named Creator 5 printers are supported.
- Built-in Creator 5 maintenance rules come from `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`.
- Other predefined printer models are out of scope.
- No account/authentication/backend/cloud database.
- Manual backup export and restore are required.
- Restore is validated full replacement only. Do not implement merge restore.
- Optional automatic local-file backup may use the File System Access API where supported and explicitly authorized.
- Automatic backup runs after significant saved changes. Do not depend on `beforeunload` or page exit to finish an async backup.
- Incomplete required maintenance checklist items require an explicit override confirmation. Record the override and skipped required items in the resulting Service Record.

## Branch and source-control rules

- Work only on `web-dev` unless the active prompt says otherwise.
- Keep `main` stable.
- Use focused commits.
- Do not push a merge to `main`.
- Do not modify the Excel workbook as part of web phases unless explicitly approved.
- Do not rewrite unrelated repository history.
- Do not add generated build output, coverage output, secrets, or local environment files.

## Coding standards

- Strict TypeScript.
- Clear names over abbreviations.
- Small, testable functions.
- Prefer immutable domain inputs/outputs where practical.
- Exhaustive handling of maintenance interval/status enums.
- Centralize date/time handling.
- Avoid timezone conversion bugs for date-only maintenance rules.
- Do not silently coerce invalid user data.
- Use accessible native controls where possible.
- Confirm destructive actions.

## Persistence rules

- IndexedDB is authoritative.
- Use atomic transactions for related writes.
- Completing maintenance must not create a Service Record without also updating the current maintenance state successfully.
- Restore must validate first and then replace through a transaction/staged process.
- Migration failure must preserve the previous database when possible.
- Do not silently reset or recreate a database because a migration failed.

## Backup rules

Backup must contain:
- backup format version;
- application version;
- schema version;
- exported timestamp;
- printers;
- templates required to understand user state, or stable references/snapshots as defined by the backup schema;
- maintenance state;
- checklist state;
- service records;
- settings;
- backup/schema metadata as appropriate.

Reject unsupported or malformed backups without changing current data.

## Security rules

- No secrets in source.
- No arbitrary local file access.
- Request file-system permissions only from a user-initiated backup action.
- Sanitize/escape display values through normal React rendering.
- Do not use `dangerouslySetInnerHTML` for user/imported data.
- Avoid third-party analytics or scripts that can receive maintenance records.

## Accessibility rules

- Keyboard-accessible primary workflows.
- Visible focus.
- Label all form controls.
- Use dialog semantics/focus management.
- Do not use colour alone for maintenance status.
- Preserve readable layout at browser zoom and narrow widths.

## Test rules

For every phase:
- add/update tests for changed behavior;
- run type-check;
- run lint;
- run unit/component tests;
- run production build;
- run applicable Playwright tests;
- report exact command results.

Do not claim a manual test was run if it was not run.

## Reporting format

Return:
- Summary
- Phase
- Status
- Branch
- Commit SHA, if committed
- Files created
- Files updated
- Files removed
- Requirements implemented
- Tests added/updated
- Commands run and results
- Manual checks actually performed
- Accessibility/security considerations
- Known limitations
- Blockers
- Recommended next phase

## Stop conditions

Stop affected work and report a blocker if:
- a documented requirement conflicts with another source-of-truth document;
- implementation would require a backend/account/cloud service;
- backup semantics cannot be implemented without changing approved behavior;
- a maintenance rule is ambiguous;
- data migration could risk destructive loss without a safe path;
- a new dependency materially changes architecture or licensing.
