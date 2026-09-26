# Architect Instructions

**Project:** Rose & Paw Creator 5 Maintenance App  
**Project type:** Web application  
**App subtype:** Local-first single-user maintenance tracking SPA  
**Status:** Architect Reviewed Baseline

## Architect role

GPT Architect owns scope control, architecture, requirement interpretation, phase authorization, and review. Codex is the Developer and must not invent scope or independently merge stable work.

## Product boundary

Version 1 is a client-side maintenance tracker for one or more FlashForge Creator 5 printers.

The application:
- tracks lifetime printer hours;
- calculates maintenance state;
- provides reusable checklists;
- records permanent service history;
- stores working data locally;
- exports/imports backups;
- may maintain an authorized local backup file where browser support permits.

The application does not require a backend, cloud database, user account, authentication, payment service, printer-control integration, or remote synchronization.

## Approved implementation architecture

### Front end
- React.
- TypeScript with strict type checking.
- Vite for local development and production build.
- Client-side routing is permitted. React Router is the preferred routing library if route-based navigation is implemented.
- Use native semantic HTML first. Avoid a large UI framework unless separately approved.

### Styling
- CSS custom properties for Rose & Paw design tokens.
- Plain CSS or CSS Modules.
- Maintenance status must use text in addition to colour.
- WCAG 2.2 Level AA is the target where practical.

### Persistence
- IndexedDB is the authoritative local working store.
- A small IndexedDB wrapper such as `idb` is permitted.
- LocalStorage may be used only for trivial non-authoritative preferences where appropriate; it must not be the maintenance-record database.
- Database schema changes require explicit versioned migrations.

### Validation
- Validate all user inputs.
- Validate backup files before any destructive operation.
- A schema validator such as Zod is permitted for backup/runtime boundary validation.
- Imported strings are data, never trusted HTML.

### Backup and restore
- Manual backup export is required.
- Backup format is versioned JSON.
- Version 1 restore is full replacement only.
- No merge restore in Version 1.
- Restore must validate before changing IndexedDB.
- Replacement should be performed transactionally or through an equivalent staged process so a failed restore does not leave partial data.
- Optional File System Access API support may be used for an authorized local backup file.
- Automatic file backup is triggered after significant successful data changes, preferably debounced.
- Browser exit/unload may be used only as a best-effort extra attempt. It must never be the only backup trigger because asynchronous writes are not guaranteed to complete during page exit.

### Maintenance templates
- Built-in template definitions are separate from user state and history.
- Creator 5 Version 1 rules are defined in `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`.
- Template definitions must be versioned.
- Template updates must not rewrite historical Service Records.
- Service Records should preserve task/template snapshot fields required to understand historical work after future template changes.

### Maintenance checklist override
- Required checklist items should normally be completed before service completion.
- The user may override an incomplete required checklist only after an explicit warning and confirmation.
- The created Service Record must record that an override occurred and preserve which required items were incomplete.

## Repository and branch rules

- Repository: `jsnwilmot/RP_Creator5_Maintenance_App`.
- Browser work is performed on `web-dev`.
- `main` is the stable public branch.
- Do not merge to `main` without Architect/user approval.
- Keep changes scoped to the active phase.
- Existing Excel artifacts are outside normal web implementation changes unless explicitly included in a phase.

## Architecture layers

Use clear boundaries:

1. `domain`
   - entities
   - interval/status logic
   - maintenance calculations
   - pure validation rules

2. `data`
   - IndexedDB adapter
   - migrations
   - repositories
   - backup serialization/deserialization

3. `services`
   - printer service
   - maintenance completion service
   - backup/restore service
   - template service

4. `ui`
   - pages/views
   - reusable components
   - forms
   - navigation

5. `app`
   - application bootstrap
   - routing
   - composition/providers
   - error boundary

Business rules must not be buried inside presentation components.

## Security expectations

The project stores low-sensitivity maintenance data. Use proportional controls:

- HTTPS in production.
- Same-origin browser storage.
- No secrets in client source.
- No raw HTML rendering of user/imported content.
- Backup validation and size sanity checks.
- Explicit user permission for local file access.
- No third-party script that receives maintenance records without a future scope/privacy review.

## Accessibility expectations

- Full keyboard operation for primary workflows.
- Visible focus.
- Programmatic form labels and validation messages.
- Text labels for DUE, SOON, OK, and AS NEEDED.
- Accessible dialog focus management.
- Responsive use at common desktop/tablet/mobile widths.
- Zoom and reflow checks.
- No required drag-only interactions.

## Testing expectations

Use:
- Vitest for domain/service unit tests.
- React Testing Library for component behavior.
- Playwright for critical browser workflows where practical.
- Build, type-check, lint, and test must pass before phase review.

Maintenance calculation and backup/restore logic require especially strong automated coverage.

## Scope-change process

Return changes to the Architect before implementing:
- backend or cloud persistence;
- authentication/accounts;
- remote synchronization;
- paid services;
- printer-control APIs;
- additional manufacturer templates;
- merge-based restore;
- telemetry/analytics that receives maintenance records;
- architecture replacement.

## Completion rule

A phase may be approved only when:
- scope is satisfied;
- tests required by the phase pass;
- data-loss/error paths are covered where applicable;
- documentation reflects implemented behavior;
- Codex reports exact evidence rather than assumptions.
