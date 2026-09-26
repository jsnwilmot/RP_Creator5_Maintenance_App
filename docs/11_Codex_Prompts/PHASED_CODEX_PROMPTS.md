# Phased Codex Prompts

**Project:** Rose & Paw Creator 5 Maintenance App  
**Branch:** `web-dev`  
**Rule:** Execute one phase at a time. Do not start the next phase until Architect approval.

---

## Phase 1: Web foundation and quality gates

### Objective
Create the production-ready React + TypeScript + Vite foundation inside `web/` without implementing the full maintenance workflow.

### Requirements
- Scaffold/normalize Vite + React + TypeScript.
- Enable strict TypeScript.
- Establish source folders for app, domain, data, services, UI, and tests.
- Add Rose & Paw application shell and basic responsive navigation.
- Configure Vite production builds for the approved public URL `https://apps.rosenpaw.ca/creator5-maintenance/` using production base path `/creator5-maintenance/`.
- Add CSS custom-property design tokens with accessible defaults.
- Configure lint, type-check, unit tests, component tests, and production build scripts.
- Configure Vitest + React Testing Library.
- Add Playwright scaffolding if appropriate, but no large end-to-end suite is required yet.
- Preserve the existing repository README/documentation.
- No backend, authentication, cloud persistence, analytics, or maintenance business logic beyond placeholders.

### Required checks
- `npm ci`
- type-check
- lint
- tests
- production build

### Completion
Return exact files changed, commands/results, commit SHA if committed, and any blockers.

---

## Phase 2: Domain model and IndexedDB persistence

### Objective
Implement the typed domain model, IndexedDB schema, repository layer, and migration foundation.

### Requirements
- Implement entities from `03_Data_Model/DATA_MODEL.md`.
- Add schema versioning.
- Create object stores/indexes required by the approved model.
- Implement printer/template/task/checklist/state/service/settings/metadata repositories.
- Keep IndexedDB access outside React components.
- Add migration test fixtures.
- Add validation for core record types.
- Do not implement UI workflows beyond minimal test harnesses if needed.

### Required tests
- first database creation;
- CRUD for each core repository;
- multi-printer isolation at repository level;
- transaction rollback for failed related writes;
- supported migration behavior;
- no silent database reset on failure.

---

## Phase 3: Creator 5 template and maintenance engine

### Objective
Implement the built-in Creator 5 template and pure maintenance-status calculation engine.

### Requirements
- Use `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md` as source of truth.
- Implement interval types HOURS, DAYS, HOURS_OR_DAYS, AFTER_PRINT, AS_NEEDED/EVENT.
- Implement OK, SOON, DUE, AS_NEEDED status.
- Implement next-due calculation.
- Implement Creator 5 template versioning.
- Initialize maintenance state correctly when adding a printer at non-zero hours.
- Do not put calculation logic in components.

### Required tests
- boundary tests for every interval type;
- date-only timezone-safe behavior;
- 338-hour example;
- task/template classification;
- template version/snapshot behavior.

---

## Phase 4: Printer management and dashboard

### Objective
Implement the user flow for creating, editing, selecting, archiving/deleting, and viewing multiple printers.

### Requirements
- Add Printer.
- Edit Printer.
- Printer selector.
- Lower-hour warning/confirmation.
- Dashboard with selected printer, current hours, due/soon counts, next major service, and recent activity.
- Empty first-run state.
- Printer-specific data isolation.
- Archive and permanent-delete confirmation.
- Responsive and keyboard-accessible behavior.

### Required tests
- two-printer isolation;
- create/edit/select;
- lower-hour confirmation;
- delete/archive behavior;
- dashboard status rendering.

---

## Phase 5: Maintenance Center, checklist, completion, and service history

### Objective
Implement the core maintenance workflow.

### Requirements
- Maintenance Center list with status/interval/last/next due.
- Maintenance task details/checklist.
- Service completion form.
- Permanent Service Record creation.
- Current-cycle reset after successful completion.
- Required-checklist override warning and explicit confirmation.
- Store override and skipped-item snapshots.
- As-needed maintenance record flow.
- Service History list/detail/filter basics.
- Atomic completion transaction.

### Required tests
- normal completion;
- incomplete-checklist cancel;
- incomplete-checklist override;
- history persistence;
- next-cycle reset;
- failure does not leave partial record/state.

---

## Phase 6: Backup, restore, and automatic local-file backup

### Objective
Implement robust local data portability and recovery.

### Requirements
- Versioned JSON backup schema.
- Manual Export Backup.
- Import validation before any change.
- Full replacement restore only. No merge.
- Transactional/staged restore so failure preserves old data.
- Supported backup-schema migrations.
- Backup screen/status.
- Optional File System Access API integration where available.
- User explicitly authorizes backup destination.
- Automatic file backup after significant successful data changes, debounced.
- Do not rely on page exit for backup correctness.
- Manual fallback always available.

### Required tests
- round-trip backup;
- malformed/unsupported backup rejection;
- replacement restore;
- failed restore preservation;
- permission loss;
- unsupported browser fallback.

---

## Phase 7: Settings, Help, About, accessibility, and security hardening

### Objective
Complete the non-core screens and harden the application for public use.

### Requirements
- Settings.
- Help/Instructions.
- About/Disclaimer.
- Maintenance reference presentation.
- Final Rose & Paw brand treatment.
- Empty/error states.
- WCAG-oriented keyboard/focus/labels/contrast/reflow review.
- Confirm no raw HTML injection path.
- Confirm maintenance data is not sent to a backend.
- Add backup-loss warnings and local-storage explanations.

### Required tests
- accessibility component checks;
- keyboard navigation manual evidence;
- injection regression tests;
- privacy/network behavior review.

---

## Phase 8: Optional offline/static-asset resilience

### Applicability gate
Architect/user must explicitly approve this phase for Version 1.

### Objective
If approved, add safe offline/static-asset caching without changing the user-data model.

### Requirements
- Service worker/PWA tooling only if approved.
- Cache application assets, not maintenance records.
- IndexedDB remains authoritative user-data storage.
- Handle app update/version changes safely.
- Do not claim service-worker cache is a backup.

### Required tests
- first online load;
- subsequent offline application-shell load;
- update behavior;
- IndexedDB continuity.

---

## Phase 9: Release hardening and deployment preparation

### Objective
Prepare the stable public release.

### Requirements
- Full regression suite.
- Volume/performance checks from Test Plan.
- Supported browser checks.
- Production build.
- Dependency/security review.
- Documentation alignment.
- Version/release notes.
- Static-host deployment configuration.
- Production smoke-test checklist.
- No production deployment until explicitly authorized.

### Completion gate
Architect/user reviews evidence and authorizes stable merge/deployment.
