# Test Plan

**Project:** Rose & Paw Creator 5 Maintenance App  
**Status:** Architect Reviewed Baseline

## Test objectives

Verify that the web application:
- keeps each printer's data isolated;
- calculates maintenance status correctly;
- preserves permanent service history;
- survives normal browser sessions and schema upgrades;
- exports and restores complete backups safely;
- does not corrupt current data when import, migration, or backup operations fail;
- meets core accessibility and responsive-use requirements;
- does not transmit maintenance data to a backend.

## Automated test stack

- Vitest: domain, data, migration, and service unit tests.
- React Testing Library: component and page behavior.
- Playwright: critical user workflows in supported Chromium-based browsers and at least one additional modern browser where practical.
- TypeScript type-check and production build as mandatory quality gates.
- Linting as a mandatory quality gate once configured.

## Priority 1: maintenance engine tests

Cover every interval type:

### HOURS
- OK before the SOON threshold.
- SOON inside the configured threshold.
- DUE at or beyond next due hours.
- Completing service recalculates the next due hours.

### DAYS
- Correct date-only comparison without timezone drift.
- SOON and DUE boundaries.

### HOURS_OR_DAYS
- DUE when either configured limit is reached.
- SOON when either configured threshold is reached.
- Earlier due condition controls displayed next due.

### AFTER_PRINT
- Completion is valid for the current cycle.
- A later printer-hour change creates a new due cycle.
- Date-based fallback behavior follows the Creator 5 template specification.
- Previous completion remains in history.

### AS_NEEDED / EVENT
- Does not generate a false scheduled due date.
- Event completion can create a Service Record.
- Event-specific checklist runs when explicitly invoked.

## Priority 1: multi-printer isolation

- Create at least two printers with different hours.
- Update Printer A hours and confirm Printer B is unchanged.
- Complete maintenance on Printer A and confirm Printer B state/history is unchanged.
- Switch printers and verify dashboard, checklist, and history context.
- Delete/archive one printer and confirm no unrelated records are removed.

## Priority 1: service completion

- Completing scheduled service creates one permanent Service Record.
- Maintenance state and Service Record update atomically.
- Next cycle is created.
- Current-cycle checklist resets.
- Historical service record remains unchanged.
- Completion with required checklist items missing shows a warning.
- Canceling override does not complete service.
- Confirming override completes service and records:
  - override flag;
  - skipped required checklist item IDs/snapshots.

## Priority 1: backup and restore

### Export
- Backup contains the complete required data set.
- Backup has format/schema/application version metadata.
- Export does not mutate application data.

### Restore
- Invalid JSON is rejected without changing current data.
- Missing required structures are rejected.
- Unsupported schema versions are rejected.
- Older supported versions are migrated.
- Current-version valid backup restores successfully.
- Version 1 restore replaces the entire local data set after explicit confirmation.
- No merge behavior is implemented.
- A failed restore leaves the pre-restore data intact.
- Restored maintenance status is recalculated consistently.

### Automatic local-file backup
Where browser support permits:
- user must grant permission;
- successful significant data change marks backup pending then current after write;
- permission loss produces PERMISSION_REQUIRED/FAILED state;
- IndexedDB data remains usable after backup failure;
- manual export remains available.

Do not test page-exit backup as a reliability guarantee. Exit-time writes are best-effort only.

## Priority 1: IndexedDB and migrations

- First launch creates the expected stores/indexes.
- Reopen preserves data.
- Supported schema migration preserves printers and service records.
- Failed migration does not silently wipe the database.
- Migration tests use fixture databases for each supported prior schema version.

## Data validation tests

### Printer
- Required name, manufacturer, model, template, hours.
- Hours cannot be negative.
- Lower lifetime hours require explicit confirmation.
- Duplicate display names are allowed but may show a usability warning.

### Service records
- Required printer ID, date, printer hours, maintenance type, work performed.
- Scheduled records require task linkage/snapshot fields.
- Cost cannot be negative when present.

### Backup/import
- Reject invalid enums and malformed identifiers where schema requires them.
- Enforce a reasonable import-size limit selected during implementation.
- Imported strings are displayed as text and cannot inject markup/script.

## Creator 5 template tests

Use `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md` as the source of truth.

Verify:
- correct task IDs and template version;
- correct intervals;
- correct SOON thresholds;
- manufacturer/practical classification;
- checklist definitions;
- event behavior;
- correct initial state when adding a new Creator 5 at non-zero lifetime hours.

Examples:
- a new Creator 5 added at 338 hours shows the 50-hour/30-day and 150-hour practical tasks as due when no completion history exists;
- the 500-hour service shows 162 hours remaining and is not DUE;
- the 1000-hour service shows 662 hours remaining and is not DUE.

## UI/component tests

- Printer selector.
- Add/edit printer validation.
- Dashboard status cards.
- Maintenance Center filtering/status rendering.
- Checklist completion.
- Service completion dialog.
- Service history.
- Backup/restore screen.
- Settings.
- Empty states.
- Error states.

## Accessibility tests

Automated checks are useful but do not replace manual review.

Manual requirements:
- complete primary flows with keyboard only;
- visible focus indicator;
- logical focus order;
- modal/dialog focus containment and restoration;
- labels and described validation errors;
- DUE/SOON/OK/AS NEEDED identifiable without colour;
- 200% browser zoom usability;
- responsive reflow at common narrow widths;
- touch targets adequate on mobile;
- no required drag-and-drop action.

## Security tests

- User/imported text cannot create executable HTML/script.
- Backup import does not evaluate code.
- No maintenance data appears in URL/query string.
- No maintenance data network requests are generated by normal use.
- File-system permission is requested only during explicit backup configuration.
- Destructive delete and restore require confirmation.

## Performance/volume tests

Version 1 is local-only and should remain responsive with at least:
- 25 printers;
- 100 maintenance definitions total;
- 10,000 Service Records.

Targets are engineering validation targets, not public capacity guarantees.

Verify:
- initial data load remains usable;
- maintenance recalculation does not noticeably block the UI;
- service-history filtering remains responsive;
- backup export/import completes without browser lockup for the test data set.

## Browser matrix

Required desktop:
- current Chrome.
- current Microsoft Edge.

Best-effort modern-browser validation:
- Firefox.
- Safari/WebKit where available.

File System Access API-specific automatic backup may be unavailable outside supporting browsers; this is acceptable when manual export/import works.

## Regression gates

Before Architect review:
- type-check passes;
- lint passes;
- unit/component tests pass;
- production build passes;
- applicable Playwright critical paths pass;
- no new unresolved console errors in tested flows;
- changed requirements/docs are updated.

## Production smoke tests

After deployment:
1. Application loads over HTTPS.
2. Add a temporary printer.
3. Update hours.
4. Confirm maintenance status renders.
5. Export a backup.
6. Reload and confirm local persistence.
7. Import the backup into a clean browser profile or isolated test context.
8. Confirm restored printer/history.
9. Verify About/Disclaimer.
10. Verify no cloud account or backend call is required.
