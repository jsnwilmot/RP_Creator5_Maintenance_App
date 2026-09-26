# Acceptance Criteria

**Project:** Rose & Paw Creator 5 Maintenance App  
**Status:** Architect Reviewed Baseline

## Functional acceptance criteria

| ID | Acceptance criterion | Verification |
| --- | --- | --- |
| AC-001 | User can create and name multiple printer profiles. | Component/E2E test |
| AC-002 | Each printer maintains independent lifetime hours, maintenance state, checklist state, and service history. | Unit/integration/E2E |
| AC-003 | Adding a Creator 5 applies the built-in Creator 5 maintenance template without manually creating each task. | Integration test |
| AC-004 | Updating Printer A must not change Printer B. | Integration test |
| AC-005 | Lifetime printer hours reject invalid/negative values. A lower value requires an explicit warning and confirmation. | Unit/component test |
| AC-006 | Maintenance engine supports HOURS, DAYS, HOURS_OR_DAYS, AFTER_PRINT, and AS_NEEDED/EVENT behavior. | Unit tests |
| AC-007 | Scheduled maintenance displays OK, SOON, or DUE using approved thresholds. Event-driven items display AS_NEEDED unless explicitly triggered. | Unit/component tests |
| AC-008 | Maintenance status is never communicated by colour alone. | Accessibility review |
| AC-009 | Completing scheduled maintenance creates a permanent Service Record and starts the next cycle. | Integration test |
| AC-010 | Completing maintenance resets only current-cycle checklist state and does not delete prior Service Records. | Integration test |
| AC-011 | If required checklist items remain incomplete, completion requires a warning and explicit Complete Anyway confirmation. | Component/E2E |
| AC-012 | A checklist override records the override and skipped required items in the permanent Service Record. | Integration test |
| AC-013 | Service history is filterable/viewable for the selected printer and remains available after future cycles. | Component/E2E |
| AC-014 | User can archive a printer without deleting its history. Permanent deletion requires explicit confirmation. | Component/E2E |
| AC-015 | Browser-local IndexedDB persists application data across normal reloads/browser sessions. | Integration/E2E |
| AC-016 | A supported schema migration preserves printer profiles and service history. | Migration tests |
| AC-017 | A failed migration does not silently wipe or recreate the user's database. | Migration failure test |
| AC-018 | User can export a versioned backup containing the complete data required to reconstruct the application state. | Integration/E2E |
| AC-019 | Invalid or unsupported backup files are rejected before current data is changed. | Unit/integration test |
| AC-020 | Version 1 restore is full replacement only. Merge restore is not provided. | E2E test |
| AC-021 | A failed restore leaves the pre-restore local data intact. | Integration test |
| AC-022 | Where browser support and permission allow, user may authorize an automatic local backup file. | Supported-browser manual/E2E |
| AC-023 | Automatic file backup occurs after significant successfully saved data changes and does not rely on page-exit completion. | Service/browser test |
| AC-024 | Loss of automatic-backup permission does not prevent normal IndexedDB use or manual export. | Supported-browser test |
| AC-025 | Normal use requires no account, authentication, cloud database, or Rose & Paw access to user maintenance records. | Architecture/network review |
| AC-026 | User/imported text cannot execute script or be rendered as trusted raw HTML. | Security tests |
| AC-027 | Primary workflows are keyboard accessible with visible focus and labeled controls. | Manual accessibility test |
| AC-028 | Application remains usable at common desktop/tablet/mobile widths and at 200% browser zoom. | Responsive/accessibility test |
| AC-029 | Application clearly displays the unofficial-community-tool disclaimer and does not imply FlashForge endorsement. | UI review |
| AC-030 | Creator 5 maintenance rules match `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`. | Unit/content review |
| AC-031 | At 338 lifetime hours with no recorded history: 50h/30d and 150h tasks are DUE; 500h has 162 hours remaining; 1000h has 662 hours remaining. | Unit test |
| AC-032 | Architecture can add future printer templates without changing the core Printer, Maintenance State, Checklist State, and Service Record concepts. | Architecture/code review |

## Quality gates

Before a phase is approved:
- TypeScript type-check passes.
- Lint passes.
- Relevant unit/component tests pass.
- Production build passes.
- Applicable Playwright critical paths pass.
- No known data-loss defect remains unresolved.
- Documentation matches implemented behavior.

## Security/privacy acceptance

- No maintenance data is intentionally transmitted to a Rose & Paw backend in Version 1.
- Production is served over HTTPS.
- File-system access is permission-based and limited to user-authorized resources.
- Backup imports are validated as data, never executed as code.
- Destructive delete and restore actions require confirmation.

## Accessibility acceptance

Target WCAG 2.2 Level AA where practical:
- keyboard operation;
- visible focus;
- programmatic labels;
- accessible validation/error messages;
- status not colour-only;
- adequate contrast;
- responsive reflow and zoom usability.

## Client review status

- [x] Project type confirmed
- [x] Scope reviewed
- [x] Branding reviewed
- [x] Screens reviewed
- [x] Data model reviewed
- [x] Workflows reviewed
- [x] Security expectations reviewed
- [x] Backup/restore policy resolved
- [x] Checklist override policy resolved
- [x] Creator 5 template documented
- [x] Web architecture documented

## Readiness blockers

None identified in the corrected documentation baseline.
