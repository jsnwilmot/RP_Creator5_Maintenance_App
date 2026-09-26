# Creator 5 Maintenance Web App

This folder contains the browser-based version of the Rose & Paw Creator 5 Maintenance App.

The application is currently being implemented on the `web-dev` branch. Approved requirements and architecture are maintained under the repository-root `docs/` folder.

## Approved Version 1 architecture

- React + TypeScript
- Vite build tooling
- Responsive web application for desktop, tablet, and mobile
- Browser-local IndexedDB as the authoritative working data store
- No user account
- No backend or cloud database
- No server-side maintenance-data storage
- Manual JSON backup export
- Validated full-replacement restore
- Optional automatic local-file backup where supported and explicitly authorized by the user

## Version 1 scope

- Multiple independently tracked Creator 5 printers
- Individually nameable printer profiles
- Lifetime printer-hour tracking
- DUE, SOON, OK, and AS NEEDED maintenance states
- Hour-based, date-based, after-print, and event/as-needed maintenance
- Built-in Creator 5 maintenance template
- Maintenance checklists
- Recurring maintenance-cycle resets without deleting history
- Permanent printer-specific service history
- Backup export and restore
- Responsive and accessible user interface

## Architecture rules

- Keep maintenance records local to the user's browser.
- Keep printer profiles, templates, printer maintenance state, Service Records, settings, and backup schemas separated.
- Use stable unique IDs for persisted entities.
- Keep maintenance calculations deterministic and testable outside React components.
- Preserve historical Service Records when recurring maintenance starts a new cycle.
- Validate backup files before altering live data.
- Do not introduce authentication, cloud synchronization, telemetry receiving maintenance records, external APIs, or other integrations unless explicitly approved.

## Project documentation

Before implementation, read the repository-root `AGENTS.md` and the relevant approved documents under `docs/`.

Primary development instructions:

- `docs/07_Development/CODEX_INSTRUCTIONS.md`
- `docs/08_Testing/TEST_PLAN.md`
- `docs/11_Codex_Prompts/PHASED_CODEX_PROMPTS.md`

Architecture and requirements:

- `docs/01_Requirements/`
- `docs/02_Architecture/`
- `docs/03_Data_Model/`
- `docs/04_UI_UX/`
- `docs/05_Workflows/`
- `docs/06_Security/`
- `docs/10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`

## Development

Active browser development happens on the `web-dev` branch.

Work is completed one Architect-approved phase at a time. Do not begin a later phase until the current phase has been reviewed and approved.

Stable releases are merged into `main` only after approval.

## Privacy

Maintenance data is intended to remain on the user's device. The application does not require a Rose & Paw account or cloud database and must not transmit user maintenance records to Rose & Paw or another external service.
