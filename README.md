# Rose & Paw Creator 5 Maintenance App

A free community maintenance tracker for the FlashForge Creator 5, created by Rose & Paw Applications.

## Excel app

The Excel version is available now:

[Download the Creator 5 Maintenance App](excel/Rose_and_Paw_Creator5_Maintenance_App.xlsx)

The workbook provides an app-style interface for tracking routine maintenance without requiring a separate application or cloud account.

### Features

- Maintenance dashboard with current printer hours
- DUE, SOON, OK, and AS NEEDED status indicators
- Maintenance queue based on printer hours and service intervals
- Reusable service checklist
- Automatic checklist reset logic
- Permanent service history
- Maintenance instructions built into the workbook
- Creator 5-specific 500-hour positioning-ball and needle-roller service tracking
- Rose & Paw Applications branding

## Getting started with the Excel app

1. Download the Excel workbook.
2. Open it in Microsoft Excel.
3. Enter the Creator 5's current lifetime print hours on the Dashboard.
4. Use the Maintenance Center to see what is due.
5. Complete the tasks in the Checklist.
6. Record completed work in the Service Log.
7. Update the Last Completed fields in Maintenance Center to begin the next maintenance cycle.

The printer-hour value is intended to be a continuous lifetime total and should not normally be reset.

## Web app

The browser-based version is in active development on the `web-dev` branch.

The approved Version 1 architecture is a responsive React + TypeScript + Vite application. Browser-local IndexedDB is the authoritative working data store. No user account, backend, cloud database, or server-side maintenance-data storage is required.

Version 1 is designed to support multiple independently tracked Creator 5 printers, each with its own lifetime hours, maintenance state, checklist state, due calculations, notes, and service history.

Manual backup export and validated full-replacement restore are required. Optional automatic local-file backup may be offered where supported by the browser and explicitly authorized by the user.

The approved project documentation under `docs/` is the source of truth for web-app implementation.

## Repository structure

```text
RP_Creator5_Maintenance_App/
├── .gitignore
├── AGENTS.md                    # Codex repository instructions
├── README.md
├── docs/                        # approved web-app project documentation
│   ├── 00_Project_Overview/
│   ├── 01_Requirements/
│   ├── 02_Architecture/
│   ├── 03_Data_Model/
│   ├── 04_UI_UX/
│   ├── 05_Workflows/
│   ├── 06_Security/
│   ├── 07_Development/
│   ├── 08_Testing/
│   ├── 09_Deployment/
│   ├── 10_Documentation/
│   └── 11_Codex_Prompts/
├── excel/
│   └── Rose_and_Paw_Creator5_Maintenance_App.xlsx
└── web/                         # browser application implementation
    ├── README.md
    ├── public/
    ├── src/
    └── docs/
```

## Development controls

Codex must read `AGENTS.md` and the approved documents under `docs/` before implementation.

Web development is performed one Architect-approved phase at a time. The phase plan is maintained in:

`docs/11_Codex_Prompts/PHASED_CODEX_PROMPTS.md`

Stable web work is merged to `main` only after review and approval.

## Branches

- `main`: stable public releases
- `excel-dev`: working branch for Excel maintenance-app changes
- `web-dev`: active development branch for the browser-based application

## Feedback and suggestions

Suggestions, corrections, feature requests, and maintenance items that should be added are welcome.

Please use the repository's Issues section to submit feedback.

## Disclaimer

This is an unofficial community tool. Rose & Paw Applications is not affiliated with, sponsored by, or endorsed by FlashForge.

Maintenance information should be checked against current FlashForge documentation for your specific printer and configuration.
