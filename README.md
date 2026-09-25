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

## Getting started

1. Download the Excel workbook.
2. Open it in Microsoft Excel.
3. Enter the Creator 5's current lifetime print hours on the Dashboard.
4. Use the Maintenance Center to see what is due.
5. Complete the tasks in the Checklist.
6. Record completed work in the Service Log.
7. Update the Last Completed fields in Maintenance Center to begin the next maintenance cycle.

The printer-hour value is intended to be a continuous lifetime total and should not normally be reset.

## Web app

A browser-based version is planned and will also be provided free of charge.

The web app is intended to keep maintenance data locally in the user's browser storage. No cloud database or user account is planned.

Development work for the browser version is kept on the `web-dev` branch until it is ready for a stable release.

## Repository structure

```text
RP_Creator5_Maintenance_App/
├── README.md
├── excel/
│   └── Rose_and_Paw_Creator5_Maintenance_App.xlsx
└── web/                         # developed on web-dev until stable
    ├── README.md
    ├── public/
    ├── src/
    └── docs/
```

## Branches

- `main`: stable public releases
- `excel-dev`: working branch for Excel maintenance-app changes
- `web-dev`: working branch for the browser-based application

Stable changes from either development branch can be reviewed and merged into `main`.

## Feedback and suggestions

Suggestions, corrections, feature requests, and maintenance items that should be added are welcome.

Please use the repository's Issues section to submit feedback.

## Disclaimer

This is an unofficial community tool. Rose & Paw Applications is not affiliated with, sponsored by, or endorsed by FlashForge.

Maintenance information should be checked against current FlashForge documentation for your specific printer and configuration.
