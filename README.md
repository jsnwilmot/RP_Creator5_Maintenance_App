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

The planned web app will keep maintenance data in local browser storage on the user's device. No cloud database or user account is planned.

## Feedback and suggestions

Suggestions, corrections, feature requests, and maintenance items that should be added are welcome.

Please use the repository's Issues section to submit feedback.

## Project structure

- `excel/` contains the current Excel maintenance app.
- A web app will be added as development progresses.

## Development approach

`main` will contain stable releases.

Development can use separate working branches, for example:

- `excel-dev` for Excel changes
- `web-dev` for the web application

Stable changes can then be merged back into `main`.

## Disclaimer

This is an unofficial community tool. Rose & Paw Applications is not affiliated with, sponsored by, or endorsed by FlashForge.

Maintenance information should be checked against current FlashForge documentation for your specific printer and configuration.
