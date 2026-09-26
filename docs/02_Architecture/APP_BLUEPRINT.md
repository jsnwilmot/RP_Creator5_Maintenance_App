# App Blueprint

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.  
**Status:** Architect Reviewed Baseline

## Product summary

The Rose & Paw Creator 5 Maintenance App is a free browser-based maintenance tracking application designed primarily for owners of the FlashForge Creator 5 3D printer.

The initial release will provide a predefined Creator 5 maintenance template and support multiple individually named Creator 5 printers.

Each printer will maintain its own operating hours, maintenance schedule, checklist status, maintenance history, and configuration.

The underlying application and data model should be designed so additional printer models and user-defined maintenance schedules can be supported in future releases without redesigning the core application.

## Project type

Web application

## Target platform

Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.

## Core modules

- 1. Multi-printer management
- Create, rename, edit, and delete printer profiles.
- Support multiple printers within one local application.
- Maintain completely separate maintenance data for each printer.
- Version 1 will include a predefined FlashForge Creator 5 maintenance template.
- 2. Printer dashboard
- Show the selected printer's name, model, lifetime print hours, maintenance status, items due, items coming due, and recent service activity.
- Allow quick switching between printers.
- 3. Printer-hour tracking
- Allow users to enter and update lifetime print hours.
- Printer hours must never decrease without an explicit warning and confirmation.
- Maintenance calculations must use each printer's own lifetime-hour value.
- 4. Maintenance schedule
- Provide Creator 5 maintenance tasks using hour-based, date-based, after-print, and as-needed intervals.
- Calculate the next due point independently for each printer.
- 5. Maintenance status engine
- Display DUE, SOON, OK, and AS NEEDED statuses.
- Status must be shown using both text and colour.
- 6. Maintenance checklist
- Provide reusable task checklists for each maintenance event.
- Allow users to record completion date, printer hours, and notes.
- Reset recurring checklist items when the next maintenance cycle begins.
- 7. Service history
- Store a permanent maintenance history for each printer.
- Record date, printer hours, maintenance type, work performed, notes, parts or supplies used, and optional cost.
- 8. Maintenance completion
- Completing a scheduled service updates its last-completed date and/or printer hours.
- The next due interval must be calculated automatically.
- 9. Local data persistence
- Store all application data locally on the user's device using IndexedDB or an equivalent structured browser storage mechanism.
- Data must persist across normal browser sessions.
- 10. Backup export
- Provide a clearly accessible Export Backup function.
- Export all printers, maintenance schedules, settings, checklists, and service history into a portable backup file.
- 11. Backup import and restore
- Provide an Import Backup function.
- Validate the backup before changing existing local data.
- Warn the user before replacing existing local data. Version 1 restore is full replacement only; merge restore is out of scope.
- 12. Optional automatic local backup
- Where browser support and user permissions allow, let the user select a local backup file or location.
- Automatically update the authorized backup after significant data changes where practical.
- Manual backup must remain available when automatic file access is unavailable.
- 13. Creator 5 maintenance template
- Include the approved Creator 5 maintenance tasks and intervals as the Version 1 default template.
- Preserve the distinction between manufacturer-specified maintenance and practical recommended checks where appropriate.
- 14. Multiple maintenance interval types
- Support hour-based intervals.
- Support calendar/date-based intervals.
- Support combined hour/date rules.
- Support after-print tasks.
- Support event-driven or as-needed tasks.
- 15. Data portability
- Users must remain able to access their data without a cloud account.
- Backup format should include an application data version to support future migrations.
- 16. Settings
- Provide application-level settings for backup preferences and display options.
- Provide printer-level settings separately.
- 17. Built-in help
- Include instructions explaining printer setup, maintenance statuses, completing maintenance, backup, restore, and data storage.
- 18. Responsive interface
- Support desktop, tablet, and mobile layouts.
- 19. Rose & Paw branding
- Use Rose & Paw Applications branding consistently throughout the application.
- 20. Disclaimer and maintenance references
- Clearly identify the application as an unofficial community tool.
- Provide links or references to relevant manufacturer maintenance documentation where appropriate.

## Screen map summary

- 1. Home / Printer Dashboard
- Purpose:
- Show the current printer's maintenance summary and primary actions.
- 2. Printer Selector
- Purpose:
- Switch between existing printers and access Add Printer.
- 3. Add Printer
- Purpose:
- Create a printer profile, assign a name, choose printer model/template, and enter current lifetime hours.
- 4. Edit Printer
- Purpose:
- Update printer name, model information, current hours, and printer-specific configuration.
- 5. Maintenance Center
- Purpose:
- Show all maintenance tasks, intervals, next-due values, status, and checklist progress.
- 6. Maintenance Checklist
- Purpose:
- Complete individual maintenance actions for the selected maintenance cycle.
- 7. Complete Service
- Purpose:
- Record maintenance completion date, printer hours, notes, parts/supplies, and optional cost.
- 8. Service History
- Purpose:
- Display permanent maintenance records for the selected printer.
- 9. Backup and Restore
- Purpose:
- Export application data, configure supported automatic local backup, import backups, and display last backup status.
- 10. Settings
- Purpose:
- Configure application preferences and backup behavior.
- 11. Help / Instructions
- Purpose:
- Explain how the application works, maintenance statuses, local storage, backups, and restores.
- 12. About / Disclaimer
- Purpose:
- Display application version, Rose & Paw Applications information, repository information, maintenance references, and FlashForge affiliation disclaimer.

## Workflow summary

- 1. Add Printer
- User creates a new printer profile, assigns a display name, selects a printer model or maintenance template, enters current lifetime printer hours, reviews the initial maintenance state, and saves the printer.
- 2. Switch Printer
- User selects another configured printer. The dashboard, maintenance status, checklists, and service history immediately change to the selected printer without affecting any other printer.
- 3. Update Printer Hours
- User enters the printer's current lifetime operating hours. The application validates the value, saves it, recalculates all applicable maintenance statuses, and updates DUE, SOON, OK, and AS NEEDED indicators.
- 4. Complete Routine Maintenance
- User opens a maintenance task, completes its checklist, records the completion date and printer hours, optionally records notes, supplies, parts, and cost, and completes the service. The application creates a permanent service record and begins the next maintenance cycle.
- 5. Complete After-Print Maintenance
- User completes one or more after-print cleanup items. The application records completion for the current print cycle. These tasks become available again when a new applicable print cycle is detected or recorded.
- 6. Record As-Needed Maintenance
- User records maintenance that does not follow a fixed schedule, such as a nozzle replacement or repair. The application stores the event in service history without requiring a recurring due interval unless configured.
- 7. View Maintenance Status
- User opens the dashboard or Maintenance Center. The application calculates and displays current maintenance state for the selected printer, including due items, upcoming items, checklist progress, and next major maintenance.
- 8. View Service History
- User views permanent maintenance history for the selected printer and may filter or inspect previous service records.
- 9. Export Backup
- User selects Export Backup. The application packages all locally stored printer profiles, maintenance state, service history, settings, template references, and schema metadata into a versioned backup file and saves it through the browser.
- 10. Configure Automatic Local Backup
- Where supported, the user selects and authorizes a local backup destination. The application stores the permitted file handle or equivalent browser-supported reference and updates the backup after significant data changes where permission remains valid.
- 11. Import and Restore Backup
- User selects a backup file. The application validates the file, schema version, and required structure before making any changes. The user reviews the restore action and confirms full replacement of the existing local application data. Version 1 does not merge backups. Valid data is restored only after validation and explicit confirmation.
- 12. Delete or Archive Printer
- User chooses to archive or permanently delete a printer. The application explains the effect on service history and requires confirmation before destructive deletion.
- 13. Application Startup
- When the application opens, it initializes the local database, checks schema compatibility, performs required migrations, loads settings, restores the last selected printer where available, and calculates current maintenance status.
- 14. Application Update / Schema Migration
- When a new application version requires a local data schema change, the application migrates supported existing data without intentionally deleting printer profiles or service history.

## Data model summary

- Printer

Represents one physical 3D printer being tracked by the user.

Printer Model / Template

Defines the maintenance template associated with a printer model.

Maintenance Task Definition

Defines a recurring or event-driven maintenance requirement.

Checklist Item Definition

Defines individual steps associated with a maintenance task.

Printer Maintenance State

Stores the current maintenance-cycle state for a specific printer and maintenance task.

Checklist Item State

Stores completion state for checklist items within the current maintenance cycle.

Service Record

Permanent historical record of completed maintenance.

Application Settings

Stores application-wide user preferences.

Backup Metadata

Tracks backup configuration and status without storing protected information.

Schema Metadata

Tracks application data-schema version for migrations and backup compatibility.
- Printer

id
displayName
manufacturer
model
templateId
serialNumberOptional
currentLifetimeHours
createdAt
updatedAt
archived
notes

Printer Model / Template

id
templateName
manufacturer
model
templateVersion
description
builtIn
active
createdAt
updatedAt

Maintenance Task Definition

id
templateId
taskName
description
maintenanceCategory
intervalType
hourInterval
dayInterval
combinedIntervalRule
dueSoonHourThreshold
dueSoonDayThreshold
eventType
manufacturerSpecified
sourceReference
displayOrder
active
version

Checklist Item Definition

id
maintenanceTaskDefinitionId
itemText
instructions
displayOrder
requiredForCompletion
active

Printer Maintenance State

id
printerId
maintenanceTaskDefinitionId
lastCompletedAt
lastCompletedPrinterHours
currentCycleStartedAt
currentCycleStartedHours
nextDueAt
nextDueHours
currentStatus
currentCycleId
updatedAt

Checklist Item State

id
printerId
maintenanceTaskDefinitionId
checklistItemDefinitionId
cycleId
completed
completedAt
completedPrinterHours
notes
updatedAt

Service Record

id
printerId
maintenanceTaskDefinitionId
cycleId
serviceDate
printerHours
maintenanceType
workPerformed
partsAndSupplies
costOptional
notes
createdAt
updatedAt

Application Settings

id
selectedPrinterId
preferredDateFormat
preferredHourDisplay
dueSoonPreferences
backupPreference
automaticBackupEnabled
themePreferenceOptional
createdAt
updatedAt

Backup Metadata

id
lastSuccessfulBackupAt
lastBackupSchemaVersion
lastBackupApplicationVersion
backupDestinationAuthorized
changesSinceLastBackup
lastBackupStatus
lastBackupErrorOptional

Do not store the user's local filesystem path unless the browser explicitly exposes an approved non-sensitive handle or identifier suitable for persistence.

Schema Metadata

schemaVersion
applicationVersion
createdAt
lastMigratedAt
- Printer Template -> Maintenance Task Definition

One-to-many.

One printer template contains many maintenance task definitions.

Maintenance Task Definition -> Checklist Item Definition

One-to-many.

One maintenance task may contain multiple checklist items.

Printer -> Printer Maintenance State

One-to-many.

Each printer has an independent maintenance state for every applicable maintenance task.

Printer -> Checklist Item State

One-to-many.

Checklist state is stored independently for each printer and maintenance cycle.

Printer -> Service Record

One-to-many.

Each printer has its own permanent service history.

Maintenance Task Definition -> Service Record

One-to-many.

A maintenance definition may be referenced by many historical service records.

Printer Template -> Printer

One-to-many.

Multiple physical printers may use the same Creator 5 template.

Application Settings -> Printer

The selectedPrinterId may reference one printer.

No printer data may be shared accidentally between separate printer IDs.

## Security model summary

- The application does not require role-based permissions or administrative access controls in Version 1.

The application is designed as a single-user, local-device application.

The user has full access to all printer profiles, maintenance schedules, checklists, service history, settings, backups, and locally stored records within their own browser profile.

The application must not request access to files, folders, or other device resources unless the user explicitly initiates an action that requires it.

Local backup permissions must follow the browser's security model.

Where the File System Access API or equivalent browser functionality is used:

- The user must explicitly select and authorize the backup file or destination.
- The application may only access the resource authorized by the user.
- The application must not attempt to browse or access unrelated local files.
- If permission is revoked or expires, the application must stop automatic file access and fall back to manual backup.

Destructive actions such as permanent printer deletion or restoring a backup over existing local data must require explicit confirmation.
- The application is not intended to collect, process, or store protected or sensitive information.

Expected application data consists of:

- User-defined printer names
- Printer manufacturer and model
- Optional printer serial number
- Printer operating hours
- Maintenance schedules
- Maintenance checklist state
- Service dates
- Maintenance notes
- Parts and supplies used
- Optional maintenance cost
- Application settings
- Backup metadata

The application does not require:

- Passwords
- User accounts
- Email addresses
- Home addresses
- Payment card information
- Banking information
- Government identifiers
- Health information
- Employment information
- Classified information
- Protected organizational information

Users should be advised not to place sensitive personal information in free-text maintenance notes.

Rose & Paw Applications does not receive the user's locally stored maintenance data.
- Risk: Browser storage is cleared
Impact:
Printer profiles, maintenance state, and service history stored only in the browser may be lost.

Mitigation:
Provide manual backup export, backup reminders/status, import/restore, and optional automatic local backup where browser permissions support it.

Risk: User assumes browser-local storage is a permanent backup
Impact:
Data could be lost after browser reset, device failure, or manual site-data deletion.

Mitigation:
Clearly explain that IndexedDB is primary working storage, not an independent disaster-recovery backup. Encourage users to maintain exported backup files.

Risk: Invalid or malicious backup file
Impact:
Could corrupt application data or attempt to inject unsafe content.

Mitigation:
Validate file structure, schema version, field types, allowed values, and reasonable file size before restore. Treat imported values strictly as data and safely encode all displayed content.

Risk: Script injection through free-text fields
Impact:
Malicious text entered or imported into printer names or notes could create an XSS risk if rendered unsafely.

Mitigation:
Never render user-entered content as trusted HTML. Escape or sanitize all dynamic text output.

Risk: Automatic backup file permission is unavailable
Impact:
Automatic local backup may not function in some browsers or after permission expires.

Mitigation:
Treat automatic backup as optional. Always retain manual Export Backup as the supported fallback.

Risk: User loses permission to an authorized backup destination
Impact:
Automatic backup stops.

Mitigation:
Display PERMISSION REQUIRED or FAILED status, preserve IndexedDB data, and allow the user to reauthorize or select a new destination.

Risk: Shared computer or browser profile
Impact:
Another person with access to the same browser profile may view or change maintenance records.

Mitigation:
Document that Version 1 does not provide user authentication or local-user isolation. Users requiring isolation should use separate operating-system or browser profiles.

Risk: Failed application update or schema migration
Impact:
Previously stored data could become inaccessible.

Mitigation:
Use explicit schema versioning, tested forward migrations, and transactional migration where practical. Do not silently delete incompatible databases.

Risk: Maintenance template error
Impact:
Incorrect maintenance guidance could cause a user to miss required service.

Mitigation:
Clearly distinguish manufacturer-specified requirements from practical recommendations, reference current FlashForge documentation, maintain template versions, and allow corrections through application releases.

Risk: User enters incorrect printer hours
Impact:
Maintenance due calculations become inaccurate.

Mitigation:
Validate numeric input and warn before accepting a value lower than the existing lifetime-hour value.

Risk: Permanent deletion is selected accidentally
Impact:
Printer records and history could be lost.

Mitigation:
Require a clear destructive-action confirmation and encourage backup before permanent deletion.

Risk: Third-party dependencies introduce vulnerabilities
Impact:
Application security or stability could be affected.

Mitigation:
Keep dependencies minimal, pin supported dependency versions, use automated dependency/security checks where appropriate, and update vulnerable dependencies before public releases.

## Integration summary

- Version 1 requires no external application integrations for normal operation.
- Local browser APIs
- IndexedDB
- Purpose:
- Primary persistent structured storage.
- File System Access API, where supported
- Purpose:
- Allow a user to authorize a local backup destination and permit subsequent backup updates.
- This integration must be treated as optional because browser support and permission persistence vary.
- Standard browser file download
- Purpose:
- Manual backup export fallback.
- Standard browser file upload/input
- Purpose:
- Import and restore a backup file.
- GitHub
- Purpose:
- Public source-code repository, releases, documentation, and issue tracking.
- Repository:
- https://github.com/jsnwilmot/RP_Creator5_Maintenance_App
- GitHub is not used to store individual users' maintenance data.
- FlashForge documentation
- Purpose:
- Reference source for Creator 5 manufacturer maintenance requirements.
- No FlashForge API integration is required.
- No planned integrations for Version 1
- Cloud database
- User identity provider
- Analytics service that receives maintenance data
- Email service
- Push notification service
- Printer API
- FlashForge account
- Payment provider

## Reporting summary

- Primary Printer Dashboard
- Displays:
- Selected printer name
- Printer model
- Current lifetime hours
- Number of maintenance items due
- Number of maintenance items coming soon
- Overall maintenance status
- Next major maintenance event
- Recent maintenance activity
- Quick access to update printer hours
- Quick access to Maintenance Center
- Quick access to checklist and service history
- Maintenance Center
- Displays:
- Maintenance task
- Interval
- Last completed date
- Last completed printer hours
- Next due date or hours
- Current status
- Checklist progress
- Maintenance type
- Service History
- Displays historical maintenance records with filtering by:
- Printer
- Date
- Maintenance type
- Advanced charts or analytics are not required for Version 1.

## Project type guidance

- Clarify whether the product is internal or public-facing before finalizing branding and deployment guidance.

## Tailored intake summary

- **Brand status:** Established brand.  Rose & Paw Applications already has an approved brand identity and logo.
- **Logo status:** Approved.  Use the existing Rose & Paw Applications logo.
- **Logo files:** Use the approved Rose & Paw Applications logo assets.

Primary implementation assets should preferably use SVG or another scalable web format where available, with PNG fallback where required.

Exact repository asset paths will be established during implementation.
- **Primary colours:** Use the established Rose & Paw Applications colour palette from the approved brand assets.

Brown is a primary Rose & Paw brand colour and is used prominently in the existing wordmark.

Exact HEX/RGB values should be taken from the approved source brand assets during implementation rather than approximated.
- **Secondary colours:** Use neutral supporting colours for application surfaces, text, borders, and maintenance panels.

Maintenance state colours may use conventional accessible status colours for DUE, SOON, and OK, provided status is also communicated in text.

Exact supporting colours will be confirmed during the UI design phase and must meet accessibility contrast requirements.
- **Font preferences:** Use the established Rose & Paw brand typography where suitable for web use.  If the existing brand font cannot be legally or technically embedded, use a visually compatible, accessible web font or system font fallback.  Body text and application controls must prioritize readability over decorative branding.
- **Brand tone:** Clear, practical, friendly, and straightforward.  The application should be understandable to newer 3D printing users without sounding overly technical.  Instructions should explain what the user needs to do and why.
- **Image style:** Minimal use of decorative imagery.

Prefer:

Rose & Paw brand assets
Clear printer-related icons
Maintenance icons
Interface illustrations only where they improve understanding
Screenshots within documentation where useful

Avoid unnecessary stock photography.
- **Icon style:** Simple, consistent, high-contrast icons suitable for application navigation and maintenance actions.  Icons must not be the only way information is communicated.
- **Reference sites:** Current Excel Creator 5 Maintenance App.

Use the existing Excel application's workflow and terminology as a functional reference, while redesigning the web interface specifically for browser use.

Repository:
https://github.com/jsnwilmot/RP_Creator5_Maintenance_App
- **Brand restrictions:** Do not alter the approved Rose & Paw Applications logo proportions.
Do not remove the Rose & Paw identity from official releases.
Do not use FlashForge branding in a way that implies partnership, sponsorship, or endorsement.
Do not reproduce FlashForge logos as application branding unless explicit permission exists.
Do not communicate maintenance status using colour alone.
Do not use low-contrast decorative colour combinations that reduce readability.
- **Favicon needed:** Needed.  Create a Rose & Paw Applications favicon/app icon appropriate for the Creator 5 Maintenance App using approved Rose & Paw branding.
- **Open Graph image needed:** Needed.  Create a social-sharing image for the public web application and repository release page using Rose & Paw Applications branding and the Creator 5 Maintenance App name.
- **Social assets needed:** Initial release:

Open Graph/social sharing image
Repository preview image if useful
App icon/favicon

Additional social media promotional assets are optional and can be created later.
- **Content source:** Application requirements, instructions, and maintenance workflow are supplied and approved by Rose & Paw Applications.

Creator 5 maintenance information should be based on current FlashForge documentation where manufacturer-specific maintenance claims are made.

The existing Excel Creator 5 Maintenance App is the initial functional reference for the browser version.
- **Approved assets:** Rose & Paw Applications logo
Existing Rose & Paw brand identity
Existing Creator 5 Maintenance Excel App as a functional reference
RP_Creator5_Maintenance_App GitHub repository

Additional web-specific assets will be created and approved during development.
- **Accessibility contrast notes:** All application text and interactive controls should target WCAG 2.2 Level AA contrast requirements where practical.

Requirements include:

Normal text should meet at least 4.5:1 contrast.
Large text should meet at least 3:1 contrast.
Interactive components and meaningful graphical elements should target at least 3:1 contrast against adjacent colours.
Maintenance status colours must always include text labels.
Focus indicators must be clearly visible.
Brand colours may be adjusted for interface usage where necessary to meet accessibility requirements, while preserving the approved Rose & Paw identity.

## Implementation architecture

### Application type

Local-first single-user maintenance tracking SPA.

### Front end

- React
- TypeScript with strict checking
- Vite
- Client-side routing where useful
- Semantic HTML with plain CSS/CSS Modules and CSS custom properties
- No large UI framework unless approved later

### Domain layer

Pure/testable business rules for:
- maintenance interval calculations;
- DUE/SOON/OK/AS_NEEDED status;
- next-due values;
- checklist-cycle state;
- printer-hour validation;
- template-version behavior.

### Data layer

- IndexedDB is authoritative.
- Use a minimal wrapper such as `idb`.
- Explicit schema versions and migrations.
- Repository interfaces isolate the UI from IndexedDB details.
- Related service-completion writes are transactional.

### Backup layer

- Versioned JSON backup.
- Manual export/import required.
- Version 1 restore is full replacement only.
- Optional user-authorized local-file backup via browser file-system capability where available.
- Automatic file backup is triggered after significant successful saves, preferably debounced.
- Page-exit backup is best-effort only and not a correctness requirement.

### Template layer

- Built-in template definitions are separate from user state/history.
- Creator 5 rules are defined in `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`.
- Templates are versioned.
- Service Records store task/template snapshots needed to preserve historical meaning.

### Test architecture

- Vitest for domain/data/service tests.
- React Testing Library for UI behavior.
- Playwright for critical browser workflows.
- Type-check, lint, tests, and production build are phase gates.

## Build assumptions

- The application stores low-sensitivity maintenance information only.
- Version 1 does not require accounts or authentication.
- The user's operating system and browser profile provide local-user isolation.
- IndexedDB can be cleared by the browser/user, so exported backup remains the independent recovery method.
- Rose & Paw Applications does not receive centrally stored maintenance records.
- Production uses HTTPS.
- Built-in Creator 5 manufacturer-specific claims are based on reviewed manufacturer guidance; practical recommendations are labeled separately.
- Future cloud synchronization, shared-user functionality, remote printer integration, or account features require a new architecture/security review.

## Resolved detailed decisions

- Incomplete required checklist items may be overridden only after warning and explicit confirmation; skipped items are recorded in the Service Record.
- Version 1 backup restore replaces the entire local application data set; merge restore is deferred.
- Development occurs on `web-dev`; `main` remains stable.
- Final public hostname and optional PWA installation are release-time decisions and do not block implementation.
