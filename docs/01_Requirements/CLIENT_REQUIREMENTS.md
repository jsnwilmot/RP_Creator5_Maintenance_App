# Client Requirements

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.  
**Status:** Architect Reviewed Baseline

## Client details

Jason Wilmot

## Business or department

Rose & Paw Applications

## Problem statement

3D printer owners may not know what routine maintenance their printer requires, when maintenance should be completed, or when maintenance was last performed.

This is especially relevant for newer 3D printing users and owners of printers such as the FlashForge Creator 5 where maintenance requirements are spread across documentation and may be based on different intervals such as printer operating hours, calendar time, or events.

Manually tracking maintenance using notes or spreadsheets can become difficult, particularly when a user owns multiple printers.

The application will provide one organized maintenance interface that shows what maintenance is due, what is approaching, what has been completed, and the maintenance history for each printer.

## User needs

- FlashForge Creator 5 owners who want to track routine maintenance, printer operating hours, completed service, and upcoming maintenance requirements.
- The initial release is intended primarily for individual hobbyist, maker, and small-workshop users managing one or more Creator 5 printers.
- The application architecture should allow future use with additional 3D printer models, but Creator 5 owners are the primary users for Version 1.

## Required features

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

## Workflows

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

## Screens

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

## Data requirements

- If implemented using IndexedDB, use collections/object stores equivalent to:

printers
printerTemplates
maintenanceTaskDefinitions
checklistItemDefinitions
printerMaintenanceStates
checklistItemStates
serviceRecords
applicationSettings
backupMetadata
schemaMetadata

The exact IndexedDB object-store names may change during implementation, but the logical separation should remain.
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
- Identifiers

UUID or equivalent unique string identifier.
IDs must not depend on user-entered names.

Text fields

String.
Trim leading and trailing whitespace where appropriate.
User-entered notes may be multiline.

Printer hours

Non-negative number.
Prefer whole hours unless future requirements establish fractional-hour tracking.
Current lifetime hours normally cannot decrease without explicit user confirmation.

Dates and timestamps

Store timestamps in a consistent machine-readable format such as ISO 8601.
Display dates according to application settings.
Date-only maintenance rules must not shift because of browser timezone conversion.

Boolean fields

true / false.

Cost

Optional non-negative decimal number.
No financial account or payment information is stored.
Currency may default to the user's selected preference or remain unset in Version 1.

Interval type

Enumerated value, for example:

HOURS
DAYS
HOURS_OR_DAYS
AFTER_PRINT
AS_NEEDED
EVENT

Maintenance status

Enumerated value:

DUE
SOON
OK
AS_NEEDED

Backup status

Enumerated value:

NEVER_BACKED_UP
CURRENT
CHANGES_PENDING
FAILED
PERMISSION_REQUIRED
- Printer

Required:

id
displayName
manufacturer
model
templateId
currentLifetimeHours
createdAt
updatedAt
archived

Optional:

serialNumberOptional
notes

Printer Model / Template

Required:

id
templateName
manufacturer
model
templateVersion
builtIn
active

Maintenance Task Definition

Required:

id
templateId
taskName
intervalType
manufacturerSpecified
displayOrder
active
version

Interval-specific requirements:

HOURS requires hourInterval.
DAYS requires dayInterval.
HOURS_OR_DAYS requires the applicable hour and date interval configuration.
AFTER_PRINT requires eventType or equivalent rule.
AS_NEEDED does not require a fixed interval.

Checklist Item Definition

Required:

id
maintenanceTaskDefinitionId
itemText
displayOrder
requiredForCompletion
active

Printer Maintenance State

Required:

id
printerId
maintenanceTaskDefinitionId
currentStatus
currentCycleId
updatedAt

Service Record

Required:

id
printerId
serviceDate
printerHours
maintenanceType
workPerformed
createdAt

For a scheduled maintenance task, maintenanceTaskDefinitionId should also be required.

Application Settings

Required:

id
backupPreference
automaticBackupEnabled

Schema Metadata

Required:

schemaVersion
applicationVersion

## Security requirements

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
- The application's security model should remain proportional to the low sensitivity of the data.

Required protections:

- Deploy the public application over HTTPS.
- Store user maintenance records locally using IndexedDB or an equivalent browser-local structured data store.
- Rely on browser same-origin protections to isolate local application data.
- Do not transmit maintenance records to Rose & Paw servers or a cloud database.
- Do not include user maintenance data in URLs or query strings.
- Validate all imported backup files before processing them.
- Treat imported backup content as data only and never as executable code.
- Safely encode or sanitize user-entered and imported text before displaying it in the interface.
- Prevent script injection through printer names, notes, service records, or imported backup content.
- Require explicit browser authorization before accessing a local backup destination.
- Use HTTPS for external documentation or repository links.
- Avoid storing secrets because the application does not require any.
- Avoid unnecessary third-party scripts that could access application data.
- Preserve existing local data if an update or schema migration fails.
- Provide backup and restore functions to reduce the impact of browser storage loss.

Encryption beyond the protections already provided by the user's browser and operating system is not required for Version 1 because the application is not intended to store protected information.

This decision should be revisited if the application's data scope changes.

## Integrations

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

## Reports or dashboards

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

## Branding notes

- The application should be clearly branded as a Rose & Paw Applications product while remaining focused on the Creator 5 maintenance experience.
- Use the existing Rose & Paw Applications logo and brand identity.
- The design should feel like a purpose-built maintenance application rather than a spreadsheet converted into a website.
- The interface should be clean, organized, and easy for inexperienced 3D printer owners to understand.
- Maintenance status colours should remain functional indicators and should not conflict with the Rose & Paw brand palette.
- The application must clearly state:
- "Unofficial community tool. Rose & Paw Applications is not affiliated with, sponsored by, or endorsed by FlashForge."

## Project-type-specific requirements

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

## Notifications

- Version 1 does not require email, SMS, push notifications, cloud notifications, or external notification services.
- All notifications are in-app only.
- Required in-app notifications include:
- - Maintenance item has reached DUE status.
- - Maintenance item is approaching and has reached SOON status.
- - Printer-hour value entered is lower than the currently stored value.
- - Maintenance service completed successfully.
- - Backup completed successfully.
- - Local data has changed since the last successful backup.
- - Automatic backup requires renewed browser permission.
- - Automatic backup failed.
- - Backup import validation failed.
- - Backup import completed successfully.
- - Backup schema is unsupported.
- - Printer deletion requires confirmation.
- - Data restore may replace existing local records.
- - Local database migration failed or requires user attention.
- Notifications should be concise, accessible, and should not rely on colour alone.

## Automations

- Maintenance status calculation
- Trigger: Printer hours, current date, or maintenance completion changes.
- Action: Recalculate maintenance status and next-due values.
- Recurring maintenance reset
- Trigger: A maintenance service is completed.
- Action: Close the current maintenance cycle, preserve its service record, calculate the next interval, and reset applicable checklist items.
- After-print reset
- Trigger: A new printer-hour value or new print-cycle indicator is recorded.
- Action: Make applicable after-print tasks available for the new cycle.
- Backup-state tracking
- Trigger: Application data changes.
- Action: Mark the current local data as changed since the last successful backup.
- Optional automatic backup
- Trigger: Significant application data changes and an authorized local backup destination exists.
- Action: Update the authorized local backup file where browser capabilities allow.
- Import validation
- Trigger: User selects a backup for import.
- Action: Validate file type, schema version, required data, and structural integrity before offering restore.
- Maintenance warnings
- Trigger: A maintenance item changes to SOON or DUE.
- Action: Display the updated state within the application.
- No email, push notification, or cloud notification service is required for Version 1.

## Constraints

- The application must operate primarily as a client-side browser application.
- User maintenance data must remain on the user's local device.
- No cloud database is required.
- No user account or authentication system is required.
- No protected, classified, financial, health, or other sensitive personal information is intended to be stored.
- Persistent application data should use browser-local storage suitable for structured application data, preferably IndexedDB.
- The application must provide a manual backup/export capability.
- The application must provide an import/restore capability.
- Automatic local-file backup may only be enabled where browser security permissions and browser capabilities allow it.
- The application must not claim that it can silently write files into a user's local profile without browser permission.
- If automatic file backup is unavailable, the application must continue functioning normally and provide manual export instead.
- The FlashForge Creator 5 is the primary printer supported in the initial release.
- The application architecture should allow additional printer models and custom maintenance schedules in future versions.
- The application should remain free for community use.
- The application will use Rose & Paw Applications branding.
- The application is an unofficial community application and is not affiliated with or endorsed by FlashForge.

## Success criteria

- 1. A user can create and name one or more printer profiles.
- 2. Each printer maintains its own:
- current lifetime printer hours
- maintenance schedule
- maintenance checklist
- completed maintenance records
- next-due calculations
- notes and service history
- 3. A new Creator 5 printer can use a predefined FlashForge Creator 5 maintenance schedule without the user manually creating every maintenance task.
- 4. Maintenance items can support:
- operating-hour intervals
- calendar/date intervals
- after-print tasks
- event-driven or as-needed maintenance
- 5. The application clearly identifies maintenance as DUE, SOON, OK, or AS NEEDED where applicable.
- 6. Completing a recurring maintenance service starts the next maintenance cycle automatically.
- 7. Users can record completed maintenance with the completion date, printer hours, notes, and relevant service information.
- 8. Maintenance history remains available independently for every configured printer.
- 9. Application data persists between browser sessions using local browser storage.
- 10. Users can export a complete local backup of their application data.
- 11. Users can import a valid backup and restore their printer profiles, maintenance schedules, checklists, and service history.
- 12. Where browser support and user permissions allow, the application can maintain an optional automatic local backup file selected by the user.
- 13. Failure or loss of an optional backup file does not prevent the application from operating with its browser-local data.
- 14. No cloud account or cloud database is required to use the application.
- 15. The application does not collect or transmit user maintenance records to Rose & Paw or another external service.
- 16. The application works as a responsive web application on supported desktop browsers and remains usable on common tablet and mobile screen sizes.
- 17. The application clearly states that it is an unofficial community maintenance tool and is not affiliated with FlashForge.
- 18. The application is structured so additional printer models and maintenance templates can be added later without redesigning the core printer, maintenance, and service-history data model.
- 19. The initial release supports multiple independently tracked Creator 5 printers using the predefined Creator 5 maintenance template.
- 20. The data model and maintenance engine allow future support for additional printer models and user-defined maintenance schedules without requiring a redesign of the core application.

## Outstanding questions

No unresolved client review items are currently identified.

## Architect-resolved implementation requirements

### Backup behavior
- IndexedDB is the authoritative local working store.
- Manual backup export and import are required.
- Version 1 restore is full replacement only; merge restore is deferred.
- Optional automatic local-file backup may be offered only where the browser supports it and the user grants permission.
- Automatic local-file backup should occur after significant successfully saved data changes, preferably using a short debounce.
- Browser close/unload may trigger only a best-effort backup attempt and must never be the sole reliability mechanism.

### Checklist completion override
- Required checklist items should normally be complete before scheduled service completion.
- If required items remain incomplete, show the specific items and require explicit confirmation to complete anyway.
- If the user overrides, the permanent Service Record must store the override and snapshots of skipped required items.

### Creator 5 maintenance source of truth
The built-in Version 1 schedule and status thresholds are defined in `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`.

### Implementation stack
- React
- TypeScript
- Vite
- IndexedDB
- automated tests per `08_Testing/TEST_PLAN.md`
