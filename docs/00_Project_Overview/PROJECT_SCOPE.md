# Project Scope

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.  
**Status:** Architect Reviewed Baseline

## Project purpose

The Rose & Paw Creator 5 Maintenance App is a free browser-based maintenance tracking application designed primarily for owners of the FlashForge Creator 5 3D printer.

The initial release will provide a predefined Creator 5 maintenance template and support multiple individually named Creator 5 printers.

Each printer will maintain its own operating hours, maintenance schedule, checklist status, maintenance history, and configuration.

The underlying application and data model should be designed so additional printer models and user-defined maintenance schedules can be supported in future releases without redesigning the core application.

## In-scope features

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

## Out-of-scope items

- For the initial release:
- Predefined maintenance schedules for printer models other than the FlashForge Creator 5.
- A public library of maintenance schedules for other printer manufacturers or models.
- Cloud synchronization between devices.
- User accounts.
- Remote printer control.
- Automatic retrieval of operating hours directly from the printer.
- Native desktop or mobile applications.

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

## Reports

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

## Target users

- FlashForge Creator 5 owners who want to track routine maintenance, printer operating hours, completed service, and upcoming maintenance requirements.
- The initial release is intended primarily for individual hobbyist, maker, and small-workshop users managing one or more Creator 5 printers.
- The application architecture should allow future use with additional 3D printer models, but Creator 5 owners are the primary users for Version 1.

## User roles

- Printer Owner / User
- The Printer Owner / User manages all printer profiles, printer hours, maintenance schedules, maintenance checklists, backups, restores, and service history stored within their local browser.
- There are no separate account-based administrator or privileged user roles in the initial release.

## Target platform

Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.

## Project type

Web application

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

## Risks

- Risk: Browser storage is cleared
- Impact:
- Printer profiles, maintenance state, and service history stored only in the browser may be lost.
- Mitigation:
- Provide manual backup export, backup reminders/status, import/restore, and optional automatic local backup where browser permissions support it.
- Risk: User assumes browser-local storage is a permanent backup
- Impact:
- Data could be lost after browser reset, device failure, or manual site-data deletion.
- Mitigation:
- Clearly explain that IndexedDB is primary working storage, not an independent disaster-recovery backup. Encourage users to maintain exported backup files.
- Risk: Invalid or malicious backup file
- Impact:
- Could corrupt application data or attempt to inject unsafe content.
- Mitigation:
- Validate file structure, schema version, field types, allowed values, and reasonable file size before restore. Treat imported values strictly as data and safely encode all displayed content.
- Risk: Script injection through free-text fields
- Impact:
- Malicious text entered or imported into printer names or notes could create an XSS risk if rendered unsafely.
- Mitigation:
- Never render user-entered content as trusted HTML. Escape or sanitize all dynamic text output.
- Risk: Automatic backup file permission is unavailable
- Impact:
- Automatic local backup may not function in some browsers or after permission expires.
- Mitigation:
- Treat automatic backup as optional. Always retain manual Export Backup as the supported fallback.
- Risk: User loses permission to an authorized backup destination
- Impact:
- Automatic backup stops.
- Mitigation:
- Display PERMISSION REQUIRED or FAILED status, preserve IndexedDB data, and allow the user to reauthorize or select a new destination.
- Risk: Shared computer or browser profile
- Impact:
- Another person with access to the same browser profile may view or change maintenance records.
- Mitigation:
- Document that Version 1 does not provide user authentication or local-user isolation. Users requiring isolation should use separate operating-system or browser profiles.
- Risk: Failed application update or schema migration
- Impact:
- Previously stored data could become inaccessible.
- Mitigation:
- Use explicit schema versioning, tested forward migrations, and transactional migration where practical. Do not silently delete incompatible databases.
- Risk: Maintenance template error
- Impact:
- Incorrect maintenance guidance could cause a user to miss required service.
- Mitigation:
- Clearly distinguish manufacturer-specified requirements from practical recommendations, reference current FlashForge documentation, maintain template versions, and allow corrections through application releases.
- Risk: User enters incorrect printer hours
- Impact:
- Maintenance due calculations become inaccurate.
- Mitigation:
- Validate numeric input and warn before accepting a value lower than the existing lifetime-hour value.
- Risk: Permanent deletion is selected accidentally
- Impact:
- Printer records and history could be lost.
- Mitigation:
- Require a clear destructive-action confirmation and encourage backup before permanent deletion.
- Risk: Third-party dependencies introduce vulnerabilities
- Impact:
- Application security or stability could be affected.
- Mitigation:
- Keep dependencies minimal, pin supported dependency versions, use automated dependency/security checks where appropriate, and update vulnerable dependencies before public releases.

## Assumptions

- - The application stores low-sensitivity maintenance information only.
- - Users will not intentionally store protected personal information in free-text fields.
- - Version 1 does not require accounts or authentication.
- - Version 1 is intended primarily for individual users operating within their own browser profile.
- - The user's operating system and browser are responsible for controlling access to that local profile.
- - IndexedDB is suitable as the primary local application data store.
- - Users understand that browser-local storage can be cleared and is not equivalent to an independent backup.
- - Manual backup export and restore will be available in all supported browsers.
- - Automatic local-file backup depends on browser support and explicit user authorization.
- - The application will not require access to arbitrary local files or directories.
- - Rose & Paw Applications will not receive or centrally store individual user maintenance records.
- - The application will be served using HTTPS.
- - Built-in Creator 5 maintenance requirements will be based on reviewed manufacturer documentation and will be versioned so corrections can be made safely.
- - Future cloud synchronization, shared-user functionality, remote printer integration, or account features would materially change the security model and require a new security review.

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

## Scope-change rules

- Any new external data source, authentication model, backend/cloud service, paid service, printer integration, additional manufacturer template, or architecture replacement requires Architect approval before Codex work begins.

## Approval status

Architect Reviewed Baseline — no blocking documentation gaps identified.

## Approved boundaries

- Keep maintenance data local to the browser; no backend, authentication, cloud synchronization, or external AI calls unless explicitly approved.
- Manual backup export and validated import/restore are approved Version 1 features.
- Version 1 restore replaces the complete local application data set after validation and explicit confirmation; merge restore is deferred.
- Automatic local-file backup, where supported, runs after significant saved changes and must not depend on page exit.
- Required checklist items may be overridden only after explicit warning/confirmation, and the Service Record must retain the override and skipped-item details.

## Missing scope decisions

No unresolved client review items are currently identified.

## Outstanding client questions

- None.

## Not applicable decisions

- None.

## Deferred decisions

- None.

## Readiness checklist

- [x] Project type confirmed
- [x] Scope reviewed
- [x] Required gaps resolved
- [x] Branding confirmed if required
- [x] Screens or pages confirmed
- [x] Data model confirmed
- [x] Workflows confirmed
- [x] Security expectations confirmed
- [x] Acceptance criteria reviewed
- [x] Client questions resolved or not applicable
- [x] Draft package reviewed
- [x] Web application architecture confirmed
- [x] Codex instructions ready

## Current blockers

- None.

## Architect implementation baseline

- App subtype: local-first single-user maintenance tracking SPA.
- Front end: React + TypeScript + Vite.
- Working data store: IndexedDB.
- Built-in Creator 5 rules: `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`.
- Development branch: `web-dev`; stable branch: `main`.
- Restore policy: validated full replacement only in Version 1.
- Automatic local-file backup: optional, permission-based, triggered after significant data changes; exit-time backup is best-effort only.
