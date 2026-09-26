# Screen Map

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.  
**Status:** Architect Reviewed Baseline

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

## Screen purpose

- Multi-printer management
- Users can maintain multiple independent printer profiles in one application. Each printer has a unique internal identifier and a user-defined display name. Selecting a printer changes the dashboard, maintenance schedule, checklist, and history context to that printer only.
- Creator 5 template
- When adding a Creator 5, the user can select the built-in Creator 5 maintenance template. The application creates the required maintenance tasks automatically.
- Dashboard
- The dashboard provides a summary of the currently selected printer. It displays lifetime hours, maintenance items due now, items approaching, recent service history, and the next major service.
- Maintenance engine
- Each maintenance definition contains an interval type and applicable interval value. The application compares the printer's current state against the last completed maintenance record and determines the current status.
- Checklist
- Each maintenance service can contain one or more checklist items. Checklist state belongs to the current service cycle and resets when a new cycle starts.
- Service history
- Completed maintenance creates a permanent historical record. Historical records must not be erased when recurring checklist items reset.
- Backup
- The entire local application data set can be exported as a versioned backup file. Import validates the file structure and application version before restoring data.
- Automatic backup
- Where supported by the browser, the user may explicitly grant access to a local file or directory for backups. The application may then update that authorized backup after data changes. Unsupported browsers fall back to manual export.
- Help
- Instructions explain application terminology, maintenance statuses, printer-hour handling, backups, restores, and limitations of local browser storage.

## Primary users

- FlashForge Creator 5 owners who want to track routine maintenance, printer operating hours, completed service, and upcoming maintenance requirements.
- The initial release is intended primarily for individual hobbyist, maker, and small-workshop users managing one or more Creator 5 printers.
- The application architecture should allow future use with additional 3D printer models, but Creator 5 owners are the primary users for Version 1.

## Key components

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
- Warn the user before replacing or merging existing data.
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

## Inputs

- Add Printer
- - Printer display name
- - Manufacturer
- - Model
- - Maintenance template
- - Current lifetime printer hours
- - Optional serial number
- - Optional notes
- Switch Printer
- - Printer ID selected by user
- Update Printer Hours
- - Printer ID
- - Previous lifetime hours
- - New lifetime hours
- - User confirmation if value decreases
- Complete Routine Maintenance
- - Printer ID
- - Maintenance task ID
- - Checklist state
- - Service date
- - Printer hours
- - Work performed
- - Optional notes
- - Optional parts and supplies
- - Optional cost
- Complete After-Print Maintenance
- - Printer ID
- - Checklist item ID
- - Completion date
- - Current printer hours where applicable
- - Optional notes
- Record As-Needed Maintenance
- - Printer ID
- - Maintenance type
- - Service date
- - Printer hours
- - Work performed
- - Optional notes
- - Optional parts and supplies
- - Optional cost
- View Maintenance Status
- - Selected printer ID
- - Current printer hours
- - Current date
- - Maintenance definitions
- - Last-completed maintenance state
- View Service History
- - Selected printer ID
- - Optional filters
- Export Backup
- - All locally stored application data
- - Application version
- - Schema version
- Configure Automatic Local Backup
- - User backup preference
- - Browser capability
- - User-authorized file or destination
- Import and Restore Backup
- - User-selected backup file
- - Existing local data
- - Current schema version
- - Supported migration versions
- Delete or Archive Printer
- - Printer ID
- - Archive or Delete action
- - User confirmation
- Application Startup
- - IndexedDB contents
- - Application settings
- - Schema metadata
- Application Update / Schema Migration
- - Existing schema version
- - Target schema version
- - Existing locally stored application data

## Outputs

- Add Printer
- - New printer profile
- - New printer maintenance state
- - Initial maintenance status
- - Updated printer selector
- Switch Printer
- - Updated selected printer
- - Updated dashboard
- - Updated Maintenance Center
- - Updated checklist context
- - Updated service history context
- Update Printer Hours
- - Updated lifetime hours
- - Recalculated maintenance statuses
- - Updated next-due values
- - Updated dashboard
- - Backup changes-pending state
- Complete Routine Maintenance
- - Permanent Service Record
- - Updated last-completed values
- - Closed maintenance cycle
- - New maintenance cycle
- - Reset current-cycle checklist
- - Recalculated next due values
- - Updated maintenance status
- Complete After-Print Maintenance
- - Updated current-cycle checklist state
- - Completion timestamp and/or printer-hour value
- Record As-Needed Maintenance
- - Permanent Service Record
- - Optional maintenance-state update
- View Maintenance Status
- - Due maintenance list
- - Soon maintenance list
- - OK maintenance list
- - As-needed items
- - Next major maintenance
- - Checklist progress
- View Service History
- - Printer-specific historical maintenance records
- Export Backup
- - Versioned local backup file
- - Updated last-successful-backup metadata
- Configure Automatic Local Backup
- - Authorized backup configuration
- - Initial or updated local backup
- - Backup status
- Import and Restore Backup
- - Validated restored application data
- - Reconstructed printer profiles
- - Reconstructed maintenance states
- - Restored service history
- - Restore result
- Delete or Archive Printer
- - Archived printer or permanently removed printer and applicable related records
- - Updated printer list
- Application Startup
- - Initialized application
- - Loaded printer data
- - Current maintenance status
- Application Update / Schema Migration
- - Migrated local database
- - Updated schema metadata
- - Preserved supported historical data

## Navigation notes

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

## Access notes

- There is one application role in Version 1:
- Printer Owner / User
- The Printer Owner / User has full control over all application data stored in their own browser.
- There is no:
- - Administrator role
- - Supervisor role
- - Approval role
- - Cloud administrator
- - Rose & Paw access role
- - Shared multi-user permission model
- Rose & Paw Applications maintains the application software but does not receive access to user printer records or locally stored maintenance information.
- Anyone who has access to the same operating-system account and browser profile may potentially access the locally stored application data. The application is not intended to provide security isolation between people sharing the same browser profile.

## Empty states

- Home / Printer Dashboard: if no printers exist, show a first-run explanation and primary Add Printer action.
- Printer Selector: if no printers exist, show Add Printer rather than an empty menu.
- Maintenance Center: if the selected printer has no applicable tasks, explain that no maintenance tasks are configured for the selected template.
- Maintenance Checklist: if a task has no checklist items, show task details and allow service recording without presenting an empty checklist.
- Service History: if no service records exist, explain that completed maintenance will appear here and provide a path back to Maintenance Center.
- Backup and Restore: if no backup has been completed, show Never backed up and explain how to export the first backup.
- Settings: if a browser does not support persistent file access, show that automatic local-file backup is unavailable and keep manual export/import available.
- Help / Instructions: content is always present; no empty state.
- About / Disclaimer: content is always present; no empty state.
- Archived Printers view, if implemented: if no printers are archived, show No archived printers.
- Search/filter views: if filters return no records, show No matching records and provide a Clear filters action.

## Validation states

- Multi-printer management
- Given two or more printers exist, when the user switches printers, only data associated with the selected printer is displayed.
- Editing one printer must not change another printer's maintenance state or history.
- Printer hours
- Given a printer has 500 lifetime hours, entering a lower value must trigger a warning before it can be accepted.
- Updating one printer's hours must not affect any other printer.
- Maintenance status
- Given a maintenance task reaches its configured interval, it must display DUE.
- Approaching maintenance must display SOON according to an approved threshold.
- Status must include readable text and must not rely only on colour.
- Maintenance completion
- When a recurring maintenance service is completed, the completion date and printer hours are recorded.
- The next due point is recalculated automatically.
- Checklist
- Completing checklist items changes their current-cycle status.
- Starting a new maintenance cycle resets applicable checklist items without deleting previous service history.
- Service history
- Completed maintenance remains visible after future maintenance cycles.
- History is scoped to the correct printer.
- Local persistence
- Closing and reopening the browser must preserve locally stored data unless the user or browser explicitly clears it.
- Backup export
- Export must contain enough data to reconstruct all configured printers and maintenance history.
- Import
- Invalid backup files must be rejected without damaging existing data.
- A valid backup must restore the expected printer profiles and maintenance records.
- Automatic backup
- Automatic local-file backup must require explicit browser permission.
- If permission is unavailable or revoked, the application continues functioning and manual export remains available.
- Privacy
- Normal application operation must not transmit user maintenance data to Rose & Paw or a cloud database.
- Responsive layout
- Core workflows must remain usable on supported desktop, tablet, and mobile screen sizes

## Accessibility notes

- The application should be designed for general accessibility and should target WCAG 2.2 Level AA where practical.
- Requirements include:
- All primary functionality must be usable with a keyboard.
- Form fields and controls must have clear visible labels.
- Focus indicators must remain visible during keyboard navigation.
- Status must not be communicated by colour alone.
- DUE, SOON, OK, and AS NEEDED statuses should include text labels in addition to colour.
- Text and interactive controls should maintain appropriate contrast.
- Interface text should remain readable when browser zoom is increased.
- Layout should work on desktop, tablet, and mobile screen sizes.
- Buttons and touch controls should provide adequate target size and spacing.
- Error and validation messages should explain what needs to be corrected.
- Tables and maintenance lists should remain understandable when viewed with assistive technologies.
- Icons should include text labels or accessible names where their meaning would otherwise be unclear.
- The application should avoid unnecessary animation.
- Date, printer-hour, and maintenance inputs should have clear formats and instructions.
- Users should not need precise mouse movement or drag-and-drop interactions to perform required tasks.