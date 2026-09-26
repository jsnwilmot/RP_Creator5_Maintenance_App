# Data Model

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.  
**Status:** Architect Reviewed Baseline

## Data sources

- Primary application data source:
- Browser-local IndexedDB database on the user's device.
- No cloud database.
- No server-side application database.
- No Rose & Paw hosted user-data storage.
- Reference data sources:
- Built-in Creator 5 maintenance template supplied with the application.
- Current FlashForge Creator 5 maintenance documentation for manufacturer-specific maintenance requirements.
- Application configuration and template definitions packaged with the web application.
- Backup data source:
- User-created local backup file exported by the application.
- Where browser permissions allow, an authorized local backup file may be updated automatically.
- Imported backup files may be used to restore application data.
- The application must not depend on an internet connection to access previously stored maintenance records after the application itself has loaded.

## Tables, lists, or collections

- If implemented using IndexedDB, use collections/object stores equivalent to:
- printers
- printerTemplates
- maintenanceTaskDefinitions
- checklistItemDefinitions
- printerMaintenanceStates
- checklistItemStates
- serviceRecords
- applicationSettings
- backupMetadata
- schemaMetadata
- The exact IndexedDB object-store names may change during implementation, but the logical separation should remain.

## Entities

- Printer
- Represents one physical 3D printer being tracked by the user.
- Printer Model / Template
- Defines the maintenance template associated with a printer model.
- Maintenance Task Definition
- Defines a recurring or event-driven maintenance requirement.
- Checklist Item Definition
- Defines individual steps associated with a maintenance task.
- Printer Maintenance State
- Stores the current maintenance-cycle state for a specific printer and maintenance task.
- Checklist Item State
- Stores completion state for checklist items within the current maintenance cycle.
- Service Record
- Permanent historical record of completed maintenance.
- Application Settings
- Stores application-wide user preferences.
- Backup Metadata
- Tracks backup configuration and status without storing protected information.
- Schema Metadata
- Tracks application data-schema version for migrations and backup compatibility.

## Fields

- Printer
- id
- displayName
- manufacturer
- model
- templateId
- serialNumberOptional
- currentLifetimeHours
- lastHoursUpdatedAt
- appliedTemplateVersion
- createdAt
- updatedAt
- archived
- notes
- Printer Model / Template
- id
- templateName
- manufacturer
- model
- templateVersion
- description
- builtIn
- active
- createdAt
- updatedAt
- Maintenance Task Definition
- id
- templateId
- taskName
- description
- maintenanceCategory
- intervalType
- hourInterval
- dayInterval
- combinedIntervalRule
- dueSoonHourThreshold
- dueSoonDayThreshold
- eventType
- manufacturerSpecified
- sourceReference
- displayOrder
- active
- version
- Checklist Item Definition
- id
- maintenanceTaskDefinitionId
- itemText
- instructions
- displayOrder
- requiredForCompletion
- active
- Printer Maintenance State
- id
- printerId
- maintenanceTaskDefinitionId
- lastCompletedAt
- lastCompletedPrinterHours
- currentCycleStartedAt
- currentCycleStartedHours
- nextDueAt
- nextDueHours
- currentStatus
- currentCycleId
- updatedAt
- Checklist Item State
- id
- printerId
- maintenanceTaskDefinitionId
- checklistItemDefinitionId
- cycleId
- completed
- completedAt
- completedPrinterHours
- notes
- updatedAt
- Service Record
- id
- printerId
- maintenanceTaskDefinitionId
- cycleId
- serviceDate
- printerHours
- maintenanceType
- maintenanceTaskNameSnapshot
- templateIdSnapshot
- templateVersionSnapshot
- checklistOverride
- incompleteRequiredChecklistItemIds
- incompleteRequiredChecklistItemTextSnapshots
- workPerformed
- partsAndSupplies
- costOptional
- notes
- createdAt
- updatedAt
- Application Settings
- id
- selectedPrinterId
- preferredDateFormat
- preferredHourDisplay
- dueSoonPreferences
- backupPreference
- automaticBackupEnabled
- themePreferenceOptional
- createdAt
- updatedAt
- Backup Metadata
- id
- lastSuccessfulBackupAt
- backupFormatVersion
- lastBackupSchemaVersion
- lastBackupApplicationVersion
- backupDestinationAuthorized
- changesSinceLastBackup
- lastBackupStatus
- lastBackupErrorOptional
- Do not store the user's local filesystem path unless the browser explicitly exposes an approved non-sensitive handle or identifier suitable for persistence.
- Schema Metadata
- schemaVersion
- applicationVersion
- createdAt
- lastMigratedAt

## Field types

- Identifiers
- UUID or equivalent unique string identifier.
- IDs must not depend on user-entered names.
- Text fields
- String.
- Trim leading and trailing whitespace where appropriate.
- User-entered notes may be multiline.
- Printer hours
- Non-negative number.
- Prefer whole hours unless future requirements establish fractional-hour tracking.
- Current lifetime hours normally cannot decrease without explicit user confirmation.
- Dates and timestamps
- Store timestamps in a consistent machine-readable format such as ISO 8601.
- Display dates according to application settings.
- Date-only maintenance rules must not shift because of browser timezone conversion.
- Boolean fields
- true / false.
- Cost
- Optional non-negative decimal number.
- No financial account or payment information is stored.
- Currency may default to the user's selected preference or remain unset in Version 1.
- Interval type
- Enumerated value, for example:
- HOURS
- DAYS
- HOURS_OR_DAYS
- AFTER_PRINT
- AS_NEEDED
- EVENT
- Maintenance status
- Enumerated value:
- DUE
- SOON
- OK
- AS_NEEDED
- Backup status
- Enumerated value:
- NEVER_BACKED_UP
- CURRENT
- CHANGES_PENDING
- FAILED
- PERMISSION_REQUIRED

## Required fields

- Printer
- Required:
- id
- displayName
- manufacturer
- model
- templateId
- currentLifetimeHours
- lastHoursUpdatedAt
- appliedTemplateVersion
- createdAt
- updatedAt
- archived
- Optional:
- serialNumberOptional
- notes
- Printer Model / Template
- Required:
- id
- templateName
- manufacturer
- model
- templateVersion
- builtIn
- active
- Maintenance Task Definition
- Required:
- id
- templateId
- taskName
- intervalType
- manufacturerSpecified
- displayOrder
- active
- version
- Interval-specific requirements:
- HOURS requires hourInterval.
- DAYS requires dayInterval.
- HOURS_OR_DAYS requires the applicable hour and date interval configuration.
- AFTER_PRINT requires eventType or equivalent rule.
- AS_NEEDED does not require a fixed interval.
- Checklist Item Definition
- Required:
- id
- maintenanceTaskDefinitionId
- itemText
- displayOrder
- requiredForCompletion
- active
- Printer Maintenance State
- Required:
- id
- printerId
- maintenanceTaskDefinitionId
- currentStatus
- currentCycleId
- updatedAt
- Service Record
- Required:
- id
- printerId
- serviceDate
- printerHours
- maintenanceType
- maintenanceTaskNameSnapshot
- templateIdSnapshot
- templateVersionSnapshot
- checklistOverride
- incompleteRequiredChecklistItemIds
- incompleteRequiredChecklistItemTextSnapshots
- workPerformed
- createdAt
- For a scheduled maintenance task, maintenanceTaskDefinitionId should also be required.
- Application Settings
- Required:
- id
- backupPreference
- automaticBackupEnabled
- Schema Metadata
- Required:
- schemaVersion
- applicationVersion

## Relationships

- Printer Template -> Maintenance Task Definition
- One-to-many.
- One printer template contains many maintenance task definitions.
- Maintenance Task Definition -> Checklist Item Definition
- One-to-many.
- One maintenance task may contain multiple checklist items.
- Printer -> Printer Maintenance State
- One-to-many.
- Each printer has an independent maintenance state for every applicable maintenance task.
- Printer -> Checklist Item State
- One-to-many.
- Checklist state is stored independently for each printer and maintenance cycle.
- Printer -> Service Record
- One-to-many.
- Each printer has its own permanent service history.
- Maintenance Task Definition -> Service Record
- One-to-many.
- A maintenance definition may be referenced by many historical service records.
- Printer Template -> Printer
- One-to-many.
- Multiple physical printers may use the same Creator 5 template.
- Application Settings -> Printer
- The selectedPrinterId may reference one printer.
- No printer data may be shared accidentally between separate printer IDs.

## Ownership

- All maintenance and printer data entered by the user belongs to and is controlled by the user on their local device.
- Rose & Paw Applications:
- Owns and maintains the application source code.
- Owns the application-specific template implementation.
- Maintains built-in maintenance definitions and documentation.
- Does not own or receive the user's locally stored maintenance records.
- Does not have administrative access to locally stored application data.
- Manufacturer maintenance documentation remains owned by its respective rights holder.

## Retention notes

- Printer profiles
- Retain until the user deletes or archives them.
- Service records
- Retain for the lifetime of the locally stored application data unless the user explicitly deletes them.
- Deleting or archiving a printer should not silently delete its service history.
- If permanent deletion is supported, require a clear confirmation explaining that associated local records will also be removed.
- Maintenance state
- Retain current state while the printer exists.
- When a maintenance cycle is completed, preserve the historical completion through a Service Record before resetting the current cycle.
- Backup files
- Retention is controlled entirely by the user.
- Rose & Paw does not receive, retain, or manage user backup files.
- Application updates
- Local data should be migrated forward where possible when the database schema changes.
- A schema migration must not intentionally discard maintenance history.

## Validation notes

- Enforce required fields before save.
- Validate field types and allowed values.
- Prevent invalid relationships and orphan records.

## Missing data decisions

No unresolved client review items are currently identified.

## Architect data decisions

### IndexedDB authority
IndexedDB is the authoritative working data store. LocalStorage must not hold the authoritative printer, maintenance, checklist, or service-history records.

### Template/version snapshots
A printer records the built-in template version applied to it. Historical Service Records preserve task/template snapshot information so future template changes cannot rewrite the meaning of past maintenance.

### Checklist override history
When the user explicitly completes maintenance with required checklist items still incomplete, the Service Record stores:
- `checklistOverride = true`;
- skipped required checklist item IDs;
- skipped required checklist item text snapshots.

### Restore semantics
Version 1 backup restore is complete validated replacement of the local application data set. Merge restore is not supported.

Restore must:
1. validate the entire backup;
2. stage/migrate it if required;
3. request explicit confirmation;
4. replace local data transactionally or with equivalent rollback safety;
5. leave existing data unchanged if validation or replacement fails.

### Backup versioning
Backup format version and IndexedDB schema version are separate concepts. Both must be represented in exported backup metadata.

### Data lifecycle
Archiving a printer preserves all records. Permanent delete may cascade to printer-specific maintenance/checklist/service records only after explicit confirmation.
