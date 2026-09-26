# Security Model

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers. Primary desktop support should include current Chromium-based browsers such as Chrome and Microsoft Edge. The application should remain usable on modern mobile browsers where practical.  
**Status:** Architect Reviewed Baseline

## User roles

- Printer Owner / User
- The Printer Owner / User manages all printer profiles, printer hours, maintenance schedules, maintenance checklists, backups, restores, and service history stored within their local browser.
- There are no separate account-based administrator or privileged user roles in the initial release.

## Permission rules

- The application does not require role-based permissions or administrative access controls in Version 1.
- The application is designed as a single-user, local-device application.
- The user has full access to all printer profiles, maintenance schedules, checklists, service history, settings, backups, and locally stored records within their own browser profile.
- The application must not request access to files, folders, or other device resources unless the user explicitly initiates an action that requires it.
- Local backup permissions must follow the browser's security model.
- Where the File System Access API or equivalent browser functionality is used:
- - The user must explicitly select and authorize the backup file or destination.
- - The application may only access the resource authorized by the user.
- - The application must not attempt to browse or access unrelated local files.
- - If permission is revoked or expires, the application must stop automatic file access and fall back to manual backup.
- Destructive actions such as permanent printer deletion or restoring a backup over existing local data must require explicit confirmation.

## Authentication expectations

- No application authentication is required for Version 1.
- The application does not require:
- - Username and password
- - Email sign-in
- - Social sign-in
- - Microsoft authentication
- - Google authentication
- - Multi-factor authentication
- - Rose & Paw account
- Access to application data depends on access to the user's local device and browser profile.
- If cloud synchronization, shared accounts, or multi-user access are introduced in a future version, authentication requirements must be reassessed before those features are implemented.

## Authorization expectations

- No application-level authorization system is required for Version 1.
- A user running the application has full access to data stored by the application within that browser profile.
- Authorization boundaries are limited to:
- 1. Browser same-origin protections for IndexedDB and application storage.
- 2. Browser-controlled permission for local files or backup destinations.
- 3. Explicit confirmation for destructive application actions.
- The application must never assume permission to access arbitrary local files or directories.
- Any future feature that introduces shared data, remote synchronization, user accounts, or cloud storage must introduce an appropriate authorization model before release.

## Sensitive data notes

- The application is not intended to collect, process, or store protected or sensitive information.
- Expected application data consists of:
- - User-defined printer names
- - Printer manufacturer and model
- - Optional printer serial number
- - Printer operating hours
- - Maintenance schedules
- - Maintenance checklist state
- - Service dates
- - Maintenance notes
- - Parts and supplies used
- - Optional maintenance cost
- - Application settings
- - Backup metadata
- The application does not require:
- - Passwords
- - User accounts
- - Email addresses
- - Home addresses
- - Payment card information
- - Banking information
- - Government identifiers
- - Health information
- - Employment information
- - Classified information
- - Protected organizational information
- Users should be advised not to place sensitive personal information in free-text maintenance notes.
- Rose & Paw Applications does not receive the user's locally stored maintenance data.

## Data protection expectations

- The application's security model should remain proportional to the low sensitivity of the data.
- Required protections:
- - Deploy the public application over HTTPS.
- - Store user maintenance records locally using IndexedDB or an equivalent browser-local structured data store.
- - Rely on browser same-origin protections to isolate local application data.
- - Do not transmit maintenance records to Rose & Paw servers or a cloud database.
- - Do not include user maintenance data in URLs or query strings.
- - Validate all imported backup files before processing them.
- - Treat imported backup content as data only and never as executable code.
- - Safely encode or sanitize user-entered and imported text before displaying it in the interface.
- - Prevent script injection through printer names, notes, service records, or imported backup content.
- - Require explicit browser authorization before accessing a local backup destination.
- - Use HTTPS for external documentation or repository links.
- - Avoid storing secrets because the application does not require any.
- - Avoid unnecessary third-party scripts that could access application data.
- - Preserve existing local data if an update or schema migration fails.
- - Provide backup and restore functions to reduce the impact of browser storage loss.
- Encryption beyond the protections already provided by the user's browser and operating system is not required for Version 1 because the application is not intended to store protected information.
- This decision should be revisited if the application's data scope changes.

## Audit and logging needs

- A formal security audit log is not required for Version 1 because there are no user accounts, privileged roles, shared records, or server-side administrative actions.
- The application should maintain operational history required for its maintenance purpose, including:
- - Permanent maintenance Service Records
- - Maintenance completion date
- - Printer hours at service completion
- - Work performed
- - Parts and supplies where entered
- - Backup status
- - Last successful backup date
- - Schema version and migration state
- Application errors may be logged locally to the browser console during development.
- Production logging must not transmit user maintenance records to Rose & Paw or a third-party logging service unless a future release explicitly introduces such functionality and updates the privacy requirements.

## Compliance notes

- No specialized regulatory compliance framework is currently required for Version 1.
- The application does not intentionally collect protected personal information or operate a cloud database containing user records.
- Development should still follow standard web application practices, including:
- - Accessible interface design targeting WCAG 2.2 Level AA where practical.
- - HTTPS deployment.
- - Safe handling of user-entered text.
- - Validation of imported files.
- - Clear disclosure of local data storage behavior.
- - Clear explanation that clearing browser site data may remove locally stored records.
- - Clear backup and restore instructions.
- - Clear disclosure that Rose & Paw Applications does not receive locally stored maintenance records.
- - Appropriate attribution and disclaimer regarding FlashForge.
- The application must state that it is an unofficial community tool and is not affiliated with, sponsored by, or endorsed by FlashForge.
- If analytics, cloud services, accounts, remote synchronization, or additional personal-data collection are introduced later, privacy and compliance requirements must be reassessed before implementation.





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

## Blocked assumptions

- Do not assume authentication, backend services, external AI calls, or import features without explicit approval.

## Missing security decisions

No unresolved client review items are currently identified.