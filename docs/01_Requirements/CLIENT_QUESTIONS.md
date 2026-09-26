# Client Questions

**Project:** Rose & Paw Creator 5 Maintenance App  
**Status:** Architect Reviewed Baseline

## Blocking client questions

None.

## Resolved decisions

- Version 1 supports multiple independently tracked Creator 5 printers.
- Future printer models are supported by architecture, but predefined non-Creator-5 templates are out of scope for Version 1.
- Primary data storage is local browser IndexedDB.
- No account, authentication, cloud database, or server-side maintenance-data storage.
- Manual export/import is required.
- Optional automatic local-file backup is supported where browser permissions allow.
- Automatic backup is performed after significant saved changes rather than relying on browser exit.
- Version 1 import/restore replaces the complete local application data set after validation and confirmation. Merge restore is deferred.
- Required checklist items may be bypassed only after a warning and explicit confirmation. The permanent Service Record must retain the override and skipped-item information.
- The implementation stack is React + TypeScript + Vite.
- Development occurs on `web-dev`; stable releases merge to `main` after review.

## Deferred non-blocking release decision

The final public production hostname is intentionally deferred until deployment. This does not affect application architecture or implementation.
