# Rose & Paw Creator 5 Maintenance App

**Project:** Rose & Paw Creator 5 Maintenance App  
**Client:** Jason Wilmot  
**Business or department:** Rose & Paw Applications  
**Project type:** Web application  
**App subtype:** Local-first single-user maintenance tracking SPA  
**Target platform:** Responsive web application for desktop, tablet, and mobile browsers  
**Status:** Architect Reviewed Baseline

## Project purpose

The Rose & Paw Creator 5 Maintenance App is a free browser-based maintenance tracking application designed primarily for owners of the FlashForge Creator 5 3D printer.

Version 1 supports multiple individually named Creator 5 printers. Each printer maintains its own lifetime print hours, maintenance schedule, checklist state, service history, and configuration.

The architecture is intentionally model-agnostic beneath the Creator 5 template so future releases can support additional printer models and user-defined maintenance schedules without redesigning the core application.

## Core implementation decisions

- Client-side React + TypeScript web application built with Vite.
- Browser-local IndexedDB is the authoritative working data store.
- No user account, cloud database, or server-side maintenance-data storage.
- Manual JSON backup export and validated restore are required.
- Optional automatic local-file backup may be offered where the browser supports persistent file access and the user grants permission.
- Automatic backup is triggered after significant saved changes. Page-exit backup is best-effort only and is never relied on for data safety.
- Version 1 restore behavior is full validated replacement, not merge.
- Creator 5 maintenance rules are defined in `10_Documentation/CREATOR5_MAINTENANCE_TEMPLATE.md`.
- Incomplete required checklist items may be overridden only after an explicit warning and confirmation; the Service Record must preserve that fact.
- `web-dev` is the active development branch. `main` remains the stable public branch.

## Primary users

- FlashForge Creator 5 owners.
- Hobbyists, makers, small workshops, schools, clubs, and small print operations managing one or more Creator 5 printers.
- Users may be new to 3D printing, so maintenance language must remain clear and practical.

## Package readiness

This package has been manually reviewed and corrected by the Architect.

**Readiness:** Ready for phased implementation planning.  
**Unresolved blocking documentation gaps:** None identified.  
**Project Builder-generated Power Platform content:** Removed from the corrected baseline.

## Package contents

The package contains the Project Builder-generated baseline, corrected project-specific architecture, testing, deployment, Codex instructions, phased prompts, and a supplemental Creator 5 maintenance-template specification.

## Operating model

1. User approves scope and architecture decisions.
2. Architect authorizes one implementation phase at a time.
3. Codex implements only the authorized phase on `web-dev`.
4. Codex runs the required automated checks and reports exact results.
5. Architect reviews the implementation and evidence.
6. Stable work is merged to `main` only after approval.

## Disclaimer

This is an unofficial community tool. Rose & Paw Applications is not affiliated with, sponsored by, or endorsed by FlashForge.
