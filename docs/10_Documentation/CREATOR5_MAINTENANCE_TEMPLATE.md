# Creator 5 Maintenance Template

**Template ID:** `flashforge-creator5-v1`  
**Template version:** `1.0.0`  
**Primary model:** FlashForge Creator 5  
**Purpose:** Version 1 built-in maintenance schedule for the Rose & Paw Creator 5 Maintenance App

## Classification rule

Every task must identify its basis:

- **Manufacturer-specified:** directly tied to a documented FlashForge maintenance requirement/procedure.
- **Rose & Paw practical recommendation:** preventative-maintenance guidance included for convenience and clearly not represented as an official FlashForge interval.
- **Event-driven:** shown when the user records or invokes the applicable event.

The application must display this distinction in Help/details where practical.

## Status model

Scheduled tasks use:
- `OK`
- `SOON`
- `DUE`

Non-scheduled/event tasks use:
- `AS_NEEDED`

After-print tasks may be `DUE` for the current cycle until completed.

## Task definitions

### C5-AFTER-PRINT: After-print cleanup and inspection

**Basis:** Rose & Paw practical recommendation  
**Interval type:** AFTER_PRINT  
**Trigger behavior:** A new cycle becomes due when the printer lifetime-hour value advances beyond the last completed after-print hours. A date fallback may also treat the task as a new cycle on a later local calendar date when the prior cycle was completed by date only.  
**SOON:** Not applicable  
**Status:** DUE until completed for the current cycle

Checklist:
1. Remove completed print and loose debris from the build area.
2. Inspect the build surface for residue, damage, or contamination.
3. Inspect the nozzle/toolhead area for visible filament buildup or debris.
4. Check for unusual loose material, obstruction, or visible damage before the next print.

Completion may use the current local date and current lifetime printer hours.

### C5-50H-30D: Quick clean and inspection

**Basis:** Rose & Paw practical recommendation  
**Interval type:** HOURS_OR_DAYS  
**Interval:** 50 printer hours OR 30 calendar days, whichever occurs first  
**SOON threshold:** within 10 hours OR 7 days of due  
**Initial state:** If no completion record exists and the printer is already beyond 50 lifetime hours, show DUE.

Checklist:
1. Clean loose dust, filament fragments, and debris from accessible printer areas.
2. Inspect visible belts for damage, contamination, or obvious abnormal slack.
3. Inspect accessible motion rails/shafts for debris or abnormal residue.
4. Inspect the nozzle/toolhead area for buildup or damage.
5. Inspect build surface condition.
6. Inspect visible fans/vents for excessive dust buildup.
7. Inspect visible wiring/cable routing for rubbing, pinching, or obvious damage.
8. Record any issue requiring follow-up.

### C5-150H: Detailed preventative inspection

**Basis:** Rose & Paw practical recommendation  
**Interval type:** HOURS  
**Interval:** 150 printer hours  
**SOON threshold:** within 25 hours of due  
**Initial state:** If no completion record exists and current hours are at or above 150, show DUE.

Checklist:
1. Perform the 50-hour/30-day inspection items.
2. Inspect belts and pulleys for wear, alignment, and visible damage.
3. Inspect accessible linear-motion components for contamination or abnormal resistance.
4. Inspect toolhead mounting/seating and accessible fasteners for obvious looseness.
5. Inspect fans and vents for dust or obstruction.
6. Inspect wiring and cable routing through the normal motion range.
7. Inspect build plate/surface condition and mounting.
8. Record abnormal noise, movement, or wear requiring service.

### C5-500H: Positioning balls and needle rollers service

**Basis:** Manufacturer-specified  
**Interval type:** HOURS  
**Interval:** 500 printer hours  
**SOON threshold:** within 50 hours of due  
**Reference requirement:** Follow the current FlashForge Creator 5 procedure for cleaning and greasing the toolhead/extruder positioning balls and needle rollers. The application does not replace the manufacturer's service procedure.

Checklist:
1. Confirm the printer is in the safe service state required by the manufacturer procedure.
2. Access the positioning-ball/needle-roller service area as described by the manufacturer.
3. Clean the positioning balls as required.
4. Apply the specified/appropriate grease in accordance with the manufacturer procedure.
5. Clean the needle rollers as required.
6. Apply the specified/appropriate grease in accordance with the manufacturer procedure.
7. Reassemble/return the toolhead to normal condition.
8. Verify normal seating and movement before returning the printer to use.
9. Record completion date and lifetime printer hours.

### C5-1000H: Full mechanical service

**Basis:** Rose & Paw practical recommendation  
**Interval type:** HOURS  
**Interval:** 1000 printer hours  
**SOON threshold:** within 100 hours of due

Checklist:
1. Perform the detailed preventative inspection.
2. Clean accessible X/Y/Z motion shafts/rails as appropriate for the machine.
3. Clean and re-lubricate applicable X/Y/Z motion components using manufacturer-compatible service guidance.
4. Clean and re-lubricate the Z lead screw where applicable.
5. Inspect belts, pulleys, bearings/rollers, and fasteners for wear or damage.
6. Inspect fans, vents, wiring, and cable routing.
7. Inspect toolhead seating/motion and build-platform movement.
8. Record parts replaced, lubricant/service materials used, and any follow-up issue.

This practical task must not be presented as an official FlashForge 1000-hour interval unless a current manufacturer source explicitly confirms it.

### C5-NOZZLE-REPLACEMENT: Post-nozzle-replacement check

**Basis:** Event-driven  
**Interval type:** EVENT / AS_NEEDED  
**Trigger:** User records or initiates a nozzle replacement event.

Checklist:
1. Confirm nozzle replacement was performed according to the applicable manufacturer/toolhead procedure.
2. Inspect for correct assembly and visible leaks/loose components.
3. Perform applicable calibration/leveling required after the change.
4. Run an appropriate verification/test print before normal production.
5. Record nozzle type/size and notes where useful.

### C5-IDLE-2D: Return-to-use inspection after extended idle

**Basis:** Rose & Paw practical recommendation  
**Interval type:** EVENT / AS_NEEDED  
**Trigger:** User indicates the printer has been idle for more than two days, or the application offers the task based on last activity without forcing it as an official scheduled service.

Checklist:
1. Inspect the build area for dust/debris.
2. Inspect build surface condition.
3. Inspect nozzle/toolhead for visible residue or obstruction.
4. Verify visible motion paths are unobstructed.
5. Confirm filament/material condition as appropriate before printing.
6. Record any issue requiring service.

## Initial maintenance-state behavior

When a printer is first added with no prior maintenance history:
- after-print task begins as available/due for the next active cycle;
- scheduled tasks whose interval has already been exceeded by the entered lifetime hours are DUE;
- scheduled tasks inside their SOON threshold are SOON;
- remaining scheduled tasks are OK;
- event-driven tasks are AS_NEEDED.

Example at **338 lifetime hours** with no recorded history:
- C5-50H-30D: DUE
- C5-150H: DUE
- C5-500H: OK, 162 hours remaining
- C5-1000H: OK, 662 hours remaining
- nozzle replacement: AS_NEEDED
- idle >2 days: AS_NEEDED unless explicitly triggered

## Completion/reset rules

- A scheduled task completion creates a permanent Service Record.
- `lastCompletedAt` and/or `lastCompletedPrinterHours` are updated.
- A new maintenance cycle is created.
- Current-cycle checklist state resets.
- Historical Service Records never reset.
- Completing one printer's task must not alter another printer.

## Checklist override rule

If a scheduled task has required checklist items still incomplete:
1. show a warning listing the incomplete required items;
2. allow Cancel;
3. allow explicit Complete Anyway confirmation;
4. when overridden, store:
   - `incompleteChecklistOverride = true`
   - the skipped required checklist item IDs and text snapshots in the Service Record.

## Template updates

- Template definitions are versioned.
- New application versions may update future maintenance definitions.
- Historical Service Records preserve task/template snapshot information.
- A template update must not rewrite the meaning of previously completed work.
