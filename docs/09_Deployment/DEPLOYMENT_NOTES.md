# Deployment Notes

**Project:** Rose & Paw Creator 5 Maintenance App  
**Deployment type:** Static client-side web application  
**Status:** Architect Reviewed Baseline

## Deployment architecture

The application is a static Vite build. It does not require:
- application server;
- API backend;
- cloud database;
- authentication provider;
- server-side session store.

Production must be served over HTTPS.

## Environments

| Environment | Purpose | Baseline |
| --- | --- | --- |
| Local development | Developer implementation/testing | Vite dev server from `web/` |
| Automated test | Unit/component/browser tests | Local/CI runner |
| Preview | Review before stable release | Branch/deployment preview when configured |
| Production | Public stable release | Static HTTPS host |

Cloudflare Pages is the preferred static host because it fits the existing Rose & Paw web-hosting model, but the exact production hostname is intentionally a release-time decision and does not block development.

## Source control

- Repository: `jsnwilmot/RP_Creator5_Maintenance_App`
- Development branch: `web-dev`
- Stable branch: `main`
- Stable merge requires review/approval.

## Build commands

Final commands depend on the scaffold created in Phase 1, but the repository should provide scripts equivalent to:

```text
npm ci
npm run typecheck
npm run lint
npm test
npm run build
```

Browser tests may use:

```text
npm run test:e2e
```

Do not document a command as required until it exists in `package.json`.

## Build output

- Vite production output is expected in `dist/`.
- `dist/` is generated output and should not be committed unless an approved hosting workflow specifically requires it.
- No environment secret should be embedded in the client build.

## Runtime configuration

Version 1 should require no secret runtime configuration.

Public configuration may include:
- application version/build identifier;
- repository/help URLs;
- static deployment base path if required by the host.

## Deployment steps

1. Ensure the approved phase/release work is merged or otherwise selected for release.
2. Install locked dependencies with `npm ci`.
3. Run type-check.
4. Run lint.
5. Run unit/component tests.
6. Run applicable Playwright critical paths.
7. Build production assets.
8. Deploy `dist/` to the configured static host.
9. Confirm HTTPS.
10. Run production smoke tests from `08_Testing/TEST_PLAN.md`.
11. Confirm application version and disclaimer.
12. Record deployment result and rollback point.

## Static-host requirements

- HTTPS.
- Correct SPA fallback/rewrite behavior if route-based navigation is used.
- Appropriate cache headers:
  - hashed assets may be cached long-term;
  - HTML/app shell should not be cached indefinitely.
- Content type headers must be correct.
- Do not configure server-side storage of maintenance records.

## Optional PWA/offline support

If implemented in an approved phase:
- service worker caches application assets only;
- IndexedDB remains the user-data store;
- service-worker cache must not be described as a user-data backup;
- updates must avoid trapping users on permanently stale application versions.

PWA installation is not required unless explicitly added to Version 1 scope.

## Security notes

- Production HTTPS is mandatory.
- No secrets belong in the static client.
- No third-party script may receive user maintenance data without an approved privacy/scope change.
- Imported backup data must remain client-side.
- Browser file-system permissions are user-controlled.

## Rollback

Static deployment rollback should restore the prior known-good production build.

Before schema-changing releases:
- verify migration tests;
- ensure supported prior schema versions are covered;
- recommend users maintain a current backup.

A code rollback must not assume it can read a database schema newer than the older application supports. If a release introduces a non-backward-compatible schema change, the release plan must include a documented rollback/migration strategy before deployment.

## Production smoke tests

Use the Production smoke tests in `08_Testing/TEST_PLAN.md`.

## Open release-time decisions

Non-blocking until public release:
- exact production hostname;
- whether Cloudflare Pages or another approved static host is used;
- whether a custom domain is attached;
- whether PWA installation/offline asset caching is included in the first public web release.
