# ADR 0002: Two separate applications with one central backend

- **Status:** Accepted
- **Date:** 2026-11-18

## Context

The public church website and private administration portal have different audiences, navigation, security needs and deployment requirements.

## Decision

Maintain two separate frontend applications and deployments: a public website and a private admin portal. Both use one central Supabase/PostgreSQL backend, with public and privileged operations separated by RLS and trusted server-side logic.

## Consequences

- Public and admin deployments can be managed independently.
- Shared backend data avoids duplicate systems.
- Public clients must never receive privileged access.
- Database policies and tests are essential to enforce the boundary.
