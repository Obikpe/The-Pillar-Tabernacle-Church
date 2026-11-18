# ADR 0001: Use plain HTML, CSS and vanilla JavaScript

- **Status:** Accepted
- **Date:** 2026-11-18

## Context

The project owner wants to understand and maintain the frontend independently and is not comfortable working with TypeScript or Next.js.

## Decision

Both the public website and admin portal will use HTML5, CSS3 and vanilla JavaScript with native ES modules. Next.js, React and TypeScript are excluded from the planned frontend.

## Alternatives considered

- Next.js/React/TypeScript.
- Other frontend frameworks.
- Plain HTML/CSS/JavaScript.

## Consequences

- The frontend remains approachable to a maintainer comfortable with browser technologies.
- Reusable components, navigation, state and validation need deliberate organisation.
- Security must be enforced in Supabase/database/server functions, not by frontend framework conventions.
- A build tool is not required by default. Add one only if a clear need is documented and approved.
