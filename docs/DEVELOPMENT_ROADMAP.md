# Development Roadmap

**Status:** Proposed sequence; no implementation has started

## Phase 0 — Requirements and design (current)

Deliverables:
- Agreed project scope and constraints.
- System architecture.
- Project design and UX direction.
- Logical database model.
- Access-control and membership approval policy.
- Security/privacy requirements.
- Open decisions resolved or explicitly deferred.

Exit criteria: church stakeholders approve the baseline specification.

## Phase 1 — Backend foundation

- Create/select Supabase project and environments.
- Create reviewed SQL migrations.
- Implement identity, roles and permissions.
- Implement RLS policies.
- Implement audit foundation.
- Configure safe storage buckets.
- Add test identities and access-control tests.

Exit criteria: anonymous and role-based access tests pass; no frontend integration with privileged secrets.

## Phase 2 — Public website

- Build responsive HTML/CSS/JS pages.
- Add approved church content.
- Add published events/announcements/media reads.
- Add protected public form submission.
- Add SEO, accessibility and performance checks.

Exit criteria: all public content is approved and private data cannot be queried.

## Phase 3 — Admin authentication and shell

- Admin login and session handling.
- Role-aware navigation.
- Dashboard shell and error states.
- Account provisioning/revocation workflow.

Exit criteria: unauthorised users cannot access admin data through direct requests.

## Phase 4 — People and membership

- Visitor registration intake.
- Member/visitor records and directory.
- Duplicate review.
- Membership approver designation.
- Membership decision workflow and audit.
- Profile updates and controlled export.

Exit criteria: only pastor/designated approvers can approve membership; decisions are traceable.

## Phase 5 — Follow-up and pastoral care

- Follow-up tasks.
- Prayer request moderation.
- Privacy controls and assignment rules.

Exit criteria: restricted notes and prayer records are inaccessible to unauthorised roles.

## Phase 6 — Content administration

- Announcements.
- Events.
- Sermon and livestream management.
- Draft/publish/archive workflow.

Exit criteria: authorised editors can update public content without exposing drafts.

## Phase 7 — Production readiness

- Security review and role matrix tests.
- Privacy notice and retention policy approved.
- Backup and restore test.
- Domain and hosting configuration.
- Monitoring and quota review.
- Church user acceptance testing.
- Explicit production deployment approval.

## Later phases

- Manual attendance.
- Full department management.
- Email campaigns.
- Official WhatsApp integration.
- Finance and giving with separate access controls.
- Volunteer management and advanced reporting.

## Delivery discipline

- Work in small commits.
- Keep SQL migrations version-controlled.
- Avoid unreviewed schema changes.
- Do not use real member data in development.
- Do not deploy without explicit approval.
- Document every material scope or architecture change.
