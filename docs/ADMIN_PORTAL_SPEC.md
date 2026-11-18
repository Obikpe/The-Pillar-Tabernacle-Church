# Private Admin Portal Specification

**Status:** Initial-release specification

## 1. Purpose

Provide a secure, role-aware workspace for church personnel authorised by The Pillar Tabernacle Church.

## 2. Entry and session

- Login required.
- No public sign-up.
- Individual accounts.
- Secure sign-out and session expiry.
- Password recovery with safe identity verification.
- MFA for privileged roles where available.
- Unauthenticated users are redirected to login; this is a usability measure, not the security boundary.

## 3. Proposed navigation

- Overview
- Visitors
- Members
- Follow-ups
- Prayer requests
- Announcements
- Events
- Sermons and livestream
- Departments (basic assignments needed for access control)
- Administrator access/permissions (pastor or explicitly authorised role)
- Audit history (restricted)
- Settings (restricted)

Navigation must be permission-aware.

## 4. Dashboard

Display real database-derived information:
- Member and visitor counts.
- New registrations and pending reviews.
- Follow-ups due/overdue.
- Upcoming events.
- Prayer requests awaiting review.
- Registration trends and privacy-conscious website aggregates.

The dashboard must not leak private details to users who only have aggregate access.

## 5. People management

- Search and filter records according to permission.
- View profile details according to field-level/role policy.
- Create/update records where authorised.
- Review likely duplicates.
- Distinguish visitor from formal member.
- Record status history.
- Restrict export and bulk operations.

## 6. Membership approval

- Show items requiring review to authorised approvers.
- Display sufficient information for a responsible decision.
- Only users with active `membership.approve` permission may approve.
- Authorised approvers may act directly; no additional approval step is required by the agreed policy.
- Record approver and timestamp from trusted backend/database context.
- Department heads have no approval permission by default.
- Rejection and appeal behaviour awaits policy confirmation.

## 7. Follow-up management

- Create and assign follow-up tasks.
- Set due dates.
- Record contact attempts and outcomes.
- Schedule next action.
- Restrict notes to authorised roles.
- Provide overdue and completed filters.

## 8. Prayer moderation

- Review private requests only if explicitly authorised.
- Assign requests to approved prayer coordinators.
- Moderate requests before public display.
- Keep private/public status explicit.
- Record publication decisions and audit events.

## 9. Content management

Authorised editors can manage announcements, events, sermons, livestream links and other approved public information. Content changes should support preview and clear publish/unpublish controls.

## 10. Administration and audit

- Pastor/authorised administrator manages accounts and permissions under the final delegation policy.
- Permission grants and revocations are audited.
- Audit history is read-only for ordinary administrators.
- Avoid shared accounts.
- Provide safe confirmation for consequential actions.

## 11. Future modules

Manual attendance, finance, giving, volunteer scheduling, automated email and WhatsApp integrations are not part of the initial portal release.
