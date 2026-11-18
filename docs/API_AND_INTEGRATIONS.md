# API and Integration Plan

**Status:** Proposed integration boundaries; no live integration configured

## 1. General approach

The frontends use the Supabase client library from plain JavaScript where appropriate. Public operations are narrowly scoped. Sensitive operations are enforced by RLS and/or trusted server-side functions.

## 2. Public read operations

Anonymous users may read only published public content such as:
- Public church information.
- Published announcements.
- Published events.
- Published sermons/media metadata.
- Approved public leadership/service information.
- Prayer requests explicitly approved for public display, if the church chooses to publish them.

Unpublished content and private records must never be returned.

## 3. Public write operations

Public forms should use a controlled submission path:
- Visitor/contact registration.
- Prayer request submission.

Use server-side validation, rate limiting and anti-abuse controls. Public clients must not be allowed to set trusted fields such as approval status, approver ID, admin role or audit actor.

## 4. Admin operations

Admin operations require an authenticated user and server/database permission checks. Sensitive examples:
- Membership approval.
- Role and approver designation.
- Member export.
- Prayer request publication.
- Administrator management.

The trusted backend must derive the acting user from the authenticated session, not accept a claimed actor ID from the browser.

## 5. Email

Email automation is outside the initial release. Later, evaluate a transactional email provider based on cost, deliverability, domain verification, unsubscribe/consent needs and data-processing terms. Provider API keys remain server-side.

## 6. WhatsApp

Initial release uses manual coordination. Automated messaging, if later approved, must use the official WhatsApp Business Platform or an approved provider, follow opt-in and template rules, and keep tokens server-side. Do not implement unofficial bulk messaging or expose group invitation links publicly.

## 7. Livestream and media

Prefer embedding an existing church-approved YouTube or other supported stream. Store metadata and URLs, not large video files, unless a separate storage budget and operational need are approved.

## 8. Maps and social links

Use approved public links. Do not publish a precise church location until confirmed by the church. Avoid embedding third-party trackers unnecessarily.

## 9. Integration governance

Before enabling any provider:
- Confirm the church owns/controls the account.
- Review pricing and free-tier limits.
- Review privacy/data processing terms.
- Identify data sent to the provider.
- Store credentials securely.
- Document failure handling and account ownership.
