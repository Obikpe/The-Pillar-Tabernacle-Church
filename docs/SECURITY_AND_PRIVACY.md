# Security and Privacy Requirements

**Status:** Required design baseline; detailed policies and legal review remain outstanding.

## 1. Security objectives

Protect member contact details, birthdays, membership status, visitor records, private prayer requests, follow-up notes, administrative accounts and audit records. Prevent unauthorised publication, access, alteration or disclosure.

## 2. Authentication

- Admin portal requires authentication.
- No public admin registration.
- Individual accounts only; no shared administrator credentials.
- Use secure session handling and appropriate session expiry.
- Enable MFA for privileged users where available.
- Provide a documented account revocation and recovery process.
- Public website visitors do not need accounts.

## 3. Authorisation

- Apply least privilege.
- Enforce permissions in PostgreSQL RLS and trusted server-side functions.
- Test access using anonymous, authenticated non-admin, department head, designated admin, membership approver and pastor test identities.
- Do not rely on client-side route guards or hidden buttons.
- Department-head access must be scoped to assigned responsibilities.
- Membership approval requires explicit active permission.

## 4. Secrets and configuration

- Never commit service-role keys, database passwords, email API keys, WhatsApp tokens or private credentials.
- Never embed server secrets in HTML or browser JavaScript.
- Public publishable/anon keys are acceptable only with correctly configured RLS and safe exposed operations.
- Use separate secrets for development/staging/production.
- Rotate exposed credentials promptly.
- Commit only placeholder configuration examples.

## 5. Public form protection

- Server-side validation and length limits.
- Rate limiting and abuse detection.
- CAPTCHA or an equivalent anti-bot measure if justified.
- Safe error messages that do not reveal whether a private person exists.
- Prevent mass submission and automated scraping.
- Store only fields needed for the stated purpose.
- Apply appropriate retention and deletion policies.

## 6. Sensitive data handling

Prayer requests and pastoral notes may contain sensitive personal details. They must be private by default, restricted to explicitly authorised people, excluded from public analytics and never used for unrelated purposes.

Birthdays, phone numbers, email addresses and membership status are personal information and must not be publicly exposed by default.

## 7. Auditability

Record important events such as:
- Membership approval and other permitted membership status changes.
- Approver designation and revocation.
- Role/permission changes.
- Sensitive record updates.
- Export of personal records.
- Prayer request publication or access-sensitive state changes.
- Administrative account activation/deactivation.

Audit records should include actor, action, target, timestamp and limited contextual metadata. Do not copy full prayer text or unnecessary personal data into logs. Ordinary administrators must not be able to alter or erase audit history.

## 8. Data protection

Design with the Nigeria Data Protection Act 2023 and applicable regulations in mind. The church should confirm its controller/processor responsibilities and obtain appropriate legal/privacy advice where necessary.

Before launch:
- Publish an understandable privacy notice.
- State purposes and lawful basis for each data category.
- Obtain appropriate consent where required.
- Explain optional fields and contact preferences.
- Define retention periods.
- Provide a route for access/correction/deletion requests as applicable.
- Assess vendors, data hosting location and cross-border transfers.
- Restrict access and train administrators.
- Establish a data breach response process.

This document is a technical planning document, not legal advice or a certification of compliance.

## 9. Storage and media

- Public media belongs in public storage only if approved for publication.
- Private files require private buckets and time-limited signed access where appropriate.
- Validate file type, size and upload permissions.
- Do not accept executable uploads.
- Remove unnecessary metadata from published images where practical.

## 10. Backups and recovery

Before production, document:
- Database backup method and frequency.
- Recovery point and recovery time objectives.
- Restore test procedure.
- Who can initiate recovery.
- How backups are protected.
- What the free provider plan does and does not include.

A provider's free tier must not be assumed to include adequate backup guarantees.

## 11. Security acceptance tests

- Anonymous user cannot read member or visitor directories.
- Anonymous user cannot read private prayer requests.
- Department head cannot query unassigned member records.
- Department head cannot approve membership without explicit designation.
- Revoked approver cannot approve a later request.
- Browser cannot invoke privileged operations by forging a role or user ID.
- Service-role key is absent from built frontend files and repository history.
- Unpublished content is not publicly readable.
- Audit events are generated for sensitive operations.
