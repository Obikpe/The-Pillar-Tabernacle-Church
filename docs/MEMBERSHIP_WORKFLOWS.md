# Registration, Visitor and Membership Workflows

**Status:** Workflow proposal based on agreed membership approval policy

## 1. Important distinctions

- **Contact:** A person whose details have been submitted; attendance or membership is not yet established.
- **Visitor:** A person recorded as having visited or expressed visitor interest, according to the church's process.
- **Member:** A person formally recognised as a church member after an authorised membership decision.
- **Administrator:** A person with a system account and specific administrative permissions.

These are not interchangeable. A person can be a visitor without an admin account, and a member does not automatically receive an admin account.

## 2. QR visitor registration

1. Church displays a QR code linking to a dedicated registration page.
2. Person opens the form on a mobile device.
3. Form explains purpose and privacy notice.
4. Person submits approved fields: name, phone/WhatsApp, optional email, optional birthday, visitor category and consent.
5. Backend validates, rate-limits and stores the submission.
6. Submission is marked new/unreviewed.
7. Confirmation thanks the person and explains what happens next.
8. Admin portal displays the submission to users with the appropriate permission.
9. An authorised administrator reviews and links it to an existing person or creates a new person record.
10. A follow-up task may be created and assigned.

The QR code is not an authentication credential and must not grant access to private resources.

## 3. Existing member / returning visitor

The form should allow a returning visitor or existing member to indicate their category, but the system must not trust self-selection as proof of membership. An administrator checks for a matching record and resolves duplicates carefully.

## 4. Membership approval

**Agreed authority:** Pastor and designated administrators.

**Agreed workflow:** An authorised approver can approve directly.

1. A person is identified for membership consideration under the church's own process.
2. An authorised administrator prepares or reviews the relevant record.
3. The system checks that the acting authenticated user has active `membership.approve` permission.
4. The approver makes the decision directly.
5. The trusted backend/database records the decision, actor and timestamp.
6. Membership status is updated consistently.
7. The action is written to the audit trail.

A visitor registration alone does not trigger membership approval.

### Designation and revocation

The pastor may designate administrators as membership approvers. The exact mechanism for delegated designation should be confirmed, but no department head receives this permission merely by being a department head. A designation can be revoked; revoked users cannot approve subsequent decisions.

## 5. Rejection and other outcomes

The system may eventually support rejection, withdrawal, reinstatement or appeal, but the church must confirm whether these are valid outcomes, who may apply them and what communication follows. Until then, the implementation should not invent policy.

## 6. WhatsApp group onboarding

- Never display the permanent members' group invite publicly.
- Do not automatically disclose it on the QR confirmation page.
- Group access is separate from formal membership approval.
- An authorised person may coordinate a private invitation after checking eligibility.
- Prefer revocable/controlled invitations and review group settings.
- Do not assume an automated WhatsApp broadcast capability exists without official API access and opt-in.

## 7. Follow-up task workflow

Proposed statuses:
- New
- Assigned
- Contact attempted
- Awaiting response
- Follow-up scheduled
- Completed

A task should include person, assigned administrator, due date, status and concise notes. The church should confirm whether multiple attempts and escalation are required.

## 8. Prayer request workflow

1. Public user submits a request.
2. Privacy is private by default.
3. Request enters a restricted moderation queue.
4. Authorised person reviews and may assign it.
5. Public display is possible only if explicit permission was given and an authorised moderator approves publication.
6. Status and relevant moderation action are recorded.
7. Retention/archive follows approved policy.

## 9. Duplicate handling

When a matching phone/email/name is found, show a possible match to authorised staff. Never automatically merge records based only on a single matching field. Record merge decisions and preserve references if merging is later implemented.
