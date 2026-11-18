# Access Control and Administrative Roles

**Status:** Baseline policy; role assignments remain to be configured.

## 1. Governing principle

Access is granted by responsibility and explicit permission, not merely by job title. Every permission must be enforced by the backend/database. Hiding a menu item or page is not sufficient.

## 2. Proposed roles

### Pastor
The pastor is the senior church authority within the system. The pastor may access the church-wide administration functions and designate or revoke administrators and membership approvers, subject to the final account-recovery and ownership policy.

### Designated administrator
A person explicitly authorised by the pastor to perform specified administrative duties. The designation must not automatically imply every permission. Membership approval is available only where the membership-approver permission is explicitly granted.

### Church secretary (proposed role)
May manage visitor/member records and follow-ups if authorised. The secretary does not automatically receive membership approval authority; the pastor must designate the secretary as an approver separately.

### Department head
May manage or view the members and operational information relevant to their assigned department, within explicit limits. Department-head status alone does not grant:
- Access to the complete church directory.
- Access to private prayer requests.
- Access to all follow-up notes.
- Membership approval.
- Administrator management.
- Financial access.

A department head can receive additional permissions only through explicit designation.

### Content editor (optional role)
May manage specified public content such as announcements, events and media, without access to private member records unless separately authorised.

## 3. Membership approval policy — agreed

**The pastor and designated administrators are authorised to approve membership. Authorised approvers can approve directly.**

Rules:
1. The pastor has membership approval authority.
2. The pastor may explicitly designate other administrators as membership approvers.
3. Designation must be recorded and revocable.
4. Department heads do not automatically receive this authority.
5. A department head may approve only if separately designated.
6. Only a user with the active membership-approval permission may execute the approval operation.
7. The system records approver identity and timestamp.
8. The database/server validates the permission; the frontend cannot grant it.
9. A person's visitor registration is not formal membership.
10. Removal of an approver designation must take effect for subsequent operations.

## 4. Permission catalogue (proposed)

- `dashboard.view_aggregate`
- `people.view_assigned`
- `people.view_all`
- `people.create`
- `people.update_assigned`
- `people.update_all`
- `people.export`
- `membership.review`
- `membership.approve`
- `membership.reject` (pending policy confirmation)
- `approvers.manage`
- `departments.view_assigned`
- `departments.manage`
- `followups.view_assigned`
- `followups.manage_assigned`
- `prayers.review`
- `prayers.assign`
- `prayers.publish_approved`
- `content.manage`
- `events.manage`
- `media.manage`
- `admins.manage`
- `audit.view`
- `settings.manage`

The permission list is a design proposal, not a claim that all roles have already been assigned.

## 5. Illustrative permission matrix

| Capability | Pastor | Designated admin | Department head |
|---|---|---|---|
| Church-wide dashboard | Yes | If granted | No, unless aggregate access granted |
| All member records | Yes | If granted | No |
| Assigned department records | Yes | If granted | Yes, within scope |
| Approve membership | Yes | Only if designated | Only if separately designated |
| Manage approvers | Yes / delegated policy | Only if explicitly granted | No by default |
| Follow-up tasks | Yes | If granted | Assigned tasks only if granted |
| Private prayer requests | If authorised by church policy | Only if granted | No by default |
| Publish website content | If granted | If granted | No by default |
| Manage admin accounts | Yes, subject to recovery policy | No by default | No |
| View audit logs | Yes | Only if granted | No |
| Financial records (future) | Separate financial policy | Separate explicit grant | No by default |

## 6. Account lifecycle

- No public sign-up for admin accounts.
- Initial administrator provisioning must be documented and secure.
- Each administrator uses an individual account; no shared logins.
- Disable/revoke access promptly when duties end.
- Review privileged users periodically.
- Use strong authentication and MFA where supported.
- Password reset and recovery must not allow privilege escalation.
- Keep an audit trail of role and permission changes.

## 7. Enforcement model

- Supabase Auth identifies the authenticated user.
- Server-side/database logic resolves their current roles and permissions.
- RLS restricts row access.
- Sensitive changes use controlled database functions or Edge Functions where appropriate.
- Never trust role names, user IDs or permission flags supplied by browser input.
- Test direct API access for every sensitive table and operation.
