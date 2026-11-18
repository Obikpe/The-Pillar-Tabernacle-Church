# Project Requirements — The Pillar Tabernacle Church

**Status:** Baseline requirements draft  
**Project stage:** Pre-implementation  
**Last updated:** 2026-11-18

## 1. Purpose

The project will provide The Pillar Tabernacle Church with two connected but separately deployed web applications: a public website for outreach and information, and a private portal for authorised church administration.

The initial release is deliberately limited to the public website and membership-related administration. The architecture should accommodate later modules without implementing them prematurely.

## 2. Goals

- Give the church a clear, welcoming and mobile-friendly online presence.
- Make current church information, events and media easy to find.
- Provide a simple route for first-time visitors to express interest and register.
- Replace fragmented visitor/member records with a controlled central directory.
- Establish an accountable membership approval process.
- Help authorised personnel follow up with visitors.
- Allow authorised staff to maintain website content without editing source code.
- Protect personal information and confidential pastoral records.
- Keep infrastructure and maintenance costs as low as practical.

## 3. Applications and audiences

### 3.1 Public website

Audience: members, visitors, prospective visitors and the general public.

No public account or login is required. Public pages may display only content explicitly approved for publication.

### 3.2 Private admin portal

Audience: pastor and specifically authorised administrators, including department heads where appropriate.

An administrator account is provisioned by an authorised person. There is no public administrator registration. Permissions are assigned by role and, where needed, by explicit individual permission.

### 3.3 People represented in the system

A person who submits a form is not automatically a church member. The data model must distinguish a general contact, visitor and formally recognised member. A person may move between statuses while retaining appropriate history.

## 4. Initial-release functional requirements

### 4.1 Public information

- Homepage with welcome message, church identity, service information and clear invitation to attend.
- About page containing approved mission, vision, beliefs and church history.
- Leadership page with approved profiles.
- Service information page.
- Contact page with approved contact and location information.
- Events and announcements listing.
- Livestream page embedding supported external streams.
- Sermon/media archive using external video/audio hosting where practical.
- First-time visitor information page.
- Responsive navigation and accessible page structure.

All factual church content (address, times, phone numbers, names, beliefs and history) must be supplied or approved by the church. Do not fabricate it.

### 4.2 Public forms

- Visitor/contact registration.
- Prayer request submission.
- Consent and privacy notice appropriate to each form.
- Validation, spam prevention and clear success/error feedback.
- Server-side validation and abuse controls for public submissions.
- No exposure of private records or administrative information in responses.

### 4.3 QR registration

A permanent church QR code may point to a dedicated mobile-friendly registration page. It is a convenience link, not proof of identity, attendance or membership.

The registration form should capture only approved fields, initially proposed as:
- Full name.
- Phone/WhatsApp number.
- Email address (optional unless a defined workflow requires it).
- Birthday (optional).
- Visitor category: first-time or returning visitor.
- Consent to the privacy notice and relevant contact preferences.

The submission should record timestamp, source and review status. Duplicate detection should help administrators identify possible existing records without silently merging people.

The confirmation page must not reveal a permanent members-only WhatsApp group invitation. Group access is a separate, controlled process.

### 4.4 Member and visitor administration

- Searchable directory with permission-filtered results.
- Person profile with contact details and relevant status/history.
- Visitor and member classification.
- Create, review and update records.
- Record membership approval decision and approver.
- Detect likely duplicate records and provide a review process.
- Restrict bulk export to explicitly authorised roles.
- Support archive/retention processes without casually destroying audit history.

### 4.5 Membership approval

**Agreed policy:** The pastor and designated administrators are authorised to approve membership. An authorised approver may make the decision directly.

- Department heads do not automatically have membership approval authority.
- A department head may approve only if separately and explicitly designated as an authorised membership approver.
- The pastor or an authorised administrator with permission to manage approvers can grant or revoke that designation.
- A registration submission does not itself establish membership.
- The approval action must record the approver's identity and timestamp.
- The system must prevent unauthorised status changes at the database/server layer.
- Rejection, withdrawal, appeal and reinstatement details remain subject to church policy confirmation.

### 4.6 Visitor follow-up

- Create a follow-up item from a visitor record.
- Assign it to an authorised person.
- Record attempt date, outcome and next follow-up date.
- Track status and overdue tasks.
- Restrict notes to people with a legitimate operational need.
- Avoid unnecessary sensitive or judgemental notes.

Proposed statuses: New, Assigned, Contact attempted, Awaiting response, Follow-up scheduled, Completed. The church should approve the final labels.

### 4.7 Prayer requests

- Public form supports private requests by default.
- Public display requires a separate explicit choice and moderation before publication.
- Admins can review, assign, update status and archive according to permissions.
- Private requests must never be exposed through public queries or public storage.
- Prayer content may contain sensitive information; access and retention must be especially restrictive.
- Do not publish a request or testimony merely because it was submitted.

### 4.8 Content management

Authorised administrators can create, edit, preview, publish, unpublish and archive:
- Announcements.
- Events.
- Sermon entries and media links.
- Livestream details.
- Approved leadership and service information.

Content should support draft, published and archived states, publication dates and author/audit metadata.

### 4.9 Dashboard

The admin dashboard should show permission-appropriate, database-derived information:
- Registered member count.
- New visitor and member counts over a selected period.
- Records awaiting review.
- Follow-ups due or overdue.
- Upcoming events.
- Prayer requests awaiting moderation.
- Basic registration and website trends.

Do not display invented/sample metrics in production. Do not expose personally identifiable data to a role that only needs aggregate counts.

## 5. Explicitly outside the initial release

- Attendance capture or QR attendance. The agreed future attendance method is manual only.
- Financial management, donations, offerings and expenditure.
- Automated email campaigns/newsletters.
- Automated WhatsApp Business messaging.
- Full department operations and rosters.
- Volunteer scheduling.
- Advanced event ticketing/capacity management.
- Member self-service accounts or member mobile application.
- AI-based member scoring or pastoral recommendations.

Some foundational department and permission records may be required for access control, but that does not mean a full department-management module is included.

## 6. Future capabilities to accommodate

The architecture may later support manual attendance sessions and records, department membership, communication campaigns, volunteer scheduling, giving/finance with separate access controls, expanded reporting and event registration.

These are future considerations, not permission to build them in the initial release.

## 7. Non-functional requirements

- Mobile-first responsive experience.
- Accessible forms and navigation, with keyboard support and readable contrast.
- Search-engine-readable public content.
- Reasonable performance on common mobile devices and variable network connections.
- Clear loading, empty, success and error states.
- Database integrity and duplicate prevention.
- Secure authentication and server/database-enforced authorisation.
- Documented migrations and repeatable setup.
- Maintainable plain JavaScript, HTML and CSS.
- No secrets in client code.
- Privacy-conscious analytics.
- Backup and recovery plan before production use.

## 8. Acceptance principles

The initial release is not accepted until:
1. Public pages work without login and expose only approved public content.
2. Admin pages require authentication.
3. Direct API/database requests cannot bypass role restrictions.
4. Only the pastor and explicitly designated approvers can approve membership.
5. Department-head role alone does not confer approval permission.
6. Private prayer requests and internal notes are inaccessible publicly.
7. Registration records are distinguishable from formal membership.
8. Important changes are auditable.
9. Forms are validated and protected against common abuse.
10. The site works on mobile and desktop.
11. Real church content replaces all placeholders before public launch.
12. Deployment and production use receive explicit approval.

## 9. Requirement change control

Any change to membership authority, public/private boundaries, data collection, roles, attendance or finance must be recorded in this document and the relevant design document before implementation. Unconfirmed policy must remain an open decision.
