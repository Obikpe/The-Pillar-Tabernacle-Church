# Project Design — Product Structure and User Experience

**Status:** Conceptual design brief; visual identity and content require church approval.

## 1. Design objectives

The experience should feel welcoming, trustworthy, calm and recognisably connected to The Pillar Tabernacle Church. The public website should invite people to learn about and visit the church. The admin portal should prioritise clarity, accuracy and efficient administration.

The church's existing identity is understood to include blue and white, with a dove and pillars in the logo. Obtain the official logo and brand assets before final visual implementation. Do not redraw or substitute the logo without approval.

## 2. Two distinct experiences

### Public website

Primary audience: people unfamiliar with the church, existing members seeking information and people looking for services or media.

Design priorities:
- Clear welcome and church identity.
- Visible service information and location.
- A prominent first-time visitor route.
- Straightforward access to events, livestream and sermons.
- Clear contact and prayer-request routes.
- Strong mobile usability.
- Readable text, restrained motion and accessible contrast.

Proposed navigation:
Home | About | Services | Events | Media | Prayer | Contact

A "Plan Your Visit" or "New Here?" call to action should be prominent without making the site feel like a registration gate.

### Admin portal

Primary audience: pastor and authorised administrative personnel.

Design priorities:
- Clear page hierarchy and predictable navigation.
- Useful overview without decorative or fabricated metrics.
- Searchable records and clear filters.
- Strong indication of record status and permission boundaries.
- Confirmation for consequential actions.
- Audit context for membership decisions.
- Responsive layout for staff who may use phones or tablets.

Proposed navigation groups:
- Overview
- People: Visitors, Members, Follow-ups
- Church content: Announcements, Events, Sermons, Livestream
- Pastoral care: Prayer requests
- Administration: Users and permissions, Audit history, Settings

Navigation items must be hidden when irrelevant, but hiding an item is not a security control.

## 3. Key user journeys

1. A prospective visitor finds the church website, checks service information and plans a visit.
2. A person attending in person scans a QR code and submits visitor information.
3. An authorised administrator reviews the submission and records appropriate classification.
4. A visitor is assigned a follow-up task.
5. An authorised membership approver reviews a membership request and makes a decision.
6. An authorised content editor publishes an announcement or event.
7. A visitor submits a private prayer request, which is reviewed only by authorised personnel.

Detailed flows are in MEMBERSHIP_WORKFLOWS.md.

## 4. Page-level design direction

### Homepage
- Header with official logo and clear navigation.
- Hero area with approved welcome copy and primary visit action.
- Service details.
- Upcoming event/announcement highlights.
- Livestream or latest sermon section.
- Brief church introduction.
- Prayer and contact links.
- Footer with approved contact and social links.

### About and leadership
- Church history, mission, vision and beliefs only after approval.
- Leadership names, titles and photographs only with permission.
- Avoid publishing personal contact information without approval.

### Events and announcements
- Clear dates, times, location and event details.
- Distinguish upcoming, ongoing and past events.
- Expired content should not remain presented as upcoming.

### Media
- Embed external media rather than upload large video files by default.
- Provide title, speaker, date and topic metadata.
- Ensure external embeds do not load unnecessary trackers before user interaction where practical.

### Admin dashboard
- Role-appropriate summary cards.
- Work queue for pending registrations and follow-ups.
- Upcoming events and moderation queue.
- Trend summaries with date ranges and definitions.
- No sensitive prayer text or member details on an overview screen unless needed and authorised.

## 5. Content design principles

- Use plain, welcoming language.
- Do not assume visitors understand church-specific terminology.
- Use consistent date/time formatting and state the timezone where needed.
- Make forms explain why each field is requested.
- Make optional fields visibly optional.
- Provide accessible labels and useful validation messages.
- Never use colour alone to communicate status.

## 6. Responsive behaviour

Design mobile-first. Public pages must work on narrow phones. Admin tables should become stacked cards or use intentional horizontal scrolling on small screens; do not let critical actions become inaccessible.

## 7. Motion and visual effects

Use subtle, purposeful transitions only. Respect `prefers-reduced-motion`. Avoid animation that delays access to service times, registration or other essential information.

## 8. Content and assets required from the church

- Official logo in a suitable web format.
- Approved brand colours and any brand guidelines.
- Church history, mission, vision and beliefs.
- Official address and map pin.
- Service days and times.
- Approved contact details and social accounts.
- Leadership names, roles, biographies and image permissions.
- Approved welcome copy and photography.
- Livestream and sermon channel details.
- Privacy notice and form consent wording.

Unknown content must remain clearly marked as awaiting church confirmation, not fabricated.
