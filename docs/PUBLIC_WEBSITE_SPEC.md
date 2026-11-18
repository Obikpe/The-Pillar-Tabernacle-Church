# Public Website Specification

**Status:** Initial-release specification

## 1. Purpose

The public website is the digital front door of The Pillar Tabernacle Church. It must be welcoming, discoverable, mobile-friendly and useful without requiring an account.

## 2. Proposed pages

### Home
- Official church identity and welcome.
- Approved service times and location.
- Clear "Plan Your Visit" action.
- Upcoming events and announcements.
- Livestream status or latest sermon.
- Brief church introduction.
- Prayer request and contact links.

### About
- Approved history, mission, vision and beliefs.
- No unverified claims.

### Leadership
- Approved names, roles, biographies and photographs.
- Obtain consent/permission for personal images and information.

### Services
- Current service schedule, venue and visitor guidance.
- Timezone and holiday/special-service changes handled clearly.

### Events
- Upcoming and past events.
- Details, dates, venue and registration link where applicable.
- Only published records are public.

### Livestream
- Embed approved external stream.
- Show a clear live/offline state when known.
- Provide an alternative channel link if embed is unavailable.

### Sermons / Media
- Search or browse published messages.
- Display title, speaker, date, topic and media link.
- Use external hosting by default to control storage/bandwidth costs.

### Prayer request
- Explain privacy choices.
- Private by default.
- Public display only after explicit consent and moderation.

### New here / Plan your visit
- Explain what a first-time visitor can expect.
- Provide location and service details.
- Link to visitor registration without forcing registration before attendance.

### Contact
- Approved phone/email/social channels.
- Address and map link after the church confirms the location.
- Avoid publishing personal staff numbers without approval.

## 3. Public forms

All forms must:
- Use clear labels and explain optional fields.
- Validate in the browser and again on the server.
- Provide success and error feedback.
- Include appropriate privacy notice and consent.
- Be protected against spam and abuse.
- Avoid exposing internal record IDs or administrative status.

## 4. Content publication

Public content must have a publication state. Only approved/published content may be returned to anonymous visitors. Drafts, scheduled unpublished content and archived private content remain restricted.

## 5. Search and discoverability

- Semantic HTML and meaningful page titles/descriptions.
- Search-engine-readable page content.
- Open Graph/social preview metadata.
- Sitemap and robots policy when the site is implemented.
- Fast-loading, compressed images.
- Avoid a homepage that consists only of a client-side loading placeholder.

## 6. Accessibility and mobile

- Keyboard-accessible navigation.
- Visible focus styles.
- Form labels and accessible error messages.
- Good text/background contrast.
- Responsive layouts.
- Reduced-motion support.
- Optimised media for mobile connections.

## 7. Not in public scope

- Public member directory.
- Public members-only WhatsApp group link.
- Public admin login registration.
- Public access to private prayer requests.
- Public access to unpublished church content.
