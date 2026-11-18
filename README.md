# The Pillar Tabernacle Church — Digital Ecosystem

A planned digital platform for **The Pillar Tabernacle Church**, comprising a public church website and a separate, authenticated church-management portal.

> **Current project stage: Requirements, architecture and documentation.**
>
> This repository is being prepared before application implementation. It currently defines the agreed direction, system boundaries, requirements, data model, security principles and delivery plan. No production application or live database is implied by these documents.

## Project vision

Create a maintainable digital foundation that helps The Pillar Tabernacle Church communicate with the public, welcome visitors, manage membership responsibly and support church administration. The system is intended to grow in controlled stages without requiring a redesign of its foundation.

## Applications

1. **Public website** — open to everyone, with no account required. It will present church information, services, events, announcements, livestreams, sermons, contact details and public-facing forms.
2. **Private admin portal** — restricted to authorised church personnel. It will support member and visitor records, registration review, follow-up, content publishing, prayer-request moderation and administrative oversight.

Both applications will be separate frontend applications and deployments. They will use one central Supabase/PostgreSQL backend with strict separation of public and privileged data access.

## Confirmed decisions

| Area | Decision |
|---|---|
| Church | The Pillar Tabernacle Church |
| Frontend | Plain HTML5, CSS3 and vanilla JavaScript (ES modules) |
| Framework exclusions | No Next.js, React or TypeScript |
| Backend direction | Supabase and PostgreSQL |
| Authentication | Supabase Auth for authorised administrators |
| Initial release | Public website and membership management |
| Applications | Separate public website and private admin portal |
| Attendance | Manual recording only; not part of the initial release |
| Membership approval | Pastor and explicitly designated administrators |
| Approval action | Authorised approvers may approve directly |
| Department-head authority | Department heads do not automatically receive membership approval rights |
| Finance | Long-term module, excluded from initial release |
| Budget | Free or near-zero-cost infrastructure where practical |
| Deployment | No deployment until explicitly approved |

## Initial release scope

- Public church website and responsive pages.
- Admin authentication with no public administrator sign-up.
- Role- and permission-based admin access.
- Visitor registration, including a church QR-code entry point.
- Member directory and member profiles.
- Membership review and approval workflow.
- Visitor follow-up tasks.
- Public announcements and events management.
- Sermon and livestream link management.
- Prayer-request submission and moderation.
- Basic, privacy-conscious website and registration analytics.
- Audit trail for sensitive administrative actions.

See [docs/PROJECT_REQUIREMENTS.md](docs/PROJECT_REQUIREMENTS.md) for detailed requirements and exclusions.

## Technology direction

| Layer | Planned technology |
|---|---|
| Public frontend | HTML, CSS, vanilla JavaScript |
| Admin frontend | HTML, CSS, vanilla JavaScript |
| JavaScript organisation | Native ES modules |
| Backend/database | Supabase / PostgreSQL |
| Authentication | Supabase Auth |
| File storage | Supabase Storage |
| Privileged server operations | Supabase Edge Functions where appropriate |
| Source control | GitHub |
| Hosting | Static hosting; Vercel is the current candidate |
| Email | Provider to be selected after requirements and cost review |
| Livestream/video | Embed an existing supported streaming platform where possible |

The frontend must remain understandable to a developer comfortable with HTML, CSS and JavaScript. Avoid introducing a framework or build system unless a documented need is agreed first.

## Repository map

```text
.
├── public-website/       # Public HTML/CSS/JS application
├── admin-portal/         # Private HTML/CSS/JS application
├── shared/               # Small, framework-free shared assets/modules
├── supabase/
│   ├── migrations/       # Version-controlled SQL migrations
│   ├── functions/        # Edge Functions (when required)
│   └── seed/             # Non-production reference/seed data
├── docs/                 # Project requirements and technical decisions
└── README.md
```

Directories are represented in Git by placeholder files until implementation begins.

## Important security principles

- Never put a Supabase service-role key or other secret in browser JavaScript.
- Treat browser input as untrusted.
- Enforce access with PostgreSQL Row Level Security and server-side checks, not merely hidden interface controls.
- Public visitors must not be able to read member records, private prayer requests, internal notes or audit logs.
- Membership approval is restricted to the pastor and administrators explicitly designated as membership approvers.
- Department-head status alone does not grant approval rights or access to all member records.
- Record who made important decisions and when.
- Collect only information necessary for a stated purpose and provide clear privacy information.

## Working approach

1. Agree and maintain requirements before coding.
2. Record unresolved questions rather than inventing church policy.
3. Design and review the database and permissions before connecting the frontend.
4. Implement in small, testable stages.
5. Test public/private access boundaries and role permissions.
6. Keep deployment separate from development; do not deploy without explicit approval.

## Documentation index

- [Project requirements](docs/PROJECT_REQUIREMENTS.md)
- [System architecture](docs/SYSTEM_ARCHITECTURE.md)
- [Project design and UX](docs/PROJECT_DESIGN.md)
- [Database design](docs/DATABASE_DESIGN.md)
- [Access control and roles](docs/ACCESS_CONTROL.md)
- [Security and privacy](docs/SECURITY_AND_PRIVACY.md)
- [Public website specification](docs/PUBLIC_WEBSITE_SPEC.md)
- [Admin portal specification](docs/ADMIN_PORTAL_SPEC.md)
- [Registration and membership workflows](docs/MEMBERSHIP_WORKFLOWS.md)
- [Analytics and reporting](docs/ANALYTICS.md)
- [API and integration plan](docs/API_AND_INTEGRATIONS.md)
- [Development roadmap](docs/DEVELOPMENT_ROADMAP.md)
- [UI design guidelines](docs/UI_DESIGN_GUIDELINES.md)
- [Open decisions](docs/OPEN_DECISIONS.md)
- [Architecture decision records](docs/decisions/README.md)

## Project status

**Planning/documentation only.** Folder placeholders and design documents do not mean the applications, database, authentication, integrations or deployment have been implemented.
