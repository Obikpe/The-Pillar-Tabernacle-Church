# System Architecture

**Status:** Proposed architecture for review  
**Frontend constraint:** HTML, CSS and vanilla JavaScript only

## 1. Architectural overview

The system consists of two independent static frontend applications and one central managed backend.

```text
Public visitors                         Authorised church staff
      |                                          |
      v                                          v
Public Website                            Private Admin Portal
HTML + CSS + JS                           HTML + CSS + JS
      |                                          |
      +------------------+-----------------------+
                         |
                  Supabase services
                         |
       +-----------------+------------------+
       |                 |                  |
   PostgreSQL       Supabase Auth      Supabase Storage
       |                 |                  |
       +-----------------+------------------+
                         |
             Edge Functions / trusted server
              for privileged operations
```

The two applications are separate deployments and separate browser entry points. They share backend services, not unrestricted access.

## 2. Frontend approach

Use plain HTML5, CSS3 and modern vanilla JavaScript (ES modules).

- No Next.js, React or TypeScript.
- Avoid a bundler unless a later, documented requirement justifies it.
- Use semantic HTML and reusable CSS conventions.
- Keep JavaScript modules small and focused.
- Use a shared module only for genuinely common, non-sensitive functionality.
- Keep public and admin configuration separate.
- Do not store privileged data in localStorage as an authority source.
- Treat all values from the browser as untrusted.

The admin application is a client-rendered static site, but security must not depend on the user interface hiding a page or button.

## 3. Backend responsibilities

Supabase is the proposed managed backend:
- PostgreSQL stores structured records.
- Supabase Auth authenticates administrators.
- Row Level Security (RLS) enforces database access policies.
- Storage holds approved images and files with appropriate bucket policies.
- Edge Functions handle operations requiring trusted server-side logic, such as sensitive approvals, controlled public form submission, email provider calls or integrations.

The exact use of Edge Functions should be decided per operation. Never expose the service-role key in either frontend.

## 4. Application separation

### Public website

May read explicitly published public content and submit limited public forms through safe database policies or server-side functions. It must not query member directories, private prayer requests, internal notes, audit logs or administrator records.

### Admin portal

Requires an authenticated administrator and permission checks. It can access only records and actions allowed by the user's effective permissions. RLS must independently enforce those rules.

## 5. Deployment model

Candidate approach:
- One GitHub repository.
- One static hosting project for `public-website/`.
- A second static hosting project for `admin-portal/`.
- Separate deployment configuration and environment variables.
- Shared Supabase backend.
- Custom domains/subdomains to be selected later.

The chosen host must support static HTML/CSS/JS hosting and route fallback behaviour appropriate to the application. No deployment is part of the current documentation task.

## 6. Environment configuration

Use separate development, staging and production Supabase environments if budget and provider limits permit. At minimum, never use production member data for local testing.

Frontend configuration may contain the Supabase project URL and publishable/anon key, because those are designed for public clients and must be constrained by RLS. No service-role key, database password, email API secret or WhatsApp token may appear in browser code or committed files.

Provide an example environment/configuration template containing placeholders only. Never commit real credentials.

## 7. Data flow principles

- Public content is authored in the admin portal, stored centrally and published to the public site.
- Visitor submissions enter a controlled intake path and are marked unreviewed.
- Membership status changes require an authorised approval operation.
- Private prayer requests enter a restricted table or equivalent restricted record path.
- Analytics should be aggregated and minimise personal data.
- Administrative actions produce audit events.
- External email/WhatsApp integrations, when approved, are called from trusted server-side code.

## 8. Reliability and failure handling

- Public pages should show useful static church information even if dynamic content cannot load.
- Admin actions must show clear success/failure states and avoid duplicate submissions.
- Sensitive operations should be idempotent where practical.
- Do not report an action as successful until the backend confirms it.
- Define backup, restore and incident procedures before production.
- Monitor provider quotas and plan limits; do not assume free tiers are unlimited.

## 9. Architectural constraints

The system should remain understandable to a maintainer familiar with HTML, CSS and JavaScript. Avoid unnecessary framework abstractions, complex build pipelines and duplicated business rules. Put security-sensitive rules in the database or trusted backend, not only in browser JavaScript.
