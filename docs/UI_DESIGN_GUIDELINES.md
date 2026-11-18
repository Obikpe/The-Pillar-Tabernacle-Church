# UI Design Guidelines

**Status:** Initial guidelines; final brand tokens require church approval

## 1. Brand

The church's existing identity is understood to use blue and white and to feature a dove and pillars. Obtain official logo files and confirm the exact colours before implementing a final theme. Do not approximate the official logo.

## 2. Visual principles

- Welcoming and respectful.
- Clear, calm and uncluttered.
- Consistent typography and spacing.
- Strong hierarchy for service information and primary actions.
- Avoid excessive gradients, decorative effects or distracting animation.
- Use real, approved church imagery rather than generic stock imagery wherever possible.

## 3. Responsive design

Use mobile-first CSS with flexible layouts, relative units and a small set of documented breakpoints. Test common phone widths, tablets and desktop.

## 4. Accessibility

- Semantic HTML landmarks and headings.
- Labels for all form controls.
- Keyboard-accessible navigation and dialogs.
- Visible focus indicators.
- Sufficient contrast.
- Meaningful alt text.
- Status is not communicated by colour alone.
- Respect `prefers-reduced-motion`.

## 5. Components

Build reusable, framework-free patterns:
- Header/navigation.
- Footer.
- Buttons and links.
- Form fields and validation messages.
- Cards.
- Status labels.
- Tables/list views.
- Confirmation dialogs.
- Empty/loading/error states.
- Pagination and filters.

Shared CSS/JS must not blur the public/admin security boundary.

## 6. Admin usability

- Confirm destructive or consequential actions.
- Show record status and last-updated context.
- Do not show controls the user cannot use.
- Never treat hidden controls as access control.
- Keep sensitive information out of unnecessary summary cards.
- Provide useful empty states and actionable errors.

## 7. Motion

Use brief, purposeful transitions. Avoid motion that blocks reading or form completion. Respect reduced-motion settings.
