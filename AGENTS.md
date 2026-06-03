# AGENTS.md

## Project identity

This repository is for **Palmiye Nature Hotel & Yacht Club**, a boutique hotel website that starts as a fast promotional site and must remain compatible with a future hotel reservation, admin, and owner dashboard system.

The project should feel **boutique, coastal, natural, calm, warm, and marina-oriented**. It must not feel like a generic SaaS landing page, a corporate resort template, or an AI-generated placeholder site.

## Current business context

- Hotel name: **Palmiye Nature Hotel & Yacht Club**
- The hotel has **14 physical rooms**.
- All rooms are currently considered the **same public room type**.
- Do **not** invent room categories such as `Deluxe Room`, `Suite`, `King Room`, `Sea View Room`, `Family Room`, or similar unless explicitly confirmed later.
- Known property features:
  - Boutique hotel accommodation
  - Restaurant in front of the hotel
  - Marina/yacht club atmosphere in front of the hotel
  - Pool area with pool bar behind the hotel
  - Rooftop/terrace bar on the top floor
  - Nature, greenery, bay/marina views, and sunset atmosphere

## Product phases

### Phase 1 — Promotional website

Build a fast, polished, multilingual promotional website with:

- Home page
- Rooms page
- Restaurant page
- Marina / Yacht Club page
- Pool Bar page
- Rooftop / Terrace Bar page
- Gallery page
- Contact / Location page
- WhatsApp/contact-based booking CTA
- Dockerized production deployment

Phase 1 should be static/content-driven where possible, but the frontend must be structured as if content and reservation data may later come from an API.

### Phase 2 — Classic hotel backend

The frontend must remain compatible with a later backend that will include:

- PostgreSQL database
- Reservation requests and confirmed reservations
- Calendar-based tracking for each of the 14 physical rooms
- Admin authentication and role-based access
- Admin panel for reservations, room status, gallery, and site content editing
- Owner dashboard with KPIs such as occupancy, upcoming check-ins/check-outs, pending reservations, and estimated revenue

Do not implement Phase 2 unless explicitly requested, but avoid frontend decisions that would make Phase 2 difficult.

## Expected stack

Use these technologies unless the user explicitly changes the stack:

- **Next.js** with App Router
- **TypeScript**
- **Tailwind CSS**
- **i18n-ready structure** for Turkish and English first, with easy future support for other languages
- **Docker** and **Docker Compose** for production/deployment readiness
- **PostgreSQL** planned for Phase 2

Before adding any new dependency, explain why it is needed and prefer existing project tools.

## Source-of-truth documents

When available, consult these documents before making related changes:

- `docs/PROJECT_CONTEXT.md` — hotel context, brand, business scope, do-not-invent rules
- `docs/FRONTEND_PLAN.md` — frontend architecture, pages, components, i18n, data flow
- `docs/BACKEND_PLAN.md` — Phase 2 reservation/admin/PostgreSQL/owner dashboard plan
- `docs/DEPLOYMENT_PLAN.md` — Docker, Docker Compose, VPS, reverse proxy, and deployment assumptions

If a requested task conflicts with these documents, stop and explain the conflict before changing code.

## Skill usage

When relevant, use the project skills as task-specific guidance:

- `skills/frontend-component/SKILL.md` for reusable UI, section, and page components
- `skills/i18n-content/SKILL.md` for translations, locale files, and multilingual content
- `skills/hotel-copywriting/SKILL.md` for hotel copy, CTA text, and brand-safe wording
- `skills/docker-deployment/SKILL.md` for Dockerfile, Docker Compose, deployment, and environment configuration

## Architecture rules

### Page → Section → Component

Use a layered frontend structure:

```txt
Page
  -> Section components
      -> Reusable UI components
      -> Domain components
```

Examples:

- Page: `HomePage`, `RoomsPage`, `GalleryPage`
- Section: `HeroSection`, `HighlightsSection`, `RoomsPreviewSection`, `ExperienceSection`, `GallerySection`, `LocationSection`, `CTASection`
- UI: `Button`, `Card`, `Container`, `SectionHeader`, `ImageFrame`, `Badge`
- Domain: `RoomCard`, `ExperienceCard`, `ReservationBar`, `WhatsAppBookingButton`, `LanguageSwitcher`

### Component boundaries

- Components should receive data through props.
- Components should not import static hotel content directly unless they are page-level composition files.
- Do not hardcode hotel copy inside reusable components.
- Do not duplicate similar cards/sections across pages. Extract reusable components.
- Keep components small, readable, and easy to move within a page.
- Prefer composition over large monolithic components.

## Content and i18n rules

- Do not hardcode visible UI text directly inside reusable components.
- Use translation keys for short UI text such as buttons, labels, navigation items, and form messages.
- Initial languages: **Turkish (`tr`)** and **English (`en`)**.
- Design the structure so new languages such as German or Russian can be added later without rewriting components.
- Long page content may live in locale-specific content files rather than bloating component code.
- When adding a new translation key, add both Turkish and English values.
- Do not mix languages inside the same user-facing page.

## Hotel content rules

Write copy that is specific, grounded, and believable.

Prefer wording around:

- boutique hotel
- nature
- marina
- yacht club atmosphere
- sunset
- peaceful stay
- restaurant
- pool bar
- rooftop/terrace bar
- direct contact / WhatsApp booking

Avoid unsupported claims such as:

- five-star hotel
- ultra luxury resort
- private beach
- spa / wellness center
- all inclusive
- multiple room types
- sea-view suites
- fine dining
- direct beachfront access
- airport shuttle
- pet-friendly policy

Only include such claims if the owner explicitly confirms them.

## Room and reservation modeling assumptions

For Phase 1 public pages:

- Present the accommodation as a single room offering, not multiple room categories.
- Use wording such as `Rooms`, `Standard Rooms`, or `Boutique Rooms` only if it does not imply separate types.

For future Phase 2 planning:

- Public room type: one general room/accommodation type.
- Physical room units: 14 separately tracked rooms.
- Each physical room should eventually have its own calendar.
- Reservation overlap must be prevented for the same physical room.
- Reservation flow should begin as request/confirmation-based, not automatic paid booking, unless explicitly requested.

## Data access rules

Prepare the frontend for a later backend by using service-style data access functions.

Examples:

- `getRooms()`
- `getExperiences()`
- `getGalleryImages()`
- `getSiteSettings()`
- `getAvailability()` later in Phase 2

In Phase 1, these functions may return static content. In Phase 2, they should be able to fetch from an API without rewriting presentational components.

## Styling and design rules

- Use Tailwind CSS consistently.
- Keep the visual language warm, coastal, natural, and boutique.
- Prioritize high-quality imagery, spacing, typography, and mobile usability.
- Avoid overusing animations. Subtle motion is acceptable; flashy effects are not.
- Do not use generic placeholder gradients/images if real hotel images are available.
- Do not leave placeholder text, lorem ipsum, fake hotel statistics, fake reviews, or fake room names in production code.
- Ensure all layouts work on mobile first.

## SEO and accessibility rules

- Each public page should have meaningful metadata when metadata is being implemented.
- Images should have useful `alt` text.
- Use semantic HTML where practical.
- Buttons and links must have clear accessible labels.
- Do not sacrifice performance for unnecessary visual effects.

## Docker and deployment rules

- Keep the app Docker-friendly from the beginning.
- Do not hardcode secrets, domains, API keys, or phone numbers in places that should use environment variables.
- Use environment variables for deployment-specific settings.
- Docker Compose should start simple for Phase 1 but allow future expansion with PostgreSQL and backend/admin services.
- Do not add unnecessary services before they are needed.

## AI workflow rules

When working on a task:

1. Read the relevant files first.
2. Make a short plan before broad or structural changes.
3. Keep changes focused on the requested task.
4. Do not rewrite unrelated files.
5. Do not introduce new architecture without explaining why.
6. Prefer small, reviewable changes.
7. Reuse existing components and patterns.
8. Run or suggest the relevant verification command after code changes.
9. Summarize what changed and mention any follow-up tasks.

Bad task behavior:

- Creating a whole page with hardcoded text everywhere
- Inventing new room types
- Adding fake reviews or fake amenities
- Creating duplicate components instead of reusing existing ones
- Adding dependencies without approval
- Mixing Turkish and English text in one page
- Breaking Phase 2 compatibility for short-term speed

Good task behavior:

- Build reusable components
- Pass content through props
- Keep copy in content/i18n files
- Preserve a clean route and component structure
- Keep static Phase 1 data easy to replace with API data later
- Verify the project still builds

## Verification expectations

After meaningful code changes, run the most relevant available commands, for example:

```bash
npm run lint
npm run build
npm run typecheck
```

If a command does not exist, do not invent it. State that it is missing and suggest adding it if appropriate.

Before considering a public page ready, check:

- No placeholder text remains
- No unsupported hotel claims were added
- No fake room categories were created
- UI text is i18n-compatible
- Layout works on mobile
- Images have alt text
- Primary CTA works or has a clear planned behavior
- Build/lint/type checks pass when available

## Communication style

- Be direct and practical.
- Explain tradeoffs briefly.
- Ask only when a missing decision blocks the work.
- If uncertain about a hotel fact, do not guess. Mark it as `needs owner confirmation`.
