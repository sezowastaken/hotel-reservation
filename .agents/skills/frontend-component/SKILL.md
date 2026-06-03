---
name: frontend-component
description: Use this skill when creating, editing, refactoring, or reviewing React/Next.js frontend components, sections, layouts, and page composition for the Palmiye Nature Hotel & Yacht Club website.
---

# Frontend Component Skill

## Purpose

Use this skill when working on frontend components for the **Palmiye Nature Hotel & Yacht Club** website.

The goal is to produce clean, modular, reusable, maintainable frontend code that supports both:

```txt
Phase 1: promotional hotel website
Phase 2: reservation/admin/owner dashboard system
```

Do not build quick one-off landing page code that will need to be rewritten later.

---

## Project Context

This project is for **Palmiye Nature Hotel & Yacht Club**, a 14-room boutique hotel with:

- A restaurant in front of the hotel
- A marina / yacht club context in front of the hotel
- A pool area with pool bar behind the hotel
- A rooftop / terrace bar on the top floor
- A calm, natural, coastal, boutique hotel identity

Important rule:

```txt
The hotel has 14 rooms and all rooms are currently considered the same public room type.
Do not invent Deluxe Room, Suite, King Room, Family Room, Sea View Room or similar categories unless explicitly confirmed later.
```

---

## Component Architecture

Use this hierarchy:

```txt
Page
  → Section
    → Domain Component
      → UI Component
```

Examples:

```txt
HomePage
  → HeroSection
  → HighlightsSection
  → RoomsPreviewSection
  → ExperiencesSection
  → GalleryPreviewSection
  → LocationSection
  → CTASection
```

```txt
RoomsPage
  → PageHero
  → RoomOverviewSection
  → AmenitiesSection
  → ReservationCTASection
```

Avoid writing entire pages as one large JSX block.

---

## Component Types

### UI Components

Small, reusable, project-wide components.

Examples:

```txt
Button
Card
Container
SectionHeader
ImageFrame
Badge
IconText
Tabs
Modal
Input
Select
Textarea
```

UI components must not contain hotel-specific copy.

Good:

```txt
<Button>{label}</Button>
```

Bad:

```txt
<Button>Book Palmiye Nature Now</Button>
```

---

### Section Components

Large page sections composed of smaller components.

Examples:

```txt
HeroSection
HighlightsSection
RoomsPreviewSection
ExperienceGridSection
GallerySection
LocationSection
CTASection
ReservationBar
```

Section components may define layout, but should still receive display content through props.

---

### Domain Components

Components tied to hotel business concepts.

Examples:

```txt
RoomCard
RoomCalendarPreview
ExperienceCard
GalleryImageCard
WhatsAppBookingButton
ReservationBar
LanguageSwitcher
```

Domain components should be reusable across pages.

---

## Data Flow Rules

Components should receive data through props.

Good:

```tsx
<HeroSection data={home.hero} />
<RoomCard room={room} />
<ExperienceCard experience={experience} />
```

Bad:

```tsx
// Bad: component imports static content directly
import { rooms } from "@/content/en/rooms";
```

Allowed:

```txt
Page-level files or service-layer files may load static content in Phase 1.
Reusable components should not import static hotel content directly.
```

---

## Phase 1 / Phase 2 Compatibility

Phase 1 uses static content.

Phase 2 may use API/database data.

Therefore, write components as if their data might later come from:

```txt
PostgreSQL
API route
CMS/admin panel
reservation backend
```

Preferred pattern:

```txt
lib/api/getRooms()
lib/api/getGalleryImages()
lib/api/getSiteSettings()
```

Phase 1:

```txt
service function returns static content
```

Phase 2:

```txt
same service function fetches from backend/API
```

The component API should not need to change.

---

## i18n Rules

Do not hardcode user-facing text inside reusable components.

Use translation keys or locale-specific content.

Good:

```tsx
const t = useTranslations("common");
<Button>{t("bookNow")}</Button>
```

Good for long page content:

```tsx
<HeroSection data={homePage.hero} />
```

Bad:

```tsx
<h2>Odalarımız</h2>
<p>Our rooms offer a peaceful stay...</p>
```

When adding a new UI text key, add it for both Turkish and English.

Planned language support:

```txt
Initial: tr, en
Future: de, ru
```

---

## Styling Rules

Use Tailwind CSS.

Style principles:

- Mobile-first.
- Clean spacing.
- Consistent container widths.
- Boutique, warm, coastal, natural visual feel.
- Avoid generic SaaS landing page aesthetics.
- Avoid excessive animations.
- Use image-led design where appropriate.

Do not use random one-off spacing values everywhere.

Prefer consistent patterns like:

```txt
section padding
container width
card radius
image aspect ratios
button variants
```

---

## Layout Rules

Every section should have a predictable structure.

Preferred section pattern:

```txt
<section>
  <Container>
    <SectionHeader />
    content
  </Container>
</section>
```

Use shared layout components instead of duplicating wrappers.

Example:

```tsx
<section className="py-20">
  <Container>
    <SectionHeader
      eyebrow={eyebrow}
      title={title}
      description={description}
    />
    <RoomGrid rooms={rooms} />
  </Container>
</section>
```

---

## Props and TypeScript Rules

Use explicit TypeScript types.

Good:

```tsx
type RoomCardProps = {
  room: Room;
};

export function RoomCard({ room }: RoomCardProps) {
  ...
}
```

Bad:

```tsx
export function RoomCard(props: any) {
  ...
}
```

Avoid `any` unless there is a clear reason.

Prefer shared domain types:

```txt
Room
Experience
GalleryImage
Amenity
SiteSettings
ReservationRequest
```

---

## Reuse Rules

Before creating a new component:

1. Search existing components.
2. Reuse existing UI primitives.
3. Extend with props if needed.
4. Only create a new component when the concept is genuinely new.

Do not create duplicates like:

```txt
Hero
MainHero
HomeHero
LandingHero
HeroBanner
```

unless there is a clear architectural reason.

---

## Content Accuracy Rules

Do not invent hotel features.

Do not claim:

```txt
private beach
spa
all-inclusive
five-star hotel
luxury suites
multiple room types
fine dining
airport transfer
pet-friendly
direct beachfront
```

unless explicitly confirmed.

Safe themes:

```txt
boutique hotel
14 rooms
nature
marina
restaurant
pool bar
rooftop terrace
sunset
calm stay
coastal atmosphere
direct contact / WhatsApp reservation
```

---

## Image Usage Rules

Use real hotel imagery where available.

Hero images should prioritize:

```txt
marina
sunset
bay
nature
hotel exterior
coastal atmosphere
```

Room images should be used for room sections, not necessarily the homepage hero.

Avoid using visually weak or distracting images as hero backgrounds.

If an image contains distracting signage, crop or avoid it for premium sections.

---

## Accessibility Rules

Components should be accessible by default.

Minimum expectations:

- Buttons are real buttons when triggering actions.
- Links are real links when navigating.
- Images have meaningful alt text.
- Form inputs have labels.
- Keyboard navigation should not be broken.
- Color contrast should remain readable.
- Do not hide important content only behind hover states.

---

## Performance Rules

- Use Next.js image optimization when possible.
- Avoid unnecessary large dependencies.
- Avoid loading all gallery images at once if the gallery becomes large.
- Keep animations lightweight.
- Do not add client components unless interactivity is required.
- Prefer server components for static display sections.

---

## Client vs Server Component Rules

Default to server components.

Use client components only for:

```txt
interactive navigation
language switcher
reservation date inputs
carousel/gallery interactions
forms
modals
mobile menu
```

Do not add `"use client"` to a component unless it actually needs browser-side state or effects.

---

## What To Do Before Editing

Before implementing a frontend task:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_CONTEXT.md` if the task touches hotel content.
3. Read `docs/FRONTEND_PLAN.md` if the task touches architecture, routing, i18n, or components.
4. Check existing components before creating new ones.
5. Keep changes focused.

---

## Good Prompt Shape

When using this skill, work from focused tasks.

Good task:

```txt
Create a reusable RoomCard component using the existing Room type.
It should receive all data through props.
Do not hardcode hotel copy.
Use existing Button, Card and ImageFrame components if available.
Do not modify unrelated files.
```

Bad task:

```txt
Make the rooms page look good.
```

---

## Review Checklist

Before finishing a frontend component task, check:

```txt
[ ] Component receives data through props
[ ] No unnecessary hardcoded user-facing text
[ ] i18n-compatible
[ ] TypeScript types are explicit
[ ] No duplicate component was created
[ ] Existing UI components were reused
[ ] Mobile layout works
[ ] No fake hotel features were invented
[ ] No unnecessary dependency was added
[ ] No unrelated files were modified
[ ] Build should still pass
```

---

## Final Principle

Build the frontend as a real product interface, not as a throwaway landing page.

The Phase 1 promotional site should already feel compatible with the future Phase 2 reservation system, admin panel, and owner dashboard.
