# FRONTEND_PLAN.md

## 1. Purpose

This document defines the frontend plan for **Palmiye Nature Hotel & Yacht Club**.

The first release is a fast promotional website, but the frontend must be designed so it can later support a classic hotel backend with reservations, room calendars, admin editing, and owner dashboards without needing to be rewritten from scratch.

The main principle is:

> Phase 1 is a static/data-driven promotional frontend. Phase 2 connects the same frontend structure to a backend and database.

---

## 2. Recommended Stack

Use the following stack unless there is a strong reason to change it:

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** `next-intl` or an equivalent key-based i18n structure
- **Images:** Next.js Image component where possible
- **Forms:** React Hook Form + Zod when reservation/contact forms are introduced
- **Deployment target:** Dockerized production build

Avoid unnecessary UI libraries or large dependencies unless they solve a clear problem.

---

## 3. Frontend Philosophy

The site must not be built as a one-off landing page.

It should be built as a modular hotel website frontend that can evolve into a booking/admin system.

Core rules:

- Use a **Page → Section → Component** structure.
- Keep components small and reusable.
- Keep hotel content separate from visual components.
- Do not hardcode long text inside components.
- Do not invent multiple room types; the hotel currently has 14 rooms and all are treated as the same public room type.
- Design public-facing room UI around a single room concept, while keeping backend compatibility for 14 physical rooms later.
- Design call-to-action areas so Phase 1 can use WhatsApp and Phase 2 can redirect to the reservation flow.

---

## 4. Page Structure

### Phase 1 Public Pages

The first version should include these public pages:

```txt
/[locale]
/[locale]/rooms
/[locale]/restaurant
/[locale]/marina
/[locale]/pool-bar
/[locale]/rooftop-terrace
/[locale]/gallery
/[locale]/contact
```

Supported initial locales:

```txt
/tr
/en
```

Future locales should be easy to add:

```txt
/de
/ru
```

### Phase 2 Public Pages

These pages can be added later without changing the Phase 1 structure:

```txt
/[locale]/reservation
/[locale]/reservation/confirmation
/[locale]/reservation/status
```

### Phase 2 Admin Pages

The admin area should be separated from the public marketing site:

```txt
/admin
/admin/login
/admin/dashboard
/admin/reservations
/admin/rooms
/admin/calendar
/admin/content
/admin/gallery
/admin/settings
```

The admin routes do not need to be implemented in Phase 1, but the public frontend must be structured so admin-managed content can later replace static content.

---

## 5. Suggested App Folder Structure

```txt
app/
  [locale]/
    layout.tsx
    page.tsx
    rooms/
      page.tsx
    restaurant/
      page.tsx
    marina/
      page.tsx
    pool-bar/
      page.tsx
    rooftop-terrace/
      page.tsx
    gallery/
      page.tsx
    contact/
      page.tsx
    reservation/
      page.tsx

  admin/
    layout.tsx
    page.tsx
    login/
      page.tsx
    dashboard/
      page.tsx
    reservations/
      page.tsx
    rooms/
      page.tsx
    calendar/
      page.tsx
    content/
      page.tsx
    gallery/
      page.tsx
    settings/
      page.tsx
```

Admin routes may remain unimplemented in Phase 1.

---

## 6. Component Architecture

Use three component layers.

### 6.1 Layout Components

These define the global page shell:

```txt
components/layout/Header.tsx
components/layout/Footer.tsx
components/layout/MobileNav.tsx
components/layout/SiteShell.tsx
components/layout/LocaleSwitcher.tsx
```

### 6.2 Section Components

These are reusable page sections:

```txt
components/sections/HeroSection.tsx
components/sections/HighlightsSection.tsx
components/sections/RoomsPreviewSection.tsx
components/sections/ExperienceGridSection.tsx
components/sections/GalleryPreviewSection.tsx
components/sections/LocationSection.tsx
components/sections/CTASection.tsx
components/sections/ReservationBar.tsx
components/sections/PageHero.tsx
```

### 6.3 UI Components

These are small reusable building blocks:

```txt
components/ui/Button.tsx
components/ui/Card.tsx
components/ui/Container.tsx
components/ui/SectionHeader.tsx
components/ui/ImageFrame.tsx
components/ui/Badge.tsx
components/ui/IconText.tsx
components/ui/Tabs.tsx
components/ui/Input.tsx
components/ui/Textarea.tsx
components/ui/Select.tsx
```

### 6.4 Domain Components

These are hotel-specific but still reusable:

```txt
components/domain/RoomCard.tsx
components/domain/RoomDetails.tsx
components/domain/ExperienceCard.tsx
components/domain/GalleryGrid.tsx
components/domain/WhatsAppBookingButton.tsx
components/domain/AvailabilityForm.tsx
```

---

## 7. Page Composition Pattern

Pages should compose sections. Sections should compose smaller components.

Example homepage structure:

```txt
HomePage
  ├─ HeroSection
  ├─ ReservationBar
  ├─ HighlightsSection
  ├─ RoomsPreviewSection
  ├─ ExperienceGridSection
  ├─ GalleryPreviewSection
  ├─ LocationSection
  └─ CTASection
```

Avoid placing large JSX blocks directly inside page files.

Page files should primarily:

1. Load content/data.
2. Pass data into section components.
3. Define page-level metadata.
4. Compose the page layout.

---

## 8. Data-Driven Frontend

The frontend should be built around data models instead of hardcoded markup.

Bad pattern:

```tsx
<h1>Palmiye Nature Hotel & Yacht Club</h1>
<p>A peaceful boutique hotel...</p>
```

Better pattern:

```tsx
<HeroSection data={home.hero} />
```

The component should not know where the content came from. It should only receive props.

Phase 1 data source:

```txt
Static TypeScript content files
```

Phase 2 data source:

```txt
Backend API connected to PostgreSQL
```

The component API should stay stable between both phases.

---

## 9. Suggested Content Structure

Use static content files in Phase 1, but keep them shaped like future API responses.

```txt
content/
  tr/
    home.ts
    rooms.ts
    experiences.ts
    gallery.ts
    contact.ts
  en/
    home.ts
    rooms.ts
    experiences.ts
    gallery.ts
    contact.ts
```

Short UI labels should not live in these content files. They should live in translation message files.

---

## 10. i18n Structure

The project must support Turkish and English in Phase 1.

It should be easy to add German and Russian later.

Use this structure:

```txt
messages/
  tr.json
  en.json
  de.json
  ru.json
```

Only `tr.json` and `en.json` are required in Phase 1.

### UI Text

Short reusable UI text should use translation keys:

```txt
common.bookNow
common.contactUs
common.viewRooms
common.gallery
common.location
navigation.rooms
navigation.restaurant
navigation.marina
```

Example:

```json
{
  "common": {
    "bookNow": "Rezervasyon Yap",
    "contactUs": "İletişime Geç"
  }
}
```

### Long Page Content

Long marketing content should live in locale-specific content files:

```txt
content/tr/home.ts
content/en/home.ts
```

Do not place long hotel descriptions directly inside components.

---

## 11. Route Localization Decision

For the first version, keep route slugs stable across languages:

```txt
/tr/rooms
/en/rooms
/tr/contact
/en/contact
```

This is simpler and safer for the MVP.

Localized slugs such as `/tr/odalar` and `/de/zimmer` can be considered later if SEO strategy requires it.

---

## 12. Room Frontend Model

The hotel currently has 14 rooms and all rooms are treated as the same public room type.

The frontend should not show fake categories like:

```txt
Deluxe Room
King Room
Suite
Family Room
Sea View Room
```

Unless the owner confirms actual room categories later.

### Public Room Concept

In Phase 1, public pages should present a general room experience:

```txt
Rooms at Palmiye Nature Hotel & Yacht Club
```

or:

```txt
Standard Room
```

depending on final content decision.

### Future Backend Compatibility

In Phase 2, the backend may track 14 physical rooms individually:

```txt
Room 101
Room 102
...
Room 114
```

But the public frontend can still present them as one room type.

Suggested TypeScript model:

```ts
type PublicRoom = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capacity?: {
    adults?: number;
    children?: number;
    totalGuests?: number;
  };
  beds?: string[];
  amenities: string[];
  images: string[];
  featuredImage: string;
  isBookable: boolean;
};
```

Do not add unconfirmed fields just to make the hotel look bigger.

---

## 13. Experiences Model

The hotel should be presented through real experience areas:

```txt
Restaurant
Marina / Yacht Club
Pool Bar
Rooftop Terrace
Nature & Sunset
```

Suggested model:

```ts
type Experience = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  featuredImage: string;
  galleryImages?: string[];
  highlights?: string[];
};
```

The same `ExperiencePageTemplate` can be used for restaurant, marina, pool bar, and rooftop terrace pages.

---

## 14. Gallery Model

Gallery images should be categorized so the gallery can later be managed from the admin panel.

Suggested categories:

```txt
all
rooms
nature
marina
restaurant
pool
rooftop
exterior
```

Suggested model:

```ts
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  sortOrder?: number;
};
```

Every image must have meaningful alt text.

---

## 15. Reservation UI Plan

Phase 1 should include reservation-oriented CTAs even before the real backend exists.

### Phase 1 Behavior

Reservation actions should use WhatsApp or direct contact.

Example CTA flow:

```txt
User selects check-in, check-out, and guests.
Clicking the CTA opens WhatsApp with a prefilled message.
```

Example message:

```txt
Hello, I would like to get availability information for Palmiye Nature Hotel & Yacht Club between [check-in] and [check-out] for [guest count] guests.
```

### Phase 2 Behavior

The same reservation form structure should later connect to backend availability APIs.

Potential API-backed flow:

```txt
1. User selects dates and guest count.
2. Frontend calls availability endpoint.
3. If available, user submits a reservation request.
4. Admin confirms the reservation from the admin panel.
```

The UI should be designed so switching from WhatsApp mode to API mode does not require redesigning the reservation section.

---

## 16. Service Layer Rule

Use a service layer to isolate data sources.

Suggested structure:

```txt
lib/services/getHomeContent.ts
lib/services/getRooms.ts
lib/services/getExperiences.ts
lib/services/getGalleryImages.ts
lib/services/getSiteSettings.ts
```

Phase 1 example:

```ts
export async function getRooms(locale: Locale) {
  return staticRooms[locale];
}
```

Phase 2 example:

```ts
export async function getRooms(locale: Locale) {
  return fetchFromApi(`/api/public/rooms?locale=${locale}`);
}
```

Pages should call services. Components should receive props.

---

## 17. SEO and Metadata

Each public page should have unique metadata.

Use metadata generated from page content where possible.

Required per page:

```txt
Title
Description
Open Graph title
Open Graph description
Open Graph image
Canonical URL when available
```

Avoid duplicate metadata across all pages.

The site should target a boutique hotel/marina/nature positioning, not a generic luxury resort identity.

Suggested keyword themes:

```txt
Marmaris boutique hotel
Marmaris marina hotel
nature hotel Marmaris
Marmaris yacht club hotel
Marmaris hotel with pool bar
Marmaris rooftop terrace hotel
```

Use keywords naturally. Do not keyword-stuff.

---

## 18. Visual Rules

The strongest visuals are:

```txt
Marina
Sunset
Nature/green surroundings
Bay and mountain views
Pool/pool bar
Rooftop terrace
Clean rooms
```

Hero sections should prioritize atmosphere and place, not generic room photos.

Avoid using weak or distracting visuals as hero images, especially images with visible unrelated commercial signs or messy framing.

Use large images carefully and optimize for performance.

---

## 19. Performance Rules

The site must feel fast, especially on mobile.

Rules:

- Use optimized images.
- Avoid loading huge image galleries on first page load.
- Prefer responsive image sizes.
- Avoid unnecessary animation libraries unless needed.
- Use animations subtly.
- Keep layout stable and avoid large cumulative layout shifts.
- Do not add heavy dependencies for simple UI needs.

---

## 20. Accessibility Rules

Minimum accessibility standards:

- Buttons and links must have clear labels.
- Images must have meaningful alt text.
- Form inputs must have labels.
- Navigation must be keyboard accessible.
- Color contrast must be readable.
- Do not rely only on color to communicate meaning.

---

## 21. What Not To Do

Do not:

- Build the homepage as one giant component.
- Hardcode all text inside JSX.
- Create fake room types.
- Create fake amenities like spa, private beach, all-inclusive, or luxury suites.
- Use generic AI-generated hotel copy without checking it against project context.
- Add large dependencies for small design problems.
- Duplicate similar cards/sections instead of making reusable components.
- Mix admin logic into public marketing components.
- Make the Phase 1 frontend impossible to connect to the Phase 2 backend.

---

## 22. Phase 1 Definition of Done

The Phase 1 frontend is complete when:

- Public pages exist for home, rooms, restaurant, marina, pool bar, rooftop terrace, gallery, and contact.
- Turkish and English are supported.
- Header, footer, navigation, and language switcher work.
- Main CTAs work through WhatsApp/contact flow.
- Content is not hardcoded inside low-level components.
- Pages are mobile responsive.
- Images are optimized and have alt text.
- No placeholder text remains.
- No unconfirmed hotel features are claimed.
- The codebase can later connect to a backend through service functions.

