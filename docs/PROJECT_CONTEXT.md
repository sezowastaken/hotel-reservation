# PROJECT_CONTEXT.md

## Project Overview

**Project name:** Palmiye Nature Hotel & Yacht Club  
**Project type:** Boutique hotel promotional website, designed to evolve into a reservation and hotel management platform.  
**Current phase:** Phase 1 — fast promotional website.  
**Future phase:** Phase 2 — reservation system, admin panel, PostgreSQL-backed hotel operations, and owner dashboard.

Palmiye Nature Hotel & Yacht Club is a small boutique hotel with a calm coastal/nature identity. The website should present the hotel as a peaceful, warm, boutique destination shaped by nature, marina atmosphere, sunset views, restaurant, pool bar, and rooftop terrace bar.

The project must not be treated as a generic hotel template. The site should reflect the real hotel context and avoid invented luxury/resort claims.

---

## Confirmed Hotel Facts

- Hotel name: **Palmiye Nature Hotel & Yacht Club**
- The hotel has **14 rooms**.
- All rooms are currently considered the **same public room type**.
- The hotel has a **restaurant in front**.
- There is a **marina in front / nearby**.
- There is a **pool with a pool bar** behind or within the hotel area.
- There is a **bar-style rooftop terrace** on the top floor.
- The hotel is already open and needs a fast promotional website for credibility, agencies, and direct guest communication.
- Phase 1 reservation action should be simple and fast, likely through WhatsApp or direct contact.

---

## Critical Room Rule

The hotel has **14 rooms**, but the public website should not invent multiple room categories.

Do **not** create or mention fake room types such as:

- Deluxe Room
- Suite
- King Room
- Family Room
- Sea View Room
- Premium Room
- Presidential Suite
- Economy Room

unless the hotel owner explicitly confirms them later.

For Phase 1, the public-facing website should present the rooms simply as:

- Rooms
- Standard rooms
- Comfortable boutique rooms
- 14-room boutique hotel accommodation

For Phase 2 backend/operations, the system may track the **14 physical rooms individually** for calendar and reservation management, but this does not mean the public website has multiple room types.

---

## Visual and Brand Context

Based on the provided hotel photos, the strongest visual identity is not ultra-luxury resort architecture; it is:

- Marina and yacht atmosphere
- Calm bay / coastal setting
- Nature and greenery
- Golden-hour and sunset scenery
- Boutique-scale hospitality
- Warm, simple, comfortable rooms
- Restaurant and social areas
- Pool bar and rooftop terrace experience

The website should feel:

- Boutique
- Natural
- Warm
- Calm
- Coastal
- Relaxed but polished
- Trustworthy
- Modern without looking like a generic SaaS landing page

The website should not feel:

- Corporate resort template
- Fake luxury hotel
- Overly flashy
- Generic AI-generated travel site
- A large all-inclusive resort
- A cold real-estate or booking portal

---

## Positioning

Recommended positioning:

> A peaceful 14-room boutique hotel where nature, marina life, sunset views, restaurant, pool bar, and rooftop terrace atmosphere come together.

The hotel should be presented as a **boutique coastal escape**, not as a massive resort.

Main value points:

1. 14-room boutique scale
2. Marina / yacht club atmosphere
3. Nature and greenery
4. Sunset and bay scenery
5. Restaurant
6. Pool bar
7. Rooftop terrace bar
8. Comfortable and clean rooms
9. Direct contact / fast reservation communication
10. Calm holiday experience

---

## Content Tone

Use clear, warm, and premium-but-not-exaggerated language.

Good tone examples:

- “A peaceful boutique stay by nature and the marina.”
- “Wake up close to the marina and unwind with sunset views.”
- “A calm coastal escape with restaurant, pool bar, and rooftop terrace.”
- “Simple, comfortable rooms in a boutique hotel atmosphere.”

Avoid exaggerated or unsupported phrases:

- “Ultra-luxury resort”
- “Five-star experience”
- “Private beach”
- “World-class spa”
- “Fine dining restaurant”
- “All-inclusive resort”
- “Award-winning yacht club”
- “Luxury suites”

Only use such claims if they are later confirmed by the owner.

---

## Phase 1 Goal

Phase 1 is a fast, polished promotional website.

Main goals:

- Make the hotel look real, trustworthy, and attractive.
- Help agencies understand the hotel quickly.
- Help guests contact the hotel easily.
- Showcase rooms, restaurant, marina, pool bar, rooftop terrace, and gallery.
- Support Turkish and English from the beginning.
- Keep the frontend architecture compatible with future backend/reservation/admin features.

Phase 1 should prioritize:

- Strong hero section with marina/sunset/nature imagery
- Clear hotel identity
- Simple room presentation
- WhatsApp / phone / location CTAs
- Gallery
- Contact and map information
- SEO-friendly structure
- Mobile-first experience

Phase 1 should not overbuild:

- No full booking engine yet
- No online payment yet
- No customer account system yet
- No unnecessary complex admin logic yet

---

## Phase 2 Direction

Phase 2 will extend the project into a classic small hotel backend system.

Expected Phase 2 features:

- PostgreSQL database
- Reservation request and reservation management
- Individual calendar tracking for each of the 14 physical rooms
- Admin login and role-based access
- Admin panel for reservations, rooms, content, gallery, and hotel settings
- Owner dashboard with KPIs
- Dynamic content management for public website text and images

Phase 1 frontend must therefore be built in a way that can later receive data from APIs instead of being rewritten from scratch.

---

## Suggested Public Site Pages

Phase 1 public pages:

- Home
- Rooms
- Restaurant
- Marina / Yacht Club
- Pool Bar
- Rooftop Terrace
- Gallery
- Contact

Future Phase 2 public/admin pages:

- Reservation / availability request
- Reservation confirmation
- Admin dashboard
- Admin reservations
- Admin room calendar
- Admin content management
- Admin gallery management
- Admin settings
- Owner KPI dashboard

---

## Competitor Research Lessons

Research from Marmaris hotel websites suggests these lessons:

- Strong hotels sell **experience**, not just rooms.
- Large resorts highlight many facilities, but Palmiye should not imitate big resort scale.
- Direct reservation/contact CTAs must be visible early.
- Boutique hotels benefit from simple, clear, trust-building pages.
- Avoid placeholder text, fake sections, broken links, or unfinished visual details.
- Palmiye should combine a boutique hotel structure with destination-style storytelling around marina, nature, sunset, restaurant, pool bar, and rooftop terrace.

---

## AI / Codex Context Rules

When working on this project, AI assistants must follow these context rules:

1. Do not invent hotel features.
2. Do not invent multiple room types.
3. Do not turn the hotel into a fake luxury resort.
4. Do not hardcode long content directly into reusable components.
5. Keep the project ready for Phase 2 backend integration.
6. Prefer modular, reusable, data-driven structures.
7. Maintain i18n compatibility for Turkish and English from the start.
8. Keep future German and Russian support easy to add.
9. Use real hotel context: boutique, nature, marina, restaurant, pool bar, rooftop terrace.
10. Prioritize clean, maintainable code over fast AI-generated visual clutter.

---

## One-Sentence Project Summary

Palmiye Nature Hotel & Yacht Club is a 14-room boutique hotel website project that begins as a fast promotional site and is designed to evolve into a PostgreSQL-backed reservation, admin, and owner dashboard system without rebuilding the frontend from scratch.
