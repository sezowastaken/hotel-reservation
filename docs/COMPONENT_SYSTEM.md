# COMPONENT_SYSTEM.md

## Purpose

This document defines the locked component system for **Palmiye Nature Hotel & Yacht Club**.

The goal is to stop uncontrolled AI-generated component sprawl and prevent the site from becoming a generic template. Codex must use this document as the source of truth when creating, refactoring, or styling components.

This document is based on:
- the project-specific `DESIGN_DIRECTION.md`
- the current Palmiye website feedback
- selective research from 21st.dev component categories
- the need for a warm, local, Aegean/Marmaris boutique hotel feeling

The objective is not to copy flashy components. The objective is to build a small, controlled design system that can produce a polished hotel site.

---

## 21st.dev Research Summary

21st.dev has a large community component catalog. For this project, the useful areas are:

```txt
Heroes
Navigation Menus
Calls to Action
Buttons
Footers
Popovers
Maps
Images
Cards
```

These categories are useful as **inspiration sources**, but components must not be copied blindly.

For Palmiye, only the following kinds of patterns are allowed to influence the component system:

```txt
simple cinematic hero patterns
minimal boutique navigation patterns
small language popover/modal patterns
compact CTA blocks
warm footer layouts
editorial image collage patterns
decorative map/location patterns
```

Avoid patterns that feel like:

```txt
SaaS landing pages
AI dashboards
shader-heavy visuals
crypto/tech startup UI
pricing sections
testimonial walls without real reviews
floating docks
over-animated hero effects
component showcase pages
```

---

## External Component Adoption Rule

Do not paste random external component code directly into the project.

If a component from 21st.dev, Magic UI, Aceternity, shadcn/ui, or another source is considered:

1. Identify the exact visual behavior needed.
2. Recreate a project-native version using existing Palmiye tokens and primitives.
3. Remove unnecessary animation, dependencies, and props.
4. Make it compatible with the current i18n and service layer.
5. Use real Palmiye content, not demo copy.
6. Keep the component small and readable.

Do not add external dependencies unless explicitly approved.

---

## Hard Scope Rule

When a task targets the homepage, Codex must not directly modify these public page files:

```txt
rooms
restaurant
marina
pool-bar
rooftop-terrace
gallery
contact
```

Shared components may affect multiple pages, but page-specific files must not be edited unless the task explicitly says so.

When a task targets a specific page, Codex must only modify that page and the shared components directly required by that page.

---

## Design Tokens

Use the visual language defined in `DESIGN_DIRECTION.md`.

### Color Tokens

Use CSS variables or Tailwind theme names that map to these concepts.

```txt
--color-ivory: warm page background
--color-sand: secondary warm surface
--color-pine: deep marina/pine green
--color-pine-soft: softer green surface
--color-sea: muted sea teal
--color-clay: terracotta / sunset accent
--color-charcoal: main text
--color-border-warm: warm subtle border
```

Recommended values:

```txt
ivory: #F7F1E7
sand: #EFE4D2
pine: #123A32
pine-soft: #183F36
sea: #7CA9A3
clay: #C47A55
charcoal: #1F2421
border-warm: rgba(31, 36, 33, 0.14)
```

### Color Rules

Do:

```txt
Use ivory/sand backgrounds.
Use pine as the main dark anchor.
Use clay for primary CTA and small highlights.
Use sea only as a muted supporting accent.
```

Do not:

```txt
Use random teal buttons.
Use black buttons.
Use pure white everywhere.
Use bright turquoise.
Use many accent colors in the same section.
```

---

## Typography Tokens

Use two font families:

```txt
Display serif: for hero and section headings.
Clean sans: for body, nav, buttons, labels.
```

Recommended direction:

```txt
Headings: warm serif, readable, not overly elegant.
Body: clean sans-serif, calm and modern.
```

Do not use excessive letter-spacing on Turkish phrases.

Bad:

```txt
M Ü S A İ T L İ K  S O R
B U T İ K  O T E L
```

Good:

```txt
Müsaitlik Sor
Butik Otel
```

---

## Allowed UI Primitives

Only these UI primitives should exist unless a new one is explicitly approved:

```txt
Button
ButtonLink
Container
SectionHeader
ImageFrame
Badge
IconText
Card
Modal
Popover
LanguageOption
```

`Card` is allowed as a primitive, but should be used sparingly on marketing pages.

Do not create:

```txt
FeatureCardGrid
InfoCardGrid
RandomHighlightCard
GenericCardsSection
StatsCard
SaaSFeatureCard
```

---

## Button System

Use one `Button` component with variants.

Do not create separate `Button1`, `Button2`, `FancyButton`, `CTAButton`, etc.

### Button Variants

#### `primary`

Use for the main action.

Visual:

```txt
clay / terracotta background
ivory text
rounded-full or soft pill
strong but warm
```

Use for:

```txt
WhatsApp ile Müsaitlik Sor
Book via WhatsApp
Müsaitlik Sor
```

#### `dark`

Use when the section background is light and a calmer strong button is needed.

Visual:

```txt
deep pine background
ivory text
rounded-full
```

Use carefully. Do not use it everywhere.

#### `secondary`

Use for the secondary hero action.

Visual:

```txt
warm ivory/sand background
charcoal or pine text
subtle border
rounded-full
```

Use for:

```txt
Oteli Keşfet
Odaları Gör
Galeriye Bak
```

#### `outline`

Use for low-emphasis actions.

Visual:

```txt
transparent / ivory background
warm border
pine text
rounded-full
```

#### `ghost`

Use for navigation-like actions.

Visual:

```txt
no heavy background
subtle hover
```

#### `text`

Use for small inline links inside mosaic cards or editorial sections.

Visual:

```txt
no button box
small underline or arrow
clay/pine hover
```

### Button Rules

Do:

```txt
Use at most two button variants in one section.
Keep CTA labels short.
Use consistent sizes.
```

Do not:

```txt
Use black text on dark/sea backgrounds.
Use random colors per section.
Use disabled-looking CTAs for real actions.
Use more than one primary CTA in the same visual area.
```

---

## Header System

The header must feel calm, clean and boutique.

### Desktop Header

Structure:

```txt
[Brand/Home Link]        [Odalar] [Restoran] [Marina] [Pool Bar] [Teras Bar] [Galeri] [İletişim]        [Language Flag Button]
```

Rules:

```txt
The brand name links to the homepage.
Do not include a separate “Ana Sayfa” / “Home” nav item.
Navigation labels come from i18n messages.
Header background uses warm ivory/sand.
Use a subtle bottom border.
Do not make the header look like a default browser navbar.
```

### Mobile Header

Structure:

```txt
[Brand/Home Link]        [Language Flag Button] [Menu Button]
```

Mobile menu may be a simple slide-down or modal menu.

Do not create complex mega menus.

---

## Language Selector System

Do not use a native `<select>` for language switching.

Use a small circular flag button in the header.

### Trigger

Desktop and mobile:

```txt
round button
current locale flag
optional short label only if space allows
```

For initial languages:

```txt
TR
EN
```

Future-ready:

```txt
DE
RU
```

### Modal / Popover

Use a small centered modal or popover.

Behavior:

```txt
background lightly darkens
modal opens with language options
current language is marked
click outside or close button closes
```

Content:

```txt
Dil seç / Select language
Türkçe
English
```

Do not create a huge Booking.com-style language modal because the project only has 2-4 languages.

But the visual idea can be inspired by Booking.com:

```txt
flag icon
language name
selected check
soft modal backdrop
```

---

## Footer System

Footer should not have one long page list.

Use a balanced layout.

### Footer Structure

```txt
Column 1:
Brand name
short warm description

Column 2:
Konaklama / Stay
- Odalar
- Galeri
- İletişim

Column 3:
Deneyimler / Experiences
- Restoran
- Marina
- Pool Bar
- Teras Bar

Column 4:
İletişim / Contact
- only confirmed contact data
- otherwise safe confirmation text
```

Rules:

```txt
Do not invent phone, address, email, WhatsApp, Instagram or map links.
If data is missing, show a warm fallback.
Footer background should be deep pine.
Text should be ivory/sand.
Links should be readable and calm.
```

---

## CTA System

The homepage must not repeat the same CTA too often.

Allowed CTA rhythm:

```txt
Hero CTA group
One compact contact/availability card near the top
One final CTA near the bottom
```

Do not add “Müsaitlik Sor” to every section.

### CTA Components

Allowed CTA components:

```txt
HeroCTAGroup
CompactContactCard
FinalCTA
WhatsAppBookingButton
```

### CompactContactCard

Purpose:

```txt
Convert interest into direct contact without pretending to have a full booking engine.
```

Use:

```txt
small warm card
short text
one action button
```

Do not use:

```txt
giant dark green band
empty white button
fake form fields
fake booking engine
```

### FinalCTA

Purpose:

```txt
Close the page with one clear action.
```

Use:

```txt
pine background
warm text
one clay primary button
```

---

## Homepage Allowed Sections

The homepage may only use the following section pattern list unless a new section is explicitly approved:

```txt
HomeHero
CompactContactCard
BoutiqueStorySection
RoomsSnapshotSection
ExperiencesMosaic
GalleryCollage
MapPreviewSection
FinalCTA
```

Do not add extra sections just to fill space.

### Homepage Content Balance

The homepage must not become a rooms page.

Content balance:

```txt
40% atmosphere / vacation feeling
25% experiences: restaurant, marina, pool bar, terrace
15% rooms
10% gallery / visual proof
10% contact / conversion
```

The hero should sell the overall stay, not only rooms.

---

## HomeHero

Purpose:

```txt
Create desire and immediately communicate place.
```

Required:

```txt
large marina/sunset/bay image
short serif headline
brief subtitle
two CTAs max
warm overlay
```

Hero should focus on:

```txt
nature
marina
sunset
Marmaris
small boutique hotel feeling
```

Hero should not focus primarily on:

```txt
rooms
beds
reservation mechanics
```

---

## BoutiqueStorySection

Purpose:

```txt
Explain the hotel identity in one warm editorial block.
```

Must mention in guest-facing language:

```txt
14-room boutique scale
marina atmosphere
nature
restaurant
pool bar
rooftop terrace
sunset
```

Do not use technical/internal wording like:

```txt
public room type
operational room unit
one general room experience
```

---

## RoomsSnapshotSection

Purpose:

```txt
Give enough confidence about rooms without turning homepage into a rooms page.
```

Use:

```txt
one strong room image
short warm text
3-5 chips/details
one secondary CTA to rooms page
```

Do not create:

```txt
room category grid
pricing cards
suite cards
Deluxe/King/Family/Sea View categories
```

---

## ExperiencesMosaic

Purpose:

```txt
Show the hotel as a multi-atmosphere place, not just a room.
```

Must include:

```txt
Restaurant
Marina / Yacht Club Atmosphere
Pool Bar
Rooftop Terrace
```

Layout:

```txt
image-led mosaic
not identical cards
subtle overlay text
one text link per item
```

Avoid:

```txt
uniform three-column card grid
too many CTA buttons
repeating the same image in every card
```

Image warning:

```txt
Avoid using images with distracting Migros signage as premium hero/feature images unless cropped carefully.
```

---

## GalleryCollage

Purpose:

```txt
Create emotional proof.
```

Use:

```txt
fewer larger images
asymmetric collage
sunset/marina/room mix
```

Avoid:

```txt
plain 3-column grid
too much empty space
tiny thumbnails
repeated similar sunset images
```

---

## MapPreviewSection

Purpose:

```txt
Create a local Marmaris/coastal identity.
```

This section should eventually use a custom illustrated vector map.

Until a custom map asset exists:

```txt
do not show a broken map placeholder
do not show fake exact location
use a warm location/contact card or hide the map section
```

Allowed map direction:

```txt
minimal vector-style Marmaris/bay/coastline visual
muted teal sea
ivory land
pine hills
terracotta hotel marker
```

Do not embed generic Google Maps unless exact location is confirmed and owner approves.

---

## Rooms Page Rules

Feedback saved for future Rooms page redesign:

```txt
Keep the improved warm palette/font/hero direction.
Avoid making the whole page repeatedly about rooms.
Use guest-facing wording.
Do not use “Tek genel oda deneyimi”.
Unify button styles.
Avoid repeated “Müsaitlik Sor” CTAs.
Keep one public room concept.
Use a room page as trust-building, not internal architecture explanation.
```

Preferred room copy direction:

```txt
Sade ve konforlu odalar
14 odalı butik konaklama
Sakin ve sıcak oda atmosferi
Doğaya ve marina atmosferine yakın bir konaklama
```

---

## Experience Page Rules

Experience pages should inherit the homepage’s warm editorial style.

Each page should use:

```txt
large hero image
short atmospheric intro
one editorial split section
small image strip
one final CTA
```

Do not make all experience pages look like copy-pasted content with only a title changed.

---

## Gallery Page Rules

The gallery should be visual proof, not a database dump.

Use:

```txt
editorial collage
category filter only if polished
large images
subtle captions
```

Avoid:

```txt
generic image grid
repeating similar photos
awkward crops
```

---

## Contact Page Rules

Contact page should feel warm and trustworthy.

Use:

```txt
contact card
safe fallback if details are not confirmed
language that encourages direct contact
future illustrated map area
```

Do not show:

```txt
fake phone
fake WhatsApp
fake email
fake address
fake map
large empty placeholders
```

---

## Forbidden Patterns

Do not create or use these patterns unless explicitly approved:

```txt
generic card grid sections
three identical feature cards
SaaS-style feature blocks
pricing sections
fake testimonials
client logos
shaders
docks
AI chat components
animated gradient backgrounds
heavy parallax
floating glassmorphism widgets
large booking engine UI in Phase 1
fake maps
fake reviews
fake room categories
```

---

## Component Creation Rule

Before creating a new component, Codex must check:

```txt
Can this be built using existing primitives?
Can this be a variant of an existing component?
Is this component specific enough to justify its existence?
Will it be reused?
Does it reduce duplication?
```

If the answer is no, do not create it.

---

## Codex Implementation Rule

When implementing from this system, Codex must:

```txt
Preserve service/data architecture.
Preserve i18n.
Preserve routes.
Preserve Phase 2 compatibility.
Use existing components before creating new ones.
Keep changes scoped to the requested page or component.
Run npm run build.
Report modified files.
```

Codex must not:

```txt
touch unrelated public pages
add external UI libraries
add dependencies
add backend/admin/database logic
invent hotel features
invent contact data
invent room types
create component soup
```

---

## Immediate Fix Priorities

Before further page redesign:

```txt
1. Unify Button variants.
2. Replace header language select with flag-triggered language modal/popover.
3. Remove “Ana Sayfa” from header navigation.
4. Split footer links into two columns/groups.
5. Reduce repeated CTA usage on homepage.
6. Ensure hero focuses on vacation feeling, not rooms.
7. Make homepage section list obey the allowed section whitelist.
```

---

## Final Principle

Every component must answer this question:

```txt
Does this help the visitor feel the place, trust the hotel, or take the next step?
```

If not, remove it or simplify it.
