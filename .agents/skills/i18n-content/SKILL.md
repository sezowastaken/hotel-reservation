---
name: i18n-content
description: Use this skill when adding, editing, refactoring, or reviewing multilingual content, translation keys, locale routing, and i18n-related frontend code for the Palmiye Nature Hotel & Yacht Club website.
---

# i18n Content Skill

## Purpose

Use this skill when working on multilingual content for **Palmiye Nature Hotel & Yacht Club**.

The website must support:

```txt
Phase 1: Turkish and English
Future: German and Russian can be added easily
```

The goal is to keep all user-facing text maintainable, translation-friendly, and compatible with future backend/admin content management.

---

## Core Principle

Do not hardcode user-facing text inside reusable components.

Good:

```tsx
<Button>{t("bookNow")}</Button>
```

Good:

```tsx
<HeroSection data={homePage.hero} />
```

Bad:

```tsx
<Button>Book Now</Button>
<h2>Odalarımız</h2>
<p>A peaceful boutique hotel near the marina...</p>
```

---

## Language Scope

Initial supported locales:

```txt
tr
en
```

Future supported locales:

```txt
de
ru
```

The code structure must not assume that only Turkish and English will ever exist.

Use a locale list/config instead of scattered hardcoded locale checks.

Good:

```ts
export const locales = ["tr", "en"] as const;
export const defaultLocale = "tr";
```

Bad:

```ts
if (lang === "tr") {
  ...
} else {
  ...
}
```

---

## Recommended i18n Structure

Use separate files for short UI translations and long page content.

Recommended structure:

```txt
messages/
  tr.json
  en.json

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

Future:

```txt
messages/
  de.json
  ru.json

content/
  de/
  ru/
```

---

## UI Text vs Page Content

### Use `messages/*.json` for short reusable UI text

Examples:

```txt
Book Now
Contact Us
View Rooms
Gallery
Location
Read More
Call Now
Send Message
Check Availability
```

Example:

```json
{
  "common": {
    "bookNow": "Book Now",
    "contactUs": "Contact Us",
    "viewRooms": "View Rooms",
    "gallery": "Gallery",
    "location": "Location"
  }
}
```

### Use `content/{locale}/*.ts` for longer page-specific content

Examples:

```txt
Hero titles and subtitles
Room descriptions
Experience descriptions
Restaurant copy
Marina copy
Pool bar copy
Rooftop terrace copy
SEO metadata
FAQ entries
```

Good:

```ts
export const homePage = {
  hero: {
    title: "Palmiye Nature Hotel & Yacht Club",
    subtitle: "A peaceful boutique escape by nature, marina and sunset.",
    primaryCtaKey: "common.bookNow"
  }
};
```

---

## Translation Key Naming Rules

Use clear, grouped keys.

Good:

```txt
common.bookNow
common.contactUs
navigation.rooms
navigation.gallery
reservation.checkIn
reservation.checkOut
reservation.guests
footer.followUs
```

Bad:

```txt
button1
text2
homeTitleThing
clickHere
abc
```

Key names should describe meaning, not visual location.

Good:

```txt
reservation.checkAvailability
```

Bad:

```txt
home.hero.buttonText
```

Only use page-specific keys when the text is truly page-specific.

---

## Adding New Translation Keys

When adding a new UI text key:

1. Add the key to `messages/tr.json`.
2. Add the key to `messages/en.json`.
3. Keep the same key path in both files.
4. Do not leave missing translations.
5. Do not use placeholder text like `TODO`, `lorem ipsum`, or `translation missing`.

Example:

```json
// messages/en.json
{
  "common": {
    "bookNow": "Book Now"
  }
}
```

```json
// messages/tr.json
{
  "common": {
    "bookNow": "Rezervasyon Yap"
  }
}
```

---

## Content Accuracy Rules

When translating or writing hotel content, preserve the real facts.

The hotel has:

```txt
14 rooms
one public room type for now
restaurant
marina / yacht club context
pool with pool bar
rooftop / terrace bar
nature and sunset atmosphere
```

Do not translate in a way that invents new features.

Do not claim:

```txt
private beach
spa
all-inclusive
five-star hotel
luxury suites
multiple room types
airport transfer
pet-friendly
direct beachfront
```

unless explicitly confirmed later.

---

## Room Content Rule

Because the hotel has 14 rooms and all are currently considered the same public room type, translations must not create multiple room categories.

Bad:

```txt
Deluxe Sea View Room
Family Suite
King Room
Superior Room
```

Good:

```txt
Rooms
Standard Room
Our Rooms
Comfortable Boutique Rooms
```

The operational backend may later track 14 physical rooms, but the public website should not invent different room types.

---

## Locale Routing Rules

Preferred route format for Phase 1:

```txt
/tr
/en
/tr/rooms
/en/rooms
/tr/gallery
/en/gallery
```

Keep route segment names simple and stable at first.

Do not introduce complex localized route paths unless explicitly requested.

Acceptable later improvement:

```txt
/tr/odalar
/en/rooms
/de/zimmer
/ru/nomera
```

But Phase 1 should prioritize simplicity and speed.

---

## Component Rules

Reusable components should not know which locale they are in unless necessary.

Good:

```tsx
<RoomCard room={room} ctaLabel={t("common.viewDetails")} />
```

Bad:

```tsx
if (locale === "tr") {
  return <button>Detayları Gör</button>;
}
return <button>View Details</button>;
```

Locale logic should stay in:

```txt
page-level files
layout files
i18n utilities
content loaders
translation hooks
```

Not inside every visual component.

---

## Content Loader Pattern

Use helper functions to load locale-specific content.

Example concept:

```ts
export async function getHomePageContent(locale: Locale) {
  if (locale === "tr") return trHomePage;
  return enHomePage;
}
```

Better long-term:

```ts
const contentMap = {
  tr: trHomePage,
  en: enHomePage,
};

export function getHomePageContent(locale: Locale) {
  return contentMap[locale] ?? contentMap.tr;
}
```

This pattern makes adding `de` and `ru` easier later.

---

## SEO and Metadata

SEO metadata must be localized.

Each page should have locale-specific:

```txt
title
description
open graph title
open graph description
image alt text where relevant
```

Example:

```ts
seo: {
  title: "Palmiye Nature Hotel & Yacht Club | Marmaris Boutique Hotel",
  description: "A peaceful boutique hotel near the marina with restaurant, pool bar and rooftop terrace."
}
```

Turkish version should not be a poor literal translation if a more natural Turkish sentence is better.

---

## CTA Translation Rules

CTA text should be short and action-oriented.

Recommended English examples:

```txt
Book via WhatsApp
View Rooms
Explore the Hotel
See Location
Contact Us
Plan Your Stay
```

Recommended Turkish examples:

```txt
WhatsApp ile Rezervasyon
Odaları Gör
Oteli Keşfet
Konumu Gör
İletişime Geç
Konaklamanı Planla
```

Avoid awkward literal translations.

---

## Tone Rules

The brand tone should feel:

```txt
warm
boutique
natural
coastal
calm
clear
premium but not exaggerated
```

Avoid:

```txt
overly corporate language
generic luxury hotel clichés
fake resort wording
unverified claims
overly poetic sentences that reduce clarity
```

Good style:

```txt
A calm boutique stay surrounded by nature, marina views and golden sunsets.
```

Bad style:

```txt
Experience the ultimate luxury paradise with world-class exclusive suites.
```

---

## Admin / Phase 2 Compatibility

In Phase 2, some content may become editable from the admin panel.

Therefore:

- Keep content structured.
- Avoid scattering long copy across components.
- Use data objects that can map to database records later.
- Keep page sections data-driven.
- Do not create translation logic that only works with static local files.

Potential Phase 2 content models:

```txt
site_pages
site_content_blocks
gallery_images
hotel_settings
localized_content
```

Phase 1 content files should be easy to migrate to database-backed content later.

---

## Placeholder Rules

Never leave visible placeholders in production content.

Forbidden examples:

```txt
Lorem ipsum
TODO
Coming soon
Write your caption here
Slide title
Test text
asdasd
```

If final content is missing, use a realistic temporary draft and mark it clearly in internal comments, not in visible UI.

---

## Image Alt Text

Alt text must be localized when practical.

Good English:

```txt
"Sunset view over the marina near Palmiye Nature Hotel"
```

Good Turkish:

```txt
"Palmiye Nature Hotel yakınındaki marina üzerinde gün batımı manzarası"
```

Bad:

```txt
"image1"
"hotel photo"
"IMG_1234"
```

---

## Date and Number Formatting

Use locale-aware formatting for future reservation and dashboard features.

Good:

```ts
new Intl.DateTimeFormat(locale).format(date)
```

Avoid hardcoded date formats when displaying dates to users.

---

## What To Check Before Editing i18n

Before an i18n-related task:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_CONTEXT.md`.
3. Read `docs/FRONTEND_PLAN.md`.
4. Check existing translation keys before adding new ones.
5. Keep Turkish and English files synchronized.
6. Avoid inventing hotel features during translation.

---

## Review Checklist

Before finishing an i18n/content task, check:

```txt
[ ] No reusable component contains hardcoded user-facing text
[ ] New UI keys exist in both tr and en
[ ] Key names are meaningful and grouped
[ ] Long content is stored in locale content files
[ ] Translation does not invent hotel features
[ ] Room content does not invent multiple room types
[ ] CTA text is natural in both languages
[ ] SEO metadata is localized
[ ] No placeholder text remains
[ ] Future de/ru support is not blocked by the structure
```

---

## Final Principle

The multilingual system should make the site easy to maintain, easy to expand, and easy to migrate to backend-managed content later.

Do not solve i18n by scattering Turkish and English strings across JSX files.
