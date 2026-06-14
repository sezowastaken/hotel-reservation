# visual_qa.md

## Goal

Run a visual QA pass for the Palmiye Nature Hotel & Yacht Club website using rendered screenshots as the source of truth.

This workflow is read-only unless the user explicitly asks for fixes.

---

## Required Reading

Read first:

```txt
AGENTS.md
.agents/agents.md
docs/PROJECT_CONTEXT.md
docs/DESIGN_DIRECTION.md
docs/COMPONENT_SYSTEM.md
```

---

## Scope

Default target:

```txt
http://localhost:3000/tr
```

Do not modify files.

Do not rely only on JSX/CSS/source code.

Use rendered browser screenshots as the source of truth.

---

## Setup

Make sure the dev server is running:

```bash
cd apps/web
npm run dev
```

If the server is already running, do not start a duplicate server unnecessarily.

---

## Screenshot Requirements

Use Playwright to capture:

```txt
apps/web/.visual-qa/desktop-1440x1800.png
apps/web/.visual-qa/tablet-768x1400.png
apps/web/.visual-qa/mobile-390x1200.png
```

Recommended viewport sizes:

```txt
desktop: 1440x1800
tablet: 768x1400
mobile: 390x1200
```

If inspecting overlays:

```txt
apps/web/.visual-qa/language-desktop-1440x900.png
apps/web/.visual-qa/language-mobile-390x700.png
apps/web/.visual-qa/menu-mobile-390x700.png
```

---

## What To Check

### 1. Header

Check:

```txt
brand links to homepage
no Ana Sayfa/Home nav item
navigation is readable
language button is not a native select
mobile menu is readable
header does not feel like a default navbar
```

### 2. Hero

Check:

```txt
hero image is strong
headline is readable
CTA buttons are readable
primary CTA is visually primary
secondary CTA is visually secondary
no white text on ivory/pale buttons
hero focuses on vacation feeling, not only rooms
```

### 3. CTA Rhythm

Check:

```txt
hero has max two CTAs
homepage does not repeat Müsaitlik Sor everywhere
compact contact card is not too large
final CTA is visually distinct
```

### 4. Boutique Story

Check:

```txt
section feels editorial
not just a generic card grid
mentions hotel identity without internal wording
spacing is balanced
```

### 5. Rooms Snapshot

Check:

```txt
homepage does not become a rooms page
one room image is enough
no fake room categories
copy is guest-facing
```

### 6. Experiences Mosaic

Check:

```txt
all items have visible images or intentional fallback
items have proper gaps
no overlap
no image-less dark blocks unless intentionally designed
restaurant image does not over-emphasize distracting signage
```

### 7. Gallery / Collage

Check:

```txt
no huge empty beige areas
no blank placeholder blocks
text and images align intentionally
mobile version is not excessively long
collage feels curated, not broken
```

### 8. Footer

Check:

```txt
footer links are grouped
not one long list
text is readable
no fake contact data
mobile stacking is clean
```

---

## Report Format

Return:

```txt
## Visual QA Result

### Screenshots Captured
- desktop path
- tablet path
- mobile path

### Concrete Defects
1. ...
2. ...
3. ...

### Component System Violations
1. ...
2. ...

### Smallest Safe Fix List
1. ...
2. ...
3. ...

### Do Not Fix Yet
List any lower-priority items that should wait.

### Blockers
Mention if browser/screenshot capture failed.
```

---

## Rules

Do not edit files.

Do not run broad refactors.

Do not invent content.

Do not suggest adding dependencies unless visual QA is blocked.

Do not suggest redesigning the whole site.

Be concrete and practical.
