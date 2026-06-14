# .agents/agents.md

## Project

This repository contains the Palmiye Nature Hotel & Yacht Club website.

Palmiye is a small 14-room boutique hotel in Marmaris with:
- a restaurant in front of the hotel
- marina / yacht club atmosphere nearby
- a pool bar area behind the hotel
- a rooftop terrace bar
- warm Aegean / coastal / sunset character

The website is currently Phase 1:
- public promotional website
- i18n support
- frontend prepared for future reservation/admin/backend expansion

Phase 2 will later include:
- PostgreSQL
- reservation logic
- room calendar logic for 14 physical rooms
- admin panel
- owner dashboard
- operational/backend workflows

Do not implement Phase 2 unless explicitly requested.

---

## Required Reading

Before making meaningful changes, read:

```txt
AGENTS.md
docs/PROJECT_CONTEXT.md
docs/FRONTEND_PLAN.md
docs/DESIGN_DIRECTION.md
docs/COMPONENT_SYSTEM.md
```

For deployment tasks also read:

```txt
docs/DEPLOYMENT_PLAN.md
```

For backend/reservation planning also read:

```txt
docs/BACKEND_PLAN.md
```

---

## Main Working Principles

### 1. Scope Control

Never modify unrelated areas.

If the task is about the homepage, do not directly edit:

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

### 2. No Fake Hotel Data

Do not invent:

```txt
phone number
WhatsApp number
email
address
Google Maps link
Instagram link
prices
room categories
private beach
spa
gym
airport transfer
all-inclusive
five-star/luxury claims
reviews/testimonials
```

If data is missing, use safe fallback text.

### 3. Preserve Architecture

Preserve:

```txt
Next.js App Router
TypeScript
i18n routing
typed content/service architecture
Phase 2 compatibility
existing route structure
```

Do not rewrite the project from scratch.

### 4. Avoid AI Slop

The site must not feel like:

```txt
a SaaS landing page
a generic template
a component showcase
a luxury fashion editorial
a sterile white-card grid
```

The site should feel:

```txt
warm
Aegean
coastal
local
boutique
honest
calm
human
Marmaris
```

### 5. Use the Component System

Follow:

```txt
docs/COMPONENT_SYSTEM.md
```

Do not create new component families unless explicitly required.

Avoid:

```txt
generic card grids
random button styles
repeated CTA sections
too many sections
fake booking engines
large empty placeholders
```

---

## Recommended Agent Roles

### Frontend Agent

Responsible for:
- Next.js structure
- React components
- TypeScript safety
- Tailwind/CSS
- responsive behavior
- reusable primitives

Must follow:
- `docs/FRONTEND_PLAN.md`
- `docs/COMPONENT_SYSTEM.md`

### Design QA Agent

Responsible for:
- visual QA through rendered screenshots
- layout issues
- button contrast
- spacing
- mobile/tablet behavior
- gallery/mosaic rhythm
- header/footer visual quality

Must use Playwright screenshots where possible.

Must not rely only on JSX/CSS guesses.

### Copywriting Agent

Responsible for:
- guest-facing Turkish and English copy
- warm boutique hotel tone
- i18n consistency
- no internal/technical wording visible to guests

Must avoid fake claims.

### SEO Agent

Responsible for:
- metadata
- page titles
- descriptions
- Open Graph
- locale-aware SEO
- no fake claims

### Deployment Agent

Responsible for:
- Docker
- Docker Compose
- server deployment
- CI/CD
- Nginx/proxy
- environment variables

Must not leak secrets.

---

## Build / Verification

For frontend changes:

```bash
cd apps/web
npm run build
```

For visual QA:

```bash
cd apps/web
npm run dev
```

Then use Playwright screenshots.

Preferred screenshot outputs:

```txt
apps/web/.visual-qa/desktop-1440x1800.png
apps/web/.visual-qa/tablet-768x1400.png
apps/web/.visual-qa/mobile-390x1200.png
```

---

## Visual QA Rules

Rendered screenshots are the source of truth.

Fail visual QA if:

```txt
button text is unreadable
hero CTA looks disabled
white text appears on pale ivory buttons
bento/mosaic items touch without proper gap
gallery creates huge empty areas
language modal is clipped
header looks like default navbar
footer links are one long column
homepage repeats the same CTA too often
homepage becomes mostly about rooms
mobile layout is just a broken desktop stack
```

---

## Communication Style

When reporting back:

```txt
1. Say what changed.
2. Say which files changed.
3. Say what was verified.
4. Mention remaining risks/issues honestly.
```

Do not give vague design advice. Be concrete.
