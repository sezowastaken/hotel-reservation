# homepage_polish.md

## Goal

Apply a small, safe homepage visual polish pass based on a prior visual QA report.

This workflow is not for redesigning the whole site.

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

Also inspect the latest visual QA screenshots under:

```txt
apps/web/.visual-qa/
```

---

## Scope

Allowed:

```txt
apps/web/app/[locale]/page.tsx
apps/web/components
apps/web/app/globals.css
apps/web/content/tr/home.*
apps/web/content/en/home.*
apps/web/messages/tr.json
apps/web/messages/en.json
```

Only change content files/messages if needed for homepage-visible copy.

Do not directly modify:

```txt
rooms page
restaurant page
marina page
pool-bar page
rooftop-terrace page
gallery page
contact page
backend files
Docker files
database files
```

Shared components may be changed only if required for homepage/header/footer visual consistency.

---

## Fix Priority

Fix only the concrete issues reported by visual QA.

Typical priority order:

```txt
1. unreadable buttons / contrast failures
2. language modal clipping
3. broken mosaic/bento spacing
4. gallery excessive blank space
5. repeated CTA rhythm
6. header/footer small layout issues
```

Do not add new sections.

Do not remove the whole homepage architecture unless explicitly requested.

---

## Button Rules

All homepage buttons must use the shared Button/ButtonLink variants from `COMPONENT_SYSTEM.md`.

Required variants:

```txt
primary
dark
secondary
outline
ghost
text
```

Rules:

```txt
No white text on pale ivory buttons.
No black text on dark green or sea backgrounds.
Hero primary CTA must be visually primary.
Hero secondary CTA must remain readable.
Do not create one-off button classes.
```

---

## Header / Language Rules

If modifying header/language selector:

```txt
No Ana Sayfa/Home nav item.
Brand links to localized homepage.
Language trigger is circular/simple.
Language modal/popover must not be clipped.
Modal must stay inside viewport on desktop and mobile.
Only Türkçe and English are shown unless more locales actually exist.
```

---

## Experiences Mosaic Rules

If modifying the mosaic:

```txt
Keep Restaurant, Marina, Pool Bar, Teras Bar.
Do not add new experience cards.
Every tile should have visible image or intentional consistent fallback.
Keep visible gaps between items.
Avoid overlap.
Avoid image-less dark tiles on tablet/mobile unless all tiles intentionally use the same style.
```

---

## Gallery Rules

If modifying gallery:

```txt
Reduce excessive vertical spacing.
Remove placeholder-looking blank blocks.
Align text and collage intentionally.
On mobile, keep it compact.
If the current collage is too fragile, simplify to a compact editorial grid using existing images.
Do not build a huge masonry system.
```

---

## CTA Rhythm Rules

Homepage CTA rhythm should be:

```txt
Hero CTA group
One compact contact card near top
One final CTA near bottom
```

Avoid repeating:

```txt
Müsaitlik Sor
Konaklamanı Planla
İletişime Geç
```

in every section.

---

## Verification

After changes:

```bash
cd apps/web
npm run build
```

Then capture screenshots:

```txt
apps/web/.visual-qa/after-desktop-1440x1800.png
apps/web/.visual-qa/after-tablet-768x1400.png
apps/web/.visual-qa/after-mobile-390x1200.png
```

If language/menu was modified:

```txt
apps/web/.visual-qa/after-language-desktop-1440x900.png
apps/web/.visual-qa/after-language-mobile-390x700.png
apps/web/.visual-qa/after-menu-mobile-390x700.png
```

---

## Report Format

Return:

```txt
## Homepage Polish Result

### Changed Files
- ...

### Fixes Applied
1. ...
2. ...

### Verification
- npm run build: pass/fail
- screenshots captured: yes/no

### Remaining Visual Issues
- ...

### Notes
Mention anything intentionally not changed because it is out of scope.
```

---

## Hard Rules

Do not modify unrelated page files.

Do not invent hotel claims or contact data.

Do not add dependencies.

Do not add backend/admin/reservation logic.

Do not turn this into a full redesign.

Do not ignore `COMPONENT_SYSTEM.md`.
