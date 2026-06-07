# DESIGN_DIRECTION.md

## Purpose

This document defines the visual and UX direction for the **Palmiye Nature Hotel & Yacht Club** website.

The goal is to prevent the site from becoming a generic AI-generated landing page. The design must feel intentional, warm, local, coastal and boutique.

This document should guide future Codex design/refactor tasks.

---

## Core Design Direction

The website should feel like:

```txt
A warm Aegean / Marmaris boutique hotel website with marina, nature, sunset and family-owned hospitality character.
```

Not like:

```txt
a SaaS landing page
a luxury fashion editorial
a generic corporate resort template
a sterile minimalist portfolio
an over-designed art gallery website
a component showcase
```

The hotel is small, real and atmospheric. The website should communicate:

```txt
This is a calm 14-room boutique hotel near the marina, surrounded by nature, with a restaurant, pool bar and rooftop terrace.
```

---

## Design Keywords

Use these words as the visual compass:

```txt
warm
Aegean
coastal
sunset
marina
natural
boutique
simple
human
calm
inviting
local
honest
comfortable
```

Avoid these visual directions:

```txt
cold
corporate
generic
overly luxurious
overly dark
overly minimal
tech startup
SaaS
AI-template
fashion editorial
sterile white-card grid
```

---

## Brand Feeling

The brand feeling should be:

```txt
A small coastal stay where guests can wake up close to nature, spend the day near the marina and end the evening with sunset views.
```

The site should not try to pretend the hotel is a large luxury resort. Its strength is the opposite:

```txt
small scale
real location
marina atmosphere
sunset views
warm rooms
direct communication
local coastal character
```

---

## Reference Direction

The design should take inspiration from the following patterns:

### Take From Warm Boutique Hotel References

Use:

```txt
soft background colors
human-scale layout
editorial but readable sections
warm interior photography
local hospitality feeling
```

### Take From Premium Travel References

Use:

```txt
large atmospheric hero images
generous whitespace
clear visual hierarchy
image-led storytelling
fewer but stronger sections
```

### Take From Map / Coastal References

Use:

```txt
illustrated map background
coastal route / marina context
custom visual asset instead of generic map embed
locality and place identity
```

### Avoid From Overly Elegant Editorial References

Avoid:

```txt
too much black background
too much high-fashion styling
overly delicate typography
tiny unreadable text
art-gallery mood
```

### Avoid From Corporate Resort References

Avoid:

```txt
large chain hotel feeling
heavy booking engine look in Phase 1
aggressive red reservation tabs
too many navigation layers
fake resort claims
```

---

## Visual Strategy

The site must become more image-led and less card-led.

Current problem to avoid:

```txt
white background
generic cards
repeated grids
plain buttons
random dark green blocks
sections that only fill space
```

Target feeling:

```txt
large images
editorial split layouts
warm background surfaces
careful typography
clear conversion points
fewer sections with stronger purpose
custom local detail such as illustrated map
```

---

## Color System

Use a warm coastal palette.

### Main Background

```txt
Warm ivory / soft sand
```

Suggested values:

```txt
#F7F1E7
#F4EBDC
#EFE4D2
```

Use this instead of pure white.

### Primary Dark

```txt
Deep pine / marina green
```

Suggested values:

```txt
#123A32
#183F36
#0F2F2A
```

Use for:

```txt
footer
selected CTA backgrounds
dark editorial sections
small accents
```

Do not use giant dark green blocks without visual purpose.

### Secondary Coastal Tone

```txt
Muted sea teal
```

Suggested values:

```txt
#5F9EA0
#7CA9A3
#8FB9B3
```

Use carefully for:

```txt
small labels
map details
hover states
icon accents
```

### Warm Accent

```txt
Terracotta / clay / sunset
```

Suggested values:

```txt
#B96A4D
#C47A55
#A85C45
```

Use for:

```txt
small highlights
hover underline
active state
map marker
small badges
```

### Neutral Text

```txt
Soft charcoal
```

Suggested values:

```txt
#1F2421
#252A27
#343A36
```

Avoid pure black for large text unless there is a specific reason.

---

## Color Usage Rules

Do:

```txt
Use warm ivory as default page background.
Use deep green as an anchor color.
Use terracotta only as a small accent.
Use muted teal for coastal/map details.
Use image colors to guide section mood.
```

Do not:

```txt
Use pure white everywhere.
Use bright turquoise as a main color.
Use random black buttons.
Use too many accent colors.
Use dark sections just to create contrast.
```

---

## Typography Direction

Typography should feel boutique and readable, not overly elegant.

### Recommended Pairing

Use one display serif and one clean sans-serif.

Possible display serif options:

```txt
Fraunces
Libre Baskerville
Cormorant Garamond
Lora
```

Possible body sans options:

```txt
Inter
Manrope
Source Sans 3
Nunito Sans
```

Preferred direction:

```txt
Headings: warm serif with character
Body: clean sans-serif
Navigation: sans-serif, small and calm
Labels: uppercase with moderate letter spacing
```

### Important Turkish Text Rule

Avoid excessive letter spacing in Turkish words.

Bad:

```txt
M U S A I T L I K  S O R
B U T I K  O T E L
```

This looks broken in Turkish.

Better:

```txt
Müsaitlik Sor
Butik Otel
```

Uppercase micro-labels can use slight letter spacing only for short words:

```txt
MARİNA
ODALAR
KONUM
```

but not for full Turkish phrases.

---

## Typography Rules

Do:

```txt
Use large, calm, readable headings.
Let hero headline be emotional but simple.
Use short paragraphs.
Use line-height generously.
Use serif headings for personality.
```

Do not:

```txt
Use giant type for every section.
Use tiny unreadable editorial text.
Use excessive tracking.
Use generic Inter-only SaaS typography.
Use too many font sizes.
```

---

## Layout Principles

Use fewer, stronger sections.

Each section must have a clear psychological purpose:

```txt
Create desire
Build trust
Explain the stay
Show the atmosphere
Reduce uncertainty
Ask for action
```

If a section does not serve one of these purposes, remove it or merge it.

---

## Homepage Architecture

The homepage should follow this structure:

### 1. Cinematic Hero

Purpose:

```txt
Create desire and establish place.
```

Use:

```txt
large marina / sunset / bay image
short serif headline
brief subtitle
two clear CTAs
```

Avoid:

```txt
too much text
generic hotel slogans
over-dark overlay
button clutter
```

Suggested content direction:

```txt
Doğa, marina ve gün batımı arasında sakin bir butik otel.
```

English:

```txt
A calm boutique stay between nature, marina and sunset.
```

---

### 2. Warm Booking / Contact CTA

Purpose:

```txt
Convert interest into direct contact.
```

Phase 1 should not pretend to have a full booking engine.

Use:

```txt
small premium contact card
WhatsApp availability CTA
short explanation
optional check-in/check-out fields only if they look complete
```

If WhatsApp number is not confirmed, do not show a broken or empty CTA.

Avoid:

```txt
blank white button
disabled-looking CTA
fake reservation engine
empty form fields with no logic
```

---

### 3. Boutique Story Section

Purpose:

```txt
Position the hotel clearly.
```

Explain in one elegant block:

```txt
14 rooms
marina atmosphere
restaurant
pool bar
rooftop terrace
nature
sunset
```

This should feel like a story, not feature cards.

Avoid too many generic cards.

---

### 4. Rooms Editorial Section

Purpose:

```txt
Build trust in the stay.
```

Use:

```txt
one large room image
short room description
3-5 real amenity chips/details
clear reservation/contact CTA
```

Important:

```txt
Only one public room type should be shown.
Do not invent room categories.
```

Avoid:

```txt
room grids with fake room types
pricing cards
suite language
```

---

### 5. Experiences Mosaic

Purpose:

```txt
Show that the hotel is more than just rooms.
```

Use an image-led mosaic for:

```txt
Restaurant
Marina / Yacht Club Atmosphere
Pool Bar
Rooftop Terrace
```

Each experience should have:

```txt
image
title
one short sentence
link
```

Avoid identical cards that look like placeholders.

---

### 6. Local / Map Section

Purpose:

```txt
Give the site a local, custom-designed identity.
```

Use a decorative illustrated/vector-style map of the Marmaris / marina / bay area.

This map should not replace Google Maps entirely, but should act as a custom visual layer.

Use it around:

```txt
Contact page
Location section
Marina page
Homepage location preview
```

Map direction:

```txt
simple vector coastline
bay shape
marina marker
hotel marker
small illustrated road/sea labels
warm ivory background
muted teal sea
deep green land accents
terracotta marker
handmade but clean style
```

Avoid:

```txt
generic Google Maps screenshot
overly detailed GIS map
cartoon tourist map
fake exact location if not confirmed
```

If exact location is not confirmed, use a generic "Marmaris coastal area / marina atmosphere" visual and avoid precise claims.

---

### 7. Gallery / Sunset Section

Purpose:

```txt
Create emotional proof.
```

Use:

```txt
large image collage
sunset images
room images
marina images
pool/terrace if available
```

Avoid:

```txt
small uniform grid only
too many repeated similar images
random image cropping
```

---

### 8. Final CTA / Contact

Purpose:

```txt
Make the next step obvious.
```

Use:

```txt
warm, human CTA
direct contact
availability question
location/contact info if confirmed
```

Avoid:

```txt
fake contact details
giant empty contact cards
map placeholder that looks broken
```

---

## Page-Specific Direction

### Rooms Page

Should feel:

```txt
honest
clean
comfortable
warm
```

Layout:

```txt
one strong room hero image
one room description
amenities/details
room photo strip
reservation/contact CTA
```

Do not show multiple room categories.

Avoid language like:

```txt
Tek genel oda deneyimi
```

This sounds technical/internal. Use guest-facing wording instead:

```txt
Sade ve konforlu odalar
14 odalı butik konaklama
Sakin ve sıcak oda atmosferi
```

---

### Experience Pages

Use one shared template, but make it visually rich.

For each:

```txt
restaurant
marina
pool-bar
rooftop-terrace
```

Use:

```txt
large hero image
short intro
one editorial image/text split
small image strip
CTA
```

Avoid:

```txt
four pages that look copy-pasted with only title changed
too many cards
technical descriptions
```

---

### Gallery Page

Gallery should feel like a visual story.

Use:

```txt
masonry or editorial collage
category filters only if they look polished
large images
captions kept subtle
```

Avoid:

```txt
plain 3-column image grid with no rhythm
too many repeated sunset photos next to each other
```

---

### Contact Page

Contact page should feel warm and trustworthy.

Use:

```txt
contact card
WhatsApp / phone / email only if confirmed
custom illustrated map visual
simple location explanation
final CTA
```

If data is missing:

```txt
Say contact/location details will be confirmed directly with the hotel.
Do not invent details.
```

Avoid:

```txt
large empty blank boxes
generic "map coming soon" block
fake Google Maps embed
```

---

## Image Direction

Images are the strongest asset of this project.

Use:

```txt
drone sunset/bay images for atmosphere
room images for trust
garden/palms for warmth
marina/boats for identity
```

Hero should use:

```txt
wide bay / marina / sunset image
```

Rooms should use:

```txt
clean room images
```

Location/map section should use:

```txt
custom vector map or coastline illustration
```

Avoid using images with distracting signage as hero images unless cropped carefully.

---

## Image Cropping Rules

Do:

```txt
Use object-fit: cover for hero.
Crop around sunset, bay and marina.
Use room images with enough breathing room.
Use consistent aspect ratios within the same section.
```

Do not:

```txt
crop beds awkwardly
use tiny thumbnails for emotional images
show signage as focal point
stretch images
repeat the same image too often on one page
```

---

## Component Strategy

Do not add more components just to make the project look structured.

Good components:

```txt
HeroSection
EditorialSplitSection
ExperienceMosaic
RoomStorySection
GalleryCollage
MapFeatureSection
CTASection
```

Avoid excessive components like:

```txt
FeatureCardGrid
InfoCardGrid
GenericCardsSection
StatsCard
RandomHighlightCard
```

The design should reduce generic card usage.

---

## Conversion Strategy

Every CTA must have a clear reason.

Primary CTA:

```txt
WhatsApp ile Müsaitlik Sor
Book via WhatsApp
```

Secondary CTA:

```txt
Odaları Gör
Galeriye Bak
Konumu Gör
Oteli Keşfet
```

Do not overuse CTAs in every card.

Preferred CTA rhythm:

```txt
hero CTA
rooms CTA
final CTA
```

Experience cards can use subtle text links.

---

## Copy Strategy

Copy should be shorter and warmer.

Do not use internal/technical wording like:

```txt
public room type
one general room experience
future operational unit
Phase 1
```

Guest-facing copy should say:

```txt
14 odalı butik konaklama
sade ve konforlu odalar
marina atmosferine yakın
gün batımıyla tamamlanan sakin bir tatil
```

Use plain Turkish with correct Turkish characters.

Avoid missing Turkish characters:

```txt
dogal
gunes
butik olcek
kacis
```

Use:

```txt
doğal
güneş
butik ölçek
kaçış
```

---

## Animation Direction

Use very little animation.

Allowed:

```txt
subtle fade-in
image hover zoom
soft link underline
gentle button hover
```

Avoid:

```txt
heavy parallax
constant motion
flashy gradients
animated SaaS effects
overly complex transitions
```

This hotel should feel calm, not hyperactive.

---

## Mobile Direction

Mobile should not just stack desktop sections.

Mobile priorities:

```txt
hero image still strong
headline readable
CTA visible early
navigation usable
images not too tiny
no giant empty gaps
gallery still engaging
```

Avoid:

```txt
desktop-sized spacing on mobile
four-card grids squeezed into one column with too much repetition
huge dark blocks
hidden important CTAs
```

---

## Decorative Map Asset Direction

A custom map-style visual should be created later.

Use case:

```txt
Location section
Contact page
Marina page
Possibly homepage location preview
```

Asset style:

```txt
minimal vector illustration
Marmaris bay / coastline inspired
warm ivory land
muted teal sea
deep green nature accents
terracotta hotel marker
thin hand-drawn route lines
small labels
premium but friendly
```

Do not use this as an exact legal/technical map unless coordinates are confirmed.

Suggested AI image prompt:

```txt
Create a minimal vector-style illustrated coastal map inspired by Marmaris, Turkey, showing a calm bay, marina area, coastline, green hills, a small hotel marker, a marina marker, simple road lines and sea shapes. Warm ivory land, muted teal sea, deep pine green nature accents, terracotta location marker. Friendly boutique hotel website style, clean lines, subtle paper texture, not cartoonish, not Google Maps, not too detailed, no exact street names.
```

---

## Do / Do Not Summary

### Do

```txt
Use warm ivory backgrounds.
Use large real images.
Use editorial split layouts.
Use fewer, stronger sections.
Use local/coastal details.
Use custom map illustration.
Use guest-facing warm copy.
Use clean CTAs.
Use serif headings with restraint.
Use data/service architecture already built.
```

### Do Not

```txt
Do not create more generic card grids.
Do not use pure white everywhere.
Do not make everything look like a SaaS landing page.
Do not overuse dark green blocks.
Do not invent hotel features.
Do not invent room types.
Do not show fake contact details.
Do not make the site overly elegant or artsy.
Do not add component libraries just for decoration.
Do not rewrite the entire architecture.
```

---

## Refactor Priority

When improving the current design, prioritize:

```txt
1. Global colors and typography
2. Homepage hero
3. Homepage section architecture
4. Rooms page guest-facing copy and layout
5. Experience mosaic / template
6. Gallery rhythm
7. Contact/location with illustrated map idea
```

Do not start by adding animations or external component libraries.

---

## Codex Design Refactor Rule

When Codex works on design, it must:

```txt
Preserve the existing typed content/service architecture.
Preserve i18n.
Preserve routes.
Preserve Phase 2 compatibility.
Change visual structure and component usage only where needed.
Reduce generic sections rather than adding new ones.
```

Codex should not:

```txt
add new dependencies
add fake data
add backend logic
add admin logic
rewrite all content from scratch
turn the project into a component showcase
```

---

## Final Design Principle

The website should make a visitor feel:

```txt
"I understand this place. It feels real, warm and peaceful. I can imagine staying here, and I know how to contact them."
```

That is more important than looking expensive, trendy or complex.
