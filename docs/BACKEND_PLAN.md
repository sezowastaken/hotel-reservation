# BACKEND_PLAN.md

## Purpose

This document defines the Phase 2 backend plan for **Palmiye Nature Hotel & Yacht Club**.

Phase 1 is a fast promotional website, but the frontend must be designed with this Phase 2 backend in mind so that reservation, admin, and dashboard features can be added later without rebuilding the project from scratch.

The backend should support a small but real hotel operation: 14 physical rooms, reservation tracking, room calendars, admin-managed website content, and an owner dashboard.

---

## Phase 2 Goal

Phase 2 turns the promotional website into a functional hotel management and reservation platform.

Main goals:

- Manage the hotel’s 14 physical rooms.
- Track room availability through room-based calendars.
- Receive and manage reservation requests.
- Allow admins to confirm, cancel, edit, and manually create reservations.
- Allow authorized users to edit public website content.
- Allow gallery/image management from an admin panel.
- Provide an owner dashboard with useful hotel KPIs.
- Keep the system simple enough for a small boutique hotel.

Phase 2 should not become a full enterprise hotel PMS. It should be practical, maintainable, and focused on the actual needs of this hotel.

---

## Technology Stack

Preferred backend stack for Phase 2:

- **Database:** PostgreSQL
- **ORM:** Prisma or Drizzle
- **Backend runtime:** Next.js API routes / server actions at first
- **Authentication:** Role-based admin authentication
- **Deployment:** Docker Compose

The first Phase 2 implementation can be a full-stack Next.js application using PostgreSQL. If backend complexity grows later, the backend should be modular enough to be extracted into a separate API service.

Do not over-engineer the first backend version.

---

## Core Backend Modules

### 1. Reservation Module

Responsible for:

- Creating reservation requests from the public website.
- Listing reservations in the admin panel.
- Updating reservation status.
- Assigning reservations to physical rooms.
- Preventing overlapping confirmed reservations.
- Supporting manual reservations created by admin users.

### 2. Room Calendar Module

Responsible for:

- Tracking the availability of each of the 14 physical rooms.
- Showing room occupancy by date.
- Blocking rooms for maintenance or private use.
- Supporting date-range queries for availability checks.

### 3. Authentication and User Module

Responsible for:

- Admin login.
- Session handling.
- Role-based access control.
- Owner/admin/staff permissions.

### 4. Content Management Module

Responsible for:

- Editing public website copy.
- Updating hotel descriptions.
- Updating restaurant, marina, pool bar, rooftop terrace, and room page content.
- Managing CTA text and contact information.

### 5. Gallery Management Module

Responsible for:

- Uploading images.
- Editing image metadata.
- Assigning images to categories.
- Reordering images.
- Marking selected images as hero or featured images.

### 6. Owner Dashboard Module

Responsible for:

- Showing high-level hotel KPIs.
- Displaying current and upcoming operational data.
- Helping the owner understand occupancy and reservation performance.

### 7. Settings Module

Responsible for:

- Hotel phone number.
- WhatsApp number.
- Email address.
- Social media links.
- Address and map information.
- Supported languages.
- Site-wide configuration.

---

## Room and Reservation Model

The hotel has **14 physical rooms**.

All rooms are currently considered the same public room type. The backend must not invent multiple public room categories unless the owner confirms them later.

Correct public-facing model:

- Rooms / Standard Room
- Same room experience presented publicly

Correct operational model:

- 14 physical rooms tracked internally
- Each physical room has its own calendar

Example physical room structure:

- Room 101
- Room 102
- Room 103
- ...
- Room 114

The frontend may show one general room page, but the backend must track each physical room separately for availability and reservations.

---

## Suggested Database Entities

The exact schema can evolve during implementation, but the initial backend should be based on these entities.

### users

Represents admin-side users.

Fields may include:

- id
- name
- email
- password_hash
- role
- is_active
- created_at
- updated_at

### rooms

Represents the 14 physical rooms.

Fields may include:

- id
- room_number
- display_name
- status
- notes
- is_active
- created_at
- updated_at

Possible room statuses:

- active
- inactive
- maintenance

### reservations

Represents reservation requests and confirmed reservations.

Fields may include:

- id
- reservation_code
- guest_name
- guest_phone
- guest_email
- check_in
- check_out
- guest_count
- room_id
- status
- source
- note
- internal_note
- estimated_total_price
- created_at
- updated_at

Possible reservation statuses:

- pending
- confirmed
- cancelled
- completed
- no_show

Possible reservation sources:

- website
- whatsapp
- phone
- walk_in
- agency
- manual_admin

### room_calendar_blocks

Represents non-reservation blocks on a room calendar.

Use this for maintenance, private use, temporary closure, or owner blocks.

Fields may include:

- id
- room_id
- start_date
- end_date
- reason
- note
- created_by
- created_at
- updated_at

### site_content

Represents editable website content.

Fields may include:

- id
- locale
- key
- value
- content_type
- updated_by
- created_at
- updated_at

Example keys:

- home.hero.title
- home.hero.subtitle
- rooms.description
- restaurant.description
- marina.description
- poolBar.description
- rooftop.description
- contact.whatsappLabel

### gallery_images

Represents images used on the public website.

Fields may include:

- id
- url
- alt_text
- locale_alt_text
- category
- sort_order
- is_featured
- is_hero_candidate
- created_at
- updated_at

Possible categories:

- hero
- rooms
- nature
- marina
- restaurant
- pool
- rooftop
- exterior

### hotel_settings

Represents site-wide editable settings.

Fields may include:

- id
- key
- value
- value_type
- updated_at

Example settings:

- hotel.name
- hotel.phone
- hotel.whatsapp
- hotel.email
- hotel.instagram
- hotel.address
- hotel.mapUrl

### audit_logs

Optional but useful for admin accountability.

Fields may include:

- id
- user_id
- action
- entity_type
- entity_id
- metadata
- created_at

---

## Reservation Logic

The hotel has a small number of rooms, so the reservation logic can be simple and reliable.

Each confirmed reservation should belong to one physical room.

A room is unavailable if an existing confirmed reservation overlaps with the requested date range.

Overlap rule:

```text
new_check_in < existing_check_out
AND
new_check_out > existing_check_in
```

This rule must be applied when:

- Checking public availability.
- Confirming a pending reservation.
- Manually creating a reservation from the admin panel.
- Changing a reservation’s assigned room.
- Updating check-in or check-out dates.

The application should prevent overlapping confirmed reservations for the same physical room. This should be enforced in application logic and, if practical, also at the PostgreSQL constraint level.

---

## Reservation Flow

### Public user flow

1. Visitor selects check-in date, check-out date, and guest count.
2. System checks whether at least one room is available.
3. Visitor submits contact information.
4. Reservation is created as `pending`.
5. Admin reviews the request.
6. Admin confirms or cancels the request.

### Admin flow

1. Admin views pending reservations.
2. Admin sees available rooms for the selected dates.
3. Admin assigns a physical room.
4. Admin confirms the reservation.
5. The selected room becomes unavailable for that date range.

### Manual reservation flow

Admin can manually create a reservation from phone, WhatsApp, walk-in, or agency source.

Manual reservations should use the same overlap validation rules.

---

## Authentication and Roles

Phase 2 should include admin-side authentication.

Customer accounts are not required in Phase 2. Guests should be able to submit reservation requests without creating an account.

Recommended roles:

### owner

Can access everything.

Permissions:

- View owner dashboard.
- Manage reservations.
- Manage rooms.
- Manage content.
- Manage gallery.
- Manage users.
- Manage settings.
- View KPIs and financial summaries.

### admin

Can manage day-to-day website and reservation operations.

Permissions:

- Manage reservations.
- Manage rooms.
- Manage content.
- Manage gallery.
- Manage hotel settings.

### staff

Limited operational access.

Permissions:

- View reservations.
- View room calendar.
- Update limited reservation statuses.
- View check-ins and check-outs.

Do not add customer membership in Phase 2 unless explicitly requested later.

---

## Admin Panel Responsibilities

The admin panel should support these areas.

### Reservation Management

- View all reservations.
- Filter by status and date.
- View pending requests.
- Confirm reservations.
- Cancel reservations.
- Assign/change room.
- Add internal notes.
- Create manual reservations.

### Room Management

- View all 14 physical rooms.
- Edit room number/display name.
- Mark room as active/inactive.
- Mark room as under maintenance.
- Add internal notes.

### Calendar Management

- View occupancy by date.
- View occupancy by room.
- Block a room for a date range.
- Remove manual calendar blocks.

### Content Management

- Edit home page copy.
- Edit room page copy.
- Edit restaurant page copy.
- Edit marina/yacht club page copy.
- Edit pool bar page copy.
- Edit rooftop terrace page copy.
- Edit contact page details.
- Edit CTA labels.

### Gallery Management

- Upload images.
- Delete images.
- Categorize images.
- Reorder images.
- Select featured images.
- Edit alt text.

### Settings Management

- Phone number.
- WhatsApp number.
- Email address.
- Instagram link.
- Address.
- Map link.
- Supported language settings.

---

## Owner Dashboard KPIs

The owner dashboard should be simple and useful.

Suggested KPIs:

### Today

- Occupied rooms
- Available rooms
- Check-ins today
- Check-outs today
- Pending reservations

### This Week

- Occupancy rate
- Confirmed reservations
- Cancelled reservations
- Upcoming check-ins
- Upcoming check-outs

### This Month

- Occupancy rate
- Total confirmed reservations
- Estimated revenue
- Cancellation count
- Most occupied date ranges

### Room Performance

- Occupancy per room
- Maintenance blocks
- Available room count by date

Estimated revenue can be simple in the first version. Full accounting is out of scope.

---

## API Structure

Exact API design may change, but the structure should remain modular.

### Auth

```text
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Public availability and reservation

```text
GET  /api/availability
POST /api/reservations/request
```

### Admin reservations

```text
GET    /api/admin/reservations
GET    /api/admin/reservations/:id
POST   /api/admin/reservations
PATCH  /api/admin/reservations/:id
DELETE /api/admin/reservations/:id
```

### Rooms

```text
GET   /api/admin/rooms
GET   /api/admin/rooms/:id
PATCH /api/admin/rooms/:id
GET   /api/admin/rooms/:id/calendar
```

### Calendar blocks

```text
POST   /api/admin/calendar-blocks
PATCH  /api/admin/calendar-blocks/:id
DELETE /api/admin/calendar-blocks/:id
```

### Content

```text
GET   /api/content
GET   /api/content/:locale
PATCH /api/admin/content/:key
```

### Gallery

```text
GET    /api/gallery
GET    /api/admin/gallery
POST   /api/admin/gallery
PATCH  /api/admin/gallery/:id
DELETE /api/admin/gallery/:id
```

### Dashboard

```text
GET /api/admin/dashboard/overview
GET /api/admin/dashboard/occupancy
GET /api/admin/dashboard/revenue
```

### Settings

```text
GET   /api/settings
PATCH /api/admin/settings/:key
```

---

## Frontend Compatibility Rules

Phase 1 frontend must be written as if the content may later come from an API.

Rules:

- Components must receive data through props.
- Components must not directly depend on static content files.
- Page-level files or service functions may load static content in Phase 1.
- Use a service layer such as `getRooms()`, `getGalleryImages()`, `getExperiences()`, and `getSiteSettings()`.
- In Phase 1, these functions may return static local content.
- In Phase 2, these functions can be changed to fetch from API/database.
- Public room UI must not assume multiple room types.
- Reservation UI should be designed so its submit action can change from WhatsApp redirect to backend request.

Correct approach:

```text
Page -> service function -> data -> section component -> UI component
```

Avoid:

```text
Component -> imports static hotel content directly
```

---

## Docker and Deployment Expectations

Phase 2 should remain Docker-friendly.

Initial Phase 2 setup can be:

```text
web
postgres
reverse-proxy
```

If a separate backend is introduced later:

```text
frontend
backend
postgres
reverse-proxy
```

Deployment rules:

- PostgreSQL must run as a separate service.
- Secrets must use environment variables.
- Do not hardcode database credentials.
- Database data must use a persistent Docker volume.
- The app should be deployable through Docker Compose.
- The system should be ready for VPS hosting.

---

## Out of Scope for Phase 2

Do not implement these unless explicitly requested later:

- Online payment
- Credit card processing
- Booking.com integration
- Expedia integration
- Channel manager sync
- Customer accounts
- Loyalty program
- Housekeeping mobile app
- Advanced accounting
- Multi-property management
- Complex PMS features

These can be considered Phase 3 or later.

---

## Phase 2 Summary

Phase 2 should deliver:

- PostgreSQL-backed backend
- 14 physical room records
- Per-room calendar logic
- Reservation request and confirmation flow
- Admin authentication
- Role-based access control
- Admin panel for reservations, rooms, content, gallery, and settings
- Owner dashboard with useful KPIs
- Docker Compose-compatible deployment

The system should stay small, modular, and realistic for a 14-room boutique hotel.
