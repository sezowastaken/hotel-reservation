---
name: docker-deployment
description: Use this skill when creating, editing, refactoring, or reviewing Dockerfile, docker-compose.yml, environment configuration, VPS deployment, reverse proxy, SSL, PostgreSQL deployment, backups, or CI/CD setup for the Palmiye Nature Hotel & Yacht Club project.
---

# Docker Deployment Skill

## Purpose

Use this skill when working on Docker, Docker Compose, VPS deployment, reverse proxy setup, environment variables, PostgreSQL deployment, backups, monitoring, or CI/CD for **Palmiye Nature Hotel & Yacht Club**.

The project starts as a promotional website, but the deployment must be compatible with the future Phase 2 system:

```txt
reservation logic
PostgreSQL database
admin panel
owner dashboard
site content editing
```

The goal is to keep deployment simple, reproducible, secure, and maintainable.

---

## Core Deployment Principle

Start simple, but do not create a dead-end deployment.

Phase 1:

```txt
Next.js web app
Dockerfile
docker-compose.yml
reverse proxy
SSL
```

Phase 2:

```txt
Next.js full-stack app or separated backend
PostgreSQL
admin panel
reservation system
owner dashboard
backups
monitoring
```

Do not over-engineer Phase 1, but keep the structure ready for Phase 2.

---

## Recommended Production Shape

For Phase 1:

```txt
web
reverse-proxy
```

For Phase 2 if backend stays inside Next.js:

```txt
web
postgres
reverse-proxy
```

For Phase 2 if backend becomes separate later:

```txt
frontend
backend
postgres
reverse-proxy
```

Do not introduce Kubernetes, complex orchestration, or unnecessary cloud services for this scale.

---

## VPS Multi-Project Context

The VPS may host multiple client websites in the future.

Recommended server layout:

```txt
/opt/sites/
  reverse-proxy/
    docker-compose.yml

  palmiye-nature/
    docker-compose.yml
    .env

  client-site-2/
    docker-compose.yml
    .env
```

Rules:

- Each client project should have its own folder.
- Each client project should have its own Docker Compose file.
- Each client project should have its own `.env`.
- Each project should be isolated from other projects.
- Do not mix multiple client websites into the same application.
- Do not make one client website depend on another website’s container.

---

## Dockerfile Rules

Production Dockerfile must:

- Build the Next.js app for production.
- Run production mode, not development mode.
- Avoid hardcoded secrets.
- Avoid copying unnecessary files.
- Respect the project package manager.
- Keep the image reasonably small.
- Be understandable by a junior developer later.

Expected production command:

```txt
npm run build
npm run start
```

or, if using pnpm:

```txt
pnpm build
pnpm start
```

Do not deploy using:

```txt
npm run dev
next dev
```

---

## Package Manager Rule

Use the package manager already chosen by the project.

If the project has:

```txt
package-lock.json → npm
pnpm-lock.yaml → pnpm
yarn.lock → yarn
```

Do not randomly switch package managers.

If no package manager has been chosen yet, prefer:

```txt
npm
```

unless the project explicitly chooses another option.

---

## Docker Compose Rules

Compose files should be simple and readable.

Phase 1 `docker-compose.yml` should define the web app clearly.

Expected ideas:

```txt
services:
  web:
    build: .
    restart: unless-stopped
    env_file:
      - .env
```

Phase 2 can add PostgreSQL:

```txt
services:
  postgres:
    image: postgres:16
    restart: unless-stopped
    volumes:
      - postgres_data:/var/lib/postgresql/data
    env_file:
      - .env

volumes:
  postgres_data:
```

Rules:

- Do not expose PostgreSQL publicly unless explicitly required.
- Do not hardcode production secrets in Compose.
- Use named volumes for persistent data.
- Use `restart: unless-stopped` for production services.
- Avoid unnecessary services.

---

## Environment Variable Rules

Use `.env` for environment-specific values.

Commit:

```txt
.env.example
```

Do not commit:

```txt
.env
.env.production
real credentials
database passwords
auth secrets
API secrets
SMTP passwords
```

Public frontend variables should use:

```txt
NEXT_PUBLIC_
```

Examples:

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_GOOGLE_MAPS_URL
NEXT_PUBLIC_INSTAGRAM_URL
```

Private Phase 2 variables:

```txt
DATABASE_URL
AUTH_SECRET
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
```

Never put private secrets into `NEXT_PUBLIC_` variables.

---

## Reverse Proxy Rules

Use a reverse proxy to route domains to containers.

Recommended reverse proxy options:

```txt
Caddy
Traefik
Nginx Proxy Manager
```

Preferred simple option:

```txt
Caddy
```

because it can manage HTTPS certificates automatically.

Expected routing idea:

```txt
palmiyenature.com
www.palmiyenature.com
  → reverse proxy
  → web container
```

The application container should not manually manage SSL certificates.

---

## Domain and SSL Rules

Production should use HTTPS.

Rules:

- DNS points to the VPS IP.
- Reverse proxy handles SSL.
- App containers run internally.
- Do not expose random app ports publicly unless needed.
- Redirect `www` and non-`www` consistently after domain choice is confirmed.

Do not hardcode final domain names unless they are confirmed.

---

## PostgreSQL Rules for Phase 2

When PostgreSQL is added:

- Use a persistent Docker volume.
- Do not expose port `5432` publicly by default.
- Use environment variables for credentials.
- Add backup strategy before relying on production data.
- Keep migrations reproducible.
- Do not manually edit production DB schema without migration tracking.

Expected database role:

```txt
reservation storage
room calendar
admin users
site content
gallery metadata
owner dashboard data
hotel settings
```

---

## Backup Rules

Phase 1 backup needs:

```txt
source code
.env file
reverse proxy config
uploaded/static media if not in Git
```

Phase 2 backup needs:

```txt
PostgreSQL database
uploaded gallery images
.env files
Docker Compose files
reverse proxy configuration
```

Minimum Phase 2 backup plan:

```txt
daily PostgreSQL dump
weekly full project backup
VPS snapshot before major updates
off-container storage for backups
restore test occasionally
```

Do not deploy a production database without thinking about backups.

---

## Media Upload Rules

Phase 1 images can live in:

```txt
public/images/
```

Phase 2 admin-uploaded images need persistent storage.

Acceptable Phase 2 options:

```txt
local Docker volume
mounted VPS directory
S3-compatible object storage
```

For a small hotel site, local persistent storage is acceptable at first, but backups are mandatory.

---

## CI/CD Rules

Initial manual deployment is acceptable.

Future recommended flow:

```txt
push to main
GitHub Actions runs checks
SSH into VPS
git pull
docker compose up -d --build
```

Before deploying:

```txt
npm run build
typecheck if available
lint if available
Docker build
```

Do not deploy broken builds.

Do not fix production by manually editing files inside a running container.

---

## Deployment Command Discipline

Preferred production update flow:

```txt
git pull
docker compose build
docker compose up -d
docker compose logs -f web
```

or:

```txt
docker compose up -d --build
```

Avoid undocumented one-off server fixes.

If a manual production fix is unavoidable, document it immediately.

---

## Monitoring Rules

Minimum monitoring should include:

```txt
site uptime
container status
disk usage
basic error logs
SSL status
```

Recommended simple monitoring:

```txt
Uptime Kuma
```

For multiple client sites, monitoring becomes part of the maintenance/upkeep service.

---

## Logging Rules

Logs should be accessible through Docker:

```txt
docker compose logs -f web
docker compose logs -f postgres
```

Do not log sensitive data:

```txt
passwords
auth tokens
guest private details
payment details
database credentials
```

In Phase 2, reservation logs should be useful but privacy-safe.

---

## Security Rules

Basic production security expectations:

- No secrets in Git.
- No public database port.
- HTTPS enabled.
- Admin routes protected.
- Strong auth secret.
- Regular VPS updates.
- Least necessary exposed ports.
- Backups protected from public access.
- Do not reveal server internals in public errors.

Do not add security theater or complex tools unless they solve a real need.

---

## What Not To Do

Do not:

```txt
deploy with npm run dev
commit real .env files
hardcode secrets
expose PostgreSQL publicly
add Kubernetes
add Redis unless needed
add unrelated services
mix multiple clients in one app
manually edit production container files
ignore backups after adding PostgreSQL
break existing project deployments on the VPS
```

---

## Phase 1 Deployment Checklist

Before launching the promotional website:

```txt
[ ] Production build passes
[ ] Docker image builds
[ ] docker-compose starts web service
[ ] .env.example exists
[ ] real .env is not committed
[ ] reverse proxy routes domain correctly
[ ] SSL works
[ ] WhatsApp CTA works
[ ] Google Maps link works
[ ] i18n routes work
[ ] mobile layout checked
[ ] no placeholder text remains
[ ] logs are readable
```

---

## Phase 2 Deployment Checklist

Before launching backend/admin functionality:

```txt
[ ] PostgreSQL has persistent volume
[ ] migrations are reproducible
[ ] DATABASE_URL is private
[ ] admin auth works
[ ] admin routes are protected
[ ] database is not publicly exposed
[ ] backup job exists
[ ] restore plan is known
[ ] uploaded media storage is persistent
[ ] owner dashboard does not expose private data publicly
[ ] reservation overlap logic is tested
```

---

## What To Read Before Editing Deployment

Before working on deployment:

1. Read `AGENTS.md`.
2. Read `docs/DEPLOYMENT_PLAN.md`.
3. Read `docs/BACKEND_PLAN.md` if touching PostgreSQL, backend, auth, reservations, or admin.
4. Read `docs/FRONTEND_PLAN.md` if deployment changes affect frontend environment variables or routing.
5. Keep changes minimal and documented.

---

## Review Checklist

Before finishing a Docker/deployment task, check:

```txt
[ ] Production mode is used
[ ] No secrets are hardcoded
[ ] .env.example is updated if needed
[ ] Dockerfile is understandable
[ ] docker-compose.yml is simple and extendable
[ ] PostgreSQL is not publicly exposed
[ ] Persistent data uses volumes
[ ] Reverse proxy compatibility is preserved
[ ] Multi-project VPS hosting is not broken
[ ] No unnecessary services were added
[ ] Deployment steps are documented
```

---

## Final Principle

Deployment should be boring, repeatable and safe.

The goal is not to show off infrastructure complexity. The goal is to reliably host this hotel website now and create a repeatable hosting/deployment pattern for future client websites.
