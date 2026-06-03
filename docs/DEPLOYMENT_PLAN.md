# DEPLOYMENT_PLAN.md

## Purpose

This document defines the deployment strategy for **Palmiye Nature Hotel & Yacht Club**.

The project starts as a fast promotional hotel website, but the deployment structure must be compatible with the future Phase 2 system: backend logic, PostgreSQL, reservation management, admin panel, and owner dashboard.

The deployment should stay simple, Docker-based, reproducible, and easy to maintain on a VPS.

---

## Deployment Goals

The deployment setup must support:

- A production-ready Next.js frontend.
- Dockerized development and production workflows.
- Docker Compose-based service orchestration.
- Easy future expansion for PostgreSQL and backend services.
- Environment-variable based configuration.
- Reverse proxy and SSL support on a VPS.
- Clean separation between projects when hosting multiple client websites.
- Simple backup and maintenance strategy.

This project should not depend on manual server-side hacks or undocumented production steps.

---

## Phase 1 Deployment Scope

Phase 1 is the promotional website.

Expected services:

```txt
web
reverse-proxy
```

The `web` service runs the Next.js application.

The reverse proxy may be handled globally on the VPS, especially if multiple websites are hosted on the same server.

Recommended reverse proxy options:

```txt
Caddy
Traefik
Nginx Proxy Manager
```

For simplicity and automatic SSL, **Caddy** is a strong default choice.

---

## Phase 2 Deployment Scope

Phase 2 adds backend and database functionality.

Possible service structure:

```txt
web
postgres
reverse-proxy
```

If the backend remains inside the Next.js application, the `web` container handles both frontend and backend routes.

If the backend grows into a separate service later, the structure can become:

```txt
frontend
backend
postgres
reverse-proxy
```

Do not over-engineer Phase 1 for a backend that does not exist yet, but keep the Docker Compose layout ready for future service expansion.

---

## Recommended VPS Strategy

The owner’s long-term goal is to host multiple client websites on a VPS.

Recommended server approach:

```txt
VPS
 ├─ reverse-proxy
 ├─ palmiye-nature
 │   ├─ web
 │   └─ postgres later
 ├─ client-site-2
 │   └─ web
 └─ client-site-3
     └─ web
```

Each project should have its own folder and Docker Compose file.

Example server folder layout:

```txt
/opt/sites/
  palmiye-nature/
    docker-compose.yml
    .env
  another-client/
    docker-compose.yml
    .env
  reverse-proxy/
    docker-compose.yml
```

Each project should be isolated by Docker network and environment variables.

---

## Dockerfile Expectations

The production Dockerfile should:

- Use a stable Node.js image.
- Install dependencies in a reproducible way.
- Build the Next.js application.
- Run the production server, not the development server.
- Avoid copying unnecessary files.
- Avoid hardcoded secrets.
- Keep the image reasonably small.

Expected behavior:

```txt
npm install / npm ci
npm run build
npm run start
```

If the project uses `pnpm`, use `pnpm install --frozen-lockfile` and document it clearly in README.

---

## Docker Compose Expectations

The Compose setup should:

- Define the main web service.
- Load environment variables from `.env`.
- Expose the app internally to the reverse proxy.
- Avoid exposing unnecessary ports publicly.
- Be easy to extend with PostgreSQL later.

Phase 1 example service concept:

```txt
services:
  web:
    build: .
    env_file:
      - .env
    restart: unless-stopped
```

Phase 2 may add:

```txt
services:
  postgres:
    image: postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
    env_file:
      - .env
    restart: unless-stopped
```

The exact Compose file can evolve, but the structure must stay understandable.

---

## Environment Variables

Configuration must come from environment variables.

Likely Phase 1 variables:

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_GOOGLE_MAPS_URL
NEXT_PUBLIC_INSTAGRAM_URL
```

Likely Phase 2 variables:

```txt
DATABASE_URL
AUTH_SECRET
ADMIN_EMAIL
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
```

Rules:

- Never hardcode secrets.
- Never commit real `.env` files.
- Commit `.env.example`.
- Keep public variables clearly prefixed with `NEXT_PUBLIC_`.
- Keep private backend variables server-only.

---

## SSL and Domain Routing

SSL should be handled by the reverse proxy.

Recommended setup:

```txt
Domain DNS
  → VPS IP
  → reverse proxy
  → project web container
```

The application itself should not manually manage SSL certificates.

For multiple websites, each domain should route to its own container through the reverse proxy.

Example target domains:

```txt
palmiyenature.com
www.palmiyenature.com
```

Final domain names should be configured after the owner confirms them.

---

## CI/CD Direction

Initial deployment can be manual, but the structure should be compatible with CI/CD.

Recommended future flow:

```txt
GitHub push to main
  → GitHub Actions
  → SSH into VPS
  → git pull
  → docker compose up -d --build
```

Rules:

- Deploy from a clean branch.
- Build must pass before deployment.
- Do not deploy broken TypeScript or failing builds.
- Keep deployment commands documented in README or this file.
- Do not run random manual fixes directly inside containers.

---

## Backup Strategy

Phase 1 backup needs are simple:

```txt
source code
uploaded images if any
environment file
reverse proxy configuration
```

Phase 2 backup needs are more serious:

```txt
PostgreSQL database
uploaded gallery images
environment files
Docker Compose files
reverse proxy configuration
```

Minimum Phase 2 backup plan:

- Daily PostgreSQL dump.
- Weekly full project backup.
- VPS snapshot before major updates.
- Store backups outside the container volume when possible.
- Test restore occasionally.

---

## PostgreSQL Persistence

When PostgreSQL is added, database data must be stored in Docker volumes or mounted persistent directories.

Example concept:

```txt
volumes:
  postgres_data:
```

Database containers must not be treated as disposable unless there is a reliable backup and restore process.

---

## Image and Media Storage

Phase 1 can use static images in the repository:

```txt
public/images/
```

Phase 2 admin panel may allow gallery uploads.

At that point, media storage options should be evaluated:

```txt
Option 1: local persistent volume on VPS
Option 2: S3-compatible object storage
Option 3: external media/CDN service
```

For a small hotel site, local persistent volume is acceptable at first, but backups become mandatory.

---

## Monitoring

Minimum monitoring:

```txt
Uptime monitoring
Disk usage checks
Container restart checks
Basic error logs
```

Recommended tool:

```txt
Uptime Kuma
```

Owner/client does not need access to server internals, but the developer should receive alerts when the site is down.

---

## Logs

Application logs should be readable through Docker:

```txt
docker compose logs -f web
```

Phase 2 backend logs should include useful operational errors but must not expose:

- Passwords
- Auth tokens
- Payment data
- Full sensitive guest details

---

## Multi-Project Hosting Rules

Because the VPS may host multiple client websites:

- Each client project must have its own folder.
- Each project must have its own Compose file.
- Each project should have its own environment file.
- Domains must be routed explicitly through the reverse proxy.
- One project must not depend on another project’s container.
- Avoid global changes that can break all hosted sites.

This keeps hosting maintainable and creates a clean basis for recurring maintenance revenue.

---

## Deployment Workflow Checklist

Before production deployment:

```txt
[ ] npm run build passes
[ ] TypeScript has no blocking errors
[ ] No placeholder text remains
[ ] No broken links
[ ] WhatsApp CTA works
[ ] Google Maps link works
[ ] i18n routes work
[ ] Mobile layout is checked
[ ] Images are optimized enough for production
[ ] .env.example is updated
[ ] Docker build succeeds
[ ] Docker Compose starts successfully
[ ] Reverse proxy route works
[ ] SSL certificate is active
```

---

## What Not To Do

Do not:

- Deploy with `npm run dev`.
- Hardcode secrets in source code.
- Put real `.env` files into Git.
- Add PostgreSQL before the backend actually needs it.
- Add Kubernetes or complex orchestration for this scale.
- Manually edit production container files.
- Build a deployment process that only works on one developer’s machine.
- Mix multiple client websites into the same app/container.
- Expose database ports publicly unless there is a strong reason.

---

## Final Direction

The deployment should start simple:

```txt
Next.js app
Dockerfile
docker-compose.yml
reverse proxy
SSL
```

Then grow naturally into:

```txt
Next.js full-stack app
PostgreSQL
admin panel
reservation system
owner dashboard
backup and monitoring
```

The goal is not only to deploy this hotel website, but also to create a repeatable deployment pattern for future client websites.
