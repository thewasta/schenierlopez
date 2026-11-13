# AGENTS.md

Guidance for coding agents working in this repository.

## Project

This is Schenier Lopez's professional portfolio website (`schenierlopez.es`), focused on backend development and API work. It supports both employment opportunities and freelance inquiries.

The site presents expertise in Laravel, Symfony, NestJS, and Express; services include custom applications, RBAC, payment systems, CMS, and enterprise management. Keep portfolio claims factual; do not invent employment, outcomes, project counts, or other unverified credentials.

## Technology and commands

- Astro with TypeScript strict mode; static output is generated in `dist/`.
- Tailwind CSS for styling and GSAP for animation.
- Use `pnpm` for package management.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm astro -- --help
```

## Repository structure

- `src/pages/` contains file-based routes.
- `src/components/` is the standard location for reusable components.
- `public/` contains static assets.
- `astro.config.mjs` configures Astro; `tsconfig.json` extends Astro's strict TypeScript configuration.

## Design work

For every design-related task—including creating, changing, critiquing, or refining UI—load and follow the project's `impeccable` skill (`.opencode/skills/impeccable/SKILL.md`) before analysis or edits. Keep design decisions in that workflow; do not reproduce or maintain a separate design specification in this file. `DESIGN.md` has intentionally been removed.

## Coolify MCP: read-only access

Use the Coolify MCP only to inspect deployments and configuration. Start with `coolify_help` when needed; use read-only tools such as `list_deployments`, `get_deployment` (including its capped log summary when authorized), `get_application`, and `list_env_keys` (names only).

Never use Coolify MCP, CLI, API, or delegated work to perform mutations. In particular, do not deploy, restart, stop, cancel, or roll back deployments; change application settings or environment variables; retrieve environment-variable values; or create, update, or delete resources. If a mutation is needed, report the finding and leave the action to the user. Treat deployment logs as potentially sensitive and do not expose secrets.
