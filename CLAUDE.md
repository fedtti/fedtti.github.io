# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Tasks

| Task | Command | Notes |
|------|---------|-------|
| **Install dependencies** | `npm install` | Uses `npm@11.11.0` as specified in `package.json`. |
| **Build for production** | `npm run build` | Equivalent to `ng build --prod`. Produces output in `dist/`. |
| **Start development server** | `npm run start` | Equivalent to `ng serve`. Opens `http://localhost:4200`. |
| **Deploy to GitHub Pages** | `npm run deploy` | Uses `angular-cli-ghpages` with settings from `angular.json`. |
| **Run unit tests** | `npm test` | Runs `ng test` with Karma. No spec files yet, but command is available. |
| **Run a single test file** | `npm test -- --testNamePattern=<pattern>` | Replace `<pattern>` with a regex or filename to limit test execution. |
| **Lint** | `ng lint` | Angular CLI linting; no explicit lint script but available through CLI. |

## High‑Level Architecture

- **Root Module (`app.module.ts`)**: Declares all components, imports `BrowserModule`, `AppRoutingModule`, and Angular core modules. The main layout is defined in `app.component.ts`, which embeds the header, footer, and router outlet.
- **Routing**: Defined in `app.routes.ts`. Only one route (`''`) mapped to `HomeComponent`. No lazy loading.
- **HomeComponent** (`src/app/core/pages/home/home.ts`): Composes the hero, about, and timeline components and handles scroll‑based navigation highlighting. Uses `ProfileService` to supply name, email, role.
- **Services**:
  * `ProfileService` provides static profile data via an Angular `Signal`.
  * `GravatarService` generates a gravatar URL using `crypto‑js` SHA256.
  * `ThemeService` manages theme state (`system`, `light`, `dark`), persists it in `localStorage`, and applies it via `document.documentElement.dataset['theme']`.
- **Theme UI**: `HeaderComponent` hosts `ThemeComponent`, which renders a button to toggle theme. The button displays a sun/moon/half‑stroke icon based on current theme.
- **Styling**: Global SCSS in `src/styles.scss`. Component styles live in corresponding `.scss` files.
- **Static Assets**: Served from `public/` directory (e.g., `curriculum‑vitae.pdf`, favicons). Configured in `angular.json` under `assets`.
- **Deployment**: `ng deploy` uses `angular-cli-ghpages` with GitHub Pages configuration set in `angular.json` (name, email, cname).

## Key Files & Their Roles

- `src/app/app.routes.ts` – Route definitions.
- `src/app/core/pages/home/home.ts` – Main page logic.
- `src/app/shared/services/*` – Shared business logic.
- `src/app/core/layouts/*` – Reusable layout components.
- `angular.json` – Build, serve, test, deploy configurations.
- `package.json` – Scripts and dependencies.

## Additional Notes

- No custom GitHub Actions or CI pipelines are present.
- No lint configuration file; linting relies on Angular CLI defaults.
- No unit tests yet; tests can be added under `src/**/__tests__` or using Vitest.
- The repository uses Angular 21, which is the latest stable Angular version.
