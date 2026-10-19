# Portfolio App

Frontend developer portfolio built with React, TypeScript, and Vite. Showcases commercial and pet projects, skills, and contact info.

## Stack

- React 18 + React Router 6
- TypeScript
- Vite (`@vitejs/plugin-react-swc`)
- Plain CSS with CSS custom properties (light/dark theme)
- ESLint + Prettier + Stylelint
- Vitest + Testing Library

See [`.claude/rules/PROJECT_STACK.md`](.claude/rules/PROJECT_STACK.md) and [`.claude/rules/PROJECT_ARCHITECTURE.md`](.claude/rules/PROJECT_ARCHITECTURE.md) for the full architecture rationale.

## Getting started

```bash
yarn install
yarn dev
```

The dev server runs at `http://localhost:5173` by default.

## Scripts

| Script            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `yarn dev`        | Start the Vite dev server                        |
| `yarn build`      | Type-check and build for production into `dist/` |
| `yarn preview`    | Preview the production build locally             |
| `yarn lint`       | Run ESLint                                       |
| `yarn lint:fix`   | Run ESLint with autofix                          |
| `yarn format`     | Run Prettier over `src/`                         |
| `yarn test`       | Run the Vitest suite once                        |
| `yarn test:watch` | Run Vitest in watch mode                         |
| `yarn deploy`     | Build and publish `dist/` to GitHub Pages        |

## Project content

Project metadata (title, screenshots, skills, links) lives in [`src/data/projectList.ts`](src/data/projectList.ts), typed against [`src/types/project.ts`](src/types/project.ts). To add a new project, add an entry there — no other file needs to change.

- `featured: true` controls which projects appear in the "Featured projects" section on the home page.
- `role`, `summary`, and `year` are optional — when present they render on the project detail page and (for `summary`) on the card; when absent they're simply omitted.

## Deployment

The app deploys to GitHub Pages via [`gh-pages`](https://www.npmjs.com/package/gh-pages):

```bash
yarn deploy
```

This runs `predeploy` (`yarn build`) and publishes `dist/` to the `gh-pages` branch. Two config points make this work together and should stay in sync if the repo is ever renamed or moved:

- `vite.config.ts` → `base: '/portfolio-app/'` (asset paths work on direct project links)
- `package.json` → `"homepage": "/portfolio-app/"` and `src/app/App.tsx` → `basename={import.meta.env.PROD ? '/portfolio-app' : undefined}`

The GitHub Actions workflow also copies `index.html` to `404.html` so a direct project URL renders the app on GitHub Pages.

## Testing

Smoke tests cover route rendering (`src/app/App.test.tsx`), the projects list (`src/pages/projects/ProjectsPage.test.tsx`), and the project detail page including an unknown-id case (`src/pages/project/ProjectPage.test.tsx`). `jsdom` doesn't implement `matchMedia`/`scrollTo`; both are polyfilled in [`src/test/setup.ts`](src/test/setup.ts).
