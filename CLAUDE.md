# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Francisca Ordaz. Built with React 19, TypeScript, Vite 7, and Tailwind CSS 4. Deployed to GitHub Pages at https://kikaordaz.github.io/PresentationWebsite/.

## Commands

```bash
npm run dev      # Start dev server (auto-opens browser)
npm run build    # TypeScript check + Vite build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to GitHub Pages
```

## Architecture

**Page System**: Single-page scroll-snap layout. All pages defined in `src/constants.ts` via `pages_values` array - each entry specifies component, navigation ID, title, and icon. `App.tsx` iterates over this array to render pages.

**Data Flow**: Content data (education history, tools/skills) lives in `src/constants.ts`. Page components read from these exports rather than hardcoding content.

**Key Files**:
- `src/constants.ts` - Central config: page definitions, education data, tools/skills
- `src/App.tsx` - Root component with React Context and page rendering
- `src/EducationTemplate.tsx` - Reusable template for education entries (used by `EducationPages.tsx`)

**Static Assets**: Served from `public/` folder - `images/`, `icons/`, `arrows/`

**Styling**: Tailwind CSS via `@tailwindcss/vite` plugin. Global styles in `src/index.css` and `src/App.css`.

## Notes

- `base` path in `vite.config.ts` set to `/PresentationWebsite/` for GitHub Pages
- All content is in Portuguese
