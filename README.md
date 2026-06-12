# Nexora Solutions

A portfolio website for Nexora Solutions, showcasing:
- IT Services
- AI Solutions
- Cyber Security Services
- Audit Services
- Marketing
- Consulting

The site has been migrated from a static HTML/CSS/JS build to a modern **React + TypeScript** application. The landing page features an animated **Background Paths** hero built with Framer Motion and shadcn/ui.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS** — styling (with the shadcn CSS-variable theme)
- **shadcn/ui** — component primitives (`Button`)
- **Framer Motion** — hero animation
- **lucide-react** — icons (available for future use)

## Project Structure
```
.
├── index.html                 # Vite entry HTML
├── public/
│   └── logo.svg               # App favicon / logo
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Mounts the BackgroundPaths hero
│   ├── index.css              # Tailwind directives + shadcn theme variables
│   ├── lib/
│   │   └── utils.ts           # cn() class-merge helper
│   └── components/
│       └── ui/
│           ├── background-paths.tsx   # Animated hero component
│           └── button.tsx             # shadcn Button
├── components.json            # shadcn CLI config
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── legacy/                    # Previous static HTML/CSS/JS site (archived)
```

> **Note:** The original static site (multiple `.html` pages, `styles.css`, `script.js`) is preserved under [`legacy/`](legacy/) for reference. Those pages still cross-link within that folder.

## Getting Started

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```
Open http://localhost:5173 (Vite will pick the next free port if 5173 is taken).

Build for production:
```bash
npm run build
```
Output is written to `dist/`.

Preview the production build:
```bash
npm run preview
```

## Adding More shadcn Components
Components live under `src/components/ui` (the shadcn default). To add more:
```bash
npx shadcn@latest add <component>
```

## Notes
- The hero `title` is configurable via the `BackgroundPaths` component prop in [src/App.tsx](src/App.tsx).
- Dark mode is supported by the components via Tailwind `dark:` variants — add `class="dark"` to the `<html>` element to enable it.
- The contact form from the legacy site (FormSubmit → `nizar.hazaymeh@gmail.com`) has not yet been ported into the React app.
