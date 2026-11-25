# Folder structure and conventions

## Layout

```
src/
├── main.tsx          # Entry point
├── App.tsx           # Root component: providers and top-level layout
├── index.css         # Global stylesheet entry
├── assets/           # Images, fonts and icons imported by code
├── components/       # Shared components, used by 2+ pages or features
│   ├── ui/           # Small building blocks: Button, Input, Card
│   └── layout/       # Header, Footer, Container
├── features/         # Self-contained domain code, one folder per feature
├── routes/           # Route definitions (AppRoutes.tsx)
├── pages/            # One component per route; composes features and components
├── hooks/            # Shared hooks
├── lib/              # Pure helpers and third-party library setup
├── services/         # API clients and data fetching
├── types/            # Shared TypeScript types
├── constants/        # App-wide constant values
└── styles/           # Design tokens and other global CSS
```

`public/` holds files served as-is at a fixed URL, such as the favicon.

## Where does a new file go?

1. Is it a whole route? `pages/`
2. Is it used by only one feature? `features/<feature-name>/`
3. Is it a shared component? `components/ui/` or `components/layout/`
4. Otherwise: `hooks/`, `lib/`, `services/`, `types/` or `constants/`

Start code close to where it is used. Move it to a shared folder only when a second place needs it.

## Templates

A component gets its own folder:

```
components/ui/Button/
├── Button.tsx
├── Button.module.css
└── index.ts          # export { Button } from './Button'
```

A feature creates only the subfolders it needs:

```
features/booking/
├── components/
├── hooks/
├── services/
├── types.ts
└── index.ts          # The feature's public exports
```

`booking` is only an example name.

## Naming

| Item | Style | Example |
| --- | --- | --- |
| Component file and folder | PascalCase | `Button.tsx` |
| Page | PascalCase + `Page` | `HomePage.tsx` |
| Hook | camelCase, starts with `use` | `useScroll.ts` |
| Other TypeScript file | camelCase | `formatDate.ts` |
| Feature and asset names | kebab-case | `room-booking/`, `hero-image.png` |
| CSS Module | Same name as component | `Button.module.css` |
| Constant | UPPER_SNAKE_CASE | `MAX_GUESTS` |

## Import rules

- Dependencies point one way: `pages` → `features` → shared folders.
- Shared folders never import from `features` or `pages`.
- Import a feature through its `index.ts`, not its internal files.
- Features do not import each other. Combine them in a page.
- Use named exports for new files.

Delete a folder's `.gitkeep` once it contains a real file.
