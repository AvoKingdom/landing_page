# AvoKingdom — landing page

Sitio estático de presentación para **AvoKingdom Solutions** (Vite + React + TypeScript + Tailwind CSS + shadcn/ui).

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado) y npm

## Desarrollo

```powershell
npm install
npm run dev
```

El servidor de desarrollo usa el puerto **8080** (ver `vite.config.ts`).

## Build y vista previa

```powershell
npm run build
npm run preview
```

## Otros comandos

- `npm run lint` — ESLint
- `npm test` / `npm run test:watch` — Vitest
- `npx playwright test` — pruebas E2E (arranca el dev server según `playwright.config.ts`)

## Stack

Vite, TypeScript, React, React Router, TanStack Query, shadcn/ui, Tailwind CSS.
