# Baseline

Baseline is a mobile-first MVP web app designed as a re-entry system for overwhelmed days.

Core promise: **"A planner for bad days, not perfect days."**

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- localStorage (no auth, no backend, no APIs)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Architecture (high level)

- `app/page.tsx` loads the app shell.
- `components/AppShell.tsx` manages today's state, persistence, and composition of all cards.
- `components/ModeCard.tsx` handles mode selection.
- `components/MustDoCard.tsx` enforces one must-do and optional strong-mode support task.
- `components/ResetPanel.tsx` runs reset flow steps with progress and restart behavior.
- `components/NightCheckInCard.tsx` provides two-item closure check-in.
- `components/RecentDaysCard.tsx` renders a low-weight preview of recent days.
- `lib/storage.ts` handles localStorage reads/writes and date-keyed records.
- `lib/date.ts` handles date keys and labels.
- `lib/resetFlows.ts` contains editable reset flow configuration.
- `types/dayRecord.ts` contains core TypeScript types.

## Where to edit key product behavior

- **App copy / microcopy:** component files under `components/` (labels, prompts, section text)
- **Reset flows and steps:** `lib/resetFlows.ts`
- **Mode-dependent behavior:** `components/AppShell.tsx` and `components/MustDoCard.tsx`
- **localStorage schema and persistence:** `lib/storage.ts`
