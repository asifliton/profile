# Asif Liton Portfolio

Personal portfolio site for Asif Liton, a senior software engineer focused on React, TypeScript, and PHP.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel deployment target

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

If another project is already using port 3000:

```bash
pnpm exec next dev --turbopack --port 3001
```

## Verification

Run these before pushing changes:

```bash
pnpm lint
pnpm build
```

## Content Update Plan

1. Replace representative work cards with named case studies.
2. Add measurable outcomes for each project.
3. Add a custom Open Graph image.
4. Add a contact email or form if needed.
5. Connect a custom domain after the first production deploy.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Open Vercel and import `asifliton/profile`.
3. Keep the detected framework as Next.js.
4. Use the default build command: `next build`.
5. Use `main` as the production branch.
6. Deploy, then add a custom domain from the Vercel project settings.
