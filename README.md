# Rachel Wanke — Portfolio

Modern Next.js portfolio for recruiters and freelance clients: web production, SEO, CMS migrations, and site modernization.

## Stack

- Next.js (App Router) + TypeScript
- CSS Modules + design tokens
- Deploy target: **Vercel Hobby (free)**

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional contact form (Formspree):

```bash
cp .env.example .env.local
# set NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

Without Formspree, the contact form opens a `mailto:` draft.

## Content

Edit typed content in:

- `src/content/site.ts` — name, bio, links, capabilities
- `src/content/work.ts` — case studies and selected builds
- `src/content/experience.ts` — roles and education

Images live in `public/images/`.

## Deploy

### GitHub Pages (current, automatic)

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds a
static export (`next build` with `output: "export"`) and publishes it to
GitHub Pages at:

**https://rwanke14.github.io/reactportfolio**

The workflow sets `NEXT_PUBLIC_BASE_PATH=/reactportfolio` so assets and images
resolve under the project subpath. If the Pages source ever shows the README
again, check that repo **Settings → Pages → Source** is set to
**GitHub Actions**.

### Vercel (optional alternative)

1. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
2. Framework preset: **Next.js**. Leave build settings default (`next build`).
3. Add env var `NEXT_PUBLIC_FORMSPREE_ID` if you use Formspree.
4. Deploy — you get a free `*.vercel.app` URL.

Leave `NEXT_PUBLIC_BASE_PATH` unset on Vercel; the site builds at the domain
root there.

### Custom domain (`rachelwanke.com`)

DNS currently resolves to parking IPs, so the domain is parked or misconfigured — not serving this site.

1. Log into your registrar and **renew** or **re-register** `rachelwanke.com` if needed.
2. In the Vercel project → **Settings → Domains**, add `rachelwanke.com` and `www`.
3. Point DNS as Vercel instructs (usually A / CNAME records).
4. Remove any leftover GitHub Pages `CNAME` setup once cut over.

Same cost as GitHub Pages for hosting ($0 on Vercel Hobby). Domain registration is the only paid piece (~$10–15/year).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Local development server |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |
