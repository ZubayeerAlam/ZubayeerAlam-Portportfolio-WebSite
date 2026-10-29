# ZubayeerAlam-Portportfolio-WebSite

Personal portfolio of **Zubayeer Alam**, a Flutter & .NET developer and Computer Science and Engineering student at AIUB.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Every page is generated as static HTML, so the site needs no database, backend or paid service.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static generation) |
| UI | React 19, Tailwind CSS 4 |
| Language | TypeScript (strict) |
| Icons | lucide-react, plus inline SVG brand icons |
| Font | Manrope via `next/font` |
| Hosting | Vercel |

## Run it locally

You need **Node.js 20.9 or newer** and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Check the code with ESLint |
| `npm run typecheck` | Check types with TypeScript |

Before pushing, run `npm run typecheck && npm run lint && npm run build`.

## Editing the content

All text lives in the `data/` folder. You never need to touch the layout components to update the site.

| To change | Edit |
|---|---|
| Name, hero heading, intro, About text, email, social links | `data/profile.ts` |
| Projects (featured list, detail pages, "Also in progress") | `data/projects.ts` |
| Skills | `data/skills.ts` |
| Education and training | `data/education.ts` |
| Menu links, site description, CV link | `lib/site-config.ts` |

### Add or update a project

Each project in `data/projects.ts` has:

- `slug`: the URL, for example `food-menu` → `/projects/food-menu`
- `status`: `"completed"`, `"in-development"` or `"coursework"`
- `track`: `"flutter"` or `"dotnet"`
- `repoUrl` / `liveUrl`: optional. Leave them out and no link is shown.
- `hasDetailPage`: `true` gives the project its own page, built from `overview` and `sections`

The Flutter projects have `// TODO` comments where their GitHub links go.

### Add your CV

1. Save your CV as a PDF in the `public/cv/` folder, as `Zubayeer_Alam_CV.pdf`. To use a different file name, update `resumePath` in `lib/site-config.ts`.
2. In `lib/site-config.ts`, make sure `resumeAvailable` is `true`.

To update the CV later, replace the PDF in `public/cv/` with the new version (same file name).

A "CV" link then appears in the menu and the Contact section.

### Change the profile photo

Replace `public/images/profile.jpg` with a square image, ideally at least 600×600 px, and update `width` / `height` in `data/profile.ts` if they change.

## Project structure

```
app/                  Routes, layout, global styles, SEO files
  projects/[slug]/    Project detail pages
  opengraph-image.tsx Social share image (generated at build time)
  robots.ts, sitemap.ts
components/
  layout/             Navbar, mobile menu, footer, container
  sections/           Home page sections (hero, about, projects, …)
  projects/           Project row, detail page, status badge
  ui/                 Buttons, links, headings, icons
  seo/                Structured data for search engines
data/                 All site content
lib/                  Site config and small helpers
types/                Content types
public/               Images
  cv/                 Downloadable CV (Zubayeer_Alam_CV.pdf)
assets/fonts/         Fonts for the share image (SIL Open Font License)
plan/                 Build plan, verified content and design notes
```

## Deploy to Vercel

### 1. Push to GitHub

```bash
git push
```

### 2. Import the repository

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New → Project**.
3. Find `ZubayeerAlam-Portportfolio-WebSite` and click **Import**.

### 3. Check the build settings

Vercel detects Next.js automatically. The defaults are correct:

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | (leave empty) |
| Install Command | `npm install` |

No environment variables are needed for the first deploy.

### 4. Deploy

Click **Deploy**. When it finishes, Vercel gives you a URL like `https://your-project.vercel.app`.

Every later `git push` to `main` deploys automatically.

### 5. Verify the live site

- [ ] Home page loads, with your photo
- [ ] Menu links scroll to each section; the mobile menu opens and closes
- [ ] Each project page opens, and `/projects/anything-else` shows the 404 page
- [ ] GitHub, LinkedIn, Facebook and email links work
- [ ] `/robots.txt` and `/sitemap.xml` show your Vercel URL, not `localhost`
- [ ] Share preview looks right in the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 6. Custom domain (optional, later)

1. In Vercel, open the project → **Settings → Domains** → add your domain.
2. Follow Vercel's DNS instructions at your domain registrar.
3. Go to **Settings → Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` |

4. Redeploy. Canonical links, the sitemap and share previews then use your domain.

## Environment variables

| Name | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL. Without it, Vercel's production URL is used, and `localhost` when running locally. |

See `.env.example`. Never commit real `.env` files.

## License

The code is personal portfolio work by Zubayeer Alam. The Manrope font files in `assets/fonts/` are under the SIL Open Font License (see `assets/fonts/OFL.txt`).
