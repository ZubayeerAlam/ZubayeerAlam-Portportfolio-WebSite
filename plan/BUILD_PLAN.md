# Portfolio Build Plan

We build one step at a time. After each step: run checks, tick the boxes, review together, then move on.

**Legend:** `[x]` done · `[ ]` to do · 👉 = next step

---

## Step 0 — Setup ✅
- [x] Read all 5 CVs and extract verified facts → [CONTENT.md](CONTENT.md)
- [x] Analyse reference image → [DESIGN.md](DESIGN.md)
- [x] Collect decisions: Flutter + .NET positioning, no phone number, socials, photo
- [x] `git init`
- [x] Write `package.json`, `tsconfig.json` (strict), `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`, `.env.example`
- [x] Install: next 16.4.3, react 19.3.1, tailwindcss 4.3.3, typescript 5.9.3, eslint 10, eslint-config-next 16, lucide-react 1.64
- [x] Crop profile photo (removed #OPENTOWORK frame) → `public/images/profile.jpg`

## Step 1 — Content data ✅
Goal: all personal content in typed files, separate from layout.
- [x] `types/content.ts`: Profile, SocialLink, Project, SkillGroup, EducationItem types
- [x] `data/profile.ts`: name, headline, intro, about, email, socials, photo
- [x] `data/projects.ts`: 7 featured projects + 4 in-progress apps, each with status (Flutter repo links marked `TODO`)
- [x] `data/skills.ts`: grouped skills (no % bars)
- [x] `data/education.ts`: AIUB + Ostad
- [x] `lib/site-config.ts`: site URL (from env), title, description, resume flag
- [x] Check: `npm run typecheck` passes

## Step 2 — Design system and layout shell ✅
Goal: colours, font, base styles, header and footer.
- [x] `app/globals.css`: Tailwind v4 `@theme` tokens (colours, radius, container, motion)
- [x] Font via `next/font` (one family)
- [x] `app/layout.tsx`: html/body, font, skip link, base metadata
- [x] `components/layout/container.tsx`
- [x] `components/layout/navbar.tsx` + `mobile-menu.tsx` + `wordmark.tsx`: `</>` wordmark, links, mobile menu (Escape closes, focus returns)
- [x] `components/layout/footer.tsx`
- [x] UI primitives: `button.tsx`, `section-heading.tsx` (short white bar + title), `text-link.tsx` (underline + arrow), `brand-icons.tsx`, `social-links.tsx`
- [x] Check: typecheck + lint pass; header, mobile menu, anchor links and footer checked at 375px and 1280px; no console errors
- Note: `app/page.tsx` is a temporary preview page, replaced in Step 3

## Step 3 — Hero section ✅
- [x] Left: bar, heading, intro, View Projects / Contact buttons
- [x] Heading changed after review to "Hi, I am Zubayeer, a Full Stack App Developer" (`greeting` in `data/profile.ts`; hero only)
- [x] Circle profile photo (`next/image`, `preload`)
- [x] Right column: About me / My work / Follow me mini-blocks
- [x] Round blue scroll-down button
- [x] Check: typecheck + lint pass; checked at 320 / 390 / 768 / 1280px, no horizontal scroll, no console errors
- Note: the Learn more / Browse projects / Contact links point to sections built in Steps 4–7

## Step 4 — About + Skills ✅
- [x] About section on the lighter panel: bio paragraphs, key facts list, LinkedIn link
- [x] Skills grid grouped by category
- [x] Check: typecheck + lint pass; checked at 375px and 1280px, no horizontal scroll, no console errors

## Step 5 — Projects ✅
- [x] `project-row.tsx`: editorial list row (number, title, status badge, summary, tech, arrow)
- [x] `status-badge.tsx`: Completed / In development / Coursework (text label, not colour only)
- [x] Featured projects list + "Also in progress" compact list
- [x] Check: typecheck + lint pass; all 3 repo URLs return 200 and stay clickable over the row link; checked at 375px and 1280px, no console errors

## Step 6 — Project detail pages ✅
- [x] `app/projects/[slug]/page.tsx` with `generateStaticParams` + `generateMetadata`
- [x] Shows only sections that have real content; tech stack + links side panel; Next project link
- [x] `app/not-found.tsx`
- [x] Check: `npm run build` pre-renders all 4 detail pages; unknown slug and projects without a page → 404; checked at 375px and 1280px

## Step 7 — Education + Contact ✅
- [x] Education & training section (completed vs expected clearly marked)
- [x] Contact section: split panel, email link, socials (no form)
- [x] Check: typecheck + lint pass; mailto and all social links correct; checked at 375px and 1280px, no horizontal scroll, no failed requests

## Step 8 — Motion and polish ✅
- [x] Scroll reveal: `.reveal` class in `globals.css` using CSS scroll-driven animation (no JavaScript; content stays visible where unsupported)
- [x] Hover states on rows, links, buttons; project rows also highlight on keyboard focus
- [x] `prefers-reduced-motion` turns animation off
- [x] Visual review against reference; checked reveal at 1280px (off-screen content starts hidden, ends fully visible), keyboard focus on project rows

## Step 9 — SEO ✅
- [x] Metadata API: title template, description, canonical, Open Graph, Twitter (home + each project page)
- [x] `app/opengraph-image.tsx`: 1200×630 share image with photo, built with Manrope (`assets/fonts/`, OFL licence included)
- [x] `app/icon.svg` favicon
- [x] `app/robots.ts`, `app/sitemap.ts`
- [x] Person JSON-LD (verified fields only)
- [x] Site URL: `NEXT_PUBLIC_SITE_URL` → Vercel production URL → localhost
- [x] Check: build passes; inspected generated tags, robots.txt, sitemap.xml, JSON-LD and share image

## Step 10 — Testing ✅
- [x] `npm run typecheck`, `npm run lint`, `npm run build` all pass
- [x] Browser check at 320 / 375 / 390 / 768 / 1024 / 1280 / 1440 px on the production build: no horizontal scroll, no element past the viewport, photo loads (fixed: hero heading wrapped to 4 lines at 1024px)
- [x] Keyboard-only navigation, focus rings visible (Tab order: skip link → name → menu → buttons → side links)
- [x] All links: 5 internal pages 200, all anchors exist, GitHub + Facebook 200, mailto correct, unknown URLs 404
- Note: LinkedIn blocks automated checks (status 999), so that link could not be verified by script; open it once by hand
- [x] No console errors, no missing assets

## Step 11 — Deploy readiness ✅ (code done — your 3 steps below remain)
- [x] `README.md`: run locally, how to edit content, project structure, Vercel deploy guide, post-deploy checklist, custom domain
- [x] `package.json` `engines`: Node >=20.9.0 so Vercel uses a compatible version
- [x] Privacy check: no phone number or secrets in tracked files
- [x] Check: typecheck + lint + build pass
- [ ] (You) Final commit
- [x] (You) GitHub repository connected (`ZubayeerAlam/ZubayeerAlam-Portportfolio-WebSite`)
- [ ] (You) Push all commits to GitHub (GitHub currently has commits up to Step 8)
- [ ] (You) Import the repository into Vercel and deploy

---

## Changes after review
- [x] Hero heading → "Hi, I am Zubayeer, a Full Stack App Developer". Stored as `greeting` in `data/profile.ts`.
  Only the hero changed; tab title, footer, share image and search data keep the headline "Flutter & .NET Developer".

## Waiting on you
- [ ] GitHub URLs for the Flutter projects (Task Manager, Nexora, Gas Station Finder, Habit Tracker / CRUD)
- [ ] `resume.pdf` — the CV link stays hidden until this file is added
- [ ] Production domain — needed later for canonical URL and sitemap
