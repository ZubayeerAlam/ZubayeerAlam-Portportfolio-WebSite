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
- [x] Left: bar, "Hi, I'm Zubayeer", headline, intro, View Projects / Contact buttons
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

## Step 9 — SEO 👉
- [ ] Metadata API: title template, description, Open Graph, Twitter
- [ ] `app/opengraph-image.tsx` (generated share image)
- [ ] `app/icon.svg` favicon
- [ ] `app/robots.ts`, `app/sitemap.ts`
- [ ] Person JSON-LD (verified fields only)

## Step 10 — Testing
- [ ] `npm run typecheck`, `npm run lint`, `npm run build` all pass
- [ ] Browser check at 320 / 375 / 390 / 768 / 1024 / 1280 / 1440 px
- [ ] Keyboard-only navigation, focus rings visible
- [ ] All links (GitHub, LinkedIn, Facebook, repos, mailto), 404 page
- [ ] No console errors, no missing assets

## Step 11 — Deploy readiness
- [ ] `README.md`: run locally, how to edit content, Vercel deploy guide, custom domain
- [ ] Final commit
- [ ] (You) push to GitHub and import into Vercel

---

## Waiting on you
- [ ] GitHub URLs for the Flutter projects (Task Manager, Nexora, Gas Station Finder, Habit Tracker / CRUD)
- [ ] `resume.pdf` — the CV link stays hidden until this file is added
- [ ] Production domain — needed later for canonical URL and sitemap
