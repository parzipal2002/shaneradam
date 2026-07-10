# Portfolio

A personal portfolio site built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. The design leans into a "code editor" identity — a tab-bar nav, file-path section labels, JSON/commit-log styled panels — since it's built *by* a developer *for* showing developer work.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

Almost everything you need to change lives in **one file**: `lib/data.ts`. Update your name, role, bio, skills, projects, experience, certificates, testimonials, and contact info there — the components just render whatever's in that file.

Other things to swap:

| What | Where |
|---|---|
| Profile photo | Set `site.photo` in `lib/data.ts` to `"/photo.jpg"` and drop the image in `public/`. Leave `null` to keep the generated-initials avatar. |
| Resume | Replace `public/resume.pdf` with your real resume (same filename, or update `site.resumeUrl`). |
| Project screenshots | Cards currently use colored gradient placeholders (`project.color` in `lib/data.ts`). To use real screenshots, swap the gradient `<div>` in `components/projects.tsx` for a Next `<Image>` pointing at a file in `public/`. |
| Colors / fonts | Design tokens are in `app/globals.css` (`:root` block) and the font imports in `app/layout.tsx`. |
| Contact form | `app/api/contact/route.ts` currently logs submissions. See the comment at the top of that file for wiring up Resend or a form backend so messages actually reach your inbox. |

## Sections included

Hero · About · Skills · Projects (with tech filtering) · Experience (timeline) · Certificates · Testimonials · Contact (form + details) · Resume download · Dark/light mode toggle · Scroll-triggered animations · Fully responsive

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals
- **lucide-react** + **react-icons** for icons

## Deploying

The easiest path is [Vercel](https://vercel.com/new) — connect the repo and it builds automatically. Netlify and GitHub Pages (via `next export`, with some caveats since this uses an API route) also work.

For a custom domain, point your domain's DNS at your host of choice and add it in their dashboard.

## Notes

- Dark mode preference is saved to `localStorage` and respects the visitor's OS preference on first visit.
- The contact form has a basic honeypot field for spam; it does not send real email until you connect a provider (see table above).
- Animations respect `prefers-reduced-motion`.
