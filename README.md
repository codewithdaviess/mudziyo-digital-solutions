# Mudziyo Digital Solutions

A Next.js marketing website for Mudziyo Digital Solutions, showcasing websites, software, web applications and digital solutions.

## Project structure

- `app/` — App Router pages, route handlers, shared UI components and global styles.
- `app/api/contact/` — the server-side contact-form delivery route.
- `app/lib/` — site configuration, metadata helpers, structured data and contact validation.
- `public/images/` — website and portfolio images served from `/images`.

The current application is intentionally small, so the existing colocated `app/components/` structure is retained instead of adding empty architectural layers. Shared server-side concerns live in `app/lib/`; interactive components keep their client code close to their presentation.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` for local work. Never commit `.env.local` or production secrets.

- `NEXT_PUBLIC_SITE_URL` — canonical public site URL, for example `https://mudziyo.co.zw`.
- `CONTACT_FORM_WEBHOOK_URL` — HTTPS server-side endpoint that receives validated enquiries.
- `CONTACT_FORM_TRUST_PROXY` — set to `true` only when a trusted deployment proxy supplies `x-forwarded-for`.

## Git workflow

```text
main
  ↑
develop
  ↑
feature/* / fix/* / refactor/* / seo/*
```

`main` is the production branch. Integrate tested work into `develop` before promoting it to `main`. Use focused branches such as `refactor/clean-architecture` and `seo/nextjs-seo`; do not push or merge without review.

## SEO and discovery

The site uses the Next.js Metadata API for unique page titles, descriptions, canonical URLs, Open Graph and Twitter metadata. `app/robots.ts` and `app/sitemap.ts` use `NEXT_PUBLIC_SITE_URL`, and structured Organization and WebSite data is rendered from the same configuration. Legal pages are canonical but excluded from search indexing and the sitemap only includes marketing pages.

For Google Search Console, the site owner still needs to add and verify the production domain, submit `https://your-domain/sitemap.xml`, inspect key URLs and request indexing where appropriate. These steps improve technical discoverability; they do not guarantee indexing or rankings.

## Deployment

Set the environment variables above in the hosting provider, then use:

```bash
npm run build
npm run start
```
