# Shia Quran Hub

Modern Quran learning platform built with Next.js App Router, Tailwind CSS, and Supabase.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Lucide Icons
- Supabase (contact form data)
- React Toastify (contact form feedback)

## Pages

- `/` Home
- `/courses` Courses
- `/about` About
- `/teachers` Teachers
- `/fees` Fees
- `/contact` Contact

## Features

- SEO-ready metadata setup (route-level metadata, robots, sitemap)
- Fully responsive multi-page marketing site
- Contact form integrated with Supabase table `contacts`
- Local static assets for course/contact visuals

## Project Structure

```text
src/app/
	components/
		layout/
		sections/
	about/
	contact/
	courses/
	fees/
	teachers/
	layout.tsx
	page.tsx
	robots.ts
	sitemap.ts
public/assets/
	about/
	contact/
	courses/
	testimonials/
```

## Environment Variables

Create `.env` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Contact Form (Supabase)

The contact form inserts records into a table named `contacts` with these fields:

- `name`
- `email`
- `message`

Make sure your Supabase Row Level Security and insert policy allow this operation for your intended usage.

## Deployment

Deploy with any platform that supports Next.js (Vercel recommended). Ensure environment variables are configured in your deployment settings.
