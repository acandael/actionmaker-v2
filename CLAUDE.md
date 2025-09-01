# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build the application
- `npm run preview` - Preview the built application
- `npm run astro` - Run Astro CLI commands

## Architecture Overview

This is an **Astro-based website** for ActionMaker, a Belgian team building company, built with:

- **Framework**: Astro v4 with React integration
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Deployment**: Vercel serverless with server-side rendering
- **Internationalization**: Built-in i18n with Dutch (default), French, and English
- **Content Management**: Astro Content Collections for structured data

### Key Technologies

- **UI Components**: Extensive Radix UI primitives with shadcn/ui styling
- **Forms**: React Hook Form with Zod validation
- **Email**: React Email components with Resend integration
- **Charts**: Recharts for data visualization
- **Analytics**: Vercel Analytics integration

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Radix UI + Tailwind)
│   └── ...           # Custom components
├── content/          # Content collections (activities, categories, etc.)
├── emails/           # React Email templates
├── i18n/            # Internationalization utilities
├── layouts/         # Astro layouts
├── lib/             # Utility libraries
├── locales/         # Translation files
├── pages/           # File-based routing
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Content Collections

The site uses Astro Content Collections with these main types:

- **activities**: Team building activities with metadata (duration, group size, features, gallery)
- **categories**: Activity categories with ordering
- **testimonials**: Customer testimonials
- **logos**: Client logo showcase
- **faqs**: Frequently asked questions
- **images**: Managed image assets

## Internationalization

- **Default locale**: Dutch (`nl`)
- **Supported locales**: Dutch (`nl`), French (`fr`), English (`en`)
- **Routing**: Default locale has no prefix (`/`), others prefixed (`/fr/`, `/en/`)
- **Translation files**: Located in `src/locales/`

## Component Architecture

- **UI Components**: Built with Radix UI primitives and Tailwind CSS
- **React Integration**: Components use `.tsx` extension for React, `.astro` for Astro
- **Styling**: Pure Tailwind CSS classes (no @apply directives per .cursorrules)
- **Path Aliases**: `@` maps to `/src`, `@components` to components directory, `@assets` to assets

## Configuration Notes

- **Output Mode**: Server-side rendering (`output: 'server'`)
- **Adapter**: Vercel serverless
- **Redirects**: Extensive redirect rules for legacy URLs in astro.config.mjs
- **Prefetching**: Disabled (`prefetch: false`)

## Development Guidelines

- Follow Astro's partial hydration patterns
- Use client: directives sparingly (client:load, client:idle, client:visible)
- Prioritize static generation where possible
- Leverage Astro's built-in asset optimization
- Maintain semantic HTML and accessibility standards
- Use TypeScript for type safety
- Follow existing component patterns and naming conventions