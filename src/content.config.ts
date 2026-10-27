import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const activities = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/activities',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    duration: z.string(),
    groupSize: z.string(),
    availability: z.string(),
    priority: z.coerce.number().int().default(999),
    features: z.array(z.string()),
    gallery: z.array(z.string()),
    'video-url': z.string().optional(),
    isGame: z.boolean().optional().default(false),
    isCityGame: z.boolean().optional().default(false),
  }),
});

const categories = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/categories',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number().int().optional().default(999),
  }),
});

const testimonials = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/testimonials',
  }),
  schema: z.object({
    name: z.string(),
    company: z.string(),
    text: z.string(),
    image: z.string(),
  }),
});

const logos = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/logos',
  }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

const faqs = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/faqs',
  }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

const images = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/images',
  }),
  schema: z.object({
    src: z.string(),
    alt: z.string().optional(),
  }),
});

export const collections = {
  activities,
  categories,
  testimonials,
  logos,
  faqs,
  images,
};
