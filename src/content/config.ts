import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    duration: z.string(),
    groupSize: z.string(),
    availability: z.string(),
    priority: z.coerce
      .number()
      .int()
      .default(999)
      .transform((val) => {
        console.log('Processing priority in schema:', { value: val, type: typeof val });
        return val;
      }),
    features: z.array(z.string()),
    gallery: z.array(z.string()),
    'video-url': z.string().optional(),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    company: z.string(),
    text: z.string(),
    image: z.string(),
  }),
});

const logos = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

const faqs = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

const images = defineCollection({
  type: 'data',
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
