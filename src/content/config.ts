import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    categories: z.array(z.string()),
    duration: z.string(),
    groupSize: z.string(),
    availability: z.string(),
    features: z.array(z.string()),
    gallery: z.array(z.string()),
  }),
});

export const collections = {
  activities,
};
