import { defineCollection, z } from "astro:content";

const activities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    categories: z.array(z.string()),
    duration: z.string(),
    groupSize: z.string(),
    availability: z.string(),
    features: z.array(z.string()).optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const categories = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  activities: activities,
  categories: categories,
};
