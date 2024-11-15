import { defineCollection, z } from "astro:content";
import { imageSchema } from "@/lib/schemas";

const categories = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: imageSchema,
  }),
});

const activities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    category: z.string(),
    categories: z.array(z.string()).optional(),
    duration: z.string().optional(),
    groupSize: z.string().optional(),
    price: z.string().optional(),
    availability: z.string().optional(),
    features: z.array(z.string()).optional(),
    gallery: z.array(imageSchema).optional(),
  }),
});

export const collections = {
  categories: categories,
  activities: activities,
};
