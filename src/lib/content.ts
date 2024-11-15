import { getCollection } from "astro:content";

export async function getCategories() {
  const categories = await getCollection("categories");
  return categories.map((category) => ({
    id: category.id,
    ...category.data,
  }));
}

export async function getActivities() {
  const activities = await getCollection("activities");
  return activities.map((activity) => ({
    id: activity.slug,
    ...activity.data,
    content: activity.body,
  }));
}

export async function getActivity(slug: string) {
  const activities = await getCollection("activities");
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return null;

  const { Content } = await activity.render();

  return {
    id: activity.slug,
    ...activity.data,
    Content,
  };
}

export async function getActivitiesByCategory(categoryId: string) {
  const activities = await getCollection("activities");
  return activities
    .filter(
      (activity) =>
        activity.data.category === categoryId ||
        activity.data.categories?.includes(categoryId)
    )
    .map((activity) => ({
      id: activity.slug,
      ...activity.data,
      content: activity.body,
    }));
}
