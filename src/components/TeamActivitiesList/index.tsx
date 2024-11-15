import React, { useState, useEffect } from "react";
import { CategoryFilters } from "./CategoryFilters";
import { ActivityGrid } from "./ActivityGrid";
import { activities as allActivities } from "@/components/TeamActivities/activities-data";
import { categories } from "@/components/TeamActivities/categories-data";
import { Separator } from "@/components/ui/separator";
import type { TeamActivity } from "@/components/TeamActivities/activities-data";

interface TeamActivitiesListProps {
  selectedCategory?: string | null;
  initialActivities?: TeamActivity[];
}

export function TeamActivitiesList({
  selectedCategory: initialCategory,
  initialActivities = allActivities,
}: TeamActivitiesListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory || null
  );
  const [filteredActivities, setFilteredActivities] =
    useState<TeamActivity[]>(initialActivities);

  useEffect(() => {
    // Update filtered activities when category changes
    const newFilteredActivities = selectedCategory
      ? allActivities.filter(
          (activity) =>
            activity.category === selectedCategory ||
            activity.categories?.includes(selectedCategory)
        )
      : allActivities;

    setFilteredActivities(newFilteredActivities);

    // Update URL
    const url = new URL(window.location.href);
    if (selectedCategory) {
      url.searchParams.set("category", selectedCategory);
    } else {
      url.searchParams.delete("category");
    }
    window.history.pushState({}, "", url);
  }, [selectedCategory]);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {currentCategory
            ? `${currentCategory.title}`
            : "Vind je teambuilding in ons breed gamma"}
        </h1>
        {currentCategory && (
          <p className="text-lg text-muted-foreground">
            {currentCategory.description}
          </p>
        )}
      </div>

      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <div className="mb-16">
        <Separator className="max-w-2xl mx-auto" />
      </div>

      {filteredActivities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            Geen activiteiten gevonden voor deze categorie.
          </p>
        </div>
      ) : (
        <ActivityGrid activities={filteredActivities} />
      )}
    </div>
  );
}
