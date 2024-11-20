import React from 'react';
import { CategoryFilters } from './CategoryFilters';
import { ActivityGrid } from './ActivityGrid';
import { Separator } from '@/components/ui/separator';

interface TeamActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categories: string[];
  duration: string;
  groupSize: string;
  price: string;
  availability: string;
  features?: string[];
  gallery?: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
}

interface TeamActivitiesListProps {
  initialActivities?: TeamActivity[];
  categories: Category[];
  selectedCategory?: string | null;
}

export function TeamActivitiesList({
  initialActivities = [],
  categories = [],
  selectedCategory = null,
}: TeamActivitiesListProps) {
  // Filter activities based on selected category
  const filteredActivities = selectedCategory
    ? initialActivities.filter((activity) => activity.categories.includes(selectedCategory))
    : initialActivities;

  // Handle category selection
  const handleCategorySelect = (categoryId: string | null) => {
    // Update URL and trigger navigation
    const url = new URL(window.location.href);
    if (categoryId) {
      url.searchParams.set('category', categoryId);
    } else {
      url.searchParams.delete('category');
    }
    window.location.href = url.toString();
  };

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {currentCategory ? `${currentCategory.title}` : 'Vind je teambuilding in ons breed gamma'}
        </h1>
        {currentCategory && (
          <p className="text-lg text-muted-foreground">{currentCategory.description}</p>
        )}
      </div>

      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      <div className="mb-16">
        <Separator className="max-w-2xl mx-auto" />
      </div>

      {/* Added results count message */}
      <div className="text-center mb-8">
        <p className="text-muted-foreground">
          {selectedCategory
            ? `${filteredActivities.length} activiteit${filteredActivities.length !== 1 ? 'en' : ''} gevonden in ${currentCategory?.title.toLowerCase()}`
            : `${filteredActivities.length} activiteit${filteredActivities.length !== 1 ? 'en' : ''} beschikbaar`}
        </p>
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
