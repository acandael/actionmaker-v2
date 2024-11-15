import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFiltersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={cn(
            "group relative h-52 cursor-pointer overflow-hidden transition-all duration-300",
            selectedCategory === category.id
              ? "ring-2 ring-red-500 shadow-lg"
              : "hover:shadow-xl"
          )}
          onClick={() =>
            onCategorySelect(
              selectedCategory === category.id ? null : category.id
            )
          }
        >
          {/* Background Image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40 transition-opacity duration-300" />

          {/* Content Container */}
          <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              {category.title}
            </h3>

            {/* Category Description */}
            <p
              className={cn(
                "text-sm text-white/90",
                "transition-opacity duration-300",
                "line-clamp-2",
                "drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              )}
            >
              {category.description}
            </p>
          </div>

          {/* Selected State Indicator */}
          {selectedCategory === category.id && (
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full shadow-lg">
                Geselecteerd
              </div>
            </div>
          )}

          {/* Interactive Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-black/0 transition-opacity duration-300",
              "group-hover:bg-black/20"
            )}
          />
        </Card>
      ))}
    </div>
  );
}
