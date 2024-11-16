import React from "react";
import { ActivityCard } from "./ActivityCard";
import { SectionTitle } from "./SectionTitle";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import {
  Users,
  Target,
  Swords,
  Crosshair,
  Cookie,
  Mountain,
  Home,
  Palette,
} from "lucide-react";
import Link from "next/link";

interface Category {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Map categories to icons
const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  sport: Target,
  actief: Users,
  culinair: Cookie,
  workshop: Swords,
  outdoor: Mountain,
  indoor: Home,
  cultureel: Palette,
};

export function TeamActivities() {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    async function fetchCategories() {
      const categoriesCollection = await getCollection("categories");
      const transformedCategories = categoriesCollection.map((category) => ({
        id: category.id,
        title: category.data.title,
        description: category.data.description,
        icon: categoryIcons[category.id] || Target,
      }));
      setCategories(transformedCategories);
    }
    fetchCategories();
  }, []);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Welke Soort Teambuilding Zoek Je?"
          title="Maak Je Keuze"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/teambuildings/${category.id}`}>
              <ActivityCard
                title={category.title}
                description={category.description}
                image={`/images/categories/${category.id}.jpg`}
                icon={
                  category.icon && (
                    <category.icon className="w-6 h-6 text-white" />
                  )
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
