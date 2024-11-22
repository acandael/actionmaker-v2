import React from 'react';
import { Card } from '@/components/ui/card';

interface TeamActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

interface ActivityGridProps {
  activities: TeamActivity[];
  imageImports: Record<string, { default: { src: string } }>;
}

export function ActivityGrid({ activities, imageImports }: ActivityGridProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <div id="activities-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {activities.map((activity) => {
        const cleanId = activity.id.replace(/\.md$/, '');
        const href = `/teambuildings/${cleanId}`;
        const imagePath = `/src/assets/activities/${activity.image}`;

        if (!imageImports[imagePath]) {
          console.error(`Image not found: ${imagePath}`);
          return null;
        }

        return (
          <a key={activity.id} href={href} onClick={(e) => handleClick(e, href)} className="block">
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={imageImports[imagePath].default.src}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{activity.description}</p>
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
}
