import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export function ActivityCard({ title, description, image, icon }: ActivityCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-0 relative">
        <div className="relative h-72 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center tracking-wide">
              {title}
            </h3>
            <p className="text-sm text-center max-w-xs opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}