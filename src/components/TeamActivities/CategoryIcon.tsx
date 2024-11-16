import React from "react";
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

const categoryIcons = {
  sport: Target,
  actief: Users,
  culinair: Cookie,
  workshop: Swords,
  outdoor: Mountain,
  indoor: Home,
  cultureel: Palette,
};

interface CategoryIconProps {
  category: string;
  className?: string;
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  const Icon = categoryIcons[category] || Target;
  return <Icon className={className} />;
}
