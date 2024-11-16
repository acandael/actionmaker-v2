import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Clock, Euro } from "lucide-react";
import Link from "next/link";

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

interface ActivityGridProps {
  activities: TeamActivity[];
}

export function ActivityGrid({ activities }: ActivityGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {activities.map((activity) => (
        <Link key={activity.id} href={`/teambuildings/${activity.id}`}>
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h3 className="text-2xl font-bold mb-3 text-center tracking-wide">
                  {activity.title}
                </h3>
                <p className="text-sm text-center max-w-xs opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {activity.description}
                </p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Groepsgrootte</p>
                  <p className="font-medium">{activity.groupSize}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Duur</p>
                  <p className="font-medium">{activity.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Euro className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Prijs</p>
                  <p className="font-medium">{activity.price}</p>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
