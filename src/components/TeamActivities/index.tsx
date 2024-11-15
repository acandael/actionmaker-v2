import React from 'react';
import { ActivityCard } from './ActivityCard';
import { SectionTitle } from './SectionTitle';
import { activities } from './activities-data';

export function TeamActivities() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="Welke Soort Teambuilding Zoek Je?"
          title="Maak Je Keuze"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard 
              key={activity.title}
              title={activity.title}
              description={activity.description}
              image={activity.image}
              icon={<activity.icon className="w-6 h-6 text-white" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}