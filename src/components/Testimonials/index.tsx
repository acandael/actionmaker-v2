import React from 'react';
import { SectionTitle } from '../TeamActivities/SectionTitle';
import { TestimonialCard } from './TestimonialCard';
import { ClientLogos } from './ClientLogos';
import { testimonials, clients } from './testimonials-data';

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="Wat Zeggen Onze Klanten?"
          title="Ervaringen"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>

        <ClientLogos clients={clients} />
      </div>
    </section>
  );
}