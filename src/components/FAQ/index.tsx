import React from 'react';
import { SectionTitle } from '../TeamActivities/SectionTitle';
import { FAQAccordion } from './FAQAccordion';

export function FAQ() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          subtitle="Veel Gestelde Vragen"
          title="FAQ"
        />
        <FAQAccordion />
      </div>
    </section>
  );
}