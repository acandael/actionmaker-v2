import React from "react";
import { FAQAccordion } from "./FAQAccordion";

export function FAQ() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Veelgestelde Vragen</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <FAQAccordion />
      </div>
    </section>
  );
}
