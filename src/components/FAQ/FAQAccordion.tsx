import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle } from "lucide-react";
import { faqData } from "./faq-data";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={cn(
            "border-none rounded-xl bg-white shadow-md hover:shadow-xl",
            "data-[state=open]:bg-red-50/50",
            "transition-all duration-300"
          )}
        >
          <AccordionTrigger
            className={cn(
              "px-6 py-4 rounded-xl text-left hover:no-underline",
              "data-[state=open]:rounded-b-none",
              "group transition-all duration-300"
            )}
          >
            <div className="flex items-center gap-4">
              <PlusCircle
                className={cn(
                  "h-5 w-5 text-red-500 flex-shrink-0",
                  "transition-transform duration-300",
                  "group-data-[state=open]:rotate-45"
                )}
              />
              <span className="text-lg font-medium group-hover:text-red-600 transition-colors duration-300">
                {item.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "px-6 pb-4 pt-2 text-muted-foreground",
              "data-[state=open]:animate-accordion-down",
              "data-[state=closed]:animate-accordion-up",
              "[&>p]:leading-relaxed"
            )}
          >
            <div className="pl-9">{item.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
