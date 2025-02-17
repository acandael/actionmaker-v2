import { PlusCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  id: string;
  data: {
    question: string;
    answer: string;
  };
}

interface Props {
  faqs: FAQ[];
}

export function FAQAccordionReact({ faqs }: Props) {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {faqs.map((item, index) => (
        <AccordionItem
          key={item.id}
          value={`item-${index}`}
          className="border-none rounded-xl bg-white shadow-md hover:shadow-xl data-[state=open]:bg-red-50/50 transition-all duration-300"
        >
          <AccordionTrigger className="p-0 px-6 py-4 rounded-xl text-left hover:no-underline data-[state=open]:rounded-b-none group transition-all duration-300">
            <div className="flex items-center gap-4">
              <PlusCircle className="h-5 w-5 text-red-500 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
              <span className="text-lg font-medium group-hover:text-red-600 transition-colors duration-300">
                {item.data.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 px-6 pb-4 pt-2 text-muted-foreground">
            <div className="pl-9">{item.data.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
