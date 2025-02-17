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
          <div className="px-6 py-4">
            <AccordionTrigger className="w-full flex items-start gap-4 text-left hover:no-underline group transition-all duration-300">
              <PlusCircle className="h-5 w-5 mt-0.5 text-red-500 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
              <span className="text-lg font-medium group-hover:text-red-600 transition-colors duration-300">
                {item.data.question}
              </span>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="px-6 pb-4">
              <p className="pl-9 text-muted-foreground">{item.data.answer}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
