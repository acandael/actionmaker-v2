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
            <div style={{ marginLeft: '0.5rem' }}>
              <AccordionTrigger className="w-full flex justify-start items-start gap-4 hover:no-underline group transition-all duration-300 pl-2">
                <PlusCircle
                  className="h-5 w-5 mt-0.5 text-red-500 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
                  style={{ marginLeft: '0.25rem' }}
                />
                <div className="flex-1 text-left">
                  <span className="text-lg font-medium group-hover:text-red-600 transition-colors duration-300">
                    {item.data.question}
                  </span>
                </div>
              </AccordionTrigger>
            </div>
          </div>
          <div className="answer-container" style={{ padding: '0 1.5rem 1rem 2.5rem' }}>
            <AccordionContent className="!p-0">
              <p className="text-muted-foreground">{item.data.answer}</p>
            </AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
