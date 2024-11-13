import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'


export default function Faq() {
  return (
    <>
    <div>
     <h3>Frequently Asked Questions</h3>
    </div>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
