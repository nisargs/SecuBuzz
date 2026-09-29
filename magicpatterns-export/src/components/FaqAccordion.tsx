import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink">
                
                {item.q}
                <PlusIcon
                  className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ease-out ${isOpen ? 'rotate-45' : ''}`}
                  aria-hidden="true" />
                
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={`faq-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className="max-w-[64ch] pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}