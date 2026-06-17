"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="card overflow-hidden" style={{ padding: 0 }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F4F6FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253858] focus-visible:ring-inset"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[#0F1626] pr-4 text-base leading-snug">
              {faq.q}
            </span>
            <ChevronDown
              className="w-5 h-5 text-[#253858] shrink-0 transition-transform duration-300 motion-reduce:transition-none"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            />
          </button>
          {/* Smooth expand using grid trick — works without JS height measurement */}
          <div
            className="grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div
                className="px-6 pb-5 text-[#475873] leading-relaxed text-sm faq-answer"
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
