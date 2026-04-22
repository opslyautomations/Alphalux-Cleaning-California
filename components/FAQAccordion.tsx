"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[#C9A961]/20 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F8F7F4] transition-colors"
          >
            <span className="font-medium text-[#1A1A1A] pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
