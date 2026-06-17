import React from "react";

// Span values mapped to explicit Tailwind classes (must appear as literals for v4 scanning)
const lgColSpanClass: Record<number, string> = {
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  12: "lg:col-span-12",
};

type BentoItemProps = {
  /** Column span (1–12) on lg+ screens — collapses to full width on mobile */
  span?: number;
  children: React.ReactNode;
  className?: string;
};

export function BentoItem({ span = 12, children, className = "" }: BentoItemProps) {
  const spanClass = lgColSpanClass[span] ?? "lg:col-span-12";
  return (
    <div className={`col-span-12 ${spanClass} ${className}`}>{children}</div>
  );
}

type BentoProps = {
  children: React.ReactNode;
  sectionTone?: "light" | "mist";
  eyebrow?: string;
  heading?: string;
  className?: string;
};

/** 12-column CSS grid. Use BentoItem children with span prop. Collapses to 1-col on mobile. */
export function Bento({ children, sectionTone = "light", eyebrow, heading, className = "" }: BentoProps) {
  const bg = sectionTone === "mist" ? "bg-[#F4F6FA]" : "bg-white";
  return (
    <section className={`w-full section-band ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading) && (
          <div className="mb-10">
            {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
            {heading && (
              <h2
                className="text-[#0F1626] font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                }}
              >
                {heading}
              </h2>
            )}
          </div>
        )}
        <div className={`grid grid-cols-12 gap-6 ${className}`}>{children}</div>
      </div>
    </section>
  );
}
