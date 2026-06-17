import React from "react";

type SplitProps = {
  heading: string;
  html: string;
  /** ReactNode rendered on the visual side */
  visual?: React.ReactNode;
  reverse?: boolean;
  sectionTone?: "light" | "mist";
  eyebrow?: string;
};

/** 2-column split: text (7 cols) + visual accent (5 cols) */
export function Split({ heading, html, visual, reverse = false, sectionTone = "light", eyebrow }: SplitProps) {
  const bg = sectionTone === "mist" ? "bg-[#F4F6FA]" : "bg-white";

  const textSide = (
    <div className="flex flex-col justify-center">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className="text-[#0F1626] font-bold mb-5 leading-snug"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
        }}
      >
        {heading}
      </h2>
      <div className="service-content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );

  const visualSide = (
    <div className="flex items-center justify-center">
      {visual ?? (
        <div className="card--mist w-full min-h-[180px] flex items-center justify-center rounded-2xl">
          <div className="w-20 h-20 rounded-full bg-[#253858]/10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#253858]/20" />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className={`w-full section-band ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            {textSide}
          </div>
          <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            {visualSide}
          </div>
        </div>
      </div>
    </section>
  );
}
