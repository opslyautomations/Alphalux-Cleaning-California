type ComparisonSide = {
  heading: string;
  html: string;
  tone?: "light" | "dark";
};

type ComparisonProps = {
  left: ComparisonSide;
  right: ComparisonSide;
  sectionTone?: "light" | "mist";
  /** Heading shown above the grid (optional) */
  eyebrow?: string;
};

/** Two facing cards (light + dark) to compare two options/scopes */
export function Comparison({ left, right, sectionTone = "light", eyebrow }: ComparisonProps) {
  const bg = sectionTone === "mist" ? "bg-[#F4F6FA]" : "bg-white";

  const renderSide = (side: ComparisonSide) => {
    const isDark = side.tone === "dark";
    return (
      <div className={isDark ? "card--dark h-full" : "card h-full"}>
        <h3
          className={`font-bold text-xl mb-4 leading-snug ${isDark ? "text-white" : "text-[#0F1626]"}`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {side.heading}
        </h3>
        <div
          className={`service-content ${isDark ? "service-content--dark" : ""}`}
          dangerouslySetInnerHTML={{ __html: side.html }}
        />
      </div>
    );
  };

  return (
    <section className={`w-full section-band ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7">{renderSide(left)}</div>
          <div className="lg:col-span-5">{renderSide(right)}</div>
        </div>
      </div>
    </section>
  );
}
