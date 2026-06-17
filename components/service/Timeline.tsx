type TimelineStep = {
  number: number;
  heading: string;
  html: string;
};

type TimelineProps = {
  steps: TimelineStep[];
  sectionTone?: "light" | "mist";
};

/** Vertical numbered timeline — use only when content is genuinely sequential */
export function Timeline({ steps, sectionTone = "light" }: TimelineProps) {
  const bg = sectionTone === "mist" ? "bg-[#F4F6FA]" : "bg-white";

  return (
    <section className={`w-full section-band ${bg}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              {/* Number marker */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#253858] flex items-center justify-center text-white font-bold text-lg shadow-md">
                {step.number}
              </div>
              {/* Content */}
              <div className="card flex-1" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <h3
                  className="text-[#0F1626] font-bold text-lg mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.heading}
                </h3>
                <div
                  className="service-content"
                  dangerouslySetInnerHTML={{ __html: step.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
