import { Shield } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Timeline } from "@/components/service/Timeline";
import { Band } from "@/components/service/Band";
import { StatRow } from "@/components/service/StatRow";
import { Split } from "@/components/service/Split";
import { Comparison } from "@/components/service/Comparison";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

// Three timeline steps from "The 3-Phase Process" section
const PHASES = [
  {
    number: 1,
    heading: "Phase 1 — Rough Clean",
    html: "<p>Clear large debris, packaging, drywall scraps, and stickers; remove nails and sharps; sweep and HEPA-vacuum the heavy dust layer; wipe surfaces top-down to make the detail phase efficient.</p>",
  },
  {
    number: 2,
    heading: "Phase 2 — Detail / Light Clean",
    html: "<p>The precision pass — HEPA-vacuum every surface, hidden cavity, and vent; microfiber-wipe walls, doors, trim, and cabinetry; polish fixtures and hardware; clean appliances; streak-free interior windows, sills, and tracks.</p>",
  },
  {
    number: 3,
    heading: "Phase 3 — Final Clean",
    html: "<p>The move-in-ready pass just before occupancy — polish, glass, floors, and a final detail so the space looks fully finished.</p>",
  },
];

export default function PostConstructionLayout({ data, slug }: Props) {
  const phases = sec(data.sections, "The 3-Phase Process");
  const timing = sec(data.sections, "Why Timing Matters");
  const cantDoThis = sec(data.sections, "Why Regular Cleaning Can't Do This");
  const safety = sec(data.sections, "Safety and Health Considerations");
  const finishes = sec(data.sections, "Protecting New Finishes");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="Post-Construction"
        h1={data.h1}
        lead={data.lead}
        chips={["HEPA filtration", "3-phase", "Finish-safe"]}
        tone="light"
      />

      {/* 2. Timeline (signature) */}
      <section className="w-full section-band bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">Our Process</p>
          <h2
            className="text-[#0F1626] font-bold mb-10 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
          >
            {phases.h2}
          </h2>
          <div className="space-y-8">
            {PHASES.map((phase) => (
              <div key={phase.number} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#253858] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {phase.number}
                </div>
                <div className="card flex-1" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  <h3
                    className="text-[#0F1626] font-bold text-lg mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {phase.heading}
                  </h3>
                  <div className="service-content" dangerouslySetInnerHTML={{ __html: phase.html }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dark band: hazard stats (signature) */}
      <Band tone="dark">
        <p className="eyebrow eyebrow--dark mb-6">Safety &amp; Health</p>
        <StatRow
          cardTone="light"
          stats={[
            {
              numeral: "99.97%",
              label: "HEPA particle capture",
              sublabel: "At 0.3 microns — including drywall and silica dust",
            },
            {
              numeral: "50 µg/m³",
              label: "OSHA silica limit",
              sublabel: "8-hour day average. We use HEPA capture and damp methods, not dry sweeping.",
            },
          ]}
        />
        <div className="mt-8 max-w-2xl">
          <div
            className="service-content service-content--dark"
            dangerouslySetInnerHTML={{ __html: safety.html }}
          />
        </div>
      </Band>

      {/* 4. Split: Why Timing Matters */}
      <Split
        heading={timing.h2}
        html={timing.html}
        sectionTone="light"
        visual={
          <div className="card--dark w-full min-h-[200px] flex flex-col items-center justify-center rounded-2xl px-6 text-center gap-3">
            <span className="display-numeral text-white">24–48h</span>
            <p className="text-white/70 text-sm leading-relaxed">
              Fine dust stays airborne after the detail pass. Timing the final clean after the air clears is what makes results last.
            </p>
          </div>
        }
      />

      {/* 5. Comparison: Why Regular Cleaning Can't vs Protecting Finishes */}
      <Comparison
        sectionTone="mist"
        left={{ heading: cantDoThis.h2, html: cantDoThis.html, tone: "dark" }}
        right={{ heading: finishes.h2, html: finishes.html, tone: "light" }}
      />

      {/* 6. Related + Where We Serve */}
      <section className="w-full section-band bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-[#0F1626] font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem,2vw,1.5rem)" }}
            >
              {related.h2}
            </h2>
            <div className="service-content" dangerouslySetInnerHTML={{ __html: related.html }} />
          </div>
          <div>
            <h2
              className="text-[#0F1626] font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem,2vw,1.5rem)" }}
            >
              {whereWeServe.h2}
            </h2>
            <div className="service-content" dangerouslySetInnerHTML={{ __html: whereWeServe.html }} />
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="mist" />

      {/* 8. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 9. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
