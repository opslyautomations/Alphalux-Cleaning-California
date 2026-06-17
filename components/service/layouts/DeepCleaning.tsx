import { Clock } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Comparison } from "@/components/service/Comparison";
import { Band } from "@/components/service/Band";
import { Bento, BentoItem } from "@/components/service/Bento";
import { Split } from "@/components/service/Split";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

// Five problem cards extracted from the "Problems We Solve" section
const PROBLEM_CARDS = [
  {
    heading: "Hard-water scale",
    html: "<p>Mineral deposits on glass and fixtures that routine cleaning never dissolves.</p>",
    span: 4,
  },
  {
    heading: "Baked-on oven grease",
    html: "<p>Carbonised buildup inside the oven and on range hoods that ignores regular wiping.</p>",
    span: 4,
  },
  {
    heading: "Gray grout",
    html: "<p>Grout lines that have gone dark with mold, soap, and mineral build-up over time.</p>",
    span: 4,
  },
  {
    heading: "Unreachable dust",
    html: "<p>Ceiling fans, vent covers, blinds, and behind-furniture grime invisible to a quick clean.</p>",
    span: 6,
  },
  {
    heading: '"Clean but not clean"',
    html: "<p>That persistent staleness after a long stretch without real professional attention — the reset that makes rooms feel genuinely new.</p>",
    span: 6,
  },
];

export default function DeepCleaningLayout({ data, slug }: Props) {
  const reaches = sec(data.sections, "What Deep Cleaning Reaches");
  const timeReality = sec(data.sections, "The Time Reality");
  const valueReset = sec(data.sections, "The Value of a Full Reset");
  const nonToxic = sec(data.sections, "Non-Toxic Throughout");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  // Comparison: deep card (dark) vs standard baseline reminder (light)
  const standardBaselineHtml = `<p>A standard clean maintains a home that's already in good shape — surfaces, floors, kitchen, and bathrooms on a routine basis. Deep cleaning adds all the detailed work that builds up over time: inside appliances, baseboards, grout, window interiors, and behind furniture.</p>`;

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="Deep Cleaning"
        h1={data.h1}
        lead={data.lead}
        chips={["Full reset", "4–8 hours", "Detail work"]}
        tone="light"
      />

      {/* 2. Comparison: what deep reaches vs standard baseline */}
      <Comparison
        sectionTone="mist"
        left={{ heading: reaches.h2, html: reaches.html, tone: "dark" }}
        right={{ heading: "vs. Standard Cleaning", html: standardBaselineHtml, tone: "light" }}
      />

      {/* 3. Dark band: Time Reality (signature) */}
      <Band tone="dark">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="display-numeral text-white">4–8 hrs</span>
            <p className="text-white/65 text-sm mt-2 leading-relaxed">
              Typical professional deep clean
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="eyebrow eyebrow--dark mb-3">The Time Reality</p>
            <h2
              className="text-white font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
            >
              {timeReality.h2}
            </h2>
            <div
              className="service-content service-content--dark"
              dangerouslySetInnerHTML={{ __html: timeReality.html }}
            />
          </div>
        </div>
      </Band>

      {/* 4. Bento: Problems We Solve */}
      <Bento sectionTone="light" eyebrow="Why Clients Book" heading="Problems We Solve">
        {PROBLEM_CARDS.map((card) => (
          <BentoItem key={card.heading} span={card.span}>
            <div className="card h-full">
              <h3
                className="text-[#0F1626] font-bold text-lg mb-3 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.heading}
              </h3>
              <div className="service-content" dangerouslySetInnerHTML={{ __html: card.html }} />
            </div>
          </BentoItem>
        ))}
      </Bento>

      {/* 5. Split: Value of a Full Reset */}
      <Split
        heading={valueReset.h2}
        html={valueReset.html}
        sectionTone="mist"
        visual={
          <div className="card--dark w-full min-h-[200px] flex items-center justify-center rounded-2xl">
            <div className="text-center px-6">
              <p className="display-numeral text-white mb-3">Reset</p>
              <p className="text-white/65 text-sm leading-relaxed">
                A deep clean resets the baseline so routine visits can maintain — not catch up.
              </p>
            </div>
          </div>
        }
      />

      {/* 6. Split: Non-Toxic Throughout */}
      <Split
        heading={nonToxic.h2}
        html={nonToxic.html}
        sectionTone="light"
        reverse
        visual={
          <div className="card--mist w-full min-h-[180px] flex items-center justify-center rounded-2xl">
            <Clock className="w-16 h-16 text-[#253858]/30" aria-hidden="true" />
          </div>
        }
      />

      {/* 7. Related + Where We Serve */}
      <section className="w-full section-band bg-[#F4F6FA]">
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

      {/* 8. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="light" />

      {/* 9. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 10. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
