import { CalendarCheck } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Bento, BentoItem } from "@/components/service/Bento";
import { Split } from "@/components/service/Split";
import { Band } from "@/components/service/Band";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

// Five turnover checklist cards derived from the "What a Turnover Includes" section
const TURNOVER_CARDS = [
  {
    heading: "Linens & Laundry",
    html: "<p>Strip beds, launder or swap sheets and towels, remake beds to a crisp, hotel-style standard.</p>",
    span: 7,
  },
  {
    heading: "Bathrooms & Kitchen",
    html: "<p>Disinfect and shine; clear the dishwasher; check the fridge for left-behind food.</p>",
    span: 5,
  },
  {
    heading: "Restock Consumables",
    html: "<p>Toilet paper, paper towels, soap, coffee, trash bags, and your welcome items — you supply or we coordinate.</p>",
    span: 4,
  },
  {
    heading: "Reset & Stage",
    html: "<p>Trash out, surfaces wiped, the space staged back to listing-photo condition.</p>",
    span: 4,
  },
  {
    heading: "Damage Check",
    html: "<p>We flag anything broken, stained, or missing so you can address it before the next check-in.</p>",
    span: 4,
  },
];

export default function AirbnbCleaningLayout({ data, slug }: Props) {
  const turnover = sec(data.sections, "What a Turnover Includes");
  const sameDayNext = sec(data.sections, "Same-Day and Next-Day Turnovers");
  const hostEcon = sec(data.sections, "Host Economics");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="Airbnb Turnover"
        h1={data.h1}
        lead={data.lead}
        chips={["Same-day", "Next-day", "Calendar-synced"]}
        tone="light"
      />

      {/* 2. Bento: turnover checklist (signature) */}
      <Bento sectionTone="mist" eyebrow="What We Do" heading={turnover.h2}>
        {TURNOVER_CARDS.map((card) => (
          <BentoItem key={card.heading} span={card.span}>
            <div className="card h-full">
              <h3
                className="text-[#0F1626] font-bold text-lg mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.heading}
              </h3>
              <div className="service-content" dangerouslySetInnerHTML={{ __html: card.html }} />
            </div>
          </BentoItem>
        ))}
      </Bento>

      {/* 3. Split: Same-Day and Next-Day */}
      <Split
        heading={sameDayNext.h2}
        html={sameDayNext.html}
        sectionTone="light"
        visual={
          <div className="card--dark w-full min-h-[200px] flex flex-col items-center justify-center rounded-2xl px-6 text-center gap-3">
            <span className="display-numeral text-white">1.5–3</span>
            <p className="text-white/70 text-sm leading-relaxed">hours typical turnover</p>
          </div>
        }
      />

      {/* 4. Dark band: Host Economics (signature) */}
      <Band tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow--dark mb-3">Host Economics</p>
          <h2
            className="text-white font-bold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem,3vw,2.25rem)" }}
          >
            {hostEcon.h2}
          </h2>
          <div
            className="service-content service-content--dark"
            dangerouslySetInnerHTML={{ __html: hostEcon.html }}
          />
        </div>
      </Band>

      {/* 5. Related + Where We Serve */}
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

      {/* 6. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="mist" />

      {/* 7. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 8. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
