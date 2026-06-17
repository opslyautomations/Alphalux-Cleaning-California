import { Sparkles } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Bento, BentoItem } from "@/components/service/Bento";
import { Comparison } from "@/components/service/Comparison";
import { Band } from "@/components/service/Band";
import { Split } from "@/components/service/Split";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

// Five occasion cards from "When People Book a One-Time Clean"
const OCCASION_CARDS = [
  {
    heading: "Before Company Arrives",
    html: "<p>Parents, in-laws, or a dinner party — and you want the place to look effortless.</p>",
    span: 6,
  },
  {
    heading: "After an Event or Party",
    html: "<p>The cleanup nobody wants to do the morning after.</p>",
    span: 6,
  },
  {
    heading: "Catching Up",
    html: "<p>Life got busy, the house got away from you, and you want a single reset to get back to zero.</p>",
    span: 4,
  },
  {
    heading: "Seasonal Refresh",
    html: "<p>A spring or holiday top-to-bottom without a standing commitment.</p>",
    span: 4,
  },
  {
    heading: "Trying Us Out",
    html: "<p>Many clients book a one-time clean first, then decide whether to continue.</p>",
    span: 4,
  },
];

// Scope comparison card content
const STANDARD_SCOPE_HTML = `<p>Pick a standard clean if the home is already in decent shape and just needs a refresh — surfaces, floors, kitchen, and bathrooms maintained on a one-off basis.</p><p><strong>Typical time:</strong> 1.5–3 hours</p>`;
const DEEP_SCOPE_HTML = `<p>Pick a deep clean if it's overdue, hosting a big occasion, or hasn't had professional attention in a while. Adds inside appliances, grout, baseboards, and window interiors.</p><p><strong>Typical time:</strong> 4–8 hours</p>`;

export default function OneTimeCleaningLayout({ data, slug }: Props) {
  const occasions = sec(data.sections, "When People Book a One-Time Clean");
  const scopeChooser = sec(data.sections, "Standard or Deep — You Choose");
  const freedom = sec(data.sections, "Freedom and No Commitment");
  const keepItGoing = sec(data.sections, "Loved the Result? Keep It Going");
  const nonToxic = sec(data.sections, "Non-Toxic From the First Visit");
  const whereWeServe = sec(data.sections, "Where We Serve");

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="One-Time Clean"
        h1={data.h1}
        lead={data.lead}
        chips={["No contract", "Single visit", "Standard or deep"]}
        tone="light"
      />

      {/* 2. Bento: occasions (signature) */}
      <Bento sectionTone="mist" eyebrow="Common Occasions" heading={occasions.h2}>
        {OCCASION_CARDS.map((card) => (
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

      {/* 3. Comparison: scope chooser (signature) */}
      <Comparison
        sectionTone="light"
        eyebrow="Standard or Deep — You Choose"
        left={{ heading: "Standard Clean", html: STANDARD_SCOPE_HTML, tone: "light" }}
        right={{ heading: "Deep Clean", html: DEEP_SCOPE_HTML, tone: "dark" }}
      />

      {/* 4. Dark band: Freedom and No Commitment */}
      <Band tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow--dark mb-3">No Strings</p>
          <h2
            className="text-white font-bold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem,3vw,2.25rem)" }}
          >
            {freedom.h2}
          </h2>
          <div
            className="service-content service-content--dark"
            dangerouslySetInnerHTML={{ __html: freedom.html }}
          />
        </div>
      </Band>

      {/* 5. Split: Loved the Result? */}
      <Split
        heading={keepItGoing.h2}
        html={keepItGoing.html}
        sectionTone="light"
        visual={
          <div className="card--mist w-full min-h-[180px] flex items-center justify-center rounded-2xl">
            <Sparkles className="w-16 h-16 text-[#253858]/30" aria-hidden="true" />
          </div>
        }
      />

      {/* 6. Split: Non-Toxic */}
      <Split
        heading={nonToxic.h2}
        html={nonToxic.html}
        sectionTone="mist"
        reverse
        visual={
          <div className="card--mist w-full min-h-[180px] flex items-center justify-center rounded-2xl">
            <div className="text-center px-6">
              <p className="display-numeral text-[#253858]/40">0</p>
              <p className="text-[#475873] text-sm mt-1">bleach or ammonia</p>
            </div>
          </div>
        }
      />

      {/* 7. Where We Serve */}
      <section className="w-full section-band bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[#0F1626] font-bold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem,2vw,1.5rem)" }}
          >
            {whereWeServe.h2}
          </h2>
          <div className="service-content" dangerouslySetInnerHTML={{ __html: whereWeServe.html }} />
        </div>
      </section>

      {/* 8. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="mist" />

      {/* 9. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 10. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
