import { Building2 } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { StatRow } from "@/components/service/StatRow";
import { Comparison } from "@/components/service/Comparison";
import { Bento, BentoItem } from "@/components/service/Bento";
import { Band } from "@/components/service/Band";
import { Split } from "@/components/service/Split";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

const PM_FEATURE_CARDS = [
  {
    heading: "Mid-Stay Cleans",
    html: "<p>For longer bookings (typically 5+ nights) — towel and linen refresh, trash, light surface reset. A guest-experience upsell on premium stays.</p>",
    span: 6,
  },
  {
    heading: "Inventory & Restock",
    html: "<p>We replenish consumables and note what's running low so you reorder before it's a problem.</p>",
    span: 6,
  },
  {
    heading: "Damage & Maintenance Reporting",
    html: "<p>We document anything broken, stained, or worn after each stay — with photos — so claims and repairs happen fast.</p>",
    span: 4,
  },
  {
    heading: "Safety-Device Checks",
    html: "<p>Confirm smoke and carbon-monoxide detectors are present and functioning — protecting guests and your liability.</p>",
    span: 4,
  },
  {
    heading: "Portfolio Consistency",
    html: "<p>Same checklist and standard applied across every property. A guest's experience doesn't depend on which unit they booked.</p>",
    span: 4,
  },
];

// Host vs Portfolio routing comparison
const SINGLE_HOST_HTML = `<p>Running a single Airbnb listing and mainly need fast same-day turnovers? The <a href="/services/airbnb-cleaning">Airbnb cleaning</a> page is built for that — checklist-driven turnovers synced to your calendar.</p>`;
const PORTFOLIO_HTML = `<p>Managing multiple units or a larger property across VRBO, Booking.com, and Airbnb? You're in the right place. Vacation rental cleaning adds mid-stay cleans, damage reporting, safety checks, and portfolio-level consistency.</p>`;

export default function VacationRentalLayout({ data, slug }: Props) {
  const pmGrade = sec(data.sections, "What Sets PM-Grade Cleaning Apart");
  const seasonal = sec(data.sections, "Seasonal Deep Cleans");
  const revenue = sec(data.sections, "The Revenue Case");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="For Owners & Managers"
        h1={data.h1}
        lead={data.lead}
        chips={["Multi-unit", "Mid-stay cleans", "Damage reporting"]}
        tone="light"
      />

      {/* 2. StatRow: Revenue Case (signature) */}
      <section className="w-full section-band bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">The Revenue Case</p>
          <h2
            className="text-[#0F1626] font-bold mb-8 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
          >
            Cleanliness Drives Revenue
          </h2>
          <StatRow
            cardTone="dark"
            stats={[
              {
                numeral: "~10%",
                label: "Higher occupancy",
                sublabel: "Listings rated 4.9+ stars vs. lower-rated competitors (AirDNA)",
              },
              {
                numeral: "~7.7%",
                label: "Higher nightly rate",
                sublabel: "Premium charged by top-rated listings per AirDNA data",
              },
              {
                numeral: "18%+",
                label: "More revenue",
                sublabel: "Total revenue advantage for 4.9+ rated listings year-over-year",
              },
            ]}
          />
        </div>
      </section>

      {/* 3. Comparison: Single host vs Portfolio */}
      <Comparison
        sectionTone="light"
        eyebrow="Which Service Fits You?"
        left={{ heading: "Single Airbnb Listing", html: SINGLE_HOST_HTML, tone: "light" }}
        right={{ heading: "Portfolio / Property Manager", html: PORTFOLIO_HTML, tone: "dark" }}
      />

      {/* 4. Bento: PM-grade features (signature) */}
      <Bento sectionTone="mist" eyebrow="PM-Grade Additions" heading={pmGrade.h2}>
        {PM_FEATURE_CARDS.map((card) => (
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

      {/* 5. Split: Seasonal Deep Cleans */}
      <Split
        heading={seasonal.h2}
        html={seasonal.html}
        sectionTone="light"
        visual={
          <div className="card--dark w-full min-h-[200px] flex flex-col items-center justify-center rounded-2xl px-6 text-center gap-3">
            <Building2 className="w-12 h-12 text-white/50" aria-hidden="true" />
            <p className="text-white/75 text-sm leading-relaxed">
              Quarterly or seasonal deep cleans keep high-traffic rentals from quietly degrading.
            </p>
          </div>
        }
      />

      {/* 6. Related + Where We Serve */}
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

      {/* 7. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="light" />

      {/* 8. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 9. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
