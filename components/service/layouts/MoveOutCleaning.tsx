import { CheckCircle2 } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Bento, BentoItem } from "@/components/service/Bento";
import { Comparison } from "@/components/service/Comparison";
import { Split } from "@/components/service/Split";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

export default function MoveOutCleaningLayout({ data, slug }: Props) {
  const whoFor = sec(data.sections, "Who This Is For");
  const checklist = sec(data.sections, "The Move-Out Checklist");
  const emptyUnit = sec(data.sections, "Why an Empty Unit Matters");
  const deposit = sec(data.sections, "Protecting Your Deposit");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  // Deposit comparison sides
  const depositCostHtml = `<p>The cost of a professional move-out clean is almost always a fraction of what a withheld deposit or a landlord's cleaning charge amounts to — and it removes the single most-cited reason deposits get docked.</p>`;
  const depositRiskHtml = `<p>Only 41% of renters get their full security deposit back. Cleaning deductions are one of the most common reasons it's withheld — a charge that often far exceeds the cost of a professional clean.</p>`;

  return (
    <>
      {/* 1. DARK hero with 41% stat */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="Move-Out Cleaning"
        h1={data.h1}
        lead={data.lead}
        tone="dark"
        statNumeral="41%"
        statLabel="of renters get their full security deposit back. Cleaning deductions are one of the most common reasons it's withheld."
      />

      {/* 2. Bento: two-audience */}
      <Bento sectionTone="light" eyebrow="Who This Serves" heading={whoFor.h2}>
        <BentoItem span={6}>
          <div className="card h-full">
            <h3
              className="text-[#0F1626] font-bold text-lg mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              End-of-Lease Tenants
            </h3>
            <p className="text-[#475873] leading-relaxed">
              You want your deposit back. We clean to the areas landlords actually inspect — inside appliances, bathrooms, baseboards, and floors — so the walk-through goes smoothly.
            </p>
          </div>
        </BentoItem>
        <BentoItem span={6}>
          <div className="card--dark h-full">
            <h3
              className="text-white font-bold text-lg mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Realtors, Landlords &amp; PMs
            </h3>
            <p className="text-white/80 leading-relaxed">
              You need a unit turn-ready for the next occupant or a listing. Same detailed clean, documented and done to inspection standard, ready to show or hand over.
            </p>
          </div>
        </BentoItem>
      </Bento>

      {/* 3. Checklist section (signature) */}
      <section className="w-full section-band bg-[#F4F6FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">Inspector Checklist</p>
          <h2
            className="text-[#0F1626] font-bold mb-8 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
          >
            {checklist.h2}
          </h2>
          <div className="card">
            <div className="service-content" dangerouslySetInnerHTML={{ __html: checklist.html }} />
          </div>
        </div>
      </section>

      {/* 4. Comparison: deposit math */}
      <Comparison
        sectionTone="light"
        left={{
          heading: "Cost of a Professional Clean",
          html: depositCostHtml,
          tone: "light",
        }}
        right={{
          heading: "A Withheld Deposit",
          html: depositRiskHtml,
          tone: "dark",
        }}
        eyebrow="Protecting Your Deposit"
      />

      {/* 5. Split: Why Empty Unit Matters */}
      <Split
        heading={emptyUnit.h2}
        html={emptyUnit.html}
        sectionTone="mist"
        visual={
          <div className="card--dark w-full min-h-[200px] flex flex-col items-center justify-center rounded-2xl gap-4 px-6 text-center">
            <CheckCircle2 className="w-12 h-12 text-white/60" aria-hidden="true" />
            <p className="text-white/80 text-sm leading-relaxed">
              Schedule the clean after the movers are out and before your final walk-through.
            </p>
          </div>
        }
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
