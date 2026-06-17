import { Leaf } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Comparison } from "@/components/service/Comparison";
import { Band } from "@/components/service/Band";
import { Split } from "@/components/service/Split";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

export default function StandardCleaningLayout({ data, slug }: Props) {
  const covers = sec(data.sections, "What a Standard Clean Covers");
  const doesnt = sec(data.sections, "What Standard Doesn't Include");
  const baseline = sec(data.sections, "A Predictable Baseline, Every Visit");
  const nonToxic = sec(data.sections, "Non-Toxic, Family-Safe Products");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="Standard Cleaning"
        h1={data.h1}
        lead={data.lead}
        chips={["Maintenance clean", "Fixed checklist", "Non-toxic"]}
        tone="light"
      />

      {/* 2. Signature: Included vs Excluded comparison */}
      <Comparison
        sectionTone="mist"
        left={{ heading: covers.h2, html: covers.html, tone: "light" }}
        right={{ heading: doesnt.h2, html: doesnt.html, tone: "dark" }}
      />

      {/* 3. Dark band: predictable baseline */}
      <Band tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow--dark mb-3">The AlphaLux Promise</p>
          <h2
            className="text-white font-bold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem,3vw,2.25rem)" }}
          >
            {baseline.h2}
          </h2>
          <div
            className="service-content service-content--dark"
            dangerouslySetInnerHTML={{ __html: baseline.html }}
          />
        </div>
      </Band>

      {/* 4. Split: Non-Toxic */}
      <Split
        heading={nonToxic.h2}
        html={nonToxic.html}
        sectionTone="light"
        visual={
          <div className="card--mist w-full min-h-[200px] flex items-center justify-center rounded-2xl">
            <div className="w-20 h-20 rounded-full bg-[#253858]/15 flex items-center justify-center">
              <Leaf className="w-10 h-10 text-[#253858]" aria-hidden="true" />
            </div>
          </div>
        }
      />

      {/* 5. Related services */}
      <section className="w-full section-band bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[#0F1626] font-bold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem,2vw,1.5rem)" }}
          >
            {related.h2}
          </h2>
          <div className="service-content" dangerouslySetInnerHTML={{ __html: related.html }} />
        </div>
      </section>

      {/* 6. Where we serve */}
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

      {/* 7. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="mist" />

      {/* 8. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 9. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
