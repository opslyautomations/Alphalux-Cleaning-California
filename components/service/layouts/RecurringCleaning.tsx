import { RefreshCw } from "lucide-react";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Bento, BentoItem } from "@/components/service/Bento";
import { Band } from "@/components/service/Band";
import { Split } from "@/components/service/Split";
import { FaqSection } from "@/components/service/FaqSection";
import { ServicesGrid } from "@/components/service/ServicesGrid";
import { CtaBand } from "@/components/service/CtaBand";
import type { ServiceEntry } from "@/lib/serviceTypes";
import { sec } from "@/lib/serviceTypes";

type Props = { data: ServiceEntry; slug: string };

export default function RecurringCleaningLayout({ data, slug }: Props) {
  const howSchedule = sec(data.sections, "How the Schedule Works");
  const whyCosts = sec(data.sections, "Why Recurring Costs Less Per Visit");
  const baseline = sec(data.sections, "Starting With a Clean Baseline");
  const nonToxic = sec(data.sections, "Non-Toxic on Every Visit");
  const related = sec(data.sections, "Related Services");
  const whereWeServe = sec(data.sections, "Where We Serve");

  return (
    <>
      {/* 1. Light hero */}
      <ServiceHero
        breadcrumbName={data.name}
        eyebrow="Recurring Cleaning"
        h1={data.h1}
        lead={data.lead}
        chips={["No lock-in", "Same crew", "Discounted rate"]}
        tone="light"
      />

      {/* 2. Cadence cards (signature) */}
      <Bento sectionTone="mist" eyebrow="How the Schedule Works" heading="Pick Your Cadence">
        {/* Weekly */}
        <BentoItem span={4}>
          <div className="card h-full">
            <p className="eyebrow mb-2">Weekly</p>
            <h3
              className="text-[#0F1626] font-bold text-xl mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Always Spotless
            </h3>
            <p className="text-[#475873] leading-relaxed text-sm">
              The home never drifts. Best for busy families, pet households, and anyone who wants it consistently spotless. Lowest per-visit effort, most consistent result.
            </p>
          </div>
        </BentoItem>
        {/* Bi-weekly (feature) */}
        <BentoItem span={4}>
          <div className="card--feature h-full relative">
            <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full bg-white/15 text-white/80">
              Most popular
            </span>
            <p className="eyebrow eyebrow--dark mb-2">Bi-Weekly</p>
            <h3
              className="text-white font-bold text-xl mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Best Balance
            </h3>
            <p className="text-white/80 leading-relaxed text-sm">
              The most popular cadence. Best balance of cost and cleanliness for most homes — clean enough to feel great, priced to fit a normal budget.
            </p>
          </div>
        </BentoItem>
        {/* Monthly */}
        <BentoItem span={4}>
          <div className="card h-full">
            <p className="eyebrow mb-2">Monthly</p>
            <h3
              className="text-[#0F1626] font-bold text-xl mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Periodic Reset
            </h3>
            <p className="text-[#475873] leading-relaxed text-sm">
              A lighter touch for tidy, low-traffic homes or solo households that just want a periodic reset without a frequent schedule.
            </p>
          </div>
        </BentoItem>
      </Bento>

      {/* 3. Split: Why Recurring Costs Less */}
      <Split
        heading={whyCosts.h2}
        html={whyCosts.html}
        sectionTone="light"
        visual={
          <div className="card--dark w-full min-h-[200px] flex flex-col items-center justify-center rounded-2xl px-6 text-center gap-4">
            <div className="space-y-1">
              {["Less buildup", "Less time per visit", "Lower per-visit rate"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/15 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-white/80 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* 4. Dark band: no lock-in */}
      <Band tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow--dark mb-3">Your Schedule, Your Terms</p>
          <h2
            className="text-white font-bold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem,3vw,2.25rem)" }}
          >
            A Schedule You Control — No Lock-In
          </h2>
          <p className="text-white/75 leading-relaxed text-lg">
            Recurring is a standing schedule you control — skip, pause, reschedule, or change frequency any time. We aim to send the same crew to each visit so they learn your home and your preferences, and you keep the same time slot.
          </p>
        </div>
      </Band>

      {/* 5. Split: Starting With a Clean Baseline */}
      <Split
        heading={baseline.h2}
        html={baseline.html}
        sectionTone="light"
        visual={
          <div className="card--mist w-full min-h-[180px] flex items-center justify-center rounded-2xl">
            <RefreshCw className="w-16 h-16 text-[#253858]/30" aria-hidden="true" />
          </div>
        }
      />

      {/* 6. Split: Non-Toxic on Every Visit */}
      <Split
        heading={nonToxic.h2}
        html={nonToxic.html}
        sectionTone="mist"
        reverse
        visual={
          <div className="card--mist w-full min-h-[180px] flex items-center justify-center rounded-2xl">
            <div className="text-center px-6">
              <p className="display-numeral text-[#253858]/40">100%</p>
              <p className="text-[#475873] text-sm mt-2">Non-toxic products, every visit</p>
            </div>
          </div>
        }
      />

      {/* 7. Related + Where We Serve */}
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

      {/* 8. FAQ */}
      <FaqSection faqs={data.faqs} sectionTone="mist" />

      {/* 9. Services grid */}
      <ServicesGrid currentSlug={slug} />

      {/* 10. CTA */}
      <CtaBand serviceName={data.name} />
    </>
  );
}
