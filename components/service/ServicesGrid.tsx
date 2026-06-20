import Link from "next/link";
import { ArrowRight, Home, Layers, LogOut, RefreshCw, Key, Sparkles, Building2, Hammer } from "lucide-react";
import type { ElementType } from "react";
import { Reveal } from "@/components/Reveal";

const SERVICES_GRID: { name: string; slug: string; desc: string; icon: ElementType }[] = [
  { name: "Standard Cleaning", slug: "standard-cleaning", desc: "Regular upkeep for a spotless home", icon: Home },
  { name: "Deep Cleaning", slug: "deep-cleaning", desc: "Top-to-bottom detail for a full reset", icon: Layers },
  { name: "Move Out Cleaning", slug: "move-out-cleaning", desc: "Landlord-approved deposit-protection cleans", icon: LogOut },
  { name: "Recurring Cleaning", slug: "recurring-cleaning", desc: "Weekly/bi-weekly/monthly with discounts", icon: RefreshCw },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning", desc: "Fast 5-star guest-ready turnovers", icon: Key },
  { name: "One-Time Cleaning", slug: "one-time-cleaning", desc: "One clean, no commitment, all the shine", icon: Sparkles },
  { name: "Vacation Rental Cleaning", slug: "vacation-rental-cleaning", desc: "Reliable between-guest cleans", icon: Building2 },
  { name: "Post Construction Cleaning", slug: "post-construction-cleaning", desc: "Dust, debris, and detail after renovation", icon: Hammer },
];

type ServicesGridProps = {
  /** Slug of the current page — that tile becomes non-link, aria-current */
  currentSlug: string;
};

export function ServicesGrid({ currentSlug }: ServicesGridProps) {
  return (
    <section className="w-full section-band bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[#0F1626] font-bold mb-8 leading-snug"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_GRID.map(({ name, slug, desc, icon: Icon }, i) => {
            const isCurrent = slug === currentSlug;
            const inner = (
              <>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isCurrent
                      ? "bg-[#253858]/20"
                      : "bg-[#253858]/10 group-hover:bg-[#253858]/20"
                  }`}
                >
                  <Icon className="w-5 h-5 text-[#253858]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className={`font-bold text-sm mb-1 transition-colors ${
                      isCurrent
                        ? "text-[#253858]"
                        : "text-[#0F1626] group-hover:text-[#253858]"
                    }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {name}
                  </p>
                  <p className="text-[#475873] text-xs leading-relaxed">{desc}</p>
                </div>
                <span
                  className={`text-[#253858] text-xs font-medium inline-flex items-center gap-1 mt-auto ${
                    isCurrent ? "" : ""
                  }`}
                >
                  {isCurrent ? (
                    "Current page"
                  ) : (
                    <>
                      View <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </>
                  )}
                </span>
              </>
            );

            if (isCurrent) {
              return (
                <div
                  key={slug}
                  aria-current="page"
                  className="flex flex-col gap-3 bg-[#253858]/5 border border-[#253858]/40 rounded-xl p-5"
                >
                  {inner}
                </div>
              );
            }
            return (
              <Reveal key={slug} as="div" variant="up" delay={i * 80} className="flex flex-col">
                <Link
                  href={`/services/${slug}`}
                  className="group flex flex-col flex-1 gap-3 bg-[#F4F6FA] border border-[#E2E8F2] rounded-xl p-5 card-lift card-glow transition-colors hover:border-[#253858]/30"
                >
                  {inner}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
