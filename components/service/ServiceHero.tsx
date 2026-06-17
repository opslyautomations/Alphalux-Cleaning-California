import Link from "next/link";
import { ChipRow } from "./ChipRow";

type ServiceHeroProps = {
  /** slug used only for breadcrumb, not routing */
  breadcrumbName: string;
  eyebrow: string;
  h1: string;
  /** Lead paragraph — shown in hero instead of a separate section */
  lead: string;
  chips?: string[];
  /** light = white bg (default); dark = navy-800 bg */
  tone?: "light" | "dark";
  /** For dark hero only: big display numeral */
  statNumeral?: string;
  /** For dark hero only: sentence describing the stat */
  statLabel?: string;
};

export function ServiceHero({
  breadcrumbName,
  eyebrow,
  h1,
  lead,
  chips,
  tone = "light",
  statNumeral,
  statLabel,
}: ServiceHeroProps) {
  const isDark = tone === "dark";
  const bg = isDark ? "bg-[#253858]" : "bg-white";

  return (
    <section className={`pt-32 pb-16 lg:pt-40 lg:pb-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 flex-wrap text-sm list-none p-0 m-0">
            <li>
              <Link
                href="/"
                className={`transition-colors hover:underline ${
                  isDark ? "text-white/55 hover:text-white" : "text-[#475873] hover:text-[#253858]"
                }`}
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className={isDark ? "text-white/30" : "text-[#E2E8F2]"}>
              /
            </li>
            <li>
              <Link
                href="/services"
                className={`transition-colors hover:underline ${
                  isDark ? "text-white/55 hover:text-white" : "text-[#475873] hover:text-[#253858]"
                }`}
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true" className={isDark ? "text-white/30" : "text-[#E2E8F2]"}>
              /
            </li>
            <li>
              <span
                aria-current="page"
                className={isDark ? "text-white/80" : "text-[#253858]"}
              >
                {breadcrumbName}
              </span>
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className={`eyebrow mb-4 ${isDark ? "eyebrow--dark" : ""}`}>{eyebrow}</p>

          {/* Dark hero stat numeral */}
          {isDark && statNumeral && (
            <div className="mb-6">
              <span className="display-numeral text-white">{statNumeral}</span>
              {statLabel && (
                <p className="text-white/75 text-lg mt-2 leading-relaxed max-w-xl">
                  {statLabel}
                </p>
              )}
            </div>
          )}

          {/* H1 */}
          <h1
            className={`font-bold leading-tight mb-5 ${isDark ? "text-white" : "text-[#0F1626]"}`}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            {h1}
          </h1>

          {/* Lead */}
          <p
            className={`text-lg leading-relaxed mb-8 max-w-2xl ${
              isDark ? "text-white/75" : "text-[#475873]"
            }`}
          >
            {lead}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Chips */}
          {chips && chips.length > 0 && <ChipRow chips={chips} dark={isDark} />}
        </div>
      </div>
    </section>
  );
}
