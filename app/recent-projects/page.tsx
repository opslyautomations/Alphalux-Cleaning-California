import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Recent Projects | AlphaLux Cleaning Case Studies",
  description:
    "AlphaLux Cleaning recent projects across Texas & California. Post-construction, Airbnb turnovers, move-out cleans, recurring estate service and more.",
  alternates: { canonical: `${BASE_URL}/recent-projects` },
  openGraph: {
    type: "website",
    title: "Recent Projects | AlphaLux Cleaning Case Studies",
    description: "Real cleaning jobs, real outcomes. AlphaLux recent projects across TX & CA.",
    url: `${BASE_URL}/recent-projects`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/recent-projects.png`, secureUrl: `${BASE_URL}/og/recent-projects.png`, width: 1200, height: 630, alt: "AlphaLux Cleaning Recent Projects", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Recent Projects | AlphaLux Cleaning", description: "Real cleaning jobs, real outcomes in TX & CA.", images: [`${BASE_URL}/og/recent-projects.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#C9A961" },
};

const PROJECTS = [
  { type: "Post-Construction Clean", city: "Houston, TX", service: "post-construction-cleaning", detail: "3,400 sq ft home after kitchen + primary bath remodel. 8-hour full detail clean with HEPA equipment — dust, debris, grout, and fixtures fully detailed. Move-in ready.", outcome: "Move-in ready same day." },
  { type: "Airbnb Turnover", city: "Austin, TX", service: "airbnb-cleaning", detail: "2BR downtown condo, 3-hour window between guests. Full reset, fresh linens, restock check, damage report submitted to host.", outcome: "5-star guest review received." },
  { type: "Move Out Deep Clean", city: "Santa Monica, CA", service: "move-out-cleaning", detail: "1,200 sq ft apartment, full empty-unit deep clean. Inside appliances, inside cabinets, window tracks, baseboards, bathrooms, all floors.", outcome: "Full deposit returned by landlord." },
  { type: "Recurring Bi-Weekly", city: "Beverly Hills, CA", service: "recurring-cleaning", detail: "4,500 sq ft estate on bi-weekly recurring plan. Consistent team every visit. All eco-friendly, non-toxic products. Priority scheduling maintained throughout.", outcome: "14+ months of ongoing service." },
  { type: "Vacation Rental Reset", city: "Huntington Beach, CA", service: "vacation-rental-cleaning", detail: "3BR beachfront property between peak summer rentals. Full interior clean plus patio and outdoor furniture detail. Supply check and host report included.", outcome: "5-star listing maintained." },
  { type: "Deep Clean", city: "Dallas, TX", service: "deep-cleaning", detail: "2,800 sq ft family home, first deep clean in 2 years. Baseboards, inside appliances, grout scrubbing, vent dusting, blinds, and hard-to-reach buildup fully addressed.", outcome: "Client started recurring bi-weekly plan." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Recent Projects", item: `${BASE_URL}/recent-projects` },
  ],
};

export default function RecentProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A961]">Recent Projects</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Case Studies</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Recent Projects &amp; Client Results
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A sample of recent work across Texas and California — real jobs, real outcomes, real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.type + p.city}
                className="border border-[#C9A961]/20 rounded-xl p-7 card-hover bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C9A961] text-xs font-semibold uppercase tracking-wider bg-[#C9A961]/8 px-3 py-1 rounded-full">
                    {p.type}
                  </span>
                  <span className="text-[#C9A961] text-sm">★★★★★</span>
                </div>
                <p className="text-[#0A0A0A] font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{p.city}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.detail}</p>
                <div className="pt-4 border-t border-[#C9A961]/10 flex items-center justify-between">
                  <p className="text-[#C9A961] text-sm font-medium">✓ {p.outcome}</p>
                  <Link href={`/services/${p.service}`} className="text-gray-400 hover:text-[#C9A961] transition-colors text-xs flex items-center gap-1">
                    This Service <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Ready to Add Your Project to This List?
          </h2>
          <p className="text-gray-400 mb-8">Join hundreds of satisfied clients across Texas and California.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-7 py-4 rounded-lg hover:bg-[#D4B876] transition-colors">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 border border-[#C9A961] text-[#C9A961] font-semibold px-7 py-4 rounded-lg hover:bg-[#C9A961]/10 transition-colors">
              <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
