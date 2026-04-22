import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, GBP_URL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AlphaLux Cleaning Reviews & Recent Projects | 5-Star Eco-Friendly Service",
  description:
    "Real reviews and recent project results from AlphaLux Cleaning clients across Texas & California. 5-star eco-friendly house cleaning in Dallas, Austin, Beverly Hills, LA & more.",
  alternates: { canonical: `${BASE_URL}/reviews` },
  openGraph: {
    type: "website",
    title: "AlphaLux Cleaning Reviews & Recent Projects | 5-Star Rated",
    description: "5-star client reviews and real project outcomes from AlphaLux — eco-friendly house cleaning across TX & CA.",
    url: `${BASE_URL}/reviews`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/reviews.png`, secureUrl: `${BASE_URL}/og/reviews.png`, width: 1200, height: 630, alt: "AlphaLux Cleaning Reviews & Projects", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "AlphaLux Cleaning Reviews & Projects", description: "Real 5-star reviews and project results from TX & CA clients.", images: [`${BASE_URL}/og/reviews.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#C9A961" },
};

const REVIEWS = [
  { name: "Sarah M.", city: "Dallas, TX", service: "Deep Cleaning", text: "AlphaLux deep cleaned our home before a family visit and it looked better than when we moved in. Non-toxic products were a huge plus with our toddler around." },
  { name: "Marcus T.", city: "Austin, TX", service: "Airbnb Cleaning", text: "I manage 4 Airbnbs in Austin and AlphaLux is the only team I trust for turnovers. Always on time, always guest-ready." },
  { name: "Jennifer L.", city: "Santa Monica, CA", service: "Move Out Cleaning", text: "Moved out of our apartment in Santa Monica and AlphaLux got us our full deposit back. Landlord was genuinely impressed." },
  { name: "David R.", city: "Beverly Hills, CA", service: "Recurring Cleaning", text: "Recurring bi-weekly cleaning has been a game-changer. Consistent, thorough, and my home always smells fresh without any chemical odor." },
  { name: "Amanda K.", city: "Houston, TX", service: "Post Construction Cleaning", text: "Post-construction clean after our kitchen remodel was flawless. Zero dust, zero residue, zero construction smell. Worth every dollar." },
  { name: "Priya S.", city: "Irvine, CA", service: "Standard Cleaning", text: "As a family with two kids and a dog, the non-toxic promise was why I picked AlphaLux. The quality of the clean is what keeps me booking." },
];

const PROJECTS = [
  { type: "Post-Construction Clean", city: "Houston, TX", service: "post-construction-cleaning", detail: "3,400 sq ft home after kitchen + primary bath remodel. 8-hour full detail clean with HEPA equipment — dust, debris, grout, and fixtures fully detailed.", outcome: "Move-in ready same day." },
  { type: "Airbnb Turnover", city: "Austin, TX", service: "airbnb-cleaning", detail: "2BR downtown condo, 3-hour window between guests. Full reset, fresh linens, restock check, damage report submitted to host.", outcome: "5-star guest review received." },
  { type: "Move Out Deep Clean", city: "Santa Monica, CA", service: "move-out-cleaning", detail: "1,200 sq ft apartment, full empty-unit deep clean. Inside appliances, inside cabinets, window tracks, baseboards, bathrooms, all floors.", outcome: "Full deposit returned by landlord." },
  { type: "Recurring Bi-Weekly", city: "Beverly Hills, CA", service: "recurring-cleaning", detail: "4,500 sq ft estate on bi-weekly recurring plan. Consistent team every visit. All eco-friendly, non-toxic products.", outcome: "14+ months of ongoing service." },
  { type: "Vacation Rental Reset", city: "Huntington Beach, CA", service: "vacation-rental-cleaning", detail: "3BR beachfront property between peak summer rentals. Full interior clean plus patio and outdoor furniture detail. Supply check and host report included.", outcome: "5-star listing maintained." },
  { type: "Deep Clean", city: "Dallas, TX", service: "deep-cleaning", detail: "2,800 sq ft family home, first deep clean in 2 years. Baseboards, inside appliances, grout scrubbing, vent dusting, blinds fully addressed.", outcome: "Client started recurring bi-weekly plan." },
];

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AlphaLux Cleaning Reviews",
  itemListElement: REVIEWS.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: { "@type": "HouseCleaningService", name: "AlphaLux Cleaning", url: BASE_URL },
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Reviews & Projects", item: `${BASE_URL}/reviews` },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A961]">Reviews &amp; Projects</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Client Testimonials &amp; Work</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Reviews &amp; Recent Projects
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Real reviews and real results from clients across Texas and California. For the most current reviews, visit our Google Business Profile.
            </p>
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A961] border border-[#C9A961]/30 rounded-lg px-4 py-2 text-sm hover:bg-[#C9A961]/10 transition-colors">
              <ExternalLink className="w-4 h-4" /> View on Google
            </a>
          </div>
        </div>
      </section>

      {/* Rating bar */}
      <section className="bg-[#1A1A1A] border-t border-[#C9A961]/10 border-b border-[#C9A961]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-[#C9A961] text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>5.0</p>
              <p className="text-[#C9A961] text-lg">★★★★★</p>
              <p className="text-gray-400 text-sm mt-1">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-[#C9A961]/20 hidden sm:block" />
            <div>
              <p className="text-white text-2xl font-bold">100%</p>
              <p className="text-gray-400 text-sm mt-1">5-Star Reviews</p>
            </div>
            <div className="w-px h-12 bg-[#C9A961]/20 hidden sm:block" />
            <div>
              <p className="text-white text-2xl font-bold">TX &amp; CA</p>
              <p className="text-gray-400 text-sm mt-1">17 Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Client Testimonials</p>
            <h2 className="text-[#0A0A0A] font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <article key={r.name} className="bg-[#F8F7F4] border border-[#C9A961]/15 rounded-xl p-7 card-hover">
                <Quote className="w-8 h-8 text-[#C9A961]/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-semibold text-[#0A0A0A]">{r.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{r.city} · {r.service}</p>
                  </div>
                  <span className="text-[#C9A961]">★★★★★</span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#C9A961] text-[#C9A961] font-medium px-6 py-3 rounded-lg hover:bg-[#C9A961]/10 transition-colors text-sm">
              <ExternalLink className="w-4 h-4" /> Share Your Experience on Google
            </a>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />

      {/* ── RECENT PROJECTS ── */}
      <section className="bg-[#F8F7F4] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Case Studies</p>
            <h2 className="text-[#0A0A0A] font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Recent Projects &amp; Client Results
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A sample of recent work across Texas and California — real jobs, real outcomes, real clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article key={p.type + p.city} className="border border-[#C9A961]/20 rounded-xl p-7 card-hover bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C9A961] text-xs font-semibold uppercase tracking-wider bg-[#C9A961]/10 px-3 py-1 rounded-full">
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
            Ready to Experience AlphaLux?
          </h2>
          <p className="text-gray-400 mb-8">Join our growing list of satisfied clients across Texas and California.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 border border-[#C9A961] text-[#C9A961] font-medium px-6 py-3.5 rounded-lg hover:bg-[#C9A961]/10 transition-colors text-sm">
              <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#D4B876] transition-colors text-sm">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
