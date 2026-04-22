import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, GBP_URL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AlphaLux Cleaning Reviews | 5-Star Eco-Friendly Service",
  description:
    "Read AlphaLux Cleaning reviews from real clients across Texas & California. 5-star eco-friendly house cleaning in Dallas, Austin, Beverly Hills, Los Angeles & more.",
  alternates: { canonical: `${BASE_URL}/reviews` },
  openGraph: {
    type: "website",
    title: "AlphaLux Cleaning Reviews | 5-Star Eco-Friendly Service",
    description: "5-star reviews from real AlphaLux clients across TX & CA. Eco-friendly, non-toxic house cleaning.",
    url: `${BASE_URL}/reviews`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/reviews.png`, secureUrl: `${BASE_URL}/og/reviews.png`, width: 1200, height: 630, alt: "AlphaLux Cleaning Reviews", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "AlphaLux Cleaning Reviews | 5-Star Rated", description: "Real 5-star reviews from clients across Texas & California.", images: [`${BASE_URL}/og/reviews.png`] },
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
    { "@type": "ListItem", position: 2, name: "Reviews", item: `${BASE_URL}/reviews` },
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
            <span className="text-[#C9A961]">Reviews</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Client Testimonials</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              What Our Clients Say About AlphaLux Cleaning
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Real reviews from real clients across Texas and California. For the most current reviews, visit our Google Business Profile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C9A961] border border-[#C9A961]/30 rounded-lg px-4 py-2 text-sm hover:bg-[#C9A961]/10 transition-colors">
                <ExternalLink className="w-4 h-4" />
                View on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overall rating */}
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

      {/* Reviews grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className="bg-[#F8F7F4] border border-[#C9A961]/15 rounded-xl p-7 card-hover"
              >
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
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Ready to Experience AlphaLux?
          </h2>
          <p className="text-gray-400 mb-8">Join our growing list of satisfied clients across Texas and California.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#C9A961] text-[#C9A961] font-medium px-6 py-3.5 rounded-lg hover:bg-[#C9A961]/10 transition-colors text-sm">
              <ExternalLink className="w-4 h-4" /> Share Your Experience on Google
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
