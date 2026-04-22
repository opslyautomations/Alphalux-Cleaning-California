import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Leaf,
  Star,
  MapPin,
  Home,
  Layers,
  LogOut,
  RefreshCw,
  Key,
  Sparkles,
  Building2,
  Hammer,
  CheckCircle,
  Phone,
  ArrowRight,
  Quote,
} from "lucide-react";
import GHLForm from "@/components/GHLForm";
import FAQAccordion from "@/components/FAQAccordion";
import { TX_CITIES, CA_CITIES, PHONE_DISPLAY, PHONE_TEL, EMAIL_MAILTO, EMAIL, GBP_URL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AlphaLux Cleaning | Eco-Friendly House Cleaning in Texas & California",
  description:
    "Professional eco-friendly house cleaning in Texas & California. Non-toxic products, licensed & insured. Serving Dallas, Austin, LA, Beverly Hills & 13 more cities. Free quote.",
  alternates: { canonical: `${BASE_URL}/` },
  openGraph: {
    type: "website",
    title: "AlphaLux Cleaning | Eco-Friendly House Cleaning in Texas & California",
    description:
      "Professional eco-friendly house cleaning in Texas & California. Non-toxic products, licensed & insured. 17 cities. Free quote.",
    url: `${BASE_URL}/`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og/homepage.png`,
        secureUrl: `${BASE_URL}/og/homepage.png`,
        width: 1200,
        height: 630,
        alt: "AlphaLux Cleaning — Eco-Friendly House Cleaning in Texas & California",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaLux Cleaning | Eco-Friendly House Cleaning TX & CA",
    description: "Eco-friendly, non-toxic house cleaning in 17 cities across Texas & California. Licensed & insured. Free quote.",
    images: [`${BASE_URL}/og/homepage.png`],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AlphaLux Cleaning",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const SERVICES_DATA = [
  { name: "Standard Cleaning", slug: "standard-cleaning", price: "From $129", desc: "Regular upkeep for a spotless home", icon: Home },
  { name: "Deep Cleaning", slug: "deep-cleaning", price: "From $249", desc: "Top-to-bottom detail for a full reset", icon: Layers },
  { name: "Move Out Cleaning", slug: "move-out-cleaning", price: "From $299", desc: "Landlord-approved deposit-protection cleans", icon: LogOut },
  { name: "Recurring Cleaning", slug: "recurring-cleaning", price: "From $99/visit", desc: "Weekly/bi-weekly/monthly with discounts", icon: RefreshCw },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning", price: "From $139", desc: "Fast 5-star guest-ready turnovers", icon: Key },
  { name: "One-Time Cleaning", slug: "one-time-cleaning", price: "From $179", desc: "One clean, no commitment, all the shine", icon: Sparkles },
  { name: "Vacation Rental Cleaning", slug: "vacation-rental-cleaning", price: "From $149", desc: "Reliable between-guest cleans", icon: Building2 },
  { name: "Post Construction Cleaning", slug: "post-construction-cleaning", price: "From $399", desc: "Dust, debris, and detail after renovation", icon: Hammer },
];

const FAQS = [
  {
    q: "Are your cleaning products really non-toxic?",
    a: "Every product we use is biodegradable, plant-based, and free of harsh chemicals, bleach, and ammonia. Safe for children, pets, and people with allergies or respiratory sensitivities.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Most clients give access instructions and run errands or work while we clean. We're fully insured and background-checked.",
  },
  {
    q: "What's included in a standard vs. deep cleaning?",
    a: "Standard maintains an already-cared-for home (dusting, vacuuming, kitchens, bathrooms, surfaces). Deep adds detail work: baseboards, inside appliances, grout, vents, blinds, hard-to-reach buildup.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "Standard/recurring: 48 hours notice ideal. Deep cleans, move outs, post-construction: 5–7 days recommended.",
  },
  {
    q: "Do you serve my city?",
    a: "We serve 5 Texas cities (Dallas, Fort Worth, Austin, Houston, San Antonio) and 12 California cities (Beverly Hills, Brentwood, Glendale, Pasadena, Los Angeles, Santa Monica, Hollywood, Long Beach, Huntington Beach, Anaheim, Irvine, Sacramento).",
  },
  {
    q: "How is recurring service priced?",
    a: "From $99/visit with discounts at weekly, bi-weekly, and monthly frequencies. Final pricing depends on home size and frequency.",
  },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    city: "Dallas, TX",
    service: "Deep Cleaning",
    text: "AlphaLux deep cleaned our home before a family visit and it looked better than when we moved in. Non-toxic products were a huge plus with our toddler around.",
  },
  {
    name: "Marcus T.",
    city: "Austin, TX",
    service: "Airbnb Cleaning",
    text: "I manage 4 Airbnbs in Austin and AlphaLux is the only team I trust for turnovers. Always on time, always guest-ready.",
  },
  {
    name: "Jennifer L.",
    city: "Santa Monica, CA",
    service: "Move Out Cleaning",
    text: "Moved out of our apartment in Santa Monica and AlphaLux got us our full deposit back. Landlord was genuinely impressed.",
  },
];

const RECENT_PROJECTS = [
  { type: "Post-Construction Clean", city: "Houston, TX", outcome: "3,400 sq ft home after kitchen + bath remodel — move-in ready." },
  { type: "Airbnb Turnover", city: "Austin, TX", outcome: "2BR downtown condo in a 3-hour window — 5-star guest review received." },
  { type: "Move Out Deep Clean", city: "Santa Monica, CA", outcome: "1,200 sq ft apartment — full deposit returned by landlord." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201,169,97,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Decorative dots pattern */}
        <div
          className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A961 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Eco-Conscious House Cleaning
              </p>
              <h1
                className="text-white font-bold leading-[1.1] mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                Luxury Clean.
                <br />
                <span className="text-[#C9A961]">Non-Toxic.</span>
                <br />
                Zero Compromise.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                Professional house cleaning across Texas and California using only eco-friendly,
                non-toxic products — safe for your family, your pets, and the planet.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-7 py-4 rounded-lg hover:bg-[#D4B876] transition-colors text-sm"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 border border-[#C9A961] text-[#C9A961] font-semibold px-7 py-4 rounded-lg hover:bg-[#C9A961]/10 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C9A961]">★★★★★</span>
                  5-Star Rated
                </span>
                <span className="text-[#C9A961]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C9A961]" />
                  Licensed &amp; Insured
                </span>
                <span className="text-[#C9A961]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A961]" />
                  17 Cities Served
                </span>
                <span className="text-[#C9A961]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#C9A961]" />
                  Eco-Friendly Certified
                </span>
              </div>
            </div>

            {/* Right — GHL Form */}
            <div className="bg-[#1A1A1A] border border-[#C9A961]/30 rounded-2xl p-6 lg:p-8">
              <h2
                className="text-white font-bold text-xl mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Get Your Free Quote in 60 Seconds
              </h2>
              <p className="text-gray-500 text-sm mb-5">No obligation. Response within 24 hours.</p>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0A0A0A] border-t border-[#C9A961]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Leaf, text: "100% Non-Toxic Products" },
              { icon: Star, text: "5-Star Rated Service" },
              { icon: MapPin, text: "17 Cities Across TX & CA" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A961]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C9A961]" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What We Offer
            </p>
            <h2
              className="text-[#0A0A0A] font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Cleaning Services Tailored to Your Life
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Non-toxic, eco-friendly cleaning for every situation — from weekly upkeep to post-renovation detail work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_DATA.map(({ name, slug, price, desc, icon: Icon }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group bg-white border border-gray-100 rounded-xl p-6 card-hover hover:border-[#C9A961]/40"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A961]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A961]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#C9A961]" />
                </div>
                <h3
                  className="font-bold text-[#0A0A0A] mb-1 text-base"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {name}
                </h3>
                <p className="text-[#C9A961] text-xs font-semibold mb-2">{price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <span className="text-[#C9A961] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ALPHALUX ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,169,97,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Difference
            </p>
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Why Homeowners Choose AlphaLux
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Non-Toxic Products Only",
                desc: "Biodegradable cleaners safe for children, pets, and allergy-sensitive families. Zero harsh chemicals, bleach, or ammonia — ever.",
              },
              {
                icon: Sparkles,
                title: "Luxury-Level Detail",
                desc: "White-glove attention to every surface — corners, baseboards, fixtures. The kind of clean you feel the moment you walk in.",
              },
              {
                icon: Shield,
                title: "Reliable & Insured Teams",
                desc: "Background-checked, uniformed, fully insured professionals. Trust is earned — we earn it on every visit.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A961]/15 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-[#C9A961]" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-[#F8F7F4] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Where We Work
            </p>
            <h2
              className="text-[#0A0A0A] font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Serving Texas &amp; California
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3
                className="text-[#0A0A0A] font-bold text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="w-6 h-6 rounded-full bg-[#C9A961] text-[#0A0A0A] text-xs font-bold flex items-center justify-center">TX</span>
                Texas
              </h3>
              <ul className="space-y-2">
                {TX_CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/tx/${c.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#C9A961] transition-colors font-medium"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A961]" />
                      House Cleaning in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-[#0A0A0A] font-bold text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="w-6 h-6 rounded-full bg-[#C9A961] text-[#0A0A0A] text-xs font-bold flex items-center justify-center">CA</span>
                California
              </h3>
              <ul className="space-y-2">
                {CA_CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/ca/${c.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#C9A961] transition-colors font-medium"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A961]" />
                      House Cleaning in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Don&apos;t see your city?{" "}
            <a href={PHONE_TEL} className="text-[#C9A961] hover:underline font-medium">
              Call {PHONE_DISPLAY}
            </a>{" "}
            — we may still serve you.
          </p>
        </div>
      </section>

      {/* ── RECENT PROJECTS STRIP ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Case Studies
            </p>
            <h2
              className="text-[#0A0A0A] font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Recent Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECENT_PROJECTS.map((p) => (
              <div
                key={p.type}
                className="border border-[#C9A961]/20 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#C9A961] text-xs font-semibold uppercase tracking-wider">
                    {p.type}
                  </span>
                  <span className="text-[#C9A961]">★★★★★</span>
                </div>
                <p className="text-[#0A0A0A] font-semibold mb-1 text-sm">{p.city}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.outcome}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/recent-projects"
              className="inline-flex items-center gap-2 text-[#C9A961] font-medium hover:gap-3 transition-all"
            >
              View All Recent Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Client Reviews
            </p>
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-[#1A1A1A] border border-[#C9A961]/15 rounded-xl p-7 card-hover"
              >
                <Quote className="w-8 h-8 text-[#C9A961]/30 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <p className="text-gray-500 text-xs">{r.city} · {r.service}</p>
                  </div>
                  <span className="text-[#C9A961] text-sm">★★★★★</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#C9A961] font-medium hover:gap-3 transition-all"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F8F7F4] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Common Questions
            </p>
            <h2
              className="text-[#0A0A0A] font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #1a1200 50%, #0A0A0A 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,169,97,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Gold corner accents */}
          <div className="absolute top-0 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C9A961]/40 rounded-tl-lg" />
          <div className="absolute top-0 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C9A961]/40 rounded-tr-lg" />
          <div className="absolute bottom-0 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C9A961]/40 rounded-bl-lg" />
          <div className="absolute bottom-0 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C9A961]/40 rounded-br-lg" />

          <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Get Started Today
          </p>
          <h2
            className="text-white font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            Ready for a Home That Feels Luxurious and Clean?
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Get a free, no-obligation quote in 60 seconds. Available 7 days a week across Texas and California.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-8 py-4 rounded-lg hover:bg-[#D4B876] transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 border border-[#C9A961] text-[#C9A961] font-semibold px-8 py-4 rounded-lg hover:bg-[#C9A961]/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-8 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />
              Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />
              100% Non-Toxic
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />
              Same-Week Availability
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />
              17 Cities Served
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
