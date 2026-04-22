import type { Metadata } from "next";
import Link from "next/link";
import { Home, Layers, LogOut, RefreshCw, Key, Sparkles, Building2, Hammer, ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "House Cleaning Services | AlphaLux Cleaning — Texas & California",
  description:
    "Browse all 8 eco-friendly house cleaning services from AlphaLux: standard, deep, move out, recurring, Airbnb, one-time, vacation rental & post-construction cleaning.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    type: "website",
    title: "House Cleaning Services | AlphaLux Cleaning",
    description: "8 eco-friendly cleaning services across TX & CA. From $99/visit.",
    url: `${BASE_URL}/services`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/services.png`, secureUrl: `${BASE_URL}/og/services.png`, width: 1200, height: 630, alt: "AlphaLux Cleaning Services", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "AlphaLux Cleaning Services", description: "8 eco-friendly cleaning services in TX & CA.", images: [`${BASE_URL}/og/services.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#C9A961" },
};

const SERVICES = [
  { name: "Standard Cleaning", slug: "standard-cleaning", price: "From $129", desc: "Regular upkeep for busy households. Includes dusting, vacuuming, mopping, kitchens, bathrooms, and more with eco-friendly products.", icon: Home },
  { name: "Deep Cleaning", slug: "deep-cleaning", price: "From $249", desc: "Top-to-bottom detail cleaning — baseboards, inside appliances, grout, vents. Perfect for seasonal resets and first-time cleans.", icon: Layers },
  { name: "Move Out Cleaning", slug: "move-out-cleaning", price: "From $299", desc: "Landlord-approved cleans built to protect your deposit. We know exactly what property managers inspect for.", icon: LogOut },
  { name: "Recurring Cleaning", slug: "recurring-cleaning", price: "From $99/visit", desc: "Weekly, bi-weekly, or monthly plans with locked-in pricing. The most affordable way to stay consistently clean.", icon: RefreshCw },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning", price: "From $139", desc: "Fast 5-star turnovers for short-term rental hosts. Linens, restock checks, damage reports, and tight windows handled.", icon: Key },
  { name: "One-Time Cleaning", slug: "one-time-cleaning", price: "From $179", desc: "No contracts, no commitment. Perfect for special occasions, pre-event prep, or a one-off refresh.", icon: Sparkles },
  { name: "Vacation Rental Cleaning", slug: "vacation-rental-cleaning", price: "From $149", desc: "Reliable between-guest cleans for vacation rental owners and property managers across TX and CA.", icon: Building2 },
  { name: "Post Construction Cleaning", slug: "post-construction-cleaning", price: "From $399", desc: "HEPA-grade dust and debris removal after renovation or new construction. Reveals the finished beauty underneath.", icon: Hammer },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A961]">Services</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">What We Offer</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              House Cleaning Services in Texas &amp; California
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Eight eco-friendly, non-toxic cleaning services tailored to every home and situation — from weekly maintenance to post-renovation detail work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(({ name, slug, price, desc, icon: Icon }) => (
              <Link key={slug} href={`/services/${slug}`} className="group flex gap-5 bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-6 card-hover hover:border-[#C9A961]/30">
                <div className="w-14 h-14 rounded-full bg-[#C9A961]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A961]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#C9A961]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-[#0A0A0A] font-bold" style={{ fontFamily: "var(--font-playfair)" }}>{name}</h2>
                    <span className="text-[#C9A961] text-sm font-semibold">{price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
                  <span className="text-[#C9A961] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Not Sure Which Service Is Right?
          </h2>
          <p className="text-gray-400 mb-8">Call us and we&apos;ll help you find the best fit for your home and schedule.</p>
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
