import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Leaf } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import { TX_CITIES, CA_CITIES, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_MAILTO, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact AlphaLux Cleaning | Get a Free Quote Today",
  description:
    "Contact AlphaLux Cleaning for a free house cleaning quote in Texas & California. Call (972) 559-0223 or fill out our online form. Same-week availability.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: "website",
    title: "Contact AlphaLux Cleaning | Get a Free Quote Today",
    description: "Get a free house cleaning quote from AlphaLux. Call (972) 559-0223 or fill out our form. Serving 17 cities in TX & CA.",
    url: `${BASE_URL}/contact`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/contact.png`, secureUrl: `${BASE_URL}/og/contact.png`, width: 1200, height: 630, alt: "Contact AlphaLux Cleaning", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "Contact AlphaLux Cleaning | Free Quote", description: "Get a free quote for eco-friendly house cleaning in TX & CA.", images: [`${BASE_URL}/og/contact.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#253858" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#253858] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#253858]">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-[#253858] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Free Quote</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Get a Free Quote from AlphaLux Cleaning
            </h1>
            <p className="text-gray-400 text-lg">Same-week availability across Texas and California.</p>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact info */}
            <div>
              <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}>
                Get in Touch
              </h2>
              <div className="space-y-6">
                <a href={PHONE_TEL} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-[#253858]/10 flex items-center justify-center shrink-0 group-hover:bg-[#253858]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#253858]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-[#0A0A0A] font-semibold group-hover:text-[#253858] transition-colors">{PHONE_DISPLAY}</p>
                    <p className="text-gray-500 text-sm">Click to call — we pick up</p>
                  </div>
                </a>
                <a href={EMAIL_MAILTO} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-[#253858]/10 flex items-center justify-center shrink-0 group-hover:bg-[#253858]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#253858]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-[#0A0A0A] font-semibold group-hover:text-[#253858] transition-colors">{EMAIL}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#253858]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#253858]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-[#0A0A0A] font-semibold">17 Cities Across TX &amp; CA</p>
                    <p className="text-gray-500 text-sm">We come to you — mobile service only</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#253858]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#253858]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="text-[#0A0A0A] font-semibold">Mon–Sat 8:00 AM – 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday by appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#253858]/10 flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-[#253858]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Our Commitment</p>
                    <p className="text-[#0A0A0A] font-semibold">100% Non-Toxic &amp; Eco-Friendly</p>
                    <p className="text-gray-500 text-sm">Safe for families, pets, and the planet</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-[#0A0A0A] font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  Direct Call
                </h3>
                <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-[#253858] text-[#0A0A0A] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#2C4267] transition-colors">
                  <Phone className="w-4 h-4" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-[#F8F7F4] border border-[#253858]/10 rounded-2xl p-6 lg:p-8">
              <h2 className="text-[#0A0A0A] font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Request Your Free Quote
              </h2>
              <p className="text-gray-500 text-sm mb-6">Response within 24 hours. No obligation.</p>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area List */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-bold mb-8 text-center" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Serving These Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-[#253858] text-xs uppercase tracking-widest font-medium mb-4">Texas</h3>
              <ul className="space-y-2">
                {TX_CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/locations/tx/${c.slug}`} className="text-gray-400 hover:text-[#253858] transition-colors text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#253858]" />
                      House Cleaning in {c.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#253858] text-xs uppercase tracking-widest font-medium mb-4">California</h3>
              <ul className="space-y-2">
                {CA_CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/locations/ca/${c.slug}`} className="text-gray-400 hover:text-[#253858] transition-colors text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#253858]" />
                      House Cleaning in {c.name}, CA
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
