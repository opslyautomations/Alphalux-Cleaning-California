import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { TX_CITIES, CA_CITIES, PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "House Cleaning Locations | AlphaLux Cleaning — TX & CA",
  description:
    "AlphaLux Cleaning serves 17 cities across Texas and California. Find eco-friendly, non-toxic house cleaning near you.",
  alternates: { canonical: `${BASE_URL}/locations` },
  openGraph: {
    type: "website",
    title: "House Cleaning Locations | AlphaLux Cleaning TX & CA",
    description: "17 cities served across TX & CA. Eco-friendly house cleaning near you.",
    url: `${BASE_URL}/locations`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/locations.png`, secureUrl: `${BASE_URL}/og/locations.png`, width: 1200, height: 630, alt: "AlphaLux Cleaning Service Locations", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "AlphaLux Cleaning Locations — TX & CA", description: "17 cities served. Eco-friendly house cleaning near you.", images: [`${BASE_URL}/og/locations.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#C9A961" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A961]">Locations</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Where We Serve</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              House Cleaning in Texas &amp; California
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              AlphaLux Cleaning serves 17 cities across two states. Find eco-friendly, non-toxic house cleaning in your city.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#C9A961] text-[#0A0A0A] text-sm font-bold flex items-center justify-center">TX</span>
                <h2 className="text-[#0A0A0A] font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>Texas</h2>
              </div>
              <div className="space-y-3">
                {TX_CITIES.map((c) => (
                  <Link key={c.slug} href={`/locations/tx/${c.slug}`} className="group flex items-center justify-between bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-4 hover:border-[#C9A961]/30 transition-colors card-hover">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#C9A961]" />
                      <span className="font-medium text-[#0A0A0A] group-hover:text-[#C9A961] transition-colors">House Cleaning in {c.name}, TX</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#C9A961] text-[#0A0A0A] text-sm font-bold flex items-center justify-center">CA</span>
                <h2 className="text-[#0A0A0A] font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>California</h2>
              </div>
              <div className="space-y-3">
                {CA_CITIES.map((c) => (
                  <Link key={c.slug} href={`/locations/ca/${c.slug}`} className="group flex items-center justify-between bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-4 hover:border-[#C9A961]/30 transition-colors card-hover">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#C9A961]" />
                      <span className="font-medium text-[#0A0A0A] group-hover:text-[#C9A961] transition-colors">House Cleaning in {c.name}, CA</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Don&apos;t see your city?{" "}
              <a href={PHONE_TEL} className="text-[#C9A961] hover:underline font-medium">Call {PHONE_DISPLAY}</a>
              {" "}— we may still serve you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
