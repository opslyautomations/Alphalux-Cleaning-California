import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin, Clock, Quote } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import FAQAccordion from "@/components/FAQAccordion";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL, SERVICES } from "@/lib/constants";
import { CA_CITY_DATA } from "@/lib/locationData";

export async function generateStaticParams() {
  return Object.keys(CA_CITY_DATA).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = CA_CITY_DATA[city];
  if (!data) return {};
  return {
    title: `House Cleaning in ${data.name}, CA | AlphaLux Cleaning`,
    description: `Eco-friendly, non-toxic house cleaning in ${data.name}, California. Licensed & insured. From $99/visit. AlphaLux Cleaning serves ${data.name} with same-week availability.`,
    alternates: { canonical: `${BASE_URL}/locations/ca/${city}` },
    openGraph: {
      type: "website",
      title: `House Cleaning in ${data.name}, CA | AlphaLux Cleaning`,
      description: `Eco-friendly house cleaning in ${data.name}, CA. Non-toxic, licensed & insured. Free quote.`,
      url: `${BASE_URL}/locations/ca/${city}`,
      siteName: "AlphaLux Cleaning",
      locale: "en_US",
      images: [{ url: `${BASE_URL}/og/location-ca-${city}.png`, secureUrl: `${BASE_URL}/og/location-ca-${city}.png`, width: 1200, height: 630, alt: `House Cleaning in ${data.name} CA — AlphaLux Cleaning`, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: `House Cleaning in ${data.name}, CA`, description: `Eco-friendly house cleaning in ${data.name}. Non-toxic, licensed & insured.`, images: [`${BASE_URL}/og/location-ca-${city}.png`] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    other: { "theme-color": "#C9A961" },
  };
}

export default async function CACityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = CA_CITY_DATA[city];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
      { "@type": "ListItem", position: 3, name: "California", item: `${BASE_URL}/locations` },
      { "@type": "ListItem", position: 4, name: data.name, item: `${BASE_URL}/locations/ca/${city}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    name: `AlphaLux Cleaning — ${data.name}, CA`,
    url: `${BASE_URL}/locations/ca/${city}`,
    telephone: "+19725590223",
    email: "info@alphaluxclean.com",
    address: { "@type": "PostalAddress", addressLocality: data.name, addressRegion: "CA", addressCountry: "US" },
    areaServed: { "@type": "City", name: data.name, addressRegion: "CA" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#C9A961] transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-gray-400">California</span>
            <span>/</span>
            <span className="text-[#C9A961]">{data.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A961]/15 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#C9A961]" />
            </div>
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-2">California</p>
              <h1 className="text-white font-bold leading-tight mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                House Cleaning in {data.name}, CA
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />Non-Toxic Products</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />Same-Week Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{data.intro}</p>
        </div>
      </section>

      {/* Why This City */}
      <section className="bg-[#F8F7F4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Why {data.name} Residents Choose AlphaLux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.reasons.map(({ title, desc }, i) => (
              <div key={title} className="bg-white border border-[#C9A961]/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A961] text-[#0A0A0A] font-bold text-lg flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-[#0A0A0A] font-bold mb-2 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Services Available in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-5 card-hover hover:border-[#C9A961]/30">
                <h3 className="text-[#0A0A0A] font-bold text-sm mb-1 group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{s.name}</h3>
                <p className="text-[#C9A961] text-xs font-semibold mb-3">{s.price}</p>
                <span className="text-[#C9A961] text-xs font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-[#0A0A0A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
            Nearby Areas We Also Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.nearby.map((n) => (
              <Link key={n.name} href={`/locations/${n.stateSlug}/${n.slug}`} className="bg-[#1A1A1A] border border-[#C9A961]/20 text-gray-300 hover:text-[#C9A961] hover:border-[#C9A961]/40 px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A961]" />
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="bg-[#F8F7F4] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            {data.name} Cleaning FAQs
          </h2>
          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Reviews from {data.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.reviews.map((r) => (
              <div key={r.name} className="bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-6">
                <Quote className="w-6 h-6 text-[#C9A961]/30 mb-3" />
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#0A0A0A] text-sm">{r.name}</p>
                    <p className="text-gray-500 text-xs">{data.name}, CA · {r.service}</p>
                  </div>
                  <span className="text-[#C9A961] text-sm">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Same-Week Availability</p>
              <h2 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Book House Cleaning in {data.name} Today
              </h2>
              <p className="text-gray-400 mb-6">
                AlphaLux Cleaning serves {data.name}, CA with eco-friendly, non-toxic house cleaning. Get your free quote — response within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#D4B876] transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#C9A961]" />Licensed &amp; Insured in California</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#C9A961]" />100% Non-Toxic Products</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#C9A961]" />Background-Checked Teams</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#C9A961]" />Mon–Sat 8:00 AM – 6:00 PM</span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#C9A961]/20 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Get Your Free Quote</h3>
              <p className="text-gray-500 text-sm mb-5">Serving {data.name}, CA · Response within 24 hours.</p>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
