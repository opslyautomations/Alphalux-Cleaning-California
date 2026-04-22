import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Leaf, Star, Award, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About AlphaLux Cleaning | Eco-Conscious House Cleaning TX & CA",
  description:
    "Learn about AlphaLux Cleaning — eco-conscious, non-toxic house cleaning across Texas & California. Founded by Talula with a commitment to sustainability and excellence.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: "website",
    title: "About AlphaLux Cleaning | Eco-Conscious House Cleaning TX & CA",
    description:
      "Meet the team behind AlphaLux Cleaning. Eco-conscious, non-toxic house cleaning across 17 cities in Texas & California.",
    url: `${BASE_URL}/about`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/about.png`, secureUrl: `${BASE_URL}/og/about.png`, width: 1200, height: 630, alt: "About AlphaLux Cleaning", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "About AlphaLux Cleaning", description: "Eco-conscious, non-toxic house cleaning across 17 cities in TX & CA.", images: [`${BASE_URL}/og/about.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#C9A961" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A961]">About</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Company</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              About AlphaLux Cleaning
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Eco-conscious luxury cleaning across Texas and California.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="text-[#0A0A0A] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Clean Spaces. Clear Conscience.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At AlphaLux Cleaning, we believe that a clean space shouldn&apos;t come at the cost of your health — or the environment. That&apos;s why we go beyond traditional cleaning services by using non-toxic, eco-conscious products that are safe for your family, your pets, and the planet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;re proud to combine high standards of cleanliness with a deep commitment to sustainability. Cleanliness and responsibility can go hand-in-hand, and we&apos;re here to prove it — one home and business at a time.
              </p>
            </div>
            <div className="bg-[#F8F7F4] rounded-2xl p-8 border border-[#C9A961]/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "17", label: "Cities Served" },
                  { number: "8", label: "Specialized Services" },
                  { number: "★★★★★", label: "Client Satisfaction" },
                  { number: "100%", label: "Non-Toxic Products" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-[#C9A961] font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{stat.number}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0A0A0A] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#1A1A1A] border border-[#C9A961]/20 rounded-2xl p-8">
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Sustainability</p>
              <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Sustainability Is Our Standard
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                At AlphaLux, sustainability isn&apos;t a feature — it&apos;s part of everything we do. We exclusively use biodegradable, eco-friendly products that are tough on dirt but gentle on the earth.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Our methods are designed to reduce waste, lower chemical exposure, and support cleaner air and water systems in our community. Whether we&apos;re cleaning a small apartment or a large commercial building, we follow responsible practices that minimize environmental impact while delivering excellent results.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Purpose</p>
              <h2 className="text-white font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Our Mission
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our mission is to deliver cleaning services that not only make your space look its best but also support your well-being and the health of the environment. We&apos;re dedicated to reducing harmful chemicals in the spaces where people live and work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every task we complete — from scrubbing kitchens to polishing floors — is a step toward a cleaner, safer, more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="bg-[#F8F7F4] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Founder</p>
            <h2 className="text-[#0A0A0A] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Meet Talula
            </h2>
            <div className="w-20 h-20 rounded-full bg-[#C9A961]/15 flex items-center justify-center mx-auto mb-6">
              <span className="text-[#C9A961] font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>T</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              AlphaLux Cleaning was founded by Talula with a simple belief: your home deserves to be truly clean — not just surface-level clean, but clean in a way that doesn&apos;t put your family or the environment at risk.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Driven by a passion for sustainability and a commitment to building genuine client trust, Talula built AlphaLux from the ground up with eco-friendly standards at the core. Every team member is carefully vetted, background-checked, and trained to the same exacting standards that Talula applies personally.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, AlphaLux serves 17 cities across Texas and California — and every clean reflects the care and commitment that started this company.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">What We Stand For</p>
            <h2 className="text-[#0A0A0A] font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Integrity", desc: "We do what we say, and we say what we do. Transparent pricing, honest communication, no surprises." },
              { icon: Leaf, title: "Sustainability", desc: "Every product, every method, every decision is made with the environment in mind." },
              { icon: Star, title: "Excellence", desc: "White-glove standards on every visit. We don't cut corners — we clean them." },
              { icon: Award, title: "Trust", desc: "Background-checked teams, full insurance, and reliability you can build a schedule around." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-full bg-[#C9A961]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#C9A961]" />
                </div>
                <h3 className="font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A0A0A] py-20" style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1a1200 50%, #0A0A0A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Experience the AlphaLux Difference
          </h2>
          <p className="text-gray-400 mb-8">Eco-friendly, luxury-level cleaning across Texas and California. Get your free quote today.</p>
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
