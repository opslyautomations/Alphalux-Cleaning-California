import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Home, Layers, LogOut, RefreshCw, Key, Sparkles, Building2, Hammer } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import FAQAccordion from "@/components/FAQAccordion";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL, SERVICES } from "@/lib/constants";

const SERVICE_DATA: Record<string, {
  name: string;
  price: string;
  intro: string;
  includes: string[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "standard-cleaning": {
    name: "Standard Cleaning",
    price: "From $129",
    intro: "Keep your home consistently fresh and stress-free. Perfect for busy families and professionals across Dallas, Austin, Los Angeles, and every city we serve. Our eco-friendly standard cleaning maintains your home in spotless condition on whatever schedule works for you.",
    includes: [
      "Dusting all surfaces and fixtures",
      "Vacuuming all carpets and rugs",
      "Mopping hard floors with eco-friendly solution",
      "Kitchen counters and appliance exteriors",
      "Bathrooms — sinks, toilets, tubs, and showers",
      "Mirror and glass cleaning",
      "Trash removal from all rooms",
      "Light tidying and organizing",
      "Bed making (linens not changed unless requested)",
      "Spot cleaning baseboards",
      "Non-toxic products throughout — 100% biodegradable",
    ],
    benefits: [
      { title: "Consistent Cleanliness", desc: "A regularly cleaned home stays cleaner longer — no more weekend cleanups. We maintain your standard." },
      { title: "Non-Toxic Family-Safe Products", desc: "Every product is biodegradable, plant-based, and safe for children, pets, and people with allergies." },
      { title: "Flexible Scheduling", desc: "Weekly, bi-weekly, monthly, or one-time. We work around your schedule." },
    ],
    faqs: [
      { q: "How long does a standard cleaning take?", a: "Typically 1–3 hours depending on home size and condition. We'll give you a time estimate when you book." },
      { q: "Are add-on services available?", a: "Yes — inside oven, fridge, cabinets, windows, and more can be added at booking." },
      { q: "Do you bring your own supplies?", a: "Yes. We bring all eco-friendly, non-toxic cleaning products and equipment to every visit." },
    ],
  },
  "deep-cleaning": {
    name: "Deep Cleaning",
    price: "From $249",
    intro: "Top-to-bottom detail cleaning that hits every overlooked corner — baseboards, behind appliances, inside cabinets, grout, vents. Ideal for first-time cleans, seasonal resets, or homes that haven't had a thorough clean in a while.",
    includes: [
      "Everything in standard cleaning",
      "Detailed baseboard scrubbing throughout",
      "Inside oven, fridge, and microwave",
      "Inside all kitchen and bathroom cabinets",
      "Grout scrubbing in tile areas",
      "Vent and air register dusting",
      "Blind and shutter cleaning",
      "Door frames and switch plates",
      "Light fixtures and ceiling fans",
      "Behind and beneath accessible furniture",
      "Window sills and tracks",
      "Non-toxic, HEPA-grade products throughout",
    ],
    benefits: [
      { title: "Resets to Like-New", desc: "Addresses buildup in every corner that standard maintenance misses. Your home feels brand new again." },
      { title: "Tackles Hidden Buildup", desc: "Grout, vents, inside appliances — areas that collect grime over months get full attention." },
      { title: "Perfect Prep for Events", desc: "Before a dinner party, family visit, or holiday gathering — deep clean is the right choice." },
    ],
    faqs: [
      { q: "How often should I book a deep clean?", a: "Every 3–6 months is typical, or seasonally. Many clients pair recurring standard cleans with quarterly deep cleans." },
      { q: "How long does a deep cleaning take?", a: "3–6 hours depending on home size and how long since the last thorough clean." },
      { q: "Is it worth getting if I clean regularly?", a: "Yes — deep cleaning reaches buildup that routine maintenance cleaning can't address, particularly in tile grout, vents, and behind appliances." },
    ],
  },
  "move-out-cleaning": {
    name: "Move Out Cleaning",
    price: "From $299",
    intro: "Landlord-approved move-out cleans built to protect your security deposit. We know what property managers inspect for and deliver results that pass every walkthrough — in Dallas, Austin, Los Angeles, Santa Monica, and throughout Texas and California.",
    includes: [
      "Full deep clean of entire empty unit",
      "Inside all appliances (oven, fridge, microwave, dishwasher)",
      "Inside all cabinets and drawers",
      "Detailed baseboard cleaning",
      "Window tracks and sills",
      "Blinds and window coverings",
      "All closets swept and wiped",
      "Full bathroom deep clean",
      "All floors vacuumed and mopped",
      "Wall spot cleaning for marks and scuffs",
      "Light fixtures and switches",
      "Non-toxic products throughout",
    ],
    benefits: [
      { title: "Designed to Pass Inspections", desc: "We know the checklist. Our move-out cleans cover every item property managers commonly flag." },
      { title: "Protect Your Deposit", desc: "A professional move-out clean is one of the most cost-effective ways to ensure your deposit is returned." },
      { title: "Reduces Moving Stress", desc: "One less major task on moving day. Schedule us after your furniture is out and before your walk-through." },
    ],
    faqs: [
      { q: "Do you guarantee the deposit will be returned?", a: "We can't guarantee landlord decisions, but we do guarantee our work. If any cleaning items are flagged by the landlord, we'll re-clean them within 24 hours at no charge." },
      { q: "Should you clean before or after furniture is removed?", a: "After. Move-out cleaning is for empty units — this allows us to clean behind and beneath everything properly." },
      { q: "How long does it take?", a: "4–8 hours depending on unit size, condition, and number of appliances." },
    ],
  },
  "recurring-cleaning": {
    name: "Recurring Cleaning",
    price: "From $99/visit",
    intro: "Weekly, bi-weekly, or monthly plans with locked-in discounted pricing. The easiest way to keep your home consistently spotless without thinking about it — across Dallas, Houston, Beverly Hills, Los Angeles, and every city we serve.",
    includes: [
      "All standard cleaning tasks every visit",
      "Consistent team assignment when possible",
      "Priority scheduling over one-time bookings",
      "Locked-in pricing — no surprise rate increases",
      "Easy reschedule with 48 hours notice",
      "Preference tracking visit to visit",
      "Non-toxic, eco-friendly products every time",
      "Flexible frequency adjustments",
    ],
    benefits: [
      { title: "Discounted Loyal-Client Pricing", desc: "Recurring clients pay less per visit than one-time bookings. The more frequently you book, the greater the discount." },
      { title: "Consistent Familiar Team", desc: "We aim to send the same team every visit so they know your home, your preferences, and your standards." },
      { title: "One Less Thing on Your List", desc: "Set it up once and forget it. Your home is always clean without you having to remember to book." },
    ],
    faqs: [
      { q: "What frequencies do you offer?", a: "Weekly, bi-weekly, every 3 weeks, or monthly. We can also discuss custom frequencies for your schedule." },
      { q: "Can I pause or skip a visit?", a: "Yes — just give us 48 hours notice and we'll reschedule your visit at no penalty." },
      { q: "Will I get the same cleaner each time?", a: "We aim to assign the same team every visit. Occasionally circumstances require a substitution, but we'll always send a fully vetted, trained team member." },
    ],
  },
  "airbnb-cleaning": {
    name: "Airbnb Cleaning",
    price: "From $139",
    intro: "Fast, reliable, 5-star turnovers for short-term rental hosts across Austin, Dallas, Los Angeles, Santa Monica, Hollywood, and throughout Texas and California. We understand tight check-out/check-in windows and deliver guest-ready results every time.",
    includes: [
      "Full standard clean of entire property",
      "Fresh linens setup (host-provided)",
      "Bed making to hotel standards",
      "Bathroom restock check (toiletries, paper)",
      "Kitchen reset — dishes, surfaces, appliances",
      "Trash removal from all rooms",
      "Light staging and presentation",
      "Damage and wear-and-tear report",
      "Low-stock supply notifications to host",
      "Fast 3–4 hour turnover windows",
    ],
    benefits: [
      { title: "Protects Your 5-Star Rating", desc: "Guests notice everything. Our thorough turnover process ensures every guest finds a flawless, welcoming space." },
      { title: "Reliable Tight-Window Turnarounds", desc: "3–4 hour turnover windows are standard for us. We know short-term rental timelines and plan accordingly." },
      { title: "Damage & Restock Reports", desc: "Every turnover includes a report on any damage observed or supplies that need restocking — protecting your property and your hosting business." },
    ],
    faqs: [
      { q: "Can you handle same-day turnovers?", a: "Yes. Our typical turnover window is 3–4 hours. We work with your Airbnb check-out and check-in times." },
      { q: "Do you stock supplies and toiletries?", a: "We check and report stock levels. Stocking supplies is available as an add-on service — coordinate with us at booking." },
      { q: "Do you work with property management companies?", a: "Yes — we work with individual hosts and property management companies that manage multiple listings." },
    ],
  },
  "one-time-cleaning": {
    name: "One-Time Cleaning",
    price: "From $179",
    intro: "One clean, no commitment, all the shine. Perfect for pre-event prep, post-guest cleanup, or treating yourself to a spotless home without a recurring plan. Available throughout Texas and California with same-week scheduling.",
    includes: [
      "Full standard or deep cleaning (your choice at booking)",
      "All eco-friendly, non-toxic products",
      "Flexible scheduling — often same week",
      "No contracts or recurring commitment",
      "Single-visit flat pricing",
      "Preference notes saved for future bookings",
    ],
    benefits: [
      { title: "No Contracts Required", desc: "Book once, pay once, move on. There's no pressure to continue and no cancellation penalties." },
      { title: "Perfect for Special Occasions", desc: "Before a holiday gathering, a dinner party, or when hosting guests — a one-time clean delivers the result you need." },
      { title: "Same-Week Scheduling", desc: "We often have availability within the week. Call or request online for fast booking." },
    ],
    faqs: [
      { q: "Can I book again later without a subscription?", a: "Absolutely. We save your preferences and home details so future one-time bookings are even easier." },
      { q: "How does pricing compare to recurring service?", a: "One-time pricing is slightly higher per visit than recurring plans. If you find yourself booking regularly, a recurring plan saves money." },
      { q: "Can I upgrade to a deep clean?", a: "Yes — simply request a deep clean at booking. We'll quote accordingly based on your home's size and condition." },
    ],
  },
  "vacation-rental-cleaning": {
    name: "Vacation Rental Cleaning",
    price: "From $149",
    intro: "Reliable, detail-oriented cleans between guest stays for vacation rental owners and property managers. We keep your rental review-ready through every booking season across Huntington Beach, Santa Monica, Beverly Hills, and throughout California and Texas.",
    includes: [
      "Full turnover cleaning of entire property",
      "Fresh linens setup (host-provided)",
      "Bathroom full reset and restock check",
      "Kitchen detail — appliances, counters, dishes",
      "Outdoor space tidying (patios, decks, pool areas)",
      "Trash and recycling removal",
      "Supply level checks and reports",
      "Host summary report after each clean",
      "Damage observation reporting",
    ],
    benefits: [
      { title: "Protects Your Rental Reputation", desc: "Consistent, thorough cleans between every booking protect your listing's rating and review history." },
      { title: "Reliable Between Bookings", desc: "We work around your booking calendar — tight windows, peak seasons, and last-minute turnarounds handled." },
      { title: "Flexible Peak-Season Scheduling", desc: "Summer and holiday seasons are when vacation rentals need the most support. We plan for peak demand." },
    ],
    faqs: [
      { q: "Do you clean outdoor spaces and patios?", a: "Yes — patios, decks, pool areas, and outdoor furniture are included on request." },
      { q: "How does pricing compare to Airbnb cleaning?", a: "Similar base pricing. Vacation rentals often involve more outdoor detail work, which may affect the final quote." },
      { q: "Can you manage multiple properties?", a: "Yes — we work with vacation rental portfolios of 2–10+ properties, often for property management companies." },
    ],
  },
  "post-construction-cleaning": {
    name: "Post Construction Cleaning",
    price: "From $399",
    intro: "Dust, debris, and detail work after renovation or new construction across Houston, Dallas, Los Angeles, and throughout Texas and California. We use HEPA-grade equipment and non-toxic products to reveal the finished space underneath the construction haze.",
    includes: [
      "Construction dust removal from all surfaces",
      "Vent and duct clearing and cleaning",
      "Window track and frame detailing",
      "Fixture polishing and detailing",
      "Paint overspray removal from glass and surfaces",
      "Floor deep clean — all types",
      "Grout and tile detailing",
      "Interior cabinet dusting and wiping",
      "Appliance exterior cleaning",
      "Interior debris removal and haul",
      "HEPA-grade vacuum equipment throughout",
      "Non-toxic products protecting new finishes",
    ],
    benefits: [
      { title: "HEPA-Equipped Dust Removal", desc: "Construction dust requires professional-grade equipment. Our HEPA vacuums capture fine particles that standard vacuums recirculate." },
      { title: "Reveals Your Renovation", desc: "After months of construction, the finished space is hiding under a layer of dust. We reveal it in one clean." },
      { title: "Trained for New Construction", desc: "Our teams are trained to protect new finishes, surfaces, and fixtures while removing every trace of construction." },
    ],
    faqs: [
      { q: "Do you haul construction debris?", a: "We remove interior debris — dust, small construction waste, packaging. Large construction waste (drywall pieces, lumber, concrete) requires a separate debris hauling service." },
      { q: "How long does post-construction cleaning take?", a: "6–12 hours depending on the scope of the renovation and the size of the space." },
      { q: "Should I book before or after move-in?", a: "Before move-in — most clients schedule 1–3 days before their planned move-in date to allow time for any final touch-ups." },
    ],
  },
};

const ICON_MAP: Record<string, React.ElementType> = {
  "standard-cleaning": Home,
  "deep-cleaning": Layers,
  "move-out-cleaning": LogOut,
  "recurring-cleaning": RefreshCw,
  "airbnb-cleaning": Key,
  "one-time-cleaning": Sparkles,
  "vacation-rental-cleaning": Building2,
  "post-construction-cleaning": Hammer,
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) return {};
  return {
    title: `${data.name} | AlphaLux Cleaning — Texas & California`,
    description: `${data.name} ${data.price} across Texas & California. Eco-friendly, non-toxic cleaning — licensed & insured. Get a free quote from AlphaLux Cleaning.`,
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
    openGraph: {
      type: "website",
      title: `${data.name} | AlphaLux Cleaning — Texas & California`,
      description: `${data.name} ${data.price}. Eco-friendly, non-toxic. Serving 17 cities in TX & CA.`,
      url: `${BASE_URL}/services/${slug}`,
      siteName: "AlphaLux Cleaning",
      locale: "en_US",
      images: [{ url: `${BASE_URL}/og/services-${slug}.png`, secureUrl: `${BASE_URL}/og/services-${slug}.png`, width: 1200, height: 630, alt: `${data.name} — AlphaLux Cleaning`, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: `${data.name} | AlphaLux Cleaning`, description: `${data.name} from ${data.price}. Eco-friendly in TX & CA.`, images: [`${BASE_URL}/og/services-${slug}.png`] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    other: { "theme-color": "#C9A961" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) notFound();

  const Icon = ICON_MAP[slug] || Home;
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.intro,
    provider: { "@type": "HouseCleaningService", name: "AlphaLux Cleaning", url: BASE_URL },
    areaServed: ["Dallas", "Fort Worth", "Austin", "Houston", "San Antonio", "Beverly Hills", "Los Angeles", "Santa Monica"].map(n => ({ "@type": "City", name: n })),
    offers: { "@type": "Offer", description: data.price, priceCurrency: "USD" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${BASE_URL}/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#C9A961] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#C9A961]">{data.name}</span>
          </nav>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-[#C9A961]/15 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-[#C9A961]" />
            </div>
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-2">AlphaLux Cleaning</p>
              <h1 className="text-white font-bold leading-tight mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                {data.name} in Texas &amp; California
              </h1>
              <p className="text-[#C9A961] font-semibold text-lg">{data.price}</p>
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

      {/* What's Included */}
      <section className="bg-[#F8F7F4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.includes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.benefits.map(({ title, desc }) => (
              <div key={title} className="bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A961]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#C9A961]" />
                </div>
                <h3 className="text-[#0A0A0A] font-bold mb-2 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-[#0A0A0A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#C9A961]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-widest mb-2">Pricing</p>
              <h2 className="text-white font-bold text-3xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{data.price}</h2>
              <p className="text-gray-400 text-sm">Final pricing depends on home size and condition. Get an exact quote below.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#D4B876] transition-colors text-sm">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 border border-[#C9A961] text-[#C9A961] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#C9A961]/10 transition-colors text-sm">
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Request a Quote", desc: "Fill out our online form or call us. We'll confirm your service, home size, and schedule." },
              { step: "2", title: "We Come to You", desc: "Our background-checked, uniformed team arrives on time with all eco-friendly supplies." },
              { step: "3", title: "Enjoy a Clean Home", desc: "We clean, you relax. Every surface is detailed to AlphaLux's luxury-level standard." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center shrink-0">
                  <span className="text-[#0A0A0A] font-bold text-lg">{step}</span>
                </div>
                <div>
                  <h3 className="text-[#0A0A0A] font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F7F4] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-[#F8F7F4] border border-[#C9A961]/10 rounded-xl p-5 card-hover hover:border-[#C9A961]/30">
                <h3 className="text-[#0A0A0A] font-bold mb-1 text-sm group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{s.name}</h3>
                <p className="text-[#C9A961] text-xs mb-3">{s.price}</p>
                <span className="text-[#C9A961] text-sm font-medium inline-flex items-center gap-1">View Service <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Get Started</p>
              <h2 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Book Your {data.name} Today
              </h2>
              <p className="text-gray-400 mb-6">
                Available across 17 cities in Texas and California. Same-week scheduling often available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#D4B876] transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />100% Non-Toxic</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#C9A961]" />Background-Checked Teams</span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#C9A961]/20 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Get Your Free Quote</h3>
              <p className="text-gray-500 text-sm mb-5">Response within 24 hours.</p>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
