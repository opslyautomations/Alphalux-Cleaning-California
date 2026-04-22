import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "House Cleaning Blog | AlphaLux Cleaning Tips & Guides",
  description:
    "Expert house cleaning tips, guides, and advice from AlphaLux Cleaning. Non-toxic cleaning, deep cleaning schedules, Airbnb turnovers, move-out checklists, and more for Texas & California homeowners.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: "website",
    title: "House Cleaning Blog | AlphaLux Cleaning Tips & Guides",
    description: "Cleaning tips, guides, and insights from AlphaLux — eco-friendly house cleaning across TX & CA.",
    url: `${BASE_URL}/blog`,
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og/blog.png`, secureUrl: `${BASE_URL}/og/blog.png`, width: 1200, height: 630, alt: "AlphaLux Cleaning Blog", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: "AlphaLux Cleaning Blog", description: "House cleaning tips and guides for TX & CA homeowners.", images: [`${BASE_URL}/og/blog.png`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  other: { "theme-color": "#C9A961" },
};

const CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A961]">Blog</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Cleaning Guides & Tips</p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              The AlphaLux Cleaning Blog
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Expert guides on house cleaning, deep cleaning schedules, Airbnb turnovers, non-toxic products, and more — for homeowners across Texas and California.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A961] text-xs font-semibold uppercase tracking-[0.2em] mb-6">Featured Post</p>
          <Link href={`/blog/${featured.slug}`} className="group block bg-[#F8F7F4] border border-[#C9A961]/15 rounded-2xl p-8 lg:p-10 card-hover hover:border-[#C9A961]/30">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[#C9A961] text-xs font-semibold uppercase tracking-wider bg-[#C9A961]/10 px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <span className="text-gray-400 text-xs">{formatDate(featured.publishDate)}</span>
            </div>
            <h2 className="text-[#0A0A0A] font-bold leading-snug mb-4 group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              {featured.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
            <span className="text-[#C9A961] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-[#F8F7F4] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <h2 className="text-[#0A0A0A] font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              All Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <span key={cat} className="text-[#C9A961] text-xs font-medium bg-[#C9A961]/10 border border-[#C9A961]/20 px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-[#C9A961]/10 rounded-xl p-6 card-hover hover:border-[#C9A961]/30 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C9A961] text-xs font-semibold uppercase tracking-wider bg-[#C9A961]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{formatDate(post.publishDate)}</span>
                </div>
                <h3 className="text-[#0A0A0A] font-bold leading-snug mb-3 group-hover:text-[#C9A961] transition-colors flex-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <span className="text-[#C9A961] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
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
          <p className="text-gray-400 mb-8">Eco-friendly house cleaning across 17 cities in Texas and California.</p>
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
