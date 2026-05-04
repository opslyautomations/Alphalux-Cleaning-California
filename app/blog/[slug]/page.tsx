import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blogData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDesc,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: "AlphaLux Cleaning",
      locale: "en_US",
      publishedTime: post.publishDate,
      images: [{ url: `${BASE_URL}/og/blog.png`, secureUrl: `${BASE_URL}/og/blog.png`, width: 1200, height: 630, alt: post.title, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.metaDesc, images: [`${BASE_URL}/og/blog.png`] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    other: { "theme-color": "#253858" },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderInlineLinks(text: string, key: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return <Link key={i} href={match[2]} className="text-[#253858] underline hover:text-[#2C4267] transition-colors">{match[1]}</Link>;
        }
        return part;
      })}
    </>
  );
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[] = [];
  let inTable = false;

  const flushTable = (key: string) => {
    if (tableRows.length < 2) return;
    const [headerRow, , ...dataRows] = tableRows;
    const headers = headerRow.split("|").map((h: string) => h.trim()).filter(Boolean);
    const rows = dataRows.map((r: string) => r.split("|").map((c: string) => c.trim()).filter(Boolean));
    elements.push(
      <div key={key} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#253858]/10">
              {headers.map((h: string, i: number) => (
                <th key={i} className="text-left px-4 py-2 font-semibold text-[#0A0A0A] border border-[#253858]/20">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row: string[], ri: number) => (
              <tr key={ri} className="border-b border-[#253858]/10">
                {row.map((cell: string, ci: number) => (
                  <td key={ci} className="px-4 py-2 text-gray-600 border border-[#253858]/10">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  lines.forEach((line, i) => {
    const key = `line-${i}`;

    if (line.startsWith("|")) {
      if (!inTable) inTable = true;
      tableRows.push(line);
      return;
    }

    if (inTable) {
      flushTable(`table-${i}`);
      inTable = false;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key} className="text-[#0A0A0A] font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key} className="text-[#0A0A0A] font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem" }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key} className="font-semibold text-[#0A0A0A] mt-5 mb-1">{line.slice(2, -2)}</p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key} className="text-gray-700 leading-relaxed ml-4 list-disc">{renderInlineLinks(line.slice(2), key)}</li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key} className="mt-3" />);
    } else {
      elements.push(
        <p key={key} className="text-gray-700 leading-relaxed mt-3">{renderInlineLinks(line, key)}</p>
      );
    }
  });

  if (inTable) flushTable("table-end");

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const moreRelated = related.length < 2
    ? [...related, ...BLOG_POSTS.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 2 - related.length)]
    : related;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: { "@type": "Organization", name: "AlphaLux Cleaning", url: BASE_URL },
    publisher: { "@type": "Organization", name: "AlphaLux Cleaning", url: BASE_URL },
    url: `${BASE_URL}/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-14 lg:pt-40 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#253858] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#253858] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#253858] line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[#253858] text-xs font-semibold uppercase tracking-wider bg-[#253858]/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{formatDate(post.publishDate)}</span>
          </div>
          <h1 className="text-white font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-wrapper">
            {renderBody(post.body)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="bg-[#F8F7F4] py-14 border-t border-[#253858]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-[#253858]/10 rounded-xl p-6 group">
                  <summary className="text-[#0A0A0A] font-semibold cursor-pointer list-none flex items-center justify-between gap-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    {faq.q}
                    <span className="text-[#253858] shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mid-article CTA */}
      <section className="bg-[#F8F7F4] py-10 border-t border-[#253858]/10 border-b border-[#253858]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#0A0A0A] font-bold text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                Ready to Book a Professional Clean?
              </p>
              <p className="text-gray-500 text-sm">Eco-friendly, non-toxic cleaning across 17 cities in TX &amp; CA.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#253858] text-[#0A0A0A] font-semibold px-6 py-3 rounded-lg hover:bg-[#2C4267] transition-colors text-sm">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 border border-[#253858] text-[#253858] font-semibold px-6 py-3 rounded-lg hover:bg-[#253858]/10 transition-colors text-sm">
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {moreRelated.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#0A0A0A] font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {moreRelated.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group bg-[#F8F7F4] border border-[#253858]/10 rounded-xl p-5 card-hover hover:border-[#253858]/30">
                  <span className="text-[#253858] text-xs font-semibold uppercase tracking-wider bg-[#253858]/10 px-2 py-0.5 rounded-full mb-3 inline-block">
                    {rel.category}
                  </span>
                  <h3 className="text-[#0A0A0A] font-bold leading-snug mb-3 group-hover:text-[#253858] transition-colors text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                    {rel.title}
                  </h3>
                  <span className="text-[#253858] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#253858] transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" /> Back to All Articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
