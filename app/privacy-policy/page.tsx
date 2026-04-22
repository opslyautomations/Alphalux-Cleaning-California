import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, EMAIL_MAILTO, EMAIL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | AlphaLux Cleaning",
  description: "AlphaLux Cleaning Privacy Policy — how we collect, use, and protect your information.",
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C9A961]">Privacy Policy</span>
        </nav>
        <h1 className="font-bold text-[#0A0A0A] mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Privacy Policy
        </h1>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
          <p><strong>Last updated: April 2026</strong></p>
          <p>AlphaLux Cleaning (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates alphaluxclean.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name, email address, phone number, and service address when you request a quote or contact us.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>How We Use Your Information</h2>
          <p>We use the information we collect to provide and improve our services, communicate with you about your cleaning appointments, send scheduling confirmations and reminders, and respond to your inquiries.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at <a href={EMAIL_MAILTO} className="text-[#C9A961] hover:underline">{EMAIL}</a> or call <a href={PHONE_TEL} className="text-[#C9A961] hover:underline">{PHONE_DISPLAY}</a>.</p>
        </div>
      </div>
    </section>
  );
}
