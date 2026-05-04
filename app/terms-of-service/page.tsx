import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, EMAIL_MAILTO, EMAIL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | AlphaLux Cleaning",
  description: "AlphaLux Cleaning Terms of Service — terms governing use of our services and website.",
  alternates: { canonical: `${BASE_URL}/terms-of-service` },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#253858] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#253858]">Terms of Service</span>
        </nav>
        <h1 className="font-bold text-[#0A0A0A] mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Terms of Service
        </h1>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
          <p><strong>Last updated: April 2026</strong></p>
          <p>By using AlphaLux Cleaning services, you agree to these Terms of Service. Please read them carefully.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>Services</h2>
          <p>AlphaLux Cleaning provides professional house cleaning services in Texas and California. All services are provided by trained, background-checked, insured professionals.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>Scheduling and Cancellations</h2>
          <p>We request 48 hours notice for cancellations or rescheduling of standard and recurring appointments. For deep cleans, move-out cleans, and post-construction cleans, we request 72 hours notice when possible.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>Liability</h2>
          <p>AlphaLux Cleaning carries full liability insurance. In the unlikely event of damage, please notify us within 24 hours of your service completion.</p>
          <h2 className="text-[#0A0A0A] font-bold text-xl mt-8" style={{ fontFamily: "var(--font-playfair)" }}>Contact</h2>
          <p>Questions? Contact us at <a href={EMAIL_MAILTO} className="text-[#253858] hover:underline">{EMAIL}</a> or <a href={PHONE_TEL} className="text-[#253858] hover:underline">{PHONE_DISPLAY}</a>.</p>
        </div>
      </div>
    </section>
  );
}
