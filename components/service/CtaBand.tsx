import { Phone, CheckCircle } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import {
  CA_PHONE_DISPLAY,
  CA_PHONE_TEL,
  TX_PHONE_DISPLAY,
  TX_PHONE_TEL,
} from "@/lib/constants";

type CtaBandProps = {
  serviceName: string;
};

/** Dark closing CTA band with phone buttons and GHL form */
export function CtaBand({ serviceName }: CtaBandProps) {
  return (
    <section className="w-full section-band bg-[#1A2740]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy + buttons */}
          <div>
            <p className="eyebrow eyebrow--dark mb-3">Get Started</p>
            <h2
              className="text-white font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Book Your {serviceName} Today
            </h2>
            <p className="text-white/60 mb-8 text-base leading-relaxed">
              Available across 17 cities in Texas and California. Same-week scheduling often available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={TX_PHONE_TEL}
                className="btn-primary"
                style={{ minHeight: "52px" }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Texas {TX_PHONE_DISPLAY}
              </a>
              <a
                href={CA_PHONE_TEL}
                className="btn-secondary btn-secondary--dark"
                style={{ minHeight: "52px" }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Cali {CA_PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-white/50">
              {["Licensed & Insured", "100% Non-Toxic", "5-Star Rated", "17 Cities"].map(
                (badge) => (
                  <span key={badge} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#253858]" aria-hidden="true" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: form */}
          <div className="card--dark rounded-2xl" style={{ padding: "28px" }}>
            <h3
              className="text-white font-bold mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get Your Free Quote
            </h3>
            <p className="text-white/50 text-sm mb-5">Response within 24 hours.</p>
            <GHLForm />
          </div>
        </div>
      </div>
    </section>
  );
}
