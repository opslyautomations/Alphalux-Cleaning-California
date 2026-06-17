import FAQAccordion from "@/components/FAQAccordion";
import type { FAQ } from "@/lib/serviceTypes";

type FaqSectionProps = {
  faqs: FAQ[];
  sectionTone?: "light" | "mist";
};

/** FAQ section wrapping the accordion with consistent heading and spacing */
export function FaqSection({ faqs, sectionTone = "mist" }: FaqSectionProps) {
  const bg = sectionTone === "mist" ? "bg-[#F4F6FA]" : "bg-white";
  return (
    <section className={`w-full section-band ${bg}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[#0F1626] font-bold mb-8 leading-snug"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          }}
        >
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
