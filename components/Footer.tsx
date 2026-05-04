import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { SERVICES, TX_CITIES, CA_CITIES, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_MAILTO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#253858] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Company */}
          <div>
            <div className="mb-5">
              <Link href="/" aria-label="AlphaLux Cleaning — Home">
                <Image
                  src="/alphalux-logo-light.png"
                  alt="AlphaLux Cleaning"
                  width={180}
                  height={180}
                  className="h-8 w-auto md:h-10"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 italic">
              "Luxury Clean. Non-Toxic. Zero Compromise."
            </p>
            <div className="space-y-3">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-3 text-gray-400 hover:text-[#253858] transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#253858] shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={EMAIL_MAILTO}
                className="flex items-center gap-3 text-gray-400 hover:text-[#253858] transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-[#253858] shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-[#253858] shrink-0 mt-0.5" />
                <span>Mon–Sat 8:00 AM – 6:00 PM<br />Sun by appointment</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3
              className="text-[#253858] text-xs uppercase tracking-widest font-medium mb-5"
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gray-400 hover:text-[#253858] transition-colors text-sm"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Locations */}
          <div>
            <h3 className="text-[#253858] text-xs uppercase tracking-widest font-medium mb-5">
              Locations
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white text-xs uppercase tracking-wider font-medium mb-2">
                  Texas
                </p>
                <ul className="space-y-1.5">
                  {TX_CITIES.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/locations/tx/${c.slug}`}
                        className="text-gray-400 hover:text-[#253858] transition-colors text-sm"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white text-xs uppercase tracking-wider font-medium mb-2">
                  California
                </p>
                <ul className="space-y-1.5">
                  {CA_CITIES.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/locations/ca/${c.slug}`}
                        className="text-gray-400 hover:text-[#253858] transition-colors text-sm"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4 — Company Links */}
          <div>
            <h3 className="text-[#253858] text-xs uppercase tracking-widest font-medium mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Reviews & Projects", href: "/reviews" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "All Services", href: "/services" },
                { label: "All Locations", href: "/locations" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#253858] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NAP strip */}
        <div className="mt-12 py-5 border-t border-[#1A1A1A] border-b">
          <p className="text-center text-gray-500 text-sm">
            <span className="text-gray-300 font-medium">AlphaLux Cleaning</span>
            {" · "}
            <a href={PHONE_TEL} className="hover:text-[#253858] transition-colors">
              {PHONE_DISPLAY}
            </a>
            {" · "}
            <a href={EMAIL_MAILTO} className="hover:text-[#253858] transition-colors">
              {EMAIL}
            </a>
            {" · "}
            Serving 17 Cities Across TX &amp; CA
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 AlphaLux Cleaning. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#253858] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#253858] transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-700">Built by Opsly Automations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
