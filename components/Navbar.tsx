"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { SERVICES, TX_CITIES, CA_CITIES, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [txOpen, setTxOpen] = useState(false);
  const [caOpen, setCaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locHover, setLocHover] = useState(false);
  const [txHover, setTxHover] = useState(false);
  const [caHover, setCaHover] = useState(false);
  const locRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
    setTxOpen(false);
    setCaOpen(false);
  };

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-[#253858] ${
      isActive(href) ? "text-[#253858] border-b-2 border-[#253858] pb-0.5" : "text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#253858]/20"
          : "bg-[#0A0A0A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={closeMobile} aria-label="AlphaLux Cleaning — Home">
            <Image
              src="/alphalux-logo-light.png"
              alt="AlphaLux Cleaning"
              width={180}
              height={180}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className={linkClass("/")}>Home</Link>

            {/* Services Dropdown */}
            <div className="relative dropdown-trigger group">
              <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#253858] transition-colors">
                Services
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
              <div className="bg-[#0A0A0A] border border-[#253858]/20 rounded-xl shadow-2xl py-2">
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#253858] hover:bg-[#1A1A1A] transition-colors">
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-[#253858]/10 mt-2 pt-2">
                  <Link href="/services" className="block px-4 py-2.5 text-sm text-[#253858] hover:bg-[#1A1A1A] transition-colors font-medium">
                    All Services →
                  </Link>
                </div>
              </div>
              </div>
            </div>

            {/* Locations — Two-tier flyout */}
            <div
              ref={locRef}
              className="relative"
              onMouseEnter={() => setLocHover(true)}
              onMouseLeave={() => { setLocHover(false); setTxHover(false); setCaHover(false); }}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#253858] ${isActive("/locations") ? "text-[#253858]" : "text-white"}`}>
                Locations
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locHover ? "rotate-180" : ""}`} />
              </button>

              {/* First-level: Texas / California */}
              {locHover && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 z-50">
                <div className="bg-[#0A0A0A] border border-[#253858]/20 rounded-xl shadow-2xl py-2">

                  {/* Texas row */}
                  <div
                    className="relative"
                    onMouseEnter={() => { setTxHover(true); setCaHover(false); }}
                    onMouseLeave={() => setTxHover(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-[#253858] hover:bg-[#1A1A1A] transition-colors cursor-default">
                      <span className="font-medium">Texas</span>
                      <ChevronRight className="w-4 h-4 text-[#253858]" />
                    </div>
                    {txHover && (
                      <div className="absolute top-0 left-full pl-1 w-48 z-50">
                      <div className="bg-[#0A0A0A] border border-[#253858]/20 rounded-xl shadow-2xl py-2">
                        {TX_CITIES.map((c) => (
                          <Link key={c.slug} href={`/locations/tx/${c.slug}`}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#253858] hover:bg-[#1A1A1A] transition-colors">
                            {c.name}, TX
                          </Link>
                        ))}
                      </div>
                      </div>
                    )}
                  </div>

                  {/* California row */}
                  <div
                    className="relative"
                    onMouseEnter={() => { setCaHover(true); setTxHover(false); }}
                    onMouseLeave={() => setCaHover(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-[#253858] hover:bg-[#1A1A1A] transition-colors cursor-default">
                      <span className="font-medium">California</span>
                      <ChevronRight className="w-4 h-4 text-[#253858]" />
                    </div>
                    {caHover && (
                      <div className="absolute top-0 left-full pl-1 w-52 z-50">
                      <div className="bg-[#0A0A0A] border border-[#253858]/20 rounded-xl shadow-2xl py-2">
                        {CA_CITIES.map((c) => (
                          <Link key={c.slug} href={`/locations/ca/${c.slug}`}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#253858] hover:bg-[#1A1A1A] transition-colors">
                            {c.name}, CA
                          </Link>
                        ))}
                      </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-[#253858]/10 mt-1 pt-1">
                    <Link href="/locations" className="block px-4 py-2.5 text-sm text-[#253858] font-medium hover:bg-[#1A1A1A] transition-colors">
                      All Locations →
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            <Link href="/about" className={linkClass("/about")}>About Us</Link>
            <Link href="/reviews" className={linkClass("/reviews")}>Reviews</Link>
            <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_TEL} className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#253858] transition-colors">
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="bg-[#253858] text-[#0A0A0A] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2C4267] transition-colors">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white hover:text-[#253858] transition-colors p-2 -mr-2" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#0A0A0A] z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            <Link href="/" onClick={closeMobile} className="block py-3 text-white hover:text-[#253858] font-medium border-b border-[#1A1A1A] transition-colors">Home</Link>

            {/* Services accordion */}
            <div className="border-b border-[#1A1A1A]">
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-3 text-white hover:text-[#253858] font-medium transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pb-3 pl-4 space-y-1">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeMobile}
                      className="block py-2 text-sm text-gray-400 hover:text-[#253858] transition-colors">{s.name}</Link>
                  ))}
                  <Link href="/services" onClick={closeMobile} className="block py-2 text-sm text-[#253858] font-medium">All Services →</Link>
                </div>
              )}
            </div>

            {/* Locations accordion */}
            <div className="border-b border-[#1A1A1A]">
              <button onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between w-full py-3 text-white hover:text-[#253858] font-medium transition-colors">
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsOpen && (
                <div className="pb-3 pl-4 space-y-1">
                  <button onClick={() => setTxOpen(!txOpen)}
                    className="flex items-center justify-between w-full py-2 text-sm transition-colors">
                    <span className="text-[#253858] font-medium">Texas</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${txOpen ? "rotate-180" : ""}`} />
                  </button>
                  {txOpen && (
                    <div className="pl-4 space-y-1">
                      {TX_CITIES.map((c) => (
                        <Link key={c.slug} href={`/locations/tx/${c.slug}`} onClick={closeMobile}
                          className="block py-1.5 text-sm text-gray-400 hover:text-[#253858] transition-colors">{c.name}</Link>
                      ))}
                    </div>
                  )}
                  <button onClick={() => setCaOpen(!caOpen)}
                    className="flex items-center justify-between w-full py-2 text-sm transition-colors">
                    <span className="text-[#253858] font-medium">California</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${caOpen ? "rotate-180" : ""}`} />
                  </button>
                  {caOpen && (
                    <div className="pl-4 space-y-1">
                      {CA_CITIES.map((c) => (
                        <Link key={c.slug} href={`/locations/ca/${c.slug}`} onClick={closeMobile}
                          className="block py-1.5 text-sm text-gray-400 hover:text-[#253858] transition-colors">{c.name}</Link>
                      ))}
                    </div>
                  )}
                  <Link href="/locations" onClick={closeMobile} className="block py-2 text-sm text-[#253858] font-medium">All Locations →</Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMobile} className="block py-3 text-white hover:text-[#253858] font-medium border-b border-[#1A1A1A] transition-colors">About Us</Link>
            <Link href="/reviews" onClick={closeMobile} className="block py-3 text-white hover:text-[#253858] font-medium border-b border-[#1A1A1A] transition-colors">Reviews</Link>
            <Link href="/blog" onClick={closeMobile} className="block py-3 text-white hover:text-[#253858] font-medium border-b border-[#1A1A1A] transition-colors">Blog</Link>
            <Link href="/contact" onClick={closeMobile} className="block py-3 text-white hover:text-[#253858] font-medium border-b border-[#1A1A1A] transition-colors">Contact</Link>

            <div className="pt-4 space-y-3">
              <a href={PHONE_TEL} className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#253858] text-[#253858] rounded-lg font-medium hover:bg-[#253858]/10 transition-colors">
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>
              <Link href="/contact" onClick={closeMobile}
                className="flex items-center justify-center w-full py-3.5 bg-[#253858] text-[#0A0A0A] rounded-lg font-semibold hover:bg-[#2C4267] transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
