import React from "react";

type BandProps = {
  tone?: "dark" | "light" | "mist";
  children: React.ReactNode;
  className?: string;
};

/** Full-bleed section band. dark=navy-800 w/ white text, mist=F4F6FA, light=white */
export function Band({ tone = "light", children, className = "" }: BandProps) {
  const bg =
    tone === "dark"
      ? "bg-[#253858]"
      : tone === "mist"
      ? "bg-[#F4F6FA]"
      : "bg-white";
  return (
    <section className={`w-full section-band ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
