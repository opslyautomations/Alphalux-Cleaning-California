export type ServiceSection = { h2: string; html: string };
export type FAQ = { q: string; a: string };
export type ServiceEntry = {
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  lead: string;
  sections: ServiceSection[];
  faqs: FAQ[];
};

/** Find a section by its h2 heading — returns { h2, html } or a stub */
export function sec(sections: ServiceSection[], h2: string): ServiceSection {
  return sections.find((s) => s.h2 === h2) ?? { h2, html: "" };
}
