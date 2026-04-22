export const PHONE_DISPLAY = "(972) 559-0223";
export const PHONE_TEL = "tel:+19725590223";
export const EMAIL = "info@alphaluxclean.com";
export const EMAIL_MAILTO = "mailto:info@alphaluxclean.com";
export const GBP_URL = "https://share.google/UG6ei8NirJNiDuHDi";
export const BASE_URL = "https://www.alphaluxclean.com";

export const SERVICES = [
  { name: "Standard Cleaning", slug: "standard-cleaning", price: "From $129" },
  { name: "Deep Cleaning", slug: "deep-cleaning", price: "From $249" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning", price: "From $299" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning", price: "From $99/visit" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning", price: "From $139" },
  { name: "One-Time Cleaning", slug: "one-time-cleaning", price: "From $179" },
  { name: "Vacation Rental Cleaning", slug: "vacation-rental-cleaning", price: "From $149" },
  { name: "Post Construction Cleaning", slug: "post-construction-cleaning", price: "From $399" },
];

export const TX_CITIES = [
  { name: "Dallas", slug: "dallas" },
  { name: "Fort Worth", slug: "fort-worth" },
  { name: "Austin", slug: "austin" },
  { name: "Houston", slug: "houston" },
  { name: "San Antonio", slug: "san-antonio" },
];

export const CA_CITIES = [
  { name: "Beverly Hills", slug: "beverly-hills" },
  { name: "Brentwood", slug: "brentwood" },
  { name: "Glendale", slug: "glendale" },
  { name: "Pasadena", slug: "pasadena" },
  { name: "Los Angeles", slug: "los-angeles" },
  { name: "Santa Monica", slug: "santa-monica" },
  { name: "Hollywood", slug: "hollywood" },
  { name: "Long Beach", slug: "long-beach" },
  { name: "Huntington Beach", slug: "huntington-beach" },
  { name: "Anaheim", slug: "anaheim" },
  { name: "Irvine", slug: "irvine" },
  { name: "Sacramento", slug: "sacramento" },
];

export const ALL_CITIES = [
  ...TX_CITIES.map((c) => ({ ...c, state: "TX", stateSlug: "tx" })),
  ...CA_CITIES.map((c) => ({ ...c, state: "CA", stateSlug: "ca" })),
];
