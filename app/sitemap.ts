import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

const BASE = "https://www.alphaluxclean.com";
const NOW = new Date("2026-04-22");

const SERVICES = [
  "standard-cleaning",
  "deep-cleaning",
  "move-out-cleaning",
  "recurring-cleaning",
  "airbnb-cleaning",
  "one-time-cleaning",
  "vacation-rental-cleaning",
  "post-construction-cleaning",
];

const TX_CITIES = ["dallas", "fort-worth", "austin", "houston", "san-antonio"];
const CA_CITIES = [
  "beverly-hills",
  "brentwood",
  "glendale",
  "pasadena",
  "los-angeles",
  "santa-monica",
  "hollywood",
  "long-beach",
  "huntington-beach",
  "anaheim",
  "irvine",
  "sacramento",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES.map((s) => ({
    url: `${BASE}/services/${s}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const txUrls = TX_CITIES.map((c) => ({
    url: `${BASE}/locations/tx/${c}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caUrls = CA_CITIES.map((c) => ({
    url: `${BASE}/locations/ca/${c}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogUrls = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reviews`, lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
    ...serviceUrls,
    ...txUrls,
    ...caUrls,
    ...blogUrls,
  ];
}
