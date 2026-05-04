import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alphaluxclean.com"),
  title: {
    default: "AlphaLux Cleaning | Non-Toxic House Cleaning TX & CA",
    template: "%s | AlphaLux Cleaning",
  },
  description:
    "Eco-friendly, non-toxic house cleaning in Texas & California. Licensed, insured, 5-star rated. Free quote in 60 seconds.",
  alternates: { canonical: "https://www.alphaluxclean.com" },
  openGraph: {
    type: "website",
    title: "AlphaLux Cleaning | Non-Toxic House Cleaning TX & CA",
    description:
      "Eco-friendly, non-toxic house cleaning in TX & CA. Licensed & insured. Free quote in 60 seconds.",
    url: "https://www.alphaluxclean.com",
    siteName: "AlphaLux Cleaning",
    locale: "en_US",
    images: [
      {
        url: "https://www.alphaluxclean.com/og/homepage.png",
        secureUrl: "https://www.alphaluxclean.com/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "AlphaLux Cleaning — Non-Toxic House Cleaning in Texas & California",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaLux Cleaning | Non-Toxic House Cleaning TX & CA",
    description:
      "Eco-friendly, non-toxic house cleaning in TX & CA. Licensed & insured. Free quote in 60 seconds.",
    images: ["https://www.alphaluxclean.com/og/homepage.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  other: { "theme-color": "#253858" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: "AlphaLux Cleaning",
  description:
    "Eco-conscious, non-toxic house cleaning services across Texas and California.",
  url: "https://www.alphaluxclean.com",
  telephone: "+19725590223",
  email: "info@alphaluxclean.com",
  image: "https://www.alphaluxclean.com/alphalux-logo.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mobile Service — We Come to You",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Dallas" },
    { "@type": "City", name: "Fort Worth" },
    { "@type": "City", name: "Austin" },
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "San Antonio" },
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "City", name: "Brentwood" },
    { "@type": "City", name: "Glendale" },
    { "@type": "City", name: "Pasadena" },
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "Santa Monica" },
    { "@type": "City", name: "Hollywood" },
    { "@type": "City", name: "Long Beach" },
    { "@type": "City", name: "Huntington Beach" },
    { "@type": "City", name: "Anaheim" },
    { "@type": "City", name: "Irvine" },
    { "@type": "City", name: "Sacramento" },
  ],
  sameAs: ["https://share.google/UG6ei8NirJNiDuHDi"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {/* GA4 — replace GA_MEASUREMENT_ID with your ID */}
        {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
        {/* <Script strategy="afterInteractive" id="ga4">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');`}</Script> */}

        {/* Google Tag Manager — replace GTM-XXXXXXX */}
        {/* <Script strategy="afterInteractive" id="gtm">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}</Script> */}

        {/* Facebook Pixel — replace PIXEL_ID */}
        {/* <Script strategy="afterInteractive" id="fbpixel">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','PIXEL_ID');fbq('track','PageView');`}</Script> */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />

        {/* GHL Form Embed Script */}
        <Script
          src="https://api.opslyautomations.com/js/form_embed.js"
          strategy="lazyOnload"
        />

        {/* GHL Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e913bd1024ff812cfe8182"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
