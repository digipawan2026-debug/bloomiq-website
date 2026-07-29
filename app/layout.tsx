import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

import {
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomiq.in"),

  title: {
    default: "BLOOMIQ Velvet Oud Royal | Affordable Luxury Perfume",
    template: "%s | BLOOMIQ",
  },

  description:
    "BLOOMIQ Velvet Oud Royal is a premium long-lasting unisex Eau de Parfum crafted in India for everyday wear, office, parties, date nights and gifting. Experience affordable luxury with every spray.",

  keywords: [
    "BLOOMIQ",
    "Velvet Oud Royal",
    "Luxury Eau de Parfum",
    "Affordable Luxury Perfume",
    "Premium Unisex Perfume",
    "Long Lasting Perfume",
    "Office Wear Perfume",
    "Daily Wear Perfume",
    "Party Wear Perfume",
    "Date Night Perfume",
    "Gift Perfume",
    "Made in India Perfume",
    "50 ml Perfume",
    "30 ml Perfume",
  ],

  authors: [
    {
      name: "BLOOMIQ",
    },
  ],

  creator: "BLOOMIQ",
  publisher: "BLOOMIQ",

  applicationName: "BLOOMIQ",

  category: "Beauty and Fragrance",

  alternates: {
    canonical: "/",
  },

  openGraph: {
  title: "BLOOMIQ Velvet Oud Royal | Premium Long-Lasting Perfume",
  description:
    "Affordable luxury perfume designed for elegance, confidence and a memorable fragrance trail.",
  url: "https://bloomiq.in",
  siteName: "BLOOMIQ",
  images: [
    {
      url: "/og-image.jpeg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
      alt: "BLOOMIQ Velvet Oud Royal luxury perfume",
    },
  ],
  locale: "en_IN",
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "BLOOMIQ Velvet Oud Royal",
    description:
      "Affordable luxury perfume crafted for an elegant and memorable presence.",
    images: ["/og-image.jpeg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=G-MHFBKJ1X81`}
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-MHFBKJ1X81');
    `}
  </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}