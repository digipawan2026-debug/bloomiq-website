import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomiq.in"),

  title: {
    default: "BLOOMIQ Velvet Oud Royal | Affordable Luxury Perfume",
    template: "%s | BLOOMIQ",
  },

  description:
    "Discover BLOOMIQ Velvet Oud Royal, an affordable luxury perfume crafted for elegance, confidence and a memorable long-lasting fragrance experience.",

  keywords: [
    "BLOOMIQ",
    "Velvet Oud Royal",
    "affordable luxury perfume",
    "oud perfume India",
    "long lasting perfume",
    "premium perfume",
    "perfume for men and women",
    "luxury fragrance India",
    "30 ml perfume",
    "50 ml perfume",
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
    title: "BLOOMIQ Velvet Oud Royal",
    description:
      "Affordable luxury perfume designed for elegance, confidence and a memorable fragrance trail.",
    url: "https://bloomiq.in",
    siteName: "BLOOMIQ",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
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
      <body>{children}</body>
    </html>
  );
}