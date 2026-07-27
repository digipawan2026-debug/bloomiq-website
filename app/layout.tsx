import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BLOOMIQ Velvet Oud Royal | Affordable Luxury Perfume",
    template: "%s | BLOOMIQ",
  },

  description:
    "Discover BLOOMIQ Velvet Oud Royal, a premium unisex Eau De Parfum created for everyday confidence, office wear, parties, date nights and gifting. Available in 30 ml and 50 ml.",

  keywords: [
    "BLOOMIQ",
    "BLOOMIQ perfume",
    "Velvet Oud Royal",
    "luxury perfume",
    "affordable luxury perfume",
    "unisex perfume",
    "Eau De Parfum",
    "oud perfume",
    "long lasting perfume",
    "premium perfume India",
    "perfume for men and women",
    "gift perfume",
  ],

  authors: [{ name: "BLOOMIQ" }],
  creator: "BLOOMIQ",
  publisher: "BLOOMIQ",

  category: "Beauty and Fragrance",

  applicationName: "BLOOMIQ",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BLOOMIQ",
    title: "BLOOMIQ Velvet Oud Royal | Affordable Luxury Perfume",
    description:
      "Experience Velvet Oud Royal, a premium unisex Eau De Parfum from BLOOMIQ. Affordable luxury in 30 ml and 50 ml.",
    images: [
      {
        url: "/perfume50.jpeg",
        width: 1200,
        height: 630,
        alt: "BLOOMIQ Velvet Oud Royal luxury perfume",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BLOOMIQ Velvet Oud Royal",
    description:
      "Affordable luxury unisex Eau De Parfum by BLOOMIQ, available in 30 ml and 50 ml.",
    images: ["/perfume50.jpeg"],
  },

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${playfair.variable} ${poppins.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}