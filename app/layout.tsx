import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Keynes Investments",
  description:
    "Keynes Investments is a student-led investment club managing a diversified AED 70,000 portfolio with value investing principles.",
  keywords: [
    "Keynes Investments",
    "student investment club",
    "finance",
    "portfolio",
    "Warren Buffett",
    "Benjamin Graham",
    "value investing",
    "student-led investing",
    "ethical investing",
    "long-term investing",
    "sustainable investing",
    "impact investing",
    "social impact investing",
    "investment mentorship",
    "future financial leaders",
    "private investment club",
    "student investors",
    "investment portfolio performance",
    "portfolio returns",
    "investment strategy",
    "investment opportunities",
    "YTD return",
    "3-year return",
    "5-year return",
    "Apple stock performance",
    "Microsoft stock performance",
    "management fee",
    "performance fee",
    "charity donations",
    "giving back through investing",
    "education funding",
    "climate action investing",
    "community development fund",
    "responsible investing",
    "selective membership",
    "financial growth",
    "student finance club",
    "investment for good",
    "ethical finance",
    "impact-driven investing",
    "sustainable finance",
    "investment learning",
    "youth investing",
    "student finance leaders",
    "investment resources",
  ],
  authors: [{ name: "Hamdan Alketbi" }],
  openGraph: {
    title: "Keynes Investments",
    description:
      "A student-led investment club applying value investing principles to global markets.",
    url: "https://keynesinvestments.org",
    siteName: "Keynes Investments",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Keynes Investments logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynes Investments",
    description:
      "Student-led investment club managing a diversified AED 70,000 portfolio.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-96x96.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`font-roboto`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7F58TV475Z"
          strategy="afterInteractive"
        ></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7F58TV475Z');
        `}
        </Script>
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
