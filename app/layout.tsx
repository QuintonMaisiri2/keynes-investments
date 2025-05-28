import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Keynes Investments",
  description: "Empowering Growth, Enriching Communities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    <html lang="en" className={`font-roboto`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7F58TV475Z"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7F58TV475Z');
        `}
      </Script>
      <body >
        <div className="min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
}

