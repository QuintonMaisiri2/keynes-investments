import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Keynes Investments",
  description: "Empowering Growth, Enriching Communities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
