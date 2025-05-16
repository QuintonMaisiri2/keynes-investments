import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

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
    <html lang="en" className={`font-roboto`}>
      <body >
        <div className="min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
