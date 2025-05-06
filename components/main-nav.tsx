"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import Image from "next/image"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center relative">
      <Link href="/" className="flex items-center z-10">
        <h1 className={`${playfair.className} text-brown text-2xl font-medium`}>Keynes Investments</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/join" className="text-brown hover:text-brown/80 transition-colors">
          Join the Fund
        </Link>
        <Link href="/strategy" className="text-brown hover:text-brown/80 transition-colors">
          Investment Strategy
        </Link>
        <Link href="/resources" className="text-brown hover:text-brown/80 transition-colors">
          Resources
        </Link>
        <Link href="/news" className="text-brown hover:text-brown/80 transition-colors">
          News
        </Link>
        <Link href="/testimonials" className="text-brown hover:text-brown/80 transition-colors">
          Testimonials
        </Link>
        <Link href="/contact" className="text-brown hover:text-brown/80 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="text-brown md:hidden z-10">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center space-y-8 md:hidden">
          <Link href="/join" className="text-brown text-xl hover:text-brown/80 transition-colors" onClick={toggleMenu}>
            Join the Fund
          </Link>
          <Link
            href="/strategy"
            className="text-brown text-xl hover:text-brown/80 transition-colors"
            onClick={toggleMenu}
          >
            Investment Strategy
          </Link>
          <Link
            href="/resources"
            className="text-brown text-xl hover:text-brown/80 transition-colors"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link href="/news" className="text-brown text-xl hover:text-brown/80 transition-colors" onClick={toggleMenu}>
            News
          </Link>
          <Link
            href="/testimonials"
            className="text-brown text-xl hover:text-brown/80 transition-colors"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-brown text-xl hover:text-brown/80 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
