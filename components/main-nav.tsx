"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export const navItems = [
  { href: "/join", label: "Join the Fund" },
  { href: "/strategy", label: "Investment Strategy" },
  { href: "/resources", label: "Resources" },
  { href: "/news", label: "News" },
  // { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Increased threshold for better detection
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full py-4 px-6 md:px-12 flex justify-between items-center shadow fixed font-ebgaramond ${
          isScrolled
            ? "top-0 left-0 right-0 z-50 bg-brown text-white backdrop-blur-sm"
            : "relative"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="kenyes logo"
            className="w-16"
          ></Image>
          <h1
            className={`text-2xl font-medium font-ebgaramond ${
              isScrolled ? "text-white" : "text-brown"
            }`}
          >
            Keynes Investments
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
               className={`text-xl hover:text-white/80 transition-colors ${
                  isScrolled ? "text-white" : "text-brown"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="text-brown lg:hidden z-[20]">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white z-[20] flex flex-col items-center justify-center space-y-8 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl text-brown hover:text-white/80 transition-colors`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      {isScrolled && <div className="h-20"></div>}
    </>
  );
}
