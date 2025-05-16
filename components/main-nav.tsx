"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const navItems = [
  { href: "/join", label: "Join the Fund" },
  { href: "/strategy", label: "Investment Strategy" },
  { href: "/resources", label: "Resources" },
  { href: "/news", label: "News" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center relative shadow">
      <Link href="/" className="flex items-center gap-2 z-10">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="kenyes logo"
          className="w-16"
        ></Image>
        <h1 className={`text-brown text-2xl font-medium font-roboto`}>
          Keynes Investments
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-brown hover:text-brown/80 transition-colors font-roboto"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="text-brown md:hidden z-10">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brown text-xl hover:text-brown/80 transition-colors"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
