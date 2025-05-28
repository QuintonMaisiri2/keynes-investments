"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { navItems } from "./main-nav";
import { useState } from "react";

const documents = [
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {

  const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);

const handleNewsLetterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    if (res.ok) {
      window.alert("Subscription successful!");
      setEmail(""); // Clear the input field after successful subscription
    } else {
      window.alert("Failed to subscribe");
    }
  } catch (error) {
    window.alert("An error occurred while subscribing. Please try again.");
  }
};

  return (
    <footer className="w-full py-12 px-6 md:px-24 bg-brown border-t border-brown/20 font-ebgaramond relative">
      <div className=" flex flex-col md:flex-row gap-5 md:gap-0 justify-between mb-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              alt="kenyes logo"
              className="w-16"
            ></Image>
            <h3 className="font-bold text-2xl">Keynes Investments</h3>
          </div>
          <p>Subscribe to our news leter</p>
          <div className="mt-6">
            <form
              className="flex gap-2 max-w-md"
              onSubmit={handleNewsLetterSubmit}
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-white hover:bg-amber-50/50 hover:shadow hover:text-white/90  text-brown whitespace-nowrap"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-y border-white/20 py-6 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-5 md:gap-0">
        <div className="flex flex-wrap gap-5">
          {documents.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              className="block text-sm hover:underline"
            >
              {doc.label}
            </a>
          ))}
        </div>
        <p>Copyright &copy; Keynes Investments. All rights reserved</p>

        <div className="flex space-x-4">
          <Link href="#" className="text-brown hover:text-brown/80">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-brown hover:text-brown/80">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
