"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { navItems } from "./main-nav";

const documents = [
  { href: "documents/Terms & Conditions.pdf", label: "Terms and Conditions" },
  { href: "documents/Privacy Policy.pdf", label: "Privacy Policy" },
  { href: "documents/Disclaimer.pdf", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-24 text-brown border-t border-brown/20 font-roboto relative">
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
            <h3 className="font-bold">Keynes Investments</h3>
          </div>

          <div className="mt-6">
            <form className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button
                type="submit"
                className="bg-brown hover:bg-brown/90 whitespace-nowrap"
              >
                Subscribe
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
      <div className="border-y border-brown/20 py-6 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-5 md:gap-0">
        <div className="flex flex-wrap gap-5">
          {documents.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              download={true}
              target="_blank"
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
