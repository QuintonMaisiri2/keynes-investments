import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 text-brown border-t border-brown/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className={`${playfair.className} text-2xl font-medium`}>Keynes Investments</h3>
          <p className="mt-4">
            A student-managed private investment club committed to cultivating financial skillsets while generating
            long-term, ethical returns.
          </p>
          <div className="mt-6">
            <form className="flex gap-2 max-w-md">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button type="submit" className="bg-brown hover:bg-brown/90 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/join" className="hover:underline">
              Join the Fund
            </Link>
            <Link href="/strategy" className="hover:underline">
              Investment Strategy
            </Link>
            <Link href="/resources" className="hover:underline">
              Resources
            </Link>
            <Link href="/news" className="hover:underline">
              News
            </Link>
            <Link href="/testimonials" className="hover:underline">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-6">
            <Link href="#" className="text-brown hover:text-brown/80">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-brown hover:text-brown/80">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-brown hover:text-brown/80">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:info@keynesinvestments.com" className="text-brown hover:text-brown/80">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <p className="text-sm">© 2035 by Keynes Investments.</p>
          <p className="text-sm mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
