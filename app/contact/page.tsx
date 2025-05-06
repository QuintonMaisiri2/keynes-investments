import { PageHeader } from "@/components/page-header"
import { Playfair_Display } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Linkedin, Instagram, Twitter } from "lucide-react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Reach out to the Keynes Investments team for inquiries, partnerships, or to learn more about our fund."
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-6`}>Get In Touch</h2>
              <p className="text-brown text-lg mb-8">
                Whether you're interested in investing with us, joining our student team, or exploring potential
                partnerships, we'd love to hear from you. Fill out the form, and a member of our team will get back to
                you soon.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-brown">
                      First Name
                    </label>
                    <Input id="firstName" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-brown">
                      Last Name
                    </label>
                    <Input id="lastName" className="bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-brown">
                    Email
                  </label>
                  <Input id="email" type="email" className="bg-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-brown">
                    Subject
                  </label>
                  <Input id="subject" className="bg-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-brown">
                    Message
                  </label>
                  <Textarea id="message" rows={6} className="bg-white" />
                </div>

                <Button type="submit" className="bg-brown hover:bg-brown/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-6`}>Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <Mail className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Email</h3>
                    <p className="text-brown">info@keynesinvestments.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Location</h3>
                    <p className="text-brown">Finance Building, Room 204</p>
                    <p className="text-brown">University Campus, College Town, CT 10101</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Phone</h3>
                    <p className="text-brown">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Office Hours</h3>
                    <p className="text-brown">Monday - Friday: 10:00 AM - 4:00 PM</p>
                    <p className="text-brown">By appointment only</p>
                  </div>
                </div>
              </div>

              <h3 className={`${playfair.className} text-brown text-xl font-medium mb-4`}>Connect With Us</h3>
              <div className="flex space-x-6 mb-8">
                <a href="#" className="text-brown hover:text-brown/80 transition-colors">
                  <Linkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-brown hover:text-brown/80 transition-colors">
                  <Instagram size={28} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-brown hover:text-brown/80 transition-colors">
                  <Twitter size={28} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>

              <div className="aspect-video bg-amber-50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
