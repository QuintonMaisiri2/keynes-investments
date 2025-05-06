import { PageHeader } from "@/components/page-header"
import { Playfair_Display } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function NewsPage() {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  return (
    <div>
      <PageHeader
        title="News & Updates"
        description="Stay current with Keynes Investments events, announcements, and market insights."
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-8`}>Latest Updates</h2>

            <div className="space-y-8">
              <div className="border-b border-brown/10 pb-8">
                <p className="text-brown/70 flex items-center mb-2">
                  <CalendarIcon className="mr-2" size={16} />
                  <span>{formatDate(new Date(2023, 9, 15))}</span>
                </p>
                <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-3`}>
                  Keynes Investments Reaches $1M Assets Under Management
                </h3>
                <p className="text-brown mb-4">
                  We're proud to announce that Keynes Investments has reached a significant milestone of $1 million in
                  assets under management. This achievement reflects the trust our investors place in our student-led
                  team and our consistent performance.
                </p>
                <Link href="#" className="text-brown font-medium hover:underline">
                  Read more →
                </Link>
              </div>

              <div className="border-b border-brown/10 pb-8">
                <p className="text-brown/70 flex items-center mb-2">
                  <CalendarIcon className="mr-2" size={16} />
                  <span>{formatDate(new Date(2023, 8, 22))}</span>
                </p>
                <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-3`}>
                  Annual Pitch Competition Winners Announced
                </h3>
                <p className="text-brown mb-4">
                  Congratulations to Team Horizon for winning this year's investment pitch competition with their
                  analysis of renewable energy infrastructure opportunities. Their detailed research and compelling
                  valuation models impressed our panel of judges.
                </p>
                <Link href="#" className="text-brown font-medium hover:underline">
                  Read more →
                </Link>
              </div>

              <div className="border-b border-brown/10 pb-8">
                <p className="text-brown/70 flex items-center mb-2">
                  <CalendarIcon className="mr-2" size={16} />
                  <span>{formatDate(new Date(2023, 7, 8))}</span>
                </p>
                <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-3`}>
                  Q2 Donation: $32,500 to Education Access Initiative
                </h3>
                <p className="text-brown mb-4">
                  We're pleased to announce our Q2 charitable donation of $32,500 to the Education Access Initiative.
                  This contribution will fund scholarships for underprivileged students, providing access to quality
                  education and resources.
                </p>
                <Link href="#" className="text-brown font-medium hover:underline">
                  Read more →
                </Link>
              </div>

              <div>
                <p className="text-brown/70 flex items-center mb-2">
                  <CalendarIcon className="mr-2" size={16} />
                  <span>{formatDate(new Date(2023, 6, 17))}</span>
                </p>
                <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-3`}>
                  New Partnership with Financial Leaders Association
                </h3>
                <p className="text-brown mb-4">
                  Keynes Investments is excited to announce a new partnership with the Financial Leaders Association.
                  This collaboration will provide our student members with additional mentorship opportunities, access
                  to industry events, and enhanced professional networking.
                </p>
                <Link href="#" className="text-brown font-medium hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-amber-50/50 p-6 rounded-lg mb-8">
              <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-4`}>Newsletter</h3>
              <p className="text-brown mb-4">
                Subscribe to our monthly newsletter for investment insights, event announcements, and updates on our
                charitable impact.
              </p>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your email address" className="bg-white" type="email" />
                </div>
                <Button type="submit" className="w-full bg-brown hover:bg-brown/90">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="border border-brown/20 rounded-lg p-6 mb-8">
              <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-4`}>Upcoming Events</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-brown font-medium">Investment Workshop Series</p>
                  <p className="text-brown/70 text-sm">November 10, 2023 • 4:00 PM</p>
                  <p className="text-brown text-sm mt-1">Financial Analysis Center, Room 204</p>
                </div>
                <div>
                  <p className="text-brown font-medium">ESG Investing Panel Discussion</p>
                  <p className="text-brown/70 text-sm">November 18, 2023 • 5:30 PM</p>
                  <p className="text-brown text-sm mt-1">Business School Auditorium</p>
                </div>
                <div>
                  <p className="text-brown font-medium">Fall Recruitment Info Session</p>
                  <p className="text-brown/70 text-sm">December 2, 2023 • 6:00 PM</p>
                  <p className="text-brown text-sm mt-1">Virtual (Zoom)</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-brown/10 hover:bg-brown/20 text-brown">View All Events</Button>
            </div>

            <div className="border border-brown/20 rounded-lg p-6">
              <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-4`}>Archive</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-brown hover:underline">
                  2023 (12)
                </Link>
                <Link href="#" className="block text-brown hover:underline">
                  2022 (24)
                </Link>
                <Link href="#" className="block text-brown hover:underline">
                  2021 (18)
                </Link>
                <Link href="#" className="block text-brown hover:underline">
                  2020 (15)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
