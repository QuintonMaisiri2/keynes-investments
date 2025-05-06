import { PageHeader } from "@/components/page-header"
import { Playfair_Display } from "next/font/google"
import { Quote } from "lucide-react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader
        title="Testimonials & Member Spotlights"
        description="Hear from our members, alumni, and charity partners about their experience with Keynes Investments."
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-8`}>Student Members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-amber-50/50 p-8 rounded-lg relative">
              <Quote className="text-brown/20 absolute top-4 left-4" size={32} />
              <div className="ml-6 mt-4">
                <p className="text-brown text-lg italic mb-6">
                  "Joining Keynes Investments has been the most impactful decision of my college career. The hands-on
                  experience analyzing companies and making real investment decisions has taught me more than any
                  classroom could. Plus, knowing our performance benefits charitable causes makes the work even more
                  meaningful."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Sarah Johnson</p>
                    <p className="text-brown/70 text-sm">Finance Major, Class of 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-lg relative">
              <Quote className="text-brown/20 absolute top-4 left-4" size={32} />
              <div className="ml-6 mt-4">
                <p className="text-brown text-lg italic mb-6">
                  "As a computer science major, I was looking for a way to apply my analytical skills to finance. Keynes
                  Investments welcomed me and helped me develop a comprehensive understanding of markets while
                  leveraging my technical background. I've been able to build financial models that help our team make
                  better decisions."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Michael Chen</p>
                    <p className="text-brown/70 text-sm">Computer Science, Class of 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-8`}>Alumni</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-amber-50/50 p-8 rounded-lg relative">
              <Quote className="text-brown/20 absolute top-4 left-4" size={32} />
              <div className="ml-6 mt-4">
                <p className="text-brown text-lg italic mb-6">
                  "My time with Keynes Investments directly led to my career in asset management. During interviews, I
                  could speak confidently about real investment decisions I'd made and the analytical process behind
                  them. Four years later, I still mentor current members and am amazed by their growth and impact."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">David Park</p>
                    <p className="text-brown/70 text-sm">Investment Analyst, Global Asset Management</p>
                    <p className="text-brown/70 text-sm">Class of 2018</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-lg relative">
              <Quote className="text-brown/20 absolute top-4 left-4" size={32} />
              <div className="ml-6 mt-4">
                <p className="text-brown text-lg italic mb-6">
                  "Keynes taught me to think long-term and consider both financial and social impact in my investment
                  decisions. These principles guided me as I launched my own sustainable investment advisory firm. The
                  network I built through the fund continues to be invaluable for my professional growth."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Rebecca Torres</p>
                    <p className="text-brown/70 text-sm">Founder, Sustainable Capital Advisors</p>
                    <p className="text-brown/70 text-sm">Class of 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-8`}>Charity Partners</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-amber-50/50 p-8 rounded-lg relative">
              <Quote className="text-brown/20 absolute top-4 left-4" size={32} />
              <div className="ml-6 mt-4">
                <p className="text-brown text-lg italic mb-6">
                  "The Education Access Initiative has been able to provide scholarships to 15 additional students this
                  year thanks to Keynes Investments' generous donations. What makes their contribution special is that
                  students are helping students - it's a powerful model that multiplies impact across generations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Dr. Maria Gonzalez</p>
                    <p className="text-brown/70 text-sm">Director, Education Access Initiative</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-lg relative">
              <Quote className="text-brown/20 absolute top-4 left-4" size={32} />
              <div className="ml-6 mt-4">
                <p className="text-brown text-lg italic mb-6">
                  "Climate Action Fund has partnered with Keynes Investments for three years now. Beyond their financial
                  contributions, we've been impressed by the genuine interest their members take in our work. They've
                  visited our renewable energy projects and even helped us improve our financial sustainability plans."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">James Wilson</p>
                    <p className="text-brown/70 text-sm">Partnerships Manager, Climate Action Fund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-8`}>Member Spotlights</h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="aspect-square bg-brown/20 rounded-lg"></div>
              </div>
              <div className="md:col-span-2">
                <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-2`}>
                  From Analyst to Portfolio Manager: Lisa's Journey
                </h3>
                <p className="text-brown mb-4">
                  Lisa joined Keynes Investments as a sophomore with no prior investing experience. Through dedication
                  and mentorship, she progressed from analyst to leading our sustainable investments portfolio. Her
                  stock picks have generated a 28% return over the past year.
                </p>
                <p className="text-brown">
                  "What I love about Keynes is that it's a safe space to learn and grow. I made mistakes early on, but
                  instead of criticism, I received guidance and encouragement. Now I mentor new members the same way."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 md:order-last">
                <div className="aspect-square bg-brown/20 rounded-lg"></div>
              </div>
              <div className="md:col-span-2">
                <h3 className={`${playfair.className} text-brown text-2xl font-medium mb-2`}>
                  Alex's Dual Impact: Investment Growth and Community Service
                </h3>
                <p className="text-brown mb-4">
                  As both an investment analyst and community liaison, Alex has been instrumental in connecting our
                  financial success to real-world impact. He developed our charity selection framework and leads the
                  quarterly impact assessment process.
                </p>
                <p className="text-brown">
                  "Seeing the direct link between our investment decisions and the impact they have on charitable
                  organizations gives purpose to the analytical work we do. It's not just about returns—it's about what
                  those returns enable in our community."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
