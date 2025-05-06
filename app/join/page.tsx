import { PageHeader } from "@/components/page-header"
import { Playfair_Display } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, TrendingUp, Heart } from "lucide-react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function JoinPage() {
  return (
    <div>
      <PageHeader
        title="Join the Fund"
        description="Become part of a student-led investment team focused on learning, growth, and positive impact."
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-6`}>How to Get Involved</h2>
            <p className="text-brown text-lg mb-6">
              Keynes Investments welcomes passionate students who are interested in finance, investing, and making a
              positive impact. Our recruitment process is designed to identify motivated individuals who align with our
              values and mission.
            </p>

            <div className="space-y-8 mt-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                    <span className="text-brown font-medium">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-brown text-xl font-medium">Submit an Application</h3>
                  <p className="text-brown/80 mt-2">
                    Fill out our interest form with your background, experience, and why you want to join Keynes
                    Investments.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                    <span className="text-brown font-medium">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-brown text-xl font-medium">Initial Interview</h3>
                  <p className="text-brown/80 mt-2">
                    Selected applicants will be invited for a conversation with current members to discuss their
                    interest and experience.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                    <span className="text-brown font-medium">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-brown text-xl font-medium">Investment Challenge</h3>
                  <p className="text-brown/80 mt-2">
                    Complete a basic investment analysis task to demonstrate your approach and thinking.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                    <span className="text-brown font-medium">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-brown text-xl font-medium">Onboarding</h3>
                  <p className="text-brown/80 mt-2">
                    Successful candidates will join our team and receive comprehensive training on our investment
                    philosophy and processes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-6`}>Benefits</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border border-brown/20 rounded-lg">
                <BookOpen className="text-brown mb-4" size={28} />
                <h3 className="text-brown text-xl font-medium mb-2">Hands-on Learning</h3>
                <p className="text-brown/80">
                  Gain practical investment experience and develop skills that traditional classrooms can't provide.
                </p>
              </div>

              <div className="p-6 border border-brown/20 rounded-lg">
                <Users className="text-brown mb-4" size={28} />
                <h3 className="text-brown text-xl font-medium mb-2">Mentorship</h3>
                <p className="text-brown/80">
                  Connect with alumni and industry professionals who provide guidance and career advice.
                </p>
              </div>

              <div className="p-6 border border-brown/20 rounded-lg">
                <TrendingUp className="text-brown mb-4" size={28} />
                <h3 className="text-brown text-xl font-medium mb-2">Real Investment Decisions</h3>
                <p className="text-brown/80">
                  Participate in making actual investment decisions with real money and track results.
                </p>
              </div>

              <div className="p-6 border border-brown/20 rounded-lg">
                <Heart className="text-brown mb-4" size={28} />
                <h3 className="text-brown text-xl font-medium mb-2">Create Impact</h3>
                <p className="text-brown/80">
                  Help direct donations to important causes and learn about ethical investing strategies.
                </p>
              </div>
            </div>

            <h2 className={`${playfair.className} text-brown text-3xl font-medium mb-6`}>Application Form</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <label htmlFor="year" className="text-brown">
                  Year of Study
                </label>
                <Input id="year" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="major" className="text-brown">
                  Major/Program
                </label>
                <Input id="major" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="text-brown">
                  Relevant Experience
                </label>
                <Textarea id="experience" rows={4} className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="motivation" className="text-brown">
                  Why do you want to join Keynes Investments?
                </label>
                <Textarea id="motivation" rows={4} className="bg-white" />
              </div>

              <Button type="submit" className="w-full bg-brown hover:bg-brown/90">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
