"use client"

import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import dynamic from "next/dynamic"

// Dynamically import recharts components with SSR disabled
const PieChartComponent = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  { ssr: false }
)
const PieComponent = dynamic(
  () => import("recharts").then((mod) => mod.Pie as unknown as React.ComponentType<any>),
  { ssr: false }
)
const CellComponent = dynamic(
  () => import("recharts").then((mod) => mod.Cell),
  { ssr: false }
)
const ResponsiveContainerComponent = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
)

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// Sample data for the pie chart
const data = [
  { name: "Equities", value: 45 },
  { name: "ETFs", value: 30 },
  { name: "ESG Picks", value: 15 },
  { name: "Cash", value: 10 },
]

const COLORS = ["#8B5E34", "#A67C52", "#C19A6B", "#D4B996"]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
        <button className="text-brown">Menu</button>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Background Image */}
        <div className="relative h-[400px] md:h-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-amber-200 to-amber-100 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/background-texture.png')] opacity-30 mix-blend-overlay"></div>
        </div>

        {/* Right Column - Hero Content */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <div>
            <h2 className={`${playfair.className} text-brown text-5xl md:text-6xl font-medium leading-tight`}>
              Keynes
              <br />
              Investments
            </h2>
            <p className="text-brown text-xl md:text-2xl mt-6">Empowering Growth, Enriching Communities</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-brown hover:bg-brown/90 text-white">Join Us</Button>
              <Button variant="outline" className="border-brown text-brown hover:bg-brown/10">
                Learn More
              </Button>
              <Button variant="outline" className="border-brown text-brown hover:bg-brown/10">
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-12 px-6 md:px-12 border-t border-brown/10">
        <div className="max-w-6xl mx-auto">
          <h3 className={`${playfair.className} text-brown text-3xl md:text-4xl font-medium`}>Quick Facts:</h3>
          <ul className="mt-6 space-y-4 text-brown text-lg">
            <li className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Management Style: Student-Led</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Investment Horizon: Long-term</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Fee Structure: 2% Management, 20% Performance (donated to charity)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section className="py-12 px-6 md:px-12 bg-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <h3 className={`${playfair.className} text-brown text-3xl md:text-4xl font-medium`}>About Us</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-brown text-lg">
                Keynes Investments is a student-managed private investment club committed to cultivating financial
                skillsets while generating long-term, ethical returns. What makes us different is our dual mission:
                delivering competitive financial performance while making a positive social impact.
              </p>
              <p className="text-brown text-lg mt-4">
                Our team combines rigorous financial analysis with ethical considerations, ensuring that our investments
                not only grow wealth but also contribute to a better world. 20% of our performance fees are donated
                directly to charitable causes, creating a virtuous cycle of growth and giving.
              </p>
            </div>

            <div>
              <h4 className={`${playfair.className} text-brown text-2xl font-medium mb-6`}>Leadership Team</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-brown/20 mb-2"></div>
                    <p className="text-brown font-medium text-center">Team Member {i}</p>
                    <p className="text-brown/70 text-sm text-center">Position</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snapshot Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className={`${playfair.className} text-brown text-3xl md:text-4xl font-medium`}>Portfolio Snapshot</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className={`${playfair.className} text-brown text-2xl font-medium mb-6`}>Asset Allocation</h4>
              <div className="h-[300px]">
                {/* Use dynamically imported components */}
                <ResponsiveContainerComponent width="100%" height="100%">
                  <PieChartComponent>
                    <PieComponent
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }: { name: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {data.map((entry, index) => (
                        <CellComponent key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </PieComponent>
                  </PieChartComponent>
                </ResponsiveContainerComponent>
              </div>
            </div>

            <div>
              <h4 className={`${playfair.className} text-brown text-2xl font-medium mb-6`}>Performance Highlights</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">YTD Return</span>
                    <span className="text-brown font-medium">+12.4%</span>
                  </div>
                  <Progress value={62} className="h-2 bg-brown/20" indicatorClassName="bg-brown" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">3-Year Return</span>
                    <span className="text-brown font-medium">+32.7%</span>
                  </div>
                  <Progress value={82} className="h-2 bg-brown/20" indicatorClassName="bg-brown" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">5-Year Return</span>
                    <span className="text-brown font-medium">+58.2%</span>
                  </div>
                  <Progress value={91} className="h-2 bg-brown/20" indicatorClassName="bg-brown" />
                </div>
              </div>

              <h4 className={`${playfair.className} text-brown text-2xl font-medium mt-8 mb-4`}>Sample Trades</h4>
              <div className="space-y-4">
                <div className="p-4 border border-brown/20 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-brown font-medium">AAPL</span>
                    <span className="text-green-600">+18.3%</span>
                  </div>
                  <p className="text-brown/70 text-sm mt-1">Entry: $145.23 | Exit: $171.82</p>
                </div>
                <div className="p-4 border border-brown/20 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-brown font-medium">MSFT</span>
                    <span className="text-green-600">+22.1%</span>
                  </div>
                  <p className="text-brown/70 text-sm mt-1">Entry: $242.58 | Exit: $296.31</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Tracker Section */}
      <section className="py-12 px-6 md:px-12 bg-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <h3 className={`${playfair.className} text-brown text-3xl md:text-4xl font-medium`}>Social Impact Tracker</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h4 className={`${playfair.className} text-brown text-2xl font-medium mb-4`}>Total Donations</h4>
                <div className="flex items-end">
                  <span className={`${playfair.className} text-brown text-5xl font-medium`}>$127,500</span>
                  <span className="text-brown ml-2 mb-1">donated to date</span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">2023 Goal: $150,000</span>
                    <span className="text-brown font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-3 bg-brown/20" indicatorClassName="bg-brown" />
                </div>
              </div>

              <h4 className={`${playfair.className} text-brown text-2xl font-medium mb-4`}>Beneficiary Causes</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Education Access Initiative</p>
                    <p className="text-brown/70 text-sm">$45,000 donated</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Climate Action Fund</p>
                    <p className="text-brown/70 text-sm">$38,500 donated</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                  <div>
                    <p className="text-brown font-medium">Community Development</p>
                    <p className="text-brown/70 text-sm">$44,000 donated</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className={`${playfair.className} text-brown text-2xl font-medium mb-6`}>Impact Timeline</h4>
              <div className="relative border-l-2 border-brown pl-6 pb-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                  <p className="text-brown font-medium">2023 Q3</p>
                  <p className="text-brown">$32,500 donated to Education Access Initiative</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                  <p className="text-brown font-medium">2023 Q2</p>
                  <p className="text-brown">$28,000 donated to Climate Action Fund</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                  <p className="text-brown font-medium">2023 Q1</p>
                  <p className="text-brown">$25,000 donated to Community Development</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                  <p className="text-brown font-medium">2022 Q4</p>
                  <p className="text-brown">$22,000 donated to Education Access Initiative</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                  <p className="text-brown font-medium">2022 Q3</p>
                  <p className="text-brown">$20,000 donated to Climate Action Fund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 px-6 md:px-12 text-brown text-sm">
        <div className="border-t border-brown/20 pt-6">© 2035 by Keynes Investments. Powered and secured by Vercel</div>
      </footer>
    </div>
  )
}