import { PageHeader } from "@/components/page-header"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"
import { BookOpen, FileText, Video, Award } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="font-roboto">
      <PageHeader
        title="Resources & Education"
        description="Educational materials created by our student members to help you build your investment knowledge."
        imageUrl="images/education.jpg"
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className={` text-brown text-3xl font-medium mb-6`}>Keynes Academy</h2>
              <p className="text-brown text-lg mb-8">
                Our student-created educational series designed to build your investing knowledge from the ground up.
                From basic concepts to advanced strategies, we've got you covered.
              </p>

              <div className="space-y-8">
                <div className="border border-brown/20 rounded-lg p-6">
                  <h3 className={` text-brown text-2xl font-medium mb-4`}>
                    Fundamentals of Investing
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Understanding Market Basics
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          An introduction to stock markets, indexes, and key terminology.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Video className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Asset Classes Explained
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Video breakdown of stocks, bonds, ETFs, and alternative investments.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Risk and Return: The Basic Relationship
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Understanding how risk and potential returns work together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-brown/20 rounded-lg p-6">
                  <h3 className={` text-brown text-2xl font-medium mb-4`}>Valuation Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Discounted Cash Flow Analysis
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Learn how to value companies based on future cash flows.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Video className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Comparative Analysis and Multiples
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Video tutorial on using P/E, EV/EBITDA and other valuation multiples.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Asset-Based Valuation
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Understanding how to value a company based on its assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-brown/20 rounded-lg p-6">
                  <h3 className={` text-brown text-2xl font-medium mb-4`}>ESG Investing</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          ESG Framework Introduction
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Understanding environmental, social, and governance criteria in investing.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Video className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Impact Measurement
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          How to evaluate and track the social impact of your investments.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <Link href="#" className="text-brown font-medium hover:underline">
                          Sustainable Investing Case Studies
                        </Link>
                        <p className="text-brown/80 text-sm mt-1">
                          Real examples of successful ESG-focused investment strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className={` text-brown text-3xl font-medium mb-6`}>Recommended Reading</h2>
              <div className="space-y-6">
                <div className="border border-brown/20 rounded-lg p-6">
                  <h3 className="text-brown font-medium text-xl mb-4">Essential Books</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BookOpen className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">The Intelligent Investor</p>
                        <p className="text-brown/80 text-sm">Benjamin Graham</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">Principles</p>
                        <p className="text-brown/80 text-sm">Ray Dalio</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">The Psychology of Money</p>
                        <p className="text-brown/80 text-sm">Morgan Housel</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">A Random Walk Down Wall Street</p>
                        <p className="text-brown/80 text-sm">Burton Malkiel</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border border-brown/20 rounded-lg p-6">
                  <h3 className="text-brown font-medium text-xl mb-4">Newsletters & Blogs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">Money Stuff</p>
                        <p className="text-brown/80 text-sm">Matt Levine, Bloomberg</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">The Morning Brew</p>
                        <p className="text-brown/80 text-sm">Daily business news</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">Collaborative Fund</p>
                        <p className="text-brown/80 text-sm">Morgan Housel's blog</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border border-brown/20 rounded-lg p-6">
                  <h3 className="text-brown font-medium text-xl mb-4">Financial Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">CFA Program</p>
                        <p className="text-brown/80 text-sm">Chartered Financial Analyst</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">FRM</p>
                        <p className="text-brown/80 text-sm">Financial Risk Manager</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="text-brown mr-3 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-brown font-medium">CAIA</p>
                        <p className="text-brown/80 text-sm">Chartered Alternative Investment Analyst</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
