import { PageHeader } from "@/components/page-header";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { BookOpen, FileText, Video, Award } from "lucide-react";
import { text } from "stream/consumers";

export default function ResourcesPage() {
  const sections = [
    {
      title: "Beginner",
      description: "Basic concepts and terminology for new investors.",
      href: "#beginner",
      text: [
        `The Beginner section at Keynes Investments is your starting point
            for learning how to manage and grow your money. It covers key topics
            like budgeting, saving, compounding, and understanding risk—all
            explained in simple, clear language. No prior knowledge is needed,
            making it perfect for anyone new to investing`,
        `You'll also get introduced to common investment types like stocks,
            bonds, and mutual funds, along with tips on setting goals and
            building smart financial habits. This section helps you avoid
            beginner mistakes and prepares you for more advanced strategies
            later on.`,
      ],
      imgSrc: "images/block.jpg",
    },
    {
      title: "Intermediate",
      description: "In-depth analysis and valuation methods.",
      href: "#intermediate",
      text: [
        "The Intermediate section is for those who understand the basics and are ready to take their investing to the next level. It dives deeper into topics like portfolio building, asset allocation, and understanding market trends. You’ll learn how to balance risk and return while developing a more strategic approach to investing.",
        "This section also introduces tools like ETFs, index funds, and technical analysis, giving you the skills to make more confident decisions. It’s ideal for investors looking to grow and manage a diversified portfolio with purpose.",
      ],
      imgSrc: "images/intermediate.jpg",
    },
    {
      title: "Advanced",
      description: "Complex strategies and market dynamics.",
      href: "#advanced",
      text: [
        "The Advanced section is designed for experienced investors aiming to refine their strategies. It covers complex topics like derivatives, alternative assets, macroeconomic analysis, and advanced risk management. This level is all about maximizing returns while navigating market complexities.",
        "You’ll also explore in-depth research methods, trading strategies, and investment psychology. It’s a deep dive into the tools and thinking used by professionals and seasoned investors.",
      ],
      imgSrc: "images/cap.jpg",
    },
  ];
  return (
    <div className="font-roboto">
      <PageHeader
        title="Resources & Education"
        description="Educational materials created by our student members to help you build your investment knowledge."
        imageUrl="images/education.jpg"
      />

      <section className="py-12 px-6 md:px-12 min-h-screen flex gap-12 max-w-7xl items-end mx-auto">
        <div className=" mx-auto gap-12 flex flex-col w-1/2">
          <h2
            className={` text-brown text-5xl md:text-7xl font-medium border-b border-b-2 border-b-brown/50 w-max`}
          >
            Keynes <br />
            <span className="text-brown/80"> Academy </span>
          </h2>
          <p className="text-brown text-lg">
            Our student-created educational series designed to build your
            investing knowledge from the ground up. From basic concepts to
            advanced strategies, we've got you covered.
          </p>
          <a href="/join#form">
            <button className="p-4 bg-brown">Join us now</button>
          </a>
        </div>
        <div className="relative w-1/2 h-[90vh]">
          <img
            src={"images/books.jpg"}
            alt="books"
            className="h-[70vh] absolute top-0"
          />
          <div className="absolute bottom-10 right-0 w-full bg-brown max-w-[20vw] p-6 space-y-6">
            <p className="border-b pb-2 w-max">Quick links</p>
            {sections.map((section, index) => (
              <div key={index} className="">
                <Link
                  href={section.href}
                  className="font-medium hover:underline"
                >
                  {section.title}
                </Link>
                <p className="text-sm mt-1">{section.description}</p>
              </div>
            ))}
            <div >
              <Link href={"#quiz"} className="font-medium hover:underline">
                {"Quizzes"}
              </Link>
              <p className="text-sm mt-1">Interactive quizzes to reinforce learning and track your progress.</p>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className="py-12 px-6 md:px-12 min-h-screen flex gap-12 max-w-7xl  mx-auto text-brown"
          id={section.href.substring(1)}
        >
          <div className="flex flex-col gap-12 w-1/2">
            <h2
              className={` text-brown text-5xl md:text-7xl font-medium w-max h-max`}
            >
              {section.title} <br />
            </h2>
            {section.text &&
              section.text.map((text, index) => (
                <p key={index} className="text-brown ">
                  {text}
                </p>
              ))}
            <img
              src={section.imgSrc}
              alt="beginner"
              className="h-full object-cover"
            />
          </div>
          <div>
            <div className="border border-brown/20 p-6 space-y-6 ">
              <h3 className={` text-brown text-2xl font-medium mb-4`}>
                Fundamentals of Investing
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText
                    className="text-brown mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <Link
                      href="#"
                      className="text-brown font-medium hover:underline"
                    >
                      Understanding Market Basics
                    </Link>
                    <p className="text-brown/80 text-sm mt-1">
                      An introduction to stock markets, indexes, and key
                      terminology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Video
                    className="text-brown mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <Link
                      href="#"
                      className="text-brown font-medium hover:underline"
                    >
                      Asset Classes Explained
                    </Link>
                    <p className="text-brown/80 text-sm mt-1">
                      Video breakdown of stocks, bonds, ETFs, and alternative
                      investments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText
                    className="text-brown mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <Link
                      href="#"
                      className="text-brown font-medium hover:underline"
                    >
                      Risk and Return: The Basic Relationship
                    </Link>
                    <p className="text-brown/80 text-sm mt-1">
                      Understanding how risk and potential returns work
                      together.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText
                    className="text-brown mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <Link
                      href="#"
                      className="text-brown font-medium hover:underline"
                    >
                      Understanding Market Basics
                    </Link>
                    <p className="text-brown/80 text-sm mt-1">
                      An introduction to stock markets, indexes, and key
                      terminology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Video
                    className="text-brown mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <Link
                      href="#"
                      className="text-brown font-medium hover:underline"
                    >
                      Asset Classes Explained
                    </Link>
                    <p className="text-brown/80 text-sm mt-1">
                      Video breakdown of stocks, bonds, ETFs, and alternative
                      investments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText
                    className="text-brown mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <Link
                      href="#"
                      className="text-brown font-medium hover:underline"
                    >
                      Risk and Return: The Basic Relationship
                    </Link>
                    <p className="text-brown/80 text-sm mt-1">
                      Understanding how risk and potential returns work
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <img src={"images/learn.jpg"} alt="education" />
            </div>

            <div>
              <h2 className={` text-brown text-3xl font-medium mb-6`}>
                Recommended Reading
              </h2>
              <div className="border border-brown/20 rounded-lg p-6">
                <h3 className="text-brown font-medium text-xl mb-4">
                  Essential Books
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen
                      className="text-brown mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="text-brown font-medium">
                        The Intelligent Investor
                      </p>
                      <p className="text-brown/80 text-sm">Benjamin Graham</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen
                      className="text-brown mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="text-brown font-medium">Principles</p>
                      <p className="text-brown/80 text-sm">Ray Dalio</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen
                      className="text-brown mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="text-brown font-medium">
                        The Psychology of Money
                      </p>
                      <p className="text-brown/80 text-sm">Morgan Housel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen
                      className="text-brown mr-3 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="text-brown font-medium">
                        A Random Walk Down Wall Street
                      </p>
                      <p className="text-brown/80 text-sm">Burton Malkiel</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
