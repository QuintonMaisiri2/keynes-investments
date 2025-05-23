import { PageHeader } from "@/components/page-header";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { BookOpen, FileText, Video, Award } from "lucide-react";
import { text } from "stream/consumers";
import Quiz from "@/components/quiz/quiz";
import { title } from "process";

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
      resources: {
        title: "Fundamentals of Investing",
        books: [
          {
            title: "The Intelligent Investor",
            author: "Benjamin Graham",
            synopis:
              "The bible of value investing. Introduces concepts like margin of safety, Mr. Market, and long-term discipline.",
          },
          {
            title: "Common Stocks and Uncommon Profits",
            author: "Philip Fisher",
            synopis:
              "A classic that teaches how to evaluate the quality of a business and its management.",
          },
          {
            title: "The Little Book of Common Sense Investing ",
            author: "John C. Bogle",
            synopis:
              "Written by the founder of Vanguard, this book promotes low-cost index funds and long-term investing.",
          },
          {
            title: "One Up On Wall Street",
            author: "Peter Lynch",
            synopis:
              "Offers insights on how everyday investors can find great companies early.",
          },
        ],
      },
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
      resources: {
        title: "Fundamentals of Investing",
        books: [
          {
            title: "The Most Important Thing ",
            author: "Howard Marks",
            synopis:
              "A deep dive into risk, market cycles, and investor behavior by one of the best in the field.",
          },
          {
            title: "The Little Book That Beats the Market ",
            author: "Joel Greenblatt",
            synopis:
              "Introduces the “Magic Formula” investing strategy that combines quality and value.",
          },
          {
            title: "The Dhandho Investor",
            author: "Mohnish Pabrai",
            synopis:
              "Applies a low-risk, high-return philosophy based on Warren Buffett’s principles.",
          },
          {
            title: "Stocks for the Long Run ",
            author: "Jeremy Siegel",
            synopis:
              "Examines historical stock market returns and why equities outperform other asset classes.",
          },
        ],
      },
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
      resources: {
        title: "Fundamentals of Investing",
        books: [
          {
            title: "Security Analysis (6th Edition) ",
            author: "Benjamin Graham & David Dodd",
            synopis:
              "The more detailed and rigorous companion to The Intelligent Investor.",
          },
          {
            title: "You Can Be a Stock Market Genius",
            author: "Joel Greenblatt",
            synopis:
              "Explores special situations like spinoffs and mergers to find undervalued opportunities.",
          },
          {
            title: "Investment Valuation",
            author: "Aswath Damodaran",
            synopis:
              "A comprehensive reference on valuation techniques from DCF to relative valuation.",
          },
          {
            title: "Principles: Life and Work ",
            author: " Ray Dalio",
            synopis:
              "Includes the principles behind Bridgewater's investment strategies and radical transparency.",
          },
        ],
      },
    },
  ];
  return (
    <div className="font-roboto">
      <PageHeader
        title="Resources & Education"
        description="Educational materials created by our student members to help you build your investment knowledge."
        imageUrl="images/education.jpg"
      />

      <section className="py-12 px-6 lg:px-12 min-h-screen flex flex-col lg:flex-row gap-12 max-w-7xl lg:items-end mx-auto">
        <div className=" lg:mx-auto gap-12 flex flex-col lg:w-1/2">
          <h2
            className={` text-brown text-4xl md:text-7xl font-medium border-b border-b-2 border-b-brown/50 w-max`}
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
        <div className="relative xl:w-1/2 h-[90vh]">
          <img
            src={"images/books.jpg"}
            alt="books"
            className="h-[70vh] absolute top-0 hidden lg:block"
          />
          <div className="lg:absolute bottom-10 lg:right-0 w-full bg-brown lg:max-w-[20vw] p-6 space-y-6">
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
            <div>
              <Link href={"#quiz"} className="font-medium hover:underline">
                {"Quizzes"}
              </Link>
              <p className="text-sm mt-1">
                Interactive quizzes to reinforce learning and track your
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className="py-12 px-6 md:px-12 min-h-screen flex flex-col lg:flex-row gap-12 max-w-7xl  mx-auto text-brown"
          id={section.href.substring(1)}
        >
          <div className="flex flex-col gap-12 lg:w-1/2">
            <h2
              className={` text-brown text-4xl md:text-7xl font-medium w-max h-max`}
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
          {section.resources && (
            <div>
              <div className="border border-brown/20 p-6 space-y-6 ">
                <h3 className={` text-brown text-2xl font-medium mb-4`}>
                  {section.resources.title}
                </h3>
                <div className="space-y-4">
                 {section.resources.books.map((book, index)=>{
                  return  <div className="flex items-start" key={index}>
                    <BookOpen
                      className="text-brown mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <Link
                        href="#"
                        className="text-brown font-medium hover:underline"
                      >
                       {book.title}
                      </Link>
                      <p className="text-brown/80 text-sm mt-1">
                       {book.synopis}
                      </p>
                    </div>
                  </div>
                 })}
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      <section className="text-brown bg-amber-50/50">
        <div className="py-12 px-6 lg:px-12 flex flex-col lg:flex-row gap-12 max-w-7xl lg:items-center mx-auto  min-h-screen ">
          <div className="space-y-6 lg:w-1/2">
            <h1 className="font-medium border-b border-b-2 w-max text-7xl">
              Quick Quiz{" "}
            </h1>
            <p>
              A fun way to test your knowledge and see how much you've learned!
              Challenge yourself with interactive questions and discover new
              insights as you go. Whether you're just starting out or already
              know a lot, our quizzes make learning engaging and fun.
            </p>
            <img
              src={"images/puzzle.jpg"}
              alt="puzzle"
              className="h-full object-cover hidden lg:block"
            />
          </div>
          <Quiz />
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 min-h-screen ">
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
