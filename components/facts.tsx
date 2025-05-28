import { text } from "stream/consumers";

export default function Facts() {
  const facts = [
    {
      title: "Management Style",
      description: "Student-Led",
      text: "Our unique student-led investment approach combines professional oversight with mentorship, cultivating the next generation of ethical financial leaders.",
    },
    {
      title: "Investment Horizon",
      description: "Long-term",
      text: "We focus on long-term value creation over market cycles, identifying opportunities that generate sustainable returns while making positive contributions to society.",
    },
    {
      title: "Fee Structure",
      description: "2% Management, 20% Performance (donated to charity)",
      text: "2% Management, 20% Performance with 20% of our performance fees donated directly to charitable causes, creating a virtuous cycle of growth and giving",
    },
  ];
  return (
    <section className="py-12 border-t border-brown/10 min-h-screen flex flex-col relative ">
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 md:py-10">
        <h3 className={`text-brown text-2xl mb-6 md:mb-0 font-bold text-center md:w-1/3`}>
          Quick Facts
        </h3>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 lg:w-2/3">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-5 md:gap-10 md:px-4 md:border-l md:border-l-2"
            >
              <h4 className={`text-brown text-3xl font-bold`}>{fact.title}</h4>
              <div className="text-brown/70 font-bold">
                <p className="text-xl">{fact.description}</p>
                <p className="font-light mt-2">{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:py-20 py-8  px-6  lg:px-12 bg-amber-50/50 flex flex-col md:flex-row mt-10">
        <h3 className={` text-brown md:text-center text-2xl font-medium lg:w-1/3 mb-6 mr-6 md:mb-0` }>
          About Us
        </h3>
        <div className="lg:w-2/3 text-brown font-ebgaramon text-xl md:text-4xl md:px-4 md:border-l md:border-l-2">
          <p className="leading-[150%]">
         Founded in 2025 by passionate and principled high school students, Keynes Investments is a private, student-led investment club redefining how capital is used for good. Built in response to the short-term focus of conventional investing, the club brings together a select group of students committed to long-term value creation, ethical investing, and continuous learning. Membership is highly selective—reserved for those who show both sharp analytical acumen and a genuine drive to make an impact.
          </p>
          <button className="mt-6 bg-brown text-white px-4 py-2 rounded-md hover:bg-brown/90">
            <a
              href="/strategy"
              className="font-bold text-lg hover:underline"
            >
              Learn More
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
