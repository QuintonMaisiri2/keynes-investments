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
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-10">
        <h3 className={`text-brown font-bold text-center w-1/3`}>
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
      <div className="py-20 px-6 md:px-12 bg-amber-50/50 flex flex-col md:flex-row mt-10">
        <h3 className={` text-brown md:text-center font-medium w-1/3`}>
          About Us
        </h3>
        <div className="md:w-2/3 text-brown font-ebgaramon text-xl md:text-2xl md:px-4 md:border-l md:border-l-2">
          <p className="leading-[150%]">
          Keynes Investments was founded in 2020 by a group of undergraduate finance students determined to rethink how capital is deployed. Frustrated with conventional investment vehicles prioritizing short-term gain, the group envisioned a private, student-led club dedicated to long-term value creation and ethical principles.
          </p>
          <button className="mt-6 bg-brown text-white px-4 py-2 rounded-md hover:bg-brown/90">
            <a
              href="/strategy"
              className="font-bold text-lg mt-4 hover:underline"
            >
              Learn More
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
