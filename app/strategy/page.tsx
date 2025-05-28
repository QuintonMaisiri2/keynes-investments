import { PageHeader } from "@/components/page-header";
import Philosophy from "@/components/philosophy";
import { title } from "process";
import { text } from "stream/consumers";

const focus = [
  {
    title: "Green Energy",
    text: ` We invest in companies leading the transition to renewable energy sources, including solar, wind, and
                energy storage technologies. Our focus is on businesses with proven technology, scalable models, and
                strong environmental impact metrics.`,
  },
  {
    title: "EdTech",
    text: `   Education technology companies that democratize access to quality learning experiences form a key part
                of our portfolio. We target solutions that measurably improve educational outcomes while maintaining
                affordability and accessibility.`,
  },
  {
    title: "Financial Services",
    text: `We seek financial institutions that demonstrate ethical practices, transparency, and innovation in
                serving underrepresented communities. Our investments prioritize companies that balance profitability
                with positive social impact in banking, insurance, and fintech.`,
  },
  {
    title: "Consumer Staples with ESG Improvements",
    text: ` We identify traditional consumer goods companies making meaningful transitions toward sustainable
                practices, ethical supply chains, and reduced environmental footprints. These investments combine
                stability with positive momentum in ESG metrics.`,
  },
];

const risks = [
  {
    title: "Benchmarking",
    text: "We compare performance against the S&P 500, MSCI World Index, and a self-curated ESG Benchmark Basket.",
  },
  {
    title: "Risk Disclosure",
    text: "Investments are inherently risky. We emphasize discipline, research depth, and internal risk ratings, but no investment is guaranteed. Past performance is not indicative of future results.",
  },
  {
    title: "ESG Strategy",
    text: "All potential investments are evaluated through our internal ESG filter.",
    linkText:" [See ESG Framework Page for full methodology →]",
    link : "/esg"
  },
];

export default function StrategyPage() {
  return (
    <div className="font-ebgaramond">
      <PageHeader
        title="Investment Strategy"
        description="Our approach to generating long-term value while maintaining ethical standards."
        imageUrl="/images/strategy.jpg"
      />
      <Philosophy />
      {/* <div className="bg-amber-50 my-16 ">
        <div className="py-12 max-w-7xl mx-auto text-brown space-y-8">
          <h2 className="text-4xl font-bold">Sector Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focus.map((item, index) => {
              return (
                <div
                  className="bg-white/70 p-8 rounded-lg shadow-sm"
                  key={index}
                >
                  <h3 className="text-brown text-2xl font-medium mb-4">
                    {item.title}
                  </h3>
                  <p className="text-brown/80">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      <section className="px-6 md:px-12 lg:py-12 px-r md:pr-12 min-h-screen max-w-7xl mx-auto  flex flex-col lg:flex-row gap-12">
        <div className="mt-20 ">
          <h2
            className={` text-brown text-4xl md:text-7xl font-medium mb-6 pb-2 border-b-2 border-b-brown/50 w-max`}
          >
            Fund <br />
            Structure
          </h2>
          <p className="text-brown text-lg mb-8">
            Keynes Investments operates with a transparent fee structure
            designed to align incentives while enabling our social mission. Our
            unique model ensures we deliver both financial returns and positive
            impact.
          </p>
          <img src="images/funds.jpg" alt="coins in a jar" />
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-amber-50/50 p-8 rounded-lg">
            <h3 className={` text-brown text-2xl font-medium mb-4`}>
              Fee Structure
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-brown font-medium">Management Fee: 2%</p>
                <p className="text-brown/80">
                  Annual fee based on assets under management, covering
                  operational costs and educational activities.
                </p>
              </div>
              <div>
                <p className="text-brown font-medium">Performance Fee: 20%</p>
                <p className="text-brown/80">
                  Applied to returns above our benchmark, with 100% of this fee
                  donated to charity partners.
                </p>
              </div>
              <div>
                <p className="text-brown font-medium">High-Water Mark</p>
                <p className="text-brown/80">
                  Performance fees only apply when we exceed our previous
                  highest value, ensuring we don't charge for recovering
                  previous losses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50/50 p-8 rounded-lg">
            <h3 className={` text-brown text-2xl font-medium mb-4`}>
              Charitable Allocation
            </h3>
            <p className="text-brown mb-4">
              What makes our fund unique is that 100% of performance fees are
              donated to charity. This creates a powerful alignment of
              interests:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-brown">
              <li>Better performance generates more donations</li>
              <li>Charities are selected by both members and investors</li>
              <li>Focus on measurable impact and transparent reporting</li>
              <li>Quarterly donation schedule with public announcement</li>
            </ul>
            <p className="text-brown mt-4">
              In 2023, we're on track to donate over $150,000 to our charity
              partners through this model.
            </p>
          </div>
        </div>
      </section>
      <div className=" min-h-[50vh] flex flex-col gap-y-6 lg:flex-row lg:items-center bg-brown py-12 px-6 md:px-12 ">
        <div className="lg:w-1/3 text-2xl">
          <p>Mision statement</p>
        </div>
        <p className="lg:text-5xl md:text-3xl text-3xl font-ebgaramond ">
          “To equip future finance professionals with real-world experience
          managing capital while contributing to societal good through ethical
          investing and community reinvestment.”
        </p>
      </div>

      <section className="py-12 px-6 md:px-12 min-h-screen max-w-7xl mx-auto min-h-screen">
        <div className="mt-20">
          <h2
            className={`text-brown text-4xl md:text-7xl font-medium mb-6 lg:w-max pb-2 border-b-2 border-b-brown/50`}
          >
            Investment Governance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brown mt-10">
            {risks.map((item, index) => {
              return (
                <div key={index} className="border border-brown/20 p-8">
                  <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                  <p>
                   {item.text}
                  </p>
                  {item.linkText && <a href={item.link} className="hover:underline"> [See ESG Framework Page for full methodology →]</a>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
