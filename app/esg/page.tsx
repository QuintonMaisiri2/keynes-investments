import { PageHeader } from "@/components/page-header";
const philosophies = [
  {
    title: "Value Investing",
    description:
      "We focus on identifying undervalued companies with solid fundamentals to maximize long-term returns.",
  },
  {
    title: "ESG-Screened Equities",
    description:
      "Our investment universe prioritizes companies meeting rigorous environmental, social, and governance criteria.",
  },
  {
    title: "Diversification Across Sectors and Geographies",
    description:
      "We reduce risk and capture opportunities by spreading investments across industries and global markets.",
  },
  {
    title: "Mid-Cap Growth Plays and Underappreciated Dividend Stocks",
    description:
      "We target mid-sized companies with high growth potential and dividend stocks overlooked by the market.",
  },
];

export default function Page() {
  return (
    <div className="font-roboto">
      <PageHeader
        description="Environmental, Social, and Governance (ESG)"
        imageUrl="/images/compass.jpg"
        title="Our Compass for Responsible Capital"
      />
      <section className="px-6 md:px-12 min-h-screen mb-8">
        <div className="md:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end h-screen">
            <div className="flex flex-col gap-12">
              <h2
                className={`text-brown text-5xl md:text-7xl font-medium font-ebgaramond border-b border-b-2 border-b-brown/50 pb-2`}
              >
                What is <br />
                <span className="text-brown/80">ESG ?</span>
              </h2>
              <p className="text-brown text-lg ">
                Environmental, Social, and Governance (ESG) metrics help
                investors assess sustainability and ethical impacts of
                investments. We apply a custom 3-point filter to every
                investment:
              </p>
              <a href="/join#form">
                <button className="p-4 bg-brown">Join us now</button>
              </a>
            </div>

            <div className="lg:w-2/3 relative lg:h-full">
              <div className="absolute w-full top-[10vh] hidden lg:block">
                <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-amber-200 to-amber-100"></div>
                  <div className="flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className={` text-brown text-2xl font-medium`}>
                          Our Approach
                        </h3>
                        <p className="text-brown mt-2">
                          Environmental Impact Score • Social Metrics •
                          Governance Practices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 bg-brown p-6 lg:absolute bottom-0 -right-32  w-full">
                <h2 className="font-bold text-xl">Impact Measurement</h2>
                <p>Quantitative: ESG scoring rubric (0–10 scale)</p>
                <p> Qualitative: Analyst commentary and social narratives</p>
                <p>Performance Examples :</p>
                <ul className="list-disc">
                  <li>
                    Avoided investment in a fast-growing oil company despite
                    gains
                  </li>
                  <li>
                    Voted shareholder proposal on transparency in supply chains
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
