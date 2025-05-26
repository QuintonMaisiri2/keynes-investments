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


export default function Philosophy() {
    return (
         <section className="px-6 md:px-12 min-h-screen">
        <div className="md:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end h-screen">
            <div className="flex flex-col gap-12">
              <h2
                className={`text-brown text-5xl md:text-7xl font-medium font-ebgaramond border-b border-b-2 border-b-brown/50 pb-2`}
              >
                Our <br />
                <span className="text-brown/80">Philosophy</span>
              </h2>
              <p className="text-brown text-lg ">
                At Keynes Investments, We take a long-term, fundamentals-based approach to investing. Our goal is to generate value with purpose. Our investment philosophy is built on four key pillars:
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
                        Long-term • Value • ESG • Risk-aware
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
              <div className="space-y-6 bg-brown p-6 lg:absolute bottom-0 -right-32  w-full">
                {philosophies.map((philosophy, index) => (
                  <div key={index}>
                    <p className=" ">
                      <span className="font-bold">{philosophy.title}</span> -{" "}
                      {philosophy.description}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}