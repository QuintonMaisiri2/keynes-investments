const philosophies = [
  {
    title: "Long-Term Orientation",
    description:
      "We focus on investments with strong fundamentals that will deliver value over years, not weeks or months.",
  },
  {
    title: "Value-Based Approach",
    description:
      "We seek companies trading at a discount to their intrinsic value, providing a margin of safety.",
  },
  {
    title: "ESG Integration",
    description:
      "Environmental, social, and governance factors are core to our analysis, not just add-ons.",
  },
  {
    title: "Risk Mitigation",
    description:
      "We employ diversification and careful position sizing to protect capital while seeking returns.",
  },
];

export default function Philosophy() {
    return (
         <section className="px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end h-screen">
            <div className="flex flex-col gap-12">
              <h2
                className={`text-brown text-5xl md:text-7xl font-medium font-ebgaramond border-b border-b-2 border-b-brown/50 pb-2`}
              >
                Our <br />
                <span className="text-brown/80">Philosophy</span>
              </h2>
              <p className="text-brown text-lg ">
                At Keynes Investments, we believe in a disciplined, long-term
                approach to investing that balances risk management with growth
                potential. Our investment philosophy is built on four key
                pillars:
              </p>
              <a href="/join#form">
                <button className="p-4 bg-brown">Join us now</button>
              </a>
            </div>

            <div className="w-2/3 relative h-full">
             <div className="absolute w-full top-[10vh]">
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
              <div className="space-y-6 bg-brown p-6 absolute bottom-0 -right-32 w-3/4">
                {philosophies.map((philosophy, index) => (
                  <div key={index}>
                    <p className="font-light text-sm ">
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