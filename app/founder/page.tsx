export default function Page(){
    return (
        <div>
               <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <img
              src="images/Hamdan.png"
              alt="Hamdan Alketbi Professional Portrait"
              className="w-full rounded-lg shadow-xl"
            />

            <div className="p-6 bg-card border-primary/20">
              <blockquote className="text-lg italic text-foreground/90 leading-relaxed">
                "My vision is to position Keynes Investments as a hub for intelligent, ethical, and globally minded
                investing."
              </blockquote>
              <cite className="block mt-4 text-sm text-muted-foreground">— Hamdan Alketbi</cite>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#4A2511] mb-6 font-sans">About Hamdan</h2>
              <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6 font-serif">
                <p>
                  Hamdan Alketbi is the Founder and President of{" "}
                  <strong className="text-primary">Keynes Investments</strong>, a student-led investment club managing a
                  diversified AED 70,000 portfolio. Under his leadership, the club applies value investing principles
                  inspired by Warren Buffett and Benjamin Graham, combining disciplined analysis with a forward-looking
                  approach to global markets.
                </p>

                <p>
                  In addition to portfolio management, Hamdan has built an{" "}
                  <strong className="text-primary">algorithmic trading bot</strong> and developed an AI-powered
                  investment chatbot that mirrors Buffett and Graham's value-investing techniques. His research
                  background includes two in-depth papers: one on the potential unification of the UAE's two stock
                  exchanges (ADX and DFM) and another on exchange-traded funds (ETFs), focusing on market structure,
                  liquidity, tracking error, and investor outcomes.
                </p>

                <p>
                  Hamdan's accomplishments extend to competitive economics, where he earned an{" "}
                  <strong className="text-primary">
                    Honourable Mention in the Cambridge Re:think Economics Essay Competition
                  </strong>{" "}
                  and was shortlisted for the John Locke Institute Economics Prize. He also represented the UAE at the
                  International Economics Olympiad, demonstrating strength in applied economics and financial
                  problem-solving.
                </p>

                <p>
                  Professionally, Hamdan has interned at a private equity and capital solutions firm, contributing to
                  case memos on global companies such as{" "}
                  <strong className="text-primary">OpenAI and Virgin Cruises</strong>. These experiences strengthened his
                  skills in financial modeling, valuation, and macroeconomic forecasting.
                </p>

                <p>
                  Beyond finance, Hamdan is an advocate for People of Determination, supporting inclusion and
                  empowerment initiatives that align with his belief in{" "}
                  <strong className="text-primary">ethical leadership and socially responsible investing</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}