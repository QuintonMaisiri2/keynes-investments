import { Progress } from "./ui/progress";

export default function Portfolio() {
    return (
         <section className="min-h-screen md:py-20 py-8  px-6 md:px-12 ">
        <div className="md:w-2/3 mx-auto">
          <h3 className={` text-brown text-3xl md:text-4xl font-bold`}>
            Portfolio Snapshot
          </h3>

          <div className="mt-8 text-brown">

            <div>
              <h4 className={` text-2xl font-medium mb-6`}>
                Performance Highlights
              </h4>
              <p className="font-light mb-8">This snapshot provides a quick overview of a user's investment portfolio performance. It highlights key returns over different time periods—Year-to-Date (YTD), 3-Year, and 5-Year—showing strong growth overall. It also includes sample trade details for stocks like Apple (AAPL) and Microsoft (MSFT), showing the entry and exit prices along with the percentage gains from those trades.</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">YTD Return</span>
                    <span className="text-brown font-medium">+12.4%</span>
                  </div>
                  <Progress
                    value={62}
                    className="h-2 bg-brown/20"
                    indicatorClassName="bg-brown"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">
                      3-Year Return
                    </span>
                    <span className="text-brown font-medium">+32.7%</span>
                  </div>
                  <Progress
                    value={82}
                    className="h-2 bg-brown/20"
                    indicatorClassName="bg-brown"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brown font-medium">
                      5-Year Return
                    </span>
                    <span className="text-brown font-medium">+58.2%</span>
                  </div>
                  <Progress
                    value={91}
                    className="h-2 bg-brown/20"
                    indicatorClassName="bg-brown"
                  />
                </div>
              </div>

              <h4 className={` text-brown text-2xl font-medium mt-8 mb-4`}>
                Sample Trades
              </h4>
              <div className="space-y-4">
                <div className="p-4 border border-brown/20 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-brown font-medium">AAPL</span>
                    <span className="text-green-600">+18.3%</span>
                  </div>
                  <p className="text-brown/70 text-sm mt-1">
                    Entry: $145.23 | Exit: $171.82
                  </p>
                </div>
                <div className="p-4 border border-brown/20 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-brown font-medium">MSFT</span>
                    <span className="text-green-600">+22.1%</span>
                  </div>
                  <p className="text-brown/70 text-sm mt-1">
                    Entry: $242.58 | Exit: $296.31
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-brown text-white px-4 py-2 rounded-md hover:bg-brown/90">
            <a
              href="/strategy"
              className="font-bold text-lg mt-4 hover:underline"
            >
              Learn More
            </a>
          </button>
        </div>
      </section>

    )
}