"uae client";
import { useState } from "react";
import { Progress } from "./ui/progress";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const portfolioData = {
    ytd: 14.3,
    threeYear: 34.9,
    fiveYear: 61.7,
    sampleTrades: [
      { symbol: "NVDA", entry: 148.03, exit: 178.26, return: 20.42 },
      { symbol: "LEU", entry: 181.08, exit: 213.8, return: 18.07 },
      { symbol: "SMCI", entry: 48.61, exit: 57.26, return: 17.8 },
      { symbol: "SMR", entry: 39.25, exit: 45.13, return: 14.99 },
      { symbol: "AVGO", entry: 257.01, exit: 292.93, return: 13.98 },
      { symbol: "MSFT", entry: 472.25, exit: 527.75, return: 11.75 },
      { symbol: "JNJ", entry: 154.96, exit: 170.74, return: 10.18 },
      { symbol: "META", entry: 703.06, exit: 763.46, return: 8.59 },
      { symbol: "SPUS", entry: 43.25, exit: 45.85, return: 6.01 },
      { symbol: "HLAL", entry: 51.94, exit: 54.65, return: 5.22 },
      { symbol: "LLY", entry: 735.56, exit: 765.95, return: 4.13 },
      { symbol: "AMZN", entry: 210.89, exit: 213.75, return: 1.36 },
      { symbol: "AAPL", entry: 202.52, exit: 202.92, return: 0.2 },
    ],
  };

  const displayedTrades = showAll
    ? portfolioData.sampleTrades
    : portfolioData.sampleTrades.slice(0, 3);

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
            <p className="font-light mb-8">
              This snapshot provides a quick overview of a user's investment
              portfolio performance. It highlights key returns over different
              time periods—Year-to-Date (YTD), 3-Year, and 5-Year—showing strong
              growth overall. It also includes sample trade details for stocks
              like Apple (AAPL) and Microsoft (MSFT), showing the entry and exit
              prices along with the percentage gains from those trades.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-brown font-medium">YTD Return</span>
                  <span className="text-brown font-medium">
                    + {portfolioData.ytd}%
                  </span>
                </div>
                <Progress
                  value={portfolioData.ytd}
                  className="h-2 bg-brown/20"
                  indicatorClassName="bg-brown"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-brown font-medium">3-Year Return</span>
                  <span className="text-brown font-medium">
                    + {portfolioData.threeYear}%
                  </span>
                </div>
                <Progress
                  value={portfolioData.threeYear}
                  className="h-2 bg-brown/20"
                  indicatorClassName="bg-brown"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-brown font-medium">5-Year Return</span>
                  <span className="text-brown font-medium">
                    + {portfolioData.fiveYear}%
                  </span>
                </div>
                <Progress
                  value={portfolioData.fiveYear}
                  className="h-2 bg-brown/20"
                  indicatorClassName="bg-brown"
                />
              </div>
            </div>

            <h4 className={` text-brown text-2xl font-medium mt-8 mb-4`}>
              Sample Trades
            </h4>
            <div className="space-y-4">
              {displayedTrades.map((trade) => (
                <div
                  key={trade.symbol}
                  className="p-4 border border-brown/20 rounded-md"
                >
                  <div className="flex justify-between">
                    <span className="text-brown font-medium">
                      {trade.symbol}
                    </span>
                    <span className="text-green-600">+{trade.return}%</span>
                  </div>
                  <p className="text-brown/70 text-sm mt-1">
                    Entry: ${trade.entry} | Exit: ${trade.exit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 bg-brown text-white px-4 py-2 rounded-md hover:bg-brown/90"
        >
          <p className="font-bold text-lg hover:underline">See More</p>
        </button>
      </div>
    </section>
  );
}
