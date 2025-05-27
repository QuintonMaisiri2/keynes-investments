export default function Page() {
const info = [
  {
    heading: "IMPORTANT NOTICE",
    text: [
      `The information provided on the Keynes Investments website, mobile application, and related services (collectively, the "Services") is for general informational purposes only.`,
      `All information on our Services is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our Services.`,
    ],
  },
  {
    heading: "NOT FINANCIAL ADVICE",
    text: [],
  },
  {
    heading: "General Information Only",
    text: [
      `The content available through our Services is intended to be general information and is not provided as financial, investment, legal, tax, or other professional advice.`,
      `The information we provide does not take into account your specific circumstances and is not intended to be relied upon as a recommendation or determination that a particular investment or strategy is suitable for you.`,
    ],
  },
  {
    heading: "Consult with Professionals",
    text: [
      `Before making any financial decisions or taking any actions based on the information provided through our Services, you should consult with qualified financial, legal, tax, or other professional advisors who can provide advice specific to your situation and goals.`,
    ],
  },
  {
    heading: "INVESTMENT RISKS",
    text: [],
  },
  {
    heading: "No Guarantees",
    text: [
      `All investments involve risk, including the possible loss of principal.`,
      `The value of investments can go down as well as up, and you may not get back the amount invested.`,
      `Past performance is not indicative of future results.`,
    ],
  },
  {
    heading: "Market Volatility and Uncertainty",
    text: [
      `The financial markets are subject to periods of volatility and uncertainty.`,
      `Economic, market, political, and issuer-specific conditions and events will cause the value of securities, and the funds that own them, to rise or fall.`,
    ],
  },
  {
    heading: "Not FDIC Insured",
    text: [
      `Investment products discussed or referred to on our Services are:`,
      `● NOT FDIC INSURED`,
      `● NOT BANK GUARANTEED`,
      `● MAY LOSE VALUE`,
    ],
  },
  {
    heading: "THIRD-PARTY CONTENT",
    text: [
      `Our Services may include content provided by third parties, including materials from other users, bloggers, and third-party licensors, syndicators, aggregators, and/or reporting services.`,
      `All statements and/or opinions expressed in such materials, and all articles and responses to questions and other content, other than the content provided by Keynes Investments, are solely the opinions and the responsibility of the person or entity providing those materials.`,
    ],
  },
  {
    heading: "FORWARD-LOOKING STATEMENTS",
    text: [
      `Certain content on our Services may contain forward-looking statements that are based on assumptions and reflect our management's current expectations.`,
      `These forward-looking statements are subject to a number of risks and uncertainties that could cause actual results to differ materially from those described in the forward-looking statements.`,
      `We undertake no obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.`,
    ],
  },
  {
    heading: "ACCURACY AND COMPLETENESS OF INFORMATION",
    text: [
      `While we strive to provide accurate and up-to-date information, we cannot guarantee that all information on our Services is complete, accurate, current, or suitable for any particular purpose.`,
      `The information on our Services may contain typographical errors, inaccuracies, or omissions.`,
      `We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.`,
    ],
  },
  {
    heading: "EDUCATIONAL AND INFORMATIONAL PURPOSES",
    text: [
      `Charts, graphs, market analyses, and other content provided through our Services are for educational and informational purposes only.`,
      `Such content should not be considered a recommendation to buy, sell, or hold any particular security or to engage in any particular investment strategy.`,
    ],
  },
  {
    heading: "NO ENDORSEMENT",
    text: [
      `References to any securities, financial products, or market indices are for illustration purposes only and do not constitute a recommendation to buy, sell, or hold any particular security or to engage in any particular investment strategy.`,
      `Inclusion of specific securities in our content does not constitute a recommendation of these securities.`,
    ],
  },
  {
    heading: "JURISDICTIONAL LIMITATIONS",
    text: [
      `Our Services are intended for users in the United States.`,
      `We make no representations that our Services are appropriate or available for use in other locations.`,
      `Access to our Services from territories where its content or use is illegal is prohibited.`,
      `If you access our Services from outside the United States, you do so at your own risk and are responsible for compliance with local laws.`,
    ],
  },
  {
    heading: "CHANGES TO THIS DISCLAIMER",
    text: [
      `We reserve the right to modify this Disclaimer at any time without prior notice.`,
      `The date of the last modification will be posted at the beginning of this Disclaimer.`,
      `It is your responsibility to check this Disclaimer periodically for changes.`,
    ],
  },
  {
    heading: "ACCEPTANCE OF THIS DISCLAIMER",
    text: [
      `By using our Services, you acknowledge that you have read, understood, and agreed to be bound by this Disclaimer.`,
      `If you do not agree with this Disclaimer, please do not use our Services.`,
    ],
  },
  {
    heading: "CONTACT INFORMATION",
    text: [
      `If you have any questions about this Disclaimer, please contact us at:`,
      `Keynes Investments`,
      `Email: [Insert Contact Email]`,
    ],
  },
];




  return (
    <div className="font-ebgaramond text-brown">
      <div className="bg-brown text-7xl px-12 pt-4 h-[20vh] text-white">
        Disclaimer
      </div>
      <div className=" px-12 py-8">
        <p className="mb-8">Last updated: May 16, 2025</p>
        {info.map((item, index)=>{
            return <div key={index} className="space-y-2 mb-10">
                <h2 className="text-4xl">{index + 1}. {item.heading}</h2>
                {item.text.map((text, index)=>{
                    return <p className="text-lg" key={index}>
                        {text}
                    </p>
                })}
            </div>
        })}
      </div>
    </div>
  );
}
