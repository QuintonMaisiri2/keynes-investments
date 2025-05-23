export default function Why() {
    return (
     <section className="py-12  px-6 md:px-12 min-h-screen flex flex-col lg:flex-row lg:items-end lg:justify-center lg:gap-36 gap-5">
        <div className="flex flex-col gap-12 leading-[150%] lg:w-1/3">
          <h2
            className={`text-brown text-5xl md:text-7xl font-medium font-ebgaramond border-b border-b-2 border-b-brown/50 pb-2`}
          >
            Why <br />{" "}
            <span className="text-brown/80">Keynes Investments?</span>
          </h2>
          <p className="text-brown text-lg">
            At Keynes Investments, we believe in the power of education and
            hands-on experience. Our mission is to provide students with the
            opportunity to learn about investing, finance, and philanthropy
            while making a positive impact on the world. Membership is selective and limited to ensure mentorship, collaboration, and academic rigor.

          </p>
          <p className="text-brown text-lg">
            Our team combines rigorous financial analysis with ethical
            considerations, ensuring that our investments not only grow wealth
            but also contribute to a better world. 20% of our performance fees
            are donated directly to charitable causes, creating a virtuous cycle
            of growth and giving.
          </p>
          <a href="/join#form"><button className="p-4 bg-brown">Join us now</button></a>
        </div>
        <div className="lg:w-1/3 h-screen relative">
          <img
            src="/images/why.jpg"
            alt="Join Keynes Investments"
            className="shadow-lg w-2/3 h-[70vh] object-cover absolute top-20 -left-20 hidden lg:block"
          />
          <div className="lg:w-2/3 w-full lg:min-h-[60vh] shadow-lg bg-brown lg:absolute bottom-0 right-20 p-8 font-thin text-sm gap-4 flex flex-col">
            <p className="font-bold text-2xl border-b border-b-2 w-max pr-4 pb-2">
              Our core values
            </p>
            <p className="">
              <span className="font-medium">Long-Term Orientation</span> - We focus on investments with
              strong fundamentals that will deliver value over years, not weeks
              or months.
            </p>
            <p className="">
              <span className="font-medium">Value-Based Approach </span> - We seek companies trading at
              a discount to their intrinsic value, providing a margin of safety.
            </p>
            <p className="">
              <span className="font-medium"> ESG Integration </span> - Environmental, social, and
              governance factors are core to our analysis, not just add-ons.{" "}
            </p>
            <p className="">
              <span className="font-medium">Risk Mitigation </span> - We employ diversification and
              careful position sizing to protect capital while seeking returns
            </p>
          </div>
        </div>
      </section>
    );
}