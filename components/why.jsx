export default function Why() {
  return (
    <section className="py-12  px-6 md:px-12 min-h-screen flex flex-col lg:flex-row lg:items-end lg:justify-center lg:gap-36 gap-5">
      <div className="flex flex-col gap-6 leading-[150%] lg:w-1/3">
        <h2
          className={`text-brown text-5xl md:text-7xl font-medium font-ebgaramond border-b border-b-2 border-b-brown/50 pb-2`}
        >
          Why <br /> <span className="text-brown/80">Keynes Investments?</span>
        </h2>
        <p className="text-brown text-lg">
          At Keynes Investments, we believe investing is both an educational
          journey and a force for good. As a private, student-led club, we offer
          driven students a rare opportunity to gain hands-on experience in
          finance, investing, and philanthropy—guided by mentorship and rigorous
          standards.
        </p>
        <p className="text-brown text-lg">
          Membership is highly selective to foster deep collaboration, academic
          and investing excellence, and meaningful leadership development.
        </p>
        <p className="text-brown text-lg">
          We blend financial discipline with ethical intent. Our investment
          strategy aims to grow long-term value while donating 20% of
          performance fees to charitable causes, turning capital into a catalyst
          for community impact.
        </p>
        <a href="/join#form">
          <button className="p-4 bg-brown">Join us now</button>
        </a>
      </div>
      <div className="lg:w-1/3 h-screen relative">
        <img
          src="/images/why.jpg"
          alt="Join Keynes Investments"
          className="shadow-lg w-2/3 h-[40vh] object-cover top-20 -left-20 hidden lg:block"
        />
        <div className="lg:w-2/3 w-full lg:min-h-[60vh] shadow-lg bg-brown  bottom-0 right-20 p-8 font-thin gap-4 flex flex-col">
          <p className="font-bold text-2xl border-b border-b-2 w-max pr-4 pb-2">
            Our core values
          </p>
          <p className="">
            <span className="font-bold">Long-Term Orientation</span> - We
            prioritize investments with enduring fundamentals—designed to
            deliver value across years, not just market cycles.
          </p>
          <p className="">
            <span className="font-bold">Value-Driven Philosophy </span> - We
            look for companies trading below intrinsic value, ensuring a margin
            of safety and disciplined capital allocation.
          </p>
          <p className="">
            <span className="font-bold"> ESG at the Core </span> -
            Environmental, Social, and Governance factors are embedded into
            every analysis—not treated as afterthoughts.
          </p>
          <p className="">
            <span className="font-bold">Thoughtful Risk Management</span> - We
            manage risk through diversification, careful position sizing, and a
            commitment to capital preservation.
          </p>
        </div>
      </div>
    </section>
  );
}
