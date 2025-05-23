"use client";

import Facts from "@/components/facts";
import Header from "@/components/header";
import Impact from "@/components/impact";
import Portfolio from "@/components/portfolio";


export default function Home() {
  const patners = [
    "/images/big.png",
    "/images/oxford.jpg",
    "/images/mentor.png"
  ]
  return (
    <div className="flex flex-col font-roboto">
      <Header />
      <Facts />
      <Portfolio />
      <div className=" min-h-[50vh] flex flex-col gap-y-6 lg:flex-row lg:items-center bg-brown py-12 px-6 md:px-12 ">
        <div className="lg:w-1/3">
          <p>Quick Quote</p>
        </div>
        <p className="lg:text-7xl md:text-5xl text-3xl font-ebgaramond ">
          “At Keynes, we believe that investment is not just a financial
          act—it’s a moral one. Our student-led mission is to grow value while
          planting seeds of positive change in the community around us.”
        </p>
        <br />
        <span className="lg:text-2xl"> — Founding Team</span>
      </div>
      <Impact />
      <div className="min-h-[50vh] flex gap-12 py-12 px-6 md:px-12 items-center flex-wrap lg:flex-nowrap">
        <p className="text-brown font-bold text-2xl">Our Patners</p>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full md:items-center lg:border-l lg:border-l-2 lg:border-l-brown lg:pl-20">
          {
          patners.map((patner, index)=>{
            return <div key={index} >
              <img src={patner} alt="partner-logo" className="w-[300px]" />
            </div>
          })
        }
        </div>
      </div>
    </div>
  );
}
