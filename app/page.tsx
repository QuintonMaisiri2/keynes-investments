"use client";

import Facts from "@/components/facts";
import Header from "@/components/header";
import Impact from "@/components/impact";
import Portfolio from "@/components/portfolio";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="flex flex-col font-roboto">
      <Header />
      <Facts />
      <Portfolio />
      <Impact />
    </div>
  );
}
