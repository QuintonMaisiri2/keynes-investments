import { Progress } from "./ui/progress";

export default function Impact() {
  return (
    <section
      className="py-12 px-6 md:px-12 bg-amber-50/50 min-h-screen flex items-center justify-between relative"
      id="impact"
    >
      <div className="max-w-6xl mx-auto text-brown">
        <h3 className={`text-3xl md:text-4xl font-medium`}>
          Social Impact Tracker
        </h3>
        <p>Our vision is to create a student-led investment club where performance fuels purpose. Below is a model of how future gains could be channeled into meaningful causes.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h4 className={` text-brown text-2xl font-medium mb-4`}>
                Target Donations (Year 1 Goal)
              </h4>
              <div className="flex md:items-end md:flex-row flex-col">
                <span className={` text-brown text-5xl font-medium`}>
                  $7,500
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-brown font-medium">
                    Projected Progress: $6,375
                  </span>
                  <span className="text-brown font-medium">85%</span>
                </div>
                <Progress
                  value={85}
                  className="h-3 bg-brown/20"
                  indicatorClassName="bg-brown"
                />
              </div>
            </div>

            <h4 className={` text-brown text-2xl font-medium mb-4`}>
              Beneficiary Causes
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                <div>
                  <p className="text-brown font-medium">
                    Education Access Initiative
                  </p>
                  <p className="text-brown/70 text-sm">$2,250 (Projected)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                <div>
                  <p className="text-brown font-medium">Climate Action Fund</p>
                  <p className="text-brown/70 text-sm">$1,925 (Projected)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown/20 mr-4"></div>
                <div>
                  <p className="text-brown font-medium">
                    Community Development
                  </p>
                  <p className="text-brown/70 text-sm">$2,200 (Projected)</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className={` text-brown text-2xl font-medium mb-6`}>
              Impact Timeline (Illustrative)
            </h4>
            <div className="relative border-l-2 border-brown pl-4 pb-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                <p className="text-brown font-medium">2025 Q3</p>
                <p className="text-brown">
                  $1,625 donated to Education Access Initiative
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                <p className="text-brown font-medium">2025 Q2</p>
                <p className="text-brown">
                  $1,400 donated to Climate Action Fund
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                <p className="text-brown font-medium">2025 Q1</p>
                <p className="text-brown">
                  $1,250 donated to Community Development
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                <p className="text-brown font-medium">2024 Q4</p>
                <p className="text-brown">
                  $1,100 donated to Education Access Initiative
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-brown"></div>
                <p className="text-brown font-medium">2024 Q3</p>
                <p className="text-brown">
                  $1,000 donated to Climate Action Fund
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
