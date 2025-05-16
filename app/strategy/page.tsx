import { PageHeader } from "@/components/page-header";
import Philosophy from "@/components/philosophy";

export default function StrategyPage() {
  return (
    <div className="font-roboto">
      <PageHeader
        title="Investment Strategy"
        description="Our approach to generating long-term value while maintaining ethical standards."
        imageUrl="/images/strategy.jpg"
      />
      <Philosophy />

      <section className="py-12 px-6 md:px-12 min-h-screen max-w-7xl mx-auto min-h-screen flex gap-12">
        <div className="mt-20 ">
          <h2 className={` text-brown text-5xl md:text-7xl font-medium mb-6 pb-2 border-b-2 border-b-brown/50 w-max`}>
            Fund <br/>Structure
          </h2>
          <p className="text-brown text-lg mb-8">
            Keynes Investments operates with a transparent fee structure
            designed to align incentives while enabling our social mission. Our
            unique model ensures we deliver both financial returns and positive
            impact.
          </p>
          <img src="images/funds.jpg" alt="coins in a jar" />
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-amber-50/50 p-8 rounded-lg">
            <h3 className={` text-brown text-2xl font-medium mb-4`}>
              Fee Structure
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-brown font-medium">Management Fee: 2%</p>
                <p className="text-brown/80">
                  Annual fee based on assets under management, covering
                  operational costs and educational activities.
                </p>
              </div>
              <div>
                <p className="text-brown font-medium">Performance Fee: 20%</p>
                <p className="text-brown/80">
                  Applied to returns above our benchmark, with 100% of this fee
                  donated to charity partners.
                </p>
              </div>
              <div>
                <p className="text-brown font-medium">High-Water Mark</p>
                <p className="text-brown/80">
                  Performance fees only apply when we exceed our previous
                  highest value, ensuring we don't charge for recovering
                  previous losses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50/50 p-8 rounded-lg">
            <h3 className={` text-brown text-2xl font-medium mb-4`}>
              Charitable Allocation
            </h3>
            <p className="text-brown mb-4">
              What makes our fund unique is that 100% of performance fees are
              donated to charity. This creates a powerful alignment of
              interests:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-brown">
              <li>Better performance generates more donations</li>
              <li>Charities are selected by both members and investors</li>
              <li>Focus on measurable impact and transparent reporting</li>
              <li>Quarterly donation schedule with public announcement</li>
            </ul>
            <p className="text-brown mt-4">
              In 2023, we're on track to donate over $150,000 to our charity
              partners through this model.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 min-h-screen max-w-7xl mx-auto min-h-screen">
        <div className="mt-20">
          <h2 className={`text-brown text-5xl md:text-7xl font-medium mb-6 w-max pb-2 border-b-2 border-b-brown/50`}>
            Case <br />Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-brown/20 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-rose-200 to-amber-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className={` text-brown text-2xl font-medium`}>
                    Renewable Energy
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-brown text-xl font-medium mb-2">
                  Green Energy Transition
                </h3>
                <p className="text-brown/80 mb-4">
                  Our analysis of the renewable energy sector led to strategic
                  investments in established utilities pivoting to green energy
                  and emerging technology providers.
                </p>
                <div className="flex justify-between text-brown">
                  <span>Return: +34.2%</span>
                  <span>Holding Period: 2.5 years</span>
                </div>
              </div>
            </div>

            <div className="border border-brown/20 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-200 to-rose-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className={` text-brown text-2xl font-medium`}>
                    Healthcare Innovation
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-brown text-xl font-medium mb-2">
                  Precision Medicine
                </h3>
                <p className="text-brown/80 mb-4">
                  We identified companies leading in precision medicine with
                  strong patents, robust R&D pipelines, and responsible pricing
                  models.
                </p>
                <div className="flex justify-between text-brown">
                  <span>Return: +41.7%</span>
                  <span>Holding Period: 3 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
