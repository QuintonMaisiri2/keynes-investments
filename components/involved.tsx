const steps = [
  {
    title: "Submit an Application",
    description:
      "Fill out our interest form with your background, experience, and why you want to join Keynes Investments.",
  },
  {
    title: "Initial Interview",
    description:
      "Selected applicants will be invited for a conversation with current members to discuss their interest and experience.",
  },
  {
    title: "Investment Challenge",
    description:
      "Complete a basic investment analysis task to demonstrate your approach and thinking.",
  },
  {
    title: "Onboarding",
    description:
      "Successful candidates will join our team and receive comprehensive training on our investment philosophy and processes.",
  },
];

export default function Involved() {
  return (
    <section className="py-12 px-6 md:px-12 min-h-screen bg-amber-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className={`text-brown text-3xl md:text-7xl font-medium mb-6`}>
            How to Get Involved
          </h2>
          <p className="text-brown text-lg mb-6">
            Keynes Investments welcomes passionate students who are interested
            in finance, investing, and making a positive impact. Our recruitment
            process is designed to identify motivated individuals who align with
            our values and mission.
          </p>
          <h2 className="font-medium text-2xl text-brown mb-4">
            Membership Criteria
          </h2>
          <ul className="text-brown list-disc space-y-2 mb-6">  
            <li>Must be enrolled in a university program (UG or PG)</li>
            <li>Academic performance in finance/econ fields preferred</li>
            <li>Passion for ESG and ethical capital markets</li>
            <li>Committee interviews for shortlisted applicants</li>
          </ul>
          <img
            src="/images/involved.jpg"
            alt="Join Keynes Investments"
            className="w-full h-[60vh] object-cover"
          />
        </div>
        <div className="space-y-8">
          <div>
            <img
              src="/images/directions.jpg"
              alt="Join Keynes Investments"
              className="  w-full h-[40vh] object-cover"
            />
          </div>
          {steps.map((step, index) => (
            <div key={index} className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center">
                  <span className="text-brown font-medium">{index + 1}</span>
                </div>
              </div>
              <div>
                <h3 className="text-brown text-xl font-medium">{step.title}</h3>
                <p className="text-brown/80 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
          <a href="/join#form">
            <button className="p-4 bg-brown mt-6 ml-12">Join us now</button>
          </a>
        </div>
      </div>
    </section>
  );
}
