import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function apply(){
    return (
          <section className="py-12 px-6 md:px-12 bg-amber-50/50 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 col-span-1 md:col-span-2 max-w-7xl mx-auto">
          <div>
            <h2 className={`text-brown text-3xl font-medium mb-6`}>
              Application Form
            </h2>
            <form className="space-y-4" id="form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-brown">
                    First Name
                  </label>
                  <Input id="firstName" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-brown">
                    Last Name
                  </label>
                  <Input id="lastName" className="bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-brown">
                  Email
                </label>
                <Input id="email" type="email" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="year" className="text-brown">
                  Year of Study
                </label>
                <Input id="year" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="major" className="text-brown">
                  Major/Program
                </label>
                <Input id="major" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="text-brown">
                  Relevant Experience
                </label>
                <Textarea id="experience" rows={4} className="bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="motivation" className="text-brown">
                  Why do you want to join Keynes Investments?
                </label>
                <Textarea id="motivation" rows={4} className="bg-white" />
              </div>

              <Button
                type="submit"
                className="w-full bg-brown hover:bg-brown/90"
              >
                Submit Application
              </Button>
            </form>
          </div>
          <img
            src="/images/form.jpg"
            alt="Join Keynes Investments"
            className="mt-8 rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>
    )
}