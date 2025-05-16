import { Button } from "./ui/button";

export default function Header() {
    return (
         <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen ">
        <div className="relative h-[400px] md:h-auto">
          <div className="absolute inset-0 bg-[url('/images/h1.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="p-6 md:p-12 flex flex-col justify-center">
          <div>
            <h2
              className={` text-brown text-5xl md:text-7xl font-bold leading-tight`}
            >
              Keynes
              <br />
              Investments
            </h2>
            <p className="text-brown text-xl md:text-4xl mt-6">
              Empowering Growth, Enriching Communities
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-brown hover:bg-brown/90 text-white text-xl">
                Join Us
              </Button>
              <Button
                variant="outline"
                className="border-brown text-brown hover:bg-brown/10 text-xl"
              >
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}