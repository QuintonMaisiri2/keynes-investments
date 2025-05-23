import { Button } from "./ui/button";

export default function Header() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[url('/images/students.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-black/50" />
      <div className="p-6 md:p-12 flex flex-col justify-center z-10 relative">
        <div>
          <h2 className={`text-5xl md:text-7xl font-bold leading-tight`}>
            Keynes
            <br />
            Investments
          </h2>
          <p className="text-xl md:text-4xl mt-6">
            Redefine investing as a tool for inclusive progress—financially, socially, and intellectually.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/join#form">
              <Button className="bg-brown hover:bg-brown/90 text-white text-xl">
                Join Us
              </Button>
            </a>
            <a href="#impact">
              <Button
                variant="outline"
                className="border-brown text-brown hover:bg-brown hover:text-white text-xl"
              >
                See Our Impact
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
