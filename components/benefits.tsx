import { BookOpen, Users, TrendingUp, Heart, Calendar } from "lucide-react";

export default function Benefits(){
    return (
         <section className="py-12 px-6 md:px-12 min-h-screen bg-cover bg-center bg-[url('/images/benefit.jpg')] flex items-center justify-center">
        <div className="max-w-7xl mx-auto bg-brown/50 backdrop-blur-sm p-8 md:p-12 text-white rounded-lg">
          <h2 className={` text-3xl font-medium mb-6`}>Benefits</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border rounded-lg">
              <BookOpen className=" mb-4" size={28} />
              <h3 className=" text-xl font-medium mb-2">
                Hands-on Learning
              </h3>
              <p className="">
                Gain practical investment experience and develop skills that
                traditional classrooms can't provide.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <Users className=" mb-4" size={28} />
              <h3 className=" text-xl font-medium mb-2">
                Mentorship
              </h3>
              <p className="">
                Connect with alumni and industry professionals who provide
                guidance and career advice.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <TrendingUp className=" mb-4" size={28} />
              <h3 className=" text-xl font-medium mb-2">
                Real Investment Decisions
              </h3>
              <p className="">
                Participate in making actual investment decisions with real
                money and track results.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <Heart className=" mb-4" size={28} />
              <h3 className=" text-xl font-medium mb-2">
                Create Impact
              </h3>
              <p className="">
                Help direct donations to important causes and learn about
                ethical investing strategies.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Calendar className=" mb-4" size={28} />
              <h3 className=" text-xl font-medium mb-2">
                Events
              </h3>
              <p className="">
               Exclusive attendance at speaker events
              </p>
            </div>
          </div>
        </div>
      </section>

    )
}