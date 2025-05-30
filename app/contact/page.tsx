"use client";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { FormInput } from "@/components/formInput";
import { useEffect, useState } from "react";
import { sendEmail } from "@/lib/helper";

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}
export default function ContactPage() {
  const [form, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const res = await fetch('/api/contact',{
      method: "POST",
      body: JSON.stringify(form)
    })
    setLoading(true)
    if (res.ok){
      window.alert("message sent successfully")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }else{
      window.alert("failed to send message successfully")
    }
  };
  return (
    <div className="font-ebgaramond">
      <PageHeader
        title="Contact Us"
        description="Reach out to the Keynes Investments team for inquiries, partnerships, or to learn more about our fund."
        imageUrl="/images/contact.jpg"
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className={` text-brown text-3xl font-medium mb-6`}>
                Get In Touch
              </h2>
              <p className="text-brown text-lg mb-8">
                Interested in joining our team, investing with us, or partnering
                on a project? We’d love to connect. Fill out the form, and we’ll
                get back to you shortly.
              </p>

              <form
                className="space-y-4 text-black"
                id="form"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    id="firstName"
                    type="text"
                    name="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setFormData({ ...form, firstName: e.target.value })
                    }
                  />
                  <FormInput
                    id="lastName"
                    type="text"
                    name="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setFormData({ ...form, lastName: e.target.value })
                    }
                  />
                </div>
                <FormInput
                  id="email"
                  type="email"
                  name="Email"
                  value={form.email}
                  onChange={(e) =>
                    setFormData({ ...form, email: e.target.value })
                  }
                />
                 <FormInput
                  id="subject"
                  type="text"
                  name="Subject"
                  value={form.subject}
                  onChange={(e) =>
                    setFormData({ ...form, subject: e.target.value })
                  }
                />

                <div className="space-y-2">
                  <label htmlFor="message" className="text-brown">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="bg-white"
                    value={form.message}
                    onChange={(e) =>
                      setFormData({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brown hover:bg-brown/90"
                >
                 {loading ? <p>Sending...</p> : <p>Send Message</p>}
                </Button>
              </form>
            </div>

            <div>
              <h2 className={` text-brown text-3xl font-medium mb-6`}>
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <Mail className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Email</h3>
                    <p className="text-brown"> keynesinvests.capital@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Location</h3>
                    <p className="text-brown">UAE, Abu Dhabi</p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <Phone className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">Phone</h3>
                    <p className="text-brown">(555) 123-4567</p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <Clock className="text-brown mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-brown font-medium mb-1">
                      Office Hours
                    </h3>
                    <p className="text-brown">
                      Monday - Thursday: 4:00 PM - 8:00 PM
                    </p>
                    <p className="text-brown">By appointment only</p>
                  </div>
                </div>
              </div>

              <h3 className={` text-brown text-xl font-medium mb-4`}>
                Connect With Us
              </h3>
              <div className="flex space-x-6 mb-8">
                <a
                  href="#"
                  className="text-brown hover:text-brown/80 transition-colors"
                >
                  <Linkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="text-brown hover:text-brown/80 transition-colors"
                >
                  <Instagram size={28} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-brown hover:text-brown/80 transition-colors"
                >
                  <Twitter size={28} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>

              <div className="aspect-video bg-amber-50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
