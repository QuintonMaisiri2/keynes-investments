"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FormInput } from "./formInput";

export interface ApplyData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  motivation?: string;
}




export default function apply() {
  const [form, setFormData] = useState<ApplyData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    motivation: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const res = await fetch('/api/apply', {
      method: "POST",
      body: JSON.stringify(form),
    })
    setLoading(false);
    if (res.ok) {
      window.alert("Application submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        motivation: "",
      });
    } else {
      window.alert("Failed to submit application");
    }
  }
  return (
    <section className="py-12 px-6 md:px-12 bg-amber-50/50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 col-span-1 md:col-span-2 max-w-7xl mx-auto">
        <div>
          <h2 className={`text-brown text-3xl font-medium mb-6`}>
            Application Form
          </h2>
          <form className="space-y-4 text-black" id="form" onSubmit={handleSubmit}>
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

            <div className="space-y-2">
              <label htmlFor="motivation" className="text-brown">
                Why do you want to join Keynes Investments?
              </label>
              <Textarea value={form.motivation} id="motivation" rows={4} className="bg-white" onChange={(e) => setFormData({...form, motivation : e.target.value})} />
            </div>

            <Button type="submit" className="w-full bg-brown hover:bg-brown/90">
              {loading ? <p>Submitting...</p> : <p>Submit Application</p>}
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
  );
}
