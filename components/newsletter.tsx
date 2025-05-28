"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Newsletter() {
      
        const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);
      
      const handleNewsLetterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        setLoading(true);
        try {
          const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
          setLoading(false);
          if (res.ok) {
            window.alert("Subscription successful!");
            setEmail(""); // Clear the input field after successful subscription
          } else {
            window.alert("Failed to subscribe");
          }
        } catch (error) {
          window.alert("An error occurred while subscribing. Please try again.");
        }
      };
    return(
         <div className="bg-amber-50/50 p-6 rounded-lg mb-8">
              <h3 className={` text-brown text-2xl font-medium mb-4`}>
                Newsletter
              </h3>
              <p className="text-brown mb-4">
                Subscribe to our monthly newsletter for investment insights,
                event announcements, and updates on our charitable impact.
              </p>
              <form className="space-y-4" onSubmit={handleNewsLetterSubmit}>
                <div>
                  <Input
                    placeholder="Your email address"
                    className="bg-white"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brown hover:bg-brown/90"
                >
                 {loading ? <p>Subscribing...</p> : <p>Subscribe</p>}
                </Button>
              </form>
            </div>
    )
}