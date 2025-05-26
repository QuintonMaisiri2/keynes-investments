import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { client } from "../sanity/client";
import { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt,"excerpt": body[0].children[0].text}`;
const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]|order(eventDate asc)[0...3]{_id, title, slug, eventDate, location}`;
const options = { next: { revalidate: 30 } };

export default async function NewsPage() {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getTime = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const events = await client.fetch<SanityDocument[]>(
    EVENTS_QUERY,
    {},
    options
  );

  return (
    <div>
      <PageHeader
        title="News & Updates"
        description="Stay current with Keynes Investments events, announcements, and market insights."
        imageUrl="/images/news.jpg"
      />

      <section className="py-12 px-6 md:px-12 font-ebgaramond">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className={` text-brown text-3xl md:text-5xl font-medium mb-8`}>
              Latest Updates
            </h2>
            <div className="grid gap-8 mb-8">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="border-b border-brown/10 pb-8 w-full"
                >
                  <p className="text-brown/70 flex items-center mb-2">
                    <CalendarIcon className="mr-2" size={16} />
                    <span>{formatDate(new Date(post.publishedAt))}</span>
                  </p>
                  <h3 className={` text-brown text-2xl font-medium mb-3`}>
                    {post.title}
                  </h3>
                  <p className="text-brown mb-4">{post.excerpt}</p>
                  <Link
                    href={`/news/${post.slug.current}`}
                    className="text-brown font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-amber-50/50 p-6 rounded-lg mb-8">
              <h3 className={` text-brown text-2xl font-medium mb-4`}>
                Newsletter
              </h3>
              <p className="text-brown mb-4">
                Subscribe to our monthly newsletter for investment insights,
                event announcements, and updates on our charitable impact.
              </p>
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your email address"
                    className="bg-white"
                    type="email"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brown hover:bg-brown/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="border border-brown/20 rounded-lg p-6 mb-8">
              <h3 className={` text-brown text-2xl font-medium mb-4`}>
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event._id} className="border-b border-brown/10 pb-4">
                     <p className="text-brown font-medium">
                    {event.title}
                  </p>
                  <p className="text-brown/70 text-sm">
                    {formatDate(new Date(event.eventDate))} • {getTime(new Date(event.eventDate))}
                  </p>
                  <p className="text-brown text-sm mt-1">
                    {event.location}
                  </p>
                  </div>
                ))}
              </div>
              {/* <Button className="w-full mt-4 bg-brown/10 hover:bg-brown/20 text-brown">
                View All Events
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
