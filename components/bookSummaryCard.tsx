import React from "react";

export type BookSummary = {
  title: string;
  author: string;
  publishedYear: number;
  summary: string;
  sections: {
    title: string;
    points: {
      heading: string;
      description: string;
    }[];
  }[];
  keyTakeaways: string[];
  link: string;
};

type Props = {
  data: BookSummary | undefined;
};

const BookSummaryCard: React.FC<Props> = ({ data }) => {
  if (data === undefined) {
    return (
      <div className="text-center text-gray-500">No book summary available</div>
    );
  } else {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6 text-brown font-ebgaramond overflow-y-scroll h-full">
        <div>
          <h1 className="text-3xl font-black">{data!.title}</h1>
          <p className="text-gray-600">
            by {data!.author} ({data!.publishedYear})
          </p>
        </div>

        <p className="text-lg">{data!.summary}</p>

        {data!.sections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold mt-4">{section.title}</h2>
            <ul className="list-disc pl-6">
              {section.points.map((point, i) => (
                <li key={i} className="mb-2">
                  <strong>{point.heading}:</strong> {point.description}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-2xl font-semibold mt-6">Key Takeaways</h2>
          <ul className="list-disc pl-6 mt-2">
            {data!.keyTakeaways.map((takeaway, i) => (
              <li key={i}>{takeaway}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <a
            href={data!.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown hover:bg-brown/90 text-white font-semibold py-2 px-4 rounded"
          >
            Read the Book
          </a>
        </div>
      </div>
    );
  }
};

export default BookSummaryCard;
