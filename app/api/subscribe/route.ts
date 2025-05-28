import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX!;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const response = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.status >= 400) {
    const error = await response.json();
    return NextResponse.json(
      { error: error.detail || "Failed to subscribe." },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "Successfully subscribed!" });
}
