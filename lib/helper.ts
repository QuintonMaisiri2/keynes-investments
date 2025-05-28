import { ContactFormData } from "@/app/contact/page";
import { ApplyData } from "@/components/apply";
import * as nodemailer from "nodemailer";

async function getContactFormEmail({
  firstName,
  lastName,
  email,
  subject,
  message,
}: ContactFormData) {
  const text = `You have received a new message from the contact form:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

Please respond to the user at ${email} as soon as possible.`;

  const html = `
    <p><strong>You have received a new message from the contact form:</strong></p>

    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Subject:</strong> ${subject}</p>

    <h4>Message:</h4>
    <p>${message!.replace(/\n/g, "<br>")}</p>

    <p>Please respond to the user at <a href="mailto:${email}">${email}</a> as soon as possible.</p>
  `;

  return { text, html };
}

async function getJoinKeynesApplicationEmail({
  firstName,
  lastName,
  email,
  motivation,
}: {
  firstName?: string;
  lastName?: string;
  email?: string;
  motivation?: string;
}) {
  const text = `You have received a new application to join Keynes:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: "Join Keynes Application"

Motivation:
${motivation}

Please review the application and follow up with the applicant at ${email}.`;

  const html = `
    <p><strong>You have received a new application to join Keynes:</strong></p>

    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Subject:</strong> Application to join keynes </p>

    <h4>Motivation:</h4>
    <p>${motivation!.replace(/\n/g, "<br>")}</p>

    <p>Please review the application and follow up with the applicant at <a href="mailto:${email}">${email}</a>.</p>
  `;

  return { text, html };
}

export async function sendEmail(data: ContactFormData | ApplyData) {
  const { firstName, lastName, email } = data;
  // Use subject if it exists, otherwise provide a default or empty string
  const subject = (data as any).subject ?? "";
  const motivation = (data as ApplyData).motivation ?? "";
  const message = (data as ContactFormData).message ?? "";

  let text, html;

  if (motivation && motivation.length > 0) {
    ({ text, html } = await getJoinKeynesApplicationEmail({
      firstName,
      lastName,
      email,
      motivation,
    }));
  } else {
    ({ text, html } = await getContactFormEmail({
      firstName,
      lastName,
      email,
      subject,
      message,
    }));
  }

  // If data is ApplyData (doesn't have subject), you may want to handle it differently here.
  // For now, this just continues with the same email formatting.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log("Error sending email:", error);
    return { error: "An error occured" };
  }
}
