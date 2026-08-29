import { render } from "@react-email/render";
import { Resend } from "resend";
import ContactNotificationEmail from "../emails/contact-notification.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return res.status(500).json({
      error: "Email service is not configured. Add RESEND_API_KEY and related env vars.",
    });
  }

  try {
    const html = await render(
      ContactNotificationEmail({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      }),
    );

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `[Portfolio] ${subject.trim()}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Something went wrong while sending your message." });
  }
}
