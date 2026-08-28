import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactNotification = async ({ name, email, subject, message }) => {
  const { data, error } = await resend.emails.send({
    from: `Gashman <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_REPLY_TO,
    replyTo: email,
    subject: `New portfolio contact from ${name}`,
    html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <h3>Message</h3>
        <p>${message}</p>
    `,
  });

  if (error) {
    console.error("Contact notification failed:", error);
    throw new Error(error.message);
  }

  console.log("Contact notification sent:", data.id);

  return data;
};

const sendContactConfirmation = async ({ name, email }) => {
  const { data, error } = await resend.emails.send({
    from: `Gashman <${process.env.MAIL_FROM}>`,
    to: [email],
    replyTo: process.env.MAIL_REPLY_TO,
    subject: "Thanks for reaching out",
    html: `
        <h2>Hi ${name},</h2>

        <p>
            Thanks for reaching out through my portfolio.
            I've received your message successfully.
        </p>

        <p>
            I'll review your message and get back to you as soon as possible.
        </p>

        <p>
            Best regards,<br />
            Gashman
        </p>
    `,
  });

  if(error){
    console.error("Contact confirmation failed:", error);
    throw new Error(error.message);
  }
  console.log("Contact confirmation sent:", data.id);
  return data;
};

export { sendContactConfirmation, sendContactNotification};
