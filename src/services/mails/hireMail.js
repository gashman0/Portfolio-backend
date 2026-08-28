import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

//Email I receive if a customer submits hire request
const sendHireNotification = async ({
  name,
  email,
  phone,
  plan,
  projectType,
  projectDescription,
  budget,
}) => {
  const { data, error } = await resend.emails.send({
    from: `Gashman <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_REPLY_TO,
    replyTo: email,
    subject: `New Portfolio hire request from ${name}`,
    html: `
            <h2>New Portfolio Hire Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Plan:</strong> ${plan}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget}</p>

            <h3>Description</h3>
            <p>${projectDescription}</p>
        `,
  });

  if (error) {
    console.error("Hire notification failed:", error);
    throw new Error(error.message);
  }

  console.log("Hire notification sent:", data.id);
  return data;
};

//Email customer receives if they submit hire request
const sendHireConfirmation = async ({ name, email }) => {
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
};

export { sendHireNotification, sendHireConfirmation };
