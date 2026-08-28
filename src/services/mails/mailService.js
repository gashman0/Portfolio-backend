import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({
  to,
  subject,
  html,
  replyTo,
}) => {
  const { data, error } = await resend.emails.send({
    from: `Gashman <${process.env.MAIL_FROM}>`,
    to,
    replyTo,
    subject,
    html,
  });

  if (error) {
    console.error("Email sending failed:", error);
    throw new Error(error.message);
  }

  console.log(`Email sent successfully: ${data.id}`);

  return data;
};

export default sendMail;