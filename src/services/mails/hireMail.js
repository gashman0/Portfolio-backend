import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
//Email I receive if a customer submits hire request
const sendHireMail = async ({
  name,
  email,
  phone,
  plan,
  projectType,
  projectDescription,
  budget,
}) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
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
};

//Email customer receives if they submit hire request
const sendHireNotification = async ({ name, email }) => {
    await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    replyTo: process.env.SMTP_USER,
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

export { sendHireMail, sendHireNotification };
