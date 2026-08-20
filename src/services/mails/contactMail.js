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

const sendContactEmail = async ({ name, email, subject, message }) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New Portfolio contact from ${name}`,
    html: `
            <h2>New Portfolio Contact</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <h3>Message</h3>
            <p>${message}</p>
        `,
  });
};

export {sendContactEmail};


const testEmail = async () => {
    const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: "Portfolio Backend Test",
        text: "If you received this email, Nodemailer and Gmail SMTP are working!",
    });

    console.log("Email sent:", info.messageId);
};

export { testEmail };