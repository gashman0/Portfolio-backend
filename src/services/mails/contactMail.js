import sendMail from "./mailService.js";

import contactConfirmationTemplate from "./templates/contact/contactConfirmation.js";
import contactNotificationTemplate from "./templates/contact/contactNotification.js";

const sendContactNotification = async ({
  name,
  email,
  subject,
  message,
}) => {
  return sendMail({
    to: process.env.MAIL_REPLY_TO,
    replyTo: email,
    subject: `New portfolio contact from ${name}`,
    html: contactNotificationTemplate({
      name,
      email,
      subject,
      message,
    }),
  });
};

const sendContactConfirmation = async ({
  name,
  email,
}) => {
  return sendMail({
    to: email,
    replyTo: process.env.MAIL_REPLY_TO,
    subject: "Thanks for reaching out",
    html: contactConfirmationTemplate({
      name,
    }),
  });
};

export {
  sendContactNotification,
  sendContactConfirmation,
};