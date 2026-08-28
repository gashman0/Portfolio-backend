import sendMail from "./mailService.js";

import hireConfirmationTemplate from "./templates/hire/hireConfirmation.js";
import hireNotificationTemplate from "./templates/hire/hireNotification.js";


const sendHireNotification = async ({
  name,
  email,
  phone,
  plan,
  projectType,
  projectDescription,
  budget,
}) => {
  return sendMail({
    to: process.env.MAIL_REPLY_TO,
    replyTo: email,
    subject: `New portfolio hire request from ${name}`,
    html: hireNotificationTemplate({
      name,
      email,
      phone,
      plan,
      projectType,
      projectDescription,
      budget,
    }),
  });
};

const sendHireConfirmation = async ({
  name,
  email,
}) => {
  return sendMail({
    to: email,
    replyTo: process.env.MAIL_REPLY_TO,
    subject: "Your project request has been received",
    html: hireConfirmationTemplate({
      name,
    }),
  });
};

export {
  sendHireNotification,
  sendHireConfirmation,
};