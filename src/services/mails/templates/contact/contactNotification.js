import emailLayout from "../components/emailLayout.js";
import emailHeader from "../components/emailHeader.js";
import emailFooter from "../components/emailFooter.js";
import escapeHtml from "../components/escapeHtml.js";

const contactNotificationTemplate = ({
  name,
  email,
  subject,
  message,
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const receivedAt = new Date().toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const content = `
    <tr>
      <td style="padding: 42px 40px;">

        <!-- Icon -->

        <div
          style="
            width: 48px;
            height: 48px;
            line-height: 48px;
            border: 1px solid #dddddd;
            border-radius: 50%;
            text-align: center;
            font-size: 21px;
            margin-bottom: 20px;
          "
        >
          ✉
        </div>


        <p
          style="
            margin: 0 0 8px;
            font-size: 28px;
            line-height: 36px;
            font-weight: 700;
            color: #111111;
          "
        >
          New Contact Message
        </p>

        <p
          style="
            margin: 0 0 32px;
            font-size: 14px;
            line-height: 22px;
            color: #777777;
          "
        >
          Someone just reached out through your portfolio.
        </p>


        <!-- Contact information -->

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            border: 1px solid #dddddd;
            margin-bottom: 28px;
          "
        >

          <tr>
            <td style="
              padding: 16px 20px;
              width: 100px;
              font-size: 13px;
              font-weight: 700;
              border-bottom: 1px solid #eeeeee;
            ">
              Name
            </td>

            <td style="
              padding: 16px 20px;
              font-size: 14px;
              color: #555555;
              border-bottom: 1px solid #eeeeee;
            ">
              ${safeName}
            </td>
          </tr>


          <tr>
            <td style="
              padding: 16px 20px;
              font-size: 13px;
              font-weight: 700;
              border-bottom: 1px solid #eeeeee;
            ">
              Email
            </td>

            <td style="
              padding: 16px 20px;
              font-size: 14px;
              border-bottom: 1px solid #eeeeee;
            ">
              <a
                href="mailto:${safeEmail}"
                style="
                  color: #111111;
                  text-decoration: underline;
                "
              >
                ${safeEmail}
              </a>
            </td>
          </tr>


          <tr>
            <td style="
              padding: 16px 20px;
              font-size: 13px;
              font-weight: 700;
              border-bottom: 1px solid #eeeeee;
            ">
              Subject
            </td>

            <td style="
              padding: 16px 20px;
              font-size: 14px;
              color: #555555;
              border-bottom: 1px solid #eeeeee;
            ">
              ${safeSubject}
            </td>
          </tr>


          <tr>
            <td style="
              padding: 16px 20px;
              font-size: 13px;
              font-weight: 700;
            ">
              Received
            </td>

            <td style="
              padding: 16px 20px;
              font-size: 14px;
              color: #555555;
            ">
              ${receivedAt}
            </td>
          </tr>

        </table>


        <!-- Message -->

        <p
          style="
            margin: 0 0 12px;
            font-size: 15px;
            font-weight: 700;
            color: #111111;
          "
        >
          Message
        </p>

        <div
          style="
            padding: 22px;
            background-color: #f7f7f7;
            border: 1px solid #eeeeee;
            font-size: 14px;
            line-height: 24px;
            color: #444444;
            white-space: pre-line;
            margin-bottom: 30px;
          "
        >
          ${safeMessage}
        </div>


        <!-- Reply -->

        <a
          href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject)}"
          style="
            display: inline-block;
            padding: 13px 22px;
            background-color: #111111;
            color: #ffffff;
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
          "
        >
          Reply to ${safeName} &nbsp; →
        </a>

      </td>
    </tr>
  `;

  return emailLayout({
    header: emailHeader(),
    content,
    footer: emailFooter({
      text: "Sent from your Gashman.dev portfolio contact form.",
    }),
  });
};

export default contactNotificationTemplate;