import emailLayout from "../components/emailLayout.js";
import emailHeader from "../components/emailHeader.js";
import emailFooter from "../components/emailFooter.js";
import escapeHtml from "../components/escapeHtml.js";

const contactConfirmationTemplate = ({ name }) => {
  const safeName = escapeHtml(name);

  const content = `
    <tr>
      <td
        style="
          padding: 42px 40px;
        "
      >

        <!-- Greeting -->

        <p
          style="
            margin: 0 0 18px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            line-height: 38px;
            font-weight: 700;
            color: #111111;
          "
        >
          Hi ${safeName},
        </p>

        <p
          style="
            margin: 0 0 30px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            line-height: 26px;
            color: #555555;
          "
        >
          Thanks for reaching out. I've received your message
          and truly appreciate you taking the time to contact me.
        </p>


        <!-- Success -->

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            margin-bottom: 32px;
            background-color: #f7f7f7;
            border: 1px solid #dddddd;
          "
        >
          <tr>

            <td
              width="60"
              valign="middle"
              style="padding: 22px 0 22px 22px;"
            >
              <div
                style="
                  width: 38px;
                  height: 38px;
                  line-height: 38px;
                  border-radius: 50%;
                  background-color: #111111;
                  color: #ffffff;
                  text-align: center;
                  font-size: 20px;
                  font-weight: bold;
                "
              >
                ✓
              </div>
            </td>

            <td style="padding: 22px 22px 22px 10px;">

              <p
                style="
                  margin: 0 0 5px;
                  font-size: 14px;
                  line-height: 21px;
                  font-weight: 700;
                  color: #111111;
                "
              >
                Your message has been received.
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 13px;
                  line-height: 21px;
                  color: #666666;
                "
              >
                I'll get back to you as soon as possible.
              </p>

            </td>

          </tr>
        </table>


        <!-- What's next -->

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="margin-bottom: 32px;"
        >
          <tr>

            <td
              width="52"
              valign="top"
            >
              <div
                style="
                  width: 38px;
                  height: 38px;
                  line-height: 38px;
                  border-radius: 50%;
                  background-color: #f0f0f0;
                  text-align: center;
                  font-size: 19px;
                  color: #111111;
                "
              >
                ◷
              </div>
            </td>

            <td style="padding-left: 14px;">

              <p
                style="
                  margin: 0 0 7px;
                  font-size: 15px;
                  font-weight: 700;
                  color: #111111;
                "
              >
                What happens next?
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 14px;
                  line-height: 23px;
                  color: #666666;
                "
              >
                I'll review your message and get back to you
                personally. If your inquiry is time-sensitive,
                feel free to mention that in your message.
              </p>

            </td>

          </tr>
        </table>


        <!-- Portfolio -->

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            border-top: 1px solid #eeeeee;
            margin-top: 20px;
          "
        >
          <tr>
            <td style="padding-top: 30px;">

              <p
                style="
                  margin: 0 0 8px;
                  font-size: 15px;
                  font-weight: 700;
                  color: #111111;
                "
              >
                In the meantime
              </p>

              <p
                style="
                  margin: 0 0 20px;
                  font-size: 14px;
                  line-height: 23px;
                  color: #666666;
                "
              >
                Feel free to explore my work, projects and
                experience on my portfolio.
              </p>

              <a
                href="https://gashman.dev"
                target="_blank"
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
                Visit My Portfolio &nbsp; →
              </a>

            </td>
          </tr>
        </table>


        <!-- Signature -->

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            margin-top: 38px;
            border-top: 1px solid #eeeeee;
          "
        >
          <tr>
            <td style="padding-top: 27px;">

              <p
                style="
                  margin: 0 0 7px;
                  font-family: Georgia, serif;
                  font-size: 17px;
                  font-style: italic;
                  color: #555555;
                "
              >
                Best regards,
              </p>

              <p
                style="
                  margin: 0 0 4px;
                  font-size: 17px;
                  font-weight: 800;
                  color: #111111;
                "
              >
                Gashman
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 10px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  color: #888888;
                "
              >
                FULL STACK DEVELOPER
              </p>

            </td>
          </tr>
        </table>

      </td>
    </tr>
  `;

  return emailLayout({
    header: emailHeader(),
    content,
    footer: emailFooter({
      text: "You received this email because you contacted me through my portfolio.",
    }),
  });
};

export default contactConfirmationTemplate;