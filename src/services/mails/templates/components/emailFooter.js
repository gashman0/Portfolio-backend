const emailFooter = ({
  text = "You received this email because you interacted with Gashman.dev.",
}) => `
  <tr>
    <td
      style="
        padding: 24px 40px;
        background-color: #111111;
        text-align: center;
      "
    >
      <p
        style="
          margin: 0 0 7px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          line-height: 18px;
          color: #aaaaaa;
        "
      >
        ${text}
      </p>

      <p
        style="
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          line-height: 17px;
          color: #666666;
        "
      >
        © ${new Date().getFullYear()} Gashman.dev · All rights reserved.
      </p>
    </td>
  </tr>
`;

export default emailFooter;