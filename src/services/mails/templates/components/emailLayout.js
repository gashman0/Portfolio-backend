const emailLayout = ({
  header,
  content,
  footer,
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    name="color-scheme"
    content="light"
  />

  <meta
    name="supported-color-schemes"
    content="light"
  />
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #f3f3f3;
    font-family: Arial, Helvetica, sans-serif;
    color: #111111;
  "
>

  <table
    role="presentation"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      width: 100%;
      background-color: #f3f3f3;
      padding: 30px 15px;
    "
  >

    <tr>
      <td align="center">

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            width: 100%;
            max-width: 620px;
            background-color: #ffffff;
          "
        >

          ${header}

          ${content}

          ${footer}

        </table>

      </td>
    </tr>

  </table>

</body>
</html>
`;

export default emailLayout;