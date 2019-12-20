import mjml2html from "mjml";

export default async function(link) {
  return await mjml2html(
    `
    <mjml>
    <mj-body>
      <mj-column>
        <mj-image width="300px" src="https://res.cloudinary.com/dpop0qjmn/image/upload/v1545849241/helpmates/logo.svg" />
      </mj-column>
      <mj-column>
        <mj-button font-family="Helvetica" background-color="#f45e43" color="white" href="${link}">
        Reset Password
      </mj-button>
      </mj-column>
    </mj-body>
    </mjml>
  `,
    { minify: true }
  );
}
