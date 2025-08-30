import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_4DVQraDk_ELw2rtjAUFsP4CzQtLiqbLVk");
const POST = async ({ request }) => {
  console.log("Contact API called");
  console.log("RESEND_API_KEY exists:", true);
  try {
    const body = await request.json();
    console.log("Request body:", body);
    const { salutation, firstName, lastName, email, phone, message } = body;
    const data = await resend.emails.send({
      from: "Action Maker <noreply@actionmaker.be>",
      to: ["info@actionmaker.be"],
      replyTo: email,
      subject: `Nieuw contactformulier van ${firstName} ${lastName}`,
      html: `
        <h1>Nieuw contactformulier</h1>
        <p><strong>Aanspreking:</strong> ${salutation}</p>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ""}
        <p><strong>Bericht:</strong><br>${message}</p>
      `
    });
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({
        error: "Er is iets misgegaan. Probeer het later opnieuw.",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
