import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Html, Head, Preview, Body, Container, Heading, Section, Text } from '@react-email/components';
export { renderers } from '../../renderers.mjs';

const ContactFormEmail = ({
  salutation,
  firstName,
  lastName,
  email,
  phone,
  message
}) => {
  const previewText = `Nieuw contactformulier van ${firstName} ${lastName}`;
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: previewText }),
    /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
      /* @__PURE__ */ jsx(Heading, { style: h1, children: "Nieuw Contact Formulier" }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsxs(Text, { style: text, children: [
          /* @__PURE__ */ jsx("strong", { children: "Aanspreking:" }),
          " ",
          salutation
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: text, children: [
          /* @__PURE__ */ jsx("strong", { children: "Naam:" }),
          " ",
          firstName,
          " ",
          lastName
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: text, children: [
          /* @__PURE__ */ jsx("strong", { children: "Email:" }),
          " ",
          email
        ] }),
        phone && /* @__PURE__ */ jsxs(Text, { style: text, children: [
          /* @__PURE__ */ jsx("strong", { children: "Telefoon:" }),
          " ",
          phone
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: h2, children: "Bericht:" }),
        /* @__PURE__ */ jsx(Text, { style: messageText, children: message })
      ] }),
      /* @__PURE__ */ jsx(Section, { style: footer, children: /* @__PURE__ */ jsx(Text, { style: footerText, children: "Dit bericht is verzonden via het contactformulier op actionmaker.be" }) })
    ] }) })
  ] });
};
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
};
const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px"
};
const section = {
  padding: "24px",
  borderBottom: "1px solid #e6ebf1"
};
const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "16px 0",
  padding: "0 24px"
};
const h2 = {
  color: "#1f2937",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "0 0 16px"
};
const text = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "8px 0"
};
const messageText = {
  ...text,
  whiteSpace: "pre-wrap"
};
const footer = {
  padding: "24px"
};
const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center"
};

const resend = new Resend("re_4DVQraDk_ELw2rtjAUFsP4CzQtLiqbLVk");
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { salutation, firstName, lastName, email, phone, message } = body;
    const data = await resend.emails.send({
      from: "Action Maker <noreply@actionmaker.be>",
      to: ["info@actionmaker.be"],
      replyTo: email,
      subject: `Nieuw contactformulier van ${firstName} ${lastName}`,
      react: ContactFormEmail({
        salutation,
        firstName,
        lastName,
        email,
        phone,
        message
      })
    });
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Er is iets misgegaan. Probeer het later opnieuw."
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
