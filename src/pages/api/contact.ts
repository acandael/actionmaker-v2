import { Resend } from 'resend';
import { ContactFormEmail } from '../../emails/contact-form';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { salutation, firstName, lastName, email, phone, message } = body;

    const data = await resend.emails.send({
      from: 'Action Maker <noreply@actionmaker.be>',
      to: ['info@actionmaker.be'],
      replyTo: email,
      subject: `Nieuw contactformulier van ${firstName} ${lastName}`,
      react: ContactFormEmail({
        salutation,
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Er is iets misgegaan. Probeer het later opnieuw.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
