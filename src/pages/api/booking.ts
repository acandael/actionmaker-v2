import { Resend } from 'resend';
import { BookingFormEmail } from '../../emails/booking-form';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, date, groupSize, message, activityTitle } = body;

    const data = await resend.emails.send({
      from: 'Anthony Candaele <info@anthonycandaele.com>',
      to: ['info@anthonycandaele.com'],
      reply_to: email,
      subject: `Nieuwe boeking voor ${activityTitle} van ${firstName} ${lastName}`,
      react: BookingFormEmail({
        firstName,
        lastName,
        email,
        phone,
        date,
        groupSize,
        message,
        activityTitle,
      }),
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Er is iets misgegaan. Probeer het later opnieuw.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
