import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  console.log('Booking API called');
  console.log('RESEND_API_KEY exists:', !!import.meta.env.RESEND_API_KEY);
  
  try {
    const body = await request.json();
    console.log('Request body:', body);
    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      groupSize,
      hours,
      location,
      budget,
      message,
      activityTitle,
    } = body;

    const data = await resend.emails.send({
      from: 'Action Maker <info@actionmaker.be>',
      to: ['info@actionmaker.be'],
      replyTo: email,
      subject: `Nieuwe boeking voor ${activityTitle} van ${firstName} ${lastName}`,
      html: `
        <h1>Nieuwe boeking</h1>
        <p><strong>Activiteit:</strong> ${activityTitle}</p>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Datum:</strong> ${date}</p>
        <p><strong>Groepsgrootte:</strong> ${groupSize}</p>
        <p><strong>Uren:</strong> ${hours}</p>
        ${location ? `<p><strong>Locatie:</strong> ${location}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        ${message ? `<p><strong>Bericht:</strong><br>${message}</p>` : ''}
      `,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Booking API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Er is iets misgegaan. Probeer het later opnieuw.',
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
