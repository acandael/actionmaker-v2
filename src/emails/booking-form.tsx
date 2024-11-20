import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface BookingFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  groupSize: number;
  hours?: number;
  location?: string;
  budget?: number;
  message?: string;
  activityTitle: string;
}

export const BookingFormEmail = ({
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
}: BookingFormEmailProps) => {
  const previewText = `Nieuwe boeking voor ${activityTitle} van ${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nieuwe Teambuilding Boeking</Heading>

          <Section style={section}>
            <Text style={text}>
              <strong>Activiteit:</strong> {activityTitle}
            </Text>
            <Text style={text}>
              <strong>Naam:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Telefoon:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Datum:</strong> {date}
            </Text>
            <Text style={text}>
              <strong>Aantal personen:</strong> {groupSize}
            </Text>
            <Text style={text}>
              <strong>Aantal uren:</strong> {hours}
            </Text>
            <Text style={text}>
              <strong>Locatie:</strong> {location}
            </Text>
            <Text style={text}>
              <strong>Budget:</strong> {budget}
            </Text>
          </Section>

          {message && (
            <Section style={section}>
              <Heading as="h2" style={h2}>
                Bericht:
              </Heading>
              <Text style={messageText}>{message}</Text>
            </Section>
          )}

          <Section style={footer}>
            <Text style={footerText}>
              Deze boeking is aangevraagd via het boekingsformulier op actionmaker.be
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const section = {
  padding: '24px',
  borderBottom: '1px solid #e6ebf1',
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  margin: '16px 0',
  padding: '0 24px',
};

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.25',
  margin: '0 0 16px',
};

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '8px 0',
};

const messageText = {
  ...text,
  whiteSpace: 'pre-wrap',
};

const footer = {
  padding: '24px',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0',
  textAlign: 'center' as const,
};
