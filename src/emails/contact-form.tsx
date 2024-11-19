import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactFormEmail = ({
  salutation,
  firstName,
  lastName,
  email,
  phone,
  message,
}: ContactFormEmailProps) => {
  const previewText = `Nieuw contactformulier van ${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nieuw Contact Formulier</Heading>

          <Section style={section}>
            <Text style={text}>
              <strong>Aanspreking:</strong> {salutation}
            </Text>
            <Text style={text}>
              <strong>Naam:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={text}>
                <strong>Telefoon:</strong> {phone}
              </Text>
            )}
          </Section>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Bericht:
            </Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Dit bericht is verzonden via het contactformulier op
              actionmaker.be
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const section = {
  padding: "24px",
  borderBottom: "1px solid #e6ebf1",
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "16px 0",
  padding: "0 24px",
};

const h2 = {
  color: "#1f2937",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "0 0 16px",
};

const text = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "8px 0",
};

const messageText = {
  ...text,
  whiteSpace: "pre-wrap",
};

const footer = {
  padding: "24px",
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
};
