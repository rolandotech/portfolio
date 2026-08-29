import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function ContactNotificationEmail({
  name = "Someone",
  email = "unknown@example.com",
  subject = "Portfolio inquiry",
  message = "",
}) {
  const previewText = `New message from ${name}: ${subject}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Portfolio Message</Heading>
          <Text style={paragraph}>
            You received a new message through your portfolio contact form.
          </Text>

          <Section style={details}>
            <Text style={label}>From</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>

            <Text style={label}>Subject</Text>
            <Text style={value}>{subject}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={label}>Message</Text>
          <Text style={messageBox}>{message}</Text>

          <Hr style={hr} />

          <Text style={footer}>
            Sent from the contact form on your portfolio website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#050816",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "32px 24px",
  maxWidth: "560px",
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "0 0 16px",
};

const paragraph = {
  color: "#94a3b8",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 24px",
};

const details = {
  margin: "0 0 8px",
};

const label = {
  color: "#6366f1",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  margin: "16px 0 4px",
};

const value = {
  color: "#e2e8f0",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "0",
};

const link = {
  color: "#818cf8",
  textDecoration: "underline",
};

const messageBox = {
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "12px",
  color: "#e2e8f0",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "8px 0 0",
  padding: "16px",
  whiteSpace: "pre-wrap",
};

const hr = {
  borderColor: "rgba(255, 255, 255, 0.1)",
  margin: "24px 0",
};

const footer = {
  color: "#64748b",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "0",
};
