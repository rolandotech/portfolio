import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import { ServicesGrid } from "../components/services/ServiceCard";
import Container, { PageHeader } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — {personalInfo.name}</title>
        <meta name="description" content="Development services offered by Rolando Mendoza Jr. — React, React Native, Shopify, WordPress, and Full Stack." />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="What I Do"
            title="Services I Offer"
            description="Comprehensive development services to help your business thrive in the digital landscape."
          />
          <ServicesGrid services={services} />
        </Container>
      </PageHeader>
    </>
  );
}
