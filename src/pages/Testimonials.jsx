import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialSlider from "../components/testimonials/TestimonialSlider";
import Container, { PageHeader } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials — {personalInfo.name}</title>
        <meta name="description" content="Client testimonials and reviews for Rolando Mendoza Jr." />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="Testimonials"
            title="What Clients Say"
            description="Don't just take my word for it — hear from the people I've worked with."
          />
          <TestimonialSlider testimonials={testimonials} />
        </Container>
      </PageHeader>
    </>
  );
}
