import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import { ExperienceTimeline } from "../components/experience/Timeline";
import Container, { PageHeader } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience — {personalInfo.name}</title>
        <meta name="description" content="Professional experience and career history of Rolando Mendoza Jr." />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="Career"
            title="Work Experience"
            description="A timeline of my professional journey, achievements, and the technologies I've mastered along the way."
          />
          <ExperienceTimeline experiences={experiences} />
        </Container>
      </PageHeader>
    </>
  );
}
