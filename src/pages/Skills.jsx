import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading";
import { SkillsGrid } from "../components/skills/SkillCard";
import Container, { PageHeader } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills — {personalInfo.name}</title>
        <meta name="description" content="Technical skills and technologies mastered by Rolando Mendoza Jr." />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="Expertise"
            title="Skills & Technologies"
            description="A comprehensive overview of the technologies and tools I use to build exceptional digital products."
          />
          <SkillsGrid categories={skillCategories} />
        </Container>
      </PageHeader>
    </>
  );
}
