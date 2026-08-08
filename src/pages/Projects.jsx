import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard, { ProjectFilter, ProjectModal } from "../components/projects/ProjectCard";
import Container, { PageHeader, FlexCards } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { projects, projectCategories } from "../data/projects";
import { staggerContainer } from "../utils/animations";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects — {personalInfo.name}</title>
        <meta name="description" content="Portfolio projects by Rolando Mendoza Jr. — Web, Mobile, Shopify, and Full Stack applications." />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="Portfolio"
            title="Featured Projects"
            description="Explore my latest work across web development, mobile apps, e-commerce, and full-stack solutions."
          />

          <ProjectFilter
            categories={projectCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <FlexCards className="gap-8">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </FlexCards>
          </motion.div>
        </Container>
      </PageHeader>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
