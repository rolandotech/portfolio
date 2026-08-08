import { Helmet } from "react-helmet-async";
import Hero from "../components/hero/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { SkillsGrid } from "../components/skills/SkillCard";
import ProjectCard from "../components/projects/ProjectCard";
import { ServicesGrid } from "../components/services/ServiceCard";
import TestimonialSlider from "../components/testimonials/TestimonialSlider";
import Button from "../components/ui/Button";
import Container, { Section, FlexCards, SectionAction } from "../components/layout/Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../data/personal";
import { skillCategories } from "../data/skills";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const topServices = services.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} — Senior React Developer</title>
        <meta
          name="description"
          content="Premium portfolio of Rolando M. Mendoza Jr. — Senior React Developer, React Native Developer, Shopify Developer, and Full Stack Developer."
        />
      </Helmet>

      <Hero />

      <Section>
        <Container>
          <motion.div
            className="flex flex-wrap md:flex-nowrap items-stretch justify-center gap-4 md:gap-6 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personalInfo.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex w-[calc(50%-0.5rem)] md:flex-1 md:w-auto md:min-w-0"
              >
                <div className="glass rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center w-full min-h-[7.5rem]">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1.5">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            subtitle="Expertise"
            title="Skills & Technologies"
            description="A comprehensive toolkit built over years of crafting digital products."
          />
          <SkillsGrid categories={skillCategories.slice(0, 3)} />
          <SectionAction>
            <Button to="/skills" variant="secondary" icon={ArrowRight}>
              View All Skills
            </Button>
          </SectionAction>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            subtitle="Portfolio"
            title="Featured Projects"
            description="A selection of my best work across web, mobile, and e-commerce."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <FlexCards>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </FlexCards>
          </motion.div>
          <SectionAction>
            <Button to="/projects" variant="secondary" icon={ArrowRight}>
              View All Projects
            </Button>
          </SectionAction>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            subtitle="What I Do"
            title="Services"
            description="End-to-end development services tailored to your business needs."
          />
          <ServicesGrid services={topServices} />
          <SectionAction>
            <Button to="/services" variant="secondary" icon={ArrowRight}>
              View All Services
            </Button>
          </SectionAction>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            subtitle="Testimonials"
            title="What Clients Say"
            description="Trusted by companies and founders worldwide."
          />
          <TestimonialSlider testimonials={testimonials} />
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Extraordinary</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
              </p>
              <Button to="/contact" size="lg" icon={ArrowRight}>
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
