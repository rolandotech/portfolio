import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Calendar, Target, Award, Sparkles } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import Timeline from "../components/experience/Timeline";
import GlassCard from "../components/ui/GlassCard";
import Container, { PageHeader } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { timeline } from "../data/experience";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — {personalInfo.name}</title>
        <meta name="description" content={`Learn about ${personalInfo.name}, professional journey, skills, and mission.`} />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="About Me"
            title="Crafting Digital Excellence"
            description={personalInfo.summary}
            align="left"
          />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-10 justify-center w-full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 flex-[2] min-w-0 max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <GlassCard hover={false}>
                  <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                  <p className="text-gray-400 leading-relaxed">{personalInfo.summary}</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard hover={false}>
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={20} className="text-accent-indigo shrink-0" />
                    <h3 className="text-xl font-semibold">Personal Mission</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{personalInfo.mission}</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard hover={false}>
                  <div className="flex items-center gap-3 mb-4">
                    <Award size={20} className="text-accent-indigo shrink-0" />
                    <h3 className="text-xl font-semibold">Certifications & AI Tools</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {personalInfo.certifications.map((cert) => (
                      <div key={cert.id} className="rounded-xl bg-white/5 border border-white/5 p-4">
                        <p className="font-medium text-white">{cert.title}</p>
                        <p className="text-sm text-accent-indigo mb-2">{cert.issuer}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>
                      </div>
                    ))}
                    {personalInfo.aiTools.map((tool) => (
                      <div key={tool.id} className="rounded-xl bg-white/5 border border-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={16} className="text-accent-indigo shrink-0" />
                          <p className="font-medium text-white">{tool.name}</p>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 flex-1 min-w-[280px]"
            >
              <motion.div variants={fadeUp}>
                <GlassCard hover={false} className="flex flex-col items-center justify-center text-center py-2">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={personalInfo.yearsOfExperience} suffix="+" />
                  </div>
                  <p className="text-gray-500">Years of Experience</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard hover={false} className="flex items-center gap-4">
                  <MapPin size={20} className="text-accent-indigo shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard hover={false} className="flex items-center gap-4">
                  <Calendar size={20} className="text-accent-indigo shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Available</p>
                    <p className="text-white">Open to opportunities</p>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>

          <SectionHeading
            subtitle="Journey"
            title="Career Timeline"
            description="Key milestones in my professional development career."
          />
          <Timeline items={timeline} />
        </Container>
      </PageHeader>
    </>
  );
}
