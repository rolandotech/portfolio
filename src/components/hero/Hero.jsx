import { motion } from "framer-motion";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import TypingEffect from "../ui/TypingEffect";
import Container, { SITE_MAX_WIDTH } from "../layout/Container";
import { personalInfo } from "../../data/personal";
import { fadeUp, staggerContainer } from "../../utils/animations";
import FloatingShapes, { GradientBlob, ParticlesBackground } from "./FloatingElements";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className={`relative w-full h-full ${SITE_MAX_WIDTH}`}>
          <GradientBlob />
          <FloatingShapes />
          <ParticlesBackground />
        </div>
      </div>

      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <Container className="py-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center w-full max-w-4xl mx-auto gap-5 md:gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full glass text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Available for new projects
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-400 text-base md:text-lg">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
            >
              {personalInfo.firstName}
              <br />
              <span className="gradient-text">{personalInfo.lastName}</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center min-h-[2rem] md:min-h-[2.5rem] w-full"
            >
              <TypingEffect texts={personalInfo.titles} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Crafting premium digital experiences with modern technologies.
              Transforming ideas into elegant, high-performance applications.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <Button
                href={personalInfo.resumeUrl}
                icon={Download}
                iconPosition="left"
                size="lg"
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
              <Button
                to="/projects"
                variant="secondary"
                icon={ArrowRight}
                size="lg"
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} className="text-gray-500" />
      </motion.div>
    </section>
  );
}
