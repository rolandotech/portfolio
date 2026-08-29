import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../components/ui/SocialIcons";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import Container, { PageHeader } from "../components/layout/Container";
import { personalInfo } from "../data/personal";
import { fadeUp } from "../utils/animations";

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: personalInfo.social.facebook, label: "Facebook" },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — {personalInfo.name}</title>
        <meta name="description" content="Get in touch with Rolando Mendoza Jr. for your next project." />
      </Helmet>

      <PageHeader>
        <Container>
          <SectionHeading
            subtitle="Contact"
            title="Let's Work Together"
            description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          />

          <ContactForm />

          <motion.div
            className="flex items-center justify-center gap-4 mt-12 md:mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </Container>
      </PageHeader>
    </>
  );
}
