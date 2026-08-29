import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../ui/SocialIcons";
import Container from "./Container";
import Logo from "../ui/Logo";
import { personalInfo } from "../../data/personal";

const socialIcons = [
  { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: personalInfo.social.facebook, label: "Facebook" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/5 mt-8">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-10 md:gap-8 mb-10 md:mb-12 max-w-4xl mx-auto md:max-w-none">
          <div className="flex-1 min-w-[220px] text-center md:text-left">
            <Link to="/" className="inline-flex items-center mb-4">
              <Logo className="h-9 w-9" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Crafting exceptional digital experiences with modern technologies and
              attention to detail.
            </p>
          </div>

          <div className="flex-1 min-w-[160px] text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-2.5">
              {["About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[220px] text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shrink-0"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}
