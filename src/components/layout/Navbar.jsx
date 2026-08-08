import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../utils/animations";
import { SITE_MAX_WIDTH } from "./Container";
import ThemeToggle from "./ThemeToggle";

const headerLinkPadding = "px-5 py-3";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className={`relative mx-auto w-full ${SITE_MAX_WIDTH} px-6 lg:px-8`}>
        <nav className="flex items-center justify-between w-full min-h-[4.25rem] lg:min-h-[5rem] gap-4">
          <Link
            to="/"
            className={`inline-flex items-center shrink-0 ${headerLinkPadding} -ml-3 lg:ml-0`}
          >
            <span className="text-2xl font-bold tracking-tight leading-none">
              RM<span className="gradient-text">.</span>
            </span>
          </Link>

          <ul className="hidden lg:flex flex-1 items-center justify-evenly max-w-4xl w-full mx-auto px-4">
            {navLinks.map((link) => (
              <li key={link.path} className="flex items-center">
                <Link
                  to={link.path}
                  className={`relative inline-flex items-center ${headerLinkPadding} text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-5 right-5 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center shrink-0 gap-2">
            <ThemeToggle className="hidden lg:inline-flex" />

            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center ${headerLinkPadding} text-sm font-medium rounded-xl bg-gradient-to-r from-accent-blue to-accent-indigo text-white hover:shadow-lg hover:shadow-accent-indigo/25 transition-all duration-300`}
            >
              Hire Me
            </Link>

            <ThemeToggle className="lg:hidden" />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/5"
          >
            <ul className={`mx-auto flex ${SITE_MAX_WIDTH} flex-col items-center gap-2 px-6 py-5`}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full max-w-sm"
                >
                  <Link
                    to={link.path}
                    className={`flex items-center justify-center w-full ${headerLinkPadding} rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-white bg-white/5"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-3 w-full max-w-sm flex justify-center">
                <ThemeToggle />
              </li>
              <li className="pt-3 w-full max-w-sm">
                <Link
                  to="/contact"
                  className={`flex items-center justify-center w-full ${headerLinkPadding} rounded-xl text-sm font-medium bg-gradient-to-r from-accent-blue to-accent-indigo text-white`}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
