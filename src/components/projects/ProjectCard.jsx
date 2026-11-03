import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import Button from "../ui/Button";
import { fadeUp, scaleIn } from "../../utils/animations";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      variants={fadeUp}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick?.(project)}
      className="group cursor-pointer flex"
    >
      <div className="glass rounded-2xl overflow-hidden hover:glow-blue transition-all duration-500 flex flex-col w-full">
        <div className="relative w-full shrink-0 overflow-hidden pt-[62.5%]">
          <ProjectPreview
            src={project.live}
            title={project.title}
            embed={project.embed !== false}
            className="absolute inset-0"
          />

          {project.featured && (
            <span className="absolute top-11 left-3 z-20 px-3 py-1 text-xs font-medium rounded-full bg-accent-indigo/80 text-white backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        <div className="p-5 md:p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-semibold group-hover:text-accent-indigo transition-colors leading-snug">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 shrink-0">
              {project.category}
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-gray-500"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs text-gray-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-auto pt-1">
            {project.github && (
              <Button
                href={project.github}
                variant="ghost"
                size="sm"
                icon={GithubIcon}
                iconPosition="left"
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </Button>
            )}
            <Button
              href={project.live}
              variant="ghost"
              size="sm"
              icon={ExternalLink}
              iconPosition="left"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <ProjectPreview
              src={project.live}
              title={project.title}
              embed={project.embed !== false}
              interactive
              className="relative w-full overflow-hidden pt-[56.25%] rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <span className="px-3 py-1 text-xs rounded-full bg-accent-indigo/20 text-accent-indigo">
                {project.category}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <Button href={project.github} icon={GithubIcon} iconPosition="left">
                  View Code
                </Button>
              )}
              <Button href={project.live} variant="secondary" icon={ExternalLink} iconPosition="left">
                Live Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 w-full">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onChange(category)}
          className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
            active === category
              ? "bg-gradient-to-r from-accent-blue to-accent-indigo text-white shadow-lg shadow-accent-indigo/25"
              : "glass text-gray-400 hover:text-white hover:bg-white/10"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
