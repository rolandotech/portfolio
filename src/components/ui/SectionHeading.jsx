import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      className={`flex flex-col mb-10 md:mb-12 max-w-2xl ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } ${align === "right" ? "items-end text-right ml-auto" : ""} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {subtitle && (
        <span className="inline-block text-xs md:text-sm font-medium tracking-widest uppercase text-accent-indigo mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
