import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/animations";

export default function Timeline({ items }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
        <motion.div
          className="w-full bg-gradient-to-b from-accent-blue via-accent-indigo to-accent-purple origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const variant = isEven ? fadeLeft : fadeRight;

          return (
            <motion.div
              key={item.year}
              className={`relative flex items-center gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                <div className="glass rounded-2xl p-6 inline-block text-left w-full md:max-w-sm">
                  <span className="text-sm font-medium text-accent-indigo">{item.year}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-indigo border-4 border-background md:-translate-x-1/2 z-10">
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent-indigo"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-white/5">
        <motion.div
          className="w-full bg-gradient-to-b from-accent-blue via-accent-indigo to-accent-purple origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative pl-12 md:pl-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full bg-accent-indigo border-4 border-background z-10">
              <motion.div
                className="absolute inset-0 rounded-full bg-accent-indigo"
                animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
            </div>

            <div className="glass rounded-2xl p-8 hover:glow-blue transition-shadow duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-accent-indigo font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400">{exp.period}</span>
                  <p className="text-xs text-gray-500">{exp.location}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-accent-indigo mt-1 shrink-0">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
