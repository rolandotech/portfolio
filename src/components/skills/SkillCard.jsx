import { motion } from "framer-motion";
import { getIcon } from "../../utils/icons";
import GlassCard from "../ui/GlassCard";
import { FlexCards } from "../layout/Container";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function SkillCard({ category, index }) {
  const IconComponent = getIcon(category.icon);

  return (
    <motion.div variants={fadeUp} className="flex">
      <GlassCard
        className="flex flex-col w-full group hover:glow-blue transition-shadow duration-500"
        glow={false}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center shrink-0 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-300">
            <IconComponent size={20} className="text-accent-indigo" />
          </div>
          <h3 className="text-lg font-semibold">{category.title}</h3>
        </div>

        <div className="flex flex-col gap-4">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">{skill.name}</span>
                <span className="text-xs text-gray-500 tabular-nums">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function SkillsGrid({ categories }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <FlexCards>
        {categories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </FlexCards>
    </motion.div>
  );
}
