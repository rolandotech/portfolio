import { motion } from "framer-motion";
import { getIcon } from "../../utils/icons";
import GlassCard from "../ui/GlassCard";
import { FlexCards } from "../layout/Container";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function ServiceCard({ service }) {
  const IconComponent = getIcon(service.icon);

  return (
    <motion.div variants={fadeUp} className="flex">
      <GlassCard className="flex flex-col w-full group hover:glow-purple transition-shadow duration-500">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-300">
          <IconComponent size={24} className="text-accent-indigo" />
        </div>

        <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-indigo transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

        <ul className="flex flex-col gap-2 mt-auto">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}

export function ServicesGrid({ services }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <FlexCards>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </FlexCards>
    </motion.div>
  );
}
