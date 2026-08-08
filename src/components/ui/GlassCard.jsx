import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${glow ? "glow-blue" : ""} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
