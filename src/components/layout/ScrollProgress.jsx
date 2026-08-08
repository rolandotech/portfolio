import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useMouseParallax";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX: progress,
        background: "linear-gradient(90deg, #3B82F6, #6366F1, #8B5CF6)",
      }}
    />
  );
}
