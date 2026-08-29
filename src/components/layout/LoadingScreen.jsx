import { motion } from "framer-motion";
import Logo from "../ui/Logo";

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <Logo className="h-16 w-16" />
        </motion.div>

        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-purple rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-sm mt-4 tracking-wider"
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
