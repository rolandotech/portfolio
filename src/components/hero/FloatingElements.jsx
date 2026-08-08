import { motion } from "framer-motion";
import { useMouseParallax } from "../../hooks/useMouseParallax";

const shapes = [
  { size: 80, x: "8%", y: "18%", delay: 0, duration: 8 },
  { size: 120, x: "78%", y: "12%", delay: 1, duration: 10 },
  { size: 60, x: "68%", y: "68%", delay: 2, duration: 7 },
  { size: 100, x: "18%", y: "72%", delay: 0.5, duration: 9 },
  { size: 40, x: "48%", y: "38%", delay: 1.5, duration: 6 },
  { size: 70, x: "86%", y: "48%", delay: 3, duration: 11 },
];

export default function FloatingShapes() {
  const parallax = useMouseParallax(0.015);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border border-white/5 bg-white/[0.02]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            x: parallax.x * (i + 1) * 0.3,
            y: parallax.y * (i + 1) * 0.3,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GradientBlob() {
  const parallax = useMouseParallax(0.03);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[min(600px,45%)] aspect-square rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          top: "8%",
          left: "12%",
          x: parallax.x * 2,
          y: parallax.y * 2,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[min(500px,40%)] aspect-square rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          bottom: "8%",
          right: "8%",
          x: parallax.x * -1.5,
          y: parallax.y * -1.5,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[min(400px,35%)] aspect-square rounded-full opacity-15 blur-[80px] left-1/2"
        style={{
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
          top: "45%",
          x: parallax.x,
          y: parallax.y,
          translateX: "-50%",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function ParticlesBackground() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
