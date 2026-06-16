import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Reusable scroll-reveal wrapper.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6 text-gold">
      <span className="h-px w-12 bg-maroon/40" />
      <span className="text-xl">❀</span>
      <span className="h-px w-12 bg-maroon/40" />
    </div>
  );
}
