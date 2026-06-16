import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Reveal, Divider } from "./Section";

const OPTIONS = [
  { id: "ladke", label: "Ladke wale" },
  { id: "ladki", label: "Ladki wale" },
] as const;

const CONFETTI_COLORS = ["#FEA1A1", "#E08F7A", "#9D5757", "#ECCDB4", "#F6C28B"];

// "Aap kis side ho?" poll. Tapping an option pops it, fills it with the
// envelope cream colour, and fires a small confetti burst at the tap point.
export function Poll() {
  const [selected, setSelected] = useState<string | null>(null);

  const pick = (id: string, e: React.MouseEvent) => {
    setSelected(id);
    confetti({
      particleCount: 20 + Math.floor(Math.random() * 6), // 20-25
      spread: 100,
      startVelocity: 30,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: CONFETTI_COLORS,
      zIndex: 9999,
    });
  };

  return (
    <section className="bg-[#9c6262] px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-script text-4xl text-white/70 sm:text-5xl">Aap kis side ho</h2>
        <Divider />
      </Reveal> 

      <Reveal className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
        {OPTIONS.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <motion.button
              key={opt.id}
              onClick={(e) => pick(opt.id, e)}
              whileTap={{ scale: 0.92 }}
              animate={isSelected ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`flex-1 rounded-full border-2 px-8 py-4 font-serif text-xl shadow-sm transition-colors ${
                isSelected
                  ? "border-maroon bg-[#FAF0E6] text-maroon"
                  : "border-maroon/30 bg-white/70 text-maroon/80 hover:border-maroon/60"
              }`}
            >
              {opt.label}
            </motion.button>
          );
        })}
      </Reveal>
    </section>
  );
}
