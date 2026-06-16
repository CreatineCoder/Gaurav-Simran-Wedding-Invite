import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { ScratchCard } from "./ScratchCard";
import sideDecor from "../assets/side_panel_decoration.jpg";

// Landing gate: cream floral screen with a gold scratch card. Scratching the
// foil reveals the invitation and (via onOpen) unlocks music + shows the page.
export function ScratchGate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF0E6] px-6"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7 }}
    >
      {/* floral side borders matching the theme */}
      <img
        src={sideDecor}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <motion.p
        className="relative mb-6 font-serif text-lg tracking-[0.3em] text-[#9D5757]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        YOU&apos;RE INVITED
      </motion.p>

      <div className="relative" onPointerDown={() => void 0}>
        <ScratchCard onComplete={onOpen}>
          <div className="px-6">
            <div className="font-script text-5xl text-[#9D5757]">
              {wedding.monogram.left} &amp; {wedding.monogram.right}
            </div>
            <p className="mt-1 font-serif text-lg italic text-[#9D5757]/80">
              {wedding.dateLabel}
            </p>
          </div>
        </ScratchCard>
      </div>

      <motion.p
        className="relative mt-6 animate-pulse font-serif italic text-[#9D5757]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Scratch the gold card to open your invitation
      </motion.p>
    </motion.div>
  );
}
