import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../data/wedding";
import { ScratchCard } from "./ScratchCard";
import { Countdown } from "./Countdown";
import { Reveal, Divider } from "./Section";

// In-page section: a gold scratch card the guest scratches to reveal a little
// message. Completing it fires the celebration (onReveal) and reveals the
// countdown just below the card.
export function ScratchSection({ onReveal }: { onReveal: () => void }) {
  const [revealed, setRevealed] = useState(false);

  const handleComplete = () => {
    setRevealed(true);
    onReveal();
  };

  return (
    <section className="bg-blush/40 px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-script text-4xl text-maroon sm:text-5xl">A Little Surprise</h2>
        <Divider />
        <p className="mx-auto mb-8 max-w-md font-serif text-lg text-maroon/80">
          Scratch the card below to reveal our message for you.
        </p>
      </Reveal>

      <Reveal className="flex justify-center">
        <ScratchCard onComplete={handleComplete} width={460} height={220}>
          <div className="px-6">
            <div className="font-script text-4xl text-maroon">
              {wedding.monogram.left} &amp; {wedding.monogram.right}
            </div>
            <p className="mt-2 font-serif text-xl italic text-maroon/80">
              You&apos;re invited to celebrate our wedding!
            </p>
            <p className="mt-1 font-sans text-sm tracking-wide text-rose">
              {wedding.dateLabel} 
            </p>
          </div>
        </ScratchCard>
      </Reveal>

      {/* countdown appears just below the card once it's revealed */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="mb-6 font-script text-3xl text-maroon sm:text-4xl">
              Counting Down To Our Big Day
            </h3>
            <Countdown />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
