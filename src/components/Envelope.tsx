import { useState } from "react";
import { motion } from "framer-motion";
import envelopeImg from "../assets/envelope.png";
import cornerTopRight from "../assets/corner_top_right.png";
import cornerBottomLeft from "../assets/corner_bottom_left.png";

// Fullscreen intro gate — sage background, floral envelope image with a gold
// wax seal. Tapping reveals the site and unlocks background music.
// Drop a transparent PNG at public/envelope.png to get the realistic floral
// envelope; until then a styled CSS envelope is shown as a fallback.
export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF0E6] px-6"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      {/* corner florals pinned to the screen edges — works on phone & desktop */}
      <img
        src={cornerTopRight}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 w-[42vw] max-w-[300px] object-contain"
      />
      <img
        src={cornerBottomLeft}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[42vw] max-w-[300px] object-contain"
      />

      <motion.h1
        className="relative z-10 mb-8 px-6 text-center font-script text-5xl text-sagedeep sm:mb-12 sm:text-6xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Sabhi ne pucha kab ?
      </motion.h1>

      <motion.button
        onClick={onOpen}
        className="relative z-10 flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        aria-label="Open the invitation"
      >
        {imgOk ? (
          <img
            src={envelopeImg}
            alt="Floral wedding envelope"
            onError={() => setImgOk(false)}
            className="w-[min(78vw,420px)] drop-shadow-2xl"
          />
        ) : (
          // CSS fallback envelope (sage + floral framing)
          <div className="relative h-[260px] w-[min(78vw,380px)] rounded-md bg-sage shadow-2xl">
            <div className="absolute inset-3 rounded border border-white/50" />
            <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
              🌿🌸🌿
            </div>
            <div
              className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-l-[190px] border-r-[190px] border-t-[130px] border-l-transparent border-r-transparent border-t-sagedeep/70"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}

        {/* gold wax seal with monogram (overlaid on the envelope) */}
        
      </motion.button>

      <motion.h1
        className="relative z-10 mt-8 px-6 text-center font-script text-5xl text-sagedeep sm:mt-12 sm:text-6xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Humne kaha ab !!
      </motion.h1>

      <motion.p
        className="relative z-10 mt-2 animate-pulse px-6 text-center font-serif text-base italic tracking-wide text-sagedeep/80 sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Tap the envelope to open your invitation
      </motion.p>
    </motion.div>
  );
}
