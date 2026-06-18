import { useEffect } from "react";
import confetti from "canvas-confetti";

const COLORS = ["#FEA1A1", "#E08F7A", "#9D5757", "#ECCDB4", "#F6C28B", "#fff3c4"];

// Celebration burst using canvas-confetti (runs in a Web Worker, off the main
// thread). Fires firework-style bursts for ~2.5s, then calls onDone.
export function Fireworks({ onDone }: { onDone?: () => void }) {
  useEffect(() => {
    const duration = 3000;
    const start = Date.now();
    const end = start + duration;
    let settle = 0;

    const frame = () => {
      // remaining fraction (1 → 0): bursts thin out so the effect dies slowly
      const remaining = Math.max(0, (end - Date.now()) / duration);
      const count = Math.ceil(2 * remaining);

      if (count > 0) {
        confetti({
          particleCount: count,
          angle: 60,
          spread: 70,
          startVelocity: 55,
          origin: { x: 0, y: 0.9 },
          colors: COLORS,
          zIndex: 9999,
        });
        confetti({
          particleCount: count,
          angle: 120,
          spread: 70,
          startVelocity: 55,
          origin: { x: 1, y: 0.9 },
          colors: COLORS,
          zIndex: 9999,
        });
      }

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        // stop spawning, but let the last particles finish falling before
        // unmounting (avoids an abrupt reset mid-air)
        settle = window.setTimeout(() => onDone?.(), 2000);
      }
    };

    // an initial big central pop
    confetti({
      particleCount: 15,
      spread: 100,
      startVelocity: 45,
      origin: { x: 0.5, y: 0.5 },
      colors: COLORS,
      zIndex: 9999,
    });
    frame();

    return () => {
      clearTimeout(settle);
      confetti.reset();
    };
  }, [onDone]);

  return null;
}
