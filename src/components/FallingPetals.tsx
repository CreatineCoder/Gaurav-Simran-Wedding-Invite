import { useMemo } from "react";

// Continuous flowers + leaves shower, like the inspiration site.
// Pure CSS animation — light on performance, loops forever.
const ITEMS = ["🌸", "🌼", "🌿", "🍃", "💮", "🌺"];

export function FallingPetals({ count = 22 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 9 + Math.random() * 8,
        size: 14 + Math.random() * 18,
        drift: (Math.random() - 0.5) * 120,
        char: ITEMS[Math.floor(Math.random() * ITEMS.length)],
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal absolute top-[-10%] select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
