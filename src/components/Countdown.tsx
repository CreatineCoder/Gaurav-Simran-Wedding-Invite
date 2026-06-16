import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import { Reveal } from "./Section";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown() {
  const target = new Date(wedding.date).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <Reveal className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white/70 shadow-sm sm:h-24 sm:w-24"
        >
          <span className="font-serif text-3xl text-maroon">{value}</span>
          <span className="text-xs uppercase tracking-wide text-rose">{label}</span>
        </div>
      ))}
    </Reveal>
  );
}
