import { useEffect, useRef, useState } from "react";

// Gold scratch-card gate. The user scratches the gold foil to reveal the
// invitation underneath; once ~55% is cleared it auto-reveals and calls
// onComplete (which unlocks music + shows the page).
export function ScratchCard({
  children,
  onComplete,
  width = 520,
  height = 200,
}: {
  children: React.ReactNode;
  onComplete: () => void;
  width?: number;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const done = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // monochrome rose foil (shades of the theme's #9D5757)
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "#B97B7B");
    g.addColorStop(0.5, "#9D5757");
    g.addColorStop(1, "#7E4343");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    // sheen + label
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fillRect(0, height * 0.18, width, height * 0.16);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "600 18px 'Cormorant Garamond', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✦  SCRATCH TO REVEAL  ✦", width / 2, height / 2);

    ctx.globalCompositeOperation = "destination-out";
  }, [width, height]);

  const pointerPos = (e: PointerEvent | React.PointerEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * width,
      y: ((e.clientY - rect.top) / rect.height) * height,
    };
  };

  const scratch = (x: number, y: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(x, y, 48, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkProgress = () => {
    if (done.current) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    for (let i = 3; i < data.length; i += 40) if (data[i] === 0) clear++;
    const ratio = clear / (data.length / 40);
    if (ratio > 0.55) {
      done.current = true;
      setRevealed(true);
      // fully clear, then notify
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setTimeout(onComplete, 600);
    }
  };

  return (
    <div
      className="relative select-none overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(157,87,87,0.25)]"
      style={{ width, height, maxWidth: "90vw" }}
    >
      {/* revealed content sits behind the foil */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#FAF0E6] text-center">
        {children}
      </div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full cursor-grab touch-none active:cursor-grabbing"
          style={{ width, height, maxWidth: "90vw" }}
          onPointerDown={(e) => {
            drawing.current = true;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            const p = pointerPos(e);
            scratch(p.x, p.y);
          }}
          onPointerMove={(e) => {
            if (!drawing.current) return;
            const p = pointerPos(e);
            scratch(p.x, p.y);
          }}
          onPointerUp={() => {
            drawing.current = false;
            checkProgress();
          }}
        />
      )}
    </div>
  );
}
