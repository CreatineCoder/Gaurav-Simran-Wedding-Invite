// Floating persistent music control.
export function MusicToggle({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-white shadow-lg transition hover:bg-rose"
    >
      <span className={playing ? "animate-spin-slow text-xl" : "text-xl"}>
        {playing ? "♫" : "♪"}
      </span>
    </button>
  );
}
