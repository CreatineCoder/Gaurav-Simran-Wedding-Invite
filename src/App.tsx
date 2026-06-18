import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Envelope } from "./components/Envelope";
import { ScratchSection } from "./components/ScratchSection";
import { Fireworks } from "./components/Fireworks";
import { Poll } from "./components/Poll";
import { FallingPetals } from "./components/FallingPetals";
import { MusicToggle } from "./components/MusicToggle";
import { useMusic } from "./components/useMusic";
import {
  Hero,
  Events,
  Gallery,
  Families,
  Rsvp,
  Footer,
} from "./components/Sections";

type Stage = "envelope" | "site";

export default function App() {
  // The envelope is the home page — it shows first on every load / refresh.
  const [stage, setStage] = useState<Stage>("envelope");
  const [celebrate, setCelebrate] = useState(false);
  const { playing, start, toggle } = useMusic();

  // envelope tapped → enter the single-page site (user gesture unlocks music)
  const enterSite = () => {
    start();
    setStage("site");
  };

  return (
    <>
      <FallingPetals count={stage === "site" ? 15 : 21} />

      <AnimatePresence>
        {stage === "envelope" && <Envelope onOpen={enterSite} />}
      </AnimatePresence>

      {celebrate && <Fireworks onDone={() => setCelebrate(false)} />}

      {stage === "site" && (
        <main>
          <Hero />
          <ScratchSection onReveal={() => setCelebrate(true)} />
          <Poll />
          <Events />
          <Gallery />
          <Families />
          <Rsvp />
          <Footer />
          <MusicToggle playing={playing} onToggle={toggle} />
        </main>
      )}
    </>
  );
}
