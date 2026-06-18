import { wedding } from "../data/wedding";
import { Reveal, Divider } from "./Section";
import { Countdown } from "./Countdown";
import heroBg from "../assets/side_panel_decoration.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#FAF0E6]/10" />
      <div className="relative z-10 mx-auto max-w-md py-12">
        <p className="font-serif text-lg italic tracking-wide text-rose">
          ॥ {wedding.invocation} ॥
        </p>

        <p className="mx-auto mt-8 max-w-sm font-serif text-base leading-relaxed text-maroon/80">
          {wedding.introLine}
        </p>

        <h1 className="mt-6 font-script text-6xl text-maroon sm:text-7xl">{wedding.groom}</h1>
        <p className="mt-2 font-serif text-sm text-maroon/70">{wedding.groomParents}</p>

        <p className="my-4 font-script text-3xl text-maroon/80">with</p>

        <h1 className="font-script text-6xl text-maroon sm:text-7xl">{wedding.bride}</h1>
        <p className="mt-2 font-serif text-sm text-maroon/70">{wedding.brideParents}</p>
      </div>
    </section>
  );
}

export function Couple() {
  return (
    <section className="bg-blush/40 px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-script text-4xl text-maroon sm:text-5xl">Our Story</h2>
        <Divider />
        <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed text-maroon/80">
          {wedding.coupleStory}
        </p>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base text-rose">{wedding.tagline}</p>
      </Reveal>
    </section>
  );
}

export function CountdownSection() {
  return (
    <section className="px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-script text-4xl text-maroon sm:text-5xl">Counting Down</h2>
        <Divider />
      </Reveal>
      <Countdown />
    </section>
  );
}

export function Events() {
  return (
    <section className="bg-gradient-to-b from-[#FAF0E6] via-[#e8dacc] to-[#d1c0b0] px-1 py-20 sm:px-6">
      <Reveal className="text-center">
        <h2 className="font-script text-4xl text-maroon sm:text-5xl">Wedding Events</h2>
        <Divider />
      </Reveal>

      <div className="mx-auto flex max-w-[1230px] flex-wrap justify-center gap-6">
        {wedding.events
          .filter((e) => ("image" in e && e.image) || ("imageMobile" in e && e.imageMobile))
          .map((e, i) => {
            const ev = e as {
              image?: string;
              imageMobile?: string;
              name: string;
              tag?: string;
              date?: string;
              time?: string;
              venue?: string;
              overlayPos?: string;
            };
            // Events with only a mobile image are hidden on screens ≥480px.
            const mobileOnly = !ev.image && !!ev.imageMobile;
            // Shift the overlay toward the upper-right empty space when requested.
            const overlayAlign =
              ev.overlayPos === "top-right"
                ? "items-end justify-start pt-[12%] text-right"
                : "items-center justify-center text-center";
            // Reception gets its own overlay positioning, tweak independently here.
            const isReception = ev.name === "Reception";
            const overlayClass = isReception
              ? "items-center justify-center px-8 py-8 text-center"
              : `px-8 py-8 pl-36 ${overlayAlign}`;
            return (
              <Reveal
                key={e.name}
                delay={i * 0.08}
                className={`w-full md:w-[calc(50%-0.75rem)]${mobileOnly ? " min-[480px]:hidden" : ""}`}
              >
                <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-white/70 p-0 shadow-sm">
                  <picture className="w-full">
                    {/* Desktop / tablet (≥480px) gets the main image (if any). */}
                    {ev.image && (
                      <source media="(min-width: 480px)" srcSet={ev.image} />
                    )}
                    {/* Phones (<480px) get imageMobile if provided, else the main image. */}
                    <img
                      src={ev.imageMobile ?? ev.image}
                      alt={e.name}
                      loading="lazy"
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </picture>

                  {/* Mobile text overlay — anchored to the top of the portrait image. */}
                  <div className="absolute inset-x-0 top-0 flex flex-col items-center px-6 pt-8 text-center text-white min-[480px]:hidden">
                    <h3 className="font-script text-4xl drop-shadow">{ev.name}</h3>
                    {ev.tag && (
                      <p className="mt-2 max-w-xs font-serif text-sm italic text-white/90 drop-shadow">
                        {ev.tag}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-serif text-sm drop-shadow">
                      {ev.date && <span>{ev.date}</span>}
                      {ev.time && <span>· {ev.time}</span>}
                    </div>
                    {ev.venue && (
                      <p className="mt-1 font-serif text-sm text-white/90 drop-shadow">{ev.venue}</p>
                    )}
                  </div>

                  {/* Web-only text overlay (mobile images already have text baked in). */}
                  {ev.image && (
                    <div className={`absolute inset-0 hidden flex-col bg-black/30 text-white min-[480px]:flex ${overlayClass}`}>
                      <h3 className="font-script text-4xl drop-shadow sm:text-5xl">{ev.name}</h3>
                      {ev.tag && (
                        <p className="mt-3 max-w-xs font-serif text-base italic text-white/90 drop-shadow sm:text-lg">
                          {ev.tag}
                        </p>  
                      )}
                      <div className="my-5 text-xl text-gold drop-shadow">❀</div>
                      <div className="space-y-4 font-serif">
                        {ev.date && (
                          <div>
                            <p className="text-xs tracking-[0.3em] text-white/80">DATE</p>
                            <p className="mt-1 text-xl drop-shadow sm:text-2xl">{ev.date}</p>
                          </div>
                        )}
                        {ev.time && (
                          <div>
                            <p className="text-xs tracking-[0.3em] text-white/80">TIME</p>
                            <p className="mt-1 text-xl drop-shadow sm:text-2xl">{ev.time}</p>
                          </div>
                        )}
                        {ev.venue && (
                          <div>
                            <p className="text-xs tracking-[0.3em] text-white/80">VENUE</p>
                            <p className="mt-1 text-lg drop-shadow sm:text-xl">{ev.venue}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-[#FAF0E6] px-6 py-24">
      <Reveal className="text-center">
        <h2 className="font-script text-5xl text-maroon sm:text-6xl">Come Celebrate Our Forever</h2>
        <Divider />
        <p className="mx-auto max-w-xl font-serif text-lg italic text-maroon/80 sm:text-2xl">
          Bring your smile; we&apos;ll bring the rest.
        </p>
      </Reveal>
    </section>
  );
}

export function Families() {
  return (
    <section className="bg-sage px-6 py-16 text-center">
      <Reveal>
        <p className="font-serif text-xs tracking-[0.3em] text-sagedeep/70">WITH LOVE</p>
        <h2 className="mt-2 font-script text-4xl text-maroon sm:text-5xl">The Families</h2>
        <Divider />
      </Reveal>

      <Reveal className="mx-auto mt-5 max-w-xl rounded-2xl border border-gold/40 px-5 py-10">
        <p className="font-serif text-sm tracking-[0.25em] text-[#7E4343]/80 sm:text-base">
          {wedding.hosts.label.toUpperCase()}
        </p>
        <div className="my-3 text-gold">❀</div>
        <div className="space-y-2">
          {wedding.hosts.names.map((name) => (
            <p key={name} className="font-serif text-2xl text-[#5e2f2f] sm:text-3xl">
              {name}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Rsvp() {
  const link = `https://wa.me/${wedding.rsvp.whatsappNumber}?text=${encodeURIComponent(
    wedding.rsvp.message
  )}`;
  return (
    <section className="bg-blush/40 px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-script text-4xl text-maroon sm:text-5xl">Will You Join Us?</h2>
        <Divider />
        <p className="mx-auto mb-8 max-w-md font-serif text-2xl text-maroon/80">
          Your presence is the greatest gift. Kindly let us know if you can make it.
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-maroon px-8 py-3 font-sans text-white shadow transition hover:bg-rose"
        >
          RSVP on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#7E4343] px-6 py-16 text-center">
      <div className="font-script text-4xl text-white sm:text-5xl">
        {wedding.monogram.left} &amp; {wedding.monogram.right}
      </div>
      <p className="mt-4 font-sans text-sm tracking-wide text-white/70">
        {wedding.dateLabel}
      </p>
    </footer>
  );
}
