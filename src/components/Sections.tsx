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
      <div className="relative z-10">
        <p className="font-serif tracking-[0.3em] text-maroon/70">WE ARE GETTING MARRIED</p>
        <h1 className="my-4 font-script text-4xl text-maroon sm:text-5xl sm:text-7xl md:text-8xl">
          {wedding.groom}
          <span className="mx-2 text-rose">&amp;</span>
          {wedding.bride}
        </h1>
        <p className="font-serif text-2xl text-maroon/80">{wedding.dateLabel}</p>
        <p className="mt-1 font-sans text-sm tracking-wide text-rose">{wedding.city}</p>
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
          .filter((e) => "image" in e && e.image)
          .map((e, i) => (
            <Reveal key={e.name} delay={i * 0.08} className="w-full md:w-[calc(50%-0.75rem)]">
              <div className="flex h-full items-center justify-center rounded-2xl bg-white/70 p-0 shadow-sm">
                <picture className="w-full">
                  {/* Desktop / tablet (≥480px) gets the main image. */}
                  <source
                    media="(min-width: 480px)"
                    srcSet={(e as { image: string }).image}
                  />
                  {/* Phones (<480px) get imageMobile if provided, else the main image. */}
                  <img
                    src={(e as { imageMobile?: string; image: string }).imageMobile ?? (e as { image: string }).image}
                    alt={e.name}
                    loading="lazy"
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </picture>
              </div>
            </Reveal>
          ))}
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
        <p className="font-serif text-xs tracking-[0.25em] text-sagedeep/70">
          {wedding.hosts.label.toUpperCase()}
        </p>
        <div className="my-3 text-gold">❀</div>
        <div className="space-y-1.5">
          {wedding.hosts.names.map((name) => (
            <p key={name} className="font-serif text-lg text-maroon/90">
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
        <p className="mx-auto mb-8 max-w-md font-serif text-lg text-maroon/80">
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
      <p className="mt-4 font-serif text-lg text-white/70">{wedding.families}</p>
      <p className="mt-2 font-sans text-xs tracking-wide text-white/70">
        {wedding.dateLabel} · {wedding.city}
      </p>
    </footer>
  );
}
