# Wedding Invitation Website — Build Plan

## Goal
Recreate the *experience* of the inspiration site (https://rushikesh-prajakta.invitationmedia.in)
for Gaurav's wedding: an elegant, mobile-first, single-page invitation that opens with an
"tap the envelope to reveal" animation, plays soft background music, and scrolls through the
wedding details with floral decoration and gentle motion. Same feel and flow — our own content,
photos, colors, and music. We will **not** copy their assets.

## What the Inspiration Site Does (observed + inferred)
The public landing screen shows: floral border framing, the couple monogram ("R & P"), and a
central **envelope** with "Tap the envelope to open your invitation," plus a background-music control.
The rest is a JS-rendered scroll experience. A site like this almost always contains:

1. **Intro / envelope gate** — fullscreen, floral frame, monogram, tap-to-open envelope animation.
2. **Hero** — couple names (script font), wedding date, a hero photo.
3. **Countdown** — live timer to the wedding day.
4. **Couple / story** — short intro for bride & groom, optionally "how we met."
5. **Event details** — cards per function (Haldi, Mehendi, Sangeet, Wedding, Reception) with
   date, time, venue, and a Google Maps link.
6. **Gallery** — photo grid / lightbox.
7. **RSVP / contact** — WhatsApp button or simple form.
8. **Closing / footer** — thank-you message, family names, monogram.
9. **Floating music toggle** — persistent mute/unmute, autoplay-with-consent on first tap.

## Tech Stack (decided default — change if you prefer)
- **React 18 + TypeScript + Vite** — fast, matches our existing frontend tooling.
- **Tailwind CSS** — styling + responsive utilities.
- **Framer Motion** — envelope reveal, scroll-in animations, transitions.
- **No backend needed.** It's a static site. RSVP via a **WhatsApp deep link** (zero infra) or,
  if a real form is wanted, a free Google Form / Formspree endpoint.
- **Hosting:** Netlify / Vercel / GitHub Pages (static, free, instant share link + custom domain).

Single-page app, all sections in one route, smooth scroll between them.

## Phases & Build Order

### Phase 0 — Collect content (blocks everything; see "What I Need From You")
Names, monogram letters, date/time, each function's venue + map link, 8–15 photos, background
music file, RSVP preference (WhatsApp number or form), color/floral preference, family names.

### Phase 1 — Scaffold
- `npm create vite@latest` (React + TS), add Tailwind + Framer Motion.
- Set up folder structure: `src/components/` (one file per section), `src/assets/` (photos, music,
  monogram), `src/data/wedding.ts` (single config object: names, dates, events, links — so all
  content is edited in one place).
- Define theme tokens: color palette + serif/script font pairing (e.g. Google Fonts:
  *Cormorant Garamond* + *Great Vibes*).

### Phase 2 — Envelope intro (the signature interaction)
- Fullscreen overlay with floral frame + monogram + envelope.
- Tap → envelope flap/seal animation → fades into the main page; **first tap also starts music**
  (browsers block autoplay without a gesture, so the gate doubles as the audio unlock).

### Phase 3 — Core sections
Hero → Countdown → Couple → Events cards → Gallery → RSVP → Footer. Build top-to-bottom,
driven by `wedding.ts` data so there are no hardcoded strings in components.

### Phase 4 — Motion & music
- Scroll-reveal animations per section (fade/slide up on enter).
- Floating persistent music button (mute/unmute, remembers state).
- Gallery lightbox.

### Phase 5 — Polish & QA
- Mobile breakpoints (test 360–430px first — most guests open on phones), then tablet/desktop.
- Performance: compress images (WebP), lazy-load gallery, keep first load light.
- Accessibility: heading order, button labels, color contrast, reduced-motion fallback.
- Verify every link: maps, WhatsApp/RSVP, music.

### Phase 6 — Deploy
- `npm run build` → deploy to Netlify/Vercel.
- Share the link; one round of edits after review.

## What I Need From You (to start Phase 1)
1. Couple names + monogram letters (e.g. "G & ___").
2. Wedding date & time.
3. Each function: name, date, time, venue address, Google Maps link.
4. 8–15 photos + (optional) a logo/monogram graphic.
5. Background music file or song name.
6. RSVP method: WhatsApp number, or a form?
7. Color / floral style preference (or let me match the reference's soft romantic palette).
8. Family names for the footer.

## Definition of Done
- Opens with the envelope-reveal experience, like the reference.
- Background music with mute/unmute.
- All functions, venues, maps, gallery, and RSVP present and working.
- Smooth on mobile and desktop.
- Deployed to a shareable URL.

## Open Decisions (default chosen, tell me to change)
- Stack: React+Vite+Tailwind+Framer Motion. *(default)*
- RSVP: WhatsApp deep link. *(default — simplest, no backend)*
- Hosting: Netlify. *(default)*
