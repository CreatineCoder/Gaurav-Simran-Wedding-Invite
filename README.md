# Gaurav & Bride — Wedding Invitation

Mobile-first single-page wedding invitation. Opens with a tap-the-envelope reveal,
plays background music, and scrolls through countdown, events, gallery, and RSVP.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview
```

## Editing content
All text, dates, events, photos, and links live in **`src/data/wedding.ts`** — edit there.
Current values are placeholders (sample images via picsum.photos).

- Real photos: drop into `src/assets/` and reference them, or replace the gallery/hero URLs.
- Music: place `music.mp3` in the `public/` folder (create it) and keep `musicSrc: "/music.mp3"`.
- RSVP: set `rsvp.whatsappNumber` to the real WhatsApp number (country code, digits only).

## Deploy
Static site — deploy `dist/` to Netlify, Vercel, or GitHub Pages.
