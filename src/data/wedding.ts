// ============================================================
//  SINGLE SOURCE OF TRUTH FOR ALL WEDDING CONTENT
//  Edit everything here — names, dates, events, photos, links.
//  All values below are PLACEHOLDERS. Replace before going live.
// ============================================================

import haldiImg from "../assets/image copy.png";
import mehendiImg from "../assets/event1.png";
import sangeetImg from "../assets/image.png";

// Optional mobile-specific variants. Drop the files in /src/assets and import
// them here, then reference via `imageMobile` on the matching event below.
// If an event has no `imageMobile`, its desktop `image` is used everywhere.
// import haldiImgMobile from "../assets/haldi-mobile.png";
// import mehendiImgMobile from "../assets/mehendi-mobile.png";
import sangeetImgMobile from "../assets/sangeet-mobile.png";

export const wedding = {
  // --- Couple ---
  groom: "Gaurav",
  bride: "Simran",
  monogram: { left: "G", right: "S" }, // shown in the envelope + footer

  // --- Headline date ---
  date: "2026-07-09T19:00:00", // ISO — used for countdown
  dateLabel: "9 July 2026",
  city: "Jaipur, India",

  // --- Short intro lines ---
  tagline: "Together with their families, request the pleasure of your company",
  coupleStory:
    "Two souls, one beautiful journey. We can't wait to celebrate this special day surrounded by the people we love.",

  // --- Functions / events ---
  events: [
    {
      name: "Haldi",
      image: haldiImg,
      // imageMobile: haldiImgMobile,
      date: "7 July 2026",
      time: "10:00 AM",
      venue: "Family Residence",
      address: "123 Sample Street, Jaipur",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🌼",
    },
    {
      name: "Mehendi",
      image: mehendiImg,
      date: "7 July 2026",
      time: "4:00 PM",
      venue: "The Garden Lawn",
      address: "456 Sample Road, Jaipur",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🌿",
    },
    {
      name: "Sangeet",
      image: sangeetImg,
      imageMobile: sangeetImgMobile,
      date: "8 July 2026",
      time: "7:00 PM",
      venue: "Grand Ballroom",
      address: "789 Palace Avenue, Jaipur",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🎶",
    },
    {
      name: "Wedding",
      date: "9 July 2026",
      time: "7:00 PM",
      venue: "Royal Heritage Palace",
      address: "1 Heritage Marg, Jaipur",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "💍",
    },
    {
      name: "Reception",
      date: "10 July 2026",
      time: "8:00 PM",
      venue: "Royal Heritage Palace",
      address: "1 Heritage Marg, Jaipur",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🥂",
    },
  ],

  // --- Gallery (placeholder images via picsum; swap for real photos in /src/assets) ---
  gallery: [
    "https://picsum.photos/seed/wed1/600/800",
    "https://picsum.photos/seed/wed2/600/800",
    "https://picsum.photos/seed/wed3/600/800",
    "https://picsum.photos/seed/wed4/600/800",
    "https://picsum.photos/seed/wed5/600/800",
    "https://picsum.photos/seed/wed6/600/800",
  ],
  heroImage: "https://picsum.photos/seed/herowed/1200/1600",

  // --- RSVP ---
  rsvp: {
    whatsappNumber: "910000000000", // country code + number, no + or spaces
    message: "Hi! I would love to attend the wedding. RSVP: ",
  },

  // --- Music (drop a file at /src/assets/music.mp3) ---
  musicSrc: "/music.mp3",

  // --- "The Families" section ---
  hosts: {
    label: "Awaiting Your Gracious Presence",
    names: ["Mr. Sanjay Deshmukh", "Mrs. Seema Deshmukh"],
  },

  // --- Footer ---
  families: "With love from the Sharma & Verma families",
};

export type WeddingEvent = (typeof wedding.events)[number];
