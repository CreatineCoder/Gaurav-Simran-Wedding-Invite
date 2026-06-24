// ============================================================
//  SINGLE SOURCE OF TRUTH FOR ALL WEDDING CONTENT
//  Edit everything here — names, dates, events, photos, links.
//  All values below are PLACEHOLDERS. Replace before going live.
// ============================================================

import haldiImg from "../assets/image copy.png";
import sangeetImg from "../assets/sangeet.png";
import ReceptionImg from "../assets/reception.png";

// Optional mobile-specific variants. Drop the files in /src/assets and import
// them here, then reference via `imageMobile` on the matching event below.
// If an event has no `imageMobile`, its desktop `image` is used everywhere.
import haldiImgMobile from "../assets/haldi-mobile.jpg";
import receptionImgMobile from "../assets/reception-mobile.jpeg";
import sangeetImgMobile from "../assets/sangeet-mobile.png";
import bhaatImgMobile from "../assets/bhaat-mobile.jpeg";
import baratImgMobile from "../assets/Barat-mobile.jpeg";
import ganeshPujaImgMobile from "../assets/ganesh_puja_mobile.jpeg";
import haldatImgMobile from "../assets/haldat_mobile.jpeg";

export const wedding = {
  // --- Couple ---
  groom: "Gaurav",
  bride: "Simran",
  monogram: { left: "G", right: "S" }, // shown in the envelope + footer

  // --- Invitation intro (first page) ---
  invocation: "॥ श्री गणेशाय नमः ॥ \n ॥ श्री जीण माता प्रसन्न ॥ \n ॥ श्री श्याम देवताय नमः ॥",
  introLine:
    "We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of",
  groomParents: "S/o Mr. PremKumar Shankarlalji Agrawal\n& Mrs. Kavita Prem Agrawal",
  brideParents: "D/o Mr. Manoj ji Biharilalji Agrawal\n& Mrs. Anita Manoj Agrawal",

  // --- Headline date ---
  date: "2026-07-09T19:00:00", // ISO — used for countdown
  dateLabel: "9 July 2026",
  city: "Jaipur, India",

  // --- Short intro lines ---
  tagline: "Together with their families, request the pleasure of your company",
  coupleStory:
    "Two souls, one beautiful journey. We can't wait to celebrate this special day surrounded by the people we love.",

  // --- Pre-events (text-only cards shown before the photo cards) ---
  preEvents: [
    {
      name: "Ganesh Pujan & Mangal Path",
      imageMobile: ganeshPujaImgMobile,
      tag: "Seeking blessings for an auspicious beginning",
      date: "05/07/2026",
      time: "Afternoon 4:30 PM",
      venue: "Shree Jeen Mata Mandir, Khamgaon",
      icon: "🙏",
    },
    {
      name: "Haldat",
      imageMobile: haldatImgMobile,
      tag: "A warm gathering steeped in tradition and joy",
      date: "06/07/2026",
      time: "Evening 04:00 PM",
      venue: "Saptshurngi \n    Apartment, Khamgaon",
      icon: "💛",
    },
  ],

  // --- Functions / events ---
  events: [
    {
      name: "Haldi",
      image: haldiImg,
      tag: "A joyful morning of haldi, blessings and laughter",
      imageMobile: haldiImgMobile,
      date: "08/07/2026",
      time: "Morning 10 am",
      venue: "Shri Hari Lawn, Khamgaon",
      address: "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🌼",
    },
    {
      name: "Mehendi",
      tag: "An evening of intricate henna, music and mischief",
      date: "7 July 2026",
      time: "4:00 PM",
      venue: "Shri Hari Lawn, Khamgaon",
      address: "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🌿",
    },
    {
      name: "Chakbhat",
      tag: "A heartfelt ceremony of family blessings and gifts",
      imageMobile: bhaatImgMobile,
      date: "08/07/2026",
      time: "Evening 04:00 PM",
      venue: "Shri Hari Lawn, Khamgaon",
      address: "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🎁",
    },
    {
      name: "Sangeet",
      image: sangeetImg,
      tag: "A night of song, dance and celebration",
      imageMobile: sangeetImgMobile,
      date: "08/07/2026",
      time: "Evening 07:00 PM onwards",
      venue: "Shri Hari Lawn, Khamgaon",
      address: "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🎶",
    },
    {
      name: "Baraat",
      tag: "A grand procession of dhol, dance and joy",
      imageMobile: baratImgMobile,
      date: "09/07/2026",
      time: "Morning 9:30 AM",
      note: "Phere : Afternoon 12 pm",
      venue: "Shri Hari Lawn, Khamgaon",
      address: "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
      mapUrl: "https://maps.google.com/?q=Jaipur",
      icon: "🐎",
    },
    {
      name: "Reception",
      image: ReceptionImg,
      tag: "An elegant evening of dinner, toasts and togetherness",
      imageMobile: receptionImgMobile,
      date: "09/07/2026",
      time: "Evening 7:30 PM onwards",
      venue: "Shri Hari Lawn, Khamgaon",
      address: "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
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

  // --- Venue location (map card) ---
  venueLocation: {
    name: "Shri Hari Lawn",
    address:
      "Nandura Rd, near Rayane Car Station, Sutala Bu., Sutala Bk., Maharashtra 444312",
  },

  // --- Music (drop a file at /src/assets/music.mp3) ---
  musicSrc: "/music.mp3",

  // --- "The Families" section ---
  hosts: {
    label: "Awaiting Your Gracious Presence",
    names: ["Shri AshokKumar Shankarlalji Agrawal ( Bhut)", "& Agrawal Family "],
  },

  // --- Footer ---
  families: "With love from the Agrawal & Agrawal families",
};

export type WeddingEvent = (typeof wedding.events)[number];
