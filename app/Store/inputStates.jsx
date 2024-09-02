"use client";

import { atom } from "recoil";

export const idAtom = atom({
  key: "idAtom",
  default: null,
});

export const userIdAtom = atom({
  key: "userIdAtom",
  default: null,
});

export const titleAtom = atom({
  key: "titleAtom",
  default: "",
});

export const descriptionAtom = atom({
  key: "descriptionAtom",
  default: "",
});

export const privacyTypeAtom = atom({
  key: "privacyTypeAtom",
  default: "",
});

export const structureAtom = atom({
  key: "structureAtom",
  default: "",
});

export const pricePerNightAtom = atom({
  key: "pricePerNightAtom",
  default: 0.0,
});

export const cleaningFeeAtom = atom({
  key: "cleaningFeeAtom",
  default: 0.0,
});

export const serviceFeeAtom = atom({
  key: "serviceFeeAtom",
  default: 0.0,
});

export const categoryAtom = atom({
  key: "categoryAtom",
  default: [], // Default to an empty array for multiple categories
});

export const facilitiesAtom = atom({
  key: "facilitiesAtom",
  default: [], // Default to an empty array for multiple facilities
});

export const imagesAtom = atom({
  key: "imagesAtom",
  default: [],
});

export const addressAtom = atom({
  key: "addressAtom",
  default: "",
});

export const cityAtom = atom({
  key: "cityAtom",
  default: "",
});

export const stateAtom = atom({
  key: "stateAtom",
  default: "",
});

export const countryAtom = atom({
  key: "countryAtom",
  default: "",
});

export const postalCodeAtom = atom({
  key: "postalCodeAtom",
  default: "",
});

export const latitudeAtom = atom({
  key: "latitudeAtom",
  default: null,
});

export const longitudeAtom = atom({
  key: "longitudeAtom",
  default: null,
});

export const maxGuestsAtom = atom({
  key: "maxGuestsAtom",
  default: null,
});

export const createdAtAtom = atom({
  key: "createdAtAtom",
  default: null,
});

export const updatedAtAtom = atom({
  key: "updatedAtAtom",
  default: null,
});

// Atoms for related models (if you want to manage their state as well)
export const reviewsAtom = atom({
  key: "reviewsAtom",
  default: [], // Default to an empty array or appropriate initial state
});

export const favoritesAtom = atom({
  key: "favoritesAtom",
  default: [],
});

export const bookingsAtom = atom({
  key: "bookingsAtom",
  default: [],
});
