import { create } from "zustand";

export const useCameraStore = create((set) => ({
  section: "baseCamp",

  summitAtmosphere: 0,

  isLoaded: false,

  setIsLoaded: (value) =>
    set({
      isLoaded: value,
    }),

  setSection: (section) =>
    set({
      section,
    }),

  setSummitAtmosphere: (value) =>
    set({
      summitAtmosphere: value,
    }),
}));
