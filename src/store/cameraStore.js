import { create } from "zustand";

export const useCameraStore = create((set) => ({
  section: "baseCamp",

  setSection: (section) =>
    set({
      section,
    }),
}));
