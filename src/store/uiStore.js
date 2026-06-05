import { create } from "zustand";

export const useUIStore = create((set) => ({
  activeBoard: null,

  openBoard: (board) =>
    set({
      activeBoard: board,
    }),

  closeBoard: () =>
    set({
      activeBoard: null,
    }),
}));
