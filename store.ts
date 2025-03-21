import { create } from "zustand";

type DateStore = {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
};

export const useDateStore = create<DateStore>((set) => ({
  selectedDate: new Date().getDate(),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
