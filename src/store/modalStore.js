import { create } from "zustand";

export const modalStore = create((set) => ({
  isOpen: false,
  mode: "add",
  selectedTask: null,
  openModal: (mode = "add", task = null) => {
    set(() => ({ isOpen: true, mode, selectedTask: task }));
  },
  closeModal: () => {
    set(() => ({ isOpen: false, mode: null, selectedTask: null }));
  },
}));
