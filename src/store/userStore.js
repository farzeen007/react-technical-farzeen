import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      user: {},
      setUser: (data) => set({ user: data }),
      logout: () => {
        set({ user: {} });
        userStore.persist.clearStorage();
      },
    }),
    { name: "user-storage" },
  ),
);
