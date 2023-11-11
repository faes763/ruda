import { create } from "zustand";

interface stateBurger {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const useBurger = create<stateBurger>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));