import { create } from "zustand";

interface stateArticle {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const useArticle = create<stateArticle>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));