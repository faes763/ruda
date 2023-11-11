import { create } from "zustand";

interface stateCurrentIdArticle {
    id: number
    set: (currentId :number) => void
}

interface stateCurrentImageArticle {
    data: ArticleData
    setData: (currentData:ArticleData) => void
}

type ArticleData = {
    img: string;
    date: string;
    article: string;
}

export const useCurrentIdArticle = create<stateCurrentIdArticle>((set) => ({
    id: 0,
    set: (currentId: number) => set({ id: currentId }),
}));
export const useCurrentDataArticle = create<stateCurrentImageArticle>((set) => ({
    data: { img: "", date: "", article: ""},
    setData: (currentData: ArticleData) => set({ data: currentData }),
}));