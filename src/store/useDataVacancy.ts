import { dataText } from "@/app/career/data";
import { create } from "zustand";

interface stateVacancy {
    text: string
    id?: number
    set: (currentData:string,id?:number) => void
}

export const useDataVacancy = create<stateVacancy>((set) => ({
    text: dataText[0].text,
    id: 0,
    set: (currentData: string, id?:number) => set({ text: currentData }),
}));

interface stateDataWelcome {
    img: string
    setData: (currentImg: string) => void
}
export const useCurrentData = create<stateDataWelcome>((set)=>({
    img: "",
    setData: (currentImg:string) => set({img:currentImg})
}))