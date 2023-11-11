'use client'
import { useArticle } from "@/store/useArticle"
import { useCurrentIdArticle } from "@/store/useCurrentArticle";

import { news } from "../data";
import { useEffect, useState } from "react";

export default function PopupArticle() {

    const {close} = useArticle();
    const {id} = useCurrentIdArticle();
   
    const [date,setDate] = useState("");
    const [text,setText] = useState("");
    const [imgURL,setImgURL] = useState("");
    const [article,setArticle] = useState("");

    useEffect(()=>{
        console.log(id)
        setDate(news[id].date);
        setText(news[id].text);
        setImgURL(news[id].img);
        setArticle(news[id].article);
    },[])

    return (
        <>
            <div onClick={close} className="fixed w-full h-full inset-0 bg-black/30 cursor-pointer"></div>
            <div className="fixed p-12 flex flex-col gap-y-12 w-[600px] max-h-[95%] overflow-y-auto  inset-0 top-[20px] text-main-black bg-main-page  mx-auto max-md:inset-10 max-md:w-[400px] max-sm:w-full max-sm:inset-0">
                <div className="text-right">
                    <button onClick={close} className="text-2xl  cursor-pointer p-1 hover:bg-main-black hover:text-white">X</button>
                    <h1 className="uppercase font-bold text-2xl text-left">{article}</h1>
                    <p className='text-gray-text text-2xl text-left'>{date}</p>
                </div>
                
                <img className='w-full' src={imgURL}/>
                <p className="text-2xl">{text}</p>
            </div>
        </>
    )
}