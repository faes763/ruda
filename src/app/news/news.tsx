'use client'

import { useEffect, useRef, useState } from "react";
import Article from "./article";
import { useArticle } from "@/store/useArticle";
import { useCurrentDataArticle, useCurrentIdArticle } from "@/store/useCurrentArticle";
import {news} from './data'

export default function News() {
    const {open} = useArticle();
    const box = useRef<null | HTMLDivElement>(null)
    const {set,id} = useCurrentIdArticle();
    const {setData,data} = useCurrentDataArticle();
    useEffect(()=>{
        const articles = document.querySelectorAll('.focus');
        setData(news[0]);
        
        Array.from(articles).map((el)=>{
            el.addEventListener('click',active);
        }); 
        return () => {
            Array.from(articles).map(el=>{
                el.removeEventListener('click', active);
            })
        }
    },[]);

    const active = (event:any)=>{

        if(box.current)
        Array.from(box.current.children).map(el=>{el.classList.remove('active')});
        event.target.parentNode.classList.add('active');
        let i = +[...event.target.parentNode.parentNode.children].indexOf(event.target.parentNode);
        set(i);
        setData(news[i]);
    }

    const add =()=>{
        const {id} = useCurrentIdArticle.getState();
        if(id<news.length-1) {
            set(id+1);
            setData(news[id+1]);
        }
        
    }
    const minus =()=>{
        const {id} = useCurrentIdArticle.getState();
        if(id > 0) {
            set(id-1);
            setData(news[id-1]);
        }  
    }


    return (
        <div className="w-full text-main-black">
            <div className="hidden max-lg:flex justify-between items-center uppercase">
                <h1
                    onClick={minus}
                    className="flex items-center text-2xl gap-4 cursor-pointer max-sm:text-lg"
                >
                    <img  className="w-[20px]" src="/img/career/arrowLeft.svg"/>
                    Назад
                </h1>
                <h1
                    onClick={add}
                    className="flex items-center justify-end text-2xl gap-4 cursor-pointer max-sm:text-lg"
                >
                    Дальше 
                    <img className="w-[20px]" src="/img/career/arrowRight.svg"/>
                </h1>
            </div>
            <div className="flex justify-between py-5">
                <div ref={box} className='max-lg:hidden max-h-[600px] max-w-[520px] max-xl:max-w-[400px] pr-4 overflow-y-auto  flex flex-col gap-16'>
                    {news.map((article)=>{
                        
                    if(article.id==1) return (<Article key={article.id} style="active" imgURL={article.img} article={article.article} date={article.date}/>)
                    else return(
                        <Article key={article.id} imgURL={article.img} article={article.article} date={article.date}/>
                    )})}
                </div>
                <div 
                    onClick={open}
                    className={`relative w-full cursor-pointer flex items-end ml-5 max-md:hidden`}
                >
                    <img className="absolute w-full h-full z-[-1]" src={data.img}/>
                    <div className="p-12 w-full">
                        <p className="text-2xl text-gray-text">{data.date}</p>
                        <h1 className="max-w-[400px] text-white text-3xl">{data.article}</h1>
                        <p className="text-right text-gray-text text-2xl">Подробнее</p>

                    </div>
                </div>
                <div onClick={open} className="hidden max-md:block max-md:w-full cursor-pointer">
                    <img className="w-full" src={data.img}/>
                    <div className="w-full flex flex-col gap-3 py-3">
                        <p className="text-2xl text-gray-text max-sm:text-lg">{data.date}</p>
                        <h1 className="max-w-[400px] text-3xl max-sm:text-lg">{data.article}</h1>
                        <p className="text-right text-gray-text text-2xl max-sm:text-lg">Подробнее</p>
                    </div>
                </div>
            </div>
           
            
        </div>
    )   
}