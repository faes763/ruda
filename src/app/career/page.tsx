'use client'

import { useDataVacancy } from '@/store/useDataVacancy';
import {useEffect, useRef, useState}  from 'react';
import {dataText, sliderImg} from './data'

export default function Career(){
    const [slider,setSlider] = useState<number>(0);
    const [imgURL, setImgUrl]= useState<string>("");

    const [dataId,setDataId] = useState<number>(0);
    
    const doGiveBox = useRef<HTMLDivElement | null>(null);

    const {set,text} = useDataVacancy();

    useEffect(()=>{
        setImgUrl(sliderImg[slider].img)
        const doGive = document.querySelectorAll('.doGive');
        Array.from(doGive).map((el)=>{
            el.addEventListener('click',active);
        }); 
        return () => {
            Array.from(doGive).map(el=>{
                el.removeEventListener('click', active);
            })
        }
    });

    const active = (event:any)=>{
        if(doGiveBox.current)
        Array.from(doGiveBox.current.children).map(el=>{el.children[0].classList.remove('activeGive')});
        event.target.parentNode.classList.add('activeGive');
        let i = +[...event.target.parentNode.parentNode.parentNode.children].indexOf(event.target.parentNode.parentNode);
        set(dataText[i].text);
        setDataId(i)
    }

    const add = ()=>{
        if(slider<sliderImg.length-1) {
            setSlider(prev=>prev+1);
            setImgUrl(sliderImg[slider+1].img)
        }
    }
    const minus = ()=>{
        if(slider>0) {
            setSlider(prev=>prev-1);
            setImgUrl(sliderImg[slider-1].img)
        }
    }
  
    return(
        <>
            <section>
                <div className='max-w-[1400px] mx-auto py-24 text-main-black  max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px]  max-md:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]'>
                    <div className='uppercase mb-24 font-bold'>
                        <h1 className='text-6xl max-md:text-4xl'>станьте частью нашей истории</h1>
                        <h2 className='text-4xl max-md:text-2xl'>ищем талантливых специалистов</h2>
                    </div>
                    <div className="hidden max-lg:flex justify-between items-center uppercase ">
                        <h1
                            onClick={minus}
                            className="flex items-center text-2xl gap-4 cursor-pointer max-child:text-xl"
                        >
                            <img  className="w-[20px]" src="/img/career/arrowLeft.svg"/>
                            Назад
                        </h1>
                        <h1 
                            onClick={add}
                            className="flex items-center justify-end text-2xl gap-4 cursor-pointer max-child:text-xl"
                        >
                            Дальше 
                            <img className="w-[20px]" src="/img/career/arrowRight.svg"/>
                        </h1>
                    </div>
                    <div className='flex gap-12 justify-center '>
                        <img  className='max-lg:hidden cursor-pointer' src='/img/career/arrowLeft.svg' onClick={add} />
                        <img src={imgURL} className='max-w-[1000px] max-2xl:max-w-[800px] max-xl:max-w-[600px]  max-md:w-full'/>
                        <img className='max-lg:hidden cursor-pointer' src='/img/career/arrowRight.svg' onClick={minus}/>
                    </div>
                </div>
            </section>
            <section className='bg-career-back'>
                <div className='max-w-[1400px] mx-auto py-24 flex flex-col gap-y-12 max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px]  max-md:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]'>
                    <h1 className='uppercase text-main-black text-6xl font-bold max-md:text-4xl'>Что мы даём вам?</h1>
                    <div className='flex justify-between gap-10 text-3xl max-xl:flex-wrap  max-xl:justify-center' ref={doGiveBox}>
                        <div className='  max-w-[300px]   flex flex-col gap-7 '>
                            <div className='relative h-[200px] activeGive bg-gray-text cursor-pointer'>
                                <div className='doGive absolute w-full h-full'></div>
                                <p className='px-10 py-14 max-sm:px-5'>Карьерный рост</p>
                            </div>
                            {dataId==0 && <p className='hidden text-main-black  max-xl:block max-sm:text-lg'>{text}</p>}
                        </div>

                        <div className='  max-w-[300px]  flex flex-col gap-7  '>
                            <div className='relative h-[200px] bg-gray-text cursor-pointer'>
                                <div className='doGive absolute w-full h-full'></div>
                                <p className='px-10 py-14 max-sm:px-5'>Надежность и прозрачность</p>
                            </div>
                            {dataId==1 && <p className='hidden text-main-black  max-xl:block max-sm:text-lg'>{text}</p>}
                        </div>
                        <div className='  max-w-[300px]  flex flex-col gap-7 '>
                            <div className='relative h-[200px] bg-gray-text cursor-pointer'>
                                <div className='doGive absolute w-full h-full'></div>
                                <p className='px-10  py-14 max-sm:px-5'>Повышение квалификации</p>
                            </div>
                            {dataId==2 && <p className='hidden text-main-black  max-xl:block max-sm:text-lg'>{text}</p>}
                        </div>
                        <div className='  max-w-[300px] flex flex-col gap-7 '>
                            <div className='relative h-[200px]  bg-gray-text cursor-pointer'>
                                <div className='doGive  absolute w-full h-full inset-0'></div>
                                <p className='px-10  py-14 max-sm:px-5'>Работа в дружеской атмосфере</p>
                            </div>
                            {dataId==3 && <p className='hidden text-main-black  max-xl:block max-sm:text-lg'>{text}</p>}
                        </div>
                    </div>
                    <p className='text-main-black text-2xl  max-xl:hidden'>{text}</p>
                </div>
            </section>
            <section className='bg-main-purple'>
                <a href='https://samara.hh.ru/employer/1670441' target='_blank'>
                    <div className='max-w-[1400px] flex justify-between py-12 uppercase items-center mx-auto max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px]  max-md:max-w-[800px] max-base:max-w-[400px] max-base:flex-wrap max-sm:max-w-[350px] max-child:max-w-[250px]'>
                        <h1 className='text-6xl max-xl:text-4xl'>Загляни к нам!</h1>
                        <h2 className='text-4xl max-xl:text-2xl'>вакансии на HH.RU</h2>
                    </div>
                </a>
            </section>
            <section>
                <div className='max-w-[1400px] mx-auto text-main-black py-24 max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px]  max-md:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]'>
                    <div className='uppercase mb-12 font-bold'>
                        <h2 className='text-4xl max-md:text-2xl'>Не нашли нужную вакансию?</h2>
                        <h1 className='text-6xl max-md:text-4xl'>давайте заполним анкету!</h1>
                    </div>
                    <form className='w-full flex justify-between max-md:flex-col'>
                        <div  className='w-[500px] flex flex-col gap-12 max-xl:w-[300px] max-md:w-full'>
                            <div>
                                <label className='block uppercase' htmlFor='fullName' >ФИО</label>
                                <input className='border w-full py-2 text-2xl' type='text' id='fullName' required/>
                            </div>
                            <div >
                                <label className='block uppercase' htmlFor='mail'>Почта</label>
                                <input className='border w-full py-2 text-2xl' type='email' id='mail' required/>
                            </div>
                            <div >
                                <label className='block uppercase' htmlFor='tel'>Телефон</label>
                                <input className='border w-full py-2 text-2xl' type='number' id='tel' required/>
                            </div>
                            <div>
                                <label className='block uppercase' htmlFor='link'>Ссылка на соцсеть</label>
                                <input className='border w-full py-2 text-2xl' type='url' id='link'/>
                                <p className='text-gray-text'>По желанию</p>
                            </div>
                        </div>
                        <div className='w-[400px] flex flex-col gap-12 max-xl:w-[300px] max-md:w-full'>
                            <div>
                                <label className='block uppercase' htmlFor='job'>Желаемая должность</label>
                                <input  className='border w-full py-2 text-2xl' type='text' id='job' required/>
                            </div>
                            <div>
                                <label className='block uppercase' htmlFor='resume'>Резюме</label>
                                <label className='flex flex-col text-center py-10 px-10  border w-full ' htmlFor='resume'>
                                    <h1 className='uppercase text-2xl text-[#7A7A7A]'><span className='underline'>Добавить</span> или перенести файл </h1>
                                    <h2 className='text-xl'>Подойдет формат jpeg, png, doc, docx, pdf</h2>
                                </label>
                                <input className='hidden' type='file' id='resume' accept='.jpeg .png .doc .docx .pdf' required/>
                            </div>
                            <div>
                                <button className='p-4 bg-black text-white'>Отправить</button>   
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}