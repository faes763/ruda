'use client'
import { useBurger } from "@/store/useBurger";
import Link from "next/link";
import HeaderPopup from "./popup/popup-header";


export default function Header() {
    const {open,isOpen} = useBurger();

    return (
        <>
        <div className="bg-main-black py-[15px]"></div>
        <header className="bg-main-black py-[20px] sticky top-[-1px] z-10">
            <div className="max-w-[1400px] flex justify-between mx-auto items-center uppercase mx-auto max-2xl:max-w-[1200px] max-xl:max-w-[900px]  max-lg:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]">
                <Link href="/">
                    <img className="max-base:w-40" src="/logo.svg"/>
                    <h2 className="max-base:text-xs">индустриализация страны</h2>
                </Link>
                <nav className="max-lg:hidden">
                    <ul className="flex gap-[50px] uppercase text-2xl max-lg:text-xl ">
                        <li><a href="/#projects">Проекты</a></li>
                        <li><a href="/#news">Что нового</a></li>
                        <li><Link href="/career">Карьера</Link></li>
                    </ul>
                </nav>
                <button onClick={open} className="uppercase hidden max-lg:block text-2xl cursor-pointer max-sm:text-lg">Открыть меню</button>
                {isOpen && <HeaderPopup/>}
            </div>
        </header>   
        <div className="bg-main-black py-[15px]"></div>
        </>
        
    )
}