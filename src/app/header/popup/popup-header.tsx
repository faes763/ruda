'use client'

import { useBurger } from "@/store/useBurger"
import Link from "next/link";

export default function HeaderPopup() {
    const {close} = useBurger();
    return(
        <>
            <div onClick={close} className="fixed w-full h-full inset-0"></div>
            <nav className="fixed  inset-16 mx-auto h-auto top-5 bg-main-black p-10 max-base:inset-0">
                <div className="flex gap-4 justify-between py-8 items-center">
                    <img src="/logo.svg"/>
                    <button className="text-2xl p-1 hover:bg-white hover:text-black" onClick={close}>X</button>
                </div>
                <ul className="uppercase flex flex-col gap-8 text-2xl">
                    <li><a onClick={close} href="#projects">Проекты</a></li>
                    <li><a onClick={close} href="#news">Что нового</a></li>
                    <li><Link onClick={close} href="/career">Карьера</Link></li>
                </ul>
            </nav>
        </>
        
    )
}