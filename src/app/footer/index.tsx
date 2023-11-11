import Link from "next/link";

export default function Footer() {
    return(
        <footer id="foot" className="bg-main-black py-[50px]">
            <div className="max-w-[1400px] flex justify-between mx-auto items-center uppercase max-2xl:max-w-[1200px] max-md:flex-col max-xl:max-w-[900px] max-md:max-w-[800px]  max-md:items-start max-md:gap-5 max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]">
                <Link href="/">
                    <img src="/logo.svg"/>
                    <h2>индустриализация страны</h2>
                </Link>
                <div className="flex gap-[150px] max-md:w-full max-md:flex-col max-md:gap-10">
                    <nav>
                        <ul className="flex flex-col gap-4">
                            <li><a href="/#projects">Проекты</a></li>
                            <li><a href="/#news">Что нового</a></li>
                            <li><Link href="/career">Карьера</Link></li>    
                        </ul>
                    </nav>
                    <div>
                        <a href="mailto:info@pro-mechanica.ru?&subject=Вопрос">
                            info@pro-mechanica.ru
                        </a>
                        <a className="block" href="tel:8(800)700-08-03">
                            8(800)700-08-03
                        </a>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}