
export default function Welcome() {
    return (
        <section className='pt-[100px] relative max-md:pt-12 max-base:h-[800px] overflow-hidden'>
          <img src='/back-beer.svg' className='absolute top-0 right-0 h-full z-[-1] max-2xl:right-[-150px] max-md:right-[-100px] max-base:hidden'/>
          <img src="/back-mobile-beer.svg" className="hidden max-base:block absolute bottom-0 z-[-1] w-full"/>
          <div className='max-w-[1400px] mx-auto max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-md:max-w-[800px] max-base:max-w-[400px] py-4 max-sm:max-w-[350px] max-child:max-w-[250px]'>
            <div className='flex flex-col gap-[120px] pb-12  max-lg:gap-[60px] max-md:gap-10 max-base:gap-0 max-base:pb-0 '>
              <div className='text-main-black'>
                <img className="max-md:w-[200px]" src='/logo-word.svg'/>
                <h1 className='text-[40px] max-w-[700px] uppercase my-5 font-semibold max-md:text-2xl max-md:max-w-[400px]'>группа компаний индустриальных решений в области станкостроения</h1>
              </div>
              <div className='text-gray-text text-2xl'>
                <h2 className="uppercase max-sm:text-lg">Связаться с нами</h2>
                <div className='flex gap-20 mt-3 max-md:flex-col max-md:gap-4'>
                <a className="max-sm:text-lg" href="mailto:info@pro-mechanica.ru?&subject=Вопрос">
                    info@pro-mechanica.ru
                </a>
                <a className="block max-sm:text-lg" href="tel:8(800)700-08-03">
                  8(800)700-08-03
                </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}