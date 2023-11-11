
import Header from './header'
import Welcome from './welcome'
import Companion from './companion'
import Way from './way'
import Projects from './projects'
import DashBoardNews from './news'


export default function Home() {

  return (
    <>
        <Welcome/>
        <Header/>
        <section className="bg-main-page">
          <div className='max-w-[1400px] mx-auto text-main-black py-24 flex flex-col gap-24 max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px]  max-md:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]'>
            <Companion/>
            <Way/>
          </div>
        </section>
        <div className='uppercase bg-main-purple'>
          <a href="mailto:info@pro-mechanica.ru?&subject=Предложение">
            <div className='max-w-[1400px] mx-auto flex justify-between py-12 font-bold items-center max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px] max-base:flex-wrap max-base:gap-5 max-base:justify-center max-base:text-center max-sm:max-w-[350px] max-child:max-w-[250px]'>
                <div>
                  <h1 className='text-2xl max-lg:text-sm'>появилось предложение к нам?</h1>
                  <h1 className='text-[40px] max-lg:text-2xl'>пиши на почту</h1>
                </div>
                <h1 className='text-3xl  max-lg:text-xl'>info@pro-mechanica.ru</h1>
            </div>
          </a>
        </div>
        <section id='projects' className="bg-main-page">
          <div className='max-w-[1400px] mx-auto text-main-black py-24 flex flex-col gap-24 max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]'>
            <div>
              <h1 className="text-[60px] font-bold uppercase max-base:text-4xl">Наши Проекты</h1>
              <p className='text-2xl max-w-[600px] max-sm:text-lg'>Наша компания активно развивается и расширяется, в связи с этим мы открыты для партнерства в различных направлениях по нашим проектам, а именно:</p>
            </div>

            <div className='flex flex-col gap-y-24 max-md:text-center'>
              <Projects/>
            </div>
          </div>
        </section>

        <div className='uppercase text-center py-12 bg-main-purple'>
          <h1 className='text-[60px] max-lg:text-4xl max-sm:text-2xl'>делаем сложные решения простыми</h1>
        </div>

        <section >
          <div className='max-w-[1400px] max-2xl:max-w-[1200px] max-xl:max-w-[900px] max-lg:max-w-[600px] mx-auto py-24 max-md:max-w-[800px] max-base:max-w-[400px] max-sm:max-w-[350px] max-child:max-w-[250px]'>
            <h1 id="news" className='text-[60px] max-base:text-4xl uppercase text-main-black font-bold'>Что нового</h1>
            <div className='py-24 flex justify-between'>
              <DashBoardNews/>
            </div>
          </div>
        </section>
    </>
    
  )
}
