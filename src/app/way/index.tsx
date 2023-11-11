
export default function Way() {
    return(
        <div id="way" className="flex flex-col gap-24">
            <div className="flex justify-between items-center gap-9 max-md:flex-wrap max-base:justify-center">
                <div className="flex flex-col gap-12 max-w-[400px]">
                    <h1 className="text-[60px] font-bold max-lg:text-4xl uppercase" >Наш Путь</h1>
                    <p className="text-2xl max-sm:text-lg">За годы работы мы научились находить решение сложных задач наших заказчиков, предлагая им комплексные решения</p>
                    <p className="text-2xl max-sm:text-lg">Наш путь начался в 2005 году. Мы росли, развивались и доросли до реализации крутых проектов, в сфере станкостроения и построения своего бизнеса, на основе процессного подхода. </p>
                </div>
                <div className="w-[50%] h-full  max-md:w-full">
                    <iframe className="w-full md:min-w-[300px] "  height="415" src="https://www.youtube.com/embed/hpufbQ39x78" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
                </div>
            </div>
            <img className="max-base:hidden" src="/presentation.svg"/>
        </div>
    )
}