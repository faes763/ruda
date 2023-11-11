
export default function Projects() {
    return(
        <>
            <div className='flex justify-between gap-12 max-lg:flex-wrap max-lg:justify-center max-md:flex-col max-md:items-center'>
                <img src='/img/projects/logo-gnome.svg'/>
                <img className="max-2xl:w-[300px] max-sm:w-[250px]" src='/img/projects/gnome-comp.svg'/>
                <p className='max-w-[500px] text-2xl max-xl:text-lg'>Для реализации задачи импортозамещения, интересно сотрудничество с компаниями- разработчиками ПО для ЧПУ систем</p>
              </div>
              
              <div className='flex justify-between items-start gap-12 max-lg:flex-wrap max-lg:items-center max-lg:flex-col-reverse'>
                <p className='max-w-[500px] text-2xl max-xl:text-lg'>Наши проекты тесно взаимодействуют между друг другом, за счет этого предлагаемые нами решения по проектированию технолиний, созданию оборудования на основе координатных столов для промышленных площадок и производственных компаний проходят через инжиниринговый центр  «Прикладная механика», в котором конструктора и инженеры, при плотном взаимодействии с руководителями проектов, вникают в задачу конечного потребителя и основываясь на его требованиях - разрабатывают, согласовывают и реализует решение под потребности заказчика. В этом направлении мы открыты для партнеров, которые заинтересованы в инновационном подходе по решению задач промышленности.</p>
                <img className="max-2xl:w-[300px] max-sm:w-[250px]" src='/img/projects/applied-image.svg'/>
                <div className='text-right flex flex-col gap-2'>       
                  <img src='/img/projects/logo-applied.svg'/>
                  <p className='text-xl'>Инжиниринговый центр</p>
                  <a className='text-right block text-link-text underline' href='https://pro-mechanica.ru/' target='_blank'>Перейти на сайт</a>
                </div>
              </div>

              <div className='flex justify-between gap-12 max-lg:flex-wrap max-lg:justify-center'>
                <div> 
                  <h1 className='text-3xl font-bold uppercase'>Плазменные системы</h1>
                  <p className='text-2xl min-w-[350px] max-sm:min-w-0 max-xl:text-lg'>Cерийное производство станочного оборудования станкозавод «Мультифабрика»</p>
                </div>
                <img className="max-2xl:w-[300px] max-sm:w-[250px]" src='/img/projects/system.svg'/>
                <p className='max-w-[500px] text-2xl max-xl:text-lg'>Серийное производство станочного оборудование открыто для сотрудничества с поставщиками коплектующих. В ближайших планах выпуск 30 видов станков с ЧПУ различного назначения.</p>
              </div>

              <div className='flex justify-between gap-12 max-lg:flex-wrap max-lg:items-center max-lg:flex-col-reverse'>
                <p className='max-w-[500px] text-2xl max-xl:text-lg'>Имея огромный опыт в станкостроении мы решили взять за эталон наш опыт в построении подразделений компании и сформировать сотрудничество с предпринимателям, которые работают в смежных областях и предложить им выступить в кооперацию с «Системы резки» для получения дополнительного дохода за счет реализации оборудования на территории ваших стран и регионов</p>
                <img className="max-2xl:w-[300px] max-sm:w-[250px]" src='/img/projects/cutting.svg'/>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-3xl font-bold'>СИСТЕМЫ РЕЗКИ</h1>
                  <p className='max-w-[500px] text-2xl max-xl:text-lg'>Интегратор ЧПУ решений, занимающийся реализацией, сервисной поддержкой станочного оборудования на территории РФ и СНГ</p>
                  
                  <a className='text-right block text-link-text underline' href='https://xn--80aaujecjscii3b0c.xn--p1ai/' target='_blank'>Перейти на сайт</a>
                </div>
              </div>

              <div className='flex justify-between gap-12 max-lg:flex-wrap max-lg:justify-center'>
                <div>
                  <h1 className='text-3xl font-bold'>DUGA.LAB</h1>
                  <p className='max-w-[500px] text-2xl max-xl:text-lg'>предоставление услуг по раскрою различных материалов</p>
                </div>
                <img className="max-2xl:w-[300px] max-sm:w-[250px]" src='/img/projects/gnome-comp.svg'/>
                <p className='max-w-[500px] text-2xl max-xl:text-lg'>Мы можем предложить вам взаимодействие с нашей экосистемой и возможные варианты работы в промышленной отрасли.На данный момент мы прорабатываем концепцию создания тематических технопарков и технолиний,, таких как «DUGALAB», в рамках которых возможны построения различных видов кооперационных цепочек. Один из ярких примеров это реализация проекта по построению технолинии в Технопарке Сколково. Создание кластера инновационного машиностроения самарской области.</p>
              </div>

              <div className='flex justify-between gap-12 max-lg:flex-wrap max-lg:items-center max-lg:flex-col-reverse'>
                <p className='max-w-[500px] text-2xl max-xl:text-lg'>Подойдет для организации производств и построения технологических цепочек. В проект предусматриваются различные коллекции по отраслям применения.</p>
                <img className="max-2xl:w-[300px] max-sm:w-[250px]" src='/img/projects/cutting.jpg'/>
                <div>
                  <h1 className='text-3xl font-bold'>МЕБЕЛЬНЫЕ СИСТЕМЫ</h1>
                  <p className='max-w-[500px] text-2xl max-xl:text-lg'>Подойдет для организации производств и построения технологических цепочек. В проект предусматриваются различные коллекции по отраслям применения.</p>
                </div>
              </div>
        </>
    )
}