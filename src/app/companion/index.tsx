
export default function Companion() {
    return (
        <div className='flex gap-24 uppercase text-center max-lg:flex-wrap max-md:items-center max-md:justify-center'>
            <div className="max-w-[300px]">
              <h1>Резидент</h1>
              <img className='h-full' src='/img/companions/participant.svg'/>
            </div>
            <div className="max-w-[300px]">
              <h1>Станков</h1>
              <img className='h-full' src='/img/companions/machine.svg'/>
            </div>
            <div className="max-w-[300px]">
              <h1>Работаем С</h1>
              <img className='h-full' src='/img/companions/start.svg'/>
            </div>
            <div className="max-w-[300px]">
              <h1>Резидент</h1>
              <img className='h-full' src='/img/companions/techno.svg'/>
            </div>
        </div>
    )
}