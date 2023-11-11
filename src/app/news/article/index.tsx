type ArticleType = {
    imgURL: string;
    article: string;
    date: string;
    style?:string
}

export default function Article({imgURL,article,date,style}:ArticleType) {
    return(
        <div className={`flex gap-x-5 cursor-pointer relative ${style}`}>
            <div className="absolute w-full h-full focus"></div>
            <img className='w-[180px] h-[120px] max-xl:w-[120px] max-xl:h-[90px]' src={imgURL}/>
            <div className='text-2xl  max-xl:text-xl'>
            <h1 className='mb-5 font-bold uppercase'>{article}</h1>
            <p className='text-gray-text'>{date}</p>
            </div>
        </div>
    )
}