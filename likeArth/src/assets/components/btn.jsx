

export default function Btn({title, style}){
    return(
        <>
            <button className={style}>
                <span className='text-primary text-[0.8rem] md:text-[1.1rem] xl:text-[1rem]'>{title}</span>
            </button>
        </>
    )
}