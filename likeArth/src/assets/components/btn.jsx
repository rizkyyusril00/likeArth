

export default function Btn({title, style}){
    return(
        <>
            <button className={style}>
                <span className='text-white text-[1rem]'>{title}</span>
            </button>
        </>
    )
}