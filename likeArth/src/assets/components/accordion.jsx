import { useState } from "react"


export default function Accordion({title, isi, delay}){
    const [accordionOpen, setAccordionOpen]  = useState(false);

    return(
        <>
            <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={delay} onClick={() => setAccordionOpen(!accordionOpen)} className="bg-transparent cursor-pointer py-4 xl:py-0 relative z-20 border-b border-secondary">
                {/* Button accordion */}
                <div  className="flex justify-between w-full px-6 py-4 bg-transparent">
                    <span className="font-bold text-black text-[1rem] md:text-[1.4rem] xl:text-[1rem]">{title}</span>
                    <i className={`bi bi-chevron-up text-[#0d5cd3] text-center text-[1rem] md:text-[1.4rem] xl:text-[1rem] pt-[2px] transition-all duration-500 ease-in-out ${accordionOpen ? "rotate-[-180deg]" : "rotate-[0deg]"}`}></i>
                </div>
                {/* isi accordion */}
                <div className={`bg-transparent grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100 pl-6 pr-20 py-4" : "grid-rows-[0fr] opacity-0 pl-6 pr-20 py-0"}`}>
                    <div className={`text-[#737373] text-[0.9rem] md:text-[1.25rem] xl:text-[0.9rem] leading-[28px] overflow-hidden transition-all duration-500 delay-300 ease-in-out ${accordionOpen ? "opacity-100" : "opacity-0"}`}>{isi}</div>
                </div>
            </div>
        </>
    )
}