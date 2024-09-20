import FaqImg from '../img/faq.png'
import BlueGrad from '../img/faq_blueGrad.png'
import Accordion from '../components/accordion'

export default function Faq(){
    return(
        <>
            <div className="faq py-[5rem] relative px-[24px]">
                <div className="container mx-auto max-w-[1120px]">
                    <div className="faq-box flex flex-col xl:flex-row justify-between gap-[2rem] relative z-20">
                        {/* box 1 */}
                        <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start w-full xl:w-[50%] gap-[2.875rem]">
                            <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start gap-[1.5rem]'>
                                <div className='flex flex-col items-start justify-start gap-[0.5rem]'>
                                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-[#676767] text-[1rem] xl:text-[0.875rem] leading-[28px] text-center">FAQ</p>
                                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className='txt-faq font-bold text-[2.5rem] text-secondary text-start'>Find your answers here.</h1>
                                </div>
                                <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className='txt-faq text-[#676767] font-semibold text-[1.25rem]'>Not sure about something? Talk to us directly!</p>
                            </div>
                            <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="700" className='flex items-center justify-center w-full'>
                                <img src={FaqImg} alt="" />
                            </figure>
                        </div>
                        {/* box 2 */}
                        <div className='w-full xl:w-[50%] flex flex-col gap-[1.5rem]'>
                            <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="300"/>
                            <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="500"/>
                            <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="700"/>
                            <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="900"/>
                            <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="1100"/>
                            <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="1300"/>
                        </div>
                    </div>
                </div>
                    <figure className='absolute -bottom-[400px] xl:-bottom-[850px] 2xl:-bottom-[1050px] left-0 z-10 w-full'>
                        <img src={BlueGrad} alt="" className='w-full'/>
                    </figure>
            </div>
        </>
    )
}