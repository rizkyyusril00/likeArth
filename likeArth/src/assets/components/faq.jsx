import FaqImg from '../img/faq.png'
import BlueGrad from '../img/faq_blueGrad.png'
import Accordion from '../components/accordion'

export default function Faq(){
    return(
        <>
            <div className="faq pt-[5rem] relative">
                <div className="faq-box px-[10rem] flex justify-between gap-[2rem] relative z-20">
                    {/* box 1 */}
                    <div className="flex flex-col justify-start items-start w-[50%] gap-[2.875rem]">
                        <div className='flex flex-col items-start justify-start gap-[1.5rem]'>
                            <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className='txt-faq font-bold text-[2.5rem] text-secondary text-start'>Find your answers here.</h1>
                            <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className='txt-faq text-[#676767] font-semibold text-[1.25rem]'>Not sure about something? Talk to us directly!</p>
                        </div>
                        <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="700" className='flex items-center justify-center w-full'>
                            <img src={FaqImg} alt="" />
                        </figure>
                    </div>
                    {/* box 2 */}
                    <div className='w-[50%] flex flex-col gap-[1.5rem]'>
                        <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="300"/>
                        <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="500"/>
                        <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="700"/>
                        <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="900"/>
                        <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="1100"/>
                        <Accordion title="What is your design process ?" isi="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus sed voluptatem placeat laudantium veritatis quibusdam quis officia tenetur eius." delay="1300"/>
                    </div>
                </div>
                <figure className='absolute -bottom-[850px] z-0'>
                    <img src={BlueGrad} alt="" />
                </figure>
            </div>
        </>
    )
}