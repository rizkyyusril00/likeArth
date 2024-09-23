import Works1 from '../img/works1.png'
import Works2 from '../img/works2.png'
import Works3 from '../img/works3.png'
import Works4 from '../img/works4.svg'
import Awan2 from '../img/awan2.png'
import Awan4 from '../img/awan4.png'


export default function HowItWorks(){
    const visions = [
        { id: 1, img: Works1, title: 'Subscribe to a Plan', desc: 'Choose the plan that fits your needs and subscribe effortlessly. Our flexible plans are designed to cater to businesses of all sizes.', style: 'mt-0 w-[250px] h-[250px] flex item-center justify-center', delay:"700" },
        { id: 2, img: Works2, title: 'Submit Your Task', desc: 'Have a project in mind? Simply submit your task details through our easy-to-use platform. Be as detailed as possible to help us understand your vision.', style: 'mt-0 xl:mt-[5rem] w-[250px] h-[250px] flex item-center justify-center', delay:"900" },
        { id: 3, img: Works3, title: 'Design & Iteration', desc: 'Our talented designers will start crafting your design. We’ll collaborate with you through iterations, ensuring every detail aligns with your expectations.', style: 'mt-0 w-[250px] h-[250px] flex item-center justify-center', delay:"1100" },
        { id: 4, img: Works4, title: 'Handoff & Documentation', desc: 'Once you’re happy with the final design, we’ll hand over all the files you need. Enjoy your new, professionally crafted design!', style: 'mt-0 xl:mt-[5rem] w-[250px] h-[250px] flex item-center justify-center', delay:"1300" }
    ];
    const tab_1visions = [
        { id: 1, img: Works1, title: 'Subscribe to a Plan', desc: 'Choose the plan that fits your needs and subscribe effortlessly. Our flexible plans are designed to cater to businesses of all sizes.', style: 'w-[259px] h-[259px]', delay:"700" },
        { id: 2, img: Works2, title: 'Submit Your Task', desc: 'Have a project in mind? Simply submit your task details through our easy-to-use platform. Be as detailed as possible to help us understand your vision.', style: 'w-[259px] h-[259px]', delay:"900" },
    ];
    const tab_2visions = [

        { id: 1, img: Works3, title: 'Design & Iteration', desc: 'Our talented designers will start crafting your design. We’ll collaborate with you through iterations, ensuring every detail aligns with your expectations.', style: 'mt-0 w-[259px] h-[259px]', delay:"1100" },
        { id: 2, img: Works4, title: 'Handoff & Documentation', desc: 'Once you’re happy with the final design, we’ll hand over all the files you need. Enjoy your new, professionally crafted design!', style: 'mt-0 xl:mt-[2.5rem] w-[259px] h-[259px]', delay:"1300" }
    ];
    return(
        <>
            <div className="howItWorks relative px-[24px]">
                <div className='container mx-auto max-w-[1120px]'>
                    <div className="howItWorks-box flex flex-col justify-center items-center py-[4.773rem]">
                        {/* atas */}
                        <div className="flex flex-col justify-center items-center gap-[1.5rem] relative z-10">
                            <div className="flex flex-col items-center justify-center gap-[0.5rem]">
                                <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-[1rem] xl:text-[0.875rem] leading-[28px]">HOW IT WORK</p>
                                <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" className="font-bold text-secondary text-[2.5rem] leading-[52px] text-center">Seamlessly Bringing Your Vision to Life</h2>
                            </div>
                            <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="600" className="text-[1.25rem] font-normal leading-[28px] text-center text-[#676767]">From Concept to Creation, Made Simple.</p>
                        </div>
                        {/* bawah */}
                        <div className="flex md:hidden xl:flex flex-col xl:flex-row justify-center gap-[2rem]">
                            {visions.map (vision => (
                                <div key={vision.id} className="flex flex-col items-center gap-[1rem]">
                                    <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={vision.delay} className={vision.style}>
                                        <img src={vision.img} alt="" className='h-full w-full object-none'/>
                                    </figure>
                                    <h3 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={vision.delay} className='font-bold text-[1.5rem] text-secondary text-center leading-[36px]'>{vision.title}</h3>
                                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={vision.delay} className='text-[0.875rem] text-[#676767] text-center leading-[28px] w-[80%] md:w-[50%] xl:w-full'>{vision.desc}</p>
                                </div>
                            ))}
                        </div>
                        {/* tab */}
                        <div className="hidden md:flex xl:hidden justify-center gap-[2rem] pt-5">
                            {tab_1visions.map (tab_1vision => (
                                <div key={tab_1vision.id} className="flex flex-col items-center justify-center gap-[1rem]">
                                    <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={tab_1vision.delay} className={tab_1vision.style}>
                                        <img src={tab_1vision.img} alt="" className='h-full w-full object-cover'/>
                                    </figure>
                                    <h3 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={tab_1vision.delay} className='font-bold text-[1.5rem] text-secondary text-center leading-[36px]'>{tab_1vision.title}</h3>
                                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={tab_1vision.delay} className='text-[0.875rem] text-[#676767] text-center leading-[28px] w-full'>{tab_1vision.desc}</p>
                                </div>
                            ))}
                        </div>
                        {/* tab2 */}
                        <div className="hidden md:flex xl:hidden justify-center gap-[2rem] pt-5">
                            {tab_2visions.map (tab_2visions => (
                                <div key={tab_2visions.id} className="flex flex-col items-center justify-center gap-[1rem]">
                                    <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={tab_2visions.delay} className={tab_2visions.style}>
                                        <img src={tab_2visions.img} alt="" className='h-full w-full object-cover'/>
                                    </figure>
                                    <h3 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={tab_2visions.delay} className='font-bold text-[1.5rem] text-secondary text-center leading-[36px]'>{tab_2visions.title}</h3>
                                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={tab_2visions.delay} className='text-[0.875rem] text-[#676767] text-center leading-[28px] w-full'>{tab_2visions.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img src={Awan2} alt="" className='absolute z-0 top-0 right-0'/>
                <img src={Awan4} alt="" className='absolute z-0 bottom-0-0 left-0'/>
            </div>
        </>
    )
}