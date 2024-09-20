import Btn from './btn'
import { useTypewriter } from 'react-simple-typewriter'

export default function FooterHero(){
    // type animation
    const [Poins] = useTypewriter({
        words : ['Experienced Designer', 'Your satisfactions is our priority', 'Unlimited design requests & revisions'],
        loop : false,
        typeSpeed : 25,
        deleteSpeed : 25,
        delaySpeed: 1500
    })

    const poins = [
        { id: 1, name: 'Experienced Designer', delay:"700" },
        { id: 2, name: 'Your satisfactions is our priority', delay:"900" },
        { id: 3, name: 'Unlimited design requests & revisions', delay:"1100" }
    ];
    return(
        <>
            <div className="footerHero w-full h-screen pt-[11.625rem] px-[24px] relative z-30">
                <div className="container mx-auto max-w-[1120px]">
                    <div className="footerHero-box flex flex-col items-center justify-center gap-[1.5rem] pt-[0.2rem] md:pt-[10rem]">
                        <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className="text-[2rem] md:text-[2.5rem] font-bold text-primary text-center leading-tight xl:leading-[72px]">Transform Your Vision into Reality</h2>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="text-[1.5rem] md:text-[2.5rem] text-primary text-center leading-[28px] md:leading-[52px]">Crafting exceptional designs that elevate your brand and captivate your audience.</p>
                        {/* poins */}
                        <div className="flex items-center justify-center gap-[1.5rem]">
                            {poins.map(poin => (
                                <div key={poin.id} className='hidden xl:flex items-center justify-center gap-[0.5rem]'>
                                    <i data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={poin.delay} className="bi bi-check-circle text-primary text-[1rem]"></i>
                                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={poin.delay} className="text-[1rem] text-[#676767] text-center">{poin.name}</p>
                                </div>
                            ))}
                        </div>
                         {/* mobile poins */}
                            <div className='flex justify-center items-center gap-[0.5rem] xl:hidden'>
                                <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                                <p className="text-[1rem] md:text-[1.4rem] text-[#676767] text-center">{Poins}</p>
                            </div>
                        {/* contact us */}
                        <div className="flex items-center justify-center gap-1 md:gap-4 xl:gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem] relative">
                            <div className='flex items-center justify-center gap-[0.625rem]'>
                                {/* icon pulse */}
                                <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                                    <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                                </div>
                                {/* icon pulse */}
                                <div className="absolute left-[0.75rem] flex items-center justify-center bg-primary bg-opacity-25  w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite">
                                </div>
                                <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[0.96rem]"></div>
                                {/*attention */}
                                <p className='py-[0.1rem] md:py-[0.719rem] leading-[28px] text-[0.7rem] md:text-[1.1rem]'><span className="text-primary">1 Slot available !</span> <span className='hidden md:inline-block'>Let's talk</span> <span className='hidden xl:inline-block'>to get your project started.</span></p>
                            </div>
                            {/* btn */}
                            <a href="https://l.instagram.com/?u=https%3A%2F%2Fcalendly.com%2Flikearthstudio%2F15min&e=AT1pwBz33yjxE6M0Fhzvvf_9YRXkHTFHLvN9mLQXA5SN05Wq-C4K_pUQjGKpW_5MmUwjLwJFnluDDfrCM4g4GLmt8m9ZuDn_mqvvyQ" target="_blank">
                                <Btn title="Contact Us Today" style="flex justify-center items-center relative bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out text-white border border-primary overflow-hidden rounded-[0.938rem] py-[0.719rem] px-[1.5rem]"/>                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}