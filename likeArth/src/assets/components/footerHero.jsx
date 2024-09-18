import Btn from './btn'


export default function FooterHero(){
    const poins = [
        { id: 1, name: 'Experienced Designer', delay:"700" },
        { id: 2, name: 'Your satisfactions is our priority', delay:"900" },
        { id: 3, name: 'Unlimited design requests & revisions', delay:"1100" }
    ];
    return(
        <>
            <div className="footerHero w-full h-screen px-[10rem] pt-[12.625rem] relative z-20">
                <div className="footerHero-box flex flex-col items-center justify-center gap-[1.5rem] pt-[10rem]">
                    <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className="text-[2.5rem] font-bold text-primary text-center">Transform Your Vision into Reality</h2>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="text-[2.5rem] text-primary text-center">Crafting exceptional designs that elevate your brand and captivate your audience.</p>
                    {/* poins */}
                    <div className="flex items-center justify-center gap-[1.5rem]">
                        {poins.map(poin => (
                            <div key={poin.id} className='flex items-center justify-center gap-[0.5rem]'>
                                <i data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={poin.delay} className="bi bi-check-circle text-primary text-[1rem]"></i>
                                <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={poin.delay} className="text-[1rem] text-[#676767] text-center">{poin.name}</p>
                            </div>
                        ))}
                    </div>
                    {/* contact us */}
                    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1300"className="flex items-center justify-center gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem]">
                        {/* icon pulse */}
                        {/* <i className="bi bi-dot text-primary text-[50px] animate-pulse"></i> */}
                        <div className="flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                            <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                        </div>
                        {/*attention */}
                        <p className='py-[0.719rem]'><span className="">1 Slot available</span>! Let’s talk to get your project started.</p>
                        {/* btn */}
                        <Btn title="Contact Us Today" style="flex justify-center items-center relative bg-white border border-primary overflow-hidden rounded-[0.938rem] py-[0.719rem] px-[1.5rem]"/>
                    </div>
                </div>
            </div>
        </>
    )
}