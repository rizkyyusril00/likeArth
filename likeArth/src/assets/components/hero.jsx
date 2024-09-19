import Btn from './btn'


export default function Hero() {
    const poins = [
        { id: 1, name: 'Experienced Designer', },
        { id: 2, name: 'Your satisfactions is our priority', },
        { id: 3, name: 'Unlimited design requests & revisions', }
    ];
    return(
        <>
            <div className="hero w-full h-screen pt-[8rem] md:pt-[10rem] xl:pt-[8rem] px-[24px] overflow-hidden transition-all ease-in-out duration-500">
                <div className="container mx-auto max-w-[1120px]">
                    <div className="hero-box flex flex-col items-center justify-center gap-[1rem]">
                        <div className="flex flex-col items-center justify-center gap-[1.5rem] md:gap-[1rem]">
                            {/* tagline */}
                            <h1 className="text-primary text-[2.2rem] md:text-[3.5rem] xl:text-[4rem] leading-tight xl:leading-[72px] text-center font-bold">Ready to design an astounding digital product ?</h1>
                            {/* description */}
                            <p className="text-primary text-[1.3rem] md:text-[1.5rem] xl:text-[1.125rem] text-center font-normal leading-tight xl:leading-[28px]">If you're looking to achieve your business goals through delightful experiences and engaging design, then you're in the right place.</p>
                            {/* poins */}
                            <div className="hidden xl:flex items-center justify-center gap-[1.5rem]">
                                {poins.map(poin => (
                                    <div key={poin.id} className='flex items-center justify-center gap-[0.5rem]'>
                                        <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                                        <p className="text-[1rem] text-[#676767] text-center">{poin.name}</p>
                                    </div>
                                ))}
                            </div>
                            {/* mobile */}
                            <div className='flex justify-center items-center gap-[0.5rem] xl:hidden'>
                                <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                                <p className="text-[1rem] md:text-[1.4rem] text-[#676767] text-center">Unlimited design requests & revisions</p>
                            </div>
                        </div>
                        {/* contact us */}
                        <div className="flex items-center justify-center gap-1 md:gap-4 xl:gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem]">
                            <div className='flex items-center justify-center gap-[0.625rem]'>
                                {/* icon pulse */}
                                <div className="flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                                    <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                                </div>
                                {/*attention */}
                                <p className='py-[0.719rem] leading-[28px] text-[0.7rem] md:text-[1.1rem]'><span className="text-primary">1 Slot available !</span> <span className='hidden md:inline-block'>Let's talk</span> <span className='hidden xl:inline-block'>to get your project started.</span></p>
                            </div>
                            {/* btn */}
                            <Btn title="Contact Us Today" style="flex justify-center items-center relative bg-primary text-white border border-primary overflow-hidden rounded-[0.938rem] py-[0.719rem] px-[1.5rem]"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}