import Btn from './btn'


export default function Hero() {
    const poins = [
        { id: 1, name: 'Experienced Designer', },
        { id: 2, name: 'Your satisfactions is our priority', },
        { id: 3, name: 'Unlimited design requests & revisions', }
    ];
    return(
        <>
            <div className="hero w-full h-screen pt-[8rem] px-32">
                <div className="hero-box flex flex-col items-center justify-center gap-[1rem]">
                    <div className="flex flex-col items-center justify-center gap-[1rem]">
                        {/* tagline */}
                        <h1 className="text-primary text-[4rem] text-center font-bold leading-tight">Ready to design an astounding digital product ?</h1>
                        {/* description */}
                        <p className="text-primary text-[1.125rem] text-center font-semibold">If you're looking to achieve your business goals through delightful experiences and engaging design, then you're in the right place.</p>
                        {/* poins */}
                        <div className="flex items-center justify-center gap-[1.5rem]">
                            {poins.map(poin => (
                                <div key={poin.id} className='flex items-center justify-center gap-[0.5rem]'>
                                    <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                                    <p className="text-[1rem] text-[#676767] text-center">{poin.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* contact us */}
                    <div className="flex items-center justify-center gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem]">
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