import Btn from './btn'
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter'

export default function Hero() {
    // type animation
    const [Poins] = useTypewriter({
        words : ['Experienced Designer', 'Your satisfactions is our priority', 'Unlimited design requests & revisions'],
        loop : false,
        typeSpeed : 25,
        deleteSpeed : 25,
        delaySpeed: 1500
    })
    // animation framer
    const delay = 0.9
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
                            <motion.h1 className="text-primary text-[2.2rem] md:text-[3.5rem] xl:text-[4rem] leading-tight xl:leading-[72px] text-center font-bold">
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.1, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >Ready </motion.span>
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.2, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >to </motion.span>
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.3, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >design </motion.span>
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.4, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >an </motion.span>
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.5, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >astounding </motion.span>
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.6, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >digital </motion.span>
                                <motion.span whileInView={{opacity: [0, 1] }} transition={{delay: 0.7, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} >product?</motion.span>
                            </motion.h1>
                            {/* description */}
                            <motion.p whileInView={{y: [25, 0], opacity: [0, 1] }} transition={{delay: 0.8, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="text-primary text-[1.3rem] md:text-[1.5rem] xl:text-[1.125rem] text-center font-normal leading-[28px] xl:leading-[28px]">If you're looking to achieve your business goals through delightful experiences and engaging design, then you're in the right place.</motion.p>
                            {/* poins */}
                            <div className="hidden xl:flex items-center justify-center gap-[1.5rem]">
                                {poins.map((poin, index) => (
                                    <motion.div  key={poin.id} whileInView={{y: [25, 0], opacity: [0, 1] }} transition={{delay: delay + index * 0.1, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className='flex items-center justify-center gap-[0.5rem]'>
                                        <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                                        <p className="text-[1rem] text-[#676767] text-center">{poin.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                            {/* mobile poins */}
                            <motion.div whileInView={{y: [25, 0], opacity: [0, 1] }} transition={{delay: 0.8, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className='flex justify-center items-center gap-[0.5rem] xl:hidden'>
                                <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                                <p className="text-[1rem] md:text-[1.4rem] text-[#676767] text-center">{Poins}</p>
                            </motion.div>
                        </div>
                        {/* contact us */}
                        <div className="flex items-center justify-center gap-1 md:gap-4 xl:gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem] relative w-auto transition-all duration-500 ease-in-out">
                            <div className='flex items-center justify-center gap-[0.625rem]'>
                                {/* icon pulse */}
                                <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                                    <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                                </div>
                                {/*attention */}
                                <p className='py-[0.719rem] leading-[28px] text-[0.7rem] md:text-[1.1rem]'><span className="text-primary">1 Slot available !</span> <span className='hidden md:inline-block'>Let's talk</span> <span className='hidden xl:inline-block'>to get your project started.</span></p>
                            </div>
                            {/* icon pulse */}
                                <div className="absolute left-[0.75rem] flex items-center justify-center bg-primary bg-opacity-25  w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite">
                                </div>
                                <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[0.96rem]"></div>
                            {/* btn */}
                                <Btn title="Contact Us Today" style="flex justify-center items-center relative bg-primary text-white border border-primary overflow-hidden rounded-[0.938rem] py-[0.719rem] px-[1.5rem] absolute"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}