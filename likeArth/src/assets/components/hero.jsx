// import Btn from './btn'
import React, { useState, useEffect } from 'react';
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
    // slider animation framer
    const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsLargeDevice(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const  widthAnimation = isLargeDevice ? ['20%', '100%'] : ['30%', '100%'];
    return(
        <>
            <div id='home' className="hero w-full h-screen pt-[8rem] md:pt-[10rem] xl:pt-[8rem] px-[24px] overflow-hidden transition-all ease-in-out duration-500">
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
                            <motion.p whileInView={{y: [25, 0], opacity: [0, 1] }} transition={{delay: 0.8, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="text-primary text-[1rem] text-center font-normal leading-[28px] xl:leading-[28px]">If you're looking to achieve your business goals through delightful experiences and engaging design, then you're in the right place.</motion.p>
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
                        <div className="px-7 sm:px-14 md:px-[165px] lg:px-[280px] xl:px-[250px] container mx-auto max-w-[1120px] flex items-center justify-center">
                            <motion.div whileInView={{width: widthAnimation}} transition={{delay: 1.5, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="bg-white rounded-[0.938rem] pl-[17px] py-1 xl:py-0 justify-between items-center flex relative z-10">
                                {/* invisible place holder */}
                                <p className='invisible py-[0.1rem] md:py-[0.6rem] leading-[28px]'>1</p>
                                <motion.div whileInView={{opacity: [0, 1] }} transition={{delay: 2.2, duration: 1, ease: "easeInOut" }} viewport={{ once: true }} className='flex items-center justify-center absolute left-[17px] gap-[10px]'>
                                    {/* icon pulse invisible placeholder*/}
                                    <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                                        <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                                    </div>
                                    <p className='py-[0.1rem] md:py-[0.6rem] text-[0.875rem] leading-[28px]'><span className="text-primary">1 Slot available!</span> <span className='hidden md:inline-block text-[#676767]'>Let's talk</span> <span className='hidden xl:inline-block text-[#676767]'>to get your project started.</span></p>
                                </motion.div>
                                {/* icon pulse */}
                                <div className="absolute left-[17px] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite">
                                </div>
                                <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[20px]"></div>
                                <motion.a href="https://cal.com/likearthstudio/30min" target='_blank' className='py-[10px] md:py-[17px] xl:py-[13px] w-[100px] md:w-[170px] text-center text-white text-[0.875rem] bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out rounded-[0.938rem] absolute right-0'>Book a Call</motion.a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}