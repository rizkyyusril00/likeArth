import { motion } from 'framer-motion';



export default function Trial(){
    return(
        <>
            <section  className="hero h-screen pt-[8rem] px-[24px] bg-red-500">
                    <div className="bg-red-400 py-4 px-60 container mx-auto max-w-[1120px] flex items-center justify-center">
                        <motion.div whileInView={{width: ["10%", "100%"]}} transition={{delay: 0.8, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="bg-white rounded-xl pl-[17px] justify-between items-center flex relative z-10">
                            {/* invisible place holder */}
                            <p className='invisible py-[0.1rem] md:py-[0.6rem] leading-[28px]'>1</p>
                            <motion.div whileInView={{opacity: [0, 1] }} transition={{delay: 1.5, duration: 1, ease: "easeInOut" }} viewport={{ once: true }} className='flex items-center justify-center absolute left-[17px] gap-[10px]'>
                                {/* icon pulse invisible placeholder*/}
                                <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                                    <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                                </div>
                                <p whileInView={{opacity: [0, 1] }} transition={{delay: 0.9, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className='py-[0.1rem] md:py-[0.6rem] leading-[28px]'><span className="text-primary">1 Slot available!</span> <span className='hidden md:inline-block text-[#676767]'>Let's talk</span> <span className='hidden xl:inline-block text-[#676767]'>to get your project started.</span></p>
                            </motion.div>
                            {/* icon pulse */}
                            <div className="absolute left-[17px] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite">
                            </div>
                            <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[20px]"></div>
                            {/* <motion.button className='bg-emerald-300 py-4 w-[170px] rounded-xl'>Book a Call</motion.button> */}
                                <motion.a href="https://cal.com/likearthstudio/30min" target='_blank' className='py-3 w-[170px] text-center text-white text-[0.8rem] md:text-[1.1rem] xl:text-[1rem] bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out rounded-xl absolute right-0'>Book a Call</motion.a>
                        </motion.div>
                    </div>
            </section>
        </>
    )
}