// import FaqImg from '../img/faq.png'
import FaqImg from '../img/faq/faq.svg'
import BlueGrad from '../img/faq_blueGrad.png'
import Accordion from '../components/accordion'

export default function Faq(){
    return(
        <>
            <div id='faq' className="faq py-[5rem] relative px-[24px]">
                <div className="container mx-auto max-w-[1120px]">
                    <div className="faq-box flex flex-col xl:flex-row justify-between gap-[2rem] relative z-20">
                        {/* box 1 */}
                        <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start w-full xl:w-[50%] gap-[2.875rem]">
                            <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start gap-[1.5rem]'>
                                <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start gap-[0.5rem]'>
                                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-[#676767] text-[1rem] xl:text-[0.875rem] leading-[28px] text-center xl:text-start">FAQ</p>
                                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className='txt-faq font-bold text-[2.5rem] text-secondary text-center xl:text-start'>Find your answers here.</h1>
                                </div>
                                <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className='txt-faq text-[#676767] font-normal text-[1.25rem] text-center xl:text-start'>Not sure about something? Talk to us directly!</p>
                            </div>
                            <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="700" className='flex items-center justify-center w-full'>
                                <img src={FaqImg} alt="" />
                            </figure>
                        </div>
                        {/* box 2 */}
                        <div className='w-full xl:w-[50%] flex flex-col gap-[1.5rem]'>
                            <Accordion title="What is Likearth Studio?" isi="We are a design studio specialized in UI/UX design, and can cover illustration, branding, and graphic design. Whether you're building a brand from the ground up or refreshing your digital presence, we’ve got you covered!" delay="300"/>
                            <Accordion title="How do you approach a new project?" isi="We follow a collaborative approach. First, we start by understanding your business goals and vision. Then, through detailed research and strategy sessions, we create designs that align perfectly with your target audience and objectives. Every step is transparent, and your feedback is key to the process." delay="500"/>
                            <Accordion title="Why should I choose your agency over others?" isi="Our commitment to your satisfaction is unmatched. We focus on delivering designs that not only look great but also enhance user experience and drive results. With a team of experienced designers, we provide a personalized service tailored to your unique needs, ensuring your project stands out from the competition." delay="700"/>
                            <Accordion title="What kind of clients have you worked with before?" isi="We have had the privilege to work with clients from various industries, ranging from startups to established businesses in sectors like technology, e-commerce, healthcare, and more. Each project is approached with fresh ideas and tailored solutions." delay="900"/>
                            <Accordion title="How long does a typical project take?" isi="The timeline for each project depends on its complexity and scope. However, we ensure that we work efficiently while maintaining the highest standards of quality. We will provide you with a detailed timeline once we understand your requirements." delay="1100"/>
                            <Accordion title="What is your pricing structure?" isi="Our pricing is flexible and depends on the specific needs of your project. We offer both monthly flat rates (subscriptions) and fixed pricing packages to ensure you get the best value. Contact us for a personalized quote that fits your budget." delay="1300"/>
                            <Accordion title="What if I need revisions or changes during the project?" isi="We understand that your vision might evolve during the project. That’s why we offer multiple rounds of revisions, ensuring that the final product is exactly what you envisioned. We work closely with you throughout the process to make necessary adjustments." delay="1400"/>
                            <Accordion title="Can we have regular meetings?" isi="To maintain efficiency, our primary communication will be asynchronous via Figma, Slack, or Email. This helps streamline workflows and reduces the time spent in meetings. If you need to provide more detailed explanations or feedback on specific features, you can always create a Loom video. However, for special cases, we're happy to schedule a call as part of our commitment to ensuring client satisfaction." delay="1500"/>
                            <Accordion title="Do you offer post-project support?" isi="Yes, we do! We’re committed to ensuring your design continues to deliver results even after the project is completed. We offer ongoing support for updates, maintenance, and any adjustments you may need as your business grows, with a monthly flat rate (subscription) option." delay="1600"/>
                            <Accordion title="How can I get started?" isi='Getting started is easy! Simply contact us by clicking the "Book a Call" button or filling out the form to share details about your project. We’ll schedule a discovery call to understand your needs and goals, and from there, we’ll craft a proposal to kick-start your project.' delay="1700"/>
                        </div>
                    </div>
                </div>
                    {/* <figure className='absolute -bottom-[400px] xl:-bottom-[850px] 2xl:-bottom-[1050px] left-0 z-10 w-full'>
                        <img src={BlueGrad} alt="" className='w-full'/>
                    </figure> */}
            </div>
        </>
    )
}