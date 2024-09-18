import Works1 from '../img/works1.png'
import Works2 from '../img/works2.png'
import Works3 from '../img/works3.png'
import Works4 from '../img/works4.png'

export default function HowItWorks(){
    const visions = [
        { id: 1, img: Works1, title: 'Subscribe to a Plan', desc: 'Choose the plan that fits your needs and subscribe effortlessly. Our flexible plans are designed to cater to businesses of all sizes.', style: 'mt-0', delay:"700" },
        { id: 2, img: Works2, title: 'Submit Your Task', desc: 'Have a project in mind? Simply submit your task details through our easy-to-use platform. Be as detailed as possible to help us understand your vision.', style: 'mt-[2.5rem]', delay:"900" },
        { id: 3, img: Works3, title: 'Design & Iteration', desc: 'Our talented designers will start crafting your design. We’ll collaborate with you through iterations, ensuring every detail aligns with your expectations.', style: 'mt-0', delay:"1100" },
        { id: 4, img: Works4, title: 'Handoff & Documentation', desc: 'Once you’re happy with the final design, we’ll hand over all the files you need. Enjoy your new, professionally crafted design!', style: 'mt-[2.5rem]', delay:"1300" }
    ];
    return(
        <>
            <div className="howItWorks px-[10rem]">
                <div className="howItWorks-box flex flex-col justify-center items-center py-[4.773rem]">
                    {/* atas */}
                    <div className="flex flex-col justify-center items-center gap-[1.5rem]">
                        <div className="flex flex-col items-center justify-center gap-[0.5rem]">
                            <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-[0.875rem]">HOW IT WORK</p>
                            <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" className="font-bold text-secondary text-[2.5rem]">Seamlessly Bringing Your Vision to Life</h2>
                        </div>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="600" className="text-[1.25rem] font-semibold">From Concept to Creation, Made Simple.</p>
                    </div>
                    {/* bawah */}
                    <div className="flex justify-center gap-[2rem]">
                        {visions.map (vision => (
                            <div key={vision.id} className="flex flex-col items-center justify-center gap-[1rem]">
                                <figure data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={vision.delay} className={vision.style}>
                                    <img src={vision.img} alt="" />
                                </figure>
                                <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={vision.delay} className='font-bold text-[1.5rem] text-secondary'>{vision.title}</h2>
                                <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={vision.delay} className='text-[0.875rem] text-[#676767] text-center'>{vision.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}