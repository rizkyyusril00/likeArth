import Whyus1 from '../img/whyus1.png'
import Whyus2 from '../img/whyus2.png'
import Whyus3 from '../img/whyus3.png'


export default function WhyUs(){
    return(
        <div className="whyus">
            {/* 1 */}
            <div className="whyus-box flex justify-between items-center px-[10rem] pt-[5rem]">
                {/* box1 */}
                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex flex-col items-start justify-start w-[50%] gap-[1.5rem]">
                    <p className="text-[#676767] text-[0.875rem]">Why Us</p>
                    <h2 className="font-bold text-[#1C1C1C] text-[2.5rem]">Work with professional and experienced designers</h2>
                    <p className="text-[#676767] text-[1.25rem]">Partner with us to access dedicated UI/UX designers, illustrators, and design directors with professional expertise, who designs for brands used by millions.</p>
                </div>
                {/* box2 */}
                <figure data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="">
                    <img src={Whyus1} alt="" />
                </figure>
            </div>
            {/* 2 */}
            <div className="whyus-box flex justify-between items-center px-[10rem]">
                {/* box1 */}
                <div data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex flex-col items-start justify-start w-[50%] gap-[1.5rem] order-2">
                    <p className="text-[#676767] text-[0.875rem]">Why Us</p>
                    <h2 className="font-bold text-[#1C1C1C] text-[2.5rem]">Your satisfaction is our priority </h2>
                    <p className="text-[#676767] text-[1.25rem]">We prioritize your satisfaction by providing a seamless, collaborative experience and delivering designs that exceed your expectations.</p>
                </div>
                {/* box2 */}
                <figure data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="">
                    <img src={Whyus2} alt="" />
                </figure>
            </div>
            {/* 3 */}
            <div className="whyus-box flex justify-between items-center px-[10rem] pt-[5rem] mb-[2.5rem]">
                {/* box1 */}
                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex flex-col items-start justify-start w-[50%] gap-[1.5rem]">
                    <p className="text-[#676767] text-[0.875rem]">Why Us</p>
                    <h2 className="font-bold text-[#1C1C1C] text-[2.5rem]">Unlimited design requests & revisions</h2>
                    <p className="text-[#676767] text-[1.25rem]">Unlock all our services with a simple monthly flat rate. The best part? You can make unlimited design requests and revisions. We're here to ensure you get the perfect design you envision.</p>
                </div>
                {/* box2 */}
                <figure data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="">
                    <img src={Whyus3} alt="" />
                </figure>
            </div>
        </div>
    )
}