import Testimoni from '../img/testimoni1.png'
import Marquee from "react-fast-marquee";
import Clients1 from "../img/client1.png"
import Clients2 from "../img/client2.png"
import Clients3 from "../img/client3.png"
import Clients4 from "../img/client4.png"
import Clients5 from "../img/client5.png"
import Clients6 from "../img/client6.png"
import Clients7 from "../img/client7.png"
import Awan3 from '../img/awan3.png'
import Awan5 from '../img/awan5.png'
import Awan6 from '../img/awan6.png'




export default function Testimonials(){

    return(
        <>
            <div id='testimonials' className="testimonials flex flex-col gap-[2.875rem] relative px-[24px] overflow-hidden">
                <div className="container mx-auto max-w-[1120px]">
                    {/* box atas */}
                    <div className="testimonials-box flex flex-col xl:flex-row justify-center xl:justify-between items-center pt-[5rem] mb-[2.5rem]">
                        {/* box1 */}
                        <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start w-full xl:w-[50%] gap-[1.5rem]">
                            <div className="flex flex-col justify-center items-center xl:items-start xl:justify-start gap-[0.5rem]">
                                <p data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-[#676767] text-[1rem] xl:text-[0.875rem] leading-[28px] text-center">TESTIMONIALS</p>
                                <h2 data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px] text-center">What Clients’ Said</h2>
                            </div>
                            <p data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800" className="text-[#676767] text-[1.25rem] font-semibold leading-[28px] text-center xl:text-start w-full md:w-[80%] xl:w-full">Dive deeper into some of our most successful projects and see the impact we’ve made for our clients.</p>
                        </div>
                        {/* box2 */}
                        <figure data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="">
                            <img src={Testimoni} alt="" />
                        </figure>
                    </div>
                    {/* marquee */}
                    <div className=''>
                        <Marquee autoFill gradient="true" gradientColor='white' gradientWidth={100}>
                            <div className="flex justify-center items-center gap-[4.375rem] py-[3.574rem]">
                                    <img src={Clients1} alt="" className='h-[50px] filter grayscale hover:grayscale-0' />
                                    <img src={Clients2} alt="" className='h-[50px] filter grayscale hover:grayscale-0' />
                                    <img src={Clients3} alt="" className='h-[50px] filter grayscale hover:grayscale-0' />
                                    <img src={Clients4} alt="" className='h-[100px] filter grayscale hover:grayscale-0' />
                                    <img src={Clients5} alt="" className='h-[100px] filter grayscale hover:grayscale-0' />
                                    <img src={Clients6} alt="" className='h-[100px] filter grayscale hover:grayscale-0' />
                                    <img src={Clients7} alt="" className='h-[100px] filter grayscale hover:grayscale-0 pr-[4.375rem]' />
                                </div>
                        </Marquee>
                    </div>
                    {/* komentar */}
                    {/* 1 */}
                    <div className='flex flex-col xl:flex-row justify-normal xl:justify-between gap-[2rem]'>
                        {/* atas */}
                        {/* kiri */}
                        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className='flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full xl:w-[50%]'>
                            {/* komentar */}
                            <p className='text-[#4A4A4A] text-[1.25rem] leading-[28px]'>"We worked with Likearth Studio for the past few years, and I really enjoy worked with them. They had a great design sense and really instrumental in our massive product design along with other marketing design stuffs. We did tons of iterations and they are very collaborative. We are very happy with how things work out. I highly recommend them."</p>
                            {/* profile */}
                            <div className="flex justify-start items-center gap-[1rem]">
                                {/* pp */}
                                {/* <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div> */}
                                <div className='flex flex-col items-start justify-start'>
                                    <p className='text-start text-[1.2rem] xl:text-[1rem] font-bold'>YourName</p>
                                    <div className='flex items-center justify-center gap-[0.5rem]'>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                        <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* kanan */}
                        <div  data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" className='flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full xl:w-[50%]'>
                            {/* komentar */}
                            <p className='text-[#4A4A4A] text-[1.25rem] leading-[28px]'>"Working with Likearth Studio was a game-changer for our business. They captured the essence of our brand effortlessly and translated it into stunning visuals. Their team's dedication and professionalism made the entire process seamless. Couldn't be happier with the results!"</p>
                            {/* profile */}
                            <div className="flex justify-start items-center gap-[1rem]">
                                {/* pp */}
                                {/* <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div> */}
                                <div className='flex flex-col items-start justify-start'>
                                    <p className='text-start text-[1.2rem] xl:text-[1rem] font-bold'>YourName</p>
                                    <div className='flex items-center justify-center gap-[0.5rem]'>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                        <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                    {/* 2 */}
                    <div className='flex flex-col xl:flex-row justify-normal xl:justify-between pt-[2rem] gap-[2rem] relative z-10'>
                        {/* bawah */}
                        {/* kiri */}
                        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="600" className='flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full xl:w-[50%]'>
                            {/* komentar */}
                            <p className='text-[#4A4A4A] text-[1.25rem] leading-[28px]'>"We worked with Likearth Studio for the past few years, and I really enjoy worked with them. They had a great design sense and really instrumental in our massive product design along with other marketing design stuffs. We did tons of iterations and they are very collaborative. We are very happy with how things work out. I highly recommend them."</p>
                            {/* profile */}
                            <div className="flex justify-start items-center gap-[1rem]">
                                {/* pp */}
                                {/* <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div> */}
                                <div className='flex flex-col items-start justify-start'>
                                    <p className='text-start text-[1.2rem] xl:text-[1rem] font-bold'>YourName</p>
                                    <div className='flex items-center justify-center gap-[0.5rem]'>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                        <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* kanan */}
                        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800" className='flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full xl:w-[50%]'>
                            {/* komentar */}
                            <p className='text-[#4A4A4A] text-[1.25rem] leading-[28px]'>"We worked with Likearth Studio for the past few years, and I really enjoy worked with them. They had a great design sense and really instrumental in our massive product design along with other marketing design stuffs. We did tons of iterations and they are very collaborative. We are very happy with how things work out. I highly recommend them."</p>
                            {/* profile */}
                            <div className="flex justify-start items-center gap-[1rem]">
                                {/* pp */}
                                {/* <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div> */}
                                <div className='flex flex-col items-start justify-start'>
                                    <p className='text-start text-[1.2rem] xl:text-[1rem] font-bold'>YourName</p>
                                    <div className='flex items-center justify-center gap-[0.5rem]'>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                        <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                        <p className='text-[1.1rem] xl:text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
                <img src={Awan3} alt="" className='hidden xl:inline-block absolute z-0 top-0 right-0'/>
                <img src={Awan5} alt="" className='absolute z-0 bottom-0 left-0'/>
                <img src={Awan6} alt="" className='absolute z-0 bottom-20 right-0'/>
            </div>
        </>
    )
}