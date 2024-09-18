import Testimoni from '../img/testimoni1.png'
import Marquee from "react-fast-marquee";
import Clients1 from "../img/client1.png"
import Clients2 from "../img/client2.png"
import Clients3 from "../img/client3.png"
import Clients4 from "../img/client4.png"
import Clients5 from "../img/client5.png"
import Clients6 from "../img/client6.png"


export default function Testimonials(){

    return(
        <>
            <div className="testimonials flex flex-col gap-[2.875rem]">
                {/* box atas */}
                <div className="testimonials-box flex justify-between items-center px-[10rem] pt-[5rem] mb-[2.5rem]">
                    {/* box1 */}
                    <div className="flex flex-col items-start justify-start w-[50%] gap-[1.5rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                            <p data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-[#676767] text-[0.875rem]">TESTIMONIALS</p>
                            <h2 data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="font-bold text-[#1C1C1C] text-[2.5rem]">What Clients’ Said</h2>
                        </div>
                        <p data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800" className="text-[#676767] text-[1.25rem] font-semibold">Dive deeper into some of our most successful projects and see the impact we’ve made for our clients.</p>
                    </div>
                    {/* box2 */}
                    <figure data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="">
                        <img src={Testimoni} alt="" />
                    </figure>
                </div>
                {/* marquee */}
                <div className='px-[10rem]'>
                    <Marquee loop={0} gradient="true" gradientColor='white' gradientWidth={100}>
                        <div className="flex justify-center items-center gap-[4.375rem] py-[3.574rem]">
                                <img src={Clients1} alt="" className='w-[100px] h-[100px] filter grayscale hover:grayscale-0' />
                                <img src={Clients2} alt="" className='w-[100px] h-[100px] filter grayscale hover:grayscale-0' />
                                <img src={Clients3} alt="" className='w-[100px] h-[100px] filter grayscale hover:grayscale-0' />
                                <img src={Clients4} alt="" className='w-[100px] h-[100px] filter grayscale hover:grayscale-0' />
                                <img src={Clients5} alt="" className='w-[100px] h-[100px] filter grayscale hover:grayscale-0' />
                                <img src={Clients6} alt="" className='w-[100px] h-[100px] filter grayscale hover:grayscale-0' />
                            </div>
                    </Marquee>
                </div>
                {/* komentar */}
                {/* 1 */}
                <div className='px-[10rem] flex justify-between gap-[2rem]'>
                    {/* atas */}
                    {/* kiri */}
                    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className='flex flex-col items-stretch justify-start border border-primary rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-[50%]'>
                        {/* komentar */}
                        <p className='text-[#4A4A4A] text-[1.25rem]'>"We worked with Likearth Studio for the past few years, and I really enjoy worked with them. They had a great design sense and really instrumental in our massive product design along with other marketing design stuffs. We did tons of iterations and they are very collaborative. We are very happy with how things work out. I highly recommend them."</p>
                        {/* profile */}
                        <div className="flex justify-start items-center gap-[1rem]">
                            {/* pp */}
                            <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-start text-[1rem] font-bold'>YourName</p>
                                <div className='flex items-center justify-center gap-[0.5rem]'>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                    <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* kanan */}
                    <div  data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" className='flex flex-col items-stretch justify-start border border-primary rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-[50%]'>
                        {/* komentar */}
                        <p className='text-[#4A4A4A] text-[1.25rem]'>"Working with Likearth Studio was a game-changer for our business. They captured the essence of our brand effortlessly and translated it into stunning visuals. Their team's dedication and professionalism made the entire process seamless. Couldn't be happier with the results!"</p>
                        {/* profile */}
                        <div className="flex justify-start items-center gap-[1rem]">
                            {/* pp */}
                            <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-start text-[1rem] font-bold'>YourName</p>
                                <div className='flex items-center justify-center gap-[0.5rem]'>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                    <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
                {/* 2 */}
                <div className='px-[10rem] flex justify-between gap-[2rem]'>
                    {/* bawah */}
                    {/* kiri */}
                    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="600" className='flex flex-col items-stretch justify-start border border-primary rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-[50%]'>
                        {/* komentar */}
                        <p className='text-[#4A4A4A] text-[1.25rem]'>"We worked with Likearth Studio for the past few years, and I really enjoy worked with them. They had a great design sense and really instrumental in our massive product design along with other marketing design stuffs. We did tons of iterations and they are very collaborative. We are very happy with how things work out. I highly recommend them."</p>
                        {/* profile */}
                        <div className="flex justify-start items-center gap-[1rem]">
                            {/* pp */}
                            <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-start text-[1rem] font-bold'>YourName</p>
                                <div className='flex items-center justify-center gap-[0.5rem]'>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                    <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* kanan */}
                    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800" className='flex flex-col items-stretch justify-start border border-primary rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-[50%]'>
                        {/* komentar */}
                        <p className='text-[#4A4A4A] text-[1.25rem]'>"We worked with Likearth Studio for the past few years, and I really enjoy worked with them. They had a great design sense and really instrumental in our massive product design along with other marketing design stuffs. We did tons of iterations and they are very collaborative. We are very happy with how things work out. I highly recommend them."</p>
                        {/* profile */}
                        <div className="flex justify-start items-center gap-[1rem]">
                            {/* pp */}
                            <div className='w-[3.125rem] h-[3.125rem] rounded-[50%] bg-primary'></div>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-start text-[1rem] font-bold'>YourName</p>
                                <div className='flex items-center justify-center gap-[0.5rem]'>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>CEO</p>
                                    <div className='w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]'></div>
                                    <p className='text-[0.875rem] text-[#4A4A4A]'>Shipper</p>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </>
    )
}