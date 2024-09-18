import Service1 from '../img/service1.png'
import Service2 from '../img/service2.png'
import Service3 from '../img/service3.png'
import Service4 from '../img/service4.png'
import Btn from './btn'



export default function OurService(){
    const first_services = [
        { id: 1, name: 'Why Us', delay:"100" },
        { id: 2, name: 'Workshop Facilitation', delay:"200" },
        { id: 3, name: 'UX Audit', delay:"300" },
        { id: 4, name: 'Design Sprint Facilitation', delay:"400" },
        { id: 5, name: 'Ideation', delay:"500" },
        { id: 6, name: 'Information Architecture', delay:"600" },
        { id: 7, name: 'User Flow', delay:"700" },
        { id: 8, name: 'Wireframe', delay:"800" },
        { id: 9, name: 'Prototyping', delay:"900" },
        { id: 10, name: 'Usability Testing', delay:"1000" },
    ];
    const second_services = [
        { id: 1, name: 'Design System', delay:"200" },
        { id: 2, name: 'Website Design', delay:"300" },
        { id: 3, name: 'Responsive Design', delay:"400" },
        { id: 4, name: 'Mobile App Design', delay:"500" },
        { id: 5, name: 'Dashboard Design ', delay:"600" },
        { id: 6, name: 'Landing Page', delay:"700" },
    ];
    const third_services = [
        { id: 1, name: '2D Illustration', delay:"300" },
        { id: 2, name: 'Character', delay:"400" },
        { id: 3, name: 'Mascot', delay:"500" },
        { id: 4, name: 'Iconography', delay:"600" },
    ];
    const fourth_services = [
        { id: 1, name: 'Logo', delay:"400" },
        { id: 2, name: 'Pitch Deck', delay:"500" },
        { id: 3, name: 'Brand Guidelines', delay:"600" },
        { id: 4, name: 'Social Media Design', delay:"700" },
        { id: 5, name: 'Printed Design', delay:"800" },
        { id: 6, name: 'Merchandise Design', delay:"900" },
    ];
    return(
        <>
            <div className="our-service bg-[#f0f9fa]">
                <div className='flex flex-col gap-0'>
                    {/* atas */}
                    <div className="our-service-box px-[10rem] pt-[5rem] flex justify-between gap-[2.5rem]">
                        {/* box1 */}
                        <div className="flex flex-col justify-start items-start w-[50%]">
                            {/* bagain atas */}
                            <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex justify-start items-center">
                                {/* img */}
                                <figure className=''>
                                    <img src={Service1} alt="" className='w-full h-full object-cover' />
                                </figure>
                                {/* description */}
                                <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary">
                                    <p className='text-[0.875rem]'>OUR SERVICES</p>
                                    <p className='font-bold text-[2rem]'>UX Design</p>
                                    <p className='text-[1rem]'>We ensure your design is intuitive, easy to use, and provides a delightful experience. </p>
                                </div>
                            </div>
                            {/* bagian bawah */}
                            <div className='flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]'>
                                {first_services.map(first_service =>(
                                    <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={first_service.delay} key={first_service.id} className='bg-white border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]'>
                                        <span className='text-[#494949] text-[0.875rem]'>{first_service.name}h</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* box2 */}
                        <div className="flex flex-col justify-start items-start w-[50%]">
                            {/* bagain atas */}
                            <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="flex justify-start items-center">
                                {/* img */}
                                <figure className=''>
                                    <img src={Service2} alt="" className='w-full h-full object-cover' />
                                </figure>
                                {/* description */}
                                <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary">
                                    <p className='text-[0.875rem]'>OUR SERVICES</p>
                                    <p className='font-bold text-[2rem]'>UI Design</p>
                                    <p className='text-[1rem]'>We craft captivating designs that catch your users' attention.</p>
                                </div>
                            </div>
                            {/* bagian bawah */}
                            <div className='flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]'>
                                {second_services.map(second_service =>(
                                    <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={second_service.delay} key={second_service.id} className='bg-white border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]'>
                                        <span className='text-[#494949] text-[0.875rem]'>{second_service.name}h</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* bawah */}
                    <div className="our-service-box px-[10rem] pt-[3.75rem] flex justify-between gap-[2.5rem]">
                        {/* box1 */}
                        <div className="flex flex-col justify-start items-start w-[50%]">
                            {/* bagain atas */}
                            <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className="flex justify-start items-center">
                                {/* img */}
                                <figure className=''>
                                    <img src={Service3} alt="" className='w-full h-full object-cover' />
                                </figure>
                                {/* description */}
                                <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary">
                                    <p className='text-[0.875rem]'>OUR SERVICES</p>
                                    <p className='font-bold text-[2rem]'>Illustration Design</p>
                                    <p className='text-[1rem]'>Let us turn your imagination into captivating illustrations.</p>
                                </div>
                            </div>
                            {/* bagian bawah */}
                            <div className='flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]'>
                                {third_services.map(third_service =>(
                                    <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={third_service.delay} key={third_service.id} className='bg-white border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]'>
                                        <span className='text-[#494949] text-[0.875rem]'>{third_service.name}h</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* box2 */}
                        <div className="flex flex-col justify-start items-start w-[50%]">
                            {/* bagain atas */}
                            <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" className="flex justify-start items-center">
                                {/* img */}
                                <figure className=''>
                                    <img src={Service4} alt="" className='w-full h-full object-cover' />
                                </figure>
                                {/* description */}
                                <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary">
                                    <p className='text-[0.875rem]'>OUR SERVICES</p>
                                    <p className='font-bold text-[2rem]'>Branding & Graphic Design</p>
                                    <p className='text-[1rem]'>Make your brand more professional and memorable.</p>
                                </div>
                            </div>
                            {/* bagian bawah */}
                            <div className='flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]'>
                                {fourth_services.map(fourth_service =>(
                                    <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={fourth_service.delay} key={fourth_service.id} className='bg-white border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]'>
                                        <span className='text-[#494949] text-[0.875rem]'>{fourth_service.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* call us */}
                    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className='px-[10rem] mt-[3.75rem] mb-[5rem]'>
                        <div className='flex bg-white px-[2rem] py-[1.5rem] border border-primary rounded-[1.5rem]'>
                            {/* kiri */}
                            <div className='w-[70%] flex flex-col items-start justify-start gap-[0.5rem]'>
                                <h2 className='text-[1.5rem] font-bold text-secondary'>Can't find what you're looking for?</h2>
                                <p className='text-[1.125rem] text-[#676767]'>We haven’t listed everything here. Let us know what you need, and we’ll deliver the best services tailored just for you.</p>
                            </div>
                            {/* kanan */}
                            <div className='w-[30%] flex items-center justify-center'>
                                <Btn title="Call Us Now" style="flex justify-center items-center bg-white border border-primary px-[1.5rem] py-[0.719rem] rounded-[0.75rem] relative overflow-hidden"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}