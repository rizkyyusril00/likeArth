import Logo2 from '../img/logo2.png'
import Ft1 from '../img/icon/ft1.png'
import Ft2 from '../img/icon/ft2.png'
import Ft3 from '../img/icon/ft3.png'
import Ft4 from '../img/icon/ft4.png'
import Ft5 from '../img/icon/ft5.png'


export default function Footer(){
    const ft_icons = [
        { id: 1, icon: Ft1, link: '#'},
        { id: 2, icon: Ft2, link: '#'},
        { id: 3, icon: Ft3, link: '#'},
        { id: 4, icon: Ft4, link: '#'},
        { id: 5, icon: Ft5, link: '#'}
    ];
    return (
        <>
            <footer className="footer">
                <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300" className="footer-box bg-white py-[1.5rem] px-[2rem] flex items-center justify-between">
                    {/* kiri */}
                    <div className="flex flex-col items-start justify-start gap-[1rem]">
                        {/* logo */}
                        <figure className='flex items-center justify-center gap-[1rem]'>
                            <img src={Logo2} alt="" className='w-[2.125rem] h-[2.125rem] object-cover'/>
                            <figcaption className='text-primary text-[1.5rem] font-bold'>Likearth Studio</figcaption>
                        </figure>
                        {/* icons */}
                        <div className='flex justify-start items-start gap-[0.75rem]'>
                            {ft_icons.map(ft_icon => (
                                <figure key={ft_icon.id}>
                                    <a href={ft_icon.link} className='cursor-pointer'><img src={ft_icon.icon} alt="" /></a>
                                </figure>
                            ))}
                        </div>
                    </div>
                    {/* kanan */}
                    <div className='flex flex-col items-end justify-end gap-[1rem]'>
                        <h2 className='text-[1.25rem] text-secondary'>Sukabumi City, West Java, Indonesia</h2>
                        <h2 className='text-[1.25rem] text-secondary'>Copyright 2024 Likearth Studio</h2>
                    </div>
                </div>
            </footer>
        </>
    )
}