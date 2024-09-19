// import Logo from '../img/logo.png'
import Logo2 from '../img/logo2.png'
import Btn from './btn'
import { useState } from 'react';

export default function Nav(){
    const [openMenu, setOpenMenu] = useState(false);
    const menus = [
        { id: 1, name: 'Why Us', link: '#' },
        { id: 2, name: 'Services', link: '#' },
        { id: 3, name: 'Testimonials', link: '#' },
        { id: 4, name: 'FAQs', link: '#' }
    ];

    return(
        <>
            <nav className="nav flex justify-center bg-transparent mx-auto sm:py-0 xl:py-4 fixed z-40 w-full">
                <div className="container mx-auto max-w-[1120px] relative z-40">
                    <div className={`nav-box flex justify-between items-center p-[12px] xl:p-[16px] xl:rounded-2xl mx-auto relative z-10 transition-all duration-500 ease-in-out ${openMenu ? 'bg-white rounded-none' : 'bg-white bg-opacity-60 backdrop-blur-lg delay-500 rounded-b-xl'}`}>
                        {/* logo */}
                        <figure className='flex items-center justify-center gap-[1rem]'>
                            <img src={Logo2} alt="" className='w-[3.125rem] h-[3.125rem] xl:w-[2.125rem] xl:h-[2.125rem] object-cover'/>
                            <figcaption className='text-primary text-[1.2rem] md:text-[2rem] xl:text-[1.5rem] font-bold'>Likearth Studio</figcaption>
                        </figure>
                        {/* menus */}
                        <ul className="hidden xl:flex items-center justify-center gap-[1.5rem]">
                            {menus.map(menu => (
                            <li key={menu.id}><a href="http://" className='text-primary text-[1rem]'>{menu.name}</a></li>
                            ))}
                        </ul>
                        {/* kontak */}
                        <Btn title="Contact Us Today" style="hidden xl:flex justify-center items-center bg-white border border-primary px-[1.5rem] py-[0.719rem] rounded-[0.75rem] relative overflow-hidden"/>
                        {/* hamburger menu */}
                        <button onClick={() => setOpenMenu(!openMenu)} className='xl:hidden flex flex-col justify-between items-center w-[30px] md:w-[40px] h-[20px] md:h-[30px] gap-[2px] mt-1'>
                            <span className={`w-full h-[4px] bg-primary transition-all ease-in-out duration-500 delay-150 ${openMenu ? 'rotate-45 translate-y-1 md:rotate-45 md:translate-y-2.5' : 'rotate-0 translate-y-0'}`}></span>
                            <span className={`w-full h-[4px] bg-primary transition-all ease-in-out duration-500 ${openMenu ? 'opacity-0' : 'opacity-100 delay-150'}`}></span>
                            <span className={`w-full h-[4px] bg-primary transition-all ease-in-out duration-500 delay-150 ${openMenu ? '-rotate-45 -translate-y-3' : 'rotate-0 translate-y-0'}`}></span>
                        </button >
                    </div>
                    {/* menu mobile */}
                    <div className={`w-full p-5 bg-white absolute z-0 rounded-b-2xl transition-all ease-in duration-500 ${openMenu ? 'top-[65px] opacity-100' : '-top-[350px] opacity-0'}`}>
                        <ul className="flex flex-col items-center justify-center gap-[1.5rem]">
                            {menus.map(menu => (
                                <li key={menu.id}><a href="http://" className='text-primary text-[1.2rem] md:text-[2rem] font-semibold'>{menu.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}