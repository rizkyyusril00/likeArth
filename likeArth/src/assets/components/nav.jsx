// import Logo from '../img/logo.png'
import Logo2 from '../img/logo2.png'
import Btn from './btn'

export default function Nav(){
    const menus = [
        { id: 1, name: 'Why Us', link: '#' },
        { id: 2, name: 'Services', link: '#' },
        { id: 3, name: 'Testimonials', link: '#' },
        { id: 4, name: 'FAQs', link: '#' }
    ];

    return(
        <>
            <nav className="nav bg-transparent mx-auto px-28 py-4 fixed z-40 w-full">
                <div className='nav-box flex justify-between items-center bg-white bg-opacity-60 backdrop-blur-lg  p-6 rounded-2xl'>
                    {/* logo */}
                    <figure className='flex items-center justify-center gap-[1rem]'>
                        <img src={Logo2} alt="" className='w-[2.125rem] h-[2.125rem] object-cover'/>
                        <figcaption className='text-primary text-[1.5rem] font-bold'>Likearth Studio</figcaption>
                    </figure>
                    {/* menus */}
                    <ul className="flex items-center justify-center gap-[1.5rem]">
                        {menus.map(menu => (
                        <li key={menu.id}><a href="http://" className='text-primary text-[1rem]'>{menu.name}</a></li>
                        ))}
                    </ul>
                    {/* kontak */}
                    <Btn title="Contact Us Today" style="flex justify-center items-center bg-white border border-primary px-[1.5rem] py-[0.719rem] rounded-[0.75rem] relative overflow-hidden"/>
                </div>
            </nav>
        </>
    )
}