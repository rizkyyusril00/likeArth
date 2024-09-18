import Marquee from "react-fast-marquee";
import ThumbnailPortfolio from "../img/hero.png"

export default function Portfolio(){
    return(
        <>
            <div className="portfolio pt-[5rem]">
                <div className="portfolio-box flex flex-col gap-[2rem] px-[10rem]">
                    {/* atas */}
                    <Marquee loop={0} pauseOnHover autoFill gradient="true" gradientColor='white' gradientWidth={50} className="flex gap-10">
                        <div className="flex gap-10">
                            <figure className="w-[21.875rem] h-[14rem] bg-black rounded-[1.25rem]">
                                <img src={ThumbnailPortfolio} alt="" className="w-full h-full object-cover  rounded-[1.25rem]"/>
                            </figure>
                            <figure className="w-[21.875rem] h-[14rem] bg-black rounded-[1.25rem]">
                                <img src={ThumbnailPortfolio} alt="" className="w-full h-full object-cover  rounded-[1.25rem]"/>
                            </figure>
                            <figure className="w-[21.875rem] h-[14rem] bg-black rounded-[1.25rem]">
                                <img src={ThumbnailPortfolio} alt="" className="w-full h-full object-cover  rounded-[1.25rem]"/>
                            </figure>                            
                        </div>                      
                    </Marquee>
                    {/* bawah */}
                    <Marquee loop={0} direction="right" pauseOnHover autoFill gradient="true" gradientColor='white' gradientWidth={50} className="flex gap-10">
                        <div className="flex gap-10">
                            <figure className="w-[21.875rem] h-[14rem] bg-black rounded-[1.25rem]">
                                <img src={ThumbnailPortfolio} alt="" className="w-full h-full object-cover  rounded-[1.25rem]"/>
                            </figure> 
                            <figure className="w-[21.875rem] h-[14rem] bg-black rounded-[1.25rem]">
                                <img src={ThumbnailPortfolio} alt="" className="w-full h-full object-cover  rounded-[1.25rem]"/>
                            </figure> 
                            <figure className="w-[21.875rem] h-[14rem] bg-black rounded-[1.25rem]">
                                <img src={ThumbnailPortfolio} alt="" className="w-full h-full object-cover  rounded-[1.25rem]"/>
                            </figure> 
                        </div>                      
                    </Marquee>
                </div>
            </div>
        </>
    )
}