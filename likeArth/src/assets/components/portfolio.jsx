import Marquee from "react-fast-marquee";
import ThumbnailPortfolio from "../img/hero.png";
import FigmaLogo from "../img/figmaLogo.svg";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio pt-[16px]">
        <div className="portfolio-box flex flex-col gap-[16px] relative overflow-hidden">
          {/* Gradasi putih dari bawah ke atas */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-10"></div>

          {/* atas */}
          <Marquee
            loop={0}
            speed={20}
            autoFill
            gradientColor="white"
            gradientWidth={50}
            className="flex gap-4"
          >
            <div className="flex gap-4">
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
            </div>
          </Marquee>

          {/* bawah */}
          <Marquee
            loop={0}
            speed={20}
            direction="right"
            autoFill
            gradientColor="white"
            gradientWidth={50}
            className="flex gap-4"
          >
            <div className="flex gap-4">
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
              <figure className="w-[550px] h-[300px] bg-black rounded-[12px]">
                <img
                  src={ThumbnailPortfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </figure>
            </div>
          </Marquee>

          {/* Tombol See More */}
          <button className="p-4 flex items-center justify-center gap-2 bg-white bg-opacity-50 filter backdrop-filter backdrop-blur-xl w-[170px] rounded-[12px] shadow-md absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 overflow-hidden hover:scale-105 transition-all ease-in-out duration-500">
            <span className="font-medium text-[16px]">See Portfolio</span>
            <img src={FigmaLogo} alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
