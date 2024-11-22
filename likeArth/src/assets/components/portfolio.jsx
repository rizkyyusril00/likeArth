import Marquee from "react-fast-marquee";
import ThumbnailPortfolio from "../img/hero.png";
import FigmaLogo from "../img/figmaLogo.svg";
import Portfolio1 from "../img/portfolio/portfolio1.svg";
import Portfolio2 from "../img/portfolio/portfolio2.svg";
import Portfolio3 from "../img/portfolio/portfolio3.svg";
import Portfolio4 from "../img/portfolio/portfolio4.svg";
import Portfolio5 from "../img/portfolio/portfolio5.svg";
import Portfolio6 from "../img/portfolio/portfolio6.svg";
import Portfolio_Second1 from "../img/portfolio/portfolio_second 1.svg";
import Portfolio_Second2 from "../img/portfolio/portfolio_second 2.svg";
import Portfolio_Second3 from "../img/portfolio/portfolio_second 3.svg";
import Portfolio_Second4 from "../img/portfolio/portfolio_second 4.svg";
import Portfolio_Second5 from "../img/portfolio/portfolio_second 5.svg";
import Portfolio_Second6 from "../img/portfolio/portfolio_second 6.svg";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      img: Portfolio1,
    },
    {
      id: 2,
      img: Portfolio2,
    },
    {
      id: 3,
      img: Portfolio3,
    },
    {
      id: 4,
      img: Portfolio4,
    },
    {
      id: 5,
      img: Portfolio5,
    },
    {
      id: 6,
      img: Portfolio6,
    },
  ];
  const portfolios_second = [
    {
      id: 1,
      img: Portfolio_Second1,
    },
    {
      id: 2,
      img: Portfolio_Second2,
    },
    {
      id: 3,
      img: Portfolio_Second3,
    },
    {
      id: 4,
      img: Portfolio_Second4,
    },
    {
      id: 5,
      img: Portfolio_Second5,
    },
    {
      id: 6,
      img: Portfolio_Second6,
    },
  ];
  return (
    <>
      <div className="portfolio pt-[16px]">
        <div className="portfolio-box flex flex-col gap-[16px] relative overflow-hidden">
          {/* Gradasi putih dari bawah ke atas */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-10"></div>

          {/* atas */}
          <Marquee
            loop={0}
            speed={25}
            autoFill
            gradientColor="white"
            gradientWidth={50}
            className="flex gap-4"
          >
            <div className="flex gap-4">
              {portfolios.map((portfolio) => (
                <figure
                  key={portfolio.id}
                  className="w-[550px] h-[400px] rounded-[12px]"
                >
                  <img
                    src={portfolio.img}
                    alt=""
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </figure>
              ))}
            </div>
          </Marquee>

          {/* bawah */}
          <Marquee
            loop={0}
            speed={25}
            direction="right"
            autoFill
            gradientColor="white"
            gradientWidth={50}
            className="flex gap-4"
          >
            <div className="flex gap-4">
              {portfolios_second.map((portfolio) => (
                <figure
                  key={portfolio.id}
                  className="w-[550px] h-[400px] rounded-[12px]"
                >
                  <img
                    src={portfolio.img}
                    alt=""
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </figure>
              ))}
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
