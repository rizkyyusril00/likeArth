import Lottie from "lottie-react";
import AnimationDino from "../../lottie/rex.json";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import WhyUs from "../../img/why_us/whyus1.svg";

export default function WhyUsBox1() {
  // Lazy load Lottie when in viewport
  const { ref, inView } = useInView({ triggerOnce: true });

  // Memoize Lottie animation data
  const memoizedAnimationData = useMemo(() => AnimationDino, []);
  return (
    <div
      ref={ref}
      className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-[5rem] relative z-10"
    >
      {/* box1 */}
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-start justify-start w-full md:w-[50%] gap-[1.2rem] xl:gap-[1.5rem]"
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          <p className="text-[#676767] text-[1rem] xl:text-[0.875rem]">
            WHY US
          </p>
          <h2 className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px]">
            Work with professional and experienced designers
          </h2>
        </div>
        <p className="text-[#676767] text-[1.25rem] leading-[28px]">
          Partner with us to access dedicated UI/UX designers, illustrators, and
          design directors with professional expertise, who designs for brands
          used by millions.
        </p>
      </div>
      {/* box2 */}
      {inView && ( // Render Lottie only when in viewport
        <div
          className="relative order-2 md:order-1 -mt-10 md:-mt-0 hidden md:block"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Lottie
            animationData={memoizedAnimationData}
            loop={true}
            autoPlay={true}
            style={{ width: "100%", height: "100%" }}
            className="w-full h-full"
          />
          <div className="w-[200px] h-[40px] absolute bottom-0 right-0 bg-white"></div>
        </div>
      )}
      <figure className="block md:hidden">
        <img src={WhyUs} alt="" />
      </figure>
    </div>
  );
}
