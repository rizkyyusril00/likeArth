import Lottie from "lottie-react";
import AnimationDino from "../../lottie/rex3.json";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import WhyUs from "../../img/why_us/whyus3.svg";

export default function WhyUsBox3() {
  // Lazy load Lottie when in viewport
  const { ref, inView } = useInView({ triggerOnce: true });

  // Memoize Lottie animation data
  const memoizedAnimationData = useMemo(() => AnimationDino, []);
  return (
    <div
      ref={ref}
      className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-10 md:pt-0 relative z-10"
    >
      {/* box1 */}
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-start justify-start w-full md:w-[50%] gap-[1.2rem] xl:gap-[1.5rem] relative z-10"
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          <p className="text-[#676767] text-[1rem] xl:text-[0.875rem]">
            WHY US
          </p>
          <h2 className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px]">
            Unlimited design requests & revisions
          </h2>
        </div>
        <p className="text-[#676767] text-[1.25rem] leading-[28px]">
          Unlock all our services with a simple monthly flat rate. The best
          part? You can make unlimited design requests and revisions. We're here
          to ensure you get the perfect design you envision.
        </p>
      </div>
      {/* box2 */}
      {inView && ( // Render Lottie only when in viewport
        <div
          className="relative -mt-5 md:-mt-0 hidden md:block"
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
