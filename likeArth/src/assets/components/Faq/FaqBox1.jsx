import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import Lottie from "lottie-react";
import AnimationDino from "../../lottie/faq.json";

export default function FaqBox1() {
  // Lazy load Lottie when in viewport
  const { ref, inView } = useInView({ triggerOnce: true });

  // Memoize Lottie animation data
  const memoizedAnimationData = useMemo(() => AnimationDino, []);
  return (
    <div
      className="flex flex-col justify-center items-center xl:justify-start xl:items-start w-full xl:w-[50%] gap-[2.875rem]"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start gap-[1.5rem]">
        <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start gap-[0.5rem]">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
            className="text-[#676767] text-[1rem] xl:text-[0.875rem] leading-[28px] text-center xl:text-start"
          >
            FAQ
          </p>
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            className="txt-faq font-bold text-[2.5rem] text-secondary text-center xl:text-start"
          >
            Find your answers here.
          </h1>
        </div>
        <p
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          className="txt-faq text-[#676767] font-normal text-[1.25rem] text-center xl:text-start"
        >
          Not sure about something? Talk to us directly!
        </p>
      </div>
      {inView && ( // Render Lottie only when in viewport
        <div
          className="relative -mt-10 md:-mt-14 lg:-mt-0 hidden md:block"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
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
    </div>
  );
}
