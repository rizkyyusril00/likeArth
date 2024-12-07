import Lottie from "lottie-react";
import AnimationDino from "../../lottie/testimoni.json";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

export default function HeaderTestimonials() {
  // Lazy load Lottie when in viewport
  const { ref, inView } = useInView({ triggerOnce: true });

  // Memoize Lottie animation data
  const memoizedAnimationData = useMemo(() => AnimationDino, []);

  return (
    <div
      className="testimonials-box flex flex-col xl:flex-row justify-center xl:justify-between items-center pt-[5rem] mb-[2.5rem]"
      ref={ref} // Attach ref to trigger lazy load
    >
      {/* box1 */}
      <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start w-full xl:w-[50%] gap-[1.5rem]">
        <div className="flex flex-col justify-center items-center xl:items-start xl:justify-start gap-[0.5rem]">
          <p
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
            className="text-[#676767] text-[1rem] xl:text-[0.875rem] leading-[28px] text-center"
          >
            TESTIMONIALS
          </p>
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px] text-center"
          >
            What Clients’ Said
          </h2>
        </div>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="800"
          className="text-[#676767] text-[1.25rem] font-normal leading-[28px] text-center xl:text-start w-full md:w-[80%] xl:w-full"
        >
          Dive deeper into some of our most successful projects and see the
          impact we’ve made for our clients.
        </p>
      </div>
      {/* box2 */}
      {/* {inView && ( // Render Lottie only when in viewport
        <div
          className="relative -mt-10 md:-mt-14 lg:-mt-0"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
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
      )} */}
    </div>
  );
}
