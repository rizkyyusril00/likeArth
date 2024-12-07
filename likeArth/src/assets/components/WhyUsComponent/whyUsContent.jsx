import Lottie from "lottie-react";
import AnimationDino from "../../lottie/rex.json";
import AnimationDino2 from "../../lottie/rex2.json";
import AnimationDino3 from "../../lottie/rex3.json";
export default function WhyUsContent() {
  return (
    <div className="container mx-auto max-w-[1120px]">
      {/* 1 */}
      <div className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-[5rem] relative z-10">
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
            Partner with us to access dedicated UI/UX designers, illustrators,
            and design directors with professional expertise, who designs for
            brands used by millions.
          </p>
        </div>
        {/* box2 */}
        <div
          className="relative order-2 md:order-1 -mt-10 md:-mt-0"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Lottie
            animationData={AnimationDino}
            loop={true}
            autoPlay={true}
            style={{ width: "100%", height: "100%" }}
            className="scale-y"
          />
          <div className="w-[200px] h-[40px] absolute bottom-0 right-0 bg-white"></div>
        </div>
      </div>
      {/* 2 */}
      <div className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-0 relative z-10">
        {/* box1 */}
        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col items-start justify-start w-full md:w-[50%] gap-[1.2rem] xl:gap-[1.5rem] order-1 md:order-2"
        >
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <p className="text-[#676767] text-[1rem] xl:text-[0.875rem]">
              WHY US
            </p>
            <h2 className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px]">
              Your satisfaction is our priority{" "}
            </h2>
          </div>
          <p className="text-[#676767] text-[1.25rem] leading-[28px]">
            We prioritize your satisfaction by providing a seamless,
            collaborative experience and delivering designs that exceed your
            expectations.
          </p>
        </div>
        {/* box2 */}
        <div
          className="relative order-2 md:order-1 -mt-5 md:-mt-0"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Lottie
            animationData={AnimationDino2}
            loop={true}
            autoPlay={true}
            style={{ width: "100%", height: "100%" }}
            className="scale-y"
          />
          <div className="w-[200px] h-[40px] absolute bottom-0 right-0 bg-white"></div>
        </div>
      </div>
      {/* 3 */}
      <div className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-0 relative z-10">
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
            part? You can make unlimited design requests and revisions. We're
            here to ensure you get the perfect design you envision.
          </p>
        </div>
        {/* box2 */}
        <div
          className="relative -mt-5 md:-mt-0"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Lottie
            animationData={AnimationDino3}
            loop={true}
            autoPlay={true}
            style={{ width: "100%", height: "100%" }}
            className="scale-y"
          />
          <div className="w-[200px] h-[40px] absolute bottom-0 right-0 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
