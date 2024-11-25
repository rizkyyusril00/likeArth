import Testimoni from "../../img/testimoni1.svg";

export default function HeaderTestimonials() {
  return (
    <div className="testimonials-box flex flex-col xl:flex-row justify-center xl:justify-between items-center pt-[5rem] mb-[2.5rem]">
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
      <figure
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
        className="relative z-20"
      >
        <img src={Testimoni} alt="" />
      </figure>
    </div>
  );
}
