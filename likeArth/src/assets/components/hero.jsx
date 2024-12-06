import Btn from "./btn";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  // type animation
  const [Poins] = useTypewriter({
    words: [
      "Experienced Designer",
      "Your satisfactions is our priority",
      "Unlimited design requests & revisions",
    ],
    loop: false,
    typeSpeed: 25,
    deleteSpeed: 25,
    delaySpeed: 1500,
  });
  // animation framer
  const delay = 0.9;
  const poins = [
    { id: 1, name: "Experienced Designer" },
    { id: 2, name: "Your satisfactions is our priority" },
    { id: 3, name: "Unlimited design requests & revisions" },
  ];
  // slider animation framer
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeDevice(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthAnimation = isLargeDevice ? ["20%", "100%"] : ["30%", "100%"];
  return (
    <>
      <div
        id="home"
        className="hero w-full h-screen pt-[8rem] md:pt-[10rem] xl:pt-[8rem] px-[24px] overflow-hidden transition-all ease-in-out duration-500"
      >
        <div className="container mx-auto max-w-[1120px]">
          <div className="hero-box flex flex-col items-center justify-center gap-[1rem]">
            <div className="flex flex-col items-center justify-center gap-[1.5rem] md:gap-[1rem]">
              {/* tagline */}
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-primary text-[32px] md:text-[3.5rem] xl:text-[4rem] leading-tight xl:leading-[72px] text-center font-bold"
              >
                {[
                  "Ready",
                  "to",
                  "design",
                  "an",
                  "astounding",
                  "digital",
                  "product?",
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.h1>
              {/* description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-primary text-[1rem] text-center font-normal leading-[28px] xl:leading-[28px]"
                style={{ visibility: "visible" }} // Pastikan elemen terlihat meski belum di-animate
              >
                If you're looking to achieve your business goals through
                delightful experiences and engaging design, then you're in the
                right place.
              </motion.p>
              {/* poins */}
              <div className="hidden lg:flex items-center justify-center gap-[1.5rem]">
                {poins.map((poin, index) => (
                  <motion.div
                    key={poin.id}
                    whileInView={{ y: [25, 0], opacity: [0, 1] }}
                    transition={{
                      delay: delay + index * 0.1,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-[0.5rem]"
                  >
                    <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                    <p className="text-[1rem] text-[#676767] text-center">
                      {poin.name}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* mobile poins */}
              <motion.div
                whileInView={{ y: [25, 0], opacity: [0, 1] }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-[0.5rem] lg:hidden"
              >
                <i className="bi bi-check-circle text-primary text-[1rem]"></i>
                <p className="text-[1rem] text-[#676767] text-center">
                  {Poins}
                </p>
              </motion.div>
            </div>
            {/* contact us */}
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-7 sm:px-[58px] md:px-[165px] lg:px-[280px] xl:px-[270px] container mx-auto max-w-[1120px] hidden md:flex items-center justify-center"
            >
              <motion.div
                whileInView={{ width: widthAnimation }}
                transition={{ delay: 2.4, duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-[0.938rem] pl-[17px] py-1 xl:py-0 justify-between items-center flex relative z-10 overflow-hidden"
              >
                {/* invisible place holder */}
                <p className="invisible py-[0.1rem] md:py-[0.6rem] leading-[28px]">
                  1
                </p>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center absolute left-[17px] gap-[10px]"
                >
                  {/* icon pulse invisible placeholder*/}
                  <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                    <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                  </div>
                  <motion.p
                    whileInView={{
                      opacity: [0, 1],
                      fontSize: ["0.1rem", "0.875rem"],
                    }}
                    transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className=" leading-[28px]"
                  >
                    <span className="text-primary">1 Slot available!</span>{" "}
                    <span className="hidden md:inline-block text-[#676767]">
                      Let's talk
                    </span>{" "}
                    <span className="hidden xl:inline-block text-[#676767]">
                      to get your project started.
                    </span>
                  </motion.p>
                </motion.div>
                {/* icon pulse */}
                <div className="absolute left-[17px] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite"></div>
                <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[20px]"></div>
                <motion.a
                  href="https://cal.com/likearthstudio/30min"
                  target="_blank"
                  className="py-[10px] md:py-[17px] xl:py-[13px] w-[100px] md:w-[160px] text-center text-white text-[0.875rem] bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out rounded-[0.938rem] absolute right-0 z-30"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
            {/* contack us mobile */}
            <motion.div
              whileInView={{ y: [25, 0] }}
              transition={{ delay: 0.9, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="flex md:hidden justify-center items-center"
            >
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="flex items-center justify-center gap-1 md:gap-4 xl:gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem] relative w-auto transition-all duration-500 ease-in-out"
              >
                <div className="flex items-center justify-center gap-[0.625rem]">
                  {/* icon pulse invis */}
                  <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                    <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                  </div>
                  {/*attention */}
                  <motion.p
                    whileInView={{
                      opacity: [0, 1],
                      fontSize: ["0.1rem", "0.875rem"],
                    }}
                    transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false }}
                    className="py-[0.1rem] md:py-[0.6rem] leading-[28px] mr-2"
                  >
                    <span className="text-primary">1 Slot available!</span>{" "}
                    <span className="hidden md:inline-block text-[#676767]">
                      Let's talk
                    </span>{" "}
                    <span className="hidden xl:inline-block text-[#676767]">
                      to get your project started.
                    </span>
                  </motion.p>
                </div>
                {/* icon pulse */}
                <div className="absolute left-[17px] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite"></div>
                <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[20px]"></div>
                {/* btn */}
                <a href="https://cal.com/likearthstudio/30min" target="_blank">
                  <Btn
                    title="Book a Call"
                    style="flex justify-center items-center relative bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out text-white border border-primary overflow-hidden rounded-[0.938rem] py-[0.719rem] px-[1.5rem] absolute"
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
