import { useTypewriter } from "react-simple-typewriter";
import React from "react";

// Tidak perlu langsung membungkus dengan memo
const PoinsType = () => {
  const [Poins] = useTypewriter({
    words: [
      "Experienced Designer",
      "Your satisfaction is our priority",
      "Unlimited design requests & revisions",
    ],
    loop: false,
    typeSpeed: 5,
    deleteSpeed: 5,
    delaySpeed: 500,
  });

  return (
    <div className="flex justify-center items-center gap-[0.5rem] lg:hidden">
      <i className="bi bi-check-circle text-primary text-[1rem]"></i>
      <p className="text-[1rem] text-[#676767] text-center">{Poins}</p>
    </div>
  );
};

// Bungkus memo saat ekspor
export default React.memo(PoinsType);
