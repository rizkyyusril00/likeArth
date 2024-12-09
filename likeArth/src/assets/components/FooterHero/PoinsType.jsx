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
    typeSpeed: 4,
    deleteSpeed: 4,
    delaySpeed: 400,
  });

  return (
    <div className="flex justify-center items-center gap-[0.5rem] lg:hidden">
      <i className="bi bi-check-circle text-primary text-[1rem]"></i>
      <p className="text-[1rem] text-[#676767] text-center">
        Unlimited design requests & revisions
      </p>
    </div>
  );
};

// Bungkus memo saat ekspor
export default React.memo(PoinsType);
