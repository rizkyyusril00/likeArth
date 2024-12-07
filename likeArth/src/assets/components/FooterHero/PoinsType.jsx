import { useTypewriter } from "react-simple-typewriter";

export default function PoinsType() {
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
  return (
    <div className="flex justify-center items-center gap-[0.5rem] lg:hidden">
      <i className="bi bi-check-circle text-primary text-[1rem]"></i>
      <p className="text-[1rem] text-[#676767] text-center">{Poins}</p>
    </div>
  );
}
