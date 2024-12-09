import Nav from "./assets/components/nav";
import Hero from "./assets/components/hero";
import Portfolio from "./assets/components/portfolio";
import WhyUs from "./assets/components/whyUs";
import OurService from "./assets/components/ourService";
import HowItWorks from "./assets/components/howItWorks";
import Testimonials from "./assets/components/testimonials";
import Faqs from "./assets/components/faq";
import FooterHero from "./assets/components/footerHero";
import Footer from "./assets/components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Ini untuk mengimport CSS AOS
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-in-out", // Jenis easing animasi
      once: true, // Menentukan apakah animasi hanya dijalankan sekali
    });
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Portfolio />
      <WhyUs />
      <OurService />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <FooterHero />
      <Footer />
    </>
  );
}

export default App;
