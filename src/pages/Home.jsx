import HeroSection from "../components/home/HeroSection";
import Hero from "../components/home/HeroSection";
import VisionSection from "../components/home/VisionSection";
import ClientReviews from "./ClientReviews";
import Contact from "./Contact";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import Property from "./Property";
import Trends from "./Trends";
export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <AboutUs />
      <Property preview />
      <Team />
      <Trends />
      <ClientReviews />
      <Contact />
    </>
  );
}
