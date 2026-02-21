import Api from "./components/Api"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import Contribute from "./components/Contribute"
import Discord from "./components/Discord"
import "../../theme.css"

export default function Home() {
  return (
    <div className="light" style={{ background: "linear-gradient(to right, #f8f9ff, #ffffff)" }}>
      <HeroSection/>
      <FeaturesSection/>
      <Contribute/>
      <Discord/>
      <Api/>
      <Footer/>
    </div>
  );
}
