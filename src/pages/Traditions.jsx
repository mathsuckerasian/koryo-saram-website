import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import TraditionsHero from "../components/traditions/TraditionsHero.jsx";
import TraditionsIntro from "../components/traditions/TraditionsIntro.jsx";
import TraditionsMain from "../components/traditions/TraditionsMain.jsx";
import AsyandiInteractive from "../components/traditions/AsyandiInteractive.jsx";
import HanbokSection from "../components/traditions/HanbokSection.jsx";
import line from "../assets/traditions/line.png";
import "../styles/traditions.css";

export default function Traditions() {
  return (
    <div className="traditions-page">
      <InnerPageHeader />

      <TraditionsHero />

      <RevealOnScroll delay={100}>
        <TraditionsIntro />
      </RevealOnScroll>

      <RevealOnScroll delay={150}>
        <div className="traditions-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <TraditionsMain />
      </RevealOnScroll>

      <RevealOnScroll delay={250}>
        <div className="traditions-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={300}>
        <AsyandiInteractive />
      </RevealOnScroll>

      <RevealOnScroll delay={350}>
        <div className="traditions-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={400}>
        <HanbokSection />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}