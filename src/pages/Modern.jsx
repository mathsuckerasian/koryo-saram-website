import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import ModernHero from "../components/modern/ModernHero.jsx";
import ModernIntro from "../components/modern/ModernIntro.jsx";
import ModernMap from "../components/modern/ModernMap.jsx";
import ModernPeople from "../components/modern/ModernPeople.jsx";
import line from "../assets/kitchen/line.png";
import "../styles/modern.css";

export default function Modern() {
  return (
    <div className="modern-page">
      <InnerPageHeader />

      <ModernHero />

      <RevealOnScroll delay={100}>
        <ModernIntro />
      </RevealOnScroll>

      <RevealOnScroll delay={150}>
        <div className="modern-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <ModernMap />
      </RevealOnScroll>

      <RevealOnScroll delay={250}>
        <div className="modern-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={300}>
        <ModernPeople />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}