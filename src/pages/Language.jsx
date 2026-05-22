import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import LanguageHero from "../components/language/LanguageHero.jsx";
import LanguageIntro from "../components/language/LanguageIntro.jsx";
import LanguageInfo from "../components/language/LanguageInfo.jsx";
import LanguageWordGame from "../components/language/LanguageWordGame.jsx";
import line from "../assets/kitchen/line.png";
import "../styles/language.css";

export default function Language() {
  return (
    <div className="language-page">
      <InnerPageHeader />

      <LanguageHero />

      <RevealOnScroll delay={100}>
        <LanguageIntro />
      </RevealOnScroll>

      <RevealOnScroll delay={150}>
        <div className="language-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <LanguageInfo />
      </RevealOnScroll>

      <RevealOnScroll delay={250}>
        <div className="language-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={300}>
        <LanguageWordGame />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}