import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import HistoryHero from "../components/history/HistoryHero.jsx";
import HistoryIntro from "../components/history/HistoryIntro.jsx";
import HistoryMap from "../components/history/HistoryMap.jsx";
import "../styles/history.css";
import line from "../assets/history/line.png";

export default function History() {
  return (
    <div className="history-page">
      <InnerPageHeader />

      <HistoryHero />

      <RevealOnScroll delay={100}>
        <HistoryIntro />
      </RevealOnScroll>

     <RevealOnScroll delay={150}>
        <div className="history-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={150}>
        <HistoryMap />
      </RevealOnScroll>
      
     <RevealOnScroll delay={150}>
        <div className="footer-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>
      <Footer />
    </div>
  );
}