import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import HolidaysHero from "../components/holidays/HolidaysHero.jsx";
import HolidaysIntro from "../components/holidays/HolidaysIntro.jsx";
import HolidaysCalendar from "../components/holidays/HolidaysCalendar.jsx";
import line from "../assets/kitchen/line.png";
import "../styles/holidays.css";

export default function Holidays() {
  return (
    <div className="holidays-page">
      <InnerPageHeader />

      <HolidaysHero />

      <RevealOnScroll delay={100}>
        <HolidaysIntro />
      </RevealOnScroll>

      <RevealOnScroll delay={150}>
        <div className="holidays-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <HolidaysCalendar />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}