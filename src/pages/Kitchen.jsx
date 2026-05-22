import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";
import KitchenHero from "../components/kitchen/kitchenHero.jsx";
import KitchenIntro from "../components/kitchen/kitchenIntro.jsx";
import SignificantDishes from "../components/kitchen/SignificantDishes.jsx";
import DishBuilder from "../components/kitchen/DishBuilder.jsx";
import PanchaniSection from "../components/kitchen/PanchaniSection.jsx";
import line from "../assets/kitchen/line.png";
import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import "../styles/kitchen.css";

export default function Kitchen() {
  return (
    <div className="kitchen-page">
      <InnerPageHeader />

      <KitchenHero />

      <RevealOnScroll delay={100}>
        <KitchenIntro />
      </RevealOnScroll>

      <RevealOnScroll delay={150}>
        <div className="kitchen-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <section className="kitchen-section-box kitchen-section-box--dishes">
          <SignificantDishes />
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={250}>
        <div className="kitchen-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={300}>
        <section className="kitchen-section-box kitchen-section-box--builder">
          <DishBuilder />
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={350}>
        <div className="kitchen-divider">
          <img src={line} alt="" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={400}>
        <section className="kitchen-section-box kitchen-section-box--panchani">
          <PanchaniSection />
        </section>
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