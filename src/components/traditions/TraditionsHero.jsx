import heroBg from "../../assets/traditions/hero-bg.png";

export default function TraditionsHero() {
  return (
    <section className="traditions-hero">
      <div className="traditions-hero__overlay" />

      <div className="traditions-hero__bg">
        <img src={heroBg} alt="" />
      </div>

      <h1 className="traditions-hero__title">Традиции</h1>
    </section>
  );
}