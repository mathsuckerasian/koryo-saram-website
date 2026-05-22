import heroBg from "../../assets/modern/hero-bg.png";

export default function ModernHero() {
  return (
    <section className="modern-hero">
      <div className="modern-hero__overlay" />

      <div className="modern-hero__bg">
        <img src={heroBg} alt="" />
      </div>

      <h1 className="modern-hero__title">Современные корё-сарам</h1>
    </section>
  );
}