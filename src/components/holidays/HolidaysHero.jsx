import heroBg from "../../assets/holidays/hero-bg.png";

export default function HolidaysHero() {
  return (
    <section className="holidays-hero">
      <div className="holidays-hero__overlay" />

      <div className="holidays-hero__bg">
        <img src={heroBg} alt="" />
      </div>

      <h1 className="holidays-hero__title">Праздники</h1>
    </section>
  );
}