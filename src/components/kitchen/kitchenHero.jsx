import heroBg from "../../assets/kitchen/hero-bg.png";

export default function KitchenHero() {
  return (
    <section className="kitchen-hero">
      <div className="kitchen-hero__overlay" />
      <div className="kitchen-hero__bg">
        <img src={heroBg} alt="" />
      </div>
      <h1 className="kitchen-hero__title">Кухня</h1>
    </section>
  );
}