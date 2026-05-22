import heroBg from "../../assets/history/hero-bg.png";

export default function HistoryHero() {
  return (
    <section className="history-hero">
      <div className="history-hero__overlay" />

      <div className="history-hero__bg">
        <img src={heroBg} alt="" />
      </div>

      <h1 className="history-hero__title">История</h1>
    </section>
  );
}