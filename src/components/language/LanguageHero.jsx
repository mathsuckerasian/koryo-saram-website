import heroBg from "../../assets/language/hero-bg.png";

export default function LanguageHero() {
  return (
    <section className="language-hero">
      <div className="language-hero__overlay" />

      <div className="language-hero__bg">
        <img src={heroBg} alt="" />
      </div>

      <h1 className="language-hero__title">Язык</h1>
    </section>
  );
}