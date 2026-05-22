import { mainTraditions } from "../../data/traditionsData.js";
import TraditionPhotoSlider from "./TraditionPhotoSlider.jsx";

export default function TraditionsMain() {
  return (
    <section className="traditions-main">
      <h2 className="traditions-section-title">Главные традиции</h2>

      <div className="traditions-main__list">
        {mainTraditions.map((item) => (
          <article
            key={item.id}
            className={`tradition-card tradition-card--${item.align}`}
          >
            <div className="tradition-card__image">
              <TraditionPhotoSlider photos={item.photos} title={item.title} />
            </div>

            <div className="tradition-card__content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}