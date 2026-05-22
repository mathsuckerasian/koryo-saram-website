import TraditionPhotoSlider from "./TraditionPhotoSlider.jsx";

import hanbok1 from "../../assets/traditions/hanbok-1.jpg";
import hanbok2 from "../../assets/traditions/hanbok-2.jpg";
import hanbok3 from "../../assets/traditions/hanbok-3.jpg";

const hanbokPhotos = [hanbok1, hanbok2, hanbok3];

export default function HanbokSection() {
  return (
    <section className="hanbok-section">
      <h2 className="traditions-section-title">Что такое ханбок?</h2>

      <div className="hanbok-section__content">
        <div className="hanbok-section__text">
          <p>
            Ханбок — традиционная корейская одежда, которая отличается плавными
            линиями, свободным силуэтом и яркими цветовыми сочетаниями. Он
            связан с представлениями о красоте, уважении к традиции и
            торжественности момента.
          </p>

          <p>
            У корё-сарам ханбок сохраняет значение праздничной и символической
            одежды. Его надевают на важные семейные и культурные события, где
            особенно важно подчеркнуть связь с корейским наследием и памятью
            предков.
          </p>
        </div>

        <div className="hanbok-section__image">
          <TraditionPhotoSlider photos={hanbokPhotos} title="Ханбок" />
        </div>
      </div>
    </section>
  );
}