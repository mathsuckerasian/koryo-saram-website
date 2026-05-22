import { useState } from "react";
import mapImage from "../../assets/modern/map.png";
import { modernPlaces } from "../../data/modernData.js";

export default function ModernMap() {
  const [activePlaceId, setActivePlaceId] = useState(null);

  function handlePlaceClick(placeId) {
    setActivePlaceId((prev) => (prev === placeId ? null : placeId));
  }

  return (
    <section className="modern-map-section">
      <h2 className="modern-section-title">Карта современных мест</h2>

      <div className="modern-map modern-map--large">
        <div className="modern-map__image-wrap">
          <img
            src={mapImage}
            alt="Карта современных мест корё-сарам"
            className="modern-map__image"
          />

          {modernPlaces.map((place) => (
            <div
              key={place.id}
              className={`modern-map__place ${
                activePlaceId === place.id ? "modern-map__place--active" : ""
              }`}
              style={{
                left: `${place.x}%`,
                top: `${place.y}%`,
              }}
            >
              <button
                type="button"
                className="modern-map__pin"
                onClick={() => handlePlaceClick(place.id)}
              >
                <span>{place.title}</span>
              </button>

              <article className="modern-map__tooltip">
                <img src={place.image} alt={place.title} />

                <p className="modern-map__subtitle">{place.subtitle}</p>
                <h3>{place.title}</h3>
                <p>{place.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}