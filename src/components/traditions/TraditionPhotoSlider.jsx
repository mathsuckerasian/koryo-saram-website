import { useState } from "react";

export default function TraditionPhotoSlider({ photos, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }

  function showNext() {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="tradition-slider">
      <div className="tradition-slider__image-frame">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`${title} ${index + 1}`}
            className={`tradition-slider__image ${
              index === activeIndex ? "tradition-slider__image--active" : ""
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        className="tradition-slider__button tradition-slider__button--prev"
        onClick={showPrevious}
      >
        ‹
      </button>

      <button
        type="button"
        className="tradition-slider__button tradition-slider__button--next"
        onClick={showNext}
      >
        ›
      </button>

      <div className="tradition-slider__dots">
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Фото ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}