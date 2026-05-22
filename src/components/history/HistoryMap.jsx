import { useState } from "react";
import suitcaseClosed from "../../assets/history/suitcase_closed.png";
import suitcaseOpen from "../../assets/history/suitcase_open.png";
import mapTall from "../../assets/history/maptall.png";
import { historyPoints } from "../../data/historyPoints";

export default function HistoryMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePointId, setActivePointId] = useState("korea");

  const activePoint = historyPoints.find((point) => point.id === activePointId);

  return (
    <section className={`history-map ${isOpen ? "history-map--open" : ""}`}>
      <div className="history-map__layout">
        <div className="history-map__scene">
          <div className="history-map__suitcase-wrap">
            <img
              src={isOpen ? suitcaseOpen : suitcaseClosed}
              alt="Чемодан"
              className="history-map__suitcase"
            />

            {!isOpen && (
              <button
                type="button"
                className="history-map__start-button"
                onClick={() => setIsOpen(true)}
              >
                Начать историю
              </button>
            )}
          </div>

          <div className="history-map__scroll">
            <img
              src={mapTall}
              alt="Карта истории корё-сарам"
              className="history-map__image"
            />

            {historyPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`history-map__point history-map__point--${point.id} ${
                  activePointId === point.id ? "history-map__point--active" : ""
                }`}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                }}
                onClick={() => setActivePointId(point.id)}
              >
                <span>{point.label}</span>
              </button>
            ))}
          </div>
        </div>

        {isOpen && activePoint && (
          <article key={activePoint.id} className="history-map__card">
            <p className="history-map__years">{activePoint.years}</p>

            <h2>{activePoint.title}</h2>

            <div className="history-map__text">
              {activePoint.text.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {activePoint.photos && activePoint.photos.length > 0 && (
              <div
                className={`history-map__photos ${
                  activePoint.photos.length === 1 ? "history-map__photos--single" : ""
                }`}
              >
                {activePoint.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${activePoint.title} ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </article>
        )}
      </div>
    </section>
  );
}