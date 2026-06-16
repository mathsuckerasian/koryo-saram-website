import { useState } from "react";

import suitcaseClosed from "../../assets/history/suitcase_closed.png";
import suitcaseOpen from "../../assets/history/suitcase_open.png";
import mapTall from "../../assets/history/maptall.png";

import historyDecor from "../../assets/history/history_decor.png";
import flowers from "../../assets/history/FLOWERS.png";
import flowers2 from "../../assets/history/flowers2.png";

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
              alt="Чемодан с историей корё-сарам"
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

          {isOpen && (
            <div className="history-map__scroll">
              <img
                src={mapTall}
                alt="Карта маршрута истории корё-сарам"
                className="history-map__image"
              />

              {historyPoints.map((point) => (
                <button
                  key={point.id}
                  type="button"
                  className={`history-map__point ${
                    activePointId === point.id
                      ? "history-map__point--active"
                      : ""
                  }`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                  }}
                  onClick={() => setActivePointId(point.id)}
                  aria-label={point.title}
                >
                  <span>{point.label}</span>
                </button>
              ))}

              <img
                src={historyDecor}
                alt=""
                className="history-map__decor"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {isOpen && activePoint && (
          <aside className="history-map__panel" key={activePoint.id}>
            <div className="history-map__card-wrap">
              <img
                src={flowers}
                alt=""
                className="history-map__flower history-map__flower--left"
                aria-hidden="true"
              />

              <img
                src={flowers2}
                alt=""
                className="history-map__flower history-map__flower--right"
                aria-hidden="true"
              />

              <article className="history-map__card">
                <p className="history-map__years">{activePoint.years}</p>

                <h2>{activePoint.title}</h2>

                <div className="history-map__text">
                  {activePoint.text.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </div>

            {activePoint.photos && activePoint.photos.length > 0 && (
              <div
                className={`history-map__photos history-map__photos--${activePoint.photos.length}`}
              >
                {activePoint.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${activePoint.title}. Фото ${index + 1}`}
                    className="history-map__photo"
                  />
                ))}
              </div>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}