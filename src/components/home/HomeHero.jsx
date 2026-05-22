import { Link } from "react-router-dom";
import { useState } from "react";
import { homeItems } from "../../data/homeItems";
import { homeDecor } from "../../data/homeDecor";
import "./HomeHero.css";

export default function HomeHero() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="home-hero">
      <div className="home-hero__center">
        <Link
          to="/about"
          className="home-hero__knot-wrap"
          onMouseEnter={() => setActiveItem("about")}
          onMouseLeave={() => setActiveItem(null)}
        >
          <img
            src={homeItems.find((item) => item.id === "about")?.image}
            alt="Об авторе"
            className="home-hero__knot"
          />

          {activeItem === "about" && (
            <span className="home-hero__knot-label">Об авторе</span>
          )}
        </Link>

        <h1 className="home-hero__title">Корё-сарам</h1>

        <p className="home-hero__text">
          История людей, которые, оказавшись далеко от своей родины, сумели
          сохранить традиции, память о корнях и особый уклад жизни
        </p>
      </div>

      {homeDecor.map((item) => (
        <div key={item.id} className={`home-hero__decor ${item.className}`}>
          <img src={item.image} alt="" />
        </div>
      ))}

      {homeItems
        .filter((item) => item.id !== "about")
        .map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`home-hero__item ${item.className}`}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <img src={item.image} alt={item.title} />
            {activeItem === item.id && (
              <span className={`home-hero__label label-${item.id}`}>{item.title}</span>
            )}
          </Link>
        ))}
    </section>
  );
}