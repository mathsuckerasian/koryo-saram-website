import { kitchenDishes } from "../../data/kitchenDishes";
import pigodi from "../../assets/kitchen/pigodi.png";
import he from "../../assets/kitchen/he.png";

const dishImages = {
  pigodi,
  hye: he,
};

export default function SignificantDishes() {
  const visibleDishes = kitchenDishes.filter((dish) => dish.id !== "kuksi");

  return (
    <section className="significant-dishes">
      <h2 className="significant-dishes__title">Значимые блюда</h2>

      <div className="significant-dishes__list">
        {visibleDishes.map((dish) => (
          <article
            key={dish.id}
            className={`dish-block dish-block--${dish.align}`}
          >
            <div className={`dish-block__decor dish-block__decor--${dish.id}`}>
              <img src={dishImages[dish.id]} alt={dish.title} />
            </div>

            <div className={`dish-block__content dish-block__content--${dish.id}`}>
              <h3>{dish.title}</h3>
              <p>{dish.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}