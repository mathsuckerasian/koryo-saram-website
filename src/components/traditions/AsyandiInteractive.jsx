import table from "../../assets/traditions/asyandi-table.png";
import { asyandiItems } from "../../data/traditionsData.js";

export default function AsyandiInteractive() {
  return (
    <section className="asyandi-section">
      <div className="asyandi-section__header">
        <h2 className="traditions-asyandi-section-title">Определи свою судьбу</h2>
        <p>Наведи на предмет на столике асянди и узнай его значение</p>
      </div>

      <div className="asyandi-table">
        <img src={table} alt="Столик асянди" className="asyandi-table__base" />

        {asyandiItems.map((item) => (
            <div
                key={item.id}
                className="asyandi-object"
                style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    width: `${item.width}px`,
                    "--item-rotate": `${item.rotate ?? 0}deg`,
                    "--tooltip-shift-x": `${item.tooltipX ?? 0}px`,
                    "--tooltip-gap": `${item.tooltipGap ?? 18}px`,
                }}
                >
                <button type="button" className="asyandi-item">
                    <img src={item.image} alt={item.title} />
                </button>

                <article className="asyandi-tooltip">
                    <h3>{item.title}</h3>
                    <p>{item.meaning}</p>
                </article>
            </div>
        ))}
      </div>
    </section>
  );
}