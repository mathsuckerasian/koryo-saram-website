import { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  pointerWithin,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import plateempty from "../../assets/kitchen/plateempty.png";
import kuksi from "../../assets/kitchen/kuksi.png";
import { ingredients, finalDish } from "../../data/dishBuilderData";

function DraggableIngredient({ ingredient, itemState }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: ingredient.id,
    });

  const style = {
    position: "absolute",
    left: `${itemState.x}px`,
    top: `${itemState.y}px`,
    width: `${ingredient.width}px`,
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 10,
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="dish-builder__floating-item"
      {...listeners}
      {...attributes}
    >
      <img src={ingredient.image} alt={ingredient.name} />
    </div>
  );
}

function PlateDropZone({ droppedIngredients, isComplete }) {
  const { setNodeRef, isOver } = useDroppable({
    id: "plate",
  });

  return (
    <div
      ref={setNodeRef}
      className={`dish-builder__plate ${isOver ? "dish-builder__plate--over" : ""}`}
    >
      <div className="dish-builder__plate-image-stack">
        <img
          src={plateempty}
          alt="Тарелка"
          className={`dish-builder__plate-image dish-builder__plate-image--empty ${
            isComplete ? "dish-builder__plate-image--hidden" : ""
          }`}
        />

        <img
          src={kuksi}
          alt="Кукси"
          className={`dish-builder__plate-image dish-builder__plate-image--filled ${
            isComplete ? "dish-builder__plate-image--visible" : ""
          }`}
        />
      </div>

      <div
        className={`dish-builder__plate-items ${
          isComplete ? "dish-builder__plate-items--hidden" : ""
        }`}
      >
        {droppedIngredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className={`dish-builder__plate-item ${ingredient.plateClass}`}
          >
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

function buildInitialState() {
  return ingredients.reduce((acc, ingredient) => {
    acc[ingredient.id] = {
      x: ingredient.x,
      y: ingredient.y,
      inPlate: false,
    };
    return acc;
  }, {});
}

export default function DishBuilder() {
  const [itemsState, setItemsState] = useState(buildInitialState);

  const droppedIngredients = ingredients.filter(
    (ingredient) => itemsState[ingredient.id].inPlate
  );

  const isComplete = droppedIngredients.length === ingredients.length;

  function handleDragEnd(event) {
    const { active, over, delta } = event;
    const id = active.id;

    setItemsState((prev) => {
      const current = prev[id];

      if (over?.id === "plate") {
        return {
          ...prev,
          [id]: {
            ...current,
            inPlate: true,
          },
        };
      }

      return {
        ...prev,
        [id]: {
          ...current,
          x: current.x + delta.x,
          y: current.y + delta.y,
          inPlate: false,
        },
      };
    });
  }

  function resetGame() {
    setItemsState(buildInitialState());
  }

  return (
    <section className="dish-builder">
      <div className="dish-builder__header">
        <h2>Собери блюдо корё-сарам</h2>
        <p>Перетаскивай ингредиенты в тарелку</p>
      </div>

      <DndContext collisionDetection={pointerWithin} onDragEnd={handleDragEnd}>
        <div className="dish-builder__workspace">
          <div
            className={`dish-builder__plate-wrapper ${
              isComplete ? "dish-builder__plate-wrapper--complete" : ""
            }`}
          >
            <PlateDropZone
              droppedIngredients={droppedIngredients}
              isComplete={isComplete}
            />
          </div>

          <div
            className={`dish-builder__complete-info ${
              isComplete ? "dish-builder__complete-info--visible" : ""
            }`}
          >
            <h3>{finalDish.title}</h3>
            <p>{finalDish.description}</p>
          </div>

          {ingredients
            .filter((ingredient) => !itemsState[ingredient.id].inPlate)
            .map((ingredient) => (
              <DraggableIngredient
                key={ingredient.id}
                ingredient={ingredient}
                itemState={itemsState[ingredient.id]}
              />
            ))}
        </div>
      </DndContext>

      <div className="dish-builder__result">
        {!isComplete && (
          <p></p>
        )}

        <button type="button" onClick={resetGame}>
          Собрать заново
        </button>
      </div>
    </section>
  );
}