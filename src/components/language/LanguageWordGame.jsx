import { useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { wordCards, completedWords } from "../../data/languageWords.js";

const MERGE_DISTANCE = 170;

function getDistance(first, second) {
  const dx = first.x - second.x;
  const dy = first.y - second.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function DraggableWordCard({ card, position }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: card.id,
    });

  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 5,
  };

  return (
    <button
      ref={setNodeRef}
      type="button"
      className="language-game__card"
      style={style}
      {...listeners}
      {...attributes}
    >
      <span className="language-game__hangul">{card.hangul}</span>
      <span className="language-game__sound">{card.sound}</span>
    </button>
  );
}

function DraggableCompletedCard({ word }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `completed-${word.wordId}`,
    });

  const style = {
    left: `${word.position.x}px`,
    top: `${word.position.y}px`,
    transform: `${CSS.Translate.toString(transform) || ""} translate(-50%, -50%)`,
    zIndex: isDragging ? 120 : 20,
  };

  return (
    <article
      ref={setNodeRef}
      className="language-game__completed-card"
      style={style}
      {...listeners}
      {...attributes}
    >
      <span className="language-game__completed-hangul">{word.title}</span>
      <span className="language-game__completed-sound">{word.sound}</span>
      <p>{word.meaning}</p>
    </article>
  );
}

export default function LanguageWordGame() {
  function buildInitialPositions() {
    return wordCards.reduce((acc, card) => {
      acc[card.id] = {
        x: card.x,
        y: card.y,
      };
      return acc;
    }, {});
  }

  const [positions, setPositions] = useState(buildInitialPositions);
  const [mergedWordIds, setMergedWordIds] = useState([]);
  const [completedPositions, setCompletedPositions] = useState({});

  const visibleCards = wordCards.filter(
    (card) => !mergedWordIds.includes(card.wordId)
  );

  const completedList = mergedWordIds.map((wordId) => ({
    wordId,
    ...completedWords[wordId],
    position: completedPositions[wordId],
  }));

  function handleDragEnd(event) {
    const { active, delta } = event;
    const activeId = active.id;

    if (String(activeId).startsWith("completed-")) {
      const wordId = String(activeId).replace("completed-", "");

      setCompletedPositions((prev) => ({
        ...prev,
        [wordId]: {
          x: prev[wordId].x + delta.x,
          y: prev[wordId].y + delta.y,
        },
      }));

      return;
    }

    const activeCard = wordCards.find((card) => card.id === activeId);
    if (!activeCard) return;

    const newActivePosition = {
      x: positions[activeId].x + delta.x,
      y: positions[activeId].y + delta.y,
    };

    const pairCard = wordCards.find(
      (card) =>
        card.wordId === activeCard.wordId &&
        card.id !== activeCard.id &&
        !mergedWordIds.includes(card.wordId)
    );

    if (!pairCard) {
      setPositions((prev) => ({
        ...prev,
        [activeId]: newActivePosition,
      }));
      return;
    }

    const pairPosition = positions[pairCard.id];
    const distance = getDistance(newActivePosition, pairPosition);

    if (distance < MERGE_DISTANCE) {
      const mergedX = (newActivePosition.x + pairPosition.x) / 2;
      const mergedY = (newActivePosition.y + pairPosition.y) / 2;

      setPositions((prev) => ({
        ...prev,
        [activeId]: newActivePosition,
      }));

      setMergedWordIds((prev) => [...prev, activeCard.wordId]);

      setCompletedPositions((prev) => ({
        ...prev,
        [activeCard.wordId]: {
          x: mergedX,
          y: mergedY,
        },
      }));

      return;
    }

    setPositions((prev) => ({
      ...prev,
      [activeId]: newActivePosition,
    }));
  }

  function resetGame() {
    setPositions(buildInitialPositions());
    setMergedWordIds([]);
    setCompletedPositions({});
  }

  return (
    <section className="language-game">
      <div className="language-game__header">
        <h2 className="language-section-title-game">Собери слово</h2>
        <p>
          Перетаскивай карточки по странице. Если две части одного слова
          окажутся рядом, они соединятся в одну карточку.
        </p>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="language-game__table">
          {visibleCards.map((card) => (
            <DraggableWordCard
              key={card.id}
              card={card}
              position={positions[card.id]}
            />
          ))}

          {completedList.map((word) => (
            <DraggableCompletedCard key={word.wordId} word={word} />
          ))}
        </div>
      </DndContext>

      <button type="button" className="language-game__reset" onClick={resetGame}>
        Собрать заново
      </button>
    </section>
  );
}