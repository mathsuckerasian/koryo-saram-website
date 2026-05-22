import { Fragment, useRef, useState } from "react";
import { modernPeople } from "../../data/modernData.js";

export default function ModernPeople() {
  const [activePersonId, setActivePersonId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);

  const activePerson = modernPeople.find(
    (person) => person.id === activePersonId
  );

  function handlePersonClick(personId) {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    // если нажали на уже открытую фотку — плавно закрываем
    if (activePersonId === personId && !isClosing) {
      setIsClosing(true);

      closeTimerRef.current = setTimeout(() => {
        setActivePersonId(null);
        setIsClosing(false);
      }, 650);

      return;
    }

    // если нажали на другую фотку — сразу открываем новый блок
    setIsClosing(false);
    setActivePersonId(personId);
  }

  function renderInfoPanel(person) {
    return (
      <article
        key={`panel-${person.id}`}
        className={`modern-person-panel-inline ${
          isClosing ? "modern-person-panel-inline--closing" : ""
        }`}
      >
        <div className="modern-person-panel-inline__content">
          <h3>{person.name}</h3>
          <span>{person.role}</span>
          <p>{person.text}</p>
        </div>
      </article>
    );
  }

  return (
    <section className="modern-people-section">
      <h2 className="modern-section-title-people">Известные корё-сарам</h2>

      <div className="modern-people-track">
        {modernPeople.map((person) => (
          <Fragment key={person.id}>
            {activePersonId === person.id && activePerson
              ? renderInfoPanel(activePerson)
              : null}

            <button
              type="button"
              className={`modern-person ${
                activePersonId === person.id && !isClosing
                  ? "modern-person--active"
                  : ""
              }`}
              onClick={() => handlePersonClick(person.id)}
            >
              <img src={person.image} alt={person.name} />
              <span>{person.name}</span>
            </button>
          </Fragment>
        ))}
      </div>
    </section>
  );
}