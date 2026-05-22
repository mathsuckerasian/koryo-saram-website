import { useEffect, useState } from "react";
import { months, daysInMonth, holidays } from "../../data/holidaysData.js";

export default function HolidaysCalendar() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeHolidayId, setActiveHolidayId] = useState(null);

  const monthHolidays = holidays.filter((holiday) => {
    const hasExactDate = holiday.month === activeMonth;
    const hasRange = holiday.ranges?.some((range) => range.month === activeMonth);

    return hasExactDate || hasRange;
  });

  useEffect(() => {
    if (monthHolidays.length > 0) {
      setActiveHolidayId(monthHolidays[0].id);
    } else {
      setActiveHolidayId(null);
    }
  }, [activeMonth]);

  const activeHoliday =
    monthHolidays.find((holiday) => holiday.id === activeHolidayId) || null;

  function showPreviousMonth() {
    setActiveMonth((prev) => (prev === 0 ? 11 : prev - 1));
  }

  function showNextMonth() {
    setActiveMonth((prev) => (prev === 11 ? 0 : prev + 1));
  }

  function selectHoliday(holiday) {
    setActiveHolidayId(holiday.id);
  }

  function getRangeHoliday(day) {
    return monthHolidays.find((holiday) =>
      holiday.ranges?.some(
        (range) =>
          range.month === activeMonth && day >= range.start && day <= range.end
      )
    );
  }

  const days = Array.from({ length: daysInMonth[activeMonth] }, (_, index) => {
    const day = index + 1;

    const exactHolidays = monthHolidays.filter(
      (holiday) => holiday.month === activeMonth && holiday.day === day
    );

    const rangeHoliday = getRangeHoliday(day);

    return {
      day,
      exactHolidays,
      rangeHoliday,
    };
  });

  return (
    <section className="holidays-calendar-section">
      <h2 className="holidays-section-title">Календарь праздников</h2>

      <div className="holidays-calendar">
        <div className="holidays-calendar__left">
          <div className="holidays-calendar__top">
            <button type="button" onClick={showPreviousMonth}>
              ‹
            </button>

            <h3>{months[activeMonth]}</h3>

            <button type="button" onClick={showNextMonth}>
              ›
            </button>
          </div>

          <div className="holidays-calendar__grid">
            {days.map((item) => {
              const hasExact = item.exactHolidays.length > 0;
              const hasRange = Boolean(item.rangeHoliday);

              return (
                <div
                key={item.day}
                className={`holidays-calendar__day ${
                    hasExact ? "holidays-calendar__day--event" : ""
                } ${hasRange ? "holidays-calendar__day--range" : ""}`}
                style={
                    hasRange
                    ? {
                        backgroundColor: "#dfe6ff",
                        }
                    : undefined
                }
                onClick={() => {
                    if (hasRange) selectHoliday(item.rangeHoliday);
                }}
                >
                  <span>{item.day}</span>

                  {item.exactHolidays.map((holiday) => (
                    <button
                      key={holiday.id}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        selectHoliday(holiday);
                      }}
                    >
                      {holiday.title}
                    </button>
                  ))}

                  {hasRange && item.day === item.rangeHoliday.ranges.find(
                    (range) => range.month === activeMonth
                  )?.start && (
                    <button
                      type="button"
                      className="holidays-calendar__range-label"
                      onClick={(event) => {
                        event.stopPropagation();
                        selectHoliday(item.rangeHoliday);
                      }}
                    >
                      {item.rangeHoliday.title}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {activeHoliday ? (
          <article key={activeHoliday.id} className="holidays-calendar__info">
            <p>{activeHoliday.dateLabel}</p>

            {activeHoliday.isFloating && (
                <p className="holidays-calendar__note">
                Дата меняется каждый год, так как праздник зависит от лунного календаря.
                </p>
            )}

            <h3>{activeHoliday.title}</h3>
            <span>{activeHoliday.short}</span>
            <div>{activeHoliday.text}</div>
            </article>
        ) : (
          <article className="holidays-calendar__info holidays-calendar__info--empty">
            <p>{months[activeMonth]}</p>
            <h3>Нет даты</h3>
            <span>В этом месяце нет праздников</span>
            <div>
              Листай календарь дальше, чтобы увидеть традиционные, семейные и
              памятные даты корё-сарам.
            </div>
          </article>
        )}
      </div>
    </section>
  );
}